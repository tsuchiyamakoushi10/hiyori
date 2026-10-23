import { clientIp, isAllowedRequest, formatBody, isTooFrequent, markSent, debugDetail, signature, submitToGoogle } from "@/lib/mail";
import { contactSchema, toFieldErrors } from "@/lib/schema";

export async function POST(request: Request) {
  if (!isAllowedRequest(request)) {
    return Response.json({ ok: false, message: "送信内容を読み取れませんでした" }, { status: 403 });
  }
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, message: "送信内容を読み取れませんでした" }, { status: 400 });
  }

  // ハニーポットに入力があればボット。成功したふりをして何もしない
  if ((body as { website?: string }).website) return Response.json({ ok: true });

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, errors: toFieldErrors(parsed.error) }, { status: 400 });
  }

  const ip = clientIp(request.headers);
  if (isTooFrequent(ip)) {
    return Response.json(
      { ok: false, message: "短い時間に続けて送信されました。1分ほど空けてから、もう一度お試しください。" },
      { status: 429 },
    );
  }

  const v = parsed.data;
  const fields: [string, string | undefined][] = [
    ["ご関係", v.relation],
    ["お名前", v.name],
    ["ふりがな", v.kana],
    ["ご所属", v.organization],
    ["電話番号", v.tel],
    ["メールアドレス", v.email],
    ["ご希望の連絡方法", v.method],
    ["ご相談内容", v.message],
  ];
  const detail = formatBody(fields);
  // 入力者への控えには、選択肢の項目だけを載せる（自由記入欄を他人宛ての迷惑メールに悪用させないため）
  const replyDetail = formatBody([
    ["ご関係", v.relation],
    ["ご希望の連絡方法", v.method],
  ]);

  try {
    await submitToGoogle({
      sheet: "お問い合わせ",
      fields,
      notify: {
        subject: `【HP問い合わせ】${v.relation}｜${v.name}様`,
        text: `ホームページからお問い合わせがありました。\n\n${detail}`,
        replyTo: v.email || undefined,
      },
      autoReply: v.email
        ? {
            to: v.email,
            subject: "【訪問看護ステーション陽和】お問い合わせを受け付けました",
            text: `${v.name}様\n\nお問い合わせいただき、ありがとうございます。\n以下の内容で受け付けました。担当者よりご連絡いたします。\n\n${replyDetail}\n${signature}`,
          }
        : undefined,
    });
  } catch (e) {
    console.error(e);
    return Response.json(
      { ok: false, message: `送信できませんでした。お手数ですが、お電話（048-871-5511）でご連絡ください。${debugDetail(e)}` },
      { status: 500 },
    );
  }

  markSent(ip);
  return Response.json({ ok: true });
}
