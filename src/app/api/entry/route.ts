import { clientIp, formatBody, isTooFrequent, markSent, sendMail, signature } from "@/lib/mail";
import { entrySchema, toFieldErrors } from "@/lib/schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, message: "送信内容を読み取れませんでした" }, { status: 400 });
  }

  // ハニーポットに入力があればボット。成功したふりをして何もしない
  if ((body as { website?: string }).website) return Response.json({ ok: true });

  const parsed = entrySchema.safeParse(body);
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
  const detail = formatBody([
    ["ご希望", v.wish],
    ["希望職種", v.job],
    ["雇用形態", v.employment],
    ["お名前", v.name],
    ["ふりがな", v.kana],
    ["年齢", v.age],
    ["電話番号", v.tel],
    ["メールアドレス", v.email],
    ["訪問看護の経験", v.experience],
    ["経験年数・経歴", v.career],
    ["ご希望の連絡方法・時間帯", v.contactTime],
    ["ご質問など", v.message],
  ]);

  try {
    await sendMail({
      to: process.env.MAIL_TO_ENTRY ?? "",
      subject: `【採用エントリー】${v.job}・${v.wish}｜${v.name}様`,
      text: `ホームページから採用エントリーがありました。\n\n${detail}`,
      replyTo: v.email,
    });
    await sendMail({
      to: v.email,
      subject: "【訪問看護ステーション陽和】エントリーを受け付けました",
      text: `${v.name}様\n\n陽和にご関心をお寄せいただき、ありがとうございます。\n以下の内容で受け付けました。担当者よりご連絡いたします。\n\n${detail}\n${signature}`,
    });
  } catch (e) {
    console.error(e);
    return Response.json(
      { ok: false, message: "送信できませんでした。お手数ですが、お電話（048-871-5511）でご連絡ください。" },
      { status: 500 },
    );
  }

  markSent(ip);
  return Response.json({ ok: true });
}
