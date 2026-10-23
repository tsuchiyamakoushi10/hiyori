import { site } from "@/content/site";

type Mail = { subject: string; text: string; replyTo?: string };
type Submission = {
  /** 保存先のシート名 */
  sheet: string;
  /** スプレッドシートに1行で保存する項目（空欄も列をそろえるため含める） */
  fields: [string, string | undefined][];
  /** 事業所への通知（宛先はGoogle側の設定で決める） */
  notify: Mail;
  /** 入力者への自動返信 */
  autoReply?: Mail & { to: string };
};

/**
 * Google Apps Script に送る。Google側でスプレッドシートへの保存・通知・自動返信を行う。
 * 中身は docs/forms/apps-script.gs、設定手順は docs/forms/README.md
 */
export async function submitToGoogle({ sheet, fields, notify, autoReply }: Submission) {
  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secret) throw new Error("GOOGLE_SCRIPT_URL / GOOGLE_SCRIPT_SECRET が設定されていません");
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      secret,
      sheet,
      fields: fields.map(([label, value]) => [label, value ?? ""]),
      notify,
      autoReply,
    }),
    redirect: "follow",
    signal: AbortSignal.timeout(20_000),
  });
  const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!res.ok || !result?.ok) throw new Error(`Google Apps Script: ${result?.error ?? res.status}`);
}

/** 「項目：値」の本文を作る。空の項目は省く */
export function formatBody(rows: [string, string | undefined][]) {
  return rows
    .filter(([, v]) => v)
    .map(([k, v]) => `■${k}\n${v}`)
    .join("\n\n");
}

export const signature = [
  "",
  "──────────────────",
  site.name,
  `〒${site.postalCode} ${site.address}`,
  `TEL ${site.tel}／FAX ${site.fax}`,
  `受付 ${site.hours}`,
  "──────────────────",
  "※このメールは自動でお送りしています。",
].join("\n");

// 同一IPから60秒以内の再送を拒否する（インスタンスごとのメモリで判定する簡易版）。
// 送信に成功したときだけ記録するので、失敗後の再送は止めない。
const lastSent = new Map<string, number>();
const WINDOW_MS = 60_000;

export function isTooFrequent(ip: string) {
  const prev = lastSent.get(ip);
  return prev !== undefined && Date.now() - prev < WINDOW_MS;
}

export function markSent(ip: string) {
  const now = Date.now();
  lastSent.set(ip, now);
  if (lastSent.size > 5000) {
    for (const [k, t] of lastSent) if (now - t > WINDOW_MS) lastSent.delete(k);
  }
}

/**
 * ほかのサイトからの送信を断る。ブラウザは送信元を Origin ヘッダーに付けるので、
 * 自サイトのホストと一致しないものは受け付けない。
 */
export function isAllowedRequest(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return false;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

export function clientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
}
