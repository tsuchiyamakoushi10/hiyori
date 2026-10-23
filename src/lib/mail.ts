import { Resend } from "resend";
import { site } from "@/content/site";

type Mail = { to: string; subject: string; text: string; replyTo?: string };

export async function sendMail({ to, subject, text, replyTo }: Mail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  if (!apiKey || !from) throw new Error("RESEND_API_KEY / MAIL_FROM が設定されていません");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, text, replyTo });
  if (error) throw new Error(`Resend: ${error.message}`);
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
  "※このメールは送信専用です。ご返信いただいてもお答えできません。",
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
