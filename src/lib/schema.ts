import { z } from "zod";
import { contactPage, entryPage } from "@/content/forms";

// クライアント・サーバーの両方で使う入力チェック

const required = (label: string) => z.string({ error: `${label}を入力してください` }).trim().min(1, `${label}を入力してください`);
const optional = z.string().trim().max(2000).optional().default("");
const tel = z
  .string({ error: "電話番号を入力してください" })
  .trim()
  .min(1, "電話番号を入力してください")
  .regex(/^[0-9０-９\-－ー() ]{10,15}$/, "電話番号の形式をご確認ください");
const email = z.string().trim().email("メールアドレスの形式をご確認ください");
const agree = z.literal(true, { error: "プライバシーポリシーへの同意が必要です" });
const pick = <T extends readonly [string, ...string[]]>(values: T, label: string) =>
  z.enum(values, { error: `${label}を選んでください` });

// ハニーポット：人には見えない項目。入力があればボット
const honeypot = { website: z.string().max(0).optional().default("") };

export const contactSchema = z
  .object({
    relation: pick(contactPage.relations, "ご関係"),
    name: required("お名前").max(50),
    kana: optional,
    organization: optional,
    tel,
    email: z.union([z.literal(""), email]).optional().default(""),
    method: z.enum(contactPage.contactMethods).optional(),
    message: required("ご相談内容").max(2000),
    agree,
    ...honeypot,
  })
  .refine((v) => v.method !== "メール" || v.email !== "", {
    path: ["email"],
    message: "メールでの連絡をご希望の場合は、メールアドレスを入力してください",
  });

export const entrySchema = z.object({
  wish: pick(entryPage.wishes, "ご希望"),
  job: pick(entryPage.jobs, "希望職種"),
  employment: pick(entryPage.employment, "雇用形態"),
  name: required("お名前").max(50),
  kana: required("ふりがな").max(50),
  age: optional,
  tel,
  email: z.string({ error: "メールアドレスを入力してください" }).trim().min(1, "メールアドレスを入力してください").pipe(email),
  experience: z.enum(entryPage.experience).optional(),
  career: optional,
  contactTime: optional,
  message: optional,
  agree,
  ...honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type EntryInput = z.infer<typeof entrySchema>;

/** zod のエラーを { 項目名: メッセージ } にする */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
