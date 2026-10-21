"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { ZodType } from "zod";
import { toFieldErrors } from "@/lib/schema";

// フォームの値を集めて zod で確認 → API に送る → 完了ページへ
export function useFormSubmit({ schema, endpoint, thanksPath }: { schema: ZodType; endpoint: string; thanksPath: string }) {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const focusFirstError = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => document.getElementById(`f-${first}`)?.focus());
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const values: Record<string, unknown> = {};
    for (const [k, v] of fd.entries()) values[k] = typeof v === "string" ? v : "";
    values.agree = fd.get("agree") === "on";

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs = toFieldErrors(parsed.error);
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: Record<string, string>; message?: string };
      if (res.ok && data.ok) {
        router.push(thanksPath);
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        focusFirstError(data.errors);
      }
      setMessage(data.message ?? "入力内容をご確認ください。");
    } catch {
      setMessage("通信に失敗しました。時間をおいてもう一度お試しいただくか、お電話でご連絡ください。");
    }
    setSending(false);
  };

  return { errors, message, sending, onSubmit };
}
