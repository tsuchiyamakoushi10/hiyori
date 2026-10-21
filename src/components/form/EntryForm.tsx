"use client";

import Link from "next/link";
import { entryPage as p } from "@/content/forms";
import { entrySchema } from "@/lib/schema";
import { AgreeField, ChoiceField, Honeypot, TextArea, TextField } from "./Fields";
import { SubmitButton } from "./SubmitButton";
import { useFormSubmit } from "./useFormSubmit";

export function EntryForm() {
  const { errors, message, sending, onSubmit } = useFormSubmit({
    schema: entrySchema,
    endpoint: "/api/entry",
    thanksPath: "/entry/thanks",
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-8">
      <Honeypot />
      <ChoiceField name="wish" label="ご希望" required options={p.wishes} error={errors.wish} />
      <ChoiceField name="job" label="希望職種" required options={p.jobs} error={errors.job} />
      <ChoiceField name="employment" label="雇用形態" required options={p.employment} error={errors.employment} />
      <div className="grid gap-8 sm:grid-cols-2">
        <TextField name="name" label="お名前" required autoComplete="name" error={errors.name} />
        <TextField name="kana" label="ふりがな" required error={errors.kana} />
      </div>
      <div className="sm:w-1/2">
        <TextField name="age" label="年齢" error={errors.age} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <TextField name="tel" label="電話番号" type="tel" required autoComplete="tel" error={errors.tel} />
        <TextField name="email" label="メールアドレス" type="email" required autoComplete="email" error={errors.email} />
      </div>
      <ChoiceField name="experience" label="訪問看護の経験" options={p.experience} error={errors.experience} />
      <TextArea name="career" label="経験年数・経歴" rows={4} error={errors.career} />
      <TextField name="contactTime" label="ご希望の連絡方法・時間帯" placeholder="例：平日18時以降に電話" error={errors.contactTime} />
      <TextArea name="message" label="ご質問など" rows={4} error={errors.message} />
      <AgreeField error={errors.agree}>
        <Link href="/privacy" target="_blank" className="underline underline-offset-4">
          プライバシーポリシー
        </Link>
        に同意する
      </AgreeField>
      <SubmitButton sending={sending} message={message} label="エントリーする" />
    </form>
  );
}
