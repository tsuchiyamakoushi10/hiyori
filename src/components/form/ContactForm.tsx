"use client";

import Link from "next/link";
import { useState } from "react";
import { contactPage as p } from "@/content/forms";
import { contactSchema } from "@/lib/schema";
import { AgreeField, ChoiceField, Honeypot, TextArea, TextField } from "./Fields";
import { SubmitButton } from "./SubmitButton";
import { useFormSubmit } from "./useFormSubmit";

export function ContactForm() {
  const { errors, message, sending, onSubmit } = useFormSubmit({
    schema: contactSchema,
    endpoint: "/api/contact",
    thanksPath: "/contact/thanks",
  });
  const [relation, setRelation] = useState("");
  const showOrganization = p.proRelations.includes(relation);

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-8">
      <Honeypot />
      <ChoiceField name="relation" label="ご関係" required options={p.relations} error={errors.relation} onChange={setRelation} />
      <TextField name="name" label="お名前" required autoComplete="name" error={errors.name} />
      <TextField name="kana" label="ふりがな" error={errors.kana} />
      {showOrganization && (
        <TextField name="organization" label="ご所属（病院・事業所名）" autoComplete="organization" error={errors.organization} />
      )}
      <TextField name="tel" label="電話番号" type="tel" required autoComplete="tel" placeholder="048-000-0000" error={errors.tel} />
      <TextField name="email" label="メールアドレス" type="email" autoComplete="email" hint="ご入力いただくと、受付の確認メールをお送りします。" error={errors.email} />
      <ChoiceField name="method" label="ご希望の連絡方法" options={p.contactMethods} error={errors.method} />
      <TextArea name="message" label="ご相談内容" required error={errors.message} />
      <AgreeField error={errors.agree}>
        <Link href="/privacy" target="_blank" className="underline underline-offset-4">
          プライバシーポリシー
        </Link>
        に同意する
      </AgreeField>
      <SubmitButton sending={sending} message={message} />
    </form>
  );
}
