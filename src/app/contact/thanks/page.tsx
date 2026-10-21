import type { Metadata } from "next";
import { ThanksPage } from "@/components/ui/ThanksPage";
import { contactPage } from "@/content/forms";

export const metadata: Metadata = {
  title: "送信完了",
  robots: { index: false },
};

export default function ContactThanks() {
  return <ThanksPage en="Thank you" title="送信が完了しました" message={contactPage.thanks} back={{ href: "/", label: "トップへ戻る" }} />;
}
