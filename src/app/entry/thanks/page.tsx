import type { Metadata } from "next";
import { ThanksPage } from "@/components/ui/ThanksPage";
import { entryPage } from "@/content/forms";

export const metadata: Metadata = {
  title: "エントリー完了",
  robots: { index: false },
};

export default function EntryThanks() {
  return <ThanksPage en="Thank you" title="エントリーが完了しました" message={entryPage.thanks} back={{ href: "/recruit", label: "採用情報へ戻る" }} />;
}
