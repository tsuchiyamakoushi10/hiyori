import { ThanksPage } from "@/components/ui/ThanksPage";

export default function NotFound() {
  return (
    <ThanksPage
      en="Not Found"
      title="ページが見つかりませんでした"
      message="お探しのページは移動したか、削除された可能性があります。"
      back={{ href: "/", label: "トップへ戻る" }}
    />
  );
}
