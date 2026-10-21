import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "訪問看護ステーション陽和（ひより）を運営する株式会社uniqueの個人情報の取り扱いについて。",
  alternates: { canonical: "/privacy" },
};

// TODO【要確認】標準文面。クライアント確認のうえ確定する
const sections: { title: string; body: string[] }[] = [
  {
    title: "1. 基本方針",
    body: [
      `${site.operatorShort}（以下「当社」）は、${site.name}の運営にあたり、ご利用者さま・ご家族さま、関係機関の方、求職者の方からお預かりする個人情報の重要性を認識し、個人情報の保護に関する法律その他の関係法令を守り、適切に取り扱います。`,
    ],
  },
  {
    title: "2. 取得する情報と利用目的",
    body: [
      "当ウェブサイトのお問い合わせフォーム・採用エントリーフォームでは、お名前、ふりがな、電話番号、メールアドレス、ご所属、ご相談内容などをお預かりします。",
      "お預かりした個人情報は、次の目的の範囲内で利用します。",
      "・お問い合わせ、ご相談への回答とご連絡",
      "・採用選考、見学のご案内とご連絡",
      "・上記に付随する業務",
    ],
  },
  {
    title: "3. 第三者への提供",
    body: ["法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。"],
  },
  {
    title: "4. 管理体制",
    body: [
      "個人情報への不正アクセス、紛失、破損、改ざん、漏えいを防ぐため、必要かつ適切な安全管理措置を講じます。また、取り扱う従業者に対して必要な教育・監督を行います。",
      "フォームからの送信内容は、メール送信サービスを通じて当社へ届けられます。業務の一部を外部に委託する場合は、委託先を適切に監督します。",
    ],
  },
  {
    title: "5. 開示・訂正・削除のご請求",
    body: ["ご本人から個人情報の開示、訂正、利用停止、削除のご請求があった場合は、ご本人であることを確認したうえで、法令に従い速やかに対応します。下記の窓口までご連絡ください。"],
  },
  {
    title: "6. アクセス解析について",
    body: ["当ウェブサイトでは、サイトの改善のためにアクセス情報を利用する場合があります。これらの情報には、個人を特定する情報は含まれません。"],
  },
  {
    title: "7. 改定",
    body: ["本ポリシーの内容は、法令の改正などに応じて、予告なく変更することがあります。変更後の内容は、当ウェブサイトに掲載した時点から効力を生じます。"],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero en="Privacy Policy" title="プライバシーポリシー" path="/privacy" />
      <section className="section-pad pt-4!">
        <div className="container-site max-w-[880px]! space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="heading-3 border-b border-line pb-3">{s.title}</h2>
              <div className="mt-4 space-y-2 text-[14px]">
                {s.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="rounded-[20px] bg-paper px-6 py-7 sm:px-9">
            <h2 className="heading-3">お問い合わせ窓口</h2>
            <p className="mt-3 text-[14px]">
              {site.operatorShort}　{site.name}
              <br />
              〒{site.postalCode} {site.address}
              <br />
              TEL {site.tel}（{site.hoursShort}）
            </p>
          </div>
          <p className="text-right text-[13px] text-brown">制定日：2026年11月1日</p>
        </div>
      </section>
    </>
  );
}
