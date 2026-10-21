import type { Metadata } from "next";
import { EntryForm } from "@/components/form/EntryForm";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { entryPage as p } from "@/content/forms";
import { recruitPage } from "@/content/recruit";
import { site, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: "採用エントリー",
  description: "訪問看護ステーション陽和（ひより）の採用エントリー・見学のお申し込み。看護師・理学療法士・作業療法士。見学だけ、お話を聞くだけでも大歓迎です。",
  alternates: { canonical: "/entry" },
};

export default function EntryPage() {
  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/entry"
        photo={{ src: "/images/photos/facility-staffroom.webp", alt: "木のテーブルと観葉植物のある、陽和のスタッフルーム" }}
      >
        {p.lead}
      </PageHero>
      <section className="section-pad pt-4!">
        <div className="container-site max-w-[880px]!">
          <a href={telHref(site.tel)} className="flex flex-col gap-2 rounded-[20px] bg-brown px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2 text-[13px] opacity-90">
              <Icon name="tel" className="size-5" />
              お電話でのお問い合わせ（{site.hoursShort}）
            </span>
            <span className="font-en text-[32px] leading-none italic">{site.tel}</span>
          </a>
          <p className="mt-4 text-[13px] text-brown">※{recruitPage.stepsNote}</p>

          <div className="mt-12 rounded-[24px] border border-line bg-paper px-5 py-10 sm:px-12 sm:py-12">
            <EntryForm />
          </div>
        </div>
      </section>
    </>
  );
}
