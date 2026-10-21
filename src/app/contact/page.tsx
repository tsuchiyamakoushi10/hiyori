import type { Metadata } from "next";
import { ContactForm } from "@/components/form/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { contactPage as p } from "@/content/forms";
import { site, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "訪問看護ステーション陽和（ひより）へのご相談・お問い合わせ。お電話 048-871-5511（平日9:00〜18:00）、FAX 048-871-8181、フォームで受け付けています。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/contact"
        photo={{ src: "/images/photos/facility-consult-room.webp", alt: "丸テーブルとオレンジの椅子がある、落ち着いた相談室" }}
      >
        {p.lead}
      </PageHero>
      <section className="section-pad pt-4!">
        <div className="container-site max-w-[880px]!">
          {/* 電話のほうが早い人向けに、先に電話・FAXを案内 */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={telHref(site.tel)} className="rounded-[20px] bg-brown px-6 py-6 text-white">
              <p className="flex items-center gap-2 text-[13px] opacity-90">
                <Icon name="tel" className="size-5" />
                お電話でのご相談
              </p>
              <p className="mt-2 font-en text-[34px] leading-none italic">{site.tel}</p>
              <p className="mt-2 text-[12px] opacity-90">受付時間 {site.hoursShort}</p>
            </a>
            <div className="rounded-[20px] border border-line bg-paper px-6 py-6">
              <p className="flex items-center gap-2 text-[13px] text-brown">
                <Icon name="fax" className="size-5" />
                FAX
              </p>
              <p className="mt-2 font-en text-[34px] leading-none text-brown italic">{site.fax}</p>
              <p className="mt-2 text-[12px] text-brown">{p.faxNote}</p>
            </div>
          </div>

          <div className="mt-14 rounded-[24px] border border-line bg-paper px-5 py-10 sm:px-12 sm:py-12">
            <h2 className="heading-3 mb-8 text-center">フォームでのお問い合わせ</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
