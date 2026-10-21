import type { Metadata } from "next";
import Image from "next/image";
import { RecruitCta } from "@/components/sections/recruit/RecruitCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { staffList, staffPage as p, workplaceData, type Staff } from "@/content/staff";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description: "訪問看護ステーション陽和（ひより）のスタッフ紹介。訪問看護が大好きな看護師が集まっています。",
  alternates: { canonical: "/staff" },
};

export default function StaffPage() {
  // 1名なら横長の大きいカード、2名以上でグリッド
  const single = staffList.length === 1;

  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/staff"
        photo={{ src: "/images/photos/staff-duo.webp", alt: "社用車の前に並ぶ、陽和のスタッフ2名", position: "55% 40%" }}
      >
        {p.lead}
      </PageHero>

      <section className="pb-4">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 rounded-[20px] bg-paper px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="max-w-[32em] text-brown">{p.atmosphere}</p>
            <dl className="flex shrink-0 gap-8">
              {workplaceData.map((d) => (
                <div key={d.label}>
                  <dt className="text-[12px] text-brown">{d.label}</dt>
                  <dd className="font-serif text-[18px] tracking-[0.06em]">{d.value}</dd>
                  <dd className="text-[11px] text-[#7f7268]">{d.note}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className={`container-site grid gap-6 ${single ? "" : "lg:grid-cols-2"}`}>
          {staffList.map((s) => (
            <StaffCard key={s.id} staff={s} wide={single} />
          ))}
        </div>
      </section>

      <RecruitCta />
    </>
  );
}

function StaffCard({ staff: s, wide }: { staff: Staff; wide: boolean }) {
  return (
    <Reveal as="article" className="overflow-hidden rounded-[24px] border border-line bg-paper">
      <div className={`grid ${wide ? "lg:grid-cols-[420px_1fr]" : ""}`}>
        <div className={`relative aspect-[4/3] bg-bg2 ${wide ? "lg:aspect-auto lg:min-h-[420px]" : ""}`}>
          <Image
            src={s.photo.src}
            alt={s.photo.alt}
            fill
            sizes={wide ? "(min-width: 1024px) 420px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
            className="object-cover"
            style={{ objectPosition: s.photo.position }}
          />
        </div>
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <p className="font-serif text-[20px] leading-[1.7] tracking-[0.08em] text-brown sm:text-[24px]">{s.copy}</p>
          <h2 className="mt-6 flex flex-wrap items-baseline gap-x-4">
            <span className="font-serif text-[22px] tracking-[0.14em]">{s.name}</span>
            <span className="text-[13px] text-brown">{s.role}</span>
          </h2>
          <p className="mt-1 text-[13px] text-[#7f7268]">入社：{s.joined}</p>
          <p className="mt-4 text-[14px] text-brown">{s.career}</p>

          {/* Q&A全文はページ内で展開 */}
          <details className="group mt-8 border-t border-line pt-6">
            <summary className="btn inline-flex min-h-11 cursor-pointer list-none items-center gap-4 rounded-full border border-brown px-6 text-[13px] tracking-[0.1em] text-brown [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">インタビューを読む</span>
              <span className="hidden group-open:inline">閉じる</span>
              <span aria-hidden="true" className="relative size-3">
                <span className="absolute top-1/2 left-0 h-px w-3 bg-current" />
                <span className="absolute top-0 left-1/2 h-3 w-px bg-current transition-transform duration-300 group-open:rotate-90" />
              </span>
            </summary>
            <dl className="mt-8 space-y-8">
              {s.qa.map((item) => (
                <div key={item.q}>
                  <dt className="flex gap-3 font-serif text-[16px] font-semibold tracking-[0.04em]">
                    <span aria-hidden="true" className="font-en text-[20px] leading-none text-sage-deep italic">
                      Q.
                    </span>
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-brown">{item.a}</dd>
                </div>
              ))}
              <div className="rounded-[20px] bg-sun-soft/60 px-6 py-6">
                <dt className="font-serif text-[15px] font-semibold">{s.closing.label}</dt>
                <dd className="mt-2">{s.closing.body}</dd>
              </div>
            </dl>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
