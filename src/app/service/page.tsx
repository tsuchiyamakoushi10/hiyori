import type { Metadata } from "next";
import Image from "next/image";
import { ProBlock } from "@/components/sections/home/ProBlock";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careTypes, flowSteps, servicePage as p } from "@/content/service";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "訪問看護ステーション陽和（ひより）の事業内容。がん・緩和ケア、難病、医療的ケア、ご自宅での看取り、小児、精神科訪問看護、退院直後の支援。ご利用の流れ・保険・よくあるご質問。",
  alternates: { canonical: "/service" },
};

const iconBgs = ["bg-peach-soft", "bg-sage-soft", "bg-[#e3eeed]", "bg-sun-soft"];

export default function ServicePage() {
  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/service"
        photo={{ src: "/images/photos/service-smile.webp", alt: "看護師が利用者さまと笑顔で会話する様子" }}
      >
        {p.lead}
      </PageHero>

      {/* 対応している在宅療養 */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Home Care" lines={["対応している在宅療養"]} />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {careTypes.map((c, i) => (
              <Reveal as="li" key={c.title} index={i % 2} className="flex gap-5 rounded-[20px] border border-line bg-paper px-6 py-6 sm:px-7">
                <span className={`grid size-14 shrink-0 place-items-center rounded-full text-brown ${iconBgs[i % 4]}`}>
                  <Icon name={c.icon} className="size-7" />
                </span>
                <div>
                  <h3 className="heading-3">{c.title}</h3>
                  <p className="mt-1 text-brown">{c.short}</p>
                  {c.icon === "drip" && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.medicalCareExamples.map((e) => (
                        <li key={e} className="rounded-full bg-bg2 px-3 py-0.5 text-[12px] text-ink">
                          {e}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-6">
            <p className="text-[13px] text-brown">※{p.rehabNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 主なサービス内容 */}
      <section className="section-pad bg-bg2">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading en="Services" lines={["主なサービス内容"]} />
              <p className="mt-6 text-brown">{p.servicesLead}</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <Reveal variant="mask" className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image src="/images/photos/service-check.webp" alt="看護師が利用者さまの体調を確認する様子" fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover" />
              </Reveal>
              <Reveal variant="mask" index={2} className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image src="/images/photos/service-auscultation.webp" alt="看護師が聴診器で利用者さまの胸の音を聴く様子" fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover" />
              </Reveal>
            </div>
          </div>
          <Reveal as="ul" className="self-center rounded-[20px] bg-paper px-6 py-4 sm:px-9 sm:py-6">
            {p.services.map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-line py-4 last:border-b-0">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
                  <Icon name="check" className="size-4" strokeWidth={1.8} />
                </span>
                <span>{s}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 陽和の看護のかたち */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Stories" lines={["陽和の看護のかたち"]} />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {p.cases.map((c, i) => (
              // 事例は写真を添えない（写っている人が事例の当事者だと誤解されないように）
              <Reveal as="article" key={c.title} index={i} className="relative overflow-hidden rounded-[20px] border border-line bg-paper">
                <span
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 size-48 rounded-full"
                  style={{ background: "radial-gradient(circle, var(--sun-soft) 0%, rgba(252,235,203,0) 70%)" }}
                />
                <div className="relative px-6 py-8 sm:px-10 sm:py-10">
                  <p className="font-en text-lg text-sage-deep italic">{c.label}</p>
                  <h3 className="mt-2 font-serif text-[19px] leading-[1.7] font-medium tracking-[0.08em] sm:text-[22px]">「{c.title}」</h3>
                  <p className="mt-4 text-brown">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ（縦タイムライン） */}
      <section id="flow" className="section-pad bg-bg2">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading en="Flow" lines={["ご利用の流れ"]} />
            </Reveal>
            <Image
              src="/images/deco/deco-house.webp"
              alt=""
              width={1254}
              height={1254}
              sizes="180px"
              className="pointer-events-none mt-10 hidden w-[180px] lg:block"
            />
          </div>
          <ol className="relative">
            <span aria-hidden="true" className="absolute top-6 bottom-6 left-[27px] border-l border-dashed border-sage sm:left-[31px]" />
            {flowSteps.map((s, i) => (
              <Reveal as="li" key={s.title} index={i} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-7">
                <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-sage bg-paper font-en text-[24px] text-sage-deep italic sm:size-16 sm:text-[26px]">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-[20px] bg-paper px-6 py-5 sm:px-7">
                  <h3 className="heading-3">{s.titleDetail ?? s.title}</h3>
                  <p className="mt-1 text-brown">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 利用できる保険・料金 */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Insurance" lines={["ご利用できる保険・料金"]} align="center" />
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            {p.insurance.types.map((t) => (
              <Pill key={t} variant="outline" className="px-6 py-2 text-[15px]">
                {t}
              </Pill>
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-[36em] text-center text-brown">
            <p>{p.insurance.lead}</p>
            <p>{p.insurance.note}</p>
          </Reveal>
        </div>
      </section>

      <ProBlock body={p.pro.body} />

      {/* よくあるご質問 */}
      <section id="faq" className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <SectionHeading en="Q&A" lines={["よくあるご質問"]} />
          </Reveal>
          <Reveal>
            <Faq items={p.faq} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
