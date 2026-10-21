import type { Metadata } from "next";
import Image from "next/image";
import { RecruitCta } from "@/components/sections/recruit/RecruitCta";
import { RequirementDetail } from "@/components/sections/recruit/RequirementDetail";
import { FacilityGallery } from "@/components/sections/recruit/FacilityGallery";
import { RequirementTabs } from "@/components/sections/recruit/RequirementTabs";
import { UniformSwitcher } from "@/components/sections/recruit/UniformSwitcher";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recruitPage as p, requirementText } from "@/content/recruit";
import { JsonLd, jobPostingJsonLd } from "@/lib/jsonld";
import { Phrase } from "@/components/ui/Phrase";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "訪問看護ステーション陽和（ひより）の採用情報。看護師・理学療法士・作業療法士を募集中（常勤・パート）。未経験歓迎、オンコールはベテランと二人体制から。さいたま市北区宮原町、駅から徒歩5分。",
  alternates: { canonical: "/recruit" },
};

const meritColors = ["text-sun", "text-peach", "text-sage", "text-teal", "text-cocoa"];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/recruit"
        photo={{ src: "/images/photos/recruit-duo-car.webp", alt: "社用車の前で笑顔を見せる、陽和のスタッフ2名", position: "65% 40%" }}
      >
        <p className="font-serif text-[20px] leading-[1.8] tracking-[0.1em] text-ink sm:text-[24px]">
          {p.catch[0]}
          <br />
          {p.catch[1]}
        </p>
        <p className="mt-4">{p.lead}</p>
      </PageHero>

      {/* ページ内リンク */}
      <nav aria-label="ページ内リンク" className="container-site">
        <ul className="flex flex-wrap gap-2 text-[13px]">
          {[
            ["#message", "採用理念"],
            ["#facility", "働く環境"],
            ["#benefits", "福利厚生"],
            ["#requirements", "募集要項"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper px-5 hover:border-brown">
                {label}
                <span aria-hidden="true" className="text-sage-deep">↓</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 採用理念・こんな方を */}
      <section id="message" className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading en="Message" lines={p.message.heading} />
            </Reveal>
            <Reveal>
              <p className="mt-7 max-w-[34em] text-brown">{p.message.body}</p>
            </Reveal>
          </div>
          <Reveal className="self-center rounded-[20px] bg-paper px-6 py-8 sm:px-9">
            <h3 className="heading-3">こんな方を待っています</h3>
            <ul className="mt-4">
              {p.wanted.map((w) => (
                <li key={w} className="flex items-start gap-3 border-b border-line py-3 last:border-b-0">
                  <Icon name="leaf" className="mt-1.5 size-4 shrink-0 text-sage-deep" />
                  <span>
                    <Phrase>{w}</Phrase>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 陽和で働く魅力 */}
      <section className="section-pad bg-bg2">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Merit" lines={["陽和で働く魅力"]} />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {p.merits.map((m, i) => (
              <Reveal
                as="li"
                key={m.title}
                index={i % 3}
                className={`overflow-hidden rounded-[20px] bg-paper ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                {m.photo && (
                  <div className="relative aspect-[16/9]">
                    <Image src={m.photo.src} alt={m.photo.alt} fill sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="px-6 py-7 sm:px-7">
                  <span aria-hidden="true" className={`font-en text-[38px] leading-none italic ${meritColors[i]}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-3 mt-3"><Phrase>{m.title}</Phrase></h3>
                  <p className="mt-2 text-[14px] text-brown">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 働く環境（施設紹介） */}
      <section id="facility" className="section-pad">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <SectionHeading en="Facility" lines={["働く環境"]} />
              <p className="mt-4 font-serif text-[18px] tracking-[0.1em] text-brown sm:text-[20px]"><Phrase>{p.facility.heading}</Phrase></p>
            </Reveal>
            <Image
              src="/images/deco/deco-house.webp"
              alt=""
              width={1254}
              height={1254}
              sizes="150px"
              className="pointer-events-none w-[96px] shrink-0 sm:w-[150px]"
            />
          </div>
          <Reveal>
            <p className="mt-6 mb-12 max-w-[40em] text-brown">{p.facility.lead}</p>
          </Reveal>
          <Reveal>
            <FacilityGallery main={p.facility.main} rooms={p.facility.rooms} />
          </Reveal>
        </div>
      </section>

      {/* 福利厚生 */}
      <section id="benefits" className="section-pad bg-bg2">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Benefits" lines={["福利厚生・働く環境"]} />
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {p.benefits.map((b, i) => (
              <Reveal as="li" key={b.label} index={i % 3} className="flex gap-4 rounded-[20px] bg-paper px-5 py-5 sm:px-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sun-soft text-brown">
                  <Icon name={b.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="font-serif text-[15px] font-semibold tracking-[0.06em]"><Phrase>{b.label}</Phrase></h3>
                  <p className="mt-1 text-[13.5px] leading-[1.85] text-brown">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ユニフォーム */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading en="Uniform" lines={["ユニフォーム紹介"]} />
              <p className="mt-6 font-serif text-[18px] tracking-[0.1em] sm:text-[20px]"><Phrase>{p.uniform.heading}</Phrase></p>
              <p className="mt-4 text-brown">{p.uniform.body}</p>
            </Reveal>
          </div>
          <Reveal>
            <UniformSwitcher colors={p.uniform.colors} />
          </Reveal>
        </div>
      </section>

      {/* 1日の流れ */}
      <section className="section-pad bg-bg2">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading en="Daily Schedule" lines={["1日の流れ（看護師）"]} />
            </Reveal>
            <Reveal variant="mask" className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[24px]">
              <Image src="/images/photos/work-driving.webp" alt="社用車を運転して訪問に向かう看護師" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <ol className="relative self-center">
            <span aria-hidden="true" className="absolute top-3 bottom-3 left-[5px] border-l border-dashed border-sage" />
            {p.day.map((d, i) => (
              <Reveal as="li" key={d.time} index={i} className="relative flex items-baseline gap-6 pb-7 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute top-2.5 left-0 size-[11px] rounded-full border-2 border-paper bg-sun" />
                <span className="w-14 shrink-0 font-en text-[24px] leading-none text-sage-deep italic">{d.time}</span>
                <span className="font-serif text-[16px] tracking-[0.06em]">{d.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 募集要項 */}
      <section id="requirements" className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Requirements" lines={["募集要項"]} />
          </Reveal>
          <Reveal className="mt-10">
            <RequirementTabs
              tabs={p.requirements.map((r) => ({
                id: r.id,
                label: <Phrase>{r.label}</Phrase>,
                content: (
                  <>
                    <h3 className="heading-3 mb-4">{r.title}</h3>
                    <RequirementDetail r={r} />
                  </>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* 応募から入社まで・よくある質問 */}
      <section className="section-pad bg-bg2">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Process" lines={["応募から入社まで"]} />
          </Reveal>
          <Reveal as="ol" className="mt-10 grid gap-3 sm:grid-cols-3">
            {p.steps.map((s, i) => (
              <li key={s} className="relative flex items-center gap-4 rounded-[20px] bg-paper px-6 py-5">
                <span className="font-en text-[28px] leading-none text-sage-deep italic">{i + 1}</span>
                <span className="font-serif text-[15px] font-semibold tracking-[0.04em]"><Phrase>{s}</Phrase></span>
              </li>
            ))}
          </Reveal>
          <Reveal>
            <p className="mt-5 text-[13px] text-brown">※{p.stepsNote}</p>
          </Reveal>

          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <SectionHeading en="Q&A" lines={["よくある質問"]} as="h3" />
            </Reveal>
            <Reveal>
              <Faq items={p.faq} />
            </Reveal>
          </div>
        </div>
      </section>

      <RecruitCta />

      {p.requirements.map((r) => (
        <JsonLd
          key={r.id}
          data={jobPostingJsonLd({
            title: r.label,
            description: requirementText(r),
            datePosted: p.datePosted,
            validThrough: p.validThrough,
            salary: r.jsonLdSalary,
          })}
        />
      ))}
    </>
  );
}
