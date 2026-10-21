import type { Metadata } from "next";
import Image from "next/image";
import logoSymbol from "../../../public/images/logo/logo-symbol.png";
import { InfoTable } from "@/components/ui/InfoTable";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage as p } from "@/content/about";
import { site } from "@/content/site";
import { Phrase } from "@/components/ui/Phrase";

export const metadata: Metadata = {
  title: "陽和とは",
  description:
    "訪問看護ステーション陽和（ひより）の理念、4つの看護、名前に込めた想い、管理者あいさつ、会社概要・アクセス。さいたま市北区宮原町。",
  alternates: { canonical: "/about" },
};

const numColors = ["text-sun", "text-peach", "text-sage", "text-teal"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        en={p.en}
        title={p.title}
        path="/about"
        photo={{ src: "/images/photos/service-walk.webp", alt: "看護師が利用者さまに付き添って屋外を歩く様子", position: "50% 40%" }}
      />

      {/* 大切にしていること */}
      <section id="philosophy" className="section-pad">
        <div className="container-site text-center">
          <Reveal>
            <p className="en-label">Philosophy</p>
            <h2 className="mt-3 text-[14px] tracking-[0.14em] text-brown">大切にしていること</h2>
          </Reveal>
          <Reveal variant="blur" className="mx-auto mt-10 max-w-[44em] space-y-6 font-serif text-[18px] leading-[2.1] tracking-[0.08em] text-ink sm:text-[22px]">
            {p.philosophy.map((line) => (
              <p key={line}>
                <Phrase>{line}</Phrase>
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 陽和の4つの看護 */}
      <section className="section-pad bg-bg2">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Our Nursing" lines={["陽和の4つの看護"]} />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {p.nursing.map((n, i) => (
              <Reveal as="li" key={n.title} index={i} className="flex gap-5 rounded-[20px] bg-paper px-6 py-7 sm:px-8">
                <span aria-hidden="true" className={`font-en text-[42px] leading-none italic ${numColors[i]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="heading-3"><Phrase>{n.title}</Phrase></h3>
                  <p className="mt-2 text-brown"><Phrase>{n.body}</Phrase></p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 名前に込めた想い */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Our Name" lines={["名前に込めた想い"]} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {p.name.map((n, i) => (
              <Reveal key={n.char} index={i} className="rounded-[20px] border border-line bg-paper px-7 py-8 sm:px-10">
                <p className="font-serif text-[52px] leading-none font-medium text-brown">{n.char}</p>
                <p className="mt-5 text-brown">{n.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            <Image src={logoSymbol} alt="陽和のロゴマーク（差し伸べる手と太陽、葉）" className="h-auto w-[140px]" sizes="140px" />
            <div className="max-w-[26em]">
              <h3 className="heading-3">ロゴについて</h3>
              <p className="mt-2 text-brown">{p.logo}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 管理者あいさつ */}
      <section id="message" className="section-pad bg-bg2">
        <div className="container-site grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="mask" className="arch relative mx-auto aspect-[3/4] w-[260px] bg-paper sm:w-[300px] lg:w-full">
              <Image
                src={p.message.photo}
                alt={`${p.message.role} ${p.message.name}のポートレート`}
                fill
                sizes="(min-width: 1024px) 360px, 300px"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </Reveal>
            <Reveal className="mt-6 text-center lg:text-left">
              <p className="text-[13px] text-brown">{p.message.role}</p>
              <p className="mt-1 font-serif text-2xl tracking-[0.14em]">{p.message.name}</p>
              <p className="mt-3 text-[13px] leading-[1.9] text-brown"><Phrase>{p.message.career}</Phrase></p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <SectionHeading en="Message" lines={[p.message.label]} />
              <p className="mt-6 font-serif text-[19px] leading-[1.9] tracking-[0.08em] text-brown sm:text-[22px]"><Phrase>{p.message.heading}</Phrase></p>
            </Reveal>
            <div className="mt-8 max-w-[40em] space-y-6">
              {p.message.before.map((t) => (
                <Reveal as="p" key={t.slice(0, 12)}>
                  {t}
                </Reveal>
              ))}
              <Reveal as="blockquote" className="rounded-[20px] border-l-2 border-sage bg-paper px-6 py-7 text-brown sm:px-8">
                {p.message.episode}
              </Reveal>
              {p.message.after.map((t) => (
                <Reveal as="p" key={t.slice(0, 12)}>
                  {t}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要・沿革・アクセス */}
      <section id="company" className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading en="Company" lines={["会社概要"]} />
          </Reveal>
          <Reveal className="mt-10">
            <InfoTable rows={p.company} />
          </Reveal>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading en="History" lines={["沿革"]} as="h3" />
              </Reveal>
              <ol className="mt-8 space-y-5 border-l border-sage pl-6">
                {p.history.map((h, i) => (
                  <Reveal as="li" key={h.date} index={i} className="relative">
                    <span aria-hidden="true" className="absolute top-3 -left-[29px] size-[9px] rounded-full bg-sun" />
                    <p className="font-serif text-[15px] font-semibold">{h.date}</p>
                    <p className="text-brown">{h.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
            <div>
              <Reveal>
                <SectionHeading en="Access" lines={["アクセス"]} as="h3" />
                <p className="mt-6 text-brown">
                  〒{site.postalCode} {site.address}
                  <br />
                  {p.access}
                </p>
              </Reveal>
              <Reveal className="mt-6 overflow-hidden rounded-[24px] border border-line">
                <iframe
                  title="訪問看護ステーション陽和の地図"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-[4/3] w-full sm:aspect-[16/10]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
