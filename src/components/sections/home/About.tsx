import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/home";

export function About() {
  return (
    <section className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="mask" className="relative aspect-[4/3] overflow-hidden rounded-[24px] lg:aspect-[5/4.4]">
          <Image
            src="/images/photos/about-walk.webp"
            alt="看護師と利用者さまが、明るい屋外で手を取り合って歩く様子"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 45%" }}
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading en="About" lines={about.heading} />
          </Reveal>
          <Reveal>
            <p className="mt-7 max-w-[34em] text-brown">{about.body}</p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
            {about.kanji.map((k, i) => (
              <Reveal as="li" key={k.char} index={i} className="rounded-[14px] border border-line bg-paper px-5 py-5 sm:px-6">
                <p className="flex items-center gap-3">
                  <span className="font-serif text-[30px] leading-tight font-medium text-brown sm:text-[38px]">{k.char}</span>
                  <Icon name={k.icon} className={`size-6 ${k.icon === "sun" ? "text-[#d9a24f]" : "text-sage-deep"}`} />
                </p>
                <p className="mt-2 text-[13px] leading-[1.9] text-brown">{k.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-9">
            <Button href={about.link.href} variant="secondary">
              {about.link.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
