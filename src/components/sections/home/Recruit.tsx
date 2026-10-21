import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recruitBanner } from "@/content/home";

export function Recruit() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionHeading en="Recruit" lines={recruitBanner.heading} />
          </Reveal>
          <Reveal>
            <p className="mt-7 max-w-[34em] text-brown">{recruitBanner.body}</p>
            <p className="mt-6 inline-block rounded-md border border-line bg-paper px-4 py-1.5 text-[13px]">{recruitBanner.jobs}</p>
          </Reveal>
          <Reveal className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Button href={recruitBanner.primary.href}>{recruitBanner.primary.label}</Button>
            <Button href={recruitBanner.secondary.href} variant="secondary">
              {recruitBanner.secondary.label}
            </Button>
          </Reveal>

          {/* 施設の小さな写真3枚 */}
          <ul className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
            {recruitBanner.facilities.map((f, i) => (
              <Reveal as="li" key={f.caption} index={i}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 190px, 30vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-center font-serif text-[12px] tracking-[0.08em] sm:text-[13px]">{f.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="relative order-1 lg:order-2">
          <Reveal variant="mask" className="relative mr-10 aspect-[4/3] overflow-hidden rounded-[24px] sm:mr-16 lg:aspect-[4/4.6]">
            <Image
              src="/images/photos/recruit-duo-car.webp"
              alt="社用車の前で笑顔を見せる、陽和のスタッフ2名"
              fill
              sizes="(min-width: 1024px) 460px, 85vw"
              className="object-cover"
              style={{ objectPosition: "65% 40%" }}
            />
          </Reveal>
          <Reveal variant="blur" className="absolute top-6 right-0">
            <p className="tate text-[13px] sm:text-[15px]">それぞれの色で、同じ想いを。</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
