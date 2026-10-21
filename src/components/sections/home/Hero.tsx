import Image from "next/image";
import { ArchImage } from "@/components/ui/ArchImage";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { HeroDeco } from "./HeroDeco";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-24 lg:pt-36 lg:pb-36"
      style={{
        background:
          "radial-gradient(900px 600px at 78% 18%, var(--sun-soft) 0%, rgba(252,235,203,0) 60%), radial-gradient(700px 500px at 8% 92%, var(--sage-soft) 0%, rgba(231,235,223,0) 60%)",
      }}
    >
      <HeroDeco />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        {/* テキスト */}
        <div className="order-2 lg:order-1">
          <p className="kv-fade inline-block rounded-full border border-sage px-4 py-0.5 text-xs tracking-[0.14em] text-sage-deep" style={{ "--d": "1s" } as React.CSSProperties}>
            {site.openedLabel}
          </p>
          <SplitText
            lines={site.catchCopy}
            className="mt-6 font-serif text-[30px] leading-[1.75] font-medium tracking-[0.2em] text-ink sm:text-[40px] sm:tracking-[0.28em] xl:text-[46px]"
          />
          <p className="mt-8 max-w-[26em] text-brown">{hero.lead}</p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <div className="kv-fade" style={{ "--d": "1.4s" } as React.CSSProperties}>
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
            </div>
            <div className="kv-fade" style={{ "--d": "1.8s" } as React.CSSProperties}>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </div>

        {/* アーチ写真 */}
        <div className="relative order-1 lg:order-2">
          <ArchImage
            src="/images/photos/top-hero-care.webp"
            alt="看護師が利用者さまの手を取り、笑顔で話している様子"
            sizes="(min-width: 1024px) 520px, 80vw"
            position="45% 40%"
            preload
            className="kv-photo mr-auto ml-[3%] h-[380px] w-[87%] sm:h-[520px] lg:mx-0 lg:h-[600px] lg:w-[86%]"
          />
          <p className="tate absolute top-6 right-0 text-[13px] sm:text-[15px] lg:top-14 lg:right-[-8px]">
            {site.subCopy.light}
          </p>
          {/* 写真右下の小さなメモ写真 */}
          <div
            className="kv-fade absolute bottom-[-28px] left-0 w-[34%] max-w-[200px] rotate-[-3deg] rounded-2xl bg-paper p-2 shadow-[var(--shadow-soft)] sm:p-2.5 lg:right-[2%] lg:bottom-[-36px] lg:left-auto lg:rotate-[3deg]"
            style={{ "--d": "1.8s" } as React.CSSProperties}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/photos/facility-staffroom.webp"
                alt="木のテーブルと観葉植物のある、陽和のスタッフルーム"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
          <Image
            src="/images/deco/deco-branch.webp"
            alt=""
            width={1122}
            height={1402}
            sizes="140px"
            className="pointer-events-none absolute bottom-[8%] left-[-90px] hidden w-[140px] -scale-x-100 opacity-90 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
