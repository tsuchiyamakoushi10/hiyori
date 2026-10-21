import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { pro } from "@/content/home";
import { site, telHref } from "@/content/site";

// 病院・ケアマネジャーの方へ（TOP・事業内容で共通）
export function ProBlock() {
  return (
    <section aria-labelledby="pro-heading" className="container-site">
      <Reveal className="grid overflow-hidden rounded-[28px] bg-brown text-white lg:grid-cols-[220px_1.15fr_1fr]">
        <div className="relative h-44 lg:h-auto">
          <Image
            src="/images/photos/pro-desk.webp"
            alt="パソコンで連絡や記録をする看護師"
            fill
            sizes="(min-width: 1024px) 220px, 100vw"
            className="object-cover"
            style={{ objectPosition: "40% 30%" }}
          />
        </div>
        <div className="px-6 pt-9 sm:px-10 lg:py-12 lg:pr-4 lg:pl-12">
          <p className="text-[13px] tracking-[0.14em] text-sun-soft">{pro.label}</p>
          <h2 id="pro-heading" className="mt-3 font-serif text-[21px] font-medium tracking-[0.1em] sm:text-[26px]">
            {pro.heading}
          </h2>
          <p className="mt-4 text-[14px] opacity-95">{pro.body}</p>
        </div>
        <div className="px-6 pt-7 pb-9 sm:px-10 lg:py-12 lg:pr-12 lg:pl-4">
          <div className="space-y-3 rounded-[18px] bg-white/[0.08] px-6 py-6 sm:px-8">
            <a href={telHref(site.tel)} className="flex items-center gap-4">
              <Icon name="tel" className="size-6 shrink-0" />
              <span className="sr-only">電話</span>
              <span className="font-en text-[30px] leading-none tracking-[0.04em] italic sm:text-[40px]">{site.tel}</span>
            </a>
            <p className="pl-10 text-xs opacity-90">受付時間 {site.hoursShort}</p>
            <p className="flex items-center gap-4 border-t border-white/20 pt-3">
              <Icon name="fax" className="size-6 shrink-0" />
              <span className="sr-only">FAX</span>
              <span className="font-en text-[26px] leading-none tracking-[0.04em] italic sm:text-[32px]">{site.fax}</span>
            </p>
          </div>
          <Button href={pro.form.href} variant="light" className="mt-5 w-full">
            {pro.form.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
