import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { recruitPage as p } from "@/content/recruit";
import { site, telHref } from "@/content/site";

// 採用ページ・スタッフ紹介の最後に置くCTA
export function RecruitCta() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal
          className="relative overflow-hidden rounded-[28px] px-6 py-14 text-center sm:px-12 sm:py-16"
          style={{ background: "linear-gradient(135deg, var(--sun-soft), var(--peach-soft) 50%, var(--sage-soft))" }}
        >
          <p className="en-label">Entry</p>
          <h2 className="heading-2 mt-3">{p.cta.heading}</h2>
          <p className="mt-3 text-brown">{p.cta.body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={p.cta.entry.href}>{p.cta.entry.label}</Button>
            <a
              href={telHref(site.tel)}
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-brown bg-paper/60 px-7 py-3 text-brown"
            >
              <Icon name="tel" className="size-5" />
              <span className="text-[13px]">お電話</span>
              <span className="font-en text-[22px] leading-none italic">{site.tel}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
