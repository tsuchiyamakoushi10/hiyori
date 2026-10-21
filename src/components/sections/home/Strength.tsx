import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { strengths } from "@/content/home";
import { site } from "@/content/site";

const accents = [
  { no: "text-sun", bg: "bg-sun-soft" },
  { no: "text-peach", bg: "bg-peach-soft" },
  { no: "text-sage", bg: "bg-sage-soft" },
  { no: "text-teal", bg: "bg-[#e3eeed]" },
];

export function Strength() {
  return (
    <section className="section-pad bg-bg2">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading en="Strength" lines={["陽和だからできること"]} />
          </Reveal>
          <Reveal>
            <p className="font-serif text-[15px] tracking-[0.1em] text-brown">{site.subCopy.bridge}</p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {strengths.map((s, i) => (
            <Reveal as="li" key={s.title} index={i} className="rounded-[20px] bg-paper px-6 pt-7 pb-8 lg:px-7">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className={`font-en text-[42px] leading-none italic ${accents[i].no}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`grid size-14 place-items-center rounded-full text-brown ${accents[i].bg}`}>
                  <Icon name={s.icon} className="size-7" />
                </span>
              </div>
              <h3 className="heading-3 mt-5">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-brown">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
