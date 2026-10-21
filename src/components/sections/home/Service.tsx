import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceNotes } from "@/content/home";
import { careTypes } from "@/content/service";

const iconBgs = ["bg-peach-soft", "bg-sage-soft", "bg-[#e3eeed]", "bg-sun-soft"];

export function Service() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <SectionHeading en="Service" lines={["対応している在宅療養"]} align="center" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {careTypes.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              index={i % 4}
              className="rounded-[20px] border border-line bg-paper px-3 pt-6 pb-6 text-center sm:px-6 sm:pt-8 sm:pb-7"
            >
              <span className={`mx-auto grid size-14 place-items-center rounded-full text-brown sm:size-16 ${iconBgs[i % 4]}`}>
                <Icon name={c.icon} className="size-7" />
              </span>
              <h3 className="mt-4 font-serif text-[15px] font-semibold tracking-[0.06em] sm:text-[17px]">{c.title}</h3>
              <p className="mt-2 text-left text-[12px] leading-[1.8] text-brown sm:text-center sm:text-[12.5px]">{c.short}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          {serviceNotes.map((n) => (
            <Pill key={n}>{n}</Pill>
          ))}
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Button href="/service" variant="secondary">
            事業内容を見る
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
