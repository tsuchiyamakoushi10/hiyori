import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { flowSteps } from "@/content/service";

export function Flow() {
  return (
    <div className="container-site">
      <Reveal>
        <SectionHeading en="Flow" lines={["ご利用の流れ"]} />
      </Reveal>
      <div className="relative mt-12">
        <ol className="relative grid grid-cols-3 gap-x-2 gap-y-8 sm:grid-cols-6 lg:mr-[150px]">
          {/* つなぐ線 */}
          <span aria-hidden="true" className="absolute top-[38px] right-[8%] left-[8%] hidden border-t border-dashed border-sage sm:block" />
          {flowSteps.map((s, i) => (
            <Reveal as="li" key={s.title} index={i} className="relative text-center">
              <span className="mx-auto grid size-[60px] place-items-center rounded-full border border-sage bg-paper font-en text-[24px] text-sage-deep italic sm:size-[76px] sm:text-[28px]">
                {i + 1}
              </span>
              <span className="mt-3 block font-serif text-[13px] leading-[1.6] font-semibold sm:text-[15px]">{s.title}</span>
            </Reveal>
          ))}
        </ol>
        <Image
          src="/images/deco/deco-house.webp"
          alt=""
          width={1254}
          height={1254}
          sizes="140px"
          className="pointer-events-none absolute -top-8 right-0 hidden w-[140px] lg:block"
        />
      </div>
    </div>
  );
}
