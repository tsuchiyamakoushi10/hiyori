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
        <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-6 sm:gap-x-2 lg:mr-[150px]">
          {/* つなぐ線：スマートフォンは縦、それ以上は横 */}
          <span aria-hidden="true" className="absolute top-[30px] bottom-[30px] left-[30px] border-l border-dashed border-sage sm:hidden" />
          <span aria-hidden="true" className="absolute top-[38px] right-[8%] left-[8%] hidden border-t border-dashed border-sage sm:block" />
          {flowSteps.map((s, i) => (
            <Reveal as="li" key={s.title} index={i} className="relative flex items-center gap-5 sm:block sm:text-center">
              <span className="grid size-[60px] shrink-0 place-items-center rounded-full border border-sage bg-paper font-en text-[24px] text-sage-deep italic sm:mx-auto sm:size-[76px] sm:text-[28px]">
                {i + 1}
              </span>
              <span className="block font-serif text-[15px] leading-[1.6] font-semibold sm:mt-3">{s.title}</span>
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
