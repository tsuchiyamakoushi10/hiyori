import Image from "next/image";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { AreaMap } from "./AreaMap";

export function Area() {
  const pills = site.areas.flatMap((a) => (a.items.length ? a.items.map((i) => `${a.group} ${i}`) : [a.group]));
  return (
    <div id="area" className="relative">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_auto] lg:gap-14">
        <div>
          <Reveal>
            <SectionHeading en="Area" lines={["対応エリア"]} />
          </Reveal>
          <Reveal>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {pills.map((p) => (
                <li key={p}>
                  <Pill variant="outline">{p}</Pill>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-brown">※{site.areaNote}</p>
          </Reveal>
          <Reveal variant="mask" className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src="/images/photos/work-car.webp"
              alt="リュックを背負った看護師が、訪問に向かうため社用車に乗り込む様子"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              style={{ objectPosition: "38% 45%" }}
            />
          </Reveal>
        </div>
        <Reveal variant="mask">
          <AreaMap />
        </Reveal>
        <Reveal variant="blur" className="hidden lg:block">
          <p className="tate text-[17px]">{site.introCopy}</p>
        </Reveal>
      </div>
    </div>
  );
}
