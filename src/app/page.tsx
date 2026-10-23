import type { Metadata } from "next";
import { About } from "@/components/sections/home/About";
import { Area } from "@/components/sections/home/Area";
import { Flow } from "@/components/sections/home/Flow";
import { Hero } from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { News } from "@/components/sections/home/News";
import { ProBlock } from "@/components/sections/home/ProBlock";
import { Recruit } from "@/components/sections/home/Recruit";
import { Service } from "@/components/sections/home/Service";
import { Strength } from "@/components/sections/home/Strength";
import { JsonLd, websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Intro />
      <Hero />
      <News />
      <About />
      <Strength />
      <Service />
      <section
        aria-label="ご利用の流れと対応エリア"
        className="pt-4 pb-28 lg:pb-36"
        style={{ background: "linear-gradient(var(--bg), var(--sage-soft))" }}
      >
        <Flow />
        <div className="mt-24 lg:mt-32">
          <Area />
        </div>
      </section>
      <div className="-mt-16 lg:-mt-20">
        <ProBlock />
      </div>
      <Recruit />
    </>
  );
}
