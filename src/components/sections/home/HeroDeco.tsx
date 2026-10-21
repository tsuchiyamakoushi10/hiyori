import Image from "next/image";

// 5-2：ヒーロー背景の「光と葉」。ゆっくり漂うだけで、文字や写真には重ねない。
export function HeroDeco() {
  return (
    <div aria-hidden="true" className="hero-deco pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="deco-item deco-1 -top-40 right-[-10%] size-[520px] rounded-full lg:size-[760px]"
        style={{ background: "radial-gradient(circle, var(--sun-soft) 0%, rgba(252,235,203,0) 65%)" }}
      />
      <Image
        src="/images/deco/deco-branch.webp"
        alt=""
        width={1122}
        height={1402}
        sizes="420px"
        className="deco-item deco-2 top-[38%] left-[38%] hidden w-[420px] lg:block"
      />
      <Image
        src="/images/deco/deco-vine-line.webp"
        alt=""
        width={2172}
        height={724}
        sizes="(min-width: 1024px) 1200px, 600px"
        className="deco-item deco-3 bottom-[4%] left-[-5%] w-[600px] lg:w-[1200px]"
      />
    </div>
  );
}
