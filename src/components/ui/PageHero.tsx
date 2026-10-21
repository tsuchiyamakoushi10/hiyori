import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";
import { ArchImage } from "./ArchImage";
import { SplitText } from "./SplitText";

type Props = {
  en: string;
  title: string;
  path: string;
  photo?: { src: string; alt: string; position?: string };
  children?: ReactNode;
};

// 下層ヒーロー：英字ラベル＋和文タイトル＋アーチ写真（小）＋パンくず
export function PageHero({ en, title, path, photo, children }: Props) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24"
      style={{
        background:
          "radial-gradient(700px 500px at 85% 10%, var(--sun-soft) 0%, rgba(252,235,203,0) 60%), radial-gradient(600px 400px at 0% 100%, var(--sage-soft) 0%, rgba(231,235,223,0) 60%)",
      }}
    >
      {/* 5-2：下層は2枚だけ、縦にゆっくり漂う */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/deco/deco-branch.webp"
          alt=""
          width={1122}
          height={1402}
          sizes="260px"
          className="deco-item deco-v1 top-[20%] left-[42%] hidden w-[260px] rotate-[-12deg] lg:block"
        />
        <div
          className="deco-item deco-v2 -top-20 right-[-6%] size-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--sun-soft) 0%, rgba(252,235,203,0) 65%)" }}
        />
      </div>

      <div className="container-site relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="en-label kv-fade" style={{ "--d": "0.1s" } as React.CSSProperties}>
            {en}
          </p>
          <SplitText lines={[title]} className="mt-3 font-serif text-[28px] font-medium tracking-[0.16em] sm:text-[38px]" />
          {children && <div className="mt-6 max-w-[34em] text-brown">{children}</div>}
          <nav aria-label="パンくずリスト" className="mt-8 text-xs text-[#7f7268]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  トップ
                </Link>
              </li>
              <li aria-hidden="true">／</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        </div>
        {photo && (
          <ArchImage
            src={photo.src}
            alt={photo.alt}
            position={photo.position}
            sizes="(min-width: 1024px) 340px, 60vw"
            preload
            className="kv-photo mx-auto h-[260px] w-[220px] sm:h-[340px] sm:w-[280px] lg:mx-0 lg:h-[400px] lg:w-[340px]"
          />
        )}
      </div>
      <JsonLd data={breadcrumbJsonLd([{ name: title, path }])} />
    </section>
  );
}
