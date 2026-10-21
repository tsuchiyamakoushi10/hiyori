import Image from "next/image";
import { SunRays } from "./SunRays";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  /** 例: "62% 40%" */
  position?: string;
  preload?: boolean;
  rays?: boolean;
  className?: string;
  imgClassName?: string;
};

// アーチ型の写真フレーム（ひだまりの窓）。高さ・幅は className で与える。
export function ArchImage({ src, alt, sizes, position = "50% 50%", preload = false, rays = true, className = "", imgClassName = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className={`arch relative h-full w-full ${imgClassName}`}>
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" style={{ objectPosition: position }} />
      </div>
      {rays && (
        <SunRays className="pointer-events-none absolute -top-[14%] left-1/2 w-[78%] -translate-x-1/2 opacity-60" />
      )}
    </div>
  );
}
