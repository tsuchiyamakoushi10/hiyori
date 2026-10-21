import Image from "next/image";
import logoSymbol from "../../../../public/images/logo/logo-symbol.png";
import { site } from "@/content/site";

// 5-1：オープニング。表示・非表示は <html class="intro-on"> と CSS だけで制御する。
// 本文は最初から描画済みで、このカバーで隠すだけ。
export function Intro() {
  return (
    <div aria-hidden="true" className="intro fixed inset-0 z-[60] items-center justify-center gap-10 bg-bg">
      <Image src={logoSymbol} alt="" className="intro-item h-auto w-[120px] sm:w-[150px]" sizes="150px" />
      <p className="intro-item tate text-[17px] text-brown sm:text-lg">{site.introCopy}</p>
    </div>
  );
}
