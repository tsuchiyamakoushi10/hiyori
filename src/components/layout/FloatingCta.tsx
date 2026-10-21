import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { site, telHref } from "@/content/site";

// SPのみの追従ボタン（電話・お問い合わせ）
export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-sm lg:hidden">
      <a
        href={telHref(site.tel)}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-brown text-[13px] tracking-[0.08em] text-brown"
      >
        <Icon name="tel" className="wiggle size-5" />
        電話で相談
      </a>
      <Link
        href="/contact"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brown text-[13px] tracking-[0.08em] text-white"
      >
        <Icon name="mail" className="wiggle size-5 [animation-delay:0.2s]" />
        お問い合わせ
      </Link>
    </div>
  );
}
