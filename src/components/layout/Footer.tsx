import Image from "next/image";
import Link from "next/link";
import logoType from "../../../public/images/logo/logo-type.png";
import { footerLinks, site, telHref } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg2 pt-20 pb-28 text-[13px] text-brown lg:pb-8">
      <Image
        src="/images/deco/deco-corner-floral.webp"
        alt=""
        width={1122}
        height={1402}
        sizes="240px"
        className="pointer-events-none absolute -top-6 -right-10 hidden w-[240px] -scale-y-100 opacity-90 lg:block"
      />
      <div className="container-site relative grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Link href="/" className="inline-block" aria-label={`${site.name} トップへ`}>
            <Image src={logoType} alt={site.name} className="h-auto w-[150px]" sizes="150px" />
          </Link>
          <address className="mt-6 leading-[1.9] not-italic">
            <span className="block font-serif text-[15px] text-ink">{site.name}</span>
            〒{site.postalCode} {site.address}
            <br />
            TEL <a href={telHref(site.tel)} className="underline-offset-4 hover:underline">{site.tel}</a>
            ／FAX {site.fax}
            <br />
            {site.hours}
            <br />
            運営：{site.operatorShort}
          </address>
        </div>
        <nav aria-label="フッターメニュー" className="lg:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-1 hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-16 text-center font-en text-sm text-[#7f7268] italic">
        © 2026 {site.operatorShort} / HIYORI
      </p>
    </footer>
  );
}
