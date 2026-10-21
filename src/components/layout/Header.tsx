"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoType from "../../../public/images/logo/logo-type.png";
import { navItems, site, telHref } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,padding] duration-300 ${
        scrolled ? "border-line bg-bg/95 py-2" : "border-transparent bg-transparent py-3 lg:py-5"
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-5 sm:px-10">
        <Link href="/" className="block shrink-0" aria-label={`${site.name} トップへ`}>
          <Image
            src={logoType}
            alt={site.name}
            preload
            className={`h-auto transition-[width] duration-300 ${scrolled ? "w-[92px] lg:w-[104px]" : "w-[100px] lg:w-[124px]"}`}
            sizes="124px"
          />
        </Link>

        <nav aria-label="メインメニュー" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8 text-[13.5px] tracking-[0.12em]">
            {navItems.map((item) => {
              const current = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`relative py-2 transition-colors hover:text-brown ${current ? "text-brown" : ""}`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-sage transition-transform duration-300 ${current ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={telHref(site.tel)} className="font-en text-[19px] tracking-[0.04em] text-brown italic">
            {site.tel}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-sage-deep px-6 text-[13px] tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#7a8b6d]"
          >
            お問い合わせ
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
