"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { navItems, site, telHref } from "@/content/site";

const items = [{ href: "/", label: "トップ", en: "Top" }, ...navItems, { href: "/contact", label: "お問い合わせ", en: "Contact" }];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 grid size-11 place-items-center rounded-full bg-brown"
      >
        <span
          className={`absolute h-px w-[18px] bg-white transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[3.5px]"}`}
        />
        <span
          className={`absolute h-px w-[18px] bg-white transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[3.5px]"}`}
        />
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg px-8 pt-24 pb-12 transition-[opacity,transform,visibility] duration-[800ms] ease-[var(--ease-menu)] ${
          open ? "visible scale-100 opacity-100" : "invisible scale-90 opacity-0"
        }`}
        style={{ backgroundImage: "radial-gradient(500px 400px at 90% 0%, var(--sun-soft), transparent 70%), radial-gradient(400px 400px at 0% 100%, var(--sage-soft), transparent 70%)" }}
      >
        <nav aria-label="メニュー">
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li
                key={item.href}
                className={`transition-[opacity,transform] duration-500 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                style={{ transitionDelay: open ? `${0.1 + i * 0.025}s` : "0s" } as CSSProperties}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-serif text-lg tracking-[0.12em]">{item.label}</span>
                  <span className="font-en text-sm text-sage-deep italic">{item.en}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 space-y-1 text-brown">
          <a href={telHref(site.tel)} className="block font-en text-3xl italic">
            TEL {site.tel}
          </a>
          <p className="text-xs">受付 {site.hoursShort}</p>
          <p className="font-en text-xl italic">FAX {site.fax}</p>
        </div>
      </div>
    </div>
  );
}
