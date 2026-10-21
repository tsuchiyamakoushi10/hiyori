"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Tab = { id: string; label: string; content: ReactNode };

// SEOのため両方のパネルをDOMに出力し、表示だけ切り替える（hidden 属性ではなく CSS で隠す）
export function RequirementTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="募集職種" className="flex gap-2" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 flex-1 rounded-full border px-4 py-2.5 font-serif text-[14px] tracking-[0.06em] transition-colors sm:flex-none sm:px-8 sm:text-[15px] ${
              i === active ? "border-brown bg-brown text-white" : "border-line bg-paper text-ink hover:border-brown"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          id={`panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${t.id}`}
          className={`mt-6 ${i === active ? "block" : "hidden"}`}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
