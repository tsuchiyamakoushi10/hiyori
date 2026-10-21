"use client";

import Image from "next/image";
import { useState } from "react";

type Color = { name: string; value: string; photo?: string };

export function UniformSwitcher({ colors }: { colors: Color[] }) {
  const [index, setIndex] = useState(0);
  const current = colors[index];

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] bg-paper">
        {colors.map((c, i) =>
          c.photo ? (
            <Image
              key={c.name}
              src={c.photo}
              alt={i === index ? `ユニフォーム（${c.name}）を着たスタッフ` : ""}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ) : (
            // 写真がない色は色見本を大きく見せる
            <div
              key={c.name}
              aria-hidden={i !== index}
              className={`absolute inset-0 grid place-items-center transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              style={{ background: `radial-gradient(circle at 50% 45%, ${c.value} 0 28%, var(--paper) 28.5%)` }}
            >
              <span className="mt-[42%] font-serif text-[15px] tracking-[0.12em] text-brown">{c.name}</span>
            </div>
          ),
        )}
      </div>
      <div role="radiogroup" aria-label="ユニフォームの色" className="mt-6 flex flex-wrap gap-4">
        {colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            role="radio"
            aria-checked={i === index}
            onClick={() => setIndex(i)}
            className="flex min-h-11 flex-col items-center gap-1.5"
          >
            <span
              className={`block size-11 rounded-full shadow-[inset_0_0_0_3px_rgba(255,255,255,.6)] outline-2 outline-offset-2 ${
                i === index ? "outline-brown" : "outline-transparent"
              }`}
              style={{ background: c.value }}
            />
            <span className="text-[11px] tracking-[0.06em] text-brown">{c.name}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {current.name}を表示中
      </p>
    </div>
  );
}
