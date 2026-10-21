"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

// 5-4：IntersectionObserver は1つを使い回す。一度表示したら監視をやめる。
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-show");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "100px 0px", threshold: 0 },
    );
  }
  return observer;
}

type Props = {
  children: ReactNode;
  /** up: 下から（基本）／mask: 写真を左から／blur: ぼかしが晴れる */
  variant?: "up" | "mask" | "blur";
  /** 並びの何番目か。0.1s ずつ遅らせる */
  index?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({ children, variant = "up", index = 0, as: Tag = "div", className = "", style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  const base = variant === "mask" ? "reveal-mask" : variant === "blur" ? "reveal-blur" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${className}`}
      style={{ ...style, ...(index ? { "--delay": `${index * 0.1}s` } : {}) } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
