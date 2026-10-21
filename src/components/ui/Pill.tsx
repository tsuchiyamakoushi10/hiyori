import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "sun" | "outline";
  className?: string;
};

export function Pill({ children, variant = "sun", className = "" }: Props) {
  const style =
    variant === "sun"
      ? "bg-sun-soft text-brown"
      : "border border-sage bg-paper font-serif text-ink";
  return (
    <span className={`inline-flex items-center rounded-full px-5 py-1.5 text-[13px] leading-relaxed ${style} ${className}`}>
      {children}
    </span>
  );
}
