import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  /** 別サイトへのリンク。新しいタブで開く */
  external?: boolean;
};

const styles = {
  primary: "bg-brown text-white border-brown hover:bg-[#87705f]",
  secondary: "bg-transparent text-brown border-brown hover:bg-paper",
  light: "bg-paper text-brown border-paper hover:bg-white",
};

export function Button({ href, children, variant = "primary", className = "", external = false }: Props) {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`btn inline-flex min-h-11 items-center justify-between gap-4 whitespace-nowrap rounded-full border px-6 py-3 text-[13px] tracking-[0.1em] transition-colors duration-300 ease-out sm:px-7 sm:py-3.5 sm:text-sm ${styles[variant]} ${className}`}
    >
      <span>
        {children}
        {external && <span className="sr-only">（別サイトが開きます）</span>}
      </span>
      <span className="btn-arrow" aria-hidden="true" />
    </Link>
  );
}
