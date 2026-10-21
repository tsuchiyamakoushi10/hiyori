import { Fragment } from "react";
import { Phrase } from "./Phrase";

type Props = {
  en: string;
  /** 意味の切れ目で分けた行。SPで改行しない箇所は spBreak=false */
  lines: readonly string[];
  spBreak?: boolean;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  tone?: "default" | "light";
};

export function SectionHeading({ en, lines, spBreak = true, align = "left", as: Tag = "h2", className = "", tone = "default" }: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className={`en-label ${tone === "light" ? "text-sun-soft!" : ""}`}>{en}</p>
      <Tag className={`heading-2 mt-3 ${tone === "light" ? "text-white" : "text-ink"}`}>
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br className={spBreak ? "" : "hidden sm:inline"} />}
            <Phrase>{line}</Phrase>
          </Fragment>
        ))}
      </Tag>
    </div>
  );
}
