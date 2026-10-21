import type { CSSProperties, ElementType } from "react";

type Props = {
  /** 1要素＝1行 */
  lines: readonly string[];
  as?: ElementType;
  className?: string;
  /** 書き出しの遅れ（秒）。オープニング分は CSS の --intro-delay で足される */
  delay?: number;
};

// 5-5：1文字ずつ下から出る。サーバーで分割するので JS なしでも文字は DOM にある。
export function SplitText({ lines, as: Tag = "h1", className = "", delay = 0.2 }: Props) {
  return (
    <Tag className={className} aria-label={lines.join("")}>
      {lines.map((line, li) => (
        <span key={li} className="split-line" aria-hidden="true">
          {Array.from(line).map((ch, ci) => {
            const d = delay + li * 0.3 + ci * 0.03;
            return (
              <span key={ci} className="split-char">
                <span style={{ "--cd": `calc(var(--intro-delay) + ${d.toFixed(2)}s)` } as CSSProperties}>{ch}</span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
