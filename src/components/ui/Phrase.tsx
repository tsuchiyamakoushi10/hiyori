import { loadDefaultJapaneseParser } from "budoux";
import { Fragment } from "react";

const parser = loadDefaultJapaneseParser();

// 日本語を文節（意味のまとまり）でだけ改行させる。見出しや短い文に使う。
// 「・」「／」の後ろでも改行できるようにする。サーバーで分割するので JS は増えない。
export function Phrase({ children }: { children: string }) {
  const parts: string[] = [];
  for (const p of parser.parse(children).flatMap((p) => p.split(/(?<=[・／])/))) {
    // 1文字だけの区切り（「に」など）は前とくっつけて、1文字だけの行を作らない
    if (p.length <= 1 && parts.length) parts[parts.length - 1] += p;
    else parts.push(p);
  }
  return (
    <span className="phrase">
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </span>
  );
}
