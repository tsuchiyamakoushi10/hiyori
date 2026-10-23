import { hero, strengths } from "@/content/home";
import { recruitPage } from "@/content/recruit";
import { careTypes, flowSteps, servicePage } from "@/content/service";
import { group, navItems, site } from "@/content/site";
import { siteDescription, siteUrl } from "@/lib/jsonld";

// AI（ChatGPT・Claude・Perplexity など）向けの要約（https://llmstxt.org/ の形式）。
// 本文はすべて src/content/ から組み立てる。原稿を直せばここも変わる。

export function GET() {
  const areas = site.areas.map((a) => (a.items.length ? `${a.group}（${a.items.join("・")}）` : a.group)).join("／");
  const text = `# ${site.name}

> ${siteDescription}

${hero.lead}

## 基本情報
- 事業所名：${site.name}
- 所在地：〒${site.postalCode} ${site.address}
- TEL：${site.tel}／FAX：${site.fax}
- 営業日・時間：${site.hours}（${site.hoursNote}）
- 緊急時：${site.emergency}
- 対応エリア：${areas}（${site.areaNote}）
- ${site.openedLabel}
- 運営：${site.operator}／${site.group}
- 併設：${site.affiliated}

## 対応している在宅療養
${careTypes.map((c) => `- ${c.title}：${c.short}`).join("\n")}

## 陽和だからできること
${strengths.map((s) => `- ${s.title}`).join("\n")}

## ご利用の流れ
${flowSteps.map((s, i) => `${i + 1}. ${s.title}：${s.detail}`).join("\n")}

## 利用できる保険
${servicePage.insurance.lead}${servicePage.insurance.note}

## 採用
${recruitPage.requirements.map((r) => `- ${r.title}`).join("\n")}

## ページ
- [トップ](${siteUrl}/)
${navItems.map((n) => `- [${n.label}](${siteUrl}${n.href})`).join("\n")}
- [お問い合わせ](${siteUrl}/contact)
- [採用エントリー](${siteUrl}/entry)

## グループ
- [${group.name}](${group.url})
${group.companies.filter((c) => c.url).map((c) => `- [${c.name}](${c.url})`).join("\n")}
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
