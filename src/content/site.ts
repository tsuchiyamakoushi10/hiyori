// 共通情報（docs/content.md「共通情報」）

export const site = {
  name: "訪問看護ステーション陽和（ひより）",
  shortName: "陽和",
  nameEn: "HIYORI",
  operator: "株式会社unique（ユニーク）",
  operatorShort: "株式会社unique",
  representative: "代表取締役 岩崎 英治",
  manager: "取締役・管理者 齋藤 亜矢子（看護師）",
  postalCode: "331-0812",
  // TODO【要確認】階数（「3階/7階」の記載あり）
  address: "埼玉県さいたま市北区宮原町3-210-1 シャルマン5 308号室",
  addressParts: {
    region: "埼玉県",
    locality: "さいたま市北区",
    street: "宮原町3-210-1 シャルマン5 308号室",
  },
  tel: "048-871-5511",
  fax: "048-871-8181",
  openedAt: "2026-11-01",
  openedLabel: "2026年11月1日 開設",
  hours: "月〜金 9:00〜18:00（土日・年末年始休み）",
  hoursShort: "平日 9:00〜18:00",
  hoursNote: "訪問は土日祝も対応",
  emergency: "ご契約者さまは24時間対応体制あり",
  areas: [
    { group: "さいたま市", items: ["北区", "西区", "大宮区"] },
    { group: "上尾市", items: [] },
    { group: "伊奈町", items: [] },
  ],
  areaNote: "エリア外の方もお気軽にご相談ください",
  affiliated: "ケアプランひより（居宅介護支援事業所）",
  group: "三友会福祉グループ（埼玉県内で4法人・21拠点）",
  // TODO【要確認】駅名（宮原駅？）
  access: "最寄駅から徒歩5分／駐車場あり",
  catchCopy: ["あなたらしく、", "この街で、", "これからも。"],
  subCopy: {
    bridge: "医療と暮らしをつなぎ、ともに歩む。",
    gentle: "いつもの暮らしに、やさしい看護を。",
    light: "日々のくらしに、小さな光を。",
    en: "Care for today, brighter tomorrow.",
  },
  introCopy: "この街で、ずっと、そばに。",
} as const;

export const telHref = (num: string) => `tel:${num.replace(/-/g, "")}`;

export const navItems = [
  { href: "/about", label: "陽和とは", en: "About" },
  { href: "/service", label: "事業内容", en: "Service" },
  { href: "/recruit", label: "採用情報", en: "Recruit" },
  { href: "/staff", label: "スタッフ紹介", en: "Staff" },
] as const;

export const footerLinks = [
  { href: "/", label: "トップ" },
  ...navItems,
  { href: "/contact", label: "お問い合わせ" },
  { href: "/entry", label: "採用エントリー" },
  { href: "/privacy", label: "プライバシーポリシー" },
] as const;
