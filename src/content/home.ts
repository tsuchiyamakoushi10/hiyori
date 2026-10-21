// TOPページの原稿（docs/content.md「1. TOP」）

export const hero = {
  lead: "さいたま市北区の訪問看護ステーション陽和（ひより）です。病気や障がいがあっても、住み慣れた家で、その人らしく。ご本人とご家族の毎日に、看護師が寄り添います。",
  primary: { href: "/contact", label: "ご相談・お問い合わせ" },
  secondary: { href: "/recruit", label: "採用情報を見る" },
};

export const about = {
  heading: ["一人ひとりの人生に、", "ひだまりのような光を。"],
  body: "「陽和（ひより）」の「陽」は、ひだまりのような暖かさ。一人ひとりの人生にやさしく光を当て、心地よい居場所でありたいという願いです。「和」は、人と人、地域とのつながり。ご本人やご家族、医療・介護の仲間と手を取り合って、はじめて良い看護ができると考えています。",
  // 「名前に込めた想い」（/about）の冒頭
  kanji: [
    { char: "陽", icon: "sun", text: "暖かさ、やわらかな明るさ、ひだまり。" },
    { char: "和", icon: "leaf", text: "地域や人との関係。" },
  ],
  link: { href: "/about", label: "陽和について" },
} as const;

export const strengths = [
  {
    icon: "sprout",
    title: "訪問看護歴10年以上の看護師がそろっています",
    body: "病棟とは違い、ご自宅では看護師がその場で判断することが求められます。経験を重ねたスタッフが、先を見通したケアを行います。",
  },
  {
    icon: "door",
    title: "疾患や年齢を問わず、幅広くお受けします",
    body: "がん・緩和ケア、難病、精神疾患、医療的ケアが必要な方、小児まで。特定の分野に絞らず、まずはご相談をお受けします。",
  },
  {
    icon: "link",
    title: "ケアマネジャーが併設しています",
    body: "同じ事業所内に「ケアプランひより」があり、経験20年以上のベテランケアマネジャーが在籍。介護と看護の連携がスムーズです。",
  },
  {
    icon: "houses",
    title: "グループの支えがあります",
    body: "三友会福祉グループとして、埼玉県内で通所介護・訪問介護・居宅介護支援・訪問看護など21拠点を運営。困ったときに頼れる体制があります。",
  },
] as const;

export const serviceNotes = ["土日祝の訪問にも対応", "ご契約者さまは24時間対応"];

export const pro = {
  label: "病院・ケアマネジャーの方へ",
  heading: "ご依頼・ご相談はお気軽に",
  body: "退院前のご相談から、急ぎのご依頼まで、親身にお伺いします。お電話またはFAXでご連絡ください。",
  form: { href: "/contact", label: "お問い合わせフォーム" },
};

export const recruitBanner = {
  heading: ["訪問から", "帰ってきたくなる場所。"],
  body: "陽和の事業所は、カフェのようにくつろげる空間。訪問で疲れた心と体を休められる場所です。訪問看護が好きな人も、これから始めたい人も、一緒に働きませんか。",
  jobs: "看護師・理学療法士・作業療法士 募集中（常勤・パート）",
  primary: { href: "/recruit", label: "採用情報を見る" },
  secondary: { href: "/entry", label: "見学・エントリー" },
  facilities: [
    { src: "/images/photos/facility-staffroom.webp", caption: "スタッフルーム", alt: "木のテーブルとカラフルな椅子が並ぶ、明るいスタッフルーム" },
    { src: "/images/photos/facility-restroom-washitsu.webp", caption: "休憩室", alt: "丸い座卓と座布団が置かれた畳の休憩室" },
    { src: "/images/photos/facility-locker.webp", caption: "ロッカールーム", alt: "個人ロッカーとハンガーラックのあるロッカールーム" },
  ],
};
