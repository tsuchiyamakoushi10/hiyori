// 採用情報（docs/content.md「4. 採用情報」）

export type Requirement = {
  id: string;
  label: string;
  title: string;
  /** 仕事内容 */
  job: string;
  salary: {
    full: { main: string; note: string; extra?: string };
    part: { main: string; visitLabel: string; visits: [string, string][]; note: string };
  };
  allowances: [string, string][];
  qualifications: { text: string; tag: "必須" | "優遇" | "あれば尚可" }[];
  groups: { title: string; rows: [string, string][] }[];
  jsonLdSalary: { monthly: number; hourly: number };
};

/** 募集要項を「項目：内容」の文章にする（JobPosting の説明文用） */
export function requirementText(r: Requirement) {
  const { full, part } = r.salary;
  return [
    `仕事内容：${r.job}`,
    `給与（常勤）：${full.main}${full.note}${full.extra ? `／${full.extra}` : ""}`,
    `給与（パート）：${part.main}${part.visitLabel}（${part.visits.map(([t, y]) => `${t}${y}`).join("／")}）${part.note}`,
    `手当：${r.allowances.map(([n, v]) => `${n} ${v}`).join("、")}`,
    `応募資格：${r.qualifications.map((q) => `${q.text} ${q.tag}`).join("／")}`,
    ...r.groups.flatMap((g) => g.rows.map(([k, v]) => `${k}：${v}`)),
  ].join("\n");
}

export const recruitPage = {
  en: "Recruit",
  title: "採用情報",
  catch: ["訪問から、", "帰ってきたくなる場所。"],
  lead: "陽和の事業所は、カフェのようにくつろげる空間でありたいと考えています。訪問を終えて戻ったら、ほっとひと息つける。所内では、お互いを認め合い、承認し合う。そんな職場で、訪問看護のすばらしさを一緒に分かち合いませんか。",
  message: {
    heading: ["質の高いケアは、", "職員どうしの関係から。"],
    body: "利用者さま一人ひとりに質の高いケアを届けるために、いちばん大切なのは職員の関係性だと考えています。安心して意見を言えて、議論ができる。お互いを認め合い、承認し合いながら、ともに成長していく。陽和の理念に共感し、その実現に向けて一緒に歩んでくださる方をお待ちしています。",
  },
  wanted: [
    "相手の気持ちや状況を察することができる方",
    "出来事に主観的になりすぎず、落ち着いて対応できる方",
    "訪問看護が好きな方、これから挑戦してみたい方",
  ],
  merits: [
    {
      title: "はじめての訪問看護も、ていねいに",
      body: "未経験の方も歓迎。座学や同行訪問の期間は、一人ひとりの経験に合わせて決めます。",
      photo: { src: "/images/photos/work-ojt.webp", alt: "2人の看護師が書類を見ながら相談している様子" },
    },
    {
      title: "オンコールは、ベテランと二人体制から",
      body: "慣れるまではベテラン職員とダブル体制で対応。急変への備えは日頃の訪問から講じています。",
    },
    {
      title: "子育て中・ブランクのある方も",
      body: "職員はみんな子育て経験者。急なお休みにも理解があり、協力を惜しみません。",
    },
    {
      // TODO【要確認】写真ではノートPCを使用。PCも併用か
      title: "記録はITで、事務は最小限に",
      body: "電子カルテ「iBow」をiPadで使い、訪問先で入力。ITを活用して、看護以外の仕事をできるだけ減らしています。",
      photo: { src: "/images/photos/work-record.webp", alt: "2人の看護師がパソコンで記録をしている様子" },
    },
    {
      title: "がんばりが報われるインセンティブ",
      body: "訪問件数に応じたインセンティブ制度があります。",
    },
  ],
  // TODO【要確認】各部屋の呼び方と用途
  facility: {
    heading: "訪問から戻ったら、ほっとひと息。",
    lead: "陽和の事業所には、スタッフがゆっくり休めて、安心して相談できる場所があります。訪問で疲れた心と体を休める「羽を休める場所」を大切にしています。",
    main: {
      name: "スタッフルーム",
      src: "/images/photos/facility-staffroom.webp",
      alt: "木のテーブルとカラフルな椅子、本棚と観葉植物のあるスタッフルーム",
      body: "カフェのような、ほっとできる場所。大きなテーブルを囲んで、ちょっとした相談も、おしゃべりも。",
    },
    rooms: [
      {
        name: "休憩室",
        src: "/images/photos/facility-restroom-washitsu.webp",
        alt: "丸い座卓と座布団が置かれた畳の休憩室",
        body: "畳の部屋で、足をのばしてゆっくり。お昼休みや、訪問の合間にくつろげます。",
      },
      {
        name: "相談室",
        src: "/images/photos/facility-consult-room.webp",
        alt: "丸テーブルとオレンジの椅子がある個室の相談室",
        body: "落ち着いて話せる個室。ご家族との面談や、スタッフ同士の相談に使います。",
      },
      {
        name: "ロッカールーム",
        src: "/images/photos/facility-locker.webp",
        alt: "個人ロッカーとハンガーラックのあるロッカールーム",
        body: "一人ひとりに個人ロッカー。ユニフォームは3着貸与、洗濯は事業所で行います。",
      },
      {
        name: "社用車",
        src: "/images/photos/work-car.webp",
        alt: "リュックを背負った看護師が社用車に乗り込む様子",
        body: "訪問は社用車・自転車で。訪問車両の自己負担はありません。駐車場も完備。",
      },
    ],
  },
  benefits: [
    { icon: "shirt", label: "ユニフォーム", body: "4色（オリーブ／ココアブラウン／ティールグリーン／グレージュ）から選べる男女兼用スクラブ。3着貸与、洗濯は事業所で行います" },
    { icon: "car", label: "移動手段", body: "社用車・自転車・徒歩など距離に応じて。訪問車両の自己負担なし" },
    { icon: "route", label: "直行直帰", body: "可" },
    { icon: "home", label: "訪問件数", body: "1日5〜6件（訪問時間による）" },
    { icon: "moon", label: "オンコール", body: "月5回程度（現在の職員数の場合）・待機手当あり" },
    { icon: "tablet", label: "記録", body: "iPad（iBow）" },
    { icon: "book", label: "研修", body: "研修制度あり" },
    { icon: "calendar", label: "休暇", body: "年間休日120日以上、リフレッシュ休暇（10日間）、年末年始休暇（12/30〜1/3）。休みは原則ご本人の希望に合わせます" },
    { icon: "sprout", label: "その他", body: "健康診断、交通費支給、駐車場完備（車通勤OK）、社会保険完備、自由参加のレクリエーション" },
    { icon: "pin", label: "アクセス", body: "駅から徒歩5分" },
  ],
  uniform: {
    heading: "それぞれの色で、同じ想いを。",
    body: "ひとりひとりの個性が、陽和のチカラに。動きやすく、心地よく、わたしたちらしく。",
    // TODO オリーブ・グレージュの写真が届いたら photo を入れる（未撮影のため色見本だけ表示）
    colors: [
      { name: "ココアブラウン", value: "var(--cocoa)", photo: "/images/photos/portrait-brown.webp" },
      { name: "ティールグリーン", value: "var(--teal)", photo: "/images/photos/portrait-blue.webp" },
      { name: "オリーブ", value: "var(--olive)" },
      { name: "グレージュ", value: "var(--greige)" },
    ] as { name: string; value: string; photo?: string }[],
  },
  day: [
    { time: "9:00", text: "出勤・朝礼" },
    { time: "9:30", text: "午前の訪問（1件目〜）" },
    { time: "12:30", text: "昼休憩" },
    { time: "13:30", text: "午後の訪問（2〜3件）" },
    { time: "17:30", text: "訪問終了・記録" },
    { time: "18:00", text: "退勤" },
  ],
  // 募集要項。文言は原稿のまま、見せ方のために区切っている
  requirements: [
    {
      id: "nurse",
      label: "看護師",
      title: "看護師（常勤・パート）",
      job: "訪問看護業務",
      salary: {
        // TODO【要確認】「年収500万円以上」を条件付きの例として表記するか
        full: { main: "月給30万円〜", note: "（経験に応じて決定）＋諸手当" },
        // TODO【要確認】時給と訪問手当の関係（時給に加算されるのか、どちらか一方か）
        part: {
          main: "時給1,200円",
          visitLabel: "＋訪問1件ごとの手当",
          visits: [
            ["30分未満", "700円"],
            ["60分未満", "1,200円"],
            ["90分未満", "1,600円"],
          ],
          note: "＋諸手当",
        },
      },
      allowances: [
        ["待機手当", "2,000円/日"],
        ["通勤手当", "上限30,000円"],
        ["退院支援会議参加手当", "2,000円/件"],
        ["ターミナルケア手当", "5,000円/件"],
        ["エンゼルケア手当", "5,000円/件"],
        ["インセンティブ", "月70件以上で1件3,500円"],
      ],
      qualifications: [
        { text: "看護師資格", tag: "必須" },
        { text: "訪問看護経験者・認定看護師・特定看護師", tag: "優遇" },
        { text: "普通自動車免許", tag: "あれば尚可" },
      ],
      groups: [
        {
          title: "勤務",
          rows: [
            // TODO【要確認】休憩時間
            ["勤務時間", "9:00〜18:00（休憩60分）"],
            ["休日", "週休2日制、年末年始（12/30〜1/3）、リフレッシュ休暇10日間／年間休日120日以上"],
            ["残業", "月平均20時間"],
            // TODO【要確認】試用期間
            ["試用期間", "3か月（条件の変更なし）"],
          ],
        },
        {
          title: "待遇",
          rows: [
            ["昇給・賞与", "昇給 年1回／賞与 年2回"],
            ["社会保険", "健康保険・厚生年金・雇用保険・労災保険"],
          ],
        },
        {
          title: "勤務地など",
          rows: [
            ["勤務地", "訪問看護ステーション陽和（さいたま市北区宮原町）／変更の範囲：変更なし"],
            ["業務内容の変更の範囲", "変更なし"],
            ["受動喫煙対策", "事業所内・訪問車両内禁煙"],
          ],
        },
      ],
      // JobPosting 用
      jsonLdSalary: { monthly: 300000, hourly: 1200 },
    },
    {
      id: "therapist",
      label: "理学療法士・作業療法士",
      title: "理学療法士・作業療法士（常勤・パート）",
      job: "訪問看護ステーションからのリハビリテーション",
      salary: {
        full: { main: "月給30万円以上", note: "＋諸手当", extra: "インセンティブ（月80件以上で1件3,500円）" },
        part: {
          main: "時給1,200円",
          visitLabel: "＋訪問1件ごとの手当",
          visits: [
            ["20分", "500円"],
            ["40分", "1,000円"],
            ["60分", "1,300円"],
          ],
          note: "＋諸手当",
        },
      },
      allowances: [
        ["通勤手当", "上限30,000円"],
        ["退院カンファレンス", "2,000円"],
        ["担当者会議", "1,000円"],
        ["土日出勤", "1,000円"],
        ["自家用車借り上げ", "5,000円"],
      ],
      qualifications: [{ text: "理学療法士 または 作業療法士の資格", tag: "必須" }],
      groups: [
        {
          title: "勤務",
          rows: [
            ["勤務時間", "9:00〜18:00"],
            ["休日", "看護師と同じ"],
            ["残業", "なし"],
            ["試用期間", "3か月"],
          ],
        },
        {
          title: "待遇",
          rows: [
            ["昇給・賞与", "昇給 年1回／賞与 年2回"],
            ["社会保険", "健康保険・厚生年金・雇用保険・労災保険"],
          ],
        },
        {
          title: "勤務地など",
          rows: [
            ["勤務地", "看護師と同じ／変更の範囲：変更なし"],
            ["受動喫煙対策", "事業所内・訪問車両内禁煙"],
          ],
        },
      ],
      jsonLdSalary: { monthly: 300000, hourly: 1200 },
    },
  ] as Requirement[],
  steps: ["エントリー", "面接（1回）", "内定（面接後1週間以内にご連絡）"],
  stepsNote: "見学はご希望があれば随時。同行体験もできます。",
  faq: [
    { q: "子育て中で、急なお休みが必要になることがあります。", a: "職員はみんな子育てを経験しています。事情はよくわかりますので、協力は惜しみません。" },
    { q: "オンコールを担当するのが不安です。", a: "急変や緊急時への備えは、日頃の訪問の中で講じています。慣れないうちはベテラン職員とダブル体制で対応するので、心配はいりません。" },
    { q: "車で通勤できますか？", a: "駅から徒歩5分の場所ですが、車通勤もOKです。駐車場もあります。" },
    { q: "訪問看護は未経験ですが、大丈夫ですか？", a: "大丈夫です。座学や同行訪問の期間は、経験に合わせて一人ひとり決めます。" },
  ],
  cta: {
    heading: "まずは見学から",
    body: "話を聞いてみたい方もお気軽に",
    entry: { href: "/entry", label: "見学・エントリーはこちら" },
  },
  // JobPosting 用。掲載期間は公開時に見直す
  datePosted: "2026-11-01",
  validThrough: "2027-10-31",
};
