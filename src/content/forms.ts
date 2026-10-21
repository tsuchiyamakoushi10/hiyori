// お問い合わせ・採用エントリー（docs/content.md「6」「7」）

export const contactPage = {
  en: "Contact",
  title: "お問い合わせ",
  lead: "ご利用のご相談、ご質問はお気軽にどうぞ。ご本人・ご家族、病院・ケアマネジャーの方、どなたからでも承ります。",
  faxNote: "ご依頼書の送付はFAXでも受け付けています",
  relations: ["ご本人", "ご家族", "病院・医療機関", "ケアマネジャー", "その他"] as const,
  // 所属欄を出すご関係
  proRelations: ["病院・医療機関", "ケアマネジャー"],
  contactMethods: ["電話", "メール"] as const,
  // TODO【要確認】返信目安
  thanks: "お問い合わせありがとうございます。2営業日以内に担当者よりご連絡いたします。",
};

export const entryPage = {
  en: "Entry",
  title: "採用エントリー",
  lead: "まずは見学だけ、お話を聞くだけでも大歓迎です。",
  wishes: ["応募する", "見学・話を聞いてみたい"] as const,
  jobs: ["看護師", "理学療法士", "作業療法士"] as const,
  employment: ["常勤", "パート", "相談したい"] as const,
  experience: ["あり", "なし"] as const,
  thanks: "エントリーありがとうございます。担当者よりご連絡いたします。",
};
