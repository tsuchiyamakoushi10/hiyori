// お知らせ。新しいものを配列の先頭に足すだけで増やせる。

export type NewsItem = {
  /** 表示用の日付（YYYY.MM.DD） */
  date: string;
  /** datetime 属性用（YYYY-MM-DD）。未確定なら空 */
  datetime: string;
  title: string;
};

export const news: NewsItem[] = [
  { date: "2026.11.01", datetime: "2026-11-01", title: "訪問看護ステーション陽和を開設しました" },
  // TODO 公開日が決まったら日付を入れる
  { date: "2026.10.xx", datetime: "", title: "ホームページを公開しました" },
];
