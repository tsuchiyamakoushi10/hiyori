import { Phrase } from "./Phrase";

type Props = {
  rows: [string, string][];
  className?: string;
};

export function InfoTable({ rows, className = "" }: Props) {
  return (
    <dl className={`overflow-hidden rounded-[20px] border border-line bg-paper ${className}`}>
      {rows.map(([k, v]) => (
        <div key={k} className="grid border-b border-line last:border-b-0 sm:grid-cols-[180px_1fr]">
          <dt className="bg-bg2/60 px-5 pt-4 pb-1 font-serif text-[14px] font-semibold tracking-[0.06em] sm:px-6 sm:py-5">{k}</dt>
          <dd className="px-5 pt-1 pb-4 text-[14px] leading-[1.9] sm:px-6 sm:py-5"><Phrase>{v}</Phrase></dd>
        </div>
      ))}
    </dl>
  );
}
