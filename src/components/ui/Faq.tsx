import { Phrase } from "./Phrase";

type Props = {
  items: { q: string; a: string }[];
};

// <details> ベースなので JS なしでも開閉できる
export function Faq({ items }: Props) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-[20px] border border-line bg-paper">
          <summary className="flex min-h-14 cursor-pointer list-none items-start gap-4 px-5 py-4 sm:px-7 sm:py-5 [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true" className="font-en text-[22px] leading-none text-sage-deep italic">
              Q.
            </span>
            <span className="flex-1 font-serif text-[15px] leading-[1.7] font-semibold tracking-[0.04em] sm:text-base"><Phrase>{item.q}</Phrase></span>
            <span aria-hidden="true" className="relative mt-2 size-3 shrink-0">
              <span className="absolute top-1/2 left-0 h-px w-3 bg-brown" />
              <span className="absolute top-0 left-1/2 h-3 w-px bg-brown transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>
          <div className="flex gap-4 px-5 pb-5 sm:px-7 sm:pb-6">
            <span aria-hidden="true" className="font-en text-[22px] leading-none text-peach italic">
              A.
            </span>
            <p className="flex-1 text-brown">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
