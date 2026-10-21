import { Phrase } from "@/components/ui/Phrase";
import type { Requirement } from "@/content/recruit";

const tagStyle = {
  必須: "bg-peach-soft text-[#a2452f]",
  優遇: "bg-sun-soft text-brown",
  あれば尚可: "bg-sage-soft text-sage-deep",
};

// 募集要項：給与（常勤・パートを並べる）→ 手当 → 応募資格 → そのほかの条件
export function RequirementDetail({ r }: { r: Requirement }) {
  const { full, part } = r.salary;
  return (
    <div className="space-y-10">
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-2xl bg-paper px-5 py-3">
        <span className="text-[13px] text-brown">仕事内容</span>
        <span className="font-serif text-[16px] font-semibold tracking-[0.04em]">
          <Phrase>{r.job}</Phrase>
        </span>
      </p>

      {/* 給与 */}
      <section aria-labelledby={`${r.id}-salary`}>
        <h4 id={`${r.id}-salary`} className="font-serif text-[17px] font-semibold tracking-[0.08em]">
          給与
        </h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-[20px] border border-line bg-paper px-6 py-6">
            <p className="inline-block rounded-full bg-brown px-3 py-0.5 text-[12px] tracking-[0.12em] text-white">常勤</p>
            <p className="mt-3 font-serif text-[26px] leading-tight font-medium tracking-[0.04em] text-ink">{full.main}</p>
            <p className="mt-1 text-[13px] text-brown">
              <Phrase>{full.note}</Phrase>
            </p>
            {full.extra && (
              <p className="mt-3 border-t border-line pt-3 text-[13px] text-brown">
                <Phrase>{full.extra}</Phrase>
              </p>
            )}
          </div>
          <div className="rounded-[20px] border border-line bg-paper px-6 py-6">
            <p className="inline-block rounded-full border border-brown px-3 py-0.5 text-[12px] tracking-[0.12em] text-brown">パート</p>
            <p className="mt-3 font-serif text-[26px] leading-tight font-medium tracking-[0.04em] text-ink">{part.main}</p>
            <p className="mt-2 text-[13px] text-brown">{part.visitLabel}</p>
            <dl className="mt-2 grid grid-cols-3 overflow-hidden rounded-xl border border-line text-center">
              {part.visits.map(([time, yen]) => (
                <div key={time} className="border-l border-line first:border-l-0">
                  <dt className="bg-bg2/70 py-1 text-[12px] text-brown">{time}</dt>
                  <dd className="py-1.5 font-serif text-[15px] font-semibold">{yen}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-[13px] text-brown">{part.note}</p>
          </div>
        </div>
      </section>

      {/* 手当 */}
      <section aria-labelledby={`${r.id}-allowance`}>
        <h4 id={`${r.id}-allowance`} className="font-serif text-[17px] font-semibold tracking-[0.08em]">
          手当
        </h4>
        <dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {r.allowances.map(([name, value]) => (
            <div key={name} className="rounded-2xl bg-paper px-4 py-3">
              <dt className="text-[12px] leading-relaxed text-brown">
                <Phrase>{name}</Phrase>
              </dt>
              <dd className="mt-0.5 font-serif text-[15px] leading-snug font-semibold">
                <Phrase>{value}</Phrase>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 応募資格 */}
      <section aria-labelledby={`${r.id}-qualification`}>
        <h4 id={`${r.id}-qualification`} className="font-serif text-[17px] font-semibold tracking-[0.08em]">
          応募資格
        </h4>
        <ul className="mt-4 space-y-2">
          {r.qualifications.map((q) => (
            <li key={q.text} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3">
              <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[11px] ${tagStyle[q.tag]}`}>{q.tag}</span>
              <span className="text-[14px]">
                <Phrase>{q.text}</Phrase>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* そのほかの条件 */}
      {/* 2列に詰めて並べる（枠の高さがちがっても下にすき間を作らない） */}
      <div className="gap-4 lg:columns-2">
        {r.groups.map((g) => (
          <section
            key={g.title}
            aria-label={g.title}
            className="mb-4 break-inside-avoid rounded-[20px] border border-line bg-paper px-5 py-5 sm:px-6"
          >
            <h4 className="font-serif text-[15px] font-semibold tracking-[0.08em] text-sage-deep">{g.title}</h4>
            <dl className="mt-2">
              {g.rows.map(([k, v]) => (
                <div key={k} className="grid gap-0.5 border-b border-line py-3 last:border-b-0 sm:grid-cols-[8.5em_1fr] sm:gap-4">
                  <dt className="text-[13px] text-brown">{k}</dt>
                  <dd className="text-[14px]">
                    <Phrase>{v}</Phrase>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
