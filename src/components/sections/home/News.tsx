import { Reveal } from "@/components/ui/Reveal";
import { news } from "@/content/news";

export function News() {
  return (
    <section aria-labelledby="news-heading" className="container-site relative z-10 -mt-12 lg:-mt-16">
      <Reveal className="grid gap-4 rounded-[20px] bg-paper px-6 py-6 shadow-[var(--shadow-soft)] sm:px-10 sm:py-7 lg:grid-cols-[180px_1fr] lg:items-center lg:gap-8">
        <div className="flex items-baseline gap-3 lg:block lg:border-r lg:border-line">
          <p className="font-en text-[22px] leading-none text-sage-deep italic">News</p>
          <h2 id="news-heading" className="text-xs tracking-[0.14em] text-brown lg:mt-2">
            お知らせ
          </h2>
        </div>
        <ul className="divide-y divide-line lg:divide-y-0">
          {news.slice(0, 3).map((item) => (
            <li key={item.title} className="flex flex-col gap-0.5 py-2 sm:flex-row sm:gap-8 sm:py-1">
              {item.datetime ? (
                <time dateTime={item.datetime} className="shrink-0 font-en text-[15px] text-[#7f7268]">
                  {item.date}
                </time>
              ) : (
                <span className="shrink-0 font-en text-[15px] text-[#7f7268]">{item.date}</span>
              )}
              <span className="text-[14px]">{item.title}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
