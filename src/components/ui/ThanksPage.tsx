import { Button } from "./Button";
import { SunRays } from "./SunRays";

export function ThanksPage({ en, title, message, back }: { en: string; title: string; message: string; back: { href: string; label: string } }) {
  return (
    <section
      className="pt-36 pb-28 text-center lg:pt-44 lg:pb-36"
      style={{ background: "radial-gradient(700px 500px at 50% 0%, var(--sun-soft) 0%, rgba(252,235,203,0) 60%)" }}
    >
      <div className="container-site">
        <SunRays className="mx-auto w-[140px] opacity-70" />
        <p className="en-label mt-4">{en}</p>
        <h1 className="heading-2 mt-3">{title}</h1>
        <p className="mx-auto mt-6 max-w-[30em] text-brown">{message}</p>
        <div className="mt-10">
          <Button href={back.href} variant="secondary">
            {back.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
