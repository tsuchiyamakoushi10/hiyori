import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd, medicalBusinessJsonLd, siteUrl } from "@/lib/jsonld";
import "./globals.css";

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

const noto = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  style: "italic",
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const titleSuffix = "訪問看護ステーション陽和（ひより）さいたま市北区";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleSuffix,
    template: `%s｜${titleSuffix}`,
  },
  description:
    "さいたま市北区の訪問看護ステーション陽和（ひより）。がん・緩和ケア、難病、医療的ケア、小児、精神科、ご自宅での看取りまで。北区・西区・大宮区・上尾市・伊奈町に訪問します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "訪問看護ステーション陽和（ひより）",
  },
};

// 5-1：TOPの初回訪問時だけオープニングを出す。描画前に判定してちらつきを防ぐ。
const introScript = `try{if(location.pathname==="/"&&!sessionStorage.getItem("hiyori-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("intro-on");sessionStorage.setItem("hiyori-intro","1")}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${shippori.variable} ${noto.variable} ${cormorant.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <noscript>
          <style>{`.reveal,.reveal-mask,.reveal-blur{opacity:1!important;transform:none!important;filter:none!important;mask-image:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-brown px-5 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          本文へ移動
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCta />
        <JsonLd data={medicalBusinessJsonLd()} />
      </body>
    </html>
  );
}
