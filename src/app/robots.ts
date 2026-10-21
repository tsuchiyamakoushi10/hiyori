import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/jsonld";

export default function robots(): MetadataRoute.Robots {
  // 本番ドメインが決まるまでは検索に載せない（NEXT_PUBLIC_SITE_URL 未設定＝公開前）
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/contact/thanks", "/entry/thanks"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
