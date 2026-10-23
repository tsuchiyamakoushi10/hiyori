import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/jsonld";

export default function robots(): MetadataRoute.Robots {
  // 本番（main）だけ検索に載せる。PRごとのPreviewや手元では載せない
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/contact/thanks", "/entry/thanks"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
