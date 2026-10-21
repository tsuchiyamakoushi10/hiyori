import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/jsonld";

const paths = ["/", "/about", "/service", "/recruit", "/staff", "/contact", "/entry", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
