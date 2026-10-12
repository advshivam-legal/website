import type { MetadataRoute } from "next";
import { getNews } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/services",
  "/about",
  "/news",
  "/locations",
  "/fees",
  "/faq",
  "/terms",
  "/book",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const pages = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const articles = getNews().map((a) => ({
    url: `${base}/news/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  return [...pages, ...articles];
}
