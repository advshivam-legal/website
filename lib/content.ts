import { services, type Service } from "@/content/services";
import { news, type Article } from "@/content/news";
import { faqs, type Faq } from "@/content/faq";

export const getServices = (): Service[] => services;

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** Newest first */
export const getNews = (): Article[] =>
  [...news].sort((a, b) => b.date.localeCompare(a.date));

export const getLatestNews = (n = 3): Article[] => getNews().slice(0, n);

export const getArticleBySlug = (slug: string): Article | undefined =>
  news.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string, n = 2): Article[] =>
  getNews()
    .filter((a) => a.slug !== slug)
    .slice(0, n);

export const getFaqs = (): Faq[] => faqs;

export const getFaqCategories = (): Faq["category"][] =>
  Array.from(new Set(faqs.map((f) => f.category)));
