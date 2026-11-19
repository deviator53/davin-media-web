import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["", "/about", "/services", "/blog", "/contact"].map((p) => ({
    url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8,
  }));
  const svc = services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 }));
  const posts = getPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...fixed, ...svc, ...posts];
}
