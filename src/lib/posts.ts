import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  html: string;
  readingMinutes: number;
};

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const words = content.split(/\s+/).length;
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        description: String(data.description ?? ""),
        date: new Date(data.date).toISOString().slice(0, 10),
        category: String(data.category ?? "Insights"),
        html: marked.parse(content, { async: false }) as string,
        readingMinutes: Math.max(1, Math.round(words / 220)),
        draft: Boolean(data.draft),
      } as Post & { draft: boolean };
    })
    .filter((p) => !(p as Post & { draft: boolean }).draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
