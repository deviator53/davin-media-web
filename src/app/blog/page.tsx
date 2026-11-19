import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides on websites, apps, digital marketing, tech skills and careers in Nigeria, from the Davin Media team.",
  alternates: { canonical: "/blog" },
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" });

export default function Blog() {
  const posts = getPosts();
  const trail = [{ name: "Blog" }];
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs trail={trail} />
          <h1 className="h-display h2">The Davin Media <span className="accent">blog</span></h1>
          <p className="lead" style={{ marginTop: 16 }}>Practical guides on websites, apps, digital marketing, tech skills and careers.</p>
        </div>
      </header>
      <section className="section">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="lead">New articles are coming soon.</p>
          ) : (
            <div className="grid-2">
              {posts.map((p) => (
                <Link href={`/blog/${p.slug}`} className="card" key={p.slug}>
                  <p className="post-meta">{p.category} · {fmt(p.date)} · {p.readingMinutes} min read</p>
                  <h2 className="h3" style={{ fontSize: 30 }}>{p.title}</h2>
                  <p>{p.description}</p>
                  <span className="more">Read article →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
