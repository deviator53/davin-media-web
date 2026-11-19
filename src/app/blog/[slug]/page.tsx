import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import { Breadcrumbs, CtaBand, breadcrumbSchema } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.date },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const trail = [{ name: "Blog", href: "/blog" }, { name: p.title }];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    image: `${site.url}/og.png`,
  };
  return (
    <>
      <header className="page-hero">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Breadcrumbs trail={trail} />
          <p className="post-meta">{p.category} · {new Date(p.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })} · {p.readingMinutes} min read</p>
          <h1 className="h-display" style={{ fontSize: "clamp(44px, 6vw, 84px)", marginTop: 12 }}>{p.title}</h1>
        </div>
      </header>
      <article className="section">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
          <p style={{ marginTop: 40 }}><Link href="/blog" className="link-u">← All articles</Link></p>
        </div>
      </article>
      <section className="section" style={{ paddingTop: 0 }}><div className="wrap"><CtaBand /></div></section>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
