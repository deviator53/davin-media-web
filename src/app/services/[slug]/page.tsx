import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { Breadcrumbs, ServiceIcon, Process, Faq, faqSchema, CtaBand, breadcrumbSchema } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const trail = [{ name: "Services", href: "/services" }, { name: s.title }];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
    url: `${site.url}/services/${s.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Nigeria" },
  };
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs trail={trail} />
          <ServiceIcon slug={s.slug} />
          <h1 className="h-display h2" style={{ marginTop: 20 }}>{s.title}</h1>
          <p className="lead" style={{ marginTop: 16 }}>{s.intro}</p>
          <div style={{ marginTop: 28 }}><Link href={`/contact?service=${s.slug}`} className="btn">{s.cta}</Link></div>
        </div>
      </header>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <div className="prose">
              <h2>Overview</h2>
              {s.overview.map((p) => (<p key={p}>{p}</p>))}
            </div>
            <h2 className="h-display" style={{ fontSize: 44, margin: "48px 0 24px" }}>{s.featuresTitle}</h2>
            <div className="grid-2">
              {s.features.map((f) => (
                <div className="card" key={f.title}>
                  <h3 className="h3" style={{ fontSize: 24 }}>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="aside" aria-label="Key benefits and contact">
            <div className="card">
              <h2 className="h3">Key benefits</h2>
              <ul className="check">{s.benefits.map((b) => (<li key={b}>{b}</li>))}</ul>
            </div>
            <div className="card">
              <h2 className="h3">Need help?</h2>
              {site.phones.map((p) => (<a key={p} href={`tel:${p.replace(/\s/g, "")}`} style={{ fontWeight: 600 }}>{p}</a>))}
              <a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>{site.email}</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section band">
        <div className="wrap"><Process title={s.processTitle} steps={s.process} /></div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 56 }}>
          <div>
            <h2 className="h-display h2" style={{ marginBottom: 32 }}>Questions</h2>
            <Faq items={s.faqs} />
          </div>
          <CtaBand title={s.cta} />
        </div>
      </section>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
