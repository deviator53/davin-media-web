import Link from "next/link";
import { stats } from "@/lib/site";
import { services } from "@/lib/services";

export function Stats() {
  return (
    <div className="wrap">
      <div className="stats" role="list" aria-label="Davin Media in numbers">
        {stats.map((s) => (
          <div className="stat" role="listitem" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const icons: Record<string, React.ReactNode> = {
  "website-development": <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  training: <path d="M2 9l10-5 10 5-10 5-10-5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />,
  "recruiting-placement": <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a3 3 0 100-6M21 20c0-2.5-1.5-4-3.5-4.7" />,
  "digital-marketing": <path d="M3 11v3l12 5V6L3 11zM15 9a4 4 0 010 6M6 14v4" />,
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span className="icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[slug]}
      </svg>
    </span>
  );
}

export function ServiceCards() {
  return (
    <div className="grid-4">
      {services.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="card">
          <ServiceIcon slug={s.slug} />
          <h3 className="h3">{s.title}</h3>
          <p>{s.short}</p>
          <span className="more">Learn more →</span>
        </Link>
      ))}
    </div>
  );
}

export function Process({ title = "How we work", steps }: { title?: string; steps: { title: string; text: string }[] }) {
  return (
    <>
      <h2 className="h-display h2" style={{ marginBottom: 40 }}>{title}</h2>
      <ol className="steps">
        {steps.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function CtaBand({ title = "Ready to start?", text = "Tell us what you need and we will reply with a clear plan and quote.", label = "Contact us" }: { title?: string; text?: string; label?: string }) {
  return (
    <div className="cta-band">
      <div style={{ display: "grid", gap: 10, maxWidth: 560 }}>
        <h2 className="h-display" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>{title}</h2>
        <p className="lead">{text}</p>
      </div>
      <Link href="/contact" className="btn">{label}</Link>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <Link href="/">Home</Link>
      {trail.map((t) => (
        <span key={t.name}>
          / {t.href ? <Link href={t.href}>{t.name}</Link> : <span aria-current="page" style={{ color: "var(--fg)" }}>{t.name}</span>}
        </span>
      ))}
    </nav>
  );
}

export function breadcrumbSchema(base: string, trail: { name: string; href?: string }[]) {
  const all = [{ name: "Home", href: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, ...(t.href ? { item: `${base}${t.href}` } : {}) })),
  };
}
