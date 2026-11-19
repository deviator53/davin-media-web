import type { Metadata } from "next";
import { Breadcrumbs, Faq, faqSchema, breadcrumbSchema } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Davin Media in Garki, Abuja. Call, email or send a message for a free consultation on websites, training, recruitment or digital marketing.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  { q: "How long does it take to build a website?", a: "A basic business website typically takes a few weeks. E-commerce stores and custom applications take longer. We give you a detailed timeline after the first consultation." },
  { q: "What is your pricing structure?", a: "Pricing depends on the service and project requirements. Contact us for a free consultation and a customised quote." },
  { q: "Do you provide support after a project is complete?", a: "Yes. We offer support and maintenance packages for all our services." },
  { q: "How can I get started?", a: "Fill in the form above, call us or send an email. We will arrange a free consultation to discuss your needs." },
];

export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const preset = services.find((s) => s.slug === service)?.title ?? "";
  const trail = [{ name: "Contact" }];
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs trail={trail} />
          <h1 className="h-display h2">Let&apos;s build something <span className="serif-i">amazing</span> together</h1>
          <p className="lead" style={{ marginTop: 16 }}>Ready to transform your business? Contact us for a free consultation and see how our solutions can help you reach your goals.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap two-col" style={{ gridTemplateColumns: "minmax(0, 340px) minmax(0, 1fr)" }}>
          <div className="aside" style={{ position: "static" }}>
            <div className="card"><h2 className="h3">Visit us</h2><address style={{ fontStyle: "normal", color: "var(--muted)" }}>{site.address.full}</address><a className="more" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps →</a></div>
            <div className="card"><h2 className="h3">Call us</h2>{site.phones.map((p) => (<a key={p} href={`tel:${p.replace(/\s/g, "")}`} style={{ fontWeight: 600 }}>{p}</a>))}</div>
            <div className="card"><h2 className="h3">Email us</h2><a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>{site.email}</a></div>
            <div className="card"><h2 className="h3">Business hours</h2>{site.hours.map((h) => (<p key={h.days}>{h.days}: {h.time}</p>))}</div>
          </div>
          <div className="card" style={{ padding: "clamp(24px, 4vw, 40px)" }}>
            <h2 className="h3" style={{ fontSize: 32 }}>Send a message</h2>
            <ContactForm defaultService={preset} />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <h2 className="h-display h2" style={{ marginBottom: 32 }}>Frequently asked questions</h2>
          <Faq items={faqs} />
        </div>
      </section>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
