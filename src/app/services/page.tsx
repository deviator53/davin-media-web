import type { Metadata } from "next";
import { Breadcrumbs, ServiceCards, CtaBand, breadcrumbSchema } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Website and app development, professional training, job recruiting and placement, and digital marketing from Davin Media in Abuja.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const trail = [{ name: "Services" }];
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs trail={trail} />
          <h1 className="h-display h2">Our <span className="accent">services</span></h1>
          <p className="lead" style={{ marginTop: 16 }}>Everything a growing business or ambitious professional needs to build, learn, hire and be found online.</p>
        </div>
      </header>
      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 56 }}>
          <ServiceCards />
          <CtaBand />
        </div>
      </section>
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
