import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, breadcrumbSchema } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Davin Media Technologies is an Abuja digital studio that builds websites and apps, trains professionals, places talent and runs digital marketing.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { t: "Technical excellence", d: "Modern, fast and secure websites and apps built with current tools and best practices." },
  { t: "Knowledge transfer", d: "Practical training that prepares people for real work, taught by practitioners." },
  { t: "Talent connection", d: "Strategic recruiting and placement that bridges exceptional talent and leading companies." },
  { t: "Digital growth", d: "Data-driven marketing that amplifies your brand and reaches your audience." },
];
const values = [
  { t: "Integrity", d: "We are transparent and honest in all our dealings, and we deliver on our promises." },
  { t: "Innovation", d: "We keep learning new technologies and methods so clients benefit from current approaches." },
  { t: "Excellence", d: "We aim for quality in every project, training session, placement and campaign." },
  { t: "Collaboration", d: "We work closely with clients and understand their needs before we propose solutions." },
  { t: "Growth mindset", d: "We are committed to continuous learning, and we grow alongside our clients." },
  { t: "Client success", d: "Your success is ours. We measure our work by the results you get." },
];

export default function About() {
  const trail = [{ name: "About" }];
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs trail={trail} />
          <h1 className="h-display h2">About <span className="accent">Davin Media</span></h1>
          <p className="lead" style={{ marginTop: 16 }}>We empower businesses and professionals through web development, training, recruiting and digital marketing. Our mission is to be your trusted partner in digital transformation and sustainable growth.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="grid-4">
            {pillars.map((p) => (<div className="card" key={p.t}><h2 className="h3">{p.t}</h2><p>{p.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap two-col" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", display: "grid" }}>
          <div className="prose">
            <h2>How we started</h2>
            {/* TODO(David): replace with your real founding story, with real dates and places. */}
            <p>Davin Media was founded to bridge the gap between businesses and digital transformation. We saw that companies needed more than separate vendors. They needed one partner who could handle their website, train their people, recruit talent and market their brand together.</p>
            <p>That is why our four services work as one team. Each project benefits from what we learn in the others.</p>
          </div>
          <div className="prose">
            <h2>What drives us</h2>
            <p>We believe every organisation, whatever its size, deserves access to world-class digital solutions, skilled professionals and effective marketing.</p>
            <p>We are not just a service provider. We are a partner in your success, and we bring the same care to every project.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><p className="eyebrow">Our values</p><h2 className="h-display h2">What guides our work</h2></div>
          <div className="grid-4">
            {values.map((v) => (<div className="card" key={v.t}><h3 className="h3">{v.t}</h3><p>{v.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap"><CtaBand title="Ready to work together?" label="Get in touch" /></div>
      </section>
      <JsonLd data={breadcrumbSchema(site.url, trail)} />
    </>
  );
}
