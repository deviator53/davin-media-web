import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", description: `Terms for using the ${site.name} website.`, alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <>
      <header className="page-hero"><div className="wrap"><Breadcrumbs trail={[{ name: "Terms of service" }]} /><h1 className="h-display h2">Terms of service</h1></div></header>
      <section className="section"><div className="wrap prose">
        {/* TODO(David): replace with your real terms, ideally reviewed by a lawyer. */}
        <p>By using this website you agree to these terms. Information on this site is general and may change. Specific projects, training programmes and placements are governed by the written agreement or proposal we provide for them.</p>
        <h2>Use of the site</h2>
        <p>Do not misuse this site, attempt to disrupt it, or submit false or harmful content through our forms.</p>
        <h2>Content</h2>
        <p>The text, design and images on this site belong to {site.name} or its licensors. Please ask before reusing them.</p>
        <h2>Contact</h2>
        <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  );
}
