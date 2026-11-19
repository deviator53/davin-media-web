import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `How ${site.name} collects and uses information.`, alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <>
      <header className="page-hero"><div className="wrap"><Breadcrumbs trail={[{ name: "Privacy policy" }]} /><h1 className="h-display h2">Privacy policy</h1></div></header>
      <section className="section"><div className="wrap prose">
        {/* TODO(David): have this reviewed against Nigerian data protection requirements (NDPA) before launch. */}
        <p>This policy explains what information {site.name} collects through this website and how we use it.</p>
        <h2>What we collect</h2>
        <p>When you use our contact form we collect your name, email address, phone number (optional), the service you are interested in and your message. We use this only to reply to your enquiry and to provide the service you ask for.</p>
        <h2>How we use it</h2>
        <p>We do not sell your information. We share it only with providers that help us operate the site, such as our form-handling and hosting services, and where the law requires.</p>
        <h2>Your choices</h2>
        <p>You can ask us to see, correct or delete the information we hold about you by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Contact</h2>
        <p>{site.name}, {site.address.full}.</p>
      </div></section>
    </>
  );
}
