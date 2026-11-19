import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { Stats, ServiceCards, Process, Faq, faqSchema, CtaBand } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Davin Media | Web & App Development, Training and Digital Marketing in Abuja" },
  description: site.description,
  alternates: { canonical: "/" },
};

const faqs = [
  { q: "What services does Davin Media offer?", a: "We offer four services: website and app development, professional tech training, job recruiting and placement, and digital marketing. They are designed to work together, so you can use one or all of them." },
  { q: "Where are you based, and do you work outside Abuja?", a: `We are based in ${site.address.city}, Nigeria. We work with clients across Nigeria and remotely with businesses elsewhere.` },
  { q: "How do I get a quote?", a: "Send us a message through the contact page or call us. We will ask a few questions about your goals and reply with a clear scope, timeline and price." },
  { q: "Do you offer support after a project is finished?", a: "Yes. We offer maintenance and support packages for websites and apps, campaign optimisation for marketing, and follow-up support after training and placement." },
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Stats />
      <section className="section" aria-labelledby="services-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we do</p>
            <h2 id="services-h" className="h-display h2">Four services, <span className="serif-i">one</span> team</h2>
            <p className="lead">Build your online presence, train your people, hire the right talent and reach more customers, with one partner that understands all four.</p>
          </div>
          <ServiceCards />
        </div>
      </section>
      <section className="section band" aria-label="How we work">
        <div className="wrap">
          <Process
            steps={[
              { title: "Initial consultation", text: "We learn about your business, goals and challenges so we can plan the right approach." },
              { title: "Planning and strategy", text: "We turn the consultation into a clear roadmap with milestones, timelines and budget." },
              { title: "Build and deliver", text: "Our team executes with regular updates, so you always know where your project stands." },
              { title: "Launch and support", text: "We launch, measure results and keep supporting you as your needs change." },
            ]}
          />
        </div>
      </section>
      <section className="section" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-h" className="h-display h2">Common questions</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap"><CtaBand title="Let's build something that stands out" label="Start a project" /></div>
      </section>
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
