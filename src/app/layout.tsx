import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/big-shoulders-display/latin-800";
import "@fontsource/big-shoulders-display/latin-900";
import "@fontsource/instrument-serif/latin-400-italic";
import "@fontsource/jetbrains-mono/latin-500";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortName} | Websites, Apps, Training & Digital Marketing in Abuja`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    url: "/",
    title: `${site.shortName} | Websites, Apps, Training & Digital Marketing`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0B0C10", width: "device-width", initialScale: 1 };

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/og.png`,
  description: site.description,
  email: site.email,
  telephone: site.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [{ "@type": "City", name: "Abuja" }, { "@type": "Country", name: "Nigeria" }],
  openingHoursSpecification: site.hours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.dayOfWeek, opens: h.opens, closes: h.closes })),
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
