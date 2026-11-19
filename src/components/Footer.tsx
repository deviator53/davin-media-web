import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Logo />
            <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 320 }}>{site.tagline}.</p>
            {socials.length > 0 && (
              <ul style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {socials.map(([name, url]) => (
                  <li key={name}><a href={url} rel="noopener noreferrer" target="_blank" style={{ textTransform: "capitalize" }}>{name}</a></li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              {nav.map((n) => (<li key={n.href}><Link href={n.href}>{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <address style={{ fontStyle: "normal", display: "grid", gap: 10, fontSize: 15, color: "var(--muted)" }}>
              <span>{site.address.full}</span>
              {site.phones.map((p) => (<a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>))}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy policy</Link> · <Link href="/terms">Terms of service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
