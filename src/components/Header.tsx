"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Logo />
        <nav id="primary-nav" className={`nav${open ? " open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-sm header-cta">Get a quote</Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
