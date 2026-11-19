# Davin Media website (Next.js)

Next.js 15 (App Router, TypeScript), statically generated. Self-hosted fonts. Markdown blog.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Copy `.env.example` to `.env.local`. Deploy to Vercel and set `NEXT_PUBLIC_SITE_URL`.

## Where to edit
- `src/lib/site.ts`: name, phones, email, address, hours, social links, stats. Search for CONFIRM.
- `src/lib/services.ts`: all four service pages (copy, FAQs, process).
- `content/blog/*.md`: blog posts (frontmatter: title, description, date, category, draft).
- `src/components/HeroSlider.tsx`: the two-slide hero. `public/images/hero-portrait.webp` is the portrait.
- `src/components/Logo.tsx`: placeholder logo mark. Replace with your real logo.

## Before launch (TODO)
1. Replace the `[00]+` stats with real numbers.
2. Confirm name, email, Abuja vs Lagos, and domain in `site.ts`.
3. Add real logo, favicon and og image (`public/og.png`).
4. Review privacy and terms pages.
5. Add social URLs in `site.ts`, then Google Business Profile and Search Console (submit `/sitemap.xml`).
6. Old `.html` URLs already 301 redirect to the new routes (see `next.config.mjs`).
