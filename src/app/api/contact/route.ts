import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mzzyzqpy";
const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const form = await req.formData();
  // Honeypot: bots fill the hidden field. Pretend success.
  if (clean(form.get("company"), 50)) return NextResponse.json({ ok: true });

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 160);
  const message = clean(form.get("message"), 4000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Please enter your name, a valid email and a message of at least 10 characters." }, { status: 400 });
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name, email, message,
        phone: clean(form.get("phone"), 40),
        service: clean(form.get("service"), 80),
        _subject: `New enquiry from ${name} (davinmedia website)`,
      }),
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send your message right now. Please email or call us." }, { status: 502 });
  }
}
