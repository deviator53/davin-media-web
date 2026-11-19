"use client";
import { useState } from "react";
import { services } from "@/lib/services";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setState("ok");
      setMsg("Thanks. Your message was sent and we will reply within one working day.");
    } catch (err) {
      setState("err");
      setMsg(err instanceof Error ? err.message : "Could not send. Please email or call us instead.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="row2">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={120} /></div>
        <div className="field"><label htmlFor="email">Your email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={160} /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
        <div className="field">
          <label htmlFor="service">Service you need</label>
          <select id="service" name="service" defaultValue={defaultService}>
            <option value="">Select a service</option>
            {services.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
            <option value="Other">Something else</option>
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" required minLength={10} maxLength={4000} /></div>
      <div className="hp" aria-hidden="true"><label htmlFor="company">Leave this empty</label><input id="company" name="company" tabIndex={-1} autoComplete="off" /></div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
        <button className="btn" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send message"}</button>
        <p className={`note ${state === "ok" ? "ok" : state === "err" ? "err" : ""}`} role="status" aria-live="polite">{msg}</p>
      </div>
    </form>
  );
}
