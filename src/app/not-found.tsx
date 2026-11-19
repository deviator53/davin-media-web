import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: "grid", gap: 20, justifyItems: "start" }}>
        <p className="eyebrow">Error 404</p>
        <h1 className="h-display h2">This page <span className="serif-i">wandered</span> off</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn">Back to home</Link>
      </div>
    </section>
  );
}
