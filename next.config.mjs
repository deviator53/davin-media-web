/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // Old static-site URLs -> new routes (permanent, keeps existing rankings)
    const map = [
      ["/index.html", "/"],
      ["/about.html", "/about"],
      ["/services.html", "/services"],
      ["/service-details.html", "/services"],
      ["/contact.html", "/contact"],
      ["/website-development.html", "/services/website-development"],
      ["/training.html", "/services/training"],
      ["/recruiting-placement.html", "/services/recruiting-placement"],
      ["/digital-marketing.html", "/services/digital-marketing"],
    ];
    return map.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};
export default nextConfig;
