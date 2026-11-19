// Single source of truth for business details.
// TODO(David): confirm every value marked CONFIRM before launch. The old site disagreed with itself.
export const site = {
  name: "Davin Media Technologies", // CONFIRM: old pages said "Davin Media", "Davin Media Limited" and "Davin Media Technologies"
  shortName: "Davin Media",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://davinmedia.com.ng", // CONFIRM domain
  tagline: "Websites, apps, training, recruitment and digital marketing from Abuja",
  description:
    "Davin Media Technologies builds websites and mobile apps, trains professionals in tech skills, places talent and runs digital marketing for businesses in Abuja and across Nigeria.",
  email: "info@davinmediatechnology.com", // CONFIRM: old pages also used davinmediaglobal@gmail.com
  phones: ["+234 805 595 5048", "+234 915 887 0207"],
  address: {
    street: "Suite 201, Kings Gate Plaza, near Stella Maris School, Area 1, Garki",
    city: "Abuja",
    region: "FCT",
    country: "NG",
    full: "Suite 201, Kings Gate Plaza, near Stella Maris School, Area 1, Garki, Abuja, Nigeria", // CONFIRM: About page footer said Lagos
  },
  hours: [
    { days: "Mon - Fri", time: "9AM - 6PM", opens: "09:00", closes: "18:00", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { days: "Sat", time: "10AM - 4PM", opens: "10:00", closes: "16:00", dayOfWeek: ["Saturday"] },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kings+Gate+Plaza+Garki+Abuja",
  // Add profile URLs to show social icons in the footer and in structured data.
  social: { x: "", facebook: "https://web.facebook.com/profile.php?id=61585880095923", instagram: "https://www.instagram.com/davinmediatechnologies/", linkedin: "" } as Record<string, string>,
};

// CONFIRM: replace every value with a real, verifiable figure. The old site showed conflicting numbers.
export const stats = [
  { value: "[50]+", label: "Websites delivered" },
  { value: "[70]+", label: "Professionals trained" },
  { value: "[60]+", label: "Successful placements" },
  { value: "[80]+", label: "Clients served" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
