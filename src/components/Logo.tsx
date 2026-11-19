import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ size = 80 }: { size?: number }) {
  return (
    <Image
      src="/images/davin-logo.png" // Update this to match your exact filename (e.g., .png, .webp, .svg)
      alt="" // Empty alt because the parent Link already has an aria-label
      width={170}
      height={50} // Keeps your original aspect ratio
      priority // Ensures the logo loads immediately without lazy-loading
    />
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <LogoMark />
      {/* <span>{site.shortName}</span> */}
    </Link>
  );
}
