import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-background px-4 py-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Silk"
          width={56}
          height={56}
          priority
        />
      </Link>
    </header>
  );
}
