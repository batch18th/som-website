import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const links = [
  ["Problem", "#problem"],
  ["System", "#system"],
  ["Process", "#process"],
  ["Results", "#results"],
  ["FAQ", "#faq"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="Meta Ads Expert home">
          <Image
            src="/Main logo.png"
            alt="Meta Ads Expert logo"
            width={160}
            height={71}
            priority
            className="h-24 w-auto object-contain sm:h-28"
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-medium text-slate-600 hover:text-blue-700">
              {label}
            </Link>
          ))}
        </div>
        <Button href="#contact" className="hidden sm:inline-flex">
          Book Free Audit
        </Button>
      </nav>
    </header>
  );
}
