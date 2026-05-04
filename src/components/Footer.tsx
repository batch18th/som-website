import Link from "next/link";

const navLinks = ["Problem", "System", "Process", "Results", "FAQ"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex text-lg font-bold tracking-tight text-white">
            Meta Ads Expert
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Helping business owners turn Facebook and Instagram into a predictable
            customer-generating system.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Navigate</h2>
          <div className="mt-4 grid gap-3">
            {navLinks.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Connect</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link href="#contact" className="hover:text-white">Book Free Audit</Link>
            <Link href="https://wa.me/YOUR_NUMBER_HERE" className="hover:text-white">WhatsApp</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        Copyright {new Date().getFullYear()} Meta Ads Expert. All rights reserved.
      </div>
    </footer>
  );
}
