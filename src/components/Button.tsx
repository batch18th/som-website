import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "whatsapp";
  className?: string;
};

const variants = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary:
    "border border-slate-200 bg-white text-slate-950 shadow-sm hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-blue-600",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:outline-blue-600"
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = ""
}: ButtonProps) {
  const Icon = icon === "whatsapp" ? MessageCircle : ArrowRight;

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="size-4" />
    </Link>
  );
}
