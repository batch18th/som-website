import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  highlighted?: boolean;
};

export function FeatureCard({ title, children, icon: Icon, highlighted = false }: FeatureCardProps) {
  return (
    <article
      className={`rounded-lg border p-6 shadow-sm transition duration-200 hover:-translate-y-1 ${
        highlighted
          ? "border-blue-200 bg-blue-50/70 shadow-blue-100/70"
          : "border-slate-200 bg-white shadow-slate-100"
      }`}
    >
      {Icon ? (
        <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Icon aria-hidden="true" className="size-5" />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </article>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
};

export function StepCard({ step, title, children, icon: Icon }: StepCardProps) {
  return (
    <article className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-slate-950 text-white">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          {step}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{children}</p>
    </article>
  );
}

export function TestimonialCard({ children }: { children: React.ReactNode }) {
  return (
    <figure className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
      <blockquote className="text-base leading-8 text-slate-700">&quot;{children}&quot;</blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-slate-500">
        Placeholder testimonial
      </figcaption>
    </figure>
  );
}
