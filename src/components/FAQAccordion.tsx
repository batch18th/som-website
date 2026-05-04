"use client";

import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-100">
      {items.map((item, index) => (
        <details key={item.question} className="group p-6" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-950">
            {item.question}
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180"
            />
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
