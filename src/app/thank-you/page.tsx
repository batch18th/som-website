import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Thank You | Meta Ads Expert",
  description: "Your free Meta Ads audit request has been submitted."
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(180deg,#eff6ff,#ffffff)] px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <CheckCircle2 aria-hidden="true" className="size-7" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Thank You! Your Free Audit Request Has Been Submitted.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We have received your details. Our team will review your business and contact you soon.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
