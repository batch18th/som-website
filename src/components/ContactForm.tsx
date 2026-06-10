"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const formSubmitEndpoint = "https://formsubmit.co/ajax/somdigital0752@gmail.com";
const successMessage = "तपाईंको फर्म submit भएको छ, धन्यवाद। हामी छिट्टै सम्पर्क गर्छौं।";
const errorMessage = "Form submit हुन सकेन। कृपया फेरि प्रयास गर्नुहोस्।";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed.");
      }

      setStatus("success");
      setMessage(successMessage);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(errorMessage);
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      action={formSubmitEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 sm:grid-cols-2"
    >
      <input type="hidden" name="_subject" value="New Free Audit Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Name
        <input
          required
          name="Name"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Business name
        <input
          required
          name="Business name"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Email
        <input
          required
          type="email"
          name="Email"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        WhatsApp number
        <input
          required
          name="WhatsApp number"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
        Website or social media link
        <input
          name="Website or social media link"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
        What are you struggling with?
        <textarea
          required
          name="What are you struggling with?"
          rows={4}
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400 sm:col-span-2"
      >
        {isLoading ? "Submitting..." : "Request Free Audit"}
      </button>
      {message ? (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm font-medium sm:col-span-2 ${
            status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
