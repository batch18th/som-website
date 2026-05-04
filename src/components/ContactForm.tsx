"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const web3FormsEndpoint = "https://api.web3forms.com/submit";

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
      if (!web3FormsAccessKey) {
        throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Add it to .env.local.");
      }

      formData.append("access_key", web3FormsAccessKey);
      formData.append("subject", "New Meta Ads Audit Request");
      formData.append("from_name", "Meta Ads Expert Website");

      const response = await fetch(form.action, {
        method: "POST",
        body: formData
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Email sending failed. Please try again.");
      }

      setStatus("success");
      setMessage(result.message || "Your audit request was sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Email sending failed. Please try again.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      action={web3FormsEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 sm:grid-cols-2"
    >
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Name
        <input
          required
          name="name"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Business name
        <input
          required
          name="business"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Email
        <input
          required
          type="email"
          name="email"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        WhatsApp number
        <input
          required
          name="whatsapp"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
        Website or social media link
        <input
          name="website"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
        What are you struggling with?
        <textarea
          required
          name="struggle"
          rows={4}
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
        Monthly ad budget range
        <select
          name="budget"
          className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option>Not running ads yet</option>
          <option>Under $500/month</option>
          <option>$500-$1,500/month</option>
          <option>$1,500-$5,000/month</option>
          <option>$5,000+/month</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400 sm:col-span-2"
      >
        {isLoading ? "Sending..." : "Request Free Audit"}
      </button>
      {message ? (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm font-medium sm:col-span-2 ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
