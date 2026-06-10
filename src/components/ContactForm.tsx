const formSubmitEndpoint = "https://formsubmit.co/somdigital0752@gmail.com";
const thankYouUrl = "https://www.sombahadurtamang.com/thank-you";

export function ContactForm() {
  return (
    <form
      action={formSubmitEndpoint}
      method="POST"
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 sm:grid-cols-2"
    >
      <input type="hidden" name="_subject" value="New Free Audit Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={thankYouUrl} />
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
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-span-2"
      >
        Request Free Audit
      </button>
    </form>
  );
}
