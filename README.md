# Meta Ads Expert Portfolio

A production-ready Next.js App Router landing page for a Meta Ads expert. The page is built for a free audit / WhatsApp conversion flow and uses Tailwind CSS with reusable components.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Placeholders To Replace

- Replace `metadataBase` in `src/app/layout.tsx` with the production domain.
- Replace the social proof placeholders with real case studies, screenshots, and testimonials.
- Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to `.env.local` so the audit form can send email through Web3Forms.

## Contact Form Email Setup

The audit form posts to `src/app/api/contact/route.ts`, which sends the email through Web3Forms.

Create `D:\som-website\.env.local`:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Get a free access key from `https://web3forms.com/`. Use the email address `sommeodies0752@gmail.com` when creating the key.
