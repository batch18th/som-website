import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Meta Ads Expert | Predictable Lead Growth System",
  description:
    "Stop boosting posts that get likes but no customers. Build a Meta Ads system that brings qualified leads, real inquiries, bookings, and measurable growth.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: [
      {
        url: "/favicon-jpg.jpg",
        type: "image/jpeg"
      }
    ],
    shortcut: "/favicon-jpg.jpg",
    apple: "/favicon-jpg.jpg"
  },
  openGraph: {
    title: "Meta Ads Expert | Predictable Lead Growth System",
    description:
      "Stop boosting posts that get likes but no customers. Build a Meta Ads system that brings qualified leads, real inquiries, bookings, and measurable growth.",
    type: "website",
    url: "/",
    siteName: "Meta Ads Expert",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Meta Ads Expert Predictable Lead Growth System preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Expert | Predictable Lead Growth System",
    description:
      "Stop boosting posts that get likes but no customers. Build a Meta Ads system that brings qualified leads, real inquiries, bookings, and measurable growth.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-white font-sans text-slate-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
