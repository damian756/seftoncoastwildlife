import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.seftoncoastwildlife.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    types: {
      "application/rss+xml": `${BASE_URL}/feed`,
    },
  },
  title: {
    default: "Sefton Coast Wildlife — Birds, Nature & Wildlife on the Sefton Coast",
    template: "%s | Sefton Coast Wildlife",
  },
  description:
    "Independent guide to wildlife on the Sefton Coast — Marshside RSPB Reserve, birdwatching, seasonal guides, and a database of birds, insects, plants and mammals.",
  openGraph: {
    title: "Sefton Coast Wildlife",
    description: "Birds, nature and wildlife on the Sefton Coast — Marshside, the marshes and beyond.",
    url: "https://www.seftoncoastwildlife.co.uk",
    siteName: "Sefton Coast Wildlife",
    images: [
      {
        url: `${BASE_URL}/images/species/birds/pink-footed-goose.jpg`,
        width: 1200,
        height: 630,
        alt: "Pink-footed Geese over the Sefton Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${BASE_URL}/images/species/birds/pink-footed-goose.jpg`],
  },
  icons: {
    icon: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--sand)] text-[var(--ink)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="C1Ac+ns9KLhbhszqNbaXRw" strategy="afterInteractive" />
      </body>
    </html>
  );
}
