import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://seftoncoastwildlife.co.uk"),
  title: {
    default: "Sefton Coast Wildlife — Birds, Nature & Wildlife on the Sefton Coast",
    template: "%s | Sefton Coast Wildlife",
  },
  description:
    "Independent guide to wildlife on the Sefton Coast — Marshside RSPB Reserve, birdwatching, seasonal guides, and a database of birds, insects, plants and mammals.",
  openGraph: {
    title: "Sefton Coast Wildlife",
    description: "Birds, nature and wildlife on the Sefton Coast — Marshside, the marshes and beyond.",
    url: "https://seftoncoastwildlife.co.uk",
    siteName: "Sefton Coast Wildlife",
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
    <html lang="en">
      <head>
        <Script
          async
          src="https://plausible.io/js/pa-z_7NCo4sRlQHotWhNPfzt.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">{`
          window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init()
        `}</Script>
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--sand)] text-[var(--ink)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
