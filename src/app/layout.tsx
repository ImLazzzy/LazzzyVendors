import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LazzzyVendors — Start Your Reselling Journey",
  description: "Access premium supplier directories. Source products at wholesale, sell at retail. Instant digital delivery.",
  metadataBase: new URL("https://lazzzyvendors.com"),
  openGraph: {
    title: "LazzzyVendors — Start Your Reselling Journey",
    description: "Get access to premium supplier lists. Shoes, bags, jewelry, cologne & more. Instant digital delivery. Start flipping today.",
    url: "https://lazzzyvendors.com",
    siteName: "LazzzyVendors",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "LazzzyVendors — Reseller Suppliers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LazzzyVendors — Start Your Reselling Journey",
    description: "Get access to premium supplier lists. Shoes, bags, jewelry, cologne & more. Instant digital delivery.",
    images: ["/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
