import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lilah",
    default: "Lilah — Your AI Meeting Sidekick",
  },
  description:
    "Real-time transcription, live AI insights, and structured meeting minutes — all without anyone knowing. Lilah listens so you can lead.",
  keywords: [
    "AI meeting assistant",
    "real-time transcription",
    "meeting notes",
    "AI insights",
    "meeting minutes",
    "speech to text",
  ],
  authors: [{ name: "Strategic Automation" }],
  openGraph: {
    title: "Lilah — Your AI Meeting Sidekick",
    description:
      "Real-time transcription, live AI insights, and structured meeting minutes — all without anyone knowing.",
    url: "https://lilah.app",
    siteName: "Lilah",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilah — Your AI Meeting Sidekick",
    description:
      "Real-time transcription, live AI insights, and structured meeting minutes — all without anyone knowing.",
  },
  metadataBase: new URL("https://lilah.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
