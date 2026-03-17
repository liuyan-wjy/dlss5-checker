import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker | NVIDIA DLSS5",
  description:
    "Check if your NVIDIA GPU is confirmed for DLSS 5 Neural Rendering (coming Fall 2026). Find all DLSS 5 supported cards, see current DLSS 4/4.5 performance data, and compare DLSS 3 vs 4 vs 4.5 vs 5.",
metadataBase: new URL("https://dlss5.net"),
  openGraph: {
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Check if your GPU is confirmed for DLSS 5 Neural Rendering (Fall 2026) and see current DLSS 4/4.5 performance.",
    type: "website",
    locale: "en_US",
    url: "https://dlss5.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Check DLSS 5 Neural Rendering compatibility for your NVIDIA GPU. Coming Fall 2026.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://dlss5.net",
      "pt-BR": "https://dlss5.net/pt",
      "x-default": "https://dlss5.net",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
