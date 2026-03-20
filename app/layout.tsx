import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "What GPUs support DLSS 5? RTX 5090/5080/5070 confirmed. Check if your RTX 4070, RTX 4080, or RTX 50-series GPU is on the list.",
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
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442184426795655"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
<Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PH9DM6B4MD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PH9DM6B4MD');
          `}
        </Script>
      </body>
    </html>
  );
}
