import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, expected, unknown, and unsupported status.",
  metadataBase: new URL("https://www.dlss5.net"),
  openGraph: {
    title: "DLSS 5 GPU Compatibility Checker",
    description:
      "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards.",
    type: "website",
    locale: "en_US",
    url: "https://www.dlss5.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Check confirmed, expected, unknown, and unsupported DLSS 5 GPU status.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://www.dlss5.net",
      "pt-BR": "https://www.dlss5.net/pt",
      "x-default": "https://www.dlss5.net",
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
      <body className="antialiased bg-background text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
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
