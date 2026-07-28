import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, expected, unknown, and unsupported status.",
  metadataBase: new URL("https://www.dlss5.net"),
  authors: [{ name: "DLSS 5 Checker Editorial Team", url: "https://www.dlss5.net/about" }],
  creator: "DLSS 5 Checker Editorial Team",
  publisher: "DLSS 5 Checker",
  other: {
    "google-adsense-account": "ca-pub-5442184426795655",
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
        <Script id="google-consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
          `}
        </Script>
        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442184426795655"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PH9DM6B4MD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', 'G-PH9DM6B4MD');
          `}
        </Script>
        <Script
          id="plausible-analytics"
          src="https://plausible-ly-005.pages.dev/js/pa-VclqONE0bFW-1okXx2CnS.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init();
          `}
        </Script>
      </body>
    </html>
  );
}
