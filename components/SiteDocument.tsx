import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, planned, unsupported, and no-DLSS status.",
  metadataBase: new URL("https://www.dlss5.net"),
  authors: [{ name: "liuyan-wjy", url: "https://github.com/liuyan-wjy" }],
  creator: "liuyan-wjy",
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

export default function SiteDocument({
  children,
  locale = "en",
}: Readonly<{
  children: React.ReactNode;
  locale?: "en" | "pt-BR";
}>) {
  return (
    <html lang={locale} className="dark">
      {/* App Router root layouts render <head> directly; the Pages Router rule does not apply. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* AdSense Auto ads; placements and formats are managed in the AdSense dashboard. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442184426795655"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased bg-background text-foreground">
        <SiteHeader locale={locale === "pt-BR" ? "pt" : "en"} />
        {children}
        <SiteFooter locale={locale === "pt-BR" ? "pt" : "en"} />
        <script
          src="https://plausible-ly-005.pages.dev/js/pa-VclqONE0bFW-1okXx2CnS.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init();
          `,
          }}
        ></script>
      </body>
    </html>
  );
}
