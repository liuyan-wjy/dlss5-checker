import type { Metadata } from "next";
import { SiteFooter, SiteHeader, type NavLocale } from "@/components/SiteNavigation";
import "@/app/globals.css";
import { OG_IMAGE_EN } from "@/lib/og-image";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, planned, unsupported, and no-DLSS status.",
  metadataBase: new URL("https://www.dlss5.net"),
  authors: [{ name: "liuyan-wjy", url: "https://www.dlss5.net/about" }],
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
  openGraph: {
    images: [OG_IMAGE_EN],
  },
  robots: {
    index: true,
    follow: true,
    // Lets Google show the large preview image in Discover and image results.
    googleBot: { "max-image-preview": "large" },
  },
};

export type DocumentLocale = "en" | "pt-BR" | "de" | "ko" | "fr";

export default function SiteDocument({
  children,
  locale = "en",
}: Readonly<{
  children: React.ReactNode;
  locale?: DocumentLocale;
}>) {
  const navLocale: NavLocale = locale === "pt-BR" ? "pt" : locale;
  return (
    <html lang={locale} className="dark">
      <head>
        <meta
          name="impact-site-verification"
          content="7467f4c5-9b5a-4c85-8bbb-4907d2b8df1a"
          {...({ value: "7467f4c5-9b5a-4c85-8bbb-4907d2b8df1a" } as Record<string, string>)}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SiteHeader locale={navLocale} />
        {children}
        <SiteFooter locale={navLocale} />
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
