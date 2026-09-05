import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards & GPU Compatibility Checker",
  description:
    "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, planned, unsupported, and no-DLSS status.",
  metadataBase: new URL("https://www.dlss5.net"),
  authors: [{ name: "DLSS 5 Checker Editor", url: "https://www.dlss5.net/about" }],
  creator: "DLSS 5 Checker Editor",
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
