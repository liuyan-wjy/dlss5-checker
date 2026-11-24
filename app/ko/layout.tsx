import type { Metadata } from "next";
import SiteDocument, { metadata as siteMetadata } from "@/components/SiteDocument";
import { OG_IMAGE_KO } from "@/lib/og-image";

export const metadata: Metadata = {
  ...siteMetadata,
  openGraph: { images: [OG_IMAGE_KO] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="ko">{children}</SiteDocument>;
}
