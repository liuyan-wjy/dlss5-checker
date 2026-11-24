import type { GPU } from "@/lib/gpu-search";

export type RetailerLocale = "en" | "de" | "fr" | "pt" | "ko";

export interface RetailerLink {
  id: string;
  label: string;
  retailer: string;
  href: string;
  isAffiliate: boolean;
}

const AMAZON_HOSTS: Record<RetailerLocale, { host: string; tag: string | undefined; region: string }> = {
  en: { host: "www.amazon.com", tag: process.env.NEXT_PUBLIC_AMAZON_TAG_US, region: "Amazon" },
  de: { host: "www.amazon.de", tag: process.env.NEXT_PUBLIC_AMAZON_TAG_DE, region: "Amazon.de" },
  fr: { host: "www.amazon.fr", tag: process.env.NEXT_PUBLIC_AMAZON_TAG_FR, region: "Amazon.fr" },
  pt: { host: "www.amazon.com.br", tag: process.env.NEXT_PUBLIC_AMAZON_TAG_BR, region: "Amazon.com.br" },
  ko: { host: "www.amazon.com", tag: process.env.NEXT_PUBLIC_AMAZON_TAG_US, region: "Amazon" },
};

const NEWEGG_AFF_PREFIX = process.env.NEXT_PUBLIC_NEWEGG_AFF_URL;
const GEFORCE_NOW_AFF_URL = process.env.NEXT_PUBLIC_GEFORCE_NOW_AFF_URL;

function buildAmazonSearchUrl(query: string, locale: RetailerLocale): { href: string; isAffiliate: boolean; region: string } {
  const cfg = AMAZON_HOSTS[locale] ?? AMAZON_HOSTS.en;
  const url = new URL(`https://${cfg.host}/s`);
  url.searchParams.set("k", query);
  if (cfg.tag) {
    url.searchParams.set("tag", cfg.tag);
  }
  return { href: url.toString(), isAffiliate: Boolean(cfg.tag), region: cfg.region };
}

function buildNeweggSearchUrl(query: string): { href: string; isAffiliate: boolean } {
  const target = `https://www.newegg.com/p/pl?d=${encodeURIComponent(query)}`;
  if (NEWEGG_AFF_PREFIX) {
    return {
      href: `${NEWEGG_AFF_PREFIX}${encodeURIComponent(target)}`,
      isAffiliate: true,
    };
  }
  return { href: target, isAffiliate: false };
}

export function getGpuSearchQuery(gpu: Pick<GPU, "id" | "name">): string {
  if (gpu.id === "rtx-spark") return "NVIDIA RTX Spark laptop";
  if (gpu.id.endsWith("-laptop")) return `${gpu.name.replace(/^NVIDIA\s+/i, "")} gaming laptop`;
  return gpu.name.replace(/^NVIDIA\s+/i, "");
}

export function getGpuRetailerLinks(gpu: Pick<GPU, "id" | "name">, locale: RetailerLocale = "en"): RetailerLink[] {
  const query = getGpuSearchQuery(gpu);
  const shortName = gpu.name.replace(/^NVIDIA GeForce\s+/i, "");
  const amazon = buildAmazonSearchUrl(query, locale);
  const amazonLabel =
    locale === "de"
      ? `${shortName} bei ${amazon.region} ansehen`
      : locale === "fr"
        ? `Voir la ${shortName} sur ${amazon.region}`
        : `Check ${shortName} on ${amazon.region}`;
  const links: RetailerLink[] = [
    {
      id: `amazon-${gpu.id}`,
      label: amazonLabel,
      retailer: amazon.region,
      href: amazon.href,
      isAffiliate: amazon.isAffiliate,
    },
  ];
  if (locale === "en") {
    const newegg = buildNeweggSearchUrl(query);
    links.push({
      id: `newegg-${gpu.id}`,
      label: `Compare on Newegg`,
      retailer: "Newegg",
      href: newegg.href,
      isAffiliate: newegg.isAffiliate,
    });
  }
  return links;
}

export function getGeForceNowLink(locale: RetailerLocale = "en"): RetailerLink {
  const official =
    locale === "de"
      ? "https://www.nvidia.com/de-de/geforce-now/memberships/"
      : locale === "fr"
        ? "https://www.nvidia.com/fr-fr/geforce-now/memberships/"
        : "https://www.nvidia.com/en-us/geforce-now/memberships/";
  const label =
    locale === "de"
      ? "GeForce NOW Ultimate-Tarife ansehen"
      : locale === "fr"
        ? "Voir les offres GeForce NOW Ultimate"
        : "Check GeForce NOW Ultimate plans";
  return {
    id: "geforce-now-ultimate",
    label,
    retailer: "GeForce NOW",
    href: GEFORCE_NOW_AFF_URL || official,
    isAffiliate: Boolean(GEFORCE_NOW_AFF_URL),
  };
}

export function linkRel(isAffiliate: boolean): string {
  return isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
}

export function trackRetailerClick(target: string, placement: string, isAffiliate: boolean): void {
  if (typeof window === "undefined") return;
  window.plausible?.("Retailer click", {
    props: {
      target,
      placement,
      affiliate: isAffiliate ? "yes" : "no",
    },
  });
}
