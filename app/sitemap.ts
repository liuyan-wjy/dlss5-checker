import type { MetadataRoute } from "next";
import { GPU_DETAIL_SLUGS, getGpuPageHref } from "@/lib/gpu-page-config";
import { rtxSparkRoutes, type RtxSparkRouteKey } from "@/lib/rtx-spark-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://www.dlss5.net",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.dlss5.net/pt",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.dlss5.net/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.dlss5.net/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.55,
    },
    {
      url: "https://www.dlss5.net/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.55,
    },
    {
      url: "https://www.dlss5.net/editorial-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: "https://www.dlss5.net/guides",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: "https://www.dlss5.net/dlss-5-system-requirements",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.dlss5.net/dlss-5-supported-cards",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.dlss5.net/dlss-5-games",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: "https://www.dlss5.net/dlss-5-evidence-tracker",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: "https://www.dlss5.net/dlss-5-release-date",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: "https://www.dlss5.net/dlss-5-neural-rendering",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-6x",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: "https://www.dlss5.net/dlss-4-5-games",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-settings",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.dlss5.net/dlss-frame-generation-vs-multi-frame-generation",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.dlss5.net/dlss-5-unreal-engine",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: "https://www.dlss5.net/dlss-5-vs-dlss-4-5",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: "https://www.dlss5.net/dlss-5-rtx-40-series",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.dlss5.net/pt/dlss-5-quais-placas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.dlss5.net/pt/dlss-5-requisitos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.dlss5.net/pt/dlss-5-jogos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.dlss5.net/pt/dlss-5-confirmado",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: "https://www.dlss5.net/pt/dlss-5-vs-dlss-4-5",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.78,
    },
  ];

  const gpuRoutes = (["en", "pt"] as const).flatMap((locale) =>
    GPU_DETAIL_SLUGS[locale].map((slug) => ({
      url: `https://www.dlss5.net${getGpuPageHref(locale, slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.8 : 0.7,
    }))
  );

  const rtxSparkSitemapRoutes = (Object.keys(rtxSparkRoutes) as RtxSparkRouteKey[]).flatMap(
    (routeKey) =>
      (["en", "pt"] as const).map((locale) => ({
        url: `https://www.dlss5.net${rtxSparkRoutes[routeKey][locale]}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: routeKey === "hub" ? 0.86 : 0.78,
      }))
  );

  return [...staticRoutes, ...gpuRoutes, ...rtxSparkSitemapRoutes];
}
