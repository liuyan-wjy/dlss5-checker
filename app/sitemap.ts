import type { MetadataRoute } from "next";
import { GPU_DETAIL_SLUGS, getGpuPageHref } from "@/lib/gpu-page-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://dlss5.net",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dlss5.net/pt",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const gpuRoutes = (["en", "pt"] as const).flatMap((locale) =>
    GPU_DETAIL_SLUGS[locale].map((slug) => ({
      url: `https://dlss5.net${getGpuPageHref(locale, slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.8 : 0.7,
    }))
  );

  return [...staticRoutes, ...gpuRoutes];
}
