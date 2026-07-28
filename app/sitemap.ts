import type { MetadataRoute } from "next";

const BASE_URL = "https://www.dlss5.net";

type SitemapPage = {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

const pages: SitemapPage[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/pt", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.55 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.55 },
  { path: "/editorial-policy", changeFrequency: "monthly", priority: 0.65 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.82 },
  { path: "/dlss-5-system-requirements", changeFrequency: "weekly", priority: 0.85 },
  { path: "/dlss-5-supported-cards", changeFrequency: "weekly", priority: 0.9 },
  { path: "/dlss-5-games", changeFrequency: "weekly", priority: 0.88 },
  {
    path: "/games/resident-evil-requiem-dlss-5",
    changeFrequency: "weekly",
    priority: 0.84,
  },
  { path: "/games/starfield-dlss-5", changeFrequency: "weekly", priority: 0.82 },
  {
    path: "/games/assassins-creed-shadows-dlss-5",
    changeFrequency: "weekly",
    priority: 0.82,
  },
  { path: "/dlss-5-evidence-tracker", changeFrequency: "weekly", priority: 0.86 },
  { path: "/dlss-5-release-date", changeFrequency: "weekly", priority: 0.86 },
  { path: "/dlss-5-neural-rendering", changeFrequency: "weekly", priority: 0.84 },
  { path: "/dlss-4-5-ray-reconstruction", changeFrequency: "weekly", priority: 0.86 },
  { path: "/dlss-4-5-dynamic-mfg-6x", changeFrequency: "weekly", priority: 0.82 },
  { path: "/dlss-4-5-games", changeFrequency: "weekly", priority: 0.8 },
  {
    path: "/dlss-4-5-dynamic-mfg-settings",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/dlss-frame-generation-vs-multi-frame-generation",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  { path: "/dlss-5-unreal-engine", changeFrequency: "weekly", priority: 0.78 },
  { path: "/dlss-5-vs-dlss-4-5", changeFrequency: "weekly", priority: 0.84 },
  { path: "/dlss-5-rtx-40-series", changeFrequency: "weekly", priority: 0.85 },
  {
    path: "/ai-pc/nvidia-rtx-spark-vs-dgx-spark",
    changeFrequency: "weekly",
    priority: 0.78,
  },
  { path: "/pt/dlss-5-quais-placas", changeFrequency: "weekly", priority: 0.85 },
  { path: "/pt/dlss-5-requisitos", changeFrequency: "weekly", priority: 0.8 },
  { path: "/pt/dlss-5-jogos", changeFrequency: "weekly", priority: 0.8 },
  { path: "/pt/dlss-5-confirmado", changeFrequency: "weekly", priority: 0.78 },
  { path: "/pt/dlss-5-vs-dlss-4-5", changeFrequency: "weekly", priority: 0.78 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
