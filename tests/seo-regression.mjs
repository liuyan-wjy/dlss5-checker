import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const appOutput = path.join(".next", "server", "app");

const newRoutes = [
  "dlss-4-5-ray-reconstruction",
  "games/resident-evil-requiem-dlss-5",
  "games/starfield-dlss-5",
  "games/assassins-creed-shadows-dlss-5",
  "ai-pc/nvidia-rtx-spark-vs-dgx-spark",
];

const noindexRtxSparkRoutes = [
  "ai-pc/nvidia-rtx-spark",
  "ai-pc/nvidia-rtx-spark-specs",
  "ai-pc/nvidia-rtx-spark-laptops",
  "ai-pc/nvidia-rtx-spark-vs-apple-m5",
  "ai-pc/nvidia-rtx-spark-vs-snapdragon-x",
  "ai-pc/nvidia-rtx-spark-for-local-ai",
  "ai-pc/nvidia-rtx-spark-gaming-performance",
  "ai-pc/nvidia-rtx-spark-release-date",
  "pt/ai-pc/nvidia-rtx-spark",
  "pt/ai-pc/nvidia-rtx-spark-especificacoes",
  "pt/ai-pc/nvidia-rtx-spark-notebooks",
  "pt/ai-pc/nvidia-rtx-spark-vs-apple-m5",
  "pt/ai-pc/nvidia-rtx-spark-vs-snapdragon-x",
  "pt/ai-pc/nvidia-rtx-spark-ia-local",
  "pt/ai-pc/nvidia-rtx-spark-desempenho-jogos",
  "pt/ai-pc/nvidia-rtx-spark-data-lancamento",
];

function readRoute(route) {
  return fs.readFileSync(path.join(appOutput, `${route}.html`), "utf8");
}

function metadataValue(html, pattern, label) {
  const match = html.match(pattern);
  assert.ok(match, `Missing ${label}`);
  return match[1];
}

const homepage = fs.readFileSync(path.join(appOutput, "index.html"), "utf8");
assert.equal(
  metadataValue(homepage, /<meta property="og:url" content="([^"]+)"/, "homepage og:url"),
  "https://www.dlss5.net",
);

for (const route of newRoutes) {
  const html = readRoute(route);
  const title = metadataValue(html, /<title>([^<]+)<\/title>/, `${route} title`);
  const canonical = metadataValue(
    html,
    /<link rel="canonical" href="([^"]+)"/,
    `${route} canonical`,
  );
  const openGraphTitle = metadataValue(
    html,
    /<meta property="og:title" content="([^"]+)"/,
    `${route} og:title`,
  );
  const openGraphUrl = metadataValue(
    html,
    /<meta property="og:url" content="([^"]+)"/,
    `${route} og:url`,
  );
  const twitterTitle = metadataValue(
    html,
    /<meta name="twitter:title" content="([^"]+)"/,
    `${route} twitter:title`,
  );

  assert.equal(openGraphTitle, title, `${route} must use its page title for og:title`);
  assert.equal(openGraphUrl, canonical, `${route} must use its canonical URL for og:url`);
  assert.equal(twitterTitle, title, `${route} must use its page title for twitter:title`);
  assert.doesNotMatch(html, /Last checked June 22, 2026/);

  if (route.startsWith("games/")) {
    const visibleWords = html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[^;]+;/g, " ")
      .trim()
      .split(/\s+/);
    assert.ok(visibleWords.length >= 850, `${route} must remain a substantial user guide`);
  }
}

const sitemap = fs.readFileSync(path.join(appOutput, "sitemap.xml.body"), "utf8");
assert.doesNotMatch(sitemap, /<lastmod>/, "Sitemap must not publish deployment time as lastmod");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(
  new Set(sitemapUrls).size,
  sitemapUrls.length,
  "Sitemap must not contain duplicate URLs",
);

for (const route of noindexRtxSparkRoutes) {
  const html = readRoute(route);
  assert.match(html, /name="robots" content="noindex/, `${route} must remain noindex`);
  assert.doesNotMatch(sitemap, new RegExp(`<loc>https://www\\.dlss5\\.net/${route}</loc>`));
}

const dgxComparisonRoute = "ai-pc/nvidia-rtx-spark-vs-dgx-spark";
const dgxComparisonHtml = readRoute(dgxComparisonRoute);
assert.doesNotMatch(dgxComparisonHtml, /name="robots" content="noindex/);
assert.match(
  sitemap,
  new RegExp(`<loc>https://www\\.dlss5\\.net/${dgxComparisonRoute}</loc>`),
);

const dgxComparison = fs.readFileSync(
  path.join("app", "ai-pc", "nvidia-rtx-spark-vs-dgx-spark", "page.tsx"),
  "utf8",
);
assert.doesNotMatch(dgxComparison, /fixed configuration/i);

console.log("SEO regression checks passed.");
