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

const compatibilityRoutes = [
  "dlss-supported-cards",
  "dlss-4-5-supported-cards",
  "pt/dlss-4-5-quais-placas",
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

function readGeneratedHtml(directory = appOutput) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? readGeneratedHtml(entryPath)
      : entry.name.endsWith(".html")
        ? fs.readFileSync(entryPath, "utf8")
        : [];
  });
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
assert.match(
  homepage,
  /<meta name="google-adsense-account" content="ca-pub-5442184426795655"/,
  "Homepage must retain AdSense ownership verification",
);
assert.doesNotMatch(homepage, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/);
assert.doesNotMatch(homepage, /googletagmanager\.com\/gtag\/js/);
assert.match(homepage, /plausible-ly-005\.pages\.dev\/js\/pa-VclqONE0bFW-1okXx2CnS\.js/);
assert.match(homepage, /plausible\.init/);

const generatedHtml = readGeneratedHtml().join("\n");
assert.doesNotMatch(generatedHtml, /DLSS 5 Checker Editorial Team/);
assert.doesNotMatch(generatedHtml, /support \[at\] dlss5\.net/);
assert.doesNotMatch(
  generatedHtml,
  /(?:last checked|updated|checked) (?:may|june)(?: \d{1,2},)? 2026|última (?:verificação em|checagem:) \d{1,2} de (?:maio|junho) de 2026/i,
);

const privacy = readRoute("privacy");
assert.match(privacy, /AdSense ad-serving code and Auto ads are not loaded/);
assert.doesNotMatch(privacy, /we use a Google-certified consent management platform/i);
assert.doesNotMatch(privacy, /We use Google Analytics/i);

for (const route of ["about", "contact"]) {
  const html = readRoute(route);
  assert.match(html, /mailto:support@dlss5\.net/);
  assert.match(html, /DLSS 5 Checker Editor/);
}

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

for (const route of compatibilityRoutes) {
  const html = readRoute(route);
  const title = metadataValue(html, /<title>([^<]+)<\/title>/, `${route} title`);
  const description = metadataValue(
    html,
    /<meta name="description" content="([^"]+)"/,
    `${route} description`,
  );
  const canonical = metadataValue(
    html,
    /<link rel="canonical" href="([^"]+)"/,
    `${route} canonical`,
  );
  const visibleHtml = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ");
  const visibleWords = visibleHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .trim()
    .split(/\s+/);

  assert.ok(title.length >= 45 && title.length <= 60, `${route} title must remain 45–60 characters`);
  assert.ok(
    description.length >= 140 && description.length <= 160,
    `${route} description must remain 140–160 characters`,
  );
  assert.equal(
    canonical,
    `https://www.dlss5.net/${route}`,
    `${route} must use a self-referencing canonical`,
  );
  assert.equal((visibleHtml.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have one H1`);
  assert.match(visibleHtml, /Frequently asked questions|Perguntas frequentes/);
  assert.ok(visibleWords.length >= 1500, `${route} must contain at least 1,500 visible words`);
  assert.doesNotMatch(html, /name="robots" content="noindex/);
}

const dlss45English = readRoute("dlss-4-5-supported-cards");
const dlss45Portuguese = readRoute("pt/dlss-4-5-quais-placas");
assert.match(dlss45English, /hrefLang="pt-BR" href="https:\/\/www\.dlss5\.net\/pt\/dlss-4-5-quais-placas"/);
assert.match(dlss45Portuguese, /hrefLang="en" href="https:\/\/www\.dlss5\.net\/dlss-4-5-supported-cards"/);

const sitemap = fs.readFileSync(path.join(appOutput, "sitemap.xml.body"), "utf8");
assert.doesNotMatch(sitemap, /<lastmod>/, "Sitemap must not publish deployment time as lastmod");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(
  new Set(sitemapUrls).size,
  sitemapUrls.length,
  "Sitemap must not contain duplicate URLs",
);

for (const route of compatibilityRoutes) {
  assert.ok(
    sitemapUrls.includes(`https://www.dlss5.net/${route}`),
    `${route} must be present in the sitemap`,
  );
}

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
