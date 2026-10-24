import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const appOutput = "out";

const vercelConfig = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
assert.equal(
  vercelConfig.git?.deploymentEnabled,
  false,
  "Vercel Git deployments must stay disabled during the Cloudflare migration",
);

const newRoutes = [
  "dlss-5-download",
  "dlss-5-amd",
  "pt/como-ativar-dlss-5",
  "pt/dlss-5-amd",
  "dlss-4-5-ray-reconstruction",
  "games/nba-2k27-dlss-5",
];

const compatibilityRoutes = [
  "dlss-supported-cards",
  "dlss-4-5-supported-cards",
  "pt/dlss-4-5-quais-placas",
];

const refreshedRoutes = [
  "pt", "about", "contact", "editorial-policy", "dlss-5-release-date", "dlss-5-evidence-tracker",
  "dlss-5-supported-cards", "dlss-5-rtx-40-series", "dlss-5-system-requirements",
  "dlss-5-games", "dlss-5-neural-rendering", "dlss-5-unreal-engine", "dlss-5-vs-dlss-4-5",
  "pt/dlss-5-confirmado", "pt/dlss-5-quais-placas", "pt/dlss-5-requisitos",
  "pt/dlss-5-jogos", "pt/dlss-5-vs-dlss-4-5",
  "dlss-4-5-games", "dlss-4-5-dynamic-mfg-6x", "dlss-4-5-dynamic-mfg-settings",
  "dlss-frame-generation-vs-multi-frame-generation", "guides",
];

// Thin, templated, or off-topic pages removed to improve site-level content quality.
const removedRoutes = {
  "gpu/rtx-4070": "/dlss-5-rtx-40-series",
  "gpu/rtx-4080": "/dlss-5-rtx-40-series",
  "gpu/rtx-5090": "/dlss-5-supported-cards",
  "gpu/rtx-3070": "/dlss-supported-cards",
  "gpu/rtx-3060": "/dlss-supported-cards",
  "pt/gpu/rtx-4070": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-4080": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-4090": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-3060": "/pt/dlss-5-quais-placas",
  "pt/gpu/gtx-1060": "/pt/dlss-5-quais-placas",
  "de/dlss-5-grafikkarten": "/dlss-5-supported-cards",
  "games/resident-evil-requiem-dlss-5": "/dlss-5-games",
  "games/starfield-dlss-5": "/dlss-5-games",
  "games/assassins-creed-shadows-dlss-5": "/dlss-5-games",
};

function routePath(route) {
  return route === "index"
    ? path.join(appOutput, "index.html")
    : path.join(appOutput, `${route}.html`);
}

function readRoute(route) {
  return fs.readFileSync(routePath(route), "utf8");
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

function decodeHtml(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (_, entity) => {
    if (entity[0] !== "#") return named[entity.toLowerCase()];
    return String.fromCodePoint(entity[1].toLowerCase() === "x"
      ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
  });
}

function visibleText(html) {
  return decodeHtml(html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function mainWords(html) {
  const main = html.match(/<main(?:\s[^>]*)?>([\s\S]*?)<\/main>/);
  assert.ok(main, "Content page must have a main landmark");
  return visibleText(main[1]).split(/\s+/).length;
}

function checkFaq(html, route, required = true) {
  const text = visibleText(html);
  let faqCount = 0;
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const parsed = JSON.parse(match[1]);
    const entries = Array.isArray(parsed) ? parsed : [parsed, ...(parsed["@graph"] ?? [])];
    for (const schema of entries.filter((entry) => entry["@type"] === "FAQPage")) {
      faqCount++;
      assert.ok(schema.mainEntity.length > 0, `${route} FAQ must not be empty`);
      for (const question of schema.mainEntity) {
        assert.ok(text.includes(visibleText(question.name)), `${route} FAQ question must be visible: ${question.name}`);
        assert.ok(text.includes(visibleText(question.acceptedAnswer.text)), `${route} FAQ answer must match the visible answer: ${question.name}`);
      }
    }
  }
  assert.ok(!required || faqCount > 0, `${route} FAQ schema is required`);
}

assert.ok(fs.existsSync(appOutput), "Static export output directory out/ is required");
assert.ok(fs.existsSync(path.join(appOutput, "404.html")), "Static export must include a real 404 page");
assert.ok(fs.existsSync(path.join(appOutput, "robots.txt")), "Static export must include robots.txt");
assert.ok(fs.existsSync(path.join(appOutput, "sitemap.xml")), "Static export must include sitemap.xml");

const robots = fs.readFileSync(path.join(appOutput, "robots.txt"), "utf8");
assert.match(robots, /User-Agent: \*/);
assert.match(robots, /Allow: \//);
assert.match(robots, /Sitemap: https:\/\/www\.dlss5\.net\/sitemap\.xml/);

const notFoundHtml = fs.readFileSync(path.join(appOutput, "404.html"), "utf8");
assert.match(notFoundHtml, /<html[^>]*lang="en"/);
assert.match(notFoundHtml, /name="robots" content="noindex/);
assert.match(notFoundHtml, /href="\/"/);
assert.match(notFoundHtml, /href="\/pt"/);
assert.doesNotMatch(notFoundHtml, /rel="canonical"/);
assert.match(visibleText(notFoundHtml), /404|not found|could not be found/i, "Static export must not fall back unknown paths to the homepage");

const homepage = readRoute("index");
const llms = fs.readFileSync(path.join(appOutput, "llms.txt"), "utf8");
assert.match(llms, /NBA 2K27/);
assert.match(llms, /September 3, 2026/);
assert.match(llms, /confirmed, planned, unsupported, and none/);
assert.match(llms, /RTX 40.*planned.*no public date/);
assert.match(llms, /dlss-5-3d-guided-neural-rendering\//);
assert.doesNotMatch(llms, /announced for Fall 2026|Fall 2026 launch-window|currently unknown until final|expected support|unlikely support/);
assert.equal(
  metadataValue(homepage, /<meta property="og:url" content="([^"]+)"/, "homepage og:url"),
  "https://www.dlss5.net",
);
assert.match(
  homepage,
  /<meta name="google-adsense-account" content="ca-pub-5442184426795655"/,
  "Homepage must retain AdSense ownership verification",
);
assert.doesNotMatch(homepage, /googletagmanager\.com\/gtag\/js/);
assert.match(homepage, /plausible-ly-005\.pages\.dev\/js\/pa-VclqONE0bFW-1okXx2CnS\.js/);
assert.match(homepage, /plausible\.init/);
assert.match(visibleText(homepage), /NBA 2K27/);
assert.match(visibleText(homepage), /available now|live now|now available/i);
assert.match(homepage, /href="\/dlss-5-supported-cards"/);
assert.match(visibleText(homepage), /Showing \d+ GPUs/);
assert.match(visibleText(homepage), /NVIDIA GeForce RTX 5060 Ti/);
assert.match(visibleText(readRoute("dlss-5-supported-cards")), /NVIDIA GeForce RTX 5060 Ti/);
assert.doesNotMatch(visibleText(readRoute("about")), /We have not performed independent per-GPU DLSS performance tests/);
const evidenceTracker = visibleText(readRoute("dlss-5-evidence-tracker"));
assert.match(evidenceTracker, /370 FPS/);
assert.match(evidenceTracker, /one-frame-in, one-frame-out/);
assert.doesNotMatch(visibleText(homepage), /Use FSR 4 instead|AMD users should look at FSR 4/);
assert.doesNotMatch(visibleText(readRoute("pt")), /Use FSR 4 como alternativa/);
assert.doesNotMatch(visibleText(readRoute("guides")), /future DLSS 5 neural rendering layer/);
assert.doesNotMatch(visibleText(readRoute("pt/dlss-5-quais-placas")), /mudar a matriz de suporte antes do lançamento/);
assert.doesNotMatch(visibleText(readRoute("dlss-5-supported-cards")), /no-DLSS unsupported|unsupported, and unsupported/);
checkFaq(homepage, "homepage");

const generatedPages = readGeneratedHtml();
const generatedHtml = generatedPages.join("\n");
for (const html of generatedPages) {
  const canonical = html.match(/<link rel="canonical" href="https:\/\/www\.dlss5\.net([^\"]*)"/);
  if (!canonical || /<title>404:/.test(html)) continue;
  const route = canonical[1];
  const language = /^\/pt(?:\/|$)/.test(route) ? "pt-BR" : /^\/de(?:\/|$)/.test(route) ? "de" : "en";
  assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), `${route || "/"} must declare its language in the exported HTML`);
  if (language === "pt-BR") {
    assert.match(html, /aria-label="Navegação principal"/);
    assert.match(html, /href="\/pt\/como-ativar-dlss-5"/);
  }
}
for (const [english, portuguese] of [
  ["dlss-5-download", "pt/como-ativar-dlss-5"],
  ["dlss-5-amd", "pt/dlss-5-amd"],
]) {
  for (const route of [english, portuguese]) {
    const html = readRoute(route);
    assert.match(html, new RegExp(`hrefLang="en" href="https://www\\.dlss5\\.net/${english}"`));
    assert.match(html, new RegExp(`hrefLang="pt-BR" href="https://www\\.dlss5\\.net/${portuguese}"`));
    assert.doesNotMatch(html, /name="robots" content="noindex/);
    assert.match(readRoute(route.startsWith("pt/") ? "pt" : "index"), new RegExp(`href="/${route}"`));
  }
}
assert.doesNotMatch(generatedHtml, /DLSS 5 Checker Editorial Team/);
assert.doesNotMatch(generatedHtml, /support \[at\] dlss5\.net/);
assert.doesNotMatch(
  generatedHtml,
  /(?:last checked|updated|checked) (?:may|june)(?: \d{1,2},)? 2026|última (?:verificação em|checagem:) \d{1,2} de (?:maio|junho) de 2026/i,
);

const privacy = readRoute("privacy");
// AdSense is live: every page must load the publisher's ad script, and the
// privacy policy must disclose Google's ad cookies and the consent choices.
const adsenseScript = /<script async="" src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-5442184426795655" crossorigin="anonymous">/;
for (const html of generatedPages) {
  assert.match(html, adsenseScript, "Every exported page must load the AdSense script once");
  assert.equal((html.match(/<script[^>]*adsbygoogle\.js/g) || []).length, 1, "AdSense script must not be duplicated");
}
assert.match(privacy, /policies\.google\.com\/technologies\/partner-sites/);
assert.match(privacy, /adssettings\.google\.com/);
assert.match(visibleText(privacy), /certified consent management platform/);
assert.doesNotMatch(privacy, /We use Google Analytics/i);
assert.match(visibleText(privacy), /Cloudflare Web Analytics/);
assert.match(visibleText(privacy), /real.user monitoring|RUM/i);
assert.match(privacy, /https:\/\/developers.cloudflare.com\/web-analytics\//);
assert.doesNotMatch(visibleText(readRoute("about")), /Every data point on this site is sourced|estimated DLSS 4\/4\.5 benchmarks/);

for (const route of ["about", "contact"]) {
  const html = readRoute(route);
  assert.match(html, /mailto:support@dlss5\.net/);
  assert.match(html, /liuyan-wjy/);
  assert.match(html, /href="https:\/\/github\.com\/liuyan-wjy"/);
}

for (const route of [...new Set([...newRoutes, ...refreshedRoutes, ...compatibilityRoutes])]) {
  const html = readRoute(route);
  const language = route.startsWith("pt") ? "pt-BR" : "en";
  assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), `${route} exported language`);
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
  const description = metadataValue(html, /<meta name="description" content="([^"]+)"/, `${route} description`);
  assert.equal(metadataValue(html, /<meta property="og:description" content="([^"]+)"/, `${route} og:description`), description);
  assert.equal(metadataValue(html, /<meta name="twitter:description" content="([^"]+)"/, `${route} twitter:description`), description);
  assert.equal(canonical, `https://www.dlss5.net/${route}`, `${route} canonical must remain self-referencing`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have one H1`);
  assert.doesNotMatch(html, /Last checked June 22, 2026/);
  checkFaq(html, route, !["about", "contact", "editorial-policy", "guides", "dlss-5-download", "dlss-5-amd", "pt/como-ativar-dlss-5", "pt/dlss-5-amd"].includes(route));
  assert.doesNotMatch(visibleText(html), /DLSS 5 (?:itself )?is (?:scheduled|planned) for Fall 2026|DLSS 5 is still unreleased|Why the exact launch date is still open/i);

  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) {
    if (/\.[a-z0-9]+$/i.test(href)) continue;
    const linkedRoute = href.replace(/^\/|\/$/g, "") || "index";
    assert.ok(fs.existsSync(routePath(linkedRoute)), `${route} has a broken internal link: ${href}`);
  }

  if (route.startsWith("games/")) {
    assert.ok(mainWords(html) >= 1500, `${route} must contain at least 1500 visible main-content words`);
    assert.doesNotMatch(visibleText(html), /DLSS 5 (?:itself )?is (?:scheduled|planned) for Fall 2026/i);
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
  assert.ok(visibleWords.length >= 1500 && mainWords(html) >= 1500, `${route} must contain at least 1,500 visible main-content words`);
  assert.match(html, /"datePublished":"2026-08-26"/, `${route} must retain its original publication date`);
  assert.doesNotMatch(html, /name="robots" content="noindex/);
}

const dlss45English = readRoute("dlss-4-5-supported-cards");
const dlss45Portuguese = readRoute("pt/dlss-4-5-quais-placas");
assert.match(dlss45English, /hrefLang="pt-BR" href="https:\/\/www\.dlss5\.net\/pt\/dlss-4-5-quais-placas"/);
assert.match(dlss45Portuguese, /hrefLang="en" href="https:\/\/www\.dlss5\.net\/dlss-4-5-supported-cards"/);

const sitemap = fs.readFileSync(path.join(appOutput, "sitemap.xml"), "utf8");
assert.doesNotMatch(sitemap, /<lastmod>/, "Sitemap must not publish deployment time as lastmod");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const url of sitemapUrls) {
  const route = new URL(url).pathname.slice(1) || "index";
  const html = readRoute(route);
  assert.doesNotMatch(html, /name="robots" content="noindex/, `${url} must be indexable`);
  assert.equal(metadataValue(html, /<link rel="canonical" href="([^"]+)"/, `${url} canonical`).replace(/\/$/, ""), url.replace(/\/$/, ""));
}

assert.equal(
  new Set(sitemapUrls).size,
  sitemapUrls.length,
  "Sitemap must not contain duplicate URLs",
);

for (const route of [...compatibilityRoutes, ...newRoutes]) {
  assert.ok(
    sitemapUrls.includes(`https://www.dlss5.net/${route}`),
    `${route} must be present in the sitemap`,
  );
}

const nbaHtml = readRoute("games/nba-2k27-dlss-5");
const nbaText = visibleText(nbaHtml);
const nbaWithoutJsonLd = nbaHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
assert.throws(() => checkFaq(nbaWithoutJsonLd, "games/nba-2k27-dlss-5"), /FAQ schema is required/);
assert.doesNotThrow(() => checkFaq(nbaWithoutJsonLd, "optional FAQ page", false));
assert.match(nbaHtml, /href="#how-to-enable"/, "NBA guide must link directly to setup steps");
assert.match(nbaHtml, /id="how-to-enable"/, "NBA setup link must have a target");
assert.doesNotMatch(nbaText, /check the boring things|does not invent frame-rate numbers|lower visual ambition|clean support path/i);
for (const pattern of [/616\.64/, /Video Settings/, /DLSS Neural Rendering/, /F9/, /RTX 50/, /RTX 40/, /GeForce NOW/, /Super Resolution/, /Frame Generation/]) {
  assert.match(nbaText, pattern, `NBA 2K27 guide is missing ${pattern}`);
}
assert.match(nbaText, /planned|plans to|plan to/i);
assert.match(nbaText, /no (?:official |public |announced |confirmed )*(?:release |availability |support )?date|date (?:has not|is not|remains)/i);
assert.doesNotMatch(nbaHtml, /hrefLang=/, "NBA guide must not advertise nonexistent translations");
assert.doesNotMatch(nbaHtml, /name="robots" content="noindex/, "NBA guide must be indexable");
for (const route of ["dlss-5-games", "guides"]) {
  assert.match(readRoute(route), /href="\/games\/nba-2k27-dlss-5"/, `${route} must link to the NBA guide`);
}
const rtx40Text = visibleText(readRoute("dlss-5-rtx-40-series"));
assert.match(rtx40Text, /planned|plans to|plan to/i);
assert.match(rtx40Text, /not available|not yet available|not live|no (?:release |availability |support )?date|not currently/i);
for (const route of ["dlss-4-5-dynamic-mfg-settings", "dlss-4-5-dynamic-mfg-6x"]) {
  const text = visibleText(readRoute(route));
  assert.match(text, /616\.64/);
  assert.match(text, /2\.14/);
}

const redirects = fs.readFileSync(path.join(appOutput, "_redirects"), "utf8");
for (const [route, target] of Object.entries(removedRoutes)) {
  assert.ok(!fs.existsSync(routePath(route)), `${route} must not be exported`);
  assert.match(redirects, new RegExp(`^/${route} ${target} 301$`, "m"), `${route} must 301 to ${target}`);
  assert.ok(fs.existsSync(routePath(target.slice(1))), `${route} redirect target must exist`);
}
assert.doesNotMatch(generatedHtml, /href="\/(?:pt\/)?ai-pc\//, "Off-topic RTX Spark pages must not be linked");
const noindexPages = generatedPages.filter((html) => /name="robots" content="noindex/.test(html));
assert.ok(
  noindexPages.every((html) => /<title>Page not found/.test(html)),
  "Only not-found pages may be noindex; thin pages should be improved or removed instead",
);

console.log("SEO regression checks passed.");
