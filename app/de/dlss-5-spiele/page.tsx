import type { Metadata } from "next";
import Link from "next/link";
import UpdateAlertForm from "@/components/UpdateAlertForm";
import { OG_IMAGE_DE } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/de/dlss-5-spiele";
const TITLE = "DLSS 5 Spiele-Liste: Welche Games unterstützen DLSS 5? [2026]";
const DESCRIPTION = "Alle DLSS-5-Spiele im Überblick: NBA 2K27, Hogwarts Legacy, War Thunder und Where Winds Meet sind live auf RTX 50 und RTX Spark. Dazu alle angekündigten Titel.";
const CHECKED = "2026-11-24";
const CHECKED_LABEL = "24. November 2026";

const SOURCES = {
  launch: "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/",
  november: "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/",
  warThunder: "https://www.nvidia.com/en-us/geforce/news/war-thunder-dlss-5-3d-guided-neural-rendering-out-now/",
  driver62124: "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/",
  wwmOfficial: "https://www.wherewindsmeetgame.com/news/official/1123DLSS5.html",
  rtx40Faq: "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/dlss-5-spiele",
    languages: {
      en: "https://www.dlss5.net/dlss-5-games",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-jogos",
      de: PAGE_URL,
      "x-default": "https://www.dlss5.net/dlss-5-games",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: PAGE_URL,
    locale: "de_DE",
    images: [OG_IMAGE_DE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_DE.url],
  },
};

const liveGames = [
  {
    name: "NBA 2K27",
    since: "3. September 2026",
    driver: "616.64 WHQL oder neuer",
    hardware: "RTX 50 (Desktop & Laptop), RTX Spark, GeForce NOW Ultimate",
    setting: "Features → Video Settings → DLSS Neural Rendering (Taste F9 zum Umschalten)",
    guideHref: "/games/nba-2k27-dlss-5",
  },
  {
    name: "Hogwarts Legacy",
    since: "5. November 2026",
    driver: "621.14 WHQL oder neuer",
    hardware: "RTX 50 (Desktop & Laptop), RTX Spark, GeForce NOW Ultimate",
    setting: "Game Settings → Display Settings → Upscale Type: NVIDIA DLSS → Neural Rendering (Shift+Alt+B)",
    guideHref: "/games/hogwarts-legacy-dlss-5",
  },
  {
    name: "War Thunder",
    since: "12. November 2026",
    driver: "Aktueller Game-Ready-Treiber",
    hardware: "RTX 50 (Desktop & Laptop), RTX Spark",
    setting: "Update Eagle's Shadow installieren, danach Neural Rendering in den Grafikeinstellungen aktivieren",
  },
  {
    name: "Where Winds Meet",
    since: "23./24. November 2026",
    driver: "621.24 WHQL oder neuer",
    hardware: "RTX 50 (Desktop & Laptop), RTX Spark, GeForce NOW Ultimate",
    setting: "PC-Update installieren, Neural Rendering im Grafikmenü aktivieren; optional mit Stilreglern anpassbar",
    guideHref: "/games/where-winds-meet-dlss-5",
  },
];

const announcedGames = [
  { title: "Starfield", studio: "Bethesda Game Studios", note: "Von NVIDIA angekündigt; bisher kein bestätigtes Live-Update mit DLSS 5." },
  { title: "Resident Evil Requiem", studio: "Capcom", note: "In der offiziellen DLSS-5-Ankündigung genannt; noch kein Veröffentlichungstermin für den Patch." },
  { title: "Assassin's Creed Shadows", studio: "Ubisoft / Vantage Studios", note: "Angekündigt, aber noch ohne öffentliche DLSS-5-Menüoption." },
  { title: "The Elder Scrolls IV: Oblivion Remastered", studio: "Bethesda", note: "Auf NVIDIAs Partnerliste geführt, bislang ohne Patch-Datum." },
  { title: "Phantom Blade Zero", studio: "S-GAME", note: "Als DLSS-5-Partner genannt; Unterstützung hängt vom Release-Stand ab." },
  { title: "AION 2 & CINDER CITY", studio: "NCSOFT", note: "Von NVIDIA genannt; Details zu Starttermin und Hardware-Grenzen offen." },
  { title: "Delta Force", studio: "Team Jade", note: "Als zukünftiger DLSS-5-Titel aufgeführt; aktuell noch nicht live." },
  { title: "NARAKA: BLADEPOINT & Justice", studio: "NetEase", note: "Angekündigt; noch ohne öffentlich bestätigte Live-Schalter für DLSS 5." },
  { title: "Black State, Sea of Remnants & NTE", studio: "Partner-Studios", note: "In NVIDIAs offizieller Ankündigung gelistet; Live-Status ausstehend." },
];

const faqs = [
  {
    question: "Welche Spiele unterstützen DLSS 5 aktuell schon?",
    answer:
      "Stand 24. November 2026 laufen vier Spiele offiziell mit DLSS 5 Neural Rendering: NBA 2K27 (seit 3. September), Hogwarts Legacy (seit 5. November), War Thunder (seit 12. November) und Where Winds Meet (seit 23./24. November). Alle vier setzen lokal eine GeForce RTX 50 oder einen RTX-Spark-Laptop voraus.",
  },
  {
    question: "Kann ich DLSS-5-Spiele auf einer RTX 40 oder RTX 30 mit Neural Rendering spielen?",
    answer:
      "Lokal noch nicht. NVIDIA plant DLSS 5 für die RTX-40-Serie nach weiteren Optimierungen, nennt aber weiterhin keinen Termin. Für RTX 30 und RTX 20 ist keine offizielle DLSS-5-Unterstützung angekündigt. Beide Generationen nutzen in diesen Spielen weiterhin DLSS Super Resolution und auf RTX 40 auch Frame Generation.",
  },
  {
    question: "Wann bekommen Starfield, Resident Evil Requiem und Assassin's Creed Shadows DLSS 5?",
    answer:
      "Für diese angekündigten Titel gibt es bisher kein bestätigtes Patch-Datum. Erst wenn NVIDIA oder der Publisher offizielle Patch-Notes und Treiberhinweise veröffentlicht, stufen wir ein Spiel von angekündigt auf live um.",
  },
  {
    question: "Gibt es DLSS-5-Spiele über die Cloud ohne RTX 50?",
    answer:
      "Ja. Über GeForce NOW Ultimate auf NVIDIA-Servern der RTX-5080-Klasse lassen sich unterstützte Titel wie NBA 2K27, Hogwarts Legacy und Where Winds Meet streamen. Voraussetzung sind das Ultimate-Abo, die PC-Lizenz des Spiels und ein unterstützter Server-Standort.",
  },
  {
    question: "Ersetzt DLSS 5 in diesen Spielen DLSS Super Resolution oder Multi Frame Generation?",
    answer:
      "Nein. DLSS 5 Neural Rendering verbessert Beleuchtung, Schatten und Materialien und kostet zusätzliche GPU-Leistung. Super Resolution und Frame Generation bleiben getrennte Optionen, die du kombinieren kannst, um die Bildrate hochzuhalten.",
  },
];

export default function GermanGamesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "de",
      datePublished: CHECKED,
      dateModified: CHECKED,
      mainEntityOfPage: PAGE_URL,
      author: { "@type": "Person", name: "liuyan-wjy", url: "https://www.dlss5.net/about" },
      publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Aktuelle DLSS-5-Spiele",
      itemListElement: liveGames.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
        <nav aria-label="Sprache" className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span aria-current="page" className="font-medium text-foreground">Deutsch</span>
          <Link href="/dlss-5-games" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/dlss-5-jogos" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
        </nav>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            Geprüft am <time dateTime={CHECKED}>{CHECKED_LABEL}</time>
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS 5 Spiele-Liste: Live-Titel und angekündigte Games
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Nicht jedes von NVIDIA genannte Spiel unterstützt DLSS 5 bereits heute. Aktuell bieten vier
            PC-Spiele echtes 3D-Guided Neural Rendering für GeForce RTX 50 und RTX Spark: NBA 2K27,
            Hogwarts Legacy, War Thunder und seit dem 23./24. November 2026 auch Where Winds Meet.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="mb-2 font-bold text-green-400">Aktuell spielbar</h2>
            <p className="text-sm leading-relaxed text-foreground/85">
              Vier Spiele sind live: NBA 2K27, Hogwarts Legacy, War Thunder und Where Winds Meet. Alle
              nutzen inzwischen das schnellere Oktober-2026-Modell von NVIDIA.
            </p>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h2 className="mb-2 font-bold text-yellow-400">Hardware-Grenze bleibt</h2>
            <p className="text-sm leading-relaxed text-foreground/85">
              Lokal laufen alle vier Updates auf RTX-50-Grafikkarten und RTX-Spark-Laptops. RTX 40 ist
              weiterhin ohne Termin geplant.{" "}
              <Link href="/de/dlss-5-grafikkarten" className="text-blue-400 hover:underline">
                Komplette Grafikkarten-Liste prüfen
              </Link>
              .
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-2 font-bold">Spiel ≠ Grafikkarte</h2>
            <p className="text-sm leading-relaxed text-foreground/85">
              Auch wenn ein Spiel DLSS 5 integriert, erscheint der Schalter nur bei passender GPU,
              aktuellem Game-Ready-Treiber und installiertem Spiel-Patch.
            </p>
          </div>
        </section>

        <section id="live-spiele" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold">Diese 4 Spiele unterstützen DLSS 5 jetzt live</h2>
          <p className="leading-relaxed text-foreground/80">
            Seit dem Oktober-Update liefert NVIDIA für neue Spiele direkt das überarbeitete
            Neural-Rendering-Modell aus. Laut NVIDIA benötigt es rund die Hälfte der GPU-Rechenzeit des
            September-Startmodells und etwa 20 % weniger VRAM in 4K. Trotzdem bleibt Neural Rendering eine
            Qualitätsoption mit spürbarer FPS-Last, weshalb sich die Kombination mit DLSS Super Resolution
            oder Multi Frame Generation anbietet.
          </p>
          <div className="grid gap-4">
            {liveGames.map((game) => (
              <article key={game.name} className="rounded-xl border border-border bg-card/50 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{game.name}</h3>
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                    Live seit {game.since}
                  </span>
                </div>
                <dl className="mt-3 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-muted-foreground">Treiber</dt>
                    <dd className="font-medium">{game.driver}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Bestätigte Plattformen</dt>
                    <dd className="font-medium">{game.hardware}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-muted-foreground">Einstellung im Spiel</dt>
                    <dd>{game.setting}</dd>
                  </div>
                </dl>
                {game.guideHref && (
                  <p className="mt-3 text-sm">
                    <Link href={game.guideHref} lang="en" className="text-blue-400 hover:underline">
                      Ausführlicher Spiel-Guide (Englisch) →
                    </Link>
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <UpdateAlertForm
          locale="de"
          defaultTopics={["games", "rtx40"]}
          sourcePage="/de/dlss-5-spiele"
        />

        <section id="angekuendigt" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold">Angekündigte DLSS-5-Spiele ohne Live-Patch</h2>
          <p className="leading-relaxed text-foreground/80">
            NVIDIA hat in der offiziellen Vorstellung zahlreiche weitere Spiele als DLSS-5-Partner
            genannt. Solange weder Patch-Notes noch ein offizieller Treiber-Hinweis für den einzelnen Titel
            vorliegen, solltest du keine Grafikkarte allein wegen eines noch unbestätigten Patches kaufen.
            Die Übersicht trennt diese Warteliste bewusst von den bereits spielbaren Updates.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th scope="col" className="p-3.5 font-semibold">Spiel</th>
                  <th scope="col" className="p-3.5 font-semibold">Studio / Publisher</th>
                  <th scope="col" className="p-3.5 font-semibold">Aktueller Stand</th>
                </tr>
              </thead>
              <tbody>
                {announcedGames.map((row) => (
                  <tr key={row.title} className="border-t border-border/70">
                    <th scope="row" className="p-3.5 font-medium">{row.title}</th>
                    <td className="p-3.5 text-muted-foreground">{row.studio}</td>
                    <td className="p-3.5 text-foreground/85">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold">Warum ein Spiel trotz DLSS-5-Logo kein Menü zeigt</h2>
          <p className="leading-relaxed text-foreground/80">
            Viele Spieler verwechseln DLSS 4.5 (Super Resolution und Dynamic Multi Frame Generation) mit
            DLSS 5 Neural Rendering. Ein Spiel kann im Grafikmenü durchaus „NVIDIA DLSS“ anzeigen, ohne
            dass DLSS 5 integriert ist. Prüfe daher immer drei Punkte zusammen: erstens ob das Spiel oben
            unter den vier Live-Titeln steht, zweitens ob der passende Game-Ready-Treiber installiert ist
            und drittens ob deine Grafikkarte zur RTX-50- oder RTX-Spark-Familie gehört. Eine Schritt-für-Schritt-Prüfung
            findest du in unserem{" "}
            <Link href="/de/dlss-5-aktivieren" className="text-blue-400 hover:underline">
              deutschen Einrichtungs-Guide für DLSS 5
            </Link>
            .
          </p>
        </section>

        <section className="mb-10 space-y-5">
          <h2 className="text-2xl font-bold">Häufige Fragen zu DLSS-5-Spielen</h2>
          {faqs.map((item) => (
            <div key={item.question}>
              <h3 className="mb-1 font-semibold">{item.question}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link href="/de/dlss-5-grafikkarten" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5: Unterstützte Grafikkarten</div>
            <p className="text-sm text-muted-foreground">RTX 50, RTX 40, RTX 30, GTX, AMD und Intel im Detail.</p>
          </Link>
          <Link href="/de/dlss-5-aktivieren" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5 herunterladen &amp; aktivieren</div>
            <p className="text-sm text-muted-foreground">Treiber, Menüs, Tastenkürzel und Hilfe bei fehlender Option.</p>
          </Link>
        </section>

        <section className="text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Quellen</h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><a href={SOURCES.launch} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: Offizielle DLSS-5-Vorstellung</a></li>
            <li><a href={SOURCES.november} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: Hogwarts Legacy, War Thunder &amp; Where Winds Meet Update (5. Nov. 2026)</a></li>
            <li><a href={SOURCES.warThunder} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: War Thunder DLSS 5 Launch-Artikel</a></li>
            <li><a href={SOURCES.driver62124} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: Game Ready Driver 621.24 WHQL für Where Winds Meet</a></li>
            <li><a href={SOURCES.wwmOfficial} className="text-blue-400 hover:underline" rel="noreferrer">Where Winds Meet: Offizielle DLSS-5-Ankündigung (23. Nov. 2026)</a></li>
            <li><a href={SOURCES.rtx40Faq} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: RTX-40-Status in der DLSS-5-FAQ</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
