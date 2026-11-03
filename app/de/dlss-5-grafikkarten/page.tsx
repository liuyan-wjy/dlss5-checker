import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport } from "@/lib/gpu-search";
import { OG_IMAGE_DE } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/de/dlss-5-grafikkarten";
const TITLE = "DLSS 5: Welche Grafikkarten werden unterstützt? [2026]";
const DESCRIPTION = "Welche Grafikkarten unterstützen DLSS 5? RTX 50 und RTX Spark sind bestätigt, RTX 40 ist geplant. Status und Unterschiede zu DLSS 4.5 im Überblick.";
const CHECKED = "2026-11-03";
const CHECKED_LABEL = "3. November 2026";

const SOURCES = {
  launch: "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/",
  driver: "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/",
  october: "https://www.nvidia.com/en-us/geforce/news/dlss-5-faster-ai-model-hogwarts-legacy-rtx-spark-laptops/",
  hardware: "https://www.nvidia.com/de-de/geforce/technologies/dlss/",
  spark: "https://www.nvidia.com/en-us/geforce/news/rtx-spark-dlss-reflex-ray-tracing-games/",
  sparkSpecs: "https://www.nvidia.com/en-us/products/rtx-spark/",
  rtx40: "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/",
  pcgamer: "https://www.pcgamer.com/hardware/graphics-cards/dlss-5-can-slash-performance-by-up-to-73-percent-on-an-rtx-5080-gaming-pc-in-nba-2k27-and-im-left-wondering-what-kind-of-mega-rig-youd-need-to-justify-the-hit/",
  gamegpu5090: "https://en.gamegpu.com/news/igry/dlss-5-snizil-proizvoditelnost-rtx-5090-v-nba-2k27-v-2-5-raza-s-162-do-68-fps-v-4k",
  gamegpuTest: "https://en.gamegpu.com/test-gpu/action-fps-tps/nba-2k27-benchmarki-videokart-rtx-50-s-dlss-5",
  pcgamerSpark: "https://www.pcgamer.com/hardware/i-jammed-nvidias-new-dlss-5-october-update-model-into-the-rtx-spark-and-its-25-percent-faster-at-1440p/",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/dlss-5-grafikkarten",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: PAGE_URL,
      "x-default": "https://www.dlss5.net/dlss-5-supported-cards",
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

const STATUS_COPY: Record<DlssSupport, {
  short: string;
  verdict: string;
  title: string;
  note: string;
  dot: string;
  box: string;
  text: string;
}> = {
  confirmed: {
    short: "RTX 50 & RTX Spark",
    verdict: "Unterstützt",
    title: "RTX 50 und RTX Spark: DLSS 5 läuft",
    note: "Alle RTX-50-Karten für Desktop und Notebook sowie Notebooks mit RTX Spark. Dazu kommen Super Resolution, DLAA, Ray Reconstruction und Multi Frame Generation bis 6X.",
    dot: "bg-green-400",
    box: "border-green-500/30 bg-green-500/5",
    text: "text-green-400",
  },
  planned: {
    short: "RTX 40",
    verdict: "Geplant, noch kein Termin",
    title: "RTX 40: DLSS 5 kommt später",
    note: "NVIDIA will DLSS 5 nachreichen, nennt aber keinen Termin. Bis dahin: Super Resolution, DLAA, Ray Reconstruction und Frame Generation (2X).",
    dot: "bg-yellow-400",
    box: "border-yellow-500/30 bg-yellow-500/5",
    text: "text-yellow-400",
  },
  unsupported: {
    short: "RTX 30 & RTX 20",
    verdict: "Kein DLSS 5",
    title: "RTX 30 und RTX 20: kein DLSS 5",
    note: "Kein DLSS 5 und keine Ankündigung dafür. Super Resolution (inklusive neuem 4.5-Modell), DLAA und Ray Reconstruction funktionieren weiter, Frame Generation nicht.",
    dot: "bg-orange-400",
    box: "border-orange-500/30 bg-orange-500/5",
    text: "text-orange-400",
  },
  none: {
    short: "GTX, AMD, Intel",
    verdict: "Kein DLSS",
    title: "GTX, AMD Radeon und Intel Arc: gar kein DLSS",
    note: "DLSS ist an NVIDIA-RTX-Hardware gebunden, diese Karten können es grundsätzlich nicht nutzen. AMD-Nutzer greifen zu FSR, Intel-Nutzer zu XeSS.",
    dot: "bg-red-400",
    box: "border-red-500/30 bg-red-500/5",
    text: "text-red-400",
  },
};

const STATUS_ORDER = ["confirmed", "planned", "unsupported", "none"] as const;

const popularCards: { name: string; status: DlssSupport; text: string }[] = [
  {
    name: "RTX 3060 und RTX 3060 Ti",
    status: "unsupported",
    text: "Kein DLSS 5, auch nicht mit 12 GB. NVIDIA hat für RTX 30 nichts angekündigt. Super Resolution, DLAA und Ray Reconstruction bleiben dir erhalten.",
  },
  {
    name: "RTX 3070 und RTX 3080",
    status: "unsupported",
    text: "Gleicher Stand wie die ganze RTX-30-Serie. Das neue Super-Resolution-Modell aus DLSS 4.5 läuft trotzdem.",
  },
  {
    name: "RTX 4060 und RTX 4060 Ti",
    status: "planned",
    text: "Geplant, aber noch nicht da. Auch das schnellere Oktober-Modell kam nur für RTX 50 und RTX Spark. Die 8-GB-Versionen dürften später am knappsten sein.",
  },
  {
    name: "RTX 4070, 4070 SUPER und 4070 Ti",
    status: "planned",
    text: "SUPER- und Ti-Modelle bekommen DLSS 5 nicht früher. Frame Generation (2X) nutzt du schon heute, Multi Frame Generation bleibt RTX 50 vorbehalten.",
  },
  {
    name: "RTX 4080 und RTX 4090",
    status: "planned",
    text: "An der Leistung liegt es nicht: NVIDIA hat die RTX-40-Version schlicht noch nicht veröffentlicht. Ein Termin fehlt weiterhin.",
  },
  {
    name: "RTX 5060, 5060 Ti und 5050",
    status: "confirmed",
    text: "Unterstützt. Neural Rendering kostet aber viel Leistung, also eher in 1080p mit Super Resolution starten. Bei Tests der 5060 Ti auf die Speicherversion (8 oder 16 GB) achten.",
  },
  {
    name: "RTX 5070 (Desktop und Notebook)",
    status: "confirmed",
    text: "Beide unterstützt. Im Test von GameGPU war die Desktop-5070 die kleinste Karte mit über 60 FPS (66 FPS) bei maximalem Raytracing und ohne Frame Generation.",
  },
];

const generations = [
  { name: "RTX 50", features: ["DLSS 5 Neural Rendering", "Super Resolution", "DLAA", "Ray Reconstruction", "Frame Generation", "Multi Frame Generation bis 6X"] },
  { name: "RTX 40", features: ["Super Resolution", "DLAA", "Ray Reconstruction", "Frame Generation (2X)"] },
  { name: "RTX 30 / RTX 20", features: ["Super Resolution", "DLAA", "Ray Reconstruction"] },
];

const faqItems = [
  {
    question: "Welche Grafikkarten unterstützen DLSS 5?",
    answer: "Alle GeForce RTX 50 für Desktop und Notebook sowie Notebooks mit RTX Spark. RTX 40 soll DLSS 5 später bekommen, einen Termin gibt es noch nicht. RTX 30 und RTX 20 werden nicht unterstützt, GTX-, AMD- und Intel-Karten können DLSS generell nicht nutzen.",
  },
  {
    question: "Läuft DLSS 5 auf meiner RTX 3060 oder RTX 3080?",
    answer: "Nein. Für RTX 30 gibt es kein DLSS 5 und auch keine Ankündigung. Deine Karte nutzt aber weiterhin Super Resolution mit dem neuen DLSS-4.5-Modell, DLAA und Ray Reconstruction.",
  },
  {
    question: "Wann kommt DLSS 5 für RTX 40?",
    answer: "NVIDIA hat Support für RTX 40 angekündigt, aber keinen Termin genannt. Weder das schnellere Oktober-Modell noch das Update für Hogwarts Legacy am 5. November schließen RTX 40 ein.",
  },
  {
    question: "Was ist der Unterschied zwischen DLSS 4.5 und DLSS 5?",
    answer: "DLSS 4.5 verbessert Hochskalierung (Super Resolution) und Zwischenbilder (Frame Generation) und läuft je nach Funktion auf allen RTX-Karten. DLSS 5 bringt Neural Rendering: Eine KI überarbeitet Licht und Materialien im fertigen Bild. Das braucht derzeit eine RTX 50 oder RTX Spark.",
  },
  {
    question: "Welche Spiele unterstützen DLSS 5?",
    answer: "Aktuell NBA 2K27. Hogwarts Legacy folgt laut NVIDIA am 5. November 2026, Where Winds Meet Ende November. Weitere Titel wie Starfield und Resident Evil Requiem sind angekündigt, aber noch nicht verfügbar.",
  },
  {
    question: "Wie viele FPS kostet DLSS 5?",
    answer: "Mit dem ersten Modell viel: PC Gamer maß auf einer RTX 5080 in 1440p 93 statt 230 FPS, in 4K 49 statt 183 FPS. NVIDIA gibt das Oktober-Modell als bis zu 1,4-mal schneller an. Wir messen nicht selbst und geben keine eigenen FPS-Prognosen ab.",
  },
  {
    question: "Kann ich DLSS 5 mit einer AMD- oder Intel-Grafikkarte nutzen?",
    answer: "Nicht lokal. Offiziell geht es nur über GeForce NOW Ultimate, wo das Spiel auf NVIDIA-Servern mit RTX-Grafik läuft. Inoffizielle Mods sind kein offizieller Support und bergen Risiken.",
  },
];

function Sources({ links }: { links: { href: string; label: string }[] }) {
  return (
    <p className="mt-3 text-sm text-muted-foreground">
      Quelle{links.length > 1 ? "n" : ""}:{" "}
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 && ", "}
          <a href={link.href} className="text-blue-400 hover:underline">{link.label}</a>
        </span>
      ))}
    </p>
  );
}

function StatusList({ status }: { status: DlssSupport }) {
  const copy = STATUS_COPY[status];
  const cards = ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);

  return (
    <section id={`status-${status}`} className="scroll-mt-6" data-gpu-status={status}>
      <div className={`rounded-lg border p-4 sm:p-5 ${copy.box}`}>
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <span className={`h-2.5 w-2.5 flex-none rounded-full ${copy.dot}`} aria-hidden="true" />
          {copy.title}
          <span className="ml-auto text-sm font-normal text-muted-foreground">{cards.length}</span>
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-foreground/80">{copy.note}</p>
      </div>
      <ul className="mt-2 divide-y divide-border/60 rounded-lg border border-border sm:grid sm:grid-cols-2 sm:divide-y-0">
        {cards.map((gpu) => (
          <li
            key={gpu.id}
            data-gpu-id={gpu.id}
            className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 px-4 py-2.5 text-sm sm:border-b sm:border-border/60"
          >
            <span className="min-w-0 font-medium">{gpu.name}</span>
            <span className="ml-auto text-right text-muted-foreground">
              {gpu.vram === "Shared memory" ? "Gemeinsamer Speicher mit der CPU" : gpu.vram.replace(" or ", " oder ")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function GermanSupportedCardsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DLSS 5 Checker", item: "https://www.dlss5.net" },
        { "@type": "ListItem", position: 2, name: "DLSS-5-Grafikkarten", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Welche Grafikkarten unterstützen DLSS 5?",
      description: DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "de",
      image: `https://www.dlss5.net${OG_IMAGE_DE.url}`,
      datePublished: "2026-11-03",
      dateModified: CHECKED,
      author: { "@type": "Person", name: "liuyan-wjy", url: "https://github.com/liuyan-wjy" },
      publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
        <nav aria-label="Sprache" className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span aria-current="page" className="font-medium text-foreground">Deutsch</span>
          <Link href="/dlss-5-supported-cards" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/dlss-5-quais-placas" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
        </nav>

        <article id="ratgeber" className="space-y-12">
          <header>
            <p className="mb-3 text-sm font-semibold text-blue-400">
              Aktualisiert am <time dateTime={CHECKED}>{CHECKED_LABEL}</time>
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Welche Grafikkarten unterstützen DLSS 5?</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              DLSS 5 läuft aktuell nur auf <strong className="text-foreground">GeForce RTX 50</strong> und Notebooks mit{" "}
              <strong className="text-foreground">RTX Spark</strong>. RTX 40 soll folgen, RTX 30 und RTX 20 gehen leer aus.
              Hier siehst du auf einen Blick, was deine Grafikkarte kann, was DLSS 5 an FPS kostet und in welchen Spielen es schon läuft.
            </p>
          </header>

          <section id="kurzantwort" aria-labelledby="kurzantwort-heading" className="scroll-mt-6">
            <h2 id="kurzantwort-heading" className="mb-4 text-2xl font-bold">DLSS 5 nach Grafikkarten-Serie</h2>
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border">
              {STATUS_ORDER.map((status) => {
                const copy = STATUS_COPY[status];
                return (
                  <li key={status}>
                    <a href={`#status-${status}`} className="flex items-center gap-3 px-4 py-3.5 hover:bg-muted/30">
                      <span className={`h-2.5 w-2.5 flex-none rounded-full ${copy.dot}`} aria-hidden="true" />
                      <span className="font-semibold">{copy.short}</span>
                      <span className={`ml-auto text-right text-sm ${copy.text}`}>{copy.verdict}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Wichtig: Mit „DLSS 5“ ist das neue <strong className="text-foreground">Neural Rendering</strong> gemeint, das Licht und
              Materialien per KI aufwertet. Hochskalierung (Super Resolution) und Ray Reconstruction gibt es weiterhin auf jeder RTX-Karte,
              auch wenn DLSS 5 selbst nicht läuft.
            </p>
            <Sources links={[
              { href: SOURCES.launch, label: "NVIDIA zum Start von DLSS 5" },
              { href: SOURCES.october, label: "NVIDIA zum Oktober-Update" },
              { href: SOURCES.rtx40, label: "NVIDIA-FAQ zu RTX 40" },
              { href: SOURCES.hardware, label: "NVIDIA DLSS-Übersicht" },
            ]} />
          </section>

          <section id="modelle" className="scroll-mt-6">
            <h2 className="mb-2 text-2xl font-bold">Die meistgesuchten Grafikkarten im Check</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">Die Kurzantwort für die Karten, nach denen am häufigsten gefragt wird.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {popularCards.map((card) => {
                const copy = STATUS_COPY[card.status];
                return (
                  <div key={card.name} className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">{card.name}</h3>
                    <p className={`mt-0.5 text-sm font-medium ${copy.text}`}>{copy.verdict}</p>
                    <p className="mt-2 leading-relaxed text-foreground/80">{card.text}</p>
                  </div>
                );
              })}
            </div>
            <Sources links={[
              { href: SOURCES.rtx40, label: "NVIDIA-FAQ zu RTX 40" },
              { href: SOURCES.gamegpuTest, label: "GameGPU-Test NBA 2K27" },
            ]} />
          </section>

          <section id="dlss-45-oder-5" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">DLSS 5 oder DLSS 4.5: Was ist der Unterschied?</h2>
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>
                DLSS ist kein einzelner Schalter, sondern ein Paket aus mehreren Funktionen. <strong className="text-foreground">DLSS 4.5</strong> macht
                vor allem zwei Dinge besser: Super Resolution rechnet ein Bild aus niedrigerer Auflösung hoch, Frame Generation schiebt
                zusätzliche Bilder ein. Das neue Super-Resolution-Modell läuft auf jeder RTX-Karte ab der RTX-20-Serie.
              </p>
              <p>
                <strong className="text-foreground">DLSS 5</strong> geht einen Schritt weiter. Das sogenannte Neural Rendering nimmt das fertige
                Bild und lässt eine KI Licht und Materialien realistischer nachzeichnen. Genau diese Funktion ist auf RTX 50 und
                RTX Spark beschränkt. Steht in einem Spielmenü nur „DLSS“, ist meist Super Resolution gemeint, nicht DLSS 5.
              </p>
            </div>
            <h3 className="mb-3 mt-6 font-semibold">Diese DLSS-Funktionen nutzt deine Karte heute</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {generations.map((generation) => (
                <div key={generation.name} className="rounded-lg border border-border p-4">
                  <p className="mb-2 font-semibold">{generation.name}</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {generation.features.map((feature) => (
                      <li key={feature} className="flex gap-2"><span className="text-green-400" aria-hidden="true">✓</span>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Den kompletten Funktionsvergleich aller Generationen findest du in unserer{" "}
              <Link href="/dlss-supported-cards" className="text-blue-400 hover:underline">DLSS-Übersicht nach Grafikkarte (Englisch)</Link>.
            </p>
            <Sources links={[{ href: SOURCES.hardware, label: "NVIDIA DLSS-Übersicht" }]} />
          </section>

          <section id="spiele" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">In welchen Spielen läuft DLSS 5?</h2>
            <ul className="space-y-3">
              <li className="rounded-lg border border-border p-4">
                <p className="font-semibold">NBA 2K27 <span className="ml-1 text-sm font-medium text-green-400">verfügbar</span></p>
                <p className="mt-1 leading-relaxed text-foreground/80">
                  Das erste Spiel mit DLSS 5. Seit dem 16. Oktober nutzt es das schnellere Oktober-Modell.
                  Voraussetzung ist der Game-Ready-Treiber 616.64 oder neuer.
                </p>
              </li>
              <li className="rounded-lg border border-border p-4">
                <p className="font-semibold">Hogwarts Legacy <span className="ml-1 text-sm font-medium text-yellow-400">ab 5. November 2026</span></p>
                <p className="mt-1 leading-relaxed text-foreground/80">
                  Kommt per Update für RTX 50, RTX Spark und GeForce NOW. RTX 40 führt NVIDIA dafür nicht auf.
                </p>
              </li>
              <li className="rounded-lg border border-border p-4">
                <p className="font-semibold">Where Winds Meet <span className="ml-1 text-sm font-medium text-yellow-400">Ende November 2026</span></p>
                <p className="mt-1 leading-relaxed text-foreground/80">Angekündigt für Ende November, ein genauer Tag steht noch aus.</p>
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Weitere Titel wie Starfield, Resident Evil Requiem und Assassin&apos;s Creed Shadows sind angekündigt, haben DLSS 5 aber noch nicht
              bekommen. Den aktuellen Stand pflegen wir in der{" "}
              <Link href="/dlss-5-games" className="text-blue-400 hover:underline">Liste aller DLSS-5-Spiele (Englisch)</Link>.
            </p>
            <Sources links={[
              { href: SOURCES.october, label: "NVIDIA zu Oktober-Modell und Hogwarts Legacy" },
              { href: SOURCES.driver, label: "NVIDIA-Treiber für NBA 2K27" },
            ]} />
          </section>

          <section id="leistung" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Wie viel Leistung kostet DLSS 5?</h2>
            <p className="mb-4 leading-relaxed text-foreground/80">
              Neural Rendering ist teuer. Unabhängige Tests von NBA 2K27 mit dem ersten Modell, jeweils ohne Frame Generation:
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Veröffentlichte FPS-Messungen mit und ohne DLSS 5</caption>
                <thead className="bg-muted/40">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Karte und Auflösung</th>
                    <th scope="col" className="p-3 text-right font-semibold">Ohne</th>
                    <th scope="col" className="p-3 text-right font-semibold">Mit DLSS 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/70"><th scope="row" className="p-3 font-medium">RTX 5080, 1440p <span className="block text-xs font-normal text-muted-foreground">PC Gamer</span></th><td className="p-3 text-right">230 FPS</td><td className="p-3 text-right">93 FPS</td></tr>
                  <tr className="border-t border-border/70"><th scope="row" className="p-3 font-medium">RTX 5080, 4K <span className="block text-xs font-normal text-muted-foreground">PC Gamer</span></th><td className="p-3 text-right">183 FPS</td><td className="p-3 text-right">49 FPS</td></tr>
                  <tr className="border-t border-border/70"><th scope="row" className="p-3 font-medium">RTX 5090, 4K <span className="block text-xs font-normal text-muted-foreground">GameGPU</span></th><td className="p-3 text-right">162 FPS</td><td className="p-3 text-right">68 FPS</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Das seit Oktober ausgelieferte Modell soll laut NVIDIA bis zu 1,4-mal schneller sein. PC Gamer hat auf einem RTX-Spark-Notebook
              in 1440p rund 25 Prozent mehr FPS gemessen. Die Werte oben sind also eher die Untergrenze. Eigene Messungen machen wir nicht.
            </p>
            <Sources links={[
              { href: SOURCES.pcgamer, label: "PC Gamer (RTX 5080)" },
              { href: SOURCES.gamegpu5090, label: "GameGPU (RTX 5090)" },
              { href: SOURCES.pcgamerSpark, label: "PC Gamer (RTX Spark)" },
              { href: SOURCES.october, label: "NVIDIA zum Oktober-Modell" },
            ]} />
          </section>

          <section id="notebooks" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Gaming-Notebooks und RTX Spark</h2>
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>
                DLSS 5 gilt für Notebook-GPUs genauso wie für Desktop-Karten: Jede RTX-50-Laptop-GPU wird unterstützt. Eine RTX 5070
                im Notebook ist aber ein anderer Chip als die Desktop-5070. Vergleiche deshalb nur Tests mit derselben Laptop-GPU.
              </p>
              <p>
                RTX Spark ist NVIDIAs Notebook-Plattform, bei der sich Prozessor und Grafik den Arbeitsspeicher teilen. Seit dem
                Oktober-Update unterstützt sie DLSS 5 offiziell. Eine feste VRAM-Angabe gibt es deshalb nicht.
              </p>
            </div>
            <Sources links={[
              { href: SOURCES.spark, label: "NVIDIA zu RTX Spark in Spielen" },
              { href: SOURCES.sparkSpecs, label: "RTX-Spark-Datenblatt" },
            ]} />
          </section>

          <section id="aktivieren" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">RTX 50 im Rechner, aber keine DLSS-5-Option?</h2>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-foreground/80">
              <li>Grafiktreiber aktualisieren: mindestens Game Ready 616.64, am einfachsten über die NVIDIA App.</li>
              <li>Spiel-Update installieren. DLSS 5 kommt per Patch über Steam oder den jeweiligen Launcher.</li>
              <li>Im Spiel nach „DLSS Neural Rendering“ suchen. In NBA 2K27 steht die Option in den Videoeinstellungen, mit F9 vergleichst du an und aus.</li>
              <li>Ist die Option ausgegraut, prüfe im Notebook, ob das Spiel wirklich auf der RTX-GPU läuft und nicht auf der integrierten Grafik.</li>
            </ol>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Schritt für Schritt mit Lösungen für häufige Probleme: unsere{" "}
              <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">Anleitung für NBA 2K27 (Englisch)</Link>.
            </p>
            <Sources links={[{ href: SOURCES.driver, label: "NVIDIA-Treiber und Einrichtung für NBA 2K27" }]} />
          </section>

          <section id="amd-intel" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Keine NVIDIA-Karte? Das geht trotzdem</h2>
            <p className="leading-relaxed text-foreground/80">
              Mit AMD Radeon oder Intel Arc läuft DLSS 5 nicht lokal. Der einzige offizielle Weg ist GeForce NOW Ultimate: Das Spiel läuft
              dann auf NVIDIA-Servern und wird zu dir gestreamt. Für deine eigene Karte sind FSR (AMD) und XeSS (Intel) die passenden
              Alternativen. Mods, die DLSS 5 auf nicht unterstützten Karten erzwingen, sind inoffiziell und können zu Abstürzen oder
              Problemen mit Anti-Cheat führen.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Mehr dazu: <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">DLSS 5 mit AMD-Grafikkarte (Englisch)</Link>.
            </p>
          </section>

          <section id="faq" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Häufige Fragen zu DLSS 5</h2>
            <div className="divide-y divide-border rounded-lg border border-border">
              {faqItems.map((item) => (
                <div key={item.question} className="p-4">
                  <h3 className="mb-1.5 font-semibold">{item.question}</h3>
                  <p className="leading-relaxed text-foreground/80">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <section id="liste" className="mt-12 scroll-mt-6">
          <h2 className="mb-2 text-2xl font-bold">Alle Grafikkarten im Überblick</h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            {ALL_GPUS.length} Modelle von NVIDIA, AMD und Intel mit Speicherausstattung, sortiert nach DLSS-5-Status.
          </p>
          <div className="space-y-8">
            {STATUS_ORDER.map((status) => <StatusList key={status} status={status} />)}
          </div>
        </section>

        <section id="quellen" className="mt-12 rounded-lg border border-border p-5 text-sm">
          <h2 className="mb-3 text-xl font-bold">Über diese Übersicht</h2>
          <p className="mb-3 leading-relaxed text-muted-foreground">
            Von <Link href="/about" rel="author" className="text-blue-400 hover:underline">liuyan-wjy</Link>, zuletzt geprüft am{" "}
            <time dateTime={CHECKED}>{CHECKED_LABEL}</time>. Unabhängiges Projekt ohne Verbindung zu NVIDIA. Alle Angaben stammen aus
            offiziellen NVIDIA-Quellen oder veröffentlichten Tests, die jeweils verlinkt sind. Ändert sich der Stand, aktualisieren wir die Seite.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/dlss-5-evidence-tracker" className="text-blue-400 hover:underline">Alle Belege und Änderungen (Englisch)</Link>
            <Link href="/editorial-policy" className="text-blue-400 hover:underline">So arbeiten wir (Englisch)</Link>
          </div>
        </section>
      </main>
    </>
  );
}
