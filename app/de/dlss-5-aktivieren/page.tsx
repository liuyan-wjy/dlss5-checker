import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";
import UpdateAlertForm from "@/components/UpdateAlertForm";
import { OG_IMAGE_DE } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/de/dlss-5-aktivieren";
const TITLE = "DLSS 5 herunterladen & aktivieren: Treiber, Menüs & Hilfe";
const DESCRIPTION = "Es gibt keinen separaten DLSS-5-Download. So aktivierst du DLSS 5 über Game-Ready-Treiber 621.24, Spiel-Updates und Menüs – plus Hilfe bei ausgegrauter Option.";
const CHECKED = "2026-11-24";
const CHECKED_LABEL = "24. November 2026";

const SOURCES = {
  nvidiaDownload: "https://www.nvidia.com/de-de/drivers/",
  november: "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/",
  driver62124: "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/",
  wwmOfficial: "https://www.wherewindsmeetgame.com/news/official/1123DLSS5.html",
  gfnReqs: "https://www.nvidia.com/en-us/geforce-now/system-reqs/",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/dlss-5-aktivieren",
    languages: {
      en: "https://www.dlss5.net/dlss-5-download",
      "pt-BR": "https://www.dlss5.net/pt/como-ativar-dlss-5",
      de: PAGE_URL,
      "x-default": "https://www.dlss5.net/dlss-5-download",
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

const steps = [
  { n: "1", title: "Grafikkarte prüfen", desc: "Lokal erforderlich: GeForce RTX 50 (Desktop oder Laptop) oder ein RTX-Spark-Notebook." },
  { n: "2", title: "Treiber aktualisieren", desc: "Offiziellen NVIDIA Game-Ready-Treiber (mindestens 621.24 WHQL für alle vier Live-Spiele) über die NVIDIA App oder nvidia.de installieren." },
  { n: "3", title: "Spiel-Update laden", desc: "Das Spiel über Steam, Epic Games oder den offiziellen Launcher auf den aktuellen Patch bringen." },
  { n: "4", title: "Im Spiel einschalten", desc: "DLSS 5 Neural Rendering wird direkt im Grafikmenü des jeweiligen Spiels aktiviert, nicht über einen globalen Schalter." },
];

const gameRows = [
  { game: "NBA 2K27", menu: "Features → Video Settings → DLSS Neural Rendering", hotkey: "F9", driver: "616.64 WHQL oder neuer" },
  { game: "Hogwarts Legacy", menu: "Game Settings → Display Settings → Upscale Type: NVIDIA DLSS → Neural Rendering", hotkey: "Shift+Alt+B", driver: "621.14 WHQL oder neuer" },
  { game: "War Thunder", menu: "Update Eagle's Shadow laden, danach Neural Rendering in den Grafikeinstellungen aktivieren", hotkey: "Nicht dokumentiert", driver: "Aktueller Game-Ready-Treiber" },
  { game: "Where Winds Meet", menu: "Update vom 23./24. Nov. laden, DLSS 5 Neural Rendering im Grafikmenü aktivieren", hotkey: "Optionaler Schalter & Regler im Menü", driver: "621.24 WHQL oder neuer" },
];

const fixes = [
  {
    problem: "Die Option „Neural Rendering“ taucht gar nicht auf",
    fix: "Prüfe zuerst alle drei Pflichtpunkte zusammen: Unterstützt das Spiel DLSS 5 bereits live, ist der Patch vollständig geladen und erkennt Windows wirklich eine RTX 50 oder RTX Spark?",
  },
  {
    problem: "Schalter ist auf einer RTX 50 ausgegraut",
    fix: "In Titeln wie Hogwarts Legacy ist Neural Rendering an den Upscaler gekoppelt. Stelle zuerst Upscale Type auf NVIDIA DLSS, aktualisiere den Treiber und starte das Spiel neu.",
  },
  {
    problem: "Auf einem Gaming-Laptop ausgegraut",
    fix: "Oft startet das Spiel auf der integrierten Grafik. Weise das Spiel unter Windows-Einstellungen → System → Bildschirm → Grafik auf „Hohe Leistung“ (RTX 50) zu oder aktiviere den dGPU-Modus.",
  },
  {
    problem: "Bildrate sinkt nach dem Einschalten deutlich",
    fix: "Das ist technisch normal: Neural Rendering verbessert Licht und Materialien, kostet aber GPU-Zeit. Kombiniere es mit DLSS Super Resolution (Balanced/Performance) oder Multi Frame Generation.",
  },
  {
    problem: "Keine RTX 50 (sondern RTX 40, RTX 30, AMD, Mac oder Konsole)",
    fix: "Auf dieser Hardware erscheint kein offizieller lokaler Schalter. Lade keine dubiosen „DLSS-5-Installer“ oder DLL-Dateien herunter. Der einzige offizielle Weg ohne RTX 50 ist Streaming über GeForce NOW Ultimate.",
  },
];

const faqs = [
  {
    question: "Wo kann ich DLSS 5 offiziell herunterladen?",
    answer:
      "Es gibt keinen eigenständigen DLSS-5-Installer. Du erhältst DLSS 5 ausschließlich durch die Kombination aus einem aktuellen offiziellen NVIDIA Game-Ready-Treiber (über die NVIDIA App oder nvidia.de) und einem unterstützten Spiel-Update.",
  },
  {
    question: "Welchen NVIDIA-Treiber brauche ich für DLSS 5?",
    answer:
      "Mit dem Game-Ready-Treiber 621.24 WHQL (oder neuer) deckst du alle vier aktuellen DLSS-5-Spiele ab: NBA 2K27, Hogwarts Legacy, War Thunder und Where Winds Meet. Unter Windows 10 endet der Game-Ready-Support laut NVIDIA ab November 2026; für neue Treiber ist Windows 11 erforderlich.",
  },
  {
    question: "Gibt es eine DLSS-5-APK für Android oder einen Download für PS5 und Mac?",
    answer:
      "Nein. DLSS 5 läuft lokal ausschließlich auf Windows-PCs mit GeForce RTX 50 oder RTX Spark. Angebliche DLSS-5-APKs stammen nicht von NVIDIA. Auf Mac, Smartphone oder älteren PCs lässt sich DLSS 5 offiziell nur per Cloud-Streaming über GeForce NOW Ultimate nutzen.",
  },
  {
    question: "Muss ich DLSS 5 in der NVIDIA App aktivieren?",
    answer:
      "Nein. Die NVIDIA App hilft beim Treiber-Update, aber der eigentliche Schalter für DLSS 5 Neural Rendering sitzt im Grafikmenü des jeweiligen Spiels.",
  },
  {
    question: "Kann ich DLSS 5 per Mod auf RTX 40, RTX 30 oder AMD erzwingen?",
    answer:
      "Inoffizielle Community-Tools wie DLSS 5 Swapper oder DLSS 5 Manager sind keine offiziellen NVIDIA-Freigaben und bringen Risiken durch unsignierte DLLs, Malware-Imitate und Anti-Cheat-Sperren mit sich. Wir bieten bewusst keine Downloads oder Anleitungen dafür an.",
  },
];

export default function GermanSetupPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "DLSS 5 aktivieren",
      inLanguage: "de",
      step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.desc })),
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
          <Link href="/dlss-5-download" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/como-ativar-dlss-5" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
        </nav>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            Geprüft am <time dateTime={CHECKED}>{CHECKED_LABEL}</time>
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS 5 herunterladen &amp; aktivieren: Offizieller Weg Schritt für Schritt
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Für NVIDIA DLSS 5 gibt es keinen separaten Installer und keine APK. Du aktivierst 3D-Guided
            Neural Rendering, indem du auf einer GeForce RTX 50 oder einem RTX-Spark-Laptop den aktuellen
            NVIDIA Game-Ready-Treiber installierst, eines der vier unterstützten Spiele aktualisierst und
            die Option direkt im Grafikmenü einschaltest.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">In vier Schritten zu DLSS 5</h2>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-xl border border-border bg-muted/20 p-4">
                <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-black" aria-hidden="true">
                  {step.n}
                </span>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold">Wo du DLSS 5 in jedem Live-Spiel findest</h2>
          <p className="leading-relaxed text-foreground/80">
            Jedes Studio benennt den Menüpfad leicht anders. Verlasse dich nicht auf ein allgemeines
            „DLSS“-Label, sondern achte ausdrücklich auf <strong>Neural Rendering</strong>. Für
            Details zur Hardware-Auswahl sieh dir auch unsere{" "}
            <Link href="/de/dlss-5-grafikkarten" className="text-blue-400 hover:underline">
              Übersicht aller unterstützten Grafikkarten
            </Link>{" "}
            und die{" "}
            <Link href="/de/dlss-5-spiele" className="text-blue-400 hover:underline">
              DLSS-5-Spiele-Liste
            </Link>{" "}
            an.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th scope="col" className="p-3.5 font-semibold">Spiel</th>
                  <th scope="col" className="p-3.5 font-semibold">Menüpfad</th>
                  <th scope="col" className="p-3.5 font-semibold">Tastenkürzel</th>
                  <th scope="col" className="p-3.5 font-semibold">Treiber</th>
                </tr>
              </thead>
              <tbody>
                {gameRows.map((row) => (
                  <tr key={row.game} className="border-t border-border/70">
                    <th scope="row" className="p-3.5 font-medium">{row.game}</th>
                    <td className="p-3.5 text-foreground/85">{row.menu}</td>
                    <td className="p-3.5 text-muted-foreground">{row.hotkey}</td>
                    <td className="p-3.5 text-muted-foreground">{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <VideoEmbed
            id="GPCM-PHjmWw"
            title="Hogwarts Legacy | DLSS 5 Launch Trailer"
            channel="NVIDIA GeForce"
            caption="Offizieller NVIDIA-Trailer zur Live-Integration von DLSS 5 Neural Rendering in Hogwarts Legacy."
            locale="de"
          />
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold">Fehlerbehebung: Wenn DLSS 5 fehlt oder ausgegraut ist</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {fixes.map((item) => (
              <div key={item.problem} className="rounded-xl border border-border p-5">
                <h3 className="mb-2 font-semibold">{item.problem}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-3 rounded-xl border border-border bg-card/40 p-5">
          <h2 className="text-xl font-bold">Windows 11, GeForce NOW und inoffizielle Downloads</h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            Beachte zwei praktische Hinweise: Erstens hat NVIDIA angekündigt, dass Game-Ready-Treiber ab
            November 2026 Windows 11 voraussetzen. Zweitens solltest du niemals Dateien von fremden
            Seiten laden, die einen „DLSS 5 Standalone Download“ oder „DLSS 5 für alle Grafikkarten“
            versprechen. Wer eine RTX 40, RTX 30, AMD Radeon oder einen Mac nutzt, kann unterstützte
            Titel stattdessen offiziell über GeForce NOW Ultimate streamen (NVIDIA empfiehlt mindestens
            25 Mbit/s für 1080p60). Hintergründe zu Risiken von Community-Mods findest du im{" "}
            <Link href="/dlss-5-mods" lang="en" className="text-blue-400 hover:underline">
              englischen Risiko-Ratgeber zu DLSS-5-Mods
            </Link>
            .
          </p>
        </section>

        <UpdateAlertForm
          locale="de"
          defaultTopics={["rtx40", "games"]}
          sourcePage="/de/dlss-5-aktivieren"
        />

        <section className="mb-10 space-y-5">
          <h2 className="text-2xl font-bold">Häufige Fragen zum DLSS-5-Download</h2>
          {faqs.map((item) => (
            <div key={item.question}>
              <h3 className="mb-1 font-semibold">{item.question}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Offizielle Quellen</h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><a href={SOURCES.nvidiaDownload} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA Offizielle Treiber-Downloads (DE)</a></li>
            <li><a href={SOURCES.driver62124} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: Game Ready Driver 621.24 WHQL</a></li>
            <li><a href={SOURCES.november} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: November-Update für Hogwarts Legacy, War Thunder &amp; Where Winds Meet</a></li>
            <li><a href={SOURCES.wwmOfficial} className="text-blue-400 hover:underline" rel="noreferrer">Where Winds Meet: Offizielle DLSS-5-Treiber-Mitteilung</a></li>
            <li><a href={SOURCES.gfnReqs} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA GeForce NOW Systemanforderungen</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
