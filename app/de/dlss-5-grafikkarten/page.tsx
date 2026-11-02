import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport } from "@/lib/gpu-search";
import { OG_IMAGE_DE } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/de/dlss-5-grafikkarten";
const TITLE = "DLSS 5: Welche Grafikkarten werden unterstützt? [2026]";
const DESCRIPTION = "Welche Grafikkarten unterstützen DLSS 5? RTX 50 und RTX Spark sind bestätigt, RTX 40 ist geplant. Status und Unterschiede zu DLSS 4.5 im Überblick.";
const SOURCES = {
  launch: "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/",
  hardware: "https://www.nvidia.com/de-de/geforce/technologies/dlss/",
  spark: "https://www.nvidia.com/en-us/geforce/news/rtx-spark-dlss-reflex-ray-tracing-games/",
  rtx40: "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/",
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

const STATUS_COPY: Record<DlssSupport, { title: string; label: string; note: string; className: string }> = {
  confirmed: {
    title: "RTX 50 und RTX Spark: offiziell unterstützt",
    label: "Bestätigt",
    note: "Neural Rendering ist in unterstützten Spielen verfügbar. Eine bestätigte GPU allein schaltet die Funktion nicht in jedem Spiel frei.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  planned: {
    title: "RTX 40: geplant, noch nicht verfügbar",
    label: "Geplant, ohne Termin",
    note: "Der angekündigte Plan ist keine heutige Freigabe. RTX 40 bleibt hier getrennt von bereits unterstützter Hardware aufgeführt.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unsupported: {
    title: "RTX 30 und RTX 20: kein offizielles Neural Rendering",
    label: "Kein offizieller DLSS-5-Support",
    note: "Diese Karten unterstützen weiterhin andere DLSS-Funktionen. Fehlender Support für Neural Rendering bedeutet nicht, dass sämtliches DLSS entfällt.",
    className: "border-orange-500/30 bg-orange-500/5 text-orange-300",
  },
  none: {
    title: "GTX, AMD und Intel: kein NVIDIA DLSS",
    label: "Kein DLSS",
    note: "Die folgenden Modelle gehören nicht zur unterstützten NVIDIA-RTX-Hardware. Die Freigabe einer anderen Upscaling-Technik ist davon unabhängig.",
    className: "border-red-500/30 bg-red-500/5 text-red-300",
  },
};

const FEATURE_LABELS: Record<string, string> = {
  dlss_super_resolution: "Super Resolution",
  dlaa: "DLAA",
  ray_reconstruction: "Ray Reconstruction",
  frame_generation: "Frame Generation",
  multi_frame_generation_4x: "Multi Frame Generation",
  dynamic_mfg_6x: "Dynamic Multi Frame Generation",
};

const faqItems = [
  {
    question: "Welche Grafikkarten unterstützen DLSS 5?",
    answer: "Offiziell bestätigt sind GeForce RTX 50 für Desktop-PCs und Notebooks sowie RTX Spark. RTX 40 ist geplant, aber noch nicht freigeschaltet und ohne öffentlichen Termin. RTX 20 und RTX 30 haben keinen aktuellen offiziellen Support für DLSS 5 Neural Rendering.",
  },
  {
    question: "Kann meine RTX 3060 DLSS 5 nutzen?",
    answer: "Nicht als offiziell unterstütztes Neural Rendering. Die RTX 3060 gehört zur RTX-30-Serie. Super Resolution, DLAA und Ray Reconstruction bleiben in entsprechend unterstützten Spielen verfügbar; NVIDIA Frame Generation gehört nicht zu ihren freigegebenen Funktionen.",
  },
  {
    question: "Unterstützen RTX 4060, RTX 4070 und RTX 4090 DLSS 5?",
    answer: "Alle drei gehören zur geplanten RTX-40-Gruppe. Auch Ti- und SUPER-Varianten haben noch keine offizielle Freigabe für DLSS 5 Neural Rendering. Die bereits unterstützte Frame Generation ist eine andere Funktion und belegt keine DLSS-5-Freigabe.",
  },
  {
    question: "Ist DLSS 4.5 dasselbe wie DLSS 5?",
    answer: "Nein. Die Versionsnummer allein reicht als Kompatibilitätsangabe nicht aus. Super Resolution rekonstruiert eine höhere Bildauflösung, Frame Generation erzeugt zusätzliche Bilder. DLSS 5 ergänzt Neural Rendering für Beleuchtung und Materialien. Prüfe deshalb immer die einzelne Funktion und das konkrete Spiel.",
  },
];

function SourceNote({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm text-muted-foreground">
      Quelle: <a href={href} className="text-blue-400 hover:underline">{children}</a>.
      {" "}Geprüft am <time dateTime="2026-11-02">2. November 2026</time>.
    </p>
  );
}

function StatusSection({ status }: { status: DlssSupport }) {
  const copy = STATUS_COPY[status];
  const cards = ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);

  return (
    <section id={`status-${status}`} className="mb-10 scroll-mt-6" data-gpu-status={status}>
      <div className={`mb-4 rounded-lg border p-5 ${copy.className}`}>
        <h2 className="mb-2 text-2xl font-bold text-foreground">{copy.title}</h2>
        <p className="text-sm leading-relaxed text-foreground/80">{copy.note}</p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {cards.map((gpu) => (
          <li key={gpu.id} data-gpu-id={gpu.id} className="min-w-0 rounded-lg border border-border p-4">
            <h3 className="mb-2 font-semibold">{gpu.name}</h3>
            <p className="mb-3 text-sm font-medium">{copy.label}</p>
            <dl className="space-y-2 text-sm">
              <div><dt className="inline text-muted-foreground">Baureihe: </dt><dd className="inline">{gpu.series}</dd></div>
              <div>
                <dt className="inline text-muted-foreground">{gpu.vram === "Shared memory" ? "Speicher: " : "Grafikspeicher: "}</dt>
                <dd className="inline">{gpu.vram === "Shared memory" ? "Gemeinsamer Speicher mit der CPU" : gpu.vram.replace(" or ", " oder ")}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Weitere verfügbare DLSS-Funktionen:</dt>
                <dd className="mt-1 leading-relaxed">{gpu.current_dlss_features.length
                  ? gpu.current_dlss_features.map((feature) => FEATURE_LABELS[feature]).join(", ")
                  : "Keine"}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <SourceNote href={status === "planned" ? SOURCES.rtx40 : SOURCES.hardware}>
        {status === "planned" ? "NVIDIAs FAQ zum RTX-40-Plan (Englisch)" : "NVIDIAs Hardware- und Funktionstabelle"}
      </SourceNote>
      {status === "confirmed" && <SourceNote href={SOURCES.spark}>NVIDIAs Freigabe für RTX Spark (Englisch)</SourceNote>}
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
      "@type": "WebPage",
      name: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "de",
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      author: { "@type": "Person", name: "liuyan-wjy", url: "https://github.com/liuyan-wjy" },
      isPartOf: { "@type": "WebSite", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <nav aria-label="Sprachversionen dieser Grafikkartenliste" className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span aria-current="page">Deutsch</span>
          <Link href="/dlss-5-supported-cards" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/dlss-5-quais-placas" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
        </nav>

        <article id="redaktion" className="space-y-10">
          <header className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-blue-400">Stand: <time dateTime="2026-11-02">2. November 2026</time></p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Welche Grafikkarten unterstützen DLSS 5?</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Du suchst nach „DLSS 5 welche Grafikkarte“ und willst vor allem wissen, ob deine vorhandene Karte dazugehört?
              Entscheidend ist die Freigabe für <strong className="text-foreground">Neural Rendering</strong>, nicht allein die DLSS-Versionsnummer im Spielmenü.
              Hier findest du die Antwort nach Baureihe, konkrete Hinweise für häufig gesuchte Modelle und die vollständige Liste unseres GPU-Datenbestands.
            </p>
          </header>

          <section id="kurzantwort" className="scroll-mt-6 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
            <h2 className="mb-3 text-2xl font-bold">Die kurze Antwort: RTX 50 und RTX Spark</h2>
            <p className="leading-relaxed text-foreground/80">
              GeForce RTX 50 für Desktop-PCs und Notebooks unterstützt DLSS 5 Neural Rendering in NBA 2K27.
              RTX Spark ist ebenfalls bestätigt. RTX 40 ist geplant, aber noch nicht freigeschaltet; einen öffentlichen Termin gibt es nicht.
              RTX 30 und RTX 20 haben keinen aktuellen offiziellen Support für diese neue Funktion. GTX, AMD Radeon und Intel Arc unterstützen NVIDIA DLSS nicht.
              „Geplant“ und „bestätigt“ sind deshalb bewusst getrennte Kategorien: Ein Plan lässt sich heute nicht wie eine verfügbare Einstellung einschalten.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {(["confirmed", "planned", "unsupported", "none"] as const).map((status) => (
                <a key={status} href={`#status-${status}`} className="rounded-full border border-border px-3 py-2 hover:border-blue-400 hover:text-blue-400">{STATUS_COPY[status].title}</a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Quellen, geprüft am <time dateTime="2026-11-02">2. November 2026</time>: {" "}
              <a href={SOURCES.launch} className="text-blue-400 hover:underline">DLSS-5-Start (Englisch)</a>, {" "}
              <a href={SOURCES.spark} className="text-blue-400 hover:underline">RTX Spark (Englisch)</a>, {" "}
              <a href={SOURCES.rtx40} className="text-blue-400 hover:underline">RTX-40-FAQ (Englisch)</a> und {" "}
              <a href={SOURCES.hardware} className="text-blue-400 hover:underline">Hardware-Tabelle</a>.
            </p>
          </section>

          <section id="modelle" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">RTX 3060, 4060, 4070 oder 4090: Was gilt für meine Karte?</h2>
            <div className="space-y-5 leading-relaxed text-foreground/80">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">RTX 3060 und RTX 3060 Ti</h3>
                <p>Die RTX-30-Serie steht nicht auf der aktuellen offiziellen Liste für Neural Rendering. Sie bleibt jedoch für Super Resolution, DLAA und Ray Reconstruction in passenden Spielen nutzbar.
                  Wenn du nach „DLSS 5 RTX 3060“ suchst, trenne daher zwei Fragen: Läuft eine bekannte DLSS-Funktion weiter, oder wurde die neue Rendering-Stufe für diese Karte freigegeben?
                  Die erste Antwort kann ja lauten, während die zweite derzeit nein lautet. Mehr Grafikspeicher oder der Namenszusatz Ti ersetzen keine offizielle Freigabe.</p>
                <SourceNote href={SOURCES.hardware}>NVIDIAs Hardware- und Funktionstabelle</SourceNote>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">RTX 4060, RTX 4070 und die Ti-/SUPER-Varianten</h3>
                <p>Diese Karten fallen unter den RTX-40-Plan. Behandle „kommt später“ beim Kauf oder bei der Fehlersuche nicht als Zusage für einen bestimmten Monat.
                  Solange die offizielle Freigabe fehlt, ist eine ausgegraute Neural-Rendering-Option kein Beleg für einen Defekt an deiner Karte.
                  Verwechsle eine Meldung zu Frame Generation außerdem nicht mit einer Meldung zu Neural Rendering: Ein Update der einen Funktion bestätigt nicht automatisch die andere.
                  Für die Statusentscheidung zählt die ausdrücklich genannte Funktion, nicht eine Überschrift mit einer hohen DLSS-Nummer.</p>
                <SourceNote href={SOURCES.rtx40}>NVIDIAs FAQ zum RTX-40-Plan (Englisch)</SourceNote>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">RTX 4080 und RTX 4090</h3>
                <p>Auch diese Modelle gehören zur geplanten Gruppe. Ziehe aus einem großen Modellnamen keine vorgezogene Freigabe ab.
                  Vergleiche beim Lesen einer Anleitung zuerst die Baureihe und dann die konkrete Technik.
                  Eine Anleitung für Multi Frame Generation auf einer RTX 50 beantwortet eine andere Frage als die nach Neural Rendering auf deiner RTX 4090.
                  Wer bereits eine RTX 40 besitzt, kann eine Kaufentscheidung daher von einer tatsächlichen Veröffentlichung abhängig machen, statt einen noch offenen Termin vorauszusetzen.</p>
                <SourceNote href={SOURCES.rtx40}>NVIDIAs FAQ zum RTX-40-Plan (Englisch)</SourceNote>
              </div>
            </div>
          </section>

          <section id="dlss-45-oder-5" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">DLSS 4.5 oder DLSS 5: Prüfe die Funktion statt nur die Zahl</h2>
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>DLSS bezeichnet mehrere Techniken. Super Resolution rekonstruiert ein Bild mit höherer Auflösung aus einer niedrigeren Eingabeauflösung.
                Ray Reconstruction betrifft die Rekonstruktion bei Raytracing. Frame Generation und Multi Frame Generation ergänzen Bilder.
                DLSS 5 fügt mit Neural Rendering eine Stufe für Beleuchtung und Materialien hinzu. Diese Begriffe sind keine austauschbaren Namen für denselben Schalter.</p>
              <p>Notiere dir beim Abgleich mit einem Test daher den vollständigen Funktionsnamen. „DLSS an“ ist zu ungenau, wenn du wissen möchtest, ob genau Neural Rendering verwendet wurde.
                Frage bei einem Screenshot aus einem Forum nach dem Spiel, der Grafikkarte und der aktivierten Option.
                Ein sichtbarer Super-Resolution-Regler auf einer älteren RTX-Karte widerspricht der fehlenden Neural-Rendering-Freigabe nicht.
                Umgekehrt bedeutet eine unterstützte RTX 50 nicht, dass jeder Entwickler bereits alle DLSS-Funktionen in sein Spiel eingebaut hat.</p>
              <p>Die Liste weiter unten nennt deshalb den Neural-Rendering-Status und die weiteren verfügbaren Funktionen getrennt.
                Lies „weitere verfügbar“ immer mit dem Zusatz „in einem Spiel, das die jeweilige Funktion unterstützt“.
                Für einen direkten Funktionsvergleich gibt es außerdem unsere <Link href="/dlss-supported-cards" className="text-blue-400 hover:underline">englische Übersicht aller DLSS-Generationen</Link>.
                Diese Seite gibt keine eigenen Schätzungen für deine Bildrate ab.</p>
            </div>
            <SourceNote href={SOURCES.hardware}>NVIDIAs Beschreibung der einzelnen DLSS-Funktionen</SourceNote>
          </section>

          <section id="notebooks" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Gilt die Liste auch für Notebooks und RTX Spark?</h2>
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>NVIDIAs DLSS-5-Start nennt ausdrücklich Desktop- und Laptop-GPUs der RTX-50-Serie.
                Bei der Suche nach deiner Karte solltest du den Zusatz „Laptop“ oder „Notebook“ trotzdem mit angeben.
                Nutze einen Desktop-Test nicht automatisch als Messwert für dein Notebook: Die Aussage „Funktion unterstützt“ und die Frage „wie schnell läuft sie in meinem Gerät?“ gehören getrennt geprüft.
                In der Modellliste bleiben Notebook- und Desktop-Einträge deshalb unterscheidbar.</p>
              <p>RTX Spark ist eine eigene Plattform und wird hier nicht einfach als weiteres RTX-50-Desktopmodell einsortiert.
                NVIDIA bestätigt Neural Rendering auch für RTX Spark. Beim Speicher ist die Unterscheidung wichtig: CPU und GPU teilen sich den Speicher.
                Deshalb steht beim Spark-Eintrag „Gemeinsamer Speicher mit der CPU“ statt einer erfundenen Zahl für separaten Grafikspeicher.
                Wenn du zwei Geräte vergleichst, übernimm diese Angabe nicht ungeprüft in eine Spalte für dedizierten VRAM.</p>
            </div>
            <SourceNote href={SOURCES.launch}>NVIDIAs Freigabe für Desktop- und Laptop-GPUs (Englisch)</SourceNote>
            <SourceNote href="https://www.nvidia.com/en-us/products/rtx-spark/">NVIDIAs RTX-Spark-Spezifikationen (Englisch)</SourceNote>
          </section>

          <section id="aktivieren" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-bold">Grafikkarte bestätigt, aber kein DLSS-5-Schalter?</h2>
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>Prüfe drei Dinge getrennt: die GPU-Freigabe, die Unterstützung durch das konkrete Spiel und die passende Treiber- beziehungsweise Spielversion.
                NVIDIAs Startanleitung für NBA 2K27 beschreibt Neural Rendering als eigene Option im Spiel.
                Ein allgemeiner DLSS-Eintrag in einem anderen Titel ist deshalb noch keine Bestätigung für dieselbe Funktion.
                Suche in offiziellen Patchnotes ausdrücklich nach „DLSS Neural Rendering“ beziehungsweise „3D-Guided Neural Rendering“.</p>
              <p>Halte bei der Fehlersuche fest, welche Karte und welches Spiel du tatsächlich verwendest, bevor du eine allgemeine Anleitung ausprobierst.
                So lässt sich ein fehlender Spiel-Patch von einer nicht unterstützten GPU unterscheiden.
                Für bestätigte Titel führt unsere <Link href="/dlss-5-games" className="text-blue-400 hover:underline">englische Spieleübersicht</Link> die jeweiligen Informationen zusammen;
                die <Link href="/dlss-5-download" className="text-blue-400 hover:underline">englische Einrichtungsübersicht</Link> erläutert den offiziellen Weg.
                Aus einer Ankündigung für ein künftiges Update machen wir dabei keine bereits verfügbare Funktion.</p>
            </div>
            <SourceNote href={SOURCES.launch}>NVIDIAs Start- und Einrichtungsanleitung für NBA 2K27 (Englisch)</SourceNote>
          </section>
        </article>

        <div className="mt-12">
          <h2 className="mb-3 text-2xl font-bold">Alle erfassten Grafikkarten nach Status</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Die Liste verwendet denselben GPU-Datenbestand wie die englische und portugiesische Übersicht.
            Sie ist keine vollständige Aufzählung aller jemals erschienenen Grafikkarten. Speicherangaben beschreiben die erfassten Varianten, keine Mindestanforderung für Neural Rendering.
          </p>
          <StatusSection status="confirmed" />
          <StatusSection status="planned" />
          <StatusSection status="unsupported" />
          <StatusSection status="none" />
        </div>

        <section id="faq" className="mb-10 scroll-mt-6">
          <h2 className="mb-4 text-2xl font-bold">Häufige Fragen zur DLSS-5-Kompatibilität</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="mb-2 font-semibold">{item.question}</h3>
                <p className="leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Die Antworten beziehen sich auf dieselben offiziellen Quellen und den oben angegebenen Prüfstand.</p>
        </section>

        <section id="quellen" className="rounded-lg border border-border p-5 text-sm">
          <h2 className="mb-3 text-xl font-bold">Quellen, Autor und Grenzen dieser Übersicht</h2>
          <p className="mb-3 leading-relaxed text-muted-foreground">
            Autor: <Link href="/about" rel="author" className="text-blue-400 hover:underline">liuyan-wjy</Link>.
            {" "}Letzter Quellenabgleich: <time dateTime="2026-11-02">2. November 2026</time>.
            Dies ist eine unabhängige Übersicht ohne Verbindung zu NVIDIA. Die Statusangaben beschreiben offizielle Funktionsfreigaben; sie sind keine eigene Leistungsprüfung.
            Neue NVIDIA-Veröffentlichungen, Treibernotizen oder Spiel-Patches können die Einordnung ändern.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/editorial-policy" className="text-blue-400 hover:underline">Redaktionelle Grundsätze (Englisch)</Link>
            <Link href="/dlss-5-evidence-tracker" className="text-blue-400 hover:underline">Belege und Änderungen (Englisch)</Link>
            <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">Veröffentlichte Leistungstests (Englisch)</Link>
          </div>
        </section>
      </main>
    </>
  );
}
