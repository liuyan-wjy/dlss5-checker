import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";

export const metadata: Metadata = {
  title: "DLSS 5 Grafikkarten: Welche GPUs werden unterstützt? [2026]",
  description:
    "Deutsche Kurzliste zu DLSS 5 Grafikkarten: RTX 50 bestätigt oder erwartet, RTX 40 unbekannt, RTX 30 unwahrscheinlich, GTX/AMD/Intel ohne NVIDIA DLSS.",
  alternates: {
    canonical: "/de/dlss-5-grafikkarten",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: "https://www.dlss5.net/de/dlss-5-grafikkarten",
    },
  },
  openGraph: {
    title: "DLSS 5 Grafikkarten: Welche GPUs werden unterstützt?",
    description:
      "Deutsche Übersicht zu bestätigten, erwarteten, unbekannten und nicht unterstützten DLSS 5 Grafikkarten.",
    type: "article",
    locale: "de_DE",
    url: "https://www.dlss5.net/de/dlss-5-grafikkarten",
  },
};

const PAGE_URL = "https://www.dlss5.net/de/dlss-5-grafikkarten";

const statusCopy: Record<
  DlssSupport,
  {
    heading: string;
    label: string;
    note: string;
    className: string;
  }
> = {
  confirmed: {
    heading: "Bestätigte Karten",
    label: "Bestätigt",
    note: "Diese RTX 50 Modelle haben aktuell den klarsten öffentlichen DLSS 5 Pfad.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  expected: {
    heading: "Erwartet, aber noch nicht pro Modell final dokumentiert",
    label: "Erwartet",
    note: "Diese RTX 50 Modelle gehören zur passenden Generation, sollten aber gegen die finale NVIDIA Dokumentation geprüft werden.",
    className: "border-lime-500/30 bg-lime-500/5 text-lime-300",
  },
  unknown: {
    heading: "Unbekannt bis zur finalen Launch-Dokumentation",
    label: "Unbekannt",
    note: "RTX 40 Karten unterstützen starke aktuelle DLSS Funktionen, sind aber für DLSS 5 Neural Rendering noch nicht bestätigt.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unlikely: {
    heading: "Unwahrscheinlich für die neue DLSS 5 Ebene",
    label: "Unwahrscheinlich",
    note: "RTX 20 und RTX 30 bleiben für heutiges DLSS nützlich, haben aber nicht den neueren Frame-Generation-Pfad der RTX 40/50 Generationen.",
    className: "border-orange-500/30 bg-orange-500/5 text-orange-300",
  },
  none: {
    heading: "Kein NVIDIA DLSS Support",
    label: "Kein DLSS",
    note: "GTX, AMD und Intel Karten führen NVIDIA DLSS nicht aus. AMD nutzt FSR, Intel nutzt XeSS als Alternative.",
    className: "border-red-500/30 bg-red-500/5 text-red-300",
  },
};

function getCardsByStatus(status: DlssSupport): GPU[] {
  return ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);
}

function getCurrentFeatureText(gpu: GPU): string {
  if (gpu.current_dlss_features.includes("dynamic_mfg_6x")) {
    return "DLSS 4.5 Dynamic MFG, Multi Frame Generation, Super Resolution";
  }

  if (gpu.current_dlss_features.includes("frame_generation")) {
    return "Frame Generation, Super Resolution, Ray Reconstruction";
  }

  if (gpu.current_dlss_features.includes("ray_reconstruction")) {
    return "Super Resolution, Ray Reconstruction, DLAA";
  }

  if (gpu.brand === "AMD") {
    return "AMD FSR als Alternative prüfen";
  }

  if (gpu.brand === "Intel") {
    return "Intel XeSS als Alternative prüfen";
  }

  return "Kein NVIDIA DLSS Support";
}

function StatusSection({ status }: { status: DlssSupport }) {
  const copy = statusCopy[status];
  const cards = getCardsByStatus(status);

  return (
    <section id={`status-${status}`} className="mb-10 scroll-mt-24">
      <div className={`rounded-lg border p-5 mb-4 ${copy.className}`}>
        <h2 className="text-2xl font-bold text-foreground mb-2">{copy.heading}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">{copy.note}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-semibold">Grafikkarte</th>
              <th className="px-4 py-3 text-left font-semibold">Serie</th>
              <th className="px-4 py-3 text-left font-semibold">VRAM</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Aktuelle DLSS Funktionen</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((gpu, index) => (
              <tr
                key={gpu.id}
                className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
              >
                <td className="px-4 py-3 font-medium">{gpu.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.series}</td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-1 text-xs ${copy.className}`}>
                    {copy.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{getCurrentFeatureText(gpu)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Dlss5GrafikkartenPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Welche Grafikkarten unterstützen DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der klarste DLSS 5 Pfad ist RTX 50. RTX 5090, 5080, 5070 Ti und 5070 werden als bestätigt behandelt; RTX 5060 Ti und 5060 als erwartet. RTX 40 ist unbekannt, RTX 30 unwahrscheinlich, GTX/AMD/Intel unterstützen NVIDIA DLSS nicht.",
        },
      },
      {
        "@type": "Question",
        name: "Unterstützt RTX 4070 DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 4070 ist für DLSS 5 Neural Rendering noch nicht bestätigt. Die Karte unterstützt heutige DLSS Funktionen wie Frame Generation, Super Resolution, Ray Reconstruction und DLAA.",
        },
      },
      {
        "@type": "Question",
        name: "Sollte man nur wegen DLSS 5 upgraden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wenn DLSS 5 der einzige Grund ist, ist Warten sicherer. Die finale NVIDIA Support-Matrix, Treiberhinweise und konkrete Spiele-Patches sind noch wichtig.",
        },
      },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DLSS 5 Checker",
        item: "https://www.dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DLSS 5 Grafikkarten",
        item: PAGE_URL,
      },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DLSS 5 Grafikkarten",
    url: PAGE_URL,
    inLanguage: "de",
    dateModified: "2026-06-22",
    isPartOf: {
      "@type": "WebSite",
      name: "DLSS 5 Checker",
      url: "https://www.dlss5.net",
    },
    about: [
      "DLSS 5 Grafikkarten",
      "welche Grafikkarte unterstützt DLSS 5",
      "RTX 50 DLSS 5",
      "RTX 40 DLSS 5 Status",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>DLSS 5 Grafikkarten</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">Zuletzt geprüft am 22. Juni 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Grafikkarten: Welche GPUs werden unterstützt?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kurze Antwort: RTX 50 ist der sicherste DLSS 5 Pfad. RTX 40 bleibt für DLSS 5
            Neural Rendering unbekannt, RTX 30 ist unwahrscheinlich, und GTX, AMD sowie
            Intel Karten unterstützen NVIDIA DLSS nicht.
          </p>
        </header>

        <section
          id="kurzantwort"
          className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold mb-3">Welche Grafikkarte unterstützt DLSS 5?</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            RTX 5090, RTX 5080, RTX 5070 Ti und RTX 5070 sind die klarsten bestätigten
            Modelle in dieser Übersicht. RTX 5060 Ti und RTX 5060 sind erwartet, aber noch
            abhängig von finaler Dokumentation pro Modell. RTX 40 ist nicht bestätigt.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href="#status-confirmed" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 50 bestätigt
            </a>
            <a href="#status-expected" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 50 erwartet
            </a>
            <a href="#status-unknown" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 40 unbekannt
            </a>
            <a href="#status-unlikely" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 30 unwahrscheinlich
            </a>
            <a href="#status-none" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              GTX, AMD, Intel ohne DLSS
            </a>
          </div>
        </section>

        <StatusSection status="confirmed" />
        <StatusSection status="expected" />
        <StatusSection status="unknown" />
        <StatusSection status="unlikely" />
        <StatusSection status="none" />

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Verwandte Seiten</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">English DLSS 5 supported cards list</div>
              <p className="text-sm text-muted-foreground">
                Vollständigere englische Hauptseite mit GPU Detailseiten.
              </p>
            </Link>
            <Link
              href="/dlss-5-rtx-40-series"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 40 Status</div>
              <p className="text-sm text-muted-foreground">
                Warum RTX 4090, 4080, 4070 und 4060 noch unbekannt bleiben.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-quais-placas"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Lista em português</div>
              <p className="text-sm text-muted-foreground">
                Portugiesische Version für Brasilien und Portugal.
              </p>
            </Link>
            <Link
              href="/dlss-5-system-requirements"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">System requirements</div>
              <p className="text-sm text-muted-foreground">
                Unterschied zwischen PC-Anforderungen und GPU-Support.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Häufige Fragen</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">Unterstützt RTX 4070 DLSS 5?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Noch nicht offiziell. RTX 4070 unterstützt heutige DLSS Funktionen, aber
                DLSS 5 Neural Rendering ist für RTX 40 nicht final bestätigt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ist RTX 30 für DLSS 5 geeignet?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                RTX 30 bleibt für Super Resolution und DLAA nützlich, ist für die neue
                DLSS 5 Neural-Rendering-Ebene aber unwahrscheinlich.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Funktioniert DLSS 5 auf AMD oder Intel?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Nein. NVIDIA DLSS läuft nicht auf AMD oder Intel GPUs. AMD-Nutzer sollten
                FSR prüfen, Intel-Nutzer XeSS.
              </p>
            </div>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Quellen und Grenzen</h2>
          <p>
            Quellen:{" "}
            <a
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 Ankündigung
            </a>{" "}
            und{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS Hardware-Tabelle
            </a>
            . Diese Seite ist unabhängig und muss aktualisiert werden, falls NVIDIA die
            finale Support-Matrix vor dem Launch erweitert oder einschränkt.
          </p>
        </section>
      </main>
    </>
  );
}
