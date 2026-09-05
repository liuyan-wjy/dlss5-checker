import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";

export const metadata: Metadata = {
  title: "DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant [2026]",
  description:
    "Deutsche Kurzliste zu DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant aber noch nicht verfügbar, RTX 20/30 ohne aktuellen offiziellen DLSS 5 Support.",
  alternates: {
    canonical: "/de/dlss-5-grafikkarten",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: "https://www.dlss5.net/de/dlss-5-grafikkarten",
    },
  },
  openGraph: {
    title: "DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant [2026]",
    description:
      "Deutsche Kurzliste zu DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant aber noch nicht verfügbar, RTX 20/30 ohne aktuellen offiziellen DLSS 5 Support.",
    type: "article",
    locale: "de_DE",
    url: "https://www.dlss5.net/de/dlss-5-grafikkarten",
  },
  twitter: {
    card: "summary",
    title: "DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant [2026]",
    description:
      "Deutsche Kurzliste zu DLSS 5 Grafikkarten: RTX 50 bestätigt, RTX 40 geplant aber noch nicht verfügbar, RTX 20/30 ohne aktuellen offiziellen DLSS 5 Support.",
  },
  robots: {
    index: false,
    follow: true,
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
  planned: {
    heading: "Geplant, aber noch nicht verfügbar",
    label: "Geplant",
    note: "RTX 40 Karten unterstützen starke aktuelle DLSS Funktionen. NVIDIA hat spätere RTX 40 Unterstützung nach RTX 50 Optimierung in Aussicht gestellt, aber ohne öffentliches Datum.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unsupported: {
    heading: "Aktuell kein offizieller DLSS 5 Support",
    label: "Nicht unterstützt",
    note: "RTX 20 und RTX 30 bleiben für heutige DLSS Funktionen nützlich, sind aber in den hier geprüften Quellen nicht für aktuelles DLSS 5 Neural Rendering gelistet.",
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
          <caption className="sr-only">{copy.heading}</caption>
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

const faqItems = [
  {
    question: "Welche Grafikkarten unterstützen DLSS 5?",
    answer:
      "Der aktuelle DLSS 5 Pfad ist RTX 50 für Desktop und Notebook, von RTX 5090 bis RTX 5050. RTX 40 ist geplant, aber noch nicht verfügbar und ohne öffentliches Datum. RTX 20/30 haben aktuell keinen offiziellen DLSS 5 Support; GTX/AMD/Intel unterstützen NVIDIA DLSS nicht.",
  },
  {
    question: "Unterstützt RTX 4070 DLSS 5?",
    answer:
      "RTX 4070 gehört zur RTX 40 Planung, ist aber für DLSS 5 Neural Rendering noch nicht lokal verfügbar. Die Karte unterstützt heutige DLSS Funktionen wie Frame Generation, Super Resolution, Ray Reconstruction und DLAA.",
  },
  {
    question: "Sollte man nur wegen DLSS 5 upgraden?",
    answer:
      "Mit einer RTX 40 kann es sinnvoll sein, auf den angekündigten Support zu warten; einen Termin gibt es noch nicht. Wer DLSS 5 jetzt lokal in NBA 2K27 nutzen möchte, benötigt eine RTX 50. Prüfe vor dem Kauf auch Leistung, Preis und Unterstützung deiner anderen Spiele.",
  },
];

export default function Dlss5GrafikkartenPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
    dateModified: "2026-09-05",
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
          <p className="text-sm font-semibold text-blue-400 mb-3">Zuletzt geprüft am 5. September 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Grafikkarten: Welche GPUs werden unterstützt?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kurze Antwort: RTX 50 Desktop- und Laptop-GPUs sind für DLSS 5 bestätigt.
            RTX 40 ist geplant, aber noch nicht verfügbar und ohne öffentliches Datum.
            RTX 20/30 haben aktuell keinen offiziellen DLSS 5 Support.
          </p>
        </header>

        <section
          id="kurzantwort"
          className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold mb-3">Welche Grafikkarte unterstützt DLSS 5?</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            RTX 5090 bis RTX 5050 sind in dieser Übersicht für Desktop und Notebook
            bestätigt. RTX 40 ist als späterer Plan nach RTX 50 Optimierung eingeordnet,
            aber noch nicht aktiv. RTX 20 und RTX 30 bleiben bei älteren DLSS Funktionen.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href="#status-confirmed" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 50 bestätigt
            </a>
            <a href="#status-planned" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 40 geplant
            </a>
            <a href="#status-unsupported" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 20/30 aktuell nicht unterstützt
            </a>
            <a href="#status-none" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              GTX, AMD, Intel ohne DLSS
            </a>
          </div>
        </section>

        <StatusSection status="confirmed" />
        <StatusSection status="planned" />
        <StatusSection status="unsupported" />
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
                Warum RTX 4090, 4080, 4070 und 4060 geplant, aber noch nicht aktiv sind.
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
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold mb-1">{item.question}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Quellen und Grenzen</h2>
          <p className="mb-3">
            Der aktuelle RTX 50 Support ist in NVIDIAs{" "}
            <a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/" className="text-blue-400 hover:underline">DLSS 5 Veröffentlichung</a>{" "}
            dokumentiert. Die RTX 40 Planung stammt aus dem{" "}
            <a href="https://www.reddit.com/r/nvidia/comments/1w4bcvp/nvidia_dlss_5_available_september_3rd_dlss/?sort=new" className="text-blue-400 hover:underline">offiziellen NVIDIA Community-Update</a>.
          </p>
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
            offizielle Support-Matrix in künftigen Treiber- oder Support-Hinweisen erweitert
            oder einschränkt.
          </p>
        </section>
      </main>
    </>
  );
}
