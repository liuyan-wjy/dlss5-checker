import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DLSS 5 Evidence Tracker: Confirmed vs Unknown Facts [2026]",
  description:
    "Track what is confirmed, announced, possible, and still unknown for DLSS 5, including GPU support, games, release timing, and DLSS 4.5 differences.",
  alternates: {
    canonical: "/dlss-5-evidence-tracker",
    languages: {
      en: "https://dlss5.net/dlss-5-evidence-tracker",
      "pt-BR": "https://dlss5.net/pt/dlss-5-confirmado",
    },
  },
};

const NVIDIA_DLSS5 =
  "https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/";
const NVIDIA_DLSS_TECH = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";
const NVIDIA_DLSS45 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-super-resolution-available-now/";

type Confidence = "High" | "Medium" | "Low";

const evidenceRows: {
  question: string;
  currentAnswer: string;
  evidence: string;
  sourceHref: string;
  status: string;
  confidence: Confidence;
  whatWouldChangeIt: string;
}[] = [
  {
    question: "Is DLSS 5 available to players today?",
    currentAnswer:
      "No. NVIDIA has announced the feature, but public game, driver, and settings documentation is still pending.",
    evidence: "NVIDIA DLSS 5 announcement",
    sourceHref: NVIDIA_DLSS5,
    status: "Announced, not generally available",
    confidence: "High",
    whatWouldChangeIt: "A public NVIDIA App, driver, or game patch note that exposes the feature.",
  },
  {
    question: "What is the expected release window?",
    currentAnswer:
      "The safest current wording is Fall 2026. Treat exact dates as unconfirmed until NVIDIA or a game publisher publishes one.",
    evidence: "NVIDIA DLSS 5 announcement",
    sourceHref: NVIDIA_DLSS5,
    status: "Official broad window",
    confidence: "High",
    whatWouldChangeIt: "A dated launch blog, driver release note, or first-party game update.",
  },
  {
    question: "Which GPU family is the safest bet?",
    currentAnswer:
      "RTX 50 is the safest family because current NVIDIA DLSS feature tables put the newest frame-generation features on RTX 50 hardware.",
    evidence: "NVIDIA DLSS technology and hardware table",
    sourceHref: NVIDIA_DLSS_TECH,
    status: "Supported-feature signal",
    confidence: "High",
    whatWouldChangeIt: "A DLSS 5-specific per-GPU support matrix from NVIDIA.",
  },
  {
    question: "Are RTX 40 cards confirmed for DLSS 5?",
    currentAnswer:
      "No. RTX 40 cards remain strong current DLSS cards, but this site keeps them in the possible, not confirmed, bucket for the new neural rendering layer.",
    evidence: "NVIDIA DLSS hardware table",
    sourceHref: NVIDIA_DLSS_TECH,
    status: "Not confirmed",
    confidence: "Medium",
    whatWouldChangeIt: "A public NVIDIA support matrix listing RTX 4090, 4080, 4070, or 4060 for DLSS 5.",
  },
  {
    question: "Are RTX 30 cards confirmed?",
    currentAnswer:
      "No. RTX 30 remains useful for Super Resolution, DLAA, and Ray Reconstruction in supported titles, but the DLSS 5 path is not confirmed.",
    evidence: "NVIDIA DLSS hardware table",
    sourceHref: NVIDIA_DLSS_TECH,
    status: "Unlikely for the new layer",
    confidence: "Medium",
    whatWouldChangeIt: "A launch document that names RTX 30 cards for the neural rendering feature.",
  },
  {
    question: "Are the named games final launch support?",
    currentAnswer:
      "Not necessarily. NVIDIA has named an initial wave of games and partners, but each title still needs its own public patch notes, menu settings, and GPU behavior details.",
    evidence: "NVIDIA DLSS 5 announcement",
    sourceHref: NVIDIA_DLSS5,
    status: "Announced game support",
    confidence: "High",
    whatWouldChangeIt: "Individual game patch notes confirming the exact mode, date, and supported GPU tiers.",
  },
  {
    question: "Is DLSS 4.5 the same thing as DLSS 5?",
    currentAnswer:
      "No. DLSS 4.5 is the current Super Resolution and Dynamic Multi Frame Generation stack. DLSS 5 is the announced neural rendering layer focused on visual fidelity.",
    evidence: "NVIDIA DLSS 4.5 announcement and DLSS feature page",
    sourceHref: NVIDIA_DLSS45,
    status: "Different feature generation",
    confidence: "High",
    whatWouldChangeIt: "NVIDIA changing the product naming before launch.",
  },
];

const relatedPages = [
  {
    href: "/dlss-5-supported-cards",
    title: "Supported cards",
    copy: "Use this when the question is GPU compatibility by model or generation.",
  },
  {
    href: "/dlss-5-games",
    title: "Games tracker",
    copy: "Use this when the question is whether a named game is announced or verified.",
  },
  {
    href: "/dlss-5-vs-dlss-4-5",
    title: "DLSS 5 vs 4.5",
    copy: "Use this to separate the new visual layer from current performance features.",
  },
  {
    href: "/dlss-5-system-requirements",
    title: "System requirements",
    copy: "Use this when the question is minimum PC readiness rather than one card.",
  },
  {
    href: "/ai-pc/nvidia-rtx-spark",
    title: "RTX Spark AI PC hub",
    copy: "Use this for NVIDIA's new Windows AI PC chip rather than DLSS compatibility.",
  },
];

const faqItems = [
  {
    question: "What is confirmed about DLSS 5 right now?",
    answer:
      "The safest confirmed points are that NVIDIA has announced DLSS 5, framed it around real-time neural rendering for visual fidelity, and named a Fall 2026 launch window plus an initial group of game partners and titles.",
  },
  {
    question: "Is RTX 40 confirmed for DLSS 5?",
    answer:
      "No. RTX 40 cards support current DLSS features, but NVIDIA has not published a final DLSS 5 support matrix that confirms RTX 40 for the new neural rendering layer.",
  },
  {
    question: "Why use an evidence tracker for DLSS 5?",
    answer:
      "Many DLSS 5 searches mix confirmed facts, preview footage, current DLSS 4.5 features, and upgrade guesses. The tracker separates each claim by source, confidence, and what would change the answer.",
  },
];

function confidenceClass(confidence: Confidence): string {
  if (confidence === "High") {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  if (confidence === "Medium") {
    return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
  }

  return "border-red-500/30 bg-red-500/10 text-red-300";
}

export default function Dlss5EvidenceTrackerPage() {
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
        item: "https://dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Evidence Tracker",
        item: "https://dlss5.net/dlss-5-evidence-tracker",
      },
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

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>Evidence tracker</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Last checked May 12, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Evidence Tracker
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page is the site&apos;s source-of-truth layer. It separates confirmed
            facts, announced plans, cautious inference, and open questions so readers do
            not have to guess which answer is solid.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Is DLSS 5 confirmed?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Yes, NVIDIA has announced DLSS 5 as a real-time neural rendering feature for
            visual fidelity. What is not fully confirmed yet is the final launch matrix:
            exact game patches, driver requirements, per-GPU support, and visible in-game
            settings still need public documentation.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Best confirmed answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The feature is announced, aimed at visual fidelity, and still waiting on
              public launch implementation details.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Hardware caution</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 50 is the safest buying path. RTX 40 and RTX 30 should not be treated as
              confirmed for the new layer.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Game caution</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A named game is not the same as a public patch. The final proof is a game
              update, driver note, and visible settings menu.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Claim-by-claim status</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Question</th>
                  <th className="px-4 py-3 text-left font-semibold">Current answer</th>
                  <th className="px-4 py-3 text-left font-semibold">Evidence state</th>
                  <th className="px-4 py-3 text-left font-semibold">Confidence</th>
                  <th className="px-4 py-3 text-left font-semibold">What would change it</th>
                </tr>
              </thead>
              <tbody>
                {evidenceRows.map((row, index) => (
                  <tr
                    key={row.question}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.question}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.currentAnswer}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      <div className="mb-1 text-foreground/80">{row.status}</div>
                      <a href={row.sourceHref} className="text-blue-400 hover:underline">
                        {row.evidence}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs ${confidenceClass(
                          row.confidence
                        )}`}
                      >
                        {row.confidence}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.whatWouldChangeIt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-3">Confirmed</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Use this label only when NVIDIA or a game publisher has said the thing
              directly in public release material.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-3">Announced</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Use this for planned game support, partner support, or a release window that
              still needs launch-day patch notes.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-3">Inferred</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Use this only when the public hardware table implies a likely answer. It
              should never be phrased as a guarantee.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Editorial rule for this site</h2>
          <p className="text-foreground/80 leading-relaxed">
            If a reader would need to search again after reading an answer, the page has
            not done its job. Each DLSS 5 answer should say what is known, what is unknown,
            and what public evidence would change the recommendation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Where to go next</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
              >
                <div className="font-semibold mb-1">{page.title}</div>
                <p className="text-sm text-muted-foreground">{page.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
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
          <h2 className="text-xl font-bold text-foreground mb-3">Primary sources</h2>
          <p>
            This tracker uses{" "}
            <a href={NVIDIA_DLSS5} className="text-blue-400 hover:underline">
              NVIDIA&apos;s DLSS 5 announcement
            </a>
            ,{" "}
            <a href={NVIDIA_DLSS_TECH} className="text-blue-400 hover:underline">
              NVIDIA&apos;s DLSS technology page
            </a>
            , and{" "}
            <a href={NVIDIA_DLSS45} className="text-blue-400 hover:underline">
              NVIDIA&apos;s DLSS 4.5 announcement
            </a>
            . It intentionally avoids turning previews, rumors, or upgrade guesses into
            definitive compatibility claims.
          </p>
        </section>
      </main>
    </>
  );
}
