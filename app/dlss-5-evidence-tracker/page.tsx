import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Evidence Tracker: Confirmed, Planned, Unsupported [2026]",
  description:
    "Track what is confirmed, planned, unsupported, or not local DLSS for DLSS 5, including RTX 50, RTX 40, NBA 2K27, and DLSS 4.5 differences.",
  alternates: {
    canonical: "/dlss-5-evidence-tracker",
    languages: {
      en: "https://www.dlss5.net/dlss-5-evidence-tracker",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-confirmado",
    },
  },
  openGraph: {
    title: "DLSS 5 Evidence Tracker: Confirmed, Planned, Unsupported [2026]",
    description:
      "Track what is confirmed, planned, unsupported, or not local DLSS for DLSS 5, including RTX 50, RTX 40, NBA 2K27, and DLSS 4.5 differences.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-evidence-tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 Evidence Tracker: Confirmed, Planned, Unsupported [2026]",
    description:
      "Track what is confirmed, planned, unsupported, or not local DLSS for DLSS 5, including RTX 50, RTX 40, NBA 2K27, and DLSS 4.5 differences.",
  },
};

const NVIDIA_DLSS5 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS5_CN =
  "https://www.nvidia.cn/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS_TECH = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";
const NVIDIA_DLSS45 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-super-resolution-available-now/";
const NVIDIA_NBA_DRIVER =
  "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/";
const NVIDIA_RTX40_PLAN =
  "https://www.reddit.com/r/nvidia/comments/1w4bcvp/nvidia_dlss_5_available_september_3rd_dlss/?sort=new";

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
      "Yes. DLSS 5 is available in NBA 2K27 for RTX 50 desktop and laptop GPUs.",
    evidence: "NVIDIA DLSS 5 launch article",
    sourceHref: NVIDIA_DLSS5,
    status: "Confirmed",
    confidence: "High",
    whatWouldChangeIt: "A broader NVIDIA support matrix or another game patch note.",
  },
  {
    question: "What is the release date?",
    currentAnswer:
      "September 3, 2026 at 9 p.m. Pacific time for the first game launch. In Beijing, that is September 4, 2026 at noon.",
    evidence: "NVIDIA China launch timing",
    sourceHref: NVIDIA_DLSS5_CN,
    status: "Confirmed",
    confidence: "High",
    whatWouldChangeIt: "A corrected NVIDIA timestamp or regional launch clarification.",
  },
  {
    question: "Which GPU family is confirmed?",
    currentAnswer:
      "NVIDIA says DLSS 5 in NBA 2K27 supports all GeForce RTX 50 Series desktop and laptop GPUs.",
    evidence: "NVIDIA DLSS 5 launch article",
    sourceHref: NVIDIA_DLSS5,
    status: "Confirmed",
    confidence: "High",
    whatWouldChangeIt: "A revised NVIDIA game note that narrows the supported RTX 50 list.",
  },
  {
    question: "Are RTX 40 cards available for DLSS 5 now?",
    currentAnswer:
      "No. NVIDIA has said RTX 40 support is planned after RTX 50 optimization, but there is no public availability date.",
    evidence: "NVIDIA community update",
    sourceHref: NVIDIA_RTX40_PLAN,
    status: "Planned",
    confidence: "Medium",
    whatWouldChangeIt: "A driver note, launch article, or support table that exposes DLSS 5 on RTX 40.",
  },
  {
    question: "Are RTX 30 cards confirmed?",
    currentAnswer:
      "No. RTX 30 remains useful for Super Resolution, DLAA, and Ray Reconstruction in supported titles, but there is no current official DLSS 5 support.",
    evidence: "NVIDIA DLSS hardware table",
    sourceHref: NVIDIA_DLSS_TECH,
    status: "Unsupported for DLSS 5 today",
    confidence: "Medium",
    whatWouldChangeIt: "A launch document that names RTX 30 cards for the neural rendering feature.",
  },
  {
    question: "Are the named games final launch support?",
    currentAnswer:
      "NBA 2K27 is verified. Other named games still need their own public patch notes, menu settings, and GPU behavior details.",
    evidence: "NVIDIA NBA 2K27 driver note",
    sourceHref: NVIDIA_NBA_DRIVER,
    status: "One verified game; others pending",
    confidence: "High",
    whatWouldChangeIt: "Individual game patch notes confirming the exact mode, date, and supported GPU tiers.",
  },
  {
    question: "Is DLSS 4.5 the same thing as DLSS 5?",
    currentAnswer:
      "No. DLSS 4.5 is the current Super Resolution and Dynamic Multi Frame Generation stack. DLSS 5 is the neural rendering layer focused on visual fidelity.",
    evidence: "NVIDIA DLSS 4.5 announcement and DLSS feature page",
    sourceHref: NVIDIA_DLSS45,
    status: "Different feature generation",
    confidence: "High",
    whatWouldChangeIt: "A future NVIDIA naming or support revision.",
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
      "DLSS 5 launched in NBA 2K27 for RTX 50 desktop and laptop GPUs. NVIDIA describes it as 3D-guided Neural Rendering focused on lighting, materials, and visual fidelity.",
  },
  {
    question: "Is RTX 40 confirmed for DLSS 5?",
    answer:
      "RTX 40 is planned, not live. NVIDIA has not published a public release date or player setup path for RTX 40 DLSS 5 support.",
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
        item: "https://www.dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Evidence Tracker",
        item: "https://www.dlss5.net/dlss-5-evidence-tracker",
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
            Last checked September 5, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Evidence Tracker
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page is the site&apos;s source-of-truth layer. It separates confirmed
            facts, planned support, unsupported hardware, and open questions so readers do
            not have to guess which answer is solid.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Is DLSS 5 confirmed?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Yes. NVIDIA has launched DLSS 5 as a real-time neural rendering feature for
            visual fidelity in NBA 2K27. What still needs tracking is the broader rollout:
            RTX 40 timing, other game patches, and per-game settings.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Best confirmed answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 5 is available in NBA 2K27 for RTX 50 desktop and laptop GPUs with
              NVIDIA&apos;s 616.64 WHQL driver.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Hardware caution</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 50 is confirmed. RTX 40 is planned but not available. RTX 20 and RTX 30
              have no current official DLSS 5 support.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Game caution</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NBA 2K27 is verified. Other named games still need a game update, driver
              note, or visible settings menu before being marked live.
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
            <h2 className="text-xl font-bold mb-3">Unsupported or no DLSS</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Use unsupported when there is no current official DLSS 5 support, and no
              DLSS when the hardware cannot run local DLSS at all.
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
            , and{" "}
            <a href={NVIDIA_NBA_DRIVER} className="text-blue-400 hover:underline">
              NVIDIA&apos;s NBA 2K27 Game Ready Driver note
            </a>
            . It intentionally avoids turning previews, rumors, or upgrade guesses into
            definitive compatibility claims.
          </p>
        </section>
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
