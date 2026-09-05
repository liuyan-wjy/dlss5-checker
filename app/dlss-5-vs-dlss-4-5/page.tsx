import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "DLSS 5 vs DLSS 4.5: What Actually Changes?",
  description:
    "Compare DLSS 5 and DLSS 4.5 without mixing up neural rendering, Super Resolution, Multi Frame Generation, hardware support, and release timing.",
  alternates: {
    canonical: "/dlss-5-vs-dlss-4-5",
    languages: {
      en: "https://www.dlss5.net/dlss-5-vs-dlss-4-5",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-vs-dlss-4-5",
    },
  },
  openGraph: {
    title: "DLSS 5 vs DLSS 4.5: What Actually Changes?",
    description:
      "Compare DLSS 5 and DLSS 4.5 without mixing up neural rendering, Super Resolution, Multi Frame Generation, hardware support, and release timing.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-vs-dlss-4-5",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 vs DLSS 4.5: What Actually Changes?",
    description:
      "Compare DLSS 5 and DLSS 4.5 without mixing up neural rendering, Super Resolution, Multi Frame Generation, hardware support, and release timing.",
  },
};

const comparisonRows = [
  {
    angle: "Main job",
    dlss45: "Improve the current DLSS stack: Super Resolution quality and frame generation smoothness.",
    dlss5: "Add a neural rendering layer focused on lighting, materials, and visual fidelity.",
  },
  {
    angle: "Availability",
    dlss45: "Available now through NVIDIA's current DLSS stack in supported games and app paths.",
    dlss5: "Available now in NBA 2K27 on GeForce RTX 50 desktop and laptop GPUs; other games still need their own patch proof.",
  },
  {
    angle: "Hardware signal",
    dlss45: "Its newest frame-generation path is tied to GeForce RTX 50 series GPUs.",
    dlss5: "RTX 50 is the confirmed local family today; RTX 40 support is planned later with no public date.",
  },
  {
    angle: "What players notice",
    dlss45: "Higher frame rates, smoother output, and better upscaling quality where supported.",
    dlss5: "Potentially richer lighting and material response, if the game integration preserves art direction.",
  },
  {
    angle: "Proof needed",
    dlss45: "A supported game, NVIDIA App or driver path, and visible graphics option.",
    dlss5: "A game patch note, driver note, visible settings, and GPU support details.",
  },
];

const misconceptionRows = [
  {
    myth: "Myth: DLSS 5 is just DLSS 4.5 with a bigger number.",
    reality:
      "The naming is close, but the useful split is different: DLSS 4.5 is the current performance and image-quality stack; DLSS 5 adds the neural rendering layer for lighting and materials.",
  },
  {
    myth: "Myth: A game on the DLSS 5 list means every RTX card can use it.",
    reality:
      "Game integration and GPU eligibility are separate. A title can support the feature while only some hardware tiers expose it.",
  },
  {
    myth: "Myth: RTX 4070 or RTX 4080 support is guaranteed because they support DLSS today.",
    reality:
      "They support current DLSS features, and NVIDIA says RTX 40 support is planned later, but it is not live and has no public date.",
  },
];

const faqItems = [
  {
    question: "What is the difference between DLSS 5 and DLSS 4.5?",
    answer:
      "DLSS 4.5 is the current DLSS stack focused on Super Resolution quality and Dynamic Multi Frame Generation. DLSS 5 adds a neural rendering layer focused on visual fidelity, especially lighting and materials.",
  },
  {
    question: "Is DLSS 5 available now?",
    answer:
      "Yes, in the first published local path: NBA 2K27 on GeForce RTX 50 desktop and laptop GPUs with the documented driver and in-game option. Other games still need their own patch notes or visible menu support.",
  },
  {
    question: "Should I upgrade from RTX 40 to RTX 50 for DLSS 5?",
    answer:
      "If DLSS 5 is the only reason, RTX 50 is the current confirmed local path. RTX 40 support is planned later with no public date, so an RTX 40 owner should wait unless they need RTX 50 performance for other reasons.",
  },
];

export default function Dlss5VsDlss45Page() {
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
        name: "DLSS 5 vs DLSS 4.5",
        item: "https://www.dlss5.net/dlss-5-vs-dlss-4-5",
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
          <span>DLSS 5 vs DLSS 4.5</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">Updated September 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 vs DLSS 4.5: What Actually Changes?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The short answer: DLSS 4.5 is the current performance and image-quality stack.
            DLSS 5 is the neural rendering layer now live first in NBA 2K27 on RTX 50. Mixing those two together is
            why so many compatibility answers feel contradictory.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Is DLSS 5 the same as DLSS 4.5?</h2>
          <p className="text-foreground/80 leading-relaxed">
            No. DLSS 4.5 is the current DLSS feature stack for Super Resolution quality and
            Dynamic Multi Frame Generation. DLSS 5 is the Neural Rendering layer
            aimed at visual fidelity, with NBA 2K27 as the first documented local game path.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="text-xl font-bold mb-2">DLSS 4.5 today</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Think of it as the current DLSS branch for better Super Resolution and
              Dynamic Multi Frame Generation. It is the practical feature set users can
              evaluate in supported games now.
            </p>
          </div>
          <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
            <h2 className="text-xl font-bold mb-2">DLSS 5 now</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Think of it as a visual-fidelity layer that tries to improve how lighting and
              materials look. NBA 2K27 has published support; other games need their own proof.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Side-by-side comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <caption className="sr-only">DLSS 4.5 and DLSS 5 comparison</caption>
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Question</th>
                  <th className="px-4 py-3 text-left font-semibold">DLSS 4.5</th>
                  <th className="px-4 py-3 text-left font-semibold">DLSS 5</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.angle}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.angle}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dlss45}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dlss5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Full DLSS generation table</h2>
          <ComparisonTable />
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The table is a feature overview, not a promise that every GPU receives every
            feature. Always combine it with the supported-card page for hardware decisions.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {misconceptionRows.map((row) => (
            <div key={row.myth} className="rounded-lg border border-border p-5">
              <h2 className="font-bold mb-2">{row.myth}</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">{row.reality}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to decide what matters</h2>
          <p>
            If you are comparing GPUs today, DLSS 4.5 and current DLSS support matter more
            because they are the features you can actually use across more games. The newer
            visual layer matters if you have RTX 50 and a supported title such as NBA 2K27,
            but it should not be copied to every announced game until launch notes exist.
          </p>
          <p>
            For RTX 4070, RTX 4080, and RTX 4090 owners, the practical answer is not
            &quot;upgrade immediately.&quot; It is to keep your current DLSS feature set in mind,
            watch for the RTX 40 rollout date, and avoid buying only on a vague support claim.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/dlss-frame-generation-vs-multi-frame-generation"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Frame Generation vs MFG</div>
              <p className="text-sm text-muted-foreground">
                Compare Frame Generation, Multi Frame Generation, Dynamic mode, and 6X.
              </p>
            </Link>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                See which answers are confirmed, planned, unsupported, or still pending.
              </p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Supported cards</div>
              <p className="text-sm text-muted-foreground">
                Compare RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel status.
              </p>
            </Link>
            <Link
              href="/dlss-5-games"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Games tracker</div>
              <p className="text-sm text-muted-foreground">
                Check announced titles and what still needs per-game verification.
              </p>
            </Link>
            <Link
              href="/gpu/rtx-4070"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 4070 status</div>
              <p className="text-sm text-muted-foreground">
                A model-specific answer for one of the most common RTX 40 searches.
              </p>
            </Link>
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
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Sources:{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS technology page
            </a>
            ,{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-4-5-super-resolution-available-now/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 4.5 announcement
            </a>
            , and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 announcement
            </a>
            . DLSS 5 behavior depends on drivers, game patches, settings, and GPU-specific
            support.
          </p>
        </section>
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
