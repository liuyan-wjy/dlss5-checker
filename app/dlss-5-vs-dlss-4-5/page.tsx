import type { Metadata } from "next";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "DLSS 5 vs DLSS 4.5: What Actually Changes?",
  description:
    "Compare DLSS 5 and DLSS 4.5 without mixing up neural rendering, Super Resolution, Multi Frame Generation, hardware support, and release timing.",
  alternates: {
    canonical: "/dlss-5-vs-dlss-4-5",
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
    dlss5: "Announced for Fall 2026, with public game implementation details still pending.",
  },
  {
    angle: "Hardware signal",
    dlss45: "Its newest frame-generation path is tied to GeForce RTX 50 series GPUs.",
    dlss5: "RTX 50 is the safest confirmed family; older generations need a final support matrix.",
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
    myth: "DLSS 5 is just DLSS 4.5 with a bigger number.",
    reality:
      "The naming is close, but the useful split is different: DLSS 4.5 is the current performance and image-quality stack; DLSS 5 is the announced neural rendering layer.",
  },
  {
    myth: "A game on the DLSS 5 list means every RTX card can use it.",
    reality:
      "Game integration and GPU eligibility are separate. A title can support the feature while only some hardware tiers expose it.",
  },
  {
    myth: "RTX 4070 or RTX 4080 support is guaranteed because they support DLSS today.",
    reality:
      "They support current DLSS features, but NVIDIA has not published final DLSS 5 support details for RTX 40.",
  },
];

export default function Dlss5VsDlss45Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between DLSS 5 and DLSS 4.5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 4.5 is the current DLSS stack focused on Super Resolution quality and Dynamic Multi Frame Generation. DLSS 5 is an announced neural rendering layer focused on visual fidelity, especially lighting and materials.",
        },
      },
      {
        "@type": "Question",
        name: "Is DLSS 5 available now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DLSS 5 has been announced for Fall 2026. DLSS 4.5 and current DLSS features are available today in supported games and app paths.",
        },
      },
      {
        "@type": "Question",
        name: "Should I upgrade from RTX 40 to RTX 50 for DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If DLSS 5 is the only reason, it is safer to wait for NVIDIA's final support matrix and real game patch notes. RTX 50 is the safest current path, but launch behavior is not fully documented yet.",
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
        item: "https://dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DLSS 5 vs DLSS 4.5",
        item: "https://dlss5.net/dlss-5-vs-dlss-4-5",
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
          <p className="text-sm font-semibold text-blue-400 mb-3">Updated May 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 vs DLSS 4.5: What Actually Changes?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The short answer: DLSS 4.5 is the current performance and image-quality stack.
            DLSS 5 is the announced neural rendering layer. Mixing those two together is
            why so many compatibility answers feel contradictory.
          </p>
        </header>

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
            <h2 className="text-xl font-bold mb-2">DLSS 5 next</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Think of it as a visual-fidelity layer that tries to improve how lighting and
              materials look. The launch proof still needs public per-game documentation.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Side-by-side comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
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
            because they are the features you can actually use. The newer visual layer
            matters if you are planning around Fall 2026 games, but it should be treated as
            a forward-looking factor until launch notes exist.
          </p>
          <p>
            For RTX 4070, RTX 4080, and RTX 4090 owners, the practical answer is not
            &quot;upgrade immediately.&quot; It is to keep your current DLSS feature set in mind,
            watch for the final support matrix, and avoid buying only on a preview claim.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                See which answers are confirmed, announced, or still uncertain.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 announcement
            </a>
            . Final DLSS 5 behavior may still depend on drivers, game patches, settings,
            and GPU-specific support.
          </p>
        </section>
      </main>
    </>
  );
}
