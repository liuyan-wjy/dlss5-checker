import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DLSS 5 System Requirements: What We Know So Far [2026]",
  description:
    "Looking for DLSS 5 system requirements? See the confirmed GPU requirements, what NVIDIA has not confirmed yet, and whether RTX 40, RTX 30, or GTX cards can realistically expect support.",
  alternates: {
    canonical: "/dlss-5-system-requirements",
  },
};

export default function Dlss5SystemRequirementsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the DLSS 5 system requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NVIDIA has only confirmed RTX 50 series support for DLSS 5 Neural Rendering. Exact minimum hardware requirements beyond that have not been fully published yet.",
        },
      },
      {
        "@type": "Question",
        name: "Will RTX 40 cards support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 40 support has been hinted at, but NVIDIA has not officially confirmed DLSS 5 support for RTX 40 GPUs. At the moment they should be treated as possible but unconfirmed.",
        },
      },
      {
        "@type": "Question",
        name: "Can RTX 30 or GTX cards run DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 30 support looks unlikely for DLSS 5 Neural Rendering, and GTX cards do not support DLSS at all because DLSS requires RTX hardware.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>DLSS 5 system requirements</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          DLSS 5 System Requirements: What We Know So Far
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The short version: RTX 50 series is the only confirmed hardware family for
          DLSS 5 Neural Rendering. Everything else still sits in the TBD zone.
        </p>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Confirmed requirement today</h2>
          <p>
            NVIDIA has confirmed <strong>RTX 50 series GPUs</strong> for DLSS 5 Neural
            Rendering. That covers cards such as the RTX 5090, RTX 5080, RTX 5070 Ti,
            and RTX 5070. If you want the safest hardware path for DLSS 5, this is the
            only fully confirmed answer today.
          </p>
          <p>
            What NVIDIA has <strong>not</strong> fully published yet is the complete
            minimum spec sheet beyond architecture. There is still no final public matrix
            that tells us exactly how much VRAM, what driver branch, or what per-game
            implementation limits will matter at launch.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to think about each GPU generation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
              <h3 className="font-semibold text-green-400 mb-2">RTX 50</h3>
              <p className="text-sm">
                Confirmed for DLSS 5. Best fit if your goal is guaranteed compatibility.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">RTX 40</h3>
              <p className="text-sm">
                Possible, but not officially confirmed. Good current DLSS 4 cards, but
                still a wait-and-see story for DLSS 5.
              </p>
            </div>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h3 className="font-semibold text-orange-400 mb-2">RTX 30 / RTX 20</h3>
              <p className="text-sm">
                Likely limited to existing DLSS features such as Super Resolution and Ray
                Reconstruction. Neural Rendering support looks unlikely.
              </p>
            </div>
            <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h3 className="font-semibold text-red-400 mb-2">GTX / non-RTX</h3>
              <p className="text-sm">
                No DLSS support. GTX cards do not meet the baseline hardware requirement
                for any version of DLSS.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">What searchers usually mean by this query</h2>
          <p>
            When people search for <em>DLSS 5 system requirements</em>, they usually are
            not looking for a full PC spec sheet. They want to know one of three things:
            does their current GPU qualify, do they need RTX 50, and should they upgrade now
            or wait for official confirmation.
          </p>
          <p>
            That means the most useful answer is not a fake checklist. It is a clear status
            breakdown by GPU family, plus links to model-specific pages for cards people
            already own.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Recommended next checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/gpu/rtx-5090"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 5090 DLSS 5 support</div>
              <p className="text-sm text-muted-foreground">
                Confirmed path for DLSS 5 Neural Rendering.
              </p>
            </Link>
            <Link
              href="/gpu/rtx-3070"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 3070 DLSS 5 support</div>
              <p className="text-sm text-muted-foreground">
                Useful if you are checking whether RTX 30 can stretch into DLSS 5.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">What are the DLSS 5 system requirements?</h3>
              <p className="text-sm text-foreground/80">
                RTX 50 series is the only officially confirmed hardware family so far. Full
                launch requirements beyond that are still pending from NVIDIA.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Will RTX 40 support DLSS 5?</h3>
              <p className="text-sm text-foreground/80">
                Maybe, but not confirmed. Treat RTX 40 as possible, not guaranteed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Can GTX cards run DLSS 5?</h3>
              <p className="text-sm text-foreground/80">
                No. GTX cards do not support DLSS because DLSS requires RTX hardware.
              </p>
            </div>
          </div>
        </section>

        <div className="border border-border rounded-lg p-5 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want to check a specific card instead of a whole requirement summary?
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            ← Back to GPU Checker
          </Link>
        </div>
      </main>
    </>
  );
}
