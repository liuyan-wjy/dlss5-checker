import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type GPU } from "@/lib/gpu-search";
import { getGpuPageHref, isEnabledGpuSlug } from "@/lib/gpu-page-config";

export const metadata: Metadata = {
  title: "Will DLSS 5 Be on RTX 40 Series? RTX 4090, 4080, 4070 Status",
  description:
    "See what is confirmed, what is not confirmed, and what RTX 40 cards can already do with DLSS today, including RTX 4090, RTX 4080, RTX 4070, and RTX 4060.",
  alternates: {
    canonical: "/dlss-5-rtx-40-series",
  },
};

const rtx40Cards = ALL_GPUS.filter((gpu) => gpu.series === "RTX 40");

function CardName({ gpu }: { gpu: GPU }) {
  if (isEnabledGpuSlug("en", gpu.id)) {
    return (
      <Link href={getGpuPageHref("en", gpu.id)} className="hover:text-blue-400 hover:underline">
        {gpu.name}
      </Link>
    );
  }

  return <span>{gpu.name}</span>;
}

export default function Dlss5Rtx40SeriesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will DLSS 5 be on RTX 40 series?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NVIDIA has not published a final DLSS 5 support matrix for RTX 40 series cards. RTX 40 cards support current features such as Frame Generation, Super Resolution, Ray Reconstruction, and DLAA, but DLSS 5 Neural Rendering should be treated as unconfirmed.",
        },
      },
      {
        "@type": "Question",
        name: "Does RTX 4070 support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 4070 support for DLSS 5 is unconfirmed. It currently supports DLSS Frame Generation, Super Resolution, Ray Reconstruction, and DLAA.",
        },
      },
      {
        "@type": "Question",
        name: "Should RTX 40 owners upgrade only for DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If DLSS 5 is the only reason to upgrade, it is safer to wait for NVIDIA's final launch support details. RTX 40 cards are still strong for current DLSS features.",
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

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>RTX 40 series</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">Updated April 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Will DLSS 5 Be on RTX 40 Series?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The honest answer is: not confirmed yet. RTX 40 cards are excellent current
            DLSS cards, but the new neural rendering feature has not been officially
            promised for RTX 4090, 4080, 4070, or 4060 models.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h2 className="text-xl font-bold mb-2">What is known</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 supports DLSS Frame Generation, Super Resolution, Ray Reconstruction,
              and DLAA in supported games. NVIDIA&apos;s current public hardware table keeps
              Multi Frame Generation and Dynamic Multi Frame Generation on RTX 50.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-2">What is still open</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 5 Neural Rendering has been announced for a fall 2026 launch, but NVIDIA
              has not released a complete per-generation matrix for older cards. That is why
              this site labels RTX 40 as possible rather than confirmed.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">RTX 40 model status</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Card</th>
                  <th className="px-4 py-3 text-left font-semibold">VRAM</th>
                  <th className="px-4 py-3 text-left font-semibold">Current DLSS support</th>
                  <th className="px-4 py-3 text-left font-semibold">DLSS 5 status</th>
                </tr>
              </thead>
              <tbody>
                {rtx40Cards.map((gpu, index) => (
                  <tr
                    key={gpu.id}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">
                      <CardName gpu={gpu} />
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Frame Generation, Super Resolution, Ray Reconstruction
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-xs text-yellow-300">
                        Possible, not confirmed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">RTX 4070 searchers: what matters</h2>
          <p>
            If you searched for RTX 4070 specifically, the useful split is simple: your card
            already has the main RTX 40 DLSS stack, but it is not in the RTX 50-only group
            for Multi Frame Generation or Dynamic MFG. For the new DLSS 5 visual layer, wait
            for launch documentation before buying or selling hardware around one feature.
          </p>
          <p>
            The same logic applies across the generation. RTX 4090 and RTX 4080 have more raw
            power than RTX 4070, but their official DLSS feature class is still RTX 40, not
            RTX 50.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Upgrade guidance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-1">Keep RTX 40</h3>
              <p className="text-sm text-muted-foreground">
                Good choice if current Frame Generation and image-quality features already
                solve your games.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Wait</h3>
              <p className="text-sm text-muted-foreground">
                Best choice if DLSS 5 is the only reason you are considering a new GPU.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Buy RTX 50</h3>
              <p className="text-sm text-muted-foreground">
                Safest path if confirmed DLSS 5 compatibility matters more than price.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/gpu/rtx-4070"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 4070 status</div>
              <p className="text-sm text-muted-foreground">
                Model-specific answer for the most common RTX 40 query.
              </p>
            </Link>
            <Link
              href="/gpu/rtx-4080"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 4080 status</div>
              <p className="text-sm text-muted-foreground">
                Higher-end RTX 40 card, same confirmation question.
              </p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">All supported cards</div>
              <p className="text-sm text-muted-foreground">
                Compare RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel.
              </p>
            </Link>
            <Link
              href="/dlss-5-system-requirements"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">System requirements</div>
              <p className="text-sm text-muted-foreground">
                See the broader hardware picture beyond one GPU generation.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            This page is based on NVIDIA&apos;s public{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              DLSS hardware table
            </a>{" "}
            and{" "}
            <a
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="text-blue-400 hover:underline"
            >
              DLSS 5 announcement
            </a>
            . Treat the RTX 40 answer as provisional until NVIDIA publishes final launch
            requirements for DLSS 5.
          </p>
        </section>
      </main>
    </>
  );
}
