import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
  description:
    "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
  alternates: {
    canonical: "/dlss-5-system-requirements",
    languages: {
      en: "https://www.dlss5.net/dlss-5-system-requirements",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-requisitos",
    },
  },
  openGraph: {
    title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
    description:
      "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-system-requirements",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
    description:
      "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
  },
};

const faqItems = [
  {
    question: "What are the DLSS 5 system requirements?",
    answer:
      "For local play today, DLSS 5 Neural Rendering requires a supported game, NVIDIA's 616.64 WHQL or newer compatible driver path for NBA 2K27, and a GeForce RTX 50 desktop or laptop GPU.",
  },
  {
    question: "Will RTX 40 support DLSS 5?",
    answer:
      "RTX 40 support is planned, but it is not available yet and has no public release date. RTX 40 cards still support current DLSS features.",
  },
  {
    question: "Can RTX 30, RTX 20, GTX, AMD, or Intel cards run DLSS 5?",
    answer:
      "RTX 30 and RTX 20 cards have no current official DLSS 5 support. GTX, AMD, and Intel GPUs do not run local DLSS because DLSS requires NVIDIA RTX hardware.",
  },
];

export default function Dlss5SystemRequirementsPage() {
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
          DLSS 5 System Requirements: What You Need Now
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The short version: local DLSS 5 is live in NBA 2K27 on GeForce RTX 50 desktop
          and laptop GPUs with NVIDIA&apos;s 616.64 WHQL driver path. RTX 40 is planned,
          not available yet.
        </p>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Check all three before enabling DLSS 5</h2>
          <ol className="list-decimal pl-5 space-y-4 text-foreground/80 leading-relaxed">
            <li><strong>GPU:</strong> confirm a GeForce RTX 50 desktop or laptop GPU in the NVIDIA App. On a laptop with integrated graphics, check which GPU the game uses. Compare your model with the <Link href="/dlss-5-supported-cards" className="text-blue-400 hover:underline">supported-card matrix</Link>.</li>
            <li><strong>Game:</strong> update NBA 2K27 through your game launcher. An announcement alone does not confirm a playable NR setting; check the <Link href="/dlss-5-games" className="text-blue-400 hover:underline">live and upcoming games list</Link>.</li>
            <li><strong>Driver:</strong> NVIDIA lists 616.64 WHQL for the NBA 2K27 launch. Install a current compatible Game Ready Driver from NVIDIA, then restart if prompted. Use the <Link href="/dlss-5-download" className="text-blue-400 hover:underline">official download and setup guide</Link> for the download routes.</li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Also meet the game publisher&apos;s CPU, RAM, storage, and Windows requirements.
            DLSS 5 eligibility is not a complete PC specification or a guarantee of a target frame rate.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Confirmed requirement today</h2>
          <p>
            NVIDIA has confirmed <strong>RTX 50 family support</strong> for DLSS 5 Neural
            Rendering in NBA 2K27, including desktop and laptop RTX 50 GPUs. For that game,
            NVIDIA points players to the 616.64 WHQL Game Ready Driver and the in-game{" "}
            <strong>Features &gt; Video Settings &gt; DLSS Neural Rendering</strong> option.
          </p>
          <p>
            What still varies is game support. NBA 2K27 is verified; other announced games
            need their own patch notes before they should be treated as live. GeForce NOW
            is also separate from local play because NVIDIA supplies the cloud GPU.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to think about each GPU generation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
              <h3 className="font-semibold text-green-400 mb-2">RTX 50</h3>
              <p className="text-sm">
                Confirmed family for local DLSS 5 in NBA 2K27, including desktop and
                laptop RTX 50 cards.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">RTX 40</h3>
              <p className="text-sm">
                Planned, but not available yet. Good current DLSS cards, but no public
                RTX 40 DLSS 5 date or player setup path.
              </p>
            </div>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h3 className="font-semibold text-orange-400 mb-2">RTX 30 / RTX 20</h3>
              <p className="text-sm">
                No current official DLSS 5 support. They keep existing DLSS features such
                as Super Resolution and Ray Reconstruction where games support them.
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
          <h2 className="text-2xl font-bold text-foreground">Can I use DLSS 5 without an RTX 50 PC?</h2>
          <p>
            GeForce NOW runs the game on a remote GPU. NVIDIA documents DLSS 5 in NBA 2K27
            for Ultimate members using RTX 5080-powered rigs in NVIDIA-operated regions.
            Confirm your region, membership, game availability, and assigned rig before
            subscribing for this feature. Partner-operated services may have different offerings.
          </p>
          <p>
            Your local AMD GPU, older RTX card, or Mac receives the video stream; it does not
            gain local Neural Rendering support. See the <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">AMD and cloud compatibility guide</Link> for this distinction.
          </p>
          <h2 className="text-2xl font-bold text-foreground">All requirements met, but the option is missing?</h2>
          <p>
            Open NBA 2K27&apos;s Main Menu, then Features → Video Settings. Look for
            <strong> DLSS Neural Rendering</strong>, which is separate from Super Resolution
            and Frame Generation. The <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">NBA 2K27 settings and troubleshooting guide</Link> covers missing options and the F9 toggle.
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
                Current features and DLSS 5 limits for RTX 30 owners.
              </p>
            </Link>
            <Link
              href="/dlss-5-rtx-40-series"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Will RTX 40 support DLSS 5?</div>
              <p className="text-sm text-muted-foreground">
                Better page for RTX 4090, 4080, 4070, and 4060 owners.
              </p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">All supported cards</div>
              <p className="text-sm text-muted-foreground">
                Full status table grouped by confirmed, planned, unsupported, and no-DLSS.
              </p>
            </Link>
            <Link
              href="/dlss-5-games"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 games list</div>
              <p className="text-sm text-muted-foreground">
                NBA 2K27 verification, announced titles, and support caveats.
              </p>
            </Link>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                A claim-by-claim source table for what is confirmed, planned, and unsupported.
              </p>
            </Link>
            <Link
              href="/dlss-5-vs-dlss-4-5"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 vs DLSS 4.5</div>
              <p className="text-sm text-muted-foreground">
                Compare image reconstruction, frame generation, and Neural Rendering.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Sources:{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 announcement
            </a>{" "}
            and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS supported hardware
            </a>
            ,{" "}
            <a
              href="https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA&apos;s NBA 2K27 616.64 WHQL driver note
            </a>
            , and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA&apos;s RTX 40 support plan update
            </a>
            ; <a href="https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5" className="text-blue-400 hover:underline">2K&apos;s setup instructions</a>; and <a href="https://blogs.nvidia.com/blog/geforce-now-thursday-september-2026-games-list/" className="text-blue-400 hover:underline">NVIDIA&apos;s GeForce NOW availability notice</a>. Requirements may change with later releases.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold mb-1">{item.question}</h3>
                <p className="text-sm text-foreground/80">{item.answer}</p>
              </div>
            ))}
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
        <ArticleTrustBlock reviewedAt="2026-10-01" />
      </main>
    </>
  );
}
