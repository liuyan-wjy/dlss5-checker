import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DLSS 5 Guides: Compatibility, Release Status, Dynamic MFG",
  description:
    "Browse DLSS 5 and DLSS 4.5 guides for GPU support, RTX 40 status, release timing, Dynamic MFG, games, and evidence tracking.",
  alternates: { canonical: "/guides" },
};

const guideGroups = [
  {
    title: "Compatibility and requirements",
    description:
      "Use these pages when the main question is whether a GPU is a safe DLSS 5 choice, what can be used today, and which claims still need final NVIDIA launch documentation.",
    links: [
      {
        href: "/dlss-5-supported-cards",
        title: "DLSS 5 supported cards",
        description: "Confirmed, expected, unknown, unlikely, and unsupported GPU groups.",
      },
      {
        href: "/dlss-5-system-requirements",
        title: "DLSS 5 system requirements",
        description: "What NVIDIA has confirmed and what still needs launch documentation.",
      },
      {
        href: "/dlss-5-rtx-40-series",
        title: "Will DLSS 5 be on RTX 40?",
        description: "RTX 4090, 4080, 4070, and 4060 status without overclaiming support.",
      },
    ],
  },
  {
    title: "Release and evidence",
    description:
      "Start here when you need dates, source quality, game lists, and the difference between announced, available, and still unverified claims.",
    links: [
      {
        href: "/dlss-5-release-date",
        title: "DLSS 5 release date",
        description: "Fall 2026 launch window, availability caveats, and proof needed.",
      },
      {
        href: "/dlss-5-evidence-tracker",
        title: "DLSS 5 evidence tracker",
        description: "Claim-by-claim status for hardware, games, dates, and feature splits.",
      },
      {
        href: "/dlss-5-games",
        title: "DLSS 5 games",
        description: "Announced titles, verification checklist, and per-game caveats.",
      },
    ],
  },
  {
    title: "Feature explainers",
    description:
      "These guides separate current DLSS 4.5 features from the future DLSS 5 neural rendering layer, so users do not mix frame generation with visual rendering claims.",
    links: [
      {
        href: "/dlss-5-neural-rendering",
        title: "DLSS 5 Neural Rendering",
        description: "What the visual-quality layer is expected to change.",
      },
      {
        href: "/dlss-4-5-dynamic-mfg-6x",
        title: "DLSS 4.5 Dynamic MFG 6X",
        description: "What is available now for compatible RTX 50 setups.",
      },
      {
        href: "/dlss-frame-generation-vs-multi-frame-generation",
        title: "Frame Generation vs Multi Frame Generation",
        description: "Separate RTX 40 Frame Generation from RTX 50 MFG and Dynamic MFG.",
      },
    ],
  },
  {
    title: "Developer and platform notes",
    description:
      "These pages are for readers comparing engines, AI PC hardware, and platform-level support rather than checking one GPU model.",
    links: [
      {
        href: "/dlss-5-unreal-engine",
        title: "DLSS 5 Unreal Engine status",
        description: "Current DLSS 4.5 plugin support and what remains unknown for DLSS 5.",
      },
      {
        href: "/dlss-5-vs-dlss-4-5",
        title: "DLSS 5 vs DLSS 4.5",
        description: "Neural Rendering versus the current Super Resolution and MFG stack.",
      },
      {
        href: "/ai-pc/nvidia-rtx-spark",
        title: "NVIDIA RTX Spark hub",
        description: "Separate Windows AI PC hardware tracking from DLSS game features.",
      },
    ],
  },
];

const startPaths = [
  {
    title: "If you are buying a GPU",
    href: "/dlss-5-supported-cards",
    copy: "Start with the support table, then check the RTX 40 and system requirement guides before treating any upgrade as final.",
  },
  {
    title: "If you are checking a rumor",
    href: "/dlss-5-evidence-tracker",
    copy: "Use the evidence tracker to see whether the claim is confirmed, expected, unknown, or only inferred from current DLSS behavior.",
  },
  {
    title: "If you are comparing features",
    href: "/dlss-5-vs-dlss-4-5",
    copy: "Read the DLSS 5 vs 4.5 guide to separate Neural Rendering from Super Resolution, Frame Generation, and Dynamic MFG.",
  },
];

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          DLSS 5 Checker
        </Link>
        <span className="mx-2">/</span>
        <span>Guides</span>
      </nav>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-blue-400">Independent DLSS guide index</p>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          DLSS 5 Guides
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          Start here when you need a structured path through DLSS 5 compatibility, release
          timing, current DLSS 4.5 features, and the evidence behind each claim.
        </p>
        <p className="leading-relaxed text-foreground/80">
          This guide index is organized for real decisions rather than keyword browsing.
          DLSS 5 has been announced, but the final launch matrix, per-game settings, and
          generation-by-generation feature limits still need official proof. Use the cards
          below to check the most relevant source first: hardware support if you are
          considering an upgrade, release and evidence pages if you are verifying a claim,
          or feature explainers if you are trying to understand what is available now.
        </p>
      </header>

      <section className="mb-10 rounded-lg border border-border p-5">
        <h2 className="mb-4 text-2xl font-bold">Start here if...</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {startPaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="rounded-lg bg-muted/25 p-4 transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 font-semibold text-blue-400">{path.title}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{path.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-8">
        {guideGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
                >
                  <div className="mb-2 font-semibold">{link.title}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/80">
                    Last checked June 22, 2026
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
