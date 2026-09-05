import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DLSS 5 Guides: NBA 2K27, Games, Compatibility, Ray Reconstruction",
  description:
    "Browse DLSS 5 and DLSS 4.5 guides for NBA 2K27, game support, GPUs, release status, Ray Reconstruction, Dynamic MFG, RTX Spark, and evidence tracking.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "DLSS 5 Guides: NBA 2K27, Games, Compatibility, Ray Reconstruction",
    description:
      "Browse DLSS 5 and DLSS 4.5 guides for NBA 2K27, game support, GPUs, release status, Ray Reconstruction, Dynamic MFG, RTX Spark, and evidence tracking.",
    url: "https://www.dlss5.net/guides",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "DLSS 5 Guides: NBA 2K27, Games, Compatibility, Ray Reconstruction",
    description:
      "Browse DLSS 5 and DLSS 4.5 guides for NBA 2K27, game support, GPUs, release status, Ray Reconstruction, Dynamic MFG, RTX Spark, and evidence tracking.",
  },
};

const guideGroups = [
  {
    title: "Compatibility and requirements",
    description:
      "Use these pages when the main question is whether a GPU is a safe DLSS 5 choice, what can be used today, and which claims still need final NVIDIA launch documentation.",
    links: [
      {
        href: "/dlss-supported-cards",
        title: "All DLSS supported cards",
        description: "Compare Super Resolution, Ray Reconstruction, Frame Generation, and MFG by RTX generation.",
      },
      {
        href: "/dlss-4-5-supported-cards",
        title: "DLSS 4.5 supported cards",
        description: "Check the exact DLSS 4.5 features available on RTX 20, 30, 40, and 50.",
      },
      {
        href: "/dlss-5-supported-cards",
        title: "DLSS 5 supported cards",
        description: "Confirmed, planned, unsupported, and no-DLSS GPU groups.",
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
        description: "Launch status, rollout dates, availability caveats, and proof needed.",
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
        description: "What 3D-guided rendering means and how game data controls the output.",
      },
      {
        href: "/dlss-4-5-ray-reconstruction",
        title: "DLSS 4.5 Ray Reconstruction",
        description: "August release, all-RTX support, 27 announced games, and setup.",
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
    title: "Game-specific DLSS 5 guides",
    description:
      "Use these pages for one game's confirmed announcement, current rendering features, visual test areas, update evidence, and player-focused settings advice.",
    links: [
      {
        href: "/games/resident-evil-requiem-dlss-5",
        title: "Resident Evil Requiem DLSS 5",
        description: "Path tracing, Ray Reconstruction, Neural Rendering, and player checks.",
      },
      {
        href: "/games/nba-2k27-dlss-5",
        title: "NBA 2K27 DLSS 5",
        description: "Driver 616.64, DLSS Neural Rendering, F9, RTX 50 support, and RTX 40 status.",
      },
      {
        href: "/games/starfield-dlss-5",
        title: "Starfield DLSS 5",
        description: "Update status, feature differences, safe downloads, and test scenes.",
      },
      {
        href: "/games/assassins-creed-shadows-dlss-5",
        title: "Assassin's Creed Shadows DLSS 5",
        description: "Support status, foliage and weather tests, and settings guidance.",
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
      {
        href: "/ai-pc/nvidia-rtx-spark-vs-dgx-spark",
        title: "RTX Spark vs DGX Spark",
        description: "Windows AI PC versus a dedicated desktop AI development system.",
      },
    ],
  },
];

const startPaths = [
  {
    title: "If you are buying a GPU",
    href: "/dlss-supported-cards",
    copy: "Start with the current feature matrix, then check DLSS 4.5 or DLSS 5 status before treating any upgrade as final.",
  },
  {
    title: "If you are checking a rumor",
    href: "/dlss-5-evidence-tracker",
    copy: "Use the evidence tracker to see whether the claim is confirmed, planned, unsupported, or only inferred from current DLSS behavior.",
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
          DLSS 5 has launched first in NBA 2K27, while many announced games still need
          their own patch evidence and generation-by-generation feature limits. Use the cards
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
                    Last checked September 5, 2026
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
