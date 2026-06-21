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
        <p className="text-lg leading-relaxed text-muted-foreground">
          Start here when you need a structured path through DLSS 5 compatibility, release
          timing, current DLSS 4.5 features, and the evidence behind each claim.
        </p>
      </header>

      <div className="grid gap-8">
        {guideGroups.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 text-2xl font-bold">{group.title}</h2>
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
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
