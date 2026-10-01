import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
  description:
    "See the DLSS 5 release date, NBA 2K27 launch status, RTX 50 support, RTX 40 planned support, and what still needs per-game proof.",
  alternates: {
    canonical: "/dlss-5-release-date",
  },
  openGraph: {
    title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
    description:
      "See the DLSS 5 release date, NBA 2K27 launch status, RTX 50 support, RTX 40 planned support, and what still needs per-game proof.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-release-date",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
    description:
      "See the DLSS 5 release date, NBA 2K27 launch status, RTX 50 support, RTX 40 planned support, and what still needs per-game proof.",
  },
};

const NVIDIA_DLSS5_NEWS =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS5_CN =
  "https://www.nvidia.cn/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS5_DRIVER =
  "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/";
const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const NVIDIA_DLSS_DEVELOPER = "https://developer.nvidia.com/rtx/dlss";

const timelineRows = [
  {
    date: "March 16, 2026",
    signal: "NVIDIA announcement",
    meaning:
      "The company announced the feature at GTC and described it as a real-time neural rendering model for visual fidelity.",
    proof: "Official NVIDIA newsroom release",
    href: NVIDIA_DLSS5_NEWS,
  },
  {
    date: "March 17, 2026",
    signal: "Game and partner list",
    meaning:
      "NVIDIA named the first wave of publishers, developers, and games, but those titles still need final patch notes.",
    proof: "NVIDIA GeForce article",
    href: NVIDIA_DLSS5_NEWS,
  },
  {
    date: "March 31, 2026",
    signal: "DLSS 4.5 update went live",
    meaning:
      "Dynamic Multi Frame Generation and 6X mode became available through the NVIDIA app for the current DLSS stack.",
    proof: "NVIDIA app update article",
    href: NVIDIA_DLSS45_NOW,
  },
  {
    date: "May 2026",
    signal: "Developer package updated",
    meaning:
      "NVIDIA lists updated DLSS 4.5 plugins for Unreal Engine, which helps current integrations but is not the next-generation launch.",
    proof: "NVIDIA Developer DLSS page",
    href: NVIDIA_DLSS_DEVELOPER,
  },
  {
    date: "September 3, 2026",
    signal: "DLSS 5 player launch",
    meaning:
      "DLSS 5 became available in NBA 2K27 for RTX 50 desktop and laptop GPUs at 9 p.m. Pacific time, which is September 4 at noon in Beijing.",
    proof: "NVIDIA China launch timing",
    href: NVIDIA_DLSS5_CN,
  },
  {
    date: "September 3, 2026",
    signal: "Game Ready Driver",
    meaning:
      "NVIDIA published the 616.64 WHQL Game Ready Driver note for NBA 2K27. The F9 toggle is documented in NVIDIA's main DLSS 5 launch article, not this driver note.",
    proof: "Official driver note",
    href: NVIDIA_DLSS5_DRIVER,
  },
];

const relatedPages = [
  {
    href: "/dlss-5-games",
    title: "Games tracker",
    copy: "Check NBA 2K27 as verified and keep other titles separate until their patch notes appear.",
  },
  {
    href: "/games/nba-2k27-dlss-5",
    title: "NBA 2K27 DLSS 5 guide",
    copy: "See the driver, menu path, F9 toggle, RTX 40 boundary, and cloud notes.",
  },
  {
    href: "/dlss-5-neural-rendering",
    title: "Neural rendering explainer",
    copy: "Understand what the new visual layer is expected to do in games.",
  },
  {
    href: "/dlss-4-5-dynamic-mfg-6x",
    title: "DLSS 4.5 Dynamic MFG 6X",
    copy: "See what is already available today before the next generation arrives.",
  },
  {
    href: "/dlss-5-system-requirements",
    title: "System requirements",
    copy: "Separate release timing from GPU and driver requirements.",
  },
  {
    href: "/ai-pc/nvidia-rtx-spark-release-date",
    title: "RTX Spark release date",
    copy: "Track NVIDIA's fall 2026 Windows AI PC availability window.",
  },
];

const faqItems = [
  {
    question: "What is the DLSS 5 release date?",
    answer:
      "DLSS 5 launched for NBA 2K27 on September 3, 2026 at 9 p.m. Pacific time. In Beijing, that is September 4, 2026 at noon.",
  },
  {
    question: "Is DLSS 5 available to download now?",
    answer:
      "The player-facing route is NVIDIA's 616.64 WHQL Game Ready Driver plus a supported game. For NBA 2K27, the option appears under Video Settings > DLSS Neural Rendering and F9 toggles it in gameplay or replay.",
  },
  {
    question: "What changed after the announcement?",
    answer:
      "DLSS 5 moved from announced to available in one verified game. RTX 50 desktop and laptop GPUs are confirmed, RTX 40 is planned for later, and other games still need their own public patch notes.",
  },
];

export default function Dlss5ReleaseDatePage() {
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
        name: "Release Date",
        item: "https://www.dlss5.net/dlss-5-release-date",
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
          <span>Release date</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Last checked September 5, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Release Date: September 2026 Launch Status
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NVIDIA moved DLSS 5 from an announced Fall 2026 window to a verified player
            launch in NBA 2K27. This page keeps that launch separate from other announced
            games that still need their own public patch notes.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 5 launched for NBA 2K27 on September 3, 2026 Pacific time, or
              September 4, 2026 at noon in Beijing.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Available now</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NBA 2K27 exposes DLSS Neural Rendering for RTX 50 desktop and laptop GPUs
              with NVIDIA&apos;s 616.64 WHQL Game Ready Driver.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Still missing</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 support is planned but not available. Other games remain announced
              or pending until their own patch notes name DLSS 5 settings.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Release timeline and evidence</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Date</th>
                  <th className="p-3 font-semibold">Signal</th>
                  <th className="p-3 font-semibold">What it means</th>
                  <th className="p-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row) => (
                  <tr key={row.date} className="border-t border-border align-top">
                    <td className="p-3 whitespace-nowrap font-medium">{row.date}</td>
                    <td className="p-3">{row.signal}</td>
                    <td className="p-3 text-foreground/80 leading-relaxed">{row.meaning}</td>
                    <td className="p-3">
                      <a
                        href={row.href}
                        className="text-blue-400 hover:underline"
                        rel="noreferrer"
                      >
                        {row.proof}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            Why the launch answer still needs context
          </h2>
          <p>
            The broad Fall 2026 window is now historical context, not the current answer.
            The current answer is narrower because NVIDIA has published a launch article,
            a Game Ready Driver note, and one named game path: NBA 2K27.
          </p>
          <p>
            That does not mean every announced DLSS 5 game is already updated. Use
            game-by-game proof: NBA 2K27 is verified; other titles need their own publisher
            or NVIDIA patch notes before you expect the setting to appear.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="text-xl font-bold mb-3">What would change this page?</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            The next meaningful update would be RTX 40 availability details, another
            game patch note, or a revised NVIDIA support matrix. A rumor, preview video,
            or DLL download is not enough.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
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
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
