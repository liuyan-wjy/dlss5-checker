import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Release Date: Fall 2026 Launch Status Guide",
  description:
    "See the DLSS 5 release date status, Fall 2026 window, what NVIDIA has confirmed, what DLSS 4.5 features are live now, and what still needs launch proof.",
  alternates: {
    canonical: "/dlss-5-release-date",
  },
};

const NVIDIA_DLSS5_NEWS =
  "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games";
const NVIDIA_DLSS5_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/death-stranding-2-crimson-desert-dlss-4-multi-frame-gen/";
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
    href: NVIDIA_DLSS5_GAMES,
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
    date: "Fall 2026",
    signal: "Public launch window",
    meaning:
      "This is the safest release-date wording until NVIDIA publishes a dated driver, app, or game update.",
    proof: "Official launch window",
    href: NVIDIA_DLSS5_NEWS,
  },
];

const relatedPages = [
  {
    href: "/dlss-5-games",
    title: "Games tracker",
    copy: "Check which titles are announced and which details still need verification.",
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
      "NVIDIA's official wording is Fall 2026. There is no narrower public release date yet, so exact month or day claims should be treated as unconfirmed.",
  },
  {
    question: "Is DLSS 5 available to download now?",
    answer:
      "No. Current downloads and NVIDIA app overrides are for DLSS 4.5 and the existing feature stack. The next generation still needs its launch driver, app support, and game updates.",
  },
  {
    question: "What changed after the announcement?",
    answer:
      "The most important live change is DLSS 4.5 Dynamic Multi Frame Generation and 6X mode becoming available for RTX 50 owners. That is useful context, but it is not the same as the Fall 2026 feature.",
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
            Last checked June 22, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Release Date: Fall 2026 Status
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NVIDIA has confirmed a Fall 2026 launch window, but not a public day-one
            driver, app version, or final game patch list. This page keeps the launch
            window separate from current DLSS 4.5 features that are already live.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The safest date answer is Fall 2026. Anything more precise still needs a
              source from NVIDIA or a named game publisher.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Available now</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 4.5 Dynamic Multi Frame Generation, 6X mode, and the updated Super
              Resolution model are current features, not the new visual-fidelity layer.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Still missing</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Final proof will be a launch driver, visible game settings, release notes,
              and a per-GPU support matrix.
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
            Why the exact launch date is still open
          </h2>
          <p>
            A broad season is useful, but it is not the same as a consumer-ready release.
            For this feature to be usable, players still need a compatible driver or app
            update, games that expose the setting, and documentation that explains GPU
            behavior. Until those pieces are public, a narrower date would be guesswork.
          </p>
          <p>
            The March 31 update matters because it shows NVIDIA is actively moving the
            current stack forward. Dynamic frame generation and the 6X mode answer a
            performance question for RTX 50 owners today. The Fall release is a separate
            visual-fidelity milestone, so the two should not be merged into one answer.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="text-xl font-bold mb-3">What would change this page?</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            The next meaningful update would be one of these: a dated NVIDIA launch post,
            a Game Ready Driver release note, an NVIDIA app version that exposes the
            setting, or a first-party patch note from a named game such as Starfield,
            Resident Evil Requiem, Hogwarts Legacy, or Assassin&apos;s Creed Shadows.
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
        <ArticleTrustBlock />
      </main>
    </>
  );
}
