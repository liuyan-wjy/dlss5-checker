import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { OG_IMAGE_EN } from "@/lib/og-image";

export const metadata: Metadata = {
  title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
  description:
    "See the DLSS 5 release date, the October faster model, the Hogwarts Legacy November 5 date, RTX 50 support, and RTX 40 planned status.",
  alternates: {
    canonical: "/dlss-5-release-date",
  },
  openGraph: {
    images: [OG_IMAGE_EN],
    title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
    description:
      "See the DLSS 5 release date, the October faster model, the Hogwarts Legacy November 5 date, RTX 50 support, and RTX 40 planned status.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-release-date",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 Release Date: Launched September 2026 Status Guide",
    description:
      "See the DLSS 5 release date, the October faster model, the Hogwarts Legacy November 5 date, RTX 50 support, and RTX 40 planned status.",
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
const NVIDIA_OCTOBER_UPDATE =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-faster-ai-model-hogwarts-legacy-rtx-spark-laptops/";
const TECHPOWERUP_61742 =
  "https://www.techpowerup.com/353425/nvidia-releases-geforce-617-42-whql-game-ready-drivers";

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
  {
    date: "October 6, 2026",
    signal: "Game Ready Driver 617.42",
    meaning:
      "The newest Game Ready Driver we found keeps the NBA 2K27 DLSS 5 path. October is also the last Game Ready month for Windows 10; drivers from November require Windows 11.",
    proof: "617.42 release coverage",
    href: TECHPOWERUP_61742,
  },
  {
    date: "October 16, 2026",
    signal: "Faster DLSS 5 model",
    meaning:
      "NVIDIA's revised Neural Rendering model reached NBA 2K27 for RTX 50 GPUs, RTX Spark laptops, and GeForce NOW. NVIDIA says it halves the GPU cost of the September model. RTX 40 was not included.",
    proof: "NVIDIA October update article",
    href: NVIDIA_OCTOBER_UPDATE,
  },
  {
    date: "October 23, 2026",
    signal: "RTX Remix support",
    meaning:
      "NVIDIA scheduled DLSS 5 for RTX Remix, so modders can apply Neural Rendering to remastered classic games. This is a modding tool, not official support in each original game.",
    proof: "NVIDIA October update article",
    href: NVIDIA_OCTOBER_UPDATE,
  },
  {
    date: "November 5, 2026",
    signal: "Hogwarts Legacy goes live",
    meaning:
      "The second live DLSS 5 game. RTX 50, RTX Spark, and GeForce NOW Ultimate, with driver 621.14. NVIDIA also dated War Thunder (mid-November) and Where Winds Meet (November 23).",
    proof: "NVIDIA November launch article",
    href: "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/",
  },
  {
    date: "November 12, 2026",
    signal: "War Thunder goes live",
    meaning:
      "The third live DLSS 5 game, added with the Eagle's Shadow major update on RTX 50 and RTX Spark. Where Winds Meet is next, on November 23.",
    proof: "NVIDIA War Thunder article",
    href: "https://www.nvidia.com/en-us/geforce/news/war-thunder-dlss-5-3d-guided-neural-rendering-out-now/",
  },
  {
    date: "November 23, 2026",
    signal: "Where Winds Meet (scheduled)",
    meaning: "NVIDIA dates the update November 23; regional reports put it at November 24 outside North America. Not live yet.",
    proof: "NVIDIA November update article",
    href: "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/",
  },
];


const gameDates = [
  { game: "NBA 2K27", href: "/games/nba-2k27-dlss-5", date: "September 3, 2026", status: "Live" },
  { game: "Hogwarts Legacy", href: "/games/hogwarts-legacy-dlss-5", date: "November 5, 2026", status: "Live" },
  { game: "War Thunder", date: "November 12, 2026", status: "Live" },
  { game: "Where Winds Meet", date: "November 23, 2026", status: "Scheduled" },
  { game: "Starfield", date: "No date", status: "Announced" },
  { game: "Resident Evil Requiem", date: "No date", status: "Announced" },
  { game: "Assassin's Creed Shadows", date: "No date", status: "Announced" },
  { game: "The Elder Scrolls IV: Oblivion Remastered", date: "No date", status: "Announced" },
  { game: "AION 2, Phantom Blade Zero, NARAKA: BLADEPOINT, Delta Force and others", date: "No date", status: "Announced" },
];

const gpuDates = [
  { gpu: "GeForce RTX 50 desktop and laptop", date: "September 3, 2026", note: "Available now in every live DLSS 5 game." },
  { gpu: "RTX Spark laptops", date: "October 2026", note: "Listed by NVIDIA from the faster October model onward." },
  { gpu: "GeForce NOW Ultimate (cloud RTX 5080)", date: "September 3, 2026", note: "Confirmed for NBA 2K27 and Hogwarts Legacy." },
  { gpu: "GeForce RTX 40", date: "No date", note: "Planned by NVIDIA; not in any update so far." },
  { gpu: "RTX 30, RTX 20, GTX, AMD, Intel", date: "None announced", note: "No official plan. See the RTX 30 and AMD guides." },
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
      "The player-facing route is an official NVIDIA Game Ready Driver (616.64 WHQL or newer; 617.42 was the newest we found on October 18, 2026) plus a supported game. For NBA 2K27, the option appears under Video Settings > DLSS Neural Rendering and F9 toggles it in gameplay or replay.",
  },
  {
    question: "What changed after the announcement?",
    answer:
      "DLSS 5 moved from announced to available in one verified game. RTX 50 desktop and laptop GPUs are confirmed, RTX 40 is planned for later, and other games still need their own public patch notes.",
  },
  {
    question: "When do more games get DLSS 5?",
    answer:
      "Hogwarts Legacy got DLSS 5 on November 5, 2026 and War Thunder on November 12. Where Winds Meet is next, on November 23. All use the faster October model on RTX 50 GPUs, RTX Spark laptops, and GeForce NOW. Other announced titles have no public date yet.",
  },
  {
    question: "Is there a release date for DLSS 5 on RTX 40?",
    answer:
      "No. As of November 18, 2026, NVIDIA still describes RTX 40 support as planned without a date, and none of its DLSS 5 updates so far, including the November game launches, include RTX 40 GPUs.",
  },
  {
    question: "When does Starfield or Resident Evil Requiem get DLSS 5?",
    answer:
      "Neither has a date. Both were named by NVIDIA in March 2026, but as of November 18, 2026 neither game has shipped a DLSS 5 patch or announced one.",
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
            Last checked November 18, 2026
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
              and RTX Spark laptops, using the faster October model since October 16.
              Hogwarts Legacy joined on November 5 and War Thunder on November 12.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Still missing</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 support is planned but still has no date. Where Winds Meet is due on
              November 23; most other announced games have no date yet.
            </p>
          </div>
        </section>

        <section id="by-game" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">DLSS 5 release date by game</h2>
          <p className="mb-4 text-foreground/80 leading-relaxed">
            Each game gets DLSS 5 in its own patch. A game listed by NVIDIA in March is not live until that patch ships.
          </p>
          <ul className="divide-y divide-border rounded-lg border border-border">
            {gameDates.map((row) => (
              <li key={row.game} className="flex flex-wrap items-center justify-between gap-2 p-3 text-sm">
                <span className="font-medium">
                  {row.href ? <Link href={row.href} className="text-blue-400 hover:underline">{row.game}</Link> : row.game}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-foreground/80">{row.date}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      row.status === "Live"
                        ? "bg-green-500/15 text-green-500"
                        : row.status === "Scheduled"
                          ? "bg-yellow-500/15 text-yellow-500"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {row.status}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Sources and patch notes for every title are on the <Link href="/dlss-5-games" className="text-blue-400 hover:underline">games tracker</Link>.
          </p>
        </section>

        <section id="by-gpu" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">DLSS 5 release date by graphics card</h2>
          <div className="space-y-3">
            {gpuDates.map((row) => (
              <div key={row.gpu} className="rounded-lg border border-border p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{row.gpu}</h3>
                  <span className="text-sm font-medium">{row.date}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Details: <Link href="/dlss-5-rtx-40-series" className="text-blue-400 hover:underline">RTX 40</Link>,{" "}
            <Link href="/dlss-5-rtx-30-series" className="text-blue-400 hover:underline">RTX 30 and RTX 20</Link>,{" "}
            <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">AMD</Link>,{" "}
            <Link href="/dlss-5-ps5" className="text-blue-400 hover:underline">PS5 and other devices</Link>.
          </p>
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
                  <tr key={`${row.date}-${row.signal}`} className="border-t border-border align-top">
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
          <p>
            The October update is the first sign of the rollout pattern. NVIDIA improved
            the model first, shipped it in the one live game, and only then dated the next
            titles. Hogwarts Legacy followed on November 5 and War Thunder on November 12, and
            Where Winds Meet is next, so a scheduled
            date for another game is more likely to come from a similar NVIDIA update than
            from a publisher patch note appearing without warning.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="text-xl font-bold mb-3">What would change this page?</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            The next meaningful updates would be Where Winds Meet going live on
            November 23, RTX 40 availability details, another dated game, or a revised NVIDIA
            support matrix. A rumor, preview video,
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
        <ArticleTrustBlock reviewedAt="2026-11-18" />
      </main>
    </>
  );
}
