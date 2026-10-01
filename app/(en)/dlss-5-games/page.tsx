import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Games Tracker: NBA 2K27 Live, Announced Titles, and Verification",
  description:
    "Track DLSS 5 games after launch: NBA 2K27 live support, announced titles still waiting on patches, and how to separate game support from GPU support.",
  alternates: {
    canonical: "/dlss-5-games",
    languages: {
      en: "https://www.dlss5.net/dlss-5-games",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-jogos",
    },
  },
  openGraph: {
    title: "DLSS 5 Games Tracker: NBA 2K27 Live, Announced Titles, and Verification",
    description:
      "Track DLSS 5 games after launch: NBA 2K27 live support, announced titles still waiting on patches, and how to separate game support from GPU support.",
    url: "https://www.dlss5.net/dlss-5-games",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "DLSS 5 Games Tracker: NBA 2K27 Live, Announced Titles, and Verification",
    description:
      "Track DLSS 5 games after launch: NBA 2K27 live support, announced titles still waiting on patches, and how to separate game support from GPU support.",
  },
};

const NVIDIA_ANNOUNCEMENT = "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games";
const NBA_SUPPORT = "https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5";
const NBA_DRIVER = "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/";

const recentlyCheckedGames = ["NBA 2K27", "Starfield", "Resident Evil Requiem", "Assassin's Creed Shadows"];

const announcedGames = [
  {
    title: "NBA 2K27",
    href: "/games/nba-2k27-dlss-5",
    publisherSignal: "2K / Visual Concepts",
    status: "Live on RTX 50",
  },
  {
    title: "AION 2",
    publisherSignal: "NCSOFT",
    status: "Announced by NVIDIA",
  },
  {
    title: "Assassin's Creed Shadows",
    href: "/games/assassins-creed-shadows-dlss-5",
    publisherSignal: "Ubisoft / Vantage Studios",
    status: "Announced; live patch not verified",
  },
  {
    title: "Black State",
    publisherSignal: "Developer support announced",
    status: "Announced by NVIDIA",
  },
  {
    title: "CINDER CITY",
    publisherSignal: "NCSOFT",
    status: "Announced by NVIDIA",
  },
  {
    title: "Delta Force",
    publisherSignal: "Tencent ecosystem",
    status: "Announced by NVIDIA",
  },
  {
    title: "Hogwarts Legacy",
    publisherSignal: "Warner Bros. Games",
    status: "Announced by NVIDIA",
  },
  {
    title: "Justice",
    publisherSignal: "NetEase",
    status: "Announced by NVIDIA",
  },
  {
    title: "NARAKA: BLADEPOINT",
    publisherSignal: "NetEase",
    status: "Announced by NVIDIA",
  },
  {
    title: "NTE: Neverness to Everness",
    publisherSignal: "Hotta Studio",
    status: "Announced by NVIDIA",
  },
  {
    title: "Phantom Blade Zero",
    publisherSignal: "S-GAME",
    status: "Announced by NVIDIA",
  },
  {
    title: "Resident Evil Requiem",
    href: "/games/resident-evil-requiem-dlss-5",
    publisherSignal: "CAPCOM",
    status: "Announced; live patch not verified",
  },
  {
    title: "Sea of Remnants",
    publisherSignal: "Developer support announced",
    status: "Announced by NVIDIA",
  },
  {
    title: "Starfield",
    href: "/games/starfield-dlss-5",
    publisherSignal: "Bethesda Game Studios",
    status: "Announced; live patch not verified",
  },
  {
    title: "The Elder Scrolls IV: Oblivion Remastered",
    publisherSignal: "Bethesda ecosystem",
    status: "Announced by NVIDIA",
  },
  {
    title: "Where Winds Meet",
    publisherSignal: "Developer support announced",
    status: "Announced by NVIDIA",
  },
];

const previewExamples = [
  "NBA 2K27",
  "Resident Evil Requiem",
  "EA SPORTS FC",
  "Starfield",
  "Hogwarts Legacy",
  "NVIDIA Zorah tech demo",
];

const relatedLinks = [
  {
    href: "/dlss-5-download",
    title: "DLSS 5 download and setup",
    description: "Find the official driver and game-update paths before checking the in-game setting.",
  },
  {
    href: "/dlss-4-5-games",
    title: "Current DLSS 4.5 games",
    description: "Separate live and announced 4.5 support from current DLSS 5 game support.",
  },
  {
    href: "/dlss-5-evidence-tracker",
    title: "Evidence tracker",
    description: "See which DLSS 5 claims are confirmed, announced, or still open.",
  },
  {
    href: "/dlss-5-vs-dlss-4-5",
    title: "DLSS 5 vs DLSS 4.5",
    description: "Separate the new visual layer from current performance features.",
  },
  {
    href: "/dlss-5-supported-cards",
    title: "DLSS 5 supported cards",
    description: "Check whether the GPU question is confirmed, planned, unsupported, or unavailable.",
  },
  {
    href: "/dlss-5-system-requirements",
    title: "System requirements",
    description: "Separate official requirements from buying-guide guesswork.",
  },
  {
    href: "/dlss-5-rtx-40-series",
    title: "RTX 40 series status",
    description: "A cautious answer for RTX 4090, 4080, 4070, and 4060 owners.",
  },
  {
    href: "/gpu/rtx-5090",
    title: "RTX 5090 compatibility",
    description: "The safest individual-card page for the confirmed RTX 50 path.",
  },
];

const faqItems = [
  {
    question: "What games support DLSS 5?",
    answer:
      "NBA 2K27 supports DLSS 5 now on GeForce RTX 50 Series desktop and laptop GPUs. NVIDIA has also announced titles including Starfield, Resident Evil Requiem, Assassin's Creed Shadows, Hogwarts Legacy, Phantom Blade Zero, Delta Force, AION 2, and more, but those still need per-game patch evidence before being marked live.",
  },
  {
    question: "Is DLSS 5 available in games now?",
    answer:
      "Yes, in NBA 2K27 on supported RTX 50 desktop and laptop GPUs. Other announced titles should still be treated as announced or pending verification until their own patch notes and settings are public.",
  },
  {
    question: "Does a DLSS 5 game mean every RTX GPU can use it?",
    answer:
      "No. Game support and GPU support are separate. A game can integrate DLSS 5 while only specific RTX GPU families or features are available to a given player.",
  },
];

export default function Dlss5GamesPage() {
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
        name: "DLSS 5 Games",
        item: "https://www.dlss5.net/dlss-5-games",
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
          <span>Games list</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            NBA 2K27 and three announced games checked October 1, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Games Tracker
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DLSS 5 is public now, but that does not make every announced game live. NBA
            2K27 is the first verified player-facing game, while the rest of the list still
            needs game-specific patch notes, driver notes, and visible settings before a
            title should be called supported today.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NBA 2K27 is live with DLSS 5 on RTX 50 desktop and laptop GPUs. Other named
              titles remain announced unless their own patch evidence is public.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Important caveat</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A game being listed does not guarantee every RTX card can use every DLSS
              feature. Hardware support and game integration are separate checks.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Why players should check twice</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A game listing can say DLSS 5 while your GPU, driver, or game build still
              decides whether the option appears for you.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Announced DLSS 5 games so far</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            The table below uses NVIDIA&apos;s announcement as the source of truth. The
            important distinction is evidence level: announced support is useful, but
            verified support requires public game notes or a graphics menu that players can
            actually inspect. We rechecked Starfield, Resident Evil Requiem, and
            Assassin&apos;s Creed Shadows on October 1: their announcements are confirmed,
            but we did not find public DLSS 5 activation instructions in the official sources
            searched. That is not proof that no update exists elsewhere. Other announced
            entries retain their September 5 check. Platform means the DLSS 5 path, not
            every platform on which the base game is sold.
          </p>

          <p className="mb-2 text-sm text-muted-foreground">Swipe horizontally to see platform, driver, and source details. Keyboard users can focus the table and use the arrow keys.</p>
          <div className="overflow-x-auto rounded-lg border border-border" tabIndex={0} role="region" aria-label="DLSS 5 games table, scroll horizontally for details">
            <table className="w-full min-w-[850px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th scope="col" className="sticky left-0 z-10 bg-background px-4 py-3 text-left font-semibold">Game / publisher</th>
                  <th className="px-4 py-3 text-left font-semibold">Evidence level</th>
                  <th className="px-4 py-3 text-left font-semibold">Platform / GPU</th>
                  <th className="px-4 py-3 text-left font-semibold">Patch / driver</th>
                  <th className="px-4 py-3 text-left font-semibold">Official evidence / checked</th>
                </tr>
              </thead>
              <tbody>
                {announcedGames.map((game, index) => (
                  <tr
                    key={game.title}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="sticky left-0 z-10 bg-background px-4 py-3 font-medium">
                      {game.href ? (
                        <Link href={game.href} className="text-blue-400 hover:underline">
                          {game.title}
                        </Link>
                      ) : (
                        game.title
                      )}
                      <p className="mt-1 text-xs font-normal text-muted-foreground">{game.publisherSignal}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs ${
                          game.status === "Live on RTX 50"
                            ? "border-green-500/30 bg-green-500/10 text-green-300"
                            : "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                        }`}
                      >
                        {game.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {game.title === "NBA 2K27" ? "Local PC: RTX 50 desktop/laptop. GeForce NOW has separate tier, region, and rig requirements." : "PC integration announced; final per-game GPU requirements not verified."}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {game.title === "NBA 2K27" ? "Launch driver: 616.64 WHQL. Update through your game store; 2K's setup guide does not specify a required numbered build." : "A public Neural Rendering patch and game-specific driver path have not been verified here."}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      <a href={game.title === "NBA 2K27" ? NBA_SUPPORT : NVIDIA_ANNOUNCEMENT} className="text-blue-400 hover:underline">{game.title === "NBA 2K27" ? "2K setup guide" : "NVIDIA announcement"}</a>
                      {game.title === "NBA 2K27" && <> · <a href={NBA_DRIVER} className="text-blue-400 hover:underline">Driver note</a></>}
                      <p className="mt-1"><time dateTime={recentlyCheckedGames.includes(game.title) ? "2026-10-01" : "2026-09-05"}>{recentlyCheckedGames.includes(game.title) ? "October 1, 2026" : "September 5, 2026"}</time></p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-2xl font-bold mb-3">Release timing</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                The cleanest date answer is now split: NBA 2K27 is available with documented
                RTX 50 support, while most other named titles still need their own public
                updates before this tracker marks them live.
              </p>
              <p>
                For players, the practical release checklist is: a supported game build, a
                compatible NVIDIA driver, the right GPU feature tier, and an in-game setting
                exposed by the developer.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
            <h2 className="text-xl font-bold mb-3">Preview examples</h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NVIDIA has shown or named these titles and demos around the DLSS 5 rollout:
            </p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {previewExamples.map((example) => (
                <li key={example} className="flex gap-2">
                  <span className="text-blue-400">-</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">How this tracker verifies a game</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-1">1. Announcement</h3>
              <p className="text-sm text-muted-foreground">
                NVIDIA or the studio names the game in public material.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">2. Patch notes</h3>
              <p className="text-sm text-muted-foreground">
                The game publisher documents the exact feature in an update.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">3. Driver path</h3>
              <p className="text-sm text-muted-foreground">
                NVIDIA App or driver notes expose the required support path.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">4. Player setting</h3>
              <p className="text-sm text-muted-foreground">
                The graphics menu shows the mode and compatible hardware behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            What DLSS 5 support means in a game
          </h2>
          <p>
            DLSS 5 is not just another frame-rate label. NVIDIA describes it as a real-time
            3D-guided neural rendering layer that uses a game&apos;s frame data to enhance
            lighting and materials while staying anchored to the source scene.
          </p>
          <p>
            That is why developer control matters. NVIDIA says studios can tune intensity,
            color grading, and masks, which should help artists decide where the effect belongs
            instead of applying one global look everywhere.
          </p>
          <p>
            The useful question for each game is not just &quot;is it on the list?&quot; It is
            whether the implementation preserves the game&apos;s art direction, avoids motion
            artifacts, exposes clear settings, and performs well on the GPUs NVIDIA supports
            at launch.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">How to read game support vs GPU support</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-1">Game support</h3>
              <p className="text-sm text-muted-foreground">
                The developer has integrated or plans to integrate the feature into a game.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">GPU support</h3>
              <p className="text-sm text-muted-foreground">
                Your card has the hardware and driver path needed for that feature tier.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Per-game settings</h3>
              <p className="text-sm text-muted-foreground">
                The graphics menu may expose only specific modes depending on the title.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
              >
                <div className="font-semibold mb-1">{link.title}</div>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Link>
            ))}
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
            ,{" "}
            <a
              href="https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/"
              className="text-blue-400 hover:underline"
            >
              NBA 2K27 Game Ready Driver note
            </a>{" "}
            and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS hardware table
            </a>
            . This page avoids treating preview footage as final behavior because drivers,
            game patches, settings, and GPU support can differ by title.
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
            Checking a card before you wait for a specific game patch?
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Back to GPU Checker
          </Link>
        </div>
        <ArticleTrustBlock reviewedAt="2026-10-01" />
      </main>
    </>
  );
}
