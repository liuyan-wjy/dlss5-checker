import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import VideoEmbed from "@/components/VideoEmbed";
import { OG_IMAGE_EN } from "@/lib/og-image";

const title = "DLSS 5 Download & Setup: Drivers, Games and GPU Requirements";
const description = "There is no DLSS 5 installer or APK. How to turn on DLSS 5: driver, game update, where the setting is in each game, and fixes when it is missing or greyed out.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/dlss-5-download",
    languages: {
      en: "https://www.dlss5.net/dlss-5-download",
      "pt-BR": "https://www.dlss5.net/pt/como-ativar-dlss-5",
    },
  },
  openGraph: { images: [OG_IMAGE_EN], title, description, type: "article", url: "https://www.dlss5.net/dlss-5-download" },
  twitter: { card: "summary", title, description },
};


const REVIEWED = "2026-11-18";
const NVIDIA_HOGWARTS = "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/";
const NVIDIA_WAR_THUNDER = "https://www.nvidia.com/en-us/geforce/news/war-thunder-dlss-5-3d-guided-neural-rendering-out-now/";
const NVIDIA_621_24 = "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/";

const gameSettings = [
  {
    game: "NBA 2K27",
    href: "/games/nba-2k27-dlss-5",
    since: "September 3, 2026",
    path: "Features → Video Settings → DLSS Neural Rendering",
    toggle: "F9",
    driver: "616.64 WHQL or newer",
  },
  {
    game: "Hogwarts Legacy",
    href: "/games/hogwarts-legacy-dlss-5",
    since: "November 5, 2026",
    path: "Game Settings → Display Settings → Upscale Type: NVIDIA DLSS → Neural Rendering",
    toggle: "Shift+Alt+B",
    driver: "621.14 WHQL or newer",
  },
  {
    game: "War Thunder",
    since: "November 12, 2026",
    path: "Update to the Eagle's Shadow client, then look for Neural Rendering in the graphics settings",
    toggle: "Not documented",
    driver: "Current Game Ready driver",
  },
  {
    game: "Where Winds Meet",
    since: "November 23, 2026 (November 24 outside North America)",
    path: "Update the game, then turn on Neural Rendering in the graphics settings",
    toggle: "Not documented",
    driver: "621.24 WHQL or newer",
  },
];

const setupSteps = [
  { n: "1", t: "Check the GPU", d: "RTX 50 desktop or laptop, or an RTX Spark laptop." },
  { n: "2", t: "Update the driver", d: "NVIDIA App or nvidia.com. 621.24 WHQL was current on November 18." },
  { n: "3", t: "Update the game", d: "Through Steam, Epic or the store you bought it from." },
  { n: "4", t: "Turn it on in-game", d: "The option is in the game's graphics menu, not in the NVIDIA App." },
];

const troubleshooting = [
  {
    issue: "No Neural Rendering option at all",
    fix: "The game has no live DLSS 5 update, the game has not finished updating, or the PC is not an RTX 50 / RTX Spark system. Check those three before anything else.",
  },
  {
    issue: "Option is greyed out on an RTX 50 PC",
    fix: "In some games Neural Rendering is a sub-option of DLSS: first set the upscaler to NVIDIA DLSS (Hogwarts Legacy calls it Upscale Type). Then update the driver and restart the game.",
  },
  {
    issue: "Greyed out on a gaming laptop",
    fix: "The game may be running on the integrated GPU. In Windows Settings → System → Display → Graphics, set the game to High performance, or switch the laptop to its discrete-GPU mode, then relaunch.",
  },
  {
    issue: "It turned on, but the frame rate dropped",
    fix: "That is expected: Neural Rendering costs GPU time. Keep it on and lower Super Resolution to Balanced or Performance, or enable Frame Generation if your card supports it.",
  },
  {
    issue: "Faces or materials look wrong to you",
    fix: "Toggle it with the game's hotkey (F9 in NBA 2K27, Shift+Alt+B in Hogwarts Legacy) in the same scene. It is optional; turning it off does not affect your other DLSS settings.",
  },
  {
    issue: "You have an RTX 40, RTX 30 or AMD card",
    fix: "No setting will appear on local hardware. RTX 40 is planned with no date. Use GeForce NOW Ultimate to play supported games with DLSS 5 from the cloud.",
  },
];

const faqItems = [
  {
    question: "Is there a DLSS 5 download?",
    answer:
      "There is no separate DLSS 5 installer. You get it by installing a current NVIDIA Game Ready driver and updating a game that has shipped DLSS 5, such as NBA 2K27, Hogwarts Legacy or War Thunder. Any site offering a standalone DLSS 5 download is not NVIDIA.",
  },
  {
    question: "How do I turn on DLSS 5?",
    answer:
      "On an RTX 50 or RTX Spark PC, update the driver and the game, open the game's graphics settings, select NVIDIA DLSS as the upscaler where the game asks for it, and switch on Neural Rendering. The menu name differs per game.",
  },
  {
    question: "Is there a DLSS 5 APK for Android or a version for phones?",
    answer:
      "No. DLSS 5 runs only on NVIDIA RTX 50 GPUs inside Windows PC games. A file called a DLSS 5 APK is not from NVIDIA and should not be installed. On a phone or tablet, the only official way to see DLSS 5 is streaming a supported game through GeForce NOW Ultimate.",
  },
  {
    question: "Can I download DLSS 5 for PS5, Xbox or Mac?",
    answer:
      "No. PS5 and Xbox use AMD graphics, and Macs use Apple graphics, so none of them can run DLSS locally. A Mac can stream a supported game with DLSS 5 through GeForce NOW Ultimate.",
  },
  {
    question: "Do I need the NVIDIA App to use DLSS 5?",
    answer:
      "No. The NVIDIA App is a convenient way to install the driver, but you can also download the driver from nvidia.com. DLSS 5 itself is switched on inside each game, not in the NVIDIA App.",
  },
];

export default function Dlss5DownloadPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to enable DLSS 5",
    step: setupSteps.map((step) => ({ "@type": "HowToStep", name: step.t, text: step.d })),
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / Download and setup
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">How to download and enable DLSS 5</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Get the driver from NVIDIA and the DLSS 5 integration through a supported game.
          For official local use, you currently need an RTX 50 desktop or laptop GPU or an RTX Spark laptop.
          NBA 2K27, Hogwarts Legacy, War Thunder and Where Winds Meet have it now.
          There is no universal official installer that adds Neural Rendering to every game.
          This is an independent setup guide, not a download host.
        </p>
      </header>

      <figure className="mb-10" aria-labelledby="setup-flow-caption">
        <figcaption id="setup-flow-caption" className="mb-3 text-lg font-bold">DLSS 5 setup in four steps</figcaption>
        <ol className="grid gap-3 sm:grid-cols-4">
          {setupSteps.map((step) => (
            <li key={step.n} className="relative rounded-lg border border-border bg-muted/20 p-4">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-black" aria-hidden="true">{step.n}</span>
              <span className="block font-semibold">{step.t}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{step.d}</span>
            </li>
          ))}
        </ol>
      </figure>

      <section id="game-settings" className="mb-10 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-3">Where to turn on DLSS 5 in each game</h2>
        <p className="mb-4 leading-relaxed text-foreground/80">
          Every game names and places the setting differently. These are the live and scheduled games as of November 18, 2026,
          taken from NVIDIA&apos;s <a href={NVIDIA_HOGWARTS} className="text-blue-400 hover:underline">Hogwarts Legacy</a> and{" "}
          <a href={NVIDIA_WAR_THUNDER} className="text-blue-400 hover:underline">War Thunder</a> articles and each publisher&apos;s instructions.
        </p>
        <div className="space-y-3">
          {gameSettings.map((g) => (
            <div key={g.game} className="rounded-lg border border-border p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {g.href ? <Link href={g.href} className="text-blue-400 hover:underline">{g.game}</Link> : g.game}
                </h3>
                <span className="text-xs text-muted-foreground">{g.since}</span>
              </div>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                <dt className="text-muted-foreground">Menu</dt><dd>{g.path}</dd>
                <dt className="text-muted-foreground">Toggle</dt><dd>{g.toggle}</dd>
                <dt className="text-muted-foreground">Driver</dt><dd>{g.driver}</dd>
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          The full list of announced games is on the <Link href="/dlss-5-games" className="text-blue-400 hover:underline">DLSS 5 games tracker</Link>.
        </p>
      </section>

      <VideoEmbed
        id="GPCM-PHjmWw"
        title="Hogwarts Legacy | DLSS 5 Launch Trailer"
        channel="NVIDIA GeForce"
        caption="NVIDIA's launch trailer shows the kind of lighting and material change to look for after you switch Neural Rendering on."
      />

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Use the official download channels</h2>
        <p>
          Open the <a href="https://www.nvidia.com/en-us/software/nvidia-app/" className="text-blue-400 hover:underline">NVIDIA App</a> to
          install the current compatible Game Ready driver, or choose your GPU and operating system on the{" "}
          <a href="https://www.nvidia.com/en-us/drivers/" className="text-blue-400 hover:underline">NVIDIA driver download page</a>.
          Update the game through the store where you own it. A driver update alone does not add an integration the game has not shipped.
        </p>
        <p>
          NVIDIA identified 616.64 WHQL as the NBA 2K27 launch driver in its{" "}
          <a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/" className="text-blue-400 hover:underline">release instructions</a>.
          Treat that number as a launch reference, not a claim that it remains the newest driver.
          Hogwarts Legacy needs 621.14 WHQL, and the newest Game Ready Driver we found on November 18, 2026 is{" "}
          <a href={NVIDIA_621_24} className="text-blue-400 hover:underline">621.24 WHQL</a> (November 11), which prepares PCs for the Where Winds Meet update.
          Check the current driver notes for your GPU before installing an older package from a search result.
        </p>
        <p>
          <strong>Windows 10 users:</strong> NVIDIA says October 2026 brings the last Game Ready
          Driver for Windows 10. From November, new Game Ready and Studio drivers require Windows 11,
          while Windows 10 receives security-only driver updates. DLSS 5 already works with the
          current drivers, but later game fixes and new DLSS 5 game support may need Windows 11.
        </p>
        <p>
          You do not need a separate download for NVIDIA&apos;s faster October DLSS 5 model. NVIDIA
          says it arrived through the NBA 2K27 update on October 16 and is the default for newer
          DLSS 5 games such as Hogwarts Legacy, which got DLSS 5 on November 5. Keep the game and driver updated.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Check three things before troubleshooting</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>GPU:</strong> confirm the exact card or Laptop GPU. RTX 50 is supported; RTX 40 is planned without a published release date. RTX 20/30, GTX, AMD and Intel are outside current official local support. Check the <Link href="/dlss-5-supported-cards" className="text-blue-400 hover:underline">hardware list</Link>.</li>
          <li><strong>Game:</strong> find a released integration, not only an announcement or a mod video. Our <Link href="/dlss-5-games" className="text-blue-400 hover:underline">games list</Link> separates available titles from announced support.</li>
          <li><strong>Driver and game update:</strong> finish both installations, restart if the installer requests it, and relaunch the game. Record the driver version and game build if you need support.</li>
        </ol>
        <p>
          A Ryzen processor does not make a PC incompatible: the graphics card is the relevant device here.
          Conversely, an RTX sticker does not mean every DLSS feature is supported on that generation.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Find the setting inside the game</h2>
        <p>
          In NBA 2K27, the option is named <strong>DLSS Neural Rendering</strong>.
          The <a href="https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5" className="text-blue-400 hover:underline">2K instructions</a> place
          it under Features → Video Settings. Super Resolution, Frame Generation and Reflex have separate controls.
          For the complete menu route, F9 toggle and missing-option checks, use our{" "}
          <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">NBA 2K27 setup guide</Link>.
        </p>
        <p>
          If the option is absent or greyed out, start with the three checks above.
          Finding a Super Resolution dropdown does not establish Neural Rendering support.
          Avoid replacing game DLLs just to make a missing official menu appear.
        </p>
        <p>
          Compare the same scene with Neural Rendering on and off while keeping resolution and other DLSS settings fixed.
          Choose the balance you prefer; 2K explicitly allows disabling the feature when its performance cost affects play.
          We have not run a hardware benchmark for this guide.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">What about older GPUs, cloud play and mods?</h2>
        <p>
          The <a href="https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/" className="text-blue-400 hover:underline">NVIDIA FAQ</a> describes
          a future RTX 40 expansion. A download cannot turn that plan into current official support.
          Community injectors and DLL replacements are separate, experimental paths; we have not tested them and do not host their binaries.
        </p>
        <p>
          A compatible GeForce NOW session can provide cloud access without a local RTX 50.
          It depends on Ultimate membership, a supported game and an RTX 5080 cloud rig; region and operator availability matter.
          Our <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">AMD and cloud-access guide</Link> explains those conditions.
          For the difference between Neural Rendering and the 4.5 performance features, read{" "}
          <Link href="/dlss-5-vs-dlss-4-5" className="text-blue-400 hover:underline">DLSS 5 vs DLSS 4.5</Link>.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Claims to be careful about</h2>
        <p>
          Searches for a DLSS 5 download return a mix of official pages, video guides, and tools
          that use the DLSS 5 name. These are the claims we see most often, and how they compare
          with NVIDIA&apos;s documentation:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>&quot;Swap the DLSS DLL to unlock DLSS 5.&quot;</strong> Neural Rendering needs
            the game&apos;s own integration and a menu option the developer exposes. Replacing a
            DLL in a game without that integration does not add the setting, and files from
            unofficial download sites are a security risk.
          </li>
          <li>
            <strong>&quot;Works on RTX 20, 30, and 40 cards.&quot;</strong> Some third-party
            optimizer and overlay tools list older RTX cards next to the DLSS 5 name. That refers
            to their own processing, not to NVIDIA&apos;s Neural Rendering. NVIDIA&apos;s official
            local support is RTX 50 and RTX Spark; RTX 40 is planned without a date.
          </li>
          <li>
            <strong>&quot;DLSS 5 runs at 250+ FPS.&quot;</strong> NVIDIA&apos;s headline numbers
            include 6X Multi Frame Generation. With frame generation off, independent tests of the
            launch model measured roughly half the frame rate or less with Neural Rendering on. See the{" "}
            <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">
              published test summary
            </Link>
            .
          </li>
          <li>
            <strong>&quot;Update your driver and DLSS 5 appears in every game.&quot;</strong> The
            driver is only one of three requirements. As of November 18, 2026, NBA 2K27,
            Hogwarts Legacy and War Thunder are the only live games.
          </li>
        </ul>
        <p>
          If the option is greyed out on a supported RTX 50 PC, the most common causes reported in
          video guides and forums match the three checks above: an outdated driver, a game update
          that has not finished, or a laptop running the game on its integrated GPU. Fix those in
          that order before reinstalling anything.
        </p>
      </section>
      <section id="troubleshooting" className="mb-10 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-3">DLSS 5 not showing or greyed out? Fixes by symptom</h2>
        <div className="space-y-3">
          {troubleshooting.map((t) => (
            <details key={t.issue} className="group rounded-lg border border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-semibold hover:bg-muted/30 [&::-webkit-details-marker]:hidden">
                <span>{t.issue}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-foreground/80">{t.fix}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="other-devices" className="mb-10 scroll-mt-24 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">DLSS 5 on Android, PS5, Mac or as an APK?</h2>
        <p>
          A large share of DLSS 5 download searches come from phones, and some ask for an APK. There is no DLSS 5
          app for Android or iPhone, and no version for PS5, Xbox or Mac: DLSS runs on NVIDIA RTX GPUs inside PC games.
          Treat any DLSS 5 APK, &quot;mobile DLSS 5&quot; or console installer as unofficial at best and malware at worst.
        </p>
        <p>
          What does work on those devices is streaming. GeForce NOW Ultimate runs supported games on cloud RTX 5080
          servers and sends the picture to a phone, tablet, Mac, Chromebook, TV or handheld. Our{" "}
          <Link href="/dlss-5-ps5" className="text-blue-400 hover:underline">DLSS 5 on PS5, Mac and phones guide</Link> explains
          each device and the limits.
        </p>
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
      <ArticleTrustBlock reviewedAt={REVIEWED} />
    </main>
    </>
  );
}
