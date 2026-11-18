import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import VideoEmbed from "@/components/VideoEmbed";
import { OG_IMAGE_EN } from "@/lib/og-image";

const title = "DLSS 5 on PS5, Xbox, Switch 2, Mac & Phones: Can You Use It?";
const description =
  "No console, Mac or phone runs DLSS 5 itself. See why PS5, PS5 Pro, Xbox and Switch 2 can't, what the viral 'DLSS 5 on PS5' videos really are, and how GeForce NOW streams DLSS 5 games to any device.";
const PAGE_URL = "https://www.dlss5.net/dlss-5-ps5";
const REVIEWED = "2026-11-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dlss-5-ps5" },
  openGraph: { images: [OG_IMAGE_EN], title, description, type: "article", url: PAGE_URL },
  twitter: { card: "summary_large_image", title, description },
};

const NVIDIA_LAUNCH = "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_NOVEMBER = "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/";
const GFN_REQS = "https://www.nvidia.com/en-us/geforce-now/system-reqs/";
const NVIDIA_SWITCH2 = "https://blogs.nvidia.com/blog/nintendo-switch-2/";
const TBREAK_PSSR = "https://tbreak.com/ps5-pro-pssr-upgrade-resident-evil-requiem/";
const MUO_PS5 = "https://www.makeuseof.com/dlss-5-already-works-on-ps5-games-but-the-results-arent-very-impressive/";
const WCCF_SWITCH2 = "https://wccftech.com/nvidia-dlss-5-mario-kart-world-future-nintendo-switch-2-emulated/";

type Device = { device: string; gpu: string; local: string; route: string };

const devices: Device[] = [
  { device: "PS5 and PS5 Pro", gpu: "AMD (Sony custom)", local: "No DLSS of any version", route: "None on the console. Play the PC version through GeForce NOW on another device." },
  { device: "Xbox Series X|S", gpu: "AMD (Microsoft custom)", local: "No DLSS of any version", route: "None on the console. Use GeForce NOW on a PC, Mac, phone or TV instead." },
  { device: "Nintendo Switch 2", gpu: "NVIDIA custom processor", local: "DLSS upscaling only, no DLSS 5", route: "None. Neural Rendering is not part of the console's toolset." },
  { device: "Mac (Apple silicon)", gpu: "Apple", local: "No DLSS", route: "GeForce NOW Ultimate app for macOS." },
  { device: "Android / iPhone / iPad", gpu: "Mobile chips", local: "No DLSS", route: "GeForce NOW Ultimate app (Android) or browser (iOS/iPadOS 15.4+)." },
  { device: "Steam Deck, ROG Ally, Legion Go", gpu: "AMD", local: "No DLSS", route: "GeForce NOW Ultimate app; up to 1440p/120 FPS on supported handhelds." },
  { device: "Smart TV, Chromebook", gpu: "Various", local: "No DLSS", route: "GeForce NOW app on supported Samsung/LG TVs, SHIELD TV, ChromeOS." },
  { device: "RTX 50 / RTX Spark PC", gpu: "NVIDIA RTX 50", local: "Yes, in supported games", route: "Turn it on in the game's graphics menu." },
];

const faqItems = [
  {
    question: "Does PS5 have DLSS 5?",
    answer:
      "No. The PS5 and PS5 Pro use AMD graphics, and DLSS of any version only runs on NVIDIA RTX hardware. Sony's own AI upscaler on PS5 Pro is PSSR, which upgraded in 2026 but is an upscaler, not a Neural Rendering lighting model like DLSS 5.",
  },
  {
    question: "Will DLSS 5 come to PS5 or Xbox in the future?",
    answer:
      "Neither Sony, Microsoft nor NVIDIA has announced it, and it would require NVIDIA graphics hardware the consoles do not have. Expect each console maker's own upscaling instead, such as PSSR on PS5 Pro.",
  },
  {
    question: "Does the Nintendo Switch 2 support DLSS 5?",
    answer:
      "No. The Switch 2 has a custom NVIDIA processor with Tensor Cores, and NVIDIA says games can use DLSS upscaling on it. Neither Nintendo nor NVIDIA has announced DLSS 5 Neural Rendering for Switch 2, and the viral Mario clips with DLSS 5 were Switch 2 games emulated on a PC with an RTX 5060 Ti.",
  },
  {
    question: "What are the 'DLSS 5 on PS5' videos on YouTube?",
    answer:
      "They show PS5 games running on a Windows PC, through PC ports or emulators, with community mods injecting a DLSS 5-style effect. The PS5 console itself is not running DLSS 5. These mods are unofficial and carry malware and anti-cheat risks.",
  },
  {
    question: "Can I use DLSS 5 on a Mac, phone or Steam Deck?",
    answer:
      "Not locally, but you can stream it. GeForce NOW Ultimate runs supported games such as NBA 2K27 and Hogwarts Legacy on NVIDIA RTX 5080 cloud servers with Neural Rendering and streams the picture to Macs, Android phones, iPhones, iPads, Steam Deck and other handhelds.",
  },
  {
    question: "Is there a DLSS 5 APK for Android?",
    answer:
      "No. NVIDIA does not offer DLSS 5 as an Android app. The only official NVIDIA app that brings DLSS 5 games to an Android phone is GeForce NOW. Do not install a file advertised as a DLSS 5 APK.",
  },
];

export default function Dlss5Ps5Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "DLSS 5 Checker", item: "https://www.dlss5.net" },
      { "@type": "ListItem", position: 2, name: "DLSS 5 on consoles, Mac and phones", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DLSS 5 on PS5, Xbox, Switch 2, Mac and Phones",
    url: PAGE_URL,
    inLanguage: "en",
    datePublished: REVIEWED,
    dateModified: REVIEWED,
    author: { "@type": "Person", name: "liuyan-wjy", url: "https://www.dlss5.net/about" },
    publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    about: ["DLSS 5 PS5", "DLSS 5 Switch 2", "DLSS 5 Mac", "DLSS 5 Android", "DLSS 5 GeForce NOW"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / Consoles, Mac and phones
        </nav>

        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            Last checked <time dateTime={REVIEWED}>November 18, 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Can You Get DLSS 5 on PS5, Xbox, Switch 2, Mac or a Phone?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Short answer: no console, Mac or phone runs DLSS 5 itself. DLSS 5 Neural Rendering runs on NVIDIA
            RTX 50 GPUs in Windows PC games. You can still <em>play</em> a DLSS 5 game on almost any screen by
            streaming it with GeForce NOW Ultimate, where an NVIDIA server does the rendering.
          </p>
        </header>

        <figure className="mb-10 rounded-lg border border-border p-4 sm:p-5" aria-labelledby="where-caption">
          <figcaption id="where-caption" className="mb-4">
            <span className="block text-lg font-bold">Where DLSS 5 actually runs</span>
            <span className="block text-sm text-muted-foreground">The effect is computed on an RTX 50 GPU, either in your PC or in NVIDIA&apos;s cloud.</span>
          </figcaption>
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-lg border border-green-500/40 bg-green-500/5 p-4">
              <p className="font-semibold">Local: RTX 50 or RTX Spark PC</p>
              <p className="mt-1 text-sm text-foreground/80">Game + driver + your GPU render Neural Rendering on your desk.</p>
            </div>
            <div className="text-center text-sm font-semibold text-muted-foreground" aria-hidden="true">or</div>
            <div className="rounded-lg border border-blue-400/40 bg-blue-400/5 p-4">
              <p className="font-semibold">Cloud: GeForce NOW Ultimate</p>
              <p className="mt-1 text-sm text-foreground/80">An RTX 5080 server renders the game and streams video.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Mac", "Android", "iPhone / iPad", "Steam Deck", "Chromebook", "Smart TV", "Older PC"].map((d) => (
                  <span key={d} className="rounded-full border border-border px-2 py-1">{d}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 rounded-md bg-red-500/5 p-3 text-sm text-foreground/80">
            <strong>Not a route:</strong> PS5, PS5 Pro, Xbox Series X|S and Switch 2 hardware cannot run DLSS 5, and no download changes that.
          </p>
        </figure>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Device by device</h2>
          <div className="space-y-3">
            {devices.map((d) => (
              <div key={d.device} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold">{d.device}</h3>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                  <dt className="text-muted-foreground">Graphics</dt><dd>{d.gpu}</dd>
                  <dt className="text-muted-foreground">DLSS 5 locally</dt><dd>{d.local}</dd>
                  <dt className="text-muted-foreground">How to see it</dt><dd>{d.route}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">PS5 and PS5 Pro: why not, and what Sony offers instead</h2>
          <p>
            DLSS is NVIDIA software that runs on the Tensor Cores of NVIDIA RTX GPUs. The PS5 and PS5 Pro are built
            around AMD graphics, so they cannot run any version of DLSS, from DLSS 2 to DLSS 5. This is a hardware
            limit, not a licensing setting Sony could switch on with an update.
          </p>
          <p>
            Sony has its own AI upscaler for the PS5 Pro, PlayStation Spectral Super Resolution (PSSR). An upgraded
            version arrived with Resident Evil Requiem in February 2026. It came out of Sony&apos;s Project Amethyst
            work with AMD and builds on AMD&apos;s FSR 4, and a system update added an &quot;Enhance PSSR Image
            Quality&quot; option for existing PSSR games (<a href={TBREAK_PSSR} className="text-blue-400 hover:underline">tbreak report</a>).
            PSSR, like DLSS Super Resolution, reconstructs a sharper image from a lower resolution. DLSS 5 does
            something different: it changes lighting and materials, which no console upscaler does today.
          </p>
          <p>
            Several games with DLSS 5 are also on PS5, such as NBA 2K27 and Hogwarts Legacy. The PS5 versions do not
            get the Neural Rendering option; it is part of the PC versions only, and only on RTX 50 hardware.
          </p>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">What the viral &quot;DLSS 5 on PS5&quot; and Switch 2 videos really show</h2>
          <p>
            Searching for DLSS 5 on PS5 brings up videos of Bloodborne or Mario Kart World with dramatic new lighting.
            None of them runs on a console:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>PS5 games:</strong> MakeUseOf&apos;s November 3, 2026 test used a fan-made PC port of Bloodborne
              that runs through the ShadPS4 emulator&apos;s translation layer, then injected the effect with the
              community tool OptiScaler on a Windows PC. Its verdict: the result &quot;homogenizes&quot; the art and
              costs a lot of performance (<a href={MUO_PS5} className="text-blue-400 hover:underline">MakeUseOf</a>).
            </li>
            <li>
              <strong>Switch 2 games:</strong> the Mario Kart World clip covered by Wccftech was the game emulated on a PC
              with an RTX 5060 Ti and a Core i9-13900K, not a Switch 2 (<a href={WCCF_SWITCH2} className="text-blue-400 hover:underline">Wccftech</a>).
            </li>
          </ul>
          <p>
            Emulating console games you do not own a copy of can be illegal, and the mods depend on unofficial or
            modified NVIDIA files. If you are curious anyway, read our{" "}
            <Link href="/dlss-5-mods" className="text-blue-400 hover:underline">DLSS 5 mods and risks guide</Link> first.
          </p>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Nintendo Switch 2: NVIDIA inside, but no DLSS 5</h2>
          <p>
            The Switch 2 is the only current console with NVIDIA graphics. NVIDIA describes a custom processor with
            RT Cores and Tensor Cores and says games use DLSS upscaling to reach higher resolutions
            (<a href={NVIDIA_SWITCH2} className="text-blue-400 hover:underline">NVIDIA blog</a>). That is DLSS Super
            Resolution chosen by each developer. Neural Rendering is a far heavier model that NVIDIA has only shipped
            on RTX 50 desktop and laptop GPUs; neither Nintendo nor NVIDIA has announced it for Switch 2.
          </p>
        </section>

        <VideoEmbed
          id="79D8SVjB3HQ"
          title="DLSS 5 in NBA 2K27 | Inside the Dev Studio"
          channel="NVIDIA GeForce"
          caption="NBA 2K27 is on PS5 and PC, but only the PC version on RTX 50 or GeForce NOW Ultimate has this Neural Rendering option. NVIDIA's video shows what the developers changed."
        />

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">How to play a DLSS 5 game on a Mac, phone or handheld</h2>
          <p>
            NVIDIA confirms DLSS 5 for GeForce NOW Ultimate members &quot;streaming from NVIDIA-operated GeForce RTX
            5080-powered gaming rigs&quot; (<a href={NVIDIA_LAUNCH} className="text-blue-400 hover:underline">launch article</a>), and
            lists Hogwarts Legacy for GeForce NOW Ultimate too (<a href={NVIDIA_NOVEMBER} className="text-blue-400 hover:underline">November update</a>).
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li><strong>Check your region.</strong> RTX 5080 rigs are on NVIDIA-operated servers; partner-run regions announce features separately.</li>
            <li><strong>Get Ultimate, not Free or Performance.</strong> Only the Ultimate tier uses RTX 5080 servers.</li>
            <li><strong>Own the game on PC.</strong> GeForce NOW streams your own Steam or Epic copy; the PS5 version does not count.</li>
            <li>
              <strong>Check your connection.</strong> NVIDIA asks for 25 Mbps for 1080p at 60 FPS, 45 Mbps for 4K at 120 FPS and
              under 80 ms latency to a data center, ideally over Ethernet or 5 GHz Wi-Fi
              (<a href={GFN_REQS} className="text-blue-400 hover:underline">requirements</a>).
            </li>
            <li><strong>Turn it on in the game menu.</strong> The setting is the same as on a local PC; see <Link href="/dlss-5-download#game-settings" className="text-blue-400 hover:underline">where each game puts it</Link>.</li>
          </ol>
          <p>
            Streaming adds some input delay compared with a local PC, and image quality depends on your bandwidth.
            DLSS 5 changes lighting and materials, so a compressed stream on a small phone screen shows less of the
            difference than a large monitor does.
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/dlss-5-amd", t: "DLSS 5 on AMD", d: "Radeon PCs, cloud access and community projects." },
              { href: "/dlss-5-rtx-30-series", t: "DLSS 5 on RTX 30 and RTX 20", d: "What older GeForce cards can still turn on." },
              { href: "/dlss-5-download", t: "DLSS 5 download and setup", d: "Official driver and game updates, and fixes for a missing option." },
              { href: "/dlss-5-games", t: "DLSS 5 games", d: "Which games are live, scheduled or announced." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors">
                <div className="font-semibold mb-1">{l.t}</div>
                <p className="text-sm text-muted-foreground">{l.d}</p>
              </Link>
            ))}
          </div>
        </section>

        <ArticleTrustBlock reviewedAt={REVIEWED} />
      </main>
    </>
  );
}
