import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const title = "DLSS 5 Download & Setup: Drivers, Games and GPU Requirements";
const description = "Get DLSS 5 through official NVIDIA drivers and supported games. Check GPU, game and driver requirements, then find the Neural Rendering setting.";

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
  openGraph: { title, description, type: "article", url: "https://www.dlss5.net/dlss-5-download" },
  twitter: { card: "summary", title, description },
};

export default function Dlss5DownloadPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / Download and setup
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">How to download and enable DLSS 5</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Get the driver from NVIDIA and the DLSS 5 integration through a supported game.
          For official local use, you currently need an RTX 50 desktop or laptop GPU.
          NBA 2K27 is a verified available title. There is no universal official installer
          that adds Neural Rendering to every game. This is an independent setup guide, not a download host.
        </p>
      </header>

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
          Check the current driver notes for your GPU before installing an older package from a search result.
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
      <ArticleTrustBlock reviewedAt="2026-10-01" />
    </main>
  );
}
