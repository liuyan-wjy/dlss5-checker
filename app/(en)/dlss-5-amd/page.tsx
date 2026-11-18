import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { OG_IMAGE_EN } from "@/lib/og-image";

const title = "DLSS 5 on AMD: Not Supported — FSR 4 vs DLSS 5 & Cloud Option";
const description = "No Radeon GPU runs DLSS 5. Compare DLSS 5 with FSR 4 and Redstone, see what to turn on for RX 9000, 7000 and 6000, and how GeForce NOW or mods fit in.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/dlss-5-amd",
    languages: { en: "https://www.dlss5.net/dlss-5-amd", "pt-BR": "https://www.dlss5.net/pt/dlss-5-amd" },
  },
  openGraph: { images: [OG_IMAGE_EN], title, description, type: "article", url: "https://www.dlss5.net/dlss-5-amd" },
  twitter: { card: "summary", title, description },
};


const REVIEWED = "2026-11-18";
const AMD_REDSTONE = "https://gpuopen.com/learn/amd-fsr-redstone-developers-neural-rendering/";

const compareRows = [
  { aspect: "What it changes", dlss5: "Lighting and materials of the final image", fsr: "Resolution (upscaling), frame rate (frame generation), ray-traced noise (Ray Regeneration)" },
  { aspect: "Runs on", dlss5: "GeForce RTX 50 and RTX Spark; RTX 40 planned", fsr: "ML features: Radeon RX 9000. Older FSR upscaling and frame generation run on most modern GPUs" },
  { aspect: "Effect on frame rate", dlss5: "Costs frames; NVIDIA pairs it with Super Resolution and frame generation", fsr: "Upscaling and frame generation raise frame rate" },
  { aspect: "Where you turn it on", dlss5: "In each supported game's graphics menu", fsr: "In each supported game's graphics menu, or AMD Software for driver-level options" },
  { aspect: "Games", dlss5: "NBA 2K27, Hogwarts Legacy, War Thunder; Where Winds Meet on November 23", fsr: "Hundreds of games support some FSR version; ML features in fewer" },
];

const radeonAdvice = [
  { card: "Radeon RX 9000 (RX 9070 XT, 9070, 9060 XT)", advice: "Use FSR 4 ML upscaling and the Redstone features where a game offers them. These are AMD's closest equivalents to DLSS Super Resolution, Frame Generation and Ray Reconstruction." },
  { card: "Radeon RX 7000 (RX 7900 XTX, 7800 XT, 7700 XT, 7600)", advice: "Use the FSR upscaling and FSR frame generation your games list. Check each game's menu for which FSR version it ships; AMD's ML features target RX 9000." },
  { card: "Radeon RX 6000 and older (RX 6600, 6700 XT, 6800)", advice: "FSR upscaling and frame generation in supported games, or AMD Fluid Motion Frames in the driver for games without built-in frame generation." },
];

const faqItems = [
  {
    question: "Can AMD GPUs run DLSS 5?",
    answer:
      "No. DLSS 5 Neural Rendering officially runs only on NVIDIA GeForce RTX 50 GPUs and RTX Spark laptops, with RTX 40 planned. No Radeon card is supported, and installing an NVIDIA driver does not change that.",
  },
  {
    question: "Is there a DLSS 5 download for AMD?",
    answer:
      "There is no official one. NVIDIA does not publish DLSS 5 for AMD, so any \"DLSS 5 AMD download\" is either a community mod or a fake. Community projects are experimental, untested by us, and can carry malware or anti-cheat risk.",
  },
  {
    question: "What is AMD's alternative to DLSS 5?",
    answer:
      "AMD has no announced Neural Rendering equivalent. Its current machine-learning graphics package is FSR Redstone for Radeon RX 9000, covering FSR 4 upscaling, frame generation and Ray Regeneration, which match DLSS Super Resolution, Frame Generation and Ray Reconstruction rather than DLSS 5.",
  },
  {
    question: "Does a Ryzen CPU stop DLSS 5 from working?",
    answer:
      "No. DLSS 5 depends on the graphics card. A PC with a Ryzen CPU and a GeForce RTX 50 GPU supports DLSS 5 in the same games as an Intel system.",
  },
  {
    question: "How can a Radeon owner see DLSS 5?",
    answer:
      "Use GeForce NOW Ultimate in a region with NVIDIA-operated RTX 5080 servers. The game is rendered in the cloud, so your Radeon card only displays the video stream. NVIDIA confirms it for NBA 2K27 and Hogwarts Legacy.",
  },
];

export default function Dlss5AmdPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / AMD support
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Can you use DLSS 5 on AMD?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          AMD Radeon GPUs have no official local DLSS 5 Neural Rendering support as of November 18, 2026.
          An eligible GeForce NOW session can render it remotely on NVIDIA hardware.
          Community AMD projects also exist, but their experiments are not official compatibility and we have not tested them.
          If your PC has an AMD Ryzen CPU and an RTX 50 GPU, check the GPU: the CPU brand is not the restriction.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Three different ways people mean “on AMD”</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Local, cloud and experimental DLSS 5 access for AMD users</caption>
            <thead className="bg-muted/40"><tr><th scope="col" className="p-4 text-left">Route</th><th scope="col" className="p-4 text-left">Status</th><th scope="col" className="p-4 text-left">What it means</th></tr></thead>
            <tbody>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">Local Radeon</th><td className="p-4">Not officially supported</td><td className="p-4">Installing an NVIDIA driver does not add Radeon support.</td></tr>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">GeForce NOW</th><td className="p-4">Available with conditions</td><td className="p-4">The cloud RTX GPU renders the game; your device receives the stream.</td></tr>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">Community mods</th><td className="p-4">Experimental</td><td className="p-4">Compatibility depends on the project, GPU, game and version.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Check cloud access before buying a membership</h2>
        <p>
          NVIDIA&apos;s <a href="https://blogs.nvidia.com/blog/geforce-now-thursday-september-2026-games-list/" className="text-blue-400 hover:underline">September launch announcement</a> confirms
          NBA 2K27 Neural Rendering for Ultimate members in NVIDIA-operated regions when the session uses an RTX 5080 rig.
          Being able to launch the game on GeForce NOW does not by itself establish that the session supports DLSS 5.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Check your regional operator and membership offer. The <a href="https://www.nvidia.com/en-us/geforce-now/faq/" className="text-blue-400 hover:underline">GeForce NOW FAQ</a> lists NVIDIA service in North America, Europe, Japan and India, with Alliance partners serving other regions.</li>
          <li>Confirm Ultimate and RTX 5080 availability for your location. Alliance partners announce their own rollout; a local paid plan or similar name is not proof of this feature.</li>
          <li>Check that your game and store edition are supported in your region, and that you own the required game. A cloud membership does not automatically include a paid game license.</li>
          <li>Check your device and connection against the <a href="https://www.nvidia.com/en-us/geforce-now/system-reqs/" className="text-blue-400 hover:underline">official streaming requirements</a>, then confirm the session hardware before looking for Neural Rendering in the game menu.</li>
        </ol>
        <p>
          For Brazil or another Alliance-served location, use the operator&apos;s own hardware and feature announcements.
          Do not assume a launch notice for NVIDIA-operated Europe also promises the same access in your region.
          Streaming changes where rendering happens; it does not enable local DLSS on Radeon.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">What the AMD mod demonstrations establish</h2>
        <p>
          Projects such as <a href="https://github.com/TheAutomatic/dlss-5-amd-project" className="text-blue-400 hover:underline">TheAutomatic&apos;s AMD neural-rendering project</a> document
          community work connecting AMD runtimes with modified OptiScaler paths.
          Their release notes are evidence about that project, not a support announcement from NVIDIA or a game publisher.
          We have not reproduced its installation, image quality or performance on our own hardware.
        </p>
        <p>
          Before treating a demonstration as relevant to your PC, match the exact Radeon model, game build,
          graphics API, runtime and mod version. A clip with a different setup cannot establish your frame rate,
          stability or compatibility. Keep an unmodified game backup and follow the project&apos;s own limitations;
          do not assume a modification is permitted in an online game with anti-cheat.
        </p>
        <p>
          We do not offer a universal AMD installer or endorse repackaged downloads.
          The <a href="https://github.com/optiscaler/OptiScaler" className="text-blue-400 hover:underline">upstream OptiScaler repository</a> distinguishes
          its releases from third-party manager applications. A familiar project name on a download button is not sufficient provenance.
        </p>
        <p>Read the <Link href="/dlss-5-mods" className="text-blue-400 hover:underline">community mod overview and safety risks</Link> before treating a demonstration as a compatibility claim.</p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Does AMD have its own answer to DLSS 5?</h2>
        <p>
          Not yet. AMD&apos;s current machine-learning graphics package is{" "}
          <a href="https://gpuopen.com/learn/amd-fsr-redstone-developers-neural-rendering/" className="text-blue-400 hover:underline">FSR Redstone</a>,
          built mainly for Radeon RX 9000 (RDNA 4) cards. It covers ML upscaling (FSR 4), frame generation, and
          FSR Ray Regeneration, which plays a similar role to NVIDIA&apos;s Ray Reconstruction by cleaning up
          ray-traced lighting. AMD has also shown Radiance Caching as a technical preview. None of these is a
          counterpart to DLSS 5 Neural Rendering, which changes the lighting and materials of the final image.
        </p>
        <p>
          Posts in September 2026 claimed AMD is working on a &quot;neural lighting&quot; feature, but AMD has not
          announced or documented one, so treat it as a rumor. For a Radeon owner today, the practical choice is
          FSR 4 or Redstone features in games that support them, and GeForce NOW if you want to see DLSS 5 itself.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">FSR and XeSS solve different questions</h2>
        <p>
          If you want higher frame rates on Radeon, start with the upscaling and frame-generation options
          actually supported by your game and GPU. FSR or an available XeSS path should be evaluated on those terms.
          Their presence does not establish DLSS 5 Neural Rendering support or an equivalent lighting-and-material result.
          Compare the <Link href="/dlss-5-vs-dlss-4-5" className="text-blue-400 hover:underline">separate DLSS feature roles</Link> before choosing a setting.
        </p>
        <p>
          For official local access, consult the <Link href="/dlss-5-supported-cards" className="text-blue-400 hover:underline">supported GPU list</Link> and
          the <Link href="/dlss-5-download" className="text-blue-400 hover:underline">download checklist</Link>.
          For NBA 2K27 on eligible hardware or cloud sessions, use the <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">game settings guide</Link>.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">DLSS 5 vs FSR 4 and FSR Redstone</h2>
        <p className="mb-4 leading-relaxed text-foreground/80">
          Search results often compare &quot;DLSS 5 vs FSR 4&quot; as if they were rival upscalers. They do different jobs.
          FSR 4 and the <a href={AMD_REDSTONE} className="text-blue-400 hover:underline">Redstone package</a> answer DLSS 4.5;
          nothing from AMD answers DLSS 5 yet.
        </p>
        <div className="space-y-3 sm:hidden">
          {compareRows.map((row) => (
            <div key={row.aspect} className="rounded-lg border border-border p-4 text-sm">
              <p className="font-semibold">{row.aspect}</p>
              <p className="mt-2"><span className="text-green-500">DLSS 5:</span> {row.dlss5}</p>
              <p className="mt-1"><span className="text-red-400">FSR 4 / Redstone:</span> {row.fsr}</p>
            </div>
          ))}
        </div>
        <div className="hidden overflow-x-auto rounded-lg border border-border sm:block">
          <table className="w-full text-sm">
            <caption className="sr-only">DLSS 5 compared with AMD FSR 4 and FSR Redstone</caption>
            <thead className="bg-muted/40 text-left">
              <tr>
                <th scope="col" className="p-3"></th>
                <th scope="col" className="p-3">NVIDIA DLSS 5</th>
                <th scope="col" className="p-3">AMD FSR 4 / Redstone</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.aspect} className="border-t border-border align-top">
                  <th scope="row" className="p-3 text-left font-medium">{row.aspect}</th>
                  <td className="p-3">{row.dlss5}</td>
                  <td className="p-3">{row.fsr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">What to turn on with your Radeon card instead</h2>
        <div className="space-y-3">
          {radeonAdvice.map((row) => (
            <div key={row.card} className="rounded-lg border border-border p-4">
              <h3 className="font-semibold">{row.card}</h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">{row.advice}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Feature names and supported cards come from AMD&apos;s developer documentation when we checked; AMD can widen
          support in later drivers. Console players should read{" "}
          <Link href="/dlss-5-ps5" className="text-blue-400 hover:underline">DLSS 5 on PS5 and Xbox</Link>, which also use AMD graphics.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">About &quot;DLSS 5 AMD download&quot; results</h2>
        <p>
          Many searches for DLSS 5 on AMD end in a download button. NVIDIA has never released DLSS 5 for Radeon, so a
          file presented as an official &quot;DLSS 5 for AMD&quot; installer is mislabelled. If you test a community
          project anyway, get it only from the project&apos;s own repository, scan it, keep a backup of the game, and
          never use it in online games with anti-cheat. An installer that asks you to disable antivirus, or bundles
          an &quot;activator&quot;, is a red flag.
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
