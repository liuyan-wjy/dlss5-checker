import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const title = "DLSS 5 on AMD: Official Support, Cloud Access and Mod Status";
const description = "AMD Radeon has no official local DLSS 5 support. Compare eligible GeForce NOW access, experimental community mods and the limits of FSR or XeSS alternatives.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/dlss-5-amd",
    languages: { en: "https://www.dlss5.net/dlss-5-amd", "pt-BR": "https://www.dlss5.net/pt/dlss-5-amd" },
  },
  openGraph: { title, description, type: "article", url: "https://www.dlss5.net/dlss-5-amd" },
  twitter: { card: "summary", title, description },
};

export default function Dlss5AmdPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / AMD support
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Can you use DLSS 5 on AMD?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          AMD Radeon GPUs have no official local DLSS 5 Neural Rendering support as of October 1, 2026.
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
      <ArticleTrustBlock reviewedAt="2026-10-01" />
    </main>
  );
}
