import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { OG_IMAGE_EN } from "@/lib/og-image";

const title = "DLSS 5 Mods on RTX 40, RTX 30 and AMD: What Works and the Risks";
const description = "Unofficial tools like DLSS 5 Swapper and OptiScaler forks run Neural Rendering outside RTX 50. What they do, what NVIDIA supports, and the ban and malware risks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dlss-5-mods" },
  openGraph: { images: [OG_IMAGE_EN], title, description, type: "article", url: "https://www.dlss5.net/dlss-5-mods" },
  twitter: { card: "summary", title, description },
};

const faqs = [
  {
    question: "Does a mod make RTX 30 or RTX 40 officially supported?",
    answer: "No. Community demonstrations do not change NVIDIA's support list. RTX 40 remains planned without a public date, and RTX 20 and RTX 30 have no current official DLSS 5 support.",
  },
  {
    question: "Does DLSS 5 Manager guarantee that every detected game works?",
    answer: "No. Finding a game library is not a compatibility test. Results depend on the game's rendering path, the tool, runtime, driver and model versions; an experimental AMD mode is not universal Radeon support.",
  },
  {
    question: "Can I use these mods in an online game?",
    answer: "Our safety rule is no online use. Anti-cheat policies vary, and neither a successful launch nor another user's experience proves permission. This page does not provide a way to bypass protection.",
  },
  {
    question: "Is a clean antivirus result enough to trust a DLL?",
    answer: "No. A scan is one check, not proof of origin, permission or safety. Keep antivirus enabled and do not treat a familiar filename, screenshot or project name as authentication.",
  },
  {
    question: "Has DLSS 5 Checker tested or recommended these tools?",
    answer: "No. We reviewed published sources, not executable files or game installations. We host no NVIDIA DLLs or model weights and provide no mod downloads or installation instructions.",
  },
];

export default function Dlss5ModsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / Community mods
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">DLSS 5 mods: what they are and what they risk</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A community demonstration answers a different question from an official support list.
          This guide separates reported experiments from supported access, with the risks first in any decision.
          Sources checked October 31, 2026. We have not installed, tested or endorsed these tools.
        </p>
      </header>

      <section id="quick-answer" className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Quick answer: official support and community claims</h2>
        <h3 className="text-xl font-semibold text-foreground">Running is not the same as supported</h3>
        <p>
          NVIDIA lists RTX 50 GPUs, RTX Spark laptops and eligible GeForce NOW sessions for current DLSS 5 Neural Rendering.
          Check its <a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-faster-ai-model-hogwarts-legacy-rtx-spark-laptops/" className="text-blue-400 hover:underline">October support update</a>,
          <a href="https://www.nvidia.com/en-us/geforce/technologies/dlss/" className="text-blue-400 hover:underline">official hardware table</a> and
          the game&apos;s supported configuration. RTX 40 remains planned, without a public release date.
          News reports describe unofficial paths on RTX 20–40 and some AMD cards; they do not establish support for every model.
        </p>
        <p>
          A tool recognizing your GPU or finding your game is only a starting claim.
          Our checker continues to show official status, not a per-card promise that a mod works.
          None of these experiments is an NVIDIA-supported route for older RTX or Radeon hardware.
        </p>
      </section>

      <section id="comparison" className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Official and unofficial routes compared</h2>
        <h3 className="text-xl font-semibold text-foreground">Check the entire chain</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Official support versus experimental community routes</caption>
            <thead className="bg-muted/40"><tr>
              <th scope="col" className="p-4 text-left">Supported GPU</th>
              <th scope="col" className="p-4 text-left">Source</th>
              <th scope="col" className="p-4 text-left">Signature</th>
              <th scope="col" className="p-4 text-left">Game coverage</th>
              <th scope="col" className="p-4 text-left">Risk</th>
            </tr></thead>
            <tbody>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">RTX 50 / RTX Spark; eligible cloud rigs</th><td className="p-4">NVIDIA and game publisher</td><td className="p-4">Use official packages; verify publisher</td><td className="p-4">Announced, released integrations</td><td className="p-4">Normal software and performance limitations</td></tr>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">RTX 20–40 and some AMD: community claims</th><td className="p-4">Independent tools and modified runtimes</td><td className="p-4">Not verified here; modified DLLs may be unsigned</td><td className="p-4">Version-dependent experiments</td><td className="p-4">Malware, terms, anti-cheat, crashes</td></tr>
            </tbody>
          </table>
        </div>
        <p>The comparison is a provenance checklist, not a certification of any file or a claim of equivalent image quality.</p>
      </section>

      <section id="tools" className="mb-10 space-y-6 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">What the common tools do</h2>
        <article id="tool-swapper" className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">DLSS 5 Swapper, Feeder and ReShade</h3>
          <p>
            <a href="https://www.tweaktown.com/news/113398/new-dlss-5-swapper-tool-can-mod-dlss-5-into-games-that-dont-support-dlss-at-all/index.html" className="text-blue-400 hover:underline">TweakTown reports</a> a
            Swapper route using DLSS5-Feeder and ReShade to supply input to Neural Rendering in games without native DLSS.
            The mechanism is a community bridge between game output and the neural runtime; it still depends on the required runtime files and compatible graphics path.
            The report is evidence of an experiment, not universal game coverage or permission to redistribute NVIDIA files.
          </p>
        </article>
        <article id="tool-optiscaler" className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">OptiScaler community forks</h3>
          <p>
            These branches redirect a game&apos;s existing upscaling path through community middleware to an experimental Neural Rendering runtime.
            They depend on the fork, compatible game inputs and runtime version; upstream OptiScaler and a third-party fork are different projects.
            <a href="https://www.pcgameshardware.de/Deep-Learning-Super-Sampling-Software-277618/News/Optiscaler-DLSSNR-PreSR-increases-Performance-up-to-90-Percent-1553386/" className="text-blue-400 hover:underline">PCGH&apos;s PreSR coverage</a> describes
            one performance experiment. Its headline is not a frame-rate forecast for your GPU, game or settings.
          </p>
        </article>
        <article id="tool-manager" className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">DLSS 5 Manager</h3>
          <p>
            Manager automates several community routes rather than adding official support.
            <a href="https://www.pcguide.com/news/dlss-5-manager-adds-support-for-rdna-4-graphics-cards-with-new-amd-mode-in-latest-update/" className="text-blue-400 hover:underline">PC Guide</a> describes
            its DLSS, ReShade and Streamline integration and an experimental RDNA 4 mode; those underlying components remain dependencies.
            <a href="https://www.pcgamer.com/hardware/i-applied-dlss-5-to-my-miku-hatsune-game-of-choice-and-i-have-some-regrets/" className="text-blue-400 hover:underline">PC Gamer&apos;s RTX 4070 Super experiment</a> used
            Live Flow and found substantial gameplay and visual compromises. Automation does not validate every installed component.
          </p>
        </article>
        <article id="tool-desktop" className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Whole-desktop tools and other wrappers</h3>
          <p>
            <a href="https://www.pcgamer.com/hardware/you-can-now-apply-dlss-5-to-your-entire-desktop-with-a-free-app-and-it-even-works-with-rtx-30-series-cards/" className="text-blue-400 hover:underline">PC Gamer covers NeuralScreen</a>,
            which processes captured screen output through the neural runtime rather than a publisher&apos;s game integration.
            It depends on capture, inference and presentation working together.
            <a href="https://www.techradar.com/computing/gpu/want-to-try-fudging-nvidia-dlss-5-on-games-but-dont-know-how-this-steam-tool-does-the-hard-work-for-you" className="text-blue-400 hover:underline">TechRadar covers Borderless Gaming&apos;s separate BGFX route</a>;
            it is not DLSS 5 Manager.
            <a href="https://www.thefpsreview.com/2026/09/14/dlss-5-autopilot-allows-users-to-configure-nvidias-neural-rendering-solution-and-lower-performance-hits-and-power-draw/" className="text-blue-400 hover:underline">The FPS Review describes Autopilot&apos;s configuration approach</a>.
            A wrapper still needs the components doing the rendering.
          </p>
        </article>
        <article id="tool-open" className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">OpenDLSS-NR</h3>
          <p>
            <a href="https://www.tweaktown.com/news/113613/a-modder-got-dlss-5-running-inside-a-web-browser/index.html" className="text-blue-400 hover:underline">TweakTown&apos;s browser demonstration report</a> describes
            a research implementation using WebGPU to run neural inference in a browser.
            <a href="https://www.digitalcitizen.life/modder-gets-dlss-5-running-in-a-web-browser-through-webgpu/" className="text-blue-400 hover:underline">Digital Citizen reports</a> that
            the demonstration used weights extracted from leaked libraries. Code and model data are separate dependencies; implementing inference does not grant a license to those weights.
            Browser demonstrations and native implementations are distinct paths, so their results cannot be exchanged as compatibility or performance evidence.
          </p>
        </article>
      </section>

      <section id="risks" className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Risks: files, accounts and reliability</h2>
        <h3 className="text-xl font-semibold text-foreground">Unauthorized code and unsigned modified DLLs</h3>
        <p>
          Access to a file does not establish permission to copy, modify or redistribute it.
          <a href="https://heldgames.com/guides/dlss-5-mod-risks" className="text-blue-400 hover:underline">HeldGames&apos; pre-release risk discussion</a> concerns
          leaked NVIDIA components. That historical warning does not prove every later community tool uses the same files, or that every experiment is unlawful.
          Check the origin and terms of the actual components involved. Using unauthorized NVIDIA code may breach NVIDIA&apos;s terms, and modifying a game may breach its publisher&apos;s terms.
          An open-source wrapper does not grant a license to proprietary libraries or weights it loads.
        </p>
        <p>
          Modified DLLs may be unsigned, and a changed binary cannot be authenticated as the original signed file.
          Microsoft explains that <a href="https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode" className="text-blue-400 hover:underline">Authenticode checks publisher identity and file integrity</a>.
          We have not checked these downloads or their signatures. Do not mistake a filename, NVIDIA logo or tool interface for that verification.
          A signature also is not a guarantee that software is safe or that a game permits it.
          Keep provenance, executable integrity and permission as separate questions instead of treating one successful check as approval for all three.
        </p>
        <h3 className="text-xl font-semibold text-foreground">A documented malware warning, with the names kept straight</h3>
        <p>
          <a href="https://www.techspot.com/news/113045-dlss-swapper-creator-issues-malware-warning-over-user.html" className="text-blue-400 hover:underline">TechSpot reported in July 2026</a> that
          Brad Moore, creator of DLSS Swapper, warned about malicious user-submitted libraries, including a sample flagged by VirusTotal.
          This was the established upscaling-library replacement utility, not proof that DLSS 5 Swapper, Manager or every unofficial project is malware.
          The reported attack involved outsiders trying to introduce files, not an announcement that an official project release was infected.
          It demonstrates why a helpful-looking fix or familiar project name is insufficient evidence for trusting executable code.
        </p>
        <p>
          Treat mirrors, reuploads, password-protected bundles and unsolicited troubleshooting files cautiously.
          A positive comment or attractive comparison video cannot authenticate the file behind a download button.
          Keep antivirus protection enabled; do not make an exception simply because a stranger calls a warning a false positive.
          A clean scan is another limited observation, not proof of safety, and a detection needs investigation rather than an automatic accusation against the named project.
          If you cannot establish who supplied a component and why it is required, stopping is safer than guessing.
        </p>
        <h3 className="text-xl font-semibold text-foreground">VAC, Easy Anti-Cheat and BattlEye are not interchangeable</h3>
        <p>
          Our rule is to keep these experiments out of online games.
          <a href="https://help.steampowered.com/en/faqs/view/571A-97DA-70E9-FF74" className="text-blue-400 hover:underline">Valve&apos;s VAC guidance</a> warns
          about untrusted modifications and cheats disguised as custom content.
          <a href="https://www.battleye.com/support/faq/" className="text-blue-400 hover:underline">BattlEye&apos;s FAQ</a> distinguishes
          blocked files and kicks from bans, and says visual tools can be allowed unless a developer prohibits them.
          Therefore, a changed DLL does not automatically mean a ban; equally, one tool being allowed in one game does not authorize another modification elsewhere.
        </p>
        <p>
          <a href="https://www.easy.ac/support/articles" className="text-blue-400 hover:underline">Easy Anti-Cheat&apos;s ban guidance</a> should
          be read alongside the game publisher&apos;s rules, not replaced with a forum&apos;s promise of safety.
          An <a href="https://partner.steamgames.com/doc/features/anticheat/vac_integration?l=dutch" className="text-blue-400 hover:underline">earlier, still-published version of Valve&apos;s VAC documentation</a> describes
          delayed enforcement. It is historical evidence, not a current ban timetable or proof these tools trigger detection.
          No immediate warning does not establish permission or eliminate later enforcement risk.
          Avoid claims of universal safety, guaranteed delayed bans, or a specific number of safe sessions.
        </p>
        <h3 className="text-xl font-semibold text-foreground">Stability, updates and the cost of a misleading result</h3>
        <p>
          A working demonstration is tied to its game build, graphics API, driver, runtime and model.
          PC Gamer&apos;s Manager experiment illustrates that an effect can appear while playability suffers.
          A driver or game update may invalidate an experimental path, change its output or stop it working entirely.
          This is a reason to avoid relying on a mod, not a claim that a particular update breaks every tool.
          Keep your unmodified baseline and backups, and do not trade security updates for a rendering experiment.
        </p>
        <p>
          Evaluate the possibility of crashes, damaged settings, unusable saves and time spent restoring a game before experimenting.
          These are risks to plan for, not failures we have reproduced in every project.
          Model changes can also alter the intended art direction; a pleasing still image says little about motion, responsiveness or a complete play session.
          For a PC used for work or an account you cannot afford to lose, declining the experiment is a reasonable outcome.
          We cannot certify a setup from another person&apos;s clip, and we provide no performance or safety guarantee.
        </p>
      </section>

      <section id="principles" className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">If you still want to try</h2>
        <h3 className="text-xl font-semibold text-foreground">Principles, not installation steps</h3>
        <p>
          Restrict any experiment to offline single-player games and respect the publisher&apos;s terms.
          Back up saves and an unmodified installation first. Verify the project&apos;s official identity rather than trusting a mirror or search advertisement, and keep antivirus enabled.
          These precautions reduce some risks; they cannot grant rights to proprietary files or guarantee safety.
          Never carry a modified installation into online play. This page supplies no downloads, injection instructions or protection-bypass advice.
        </p>
      </section>

      <section id="alternatives" className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Official alternatives</h2>
        <h3 className="text-xl font-semibold text-foreground">Use the features your setup supports today</h3>
        <p>
          RTX 40 owners can follow the <Link href="/dlss-5-rtx-40-series" className="text-blue-400 hover:underline">official support status</Link> while waiting for NVIDIA&apos;s release.
          For remote rendering, check <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">eligible GeForce NOW access</Link>, including regional, membership and game limits.
          For local games, compare the <Link href="/dlss-4-5-supported-cards" className="text-blue-400 hover:underline">DLSS 4.5 features supported by your card</Link>.
          Super Resolution and frame generation solve different problems from Neural Rendering; keeping a stable supported setup is a valid choice.
        </p>
      </section>

      <section id="faq" className="mb-10 space-y-6 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
        {faqs.map(({ question, answer }) => (
          <div key={question}>
            <h3 className="mb-2 text-xl font-semibold text-foreground">{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </section>
      <ArticleTrustBlock reviewedAt="2026-10-31" />
    </main>
  );
}
