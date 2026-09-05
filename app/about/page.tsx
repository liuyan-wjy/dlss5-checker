import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Publisher | DLSS 5 GPU Compatibility Checker",
  description:
    "Learn who maintains DLSS 5 Checker, how compatibility claims are sourced, and how the site corrects GPU support information.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Publisher | DLSS 5 GPU Compatibility Checker",
    description:
      "Learn who maintains DLSS 5 Checker, how compatibility claims are sourced, and how the site corrects GPU support information.",
    type: "article",
    url: "https://www.dlss5.net/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Publisher | DLSS 5 GPU Compatibility Checker",
    description:
      "Learn who maintains DLSS 5 Checker, how compatibility claims are sourced, and how the site corrects GPU support information.",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About DLSS 5 Checker</h1>
      <p className="-mt-5 mb-8 text-sm text-muted-foreground">Last reviewed: September 5, 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Why We Built This</h2>
          <p>
            On March 16, 2026, NVIDIA announced DLSS 5 at GTC — and within hours,
            the internet was flooded with misinformation. Sites were marking every RTX 50
            GPU as &quot;confirmed&quot; before NVIDIA published launch details. Others were
            confusing DLSS 5 Neural Rendering with DLSS 4/4.5 Multi Frame Generation. Now
            that DLSS 5 is live first in NBA 2K27 on RTX 50, the main risk is copying that
            status to every announced game or older GPU before sources support it.
          </p>
          <p className="mt-4">
            The checker brings GPU support, available features, and game requirements
            into one result. It matches the model you enter against a maintained list;
            it does not inspect your computer or measure performance. Support labels
            distinguish what is usable now from a future plan or an unsupported setup.
            The linked evidence lets you check the announcement behind a result.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Who Publishes This Site</h2>
          <p>
            DLSS 5 Checker is an independently operated publication at dlss5.net. The site
            uses the byline <strong className="text-foreground">DLSS 5 Checker Editor</strong>
            {" "}for the editor responsible for researching, writing, reviewing, and correcting
            its compatibility guidance. We write for players, creators, and PC builders who
            need to know what is usable now, what is planned for later, and what still
            depends on final documentation.
          </p>
          <p className="mt-4">
            The site is not an NVIDIA publication, reseller page, or download portal. Our job
            is to organize public evidence, explain uncertainty clearly, and correct outdated
            compatibility language when better official sources appear.
          </p>
          <dl className="mt-5 grid gap-3 rounded-lg border border-border p-4 text-sm sm:grid-cols-[10rem_1fr]">
            <dt className="font-semibold text-foreground">Publisher</dt>
            <dd>DLSS 5 Checker (dlss5.net)</dd>
            <dt className="font-semibold text-foreground">Responsible editor</dt>
            <dd>DLSS 5 Checker Editor</dd>
            <dt className="font-semibold text-foreground">Editorial contact</dt>
            <dd>
              <a href="mailto:support@dlss5.net" className="text-blue-400 hover:underline">
                support@dlss5.net
              </a>
            </dd>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">How We Review Sources</h2>
          <p>
            We prioritize NVIDIA newsroom posts, NVIDIA DLSS technology pages, official driver
            notes, game patch notes, and OEM documentation. Media reports can help identify
            what to watch, but they do not override primary sources. If a claim affects buying
            decisions, release timing, or GPU support, we keep it in the cautious status system
            until a primary source is clear.
          </p>
          <p className="mt-4">
            GPU memory configurations come from manufacturer specifications, including
            separate desktop and laptop listings. Our explanations and setup checklists
            are editorial guidance, not quotations or certification from NVIDIA. For
            example, both the{" "}
            <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5060-family/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">RTX 5060 Ti</a>
            {" "}and{" "}
            <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">RTX 4060 Ti</a>
            {" "}have 8GB and 16GB variants. A family-level compatibility label does not
            tell you which memory configuration is installed in your PC.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">What We Stand For</h2>
          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Accuracy over clicks</strong> — We now mark RTX 50 desktop and laptop GPUs as confirmed, RTX 40 as planned but not live, and older RTX generations as unsupported for current DLSS 5 Neural Rendering.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Transparency about uncertainty</strong> — RTX 40 has a future plan but no public date, and most announced games still need their own patch or menu proof. We reflect that instead of making up dates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Regular updates</strong> — As NVIDIA releases official specs, driver notes, and game support details after launch, we update the data accordingly.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Disclaimer</h2>
          <p>
            DLSS 5 Checker is an independent resource and is <strong className="text-foreground">not
            affiliated with NVIDIA Corporation</strong>. All product names, logos, and brands
            are property of their respective owners. We have not performed independent
            per-GPU DLSS performance tests. The checker does not publish estimated FPS
            or promise a percentage improvement from a graphics-card upgrade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Get in Touch</h2>
          <p>
            Found a data error? Have a GPU we should add? Send the GPU or game name, the
            claim that should change, and the source URL we should review to{" "}
            <a href="mailto:support@dlss5.net" className="font-medium text-blue-400 hover:underline">
              support@dlss5.net
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-blue-400 hover:underline text-sm">
          ← Back to DLSS 5 Checker
        </Link>
      </div>
    </main>
  );
}
