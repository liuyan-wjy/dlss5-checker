import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DLSS 5 GPU Compatibility Checker",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About DLSS 5 Checker</h1>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Why We Built This</h2>
          <p>
            On March 16, 2026, NVIDIA announced DLSS 5 at GTC — and within hours,
            the internet was flooded with misinformation. Sites were marking every RTX 50
            GPU as &quot;confirmed&quot; for DLSS 5 without noting VRAM concerns on the
            RTX 5060. Others were confusing DLSS 5 (Neural Rendering) with DLSS 4
            (Multi Frame Generation). Some sources even claimed DLSS 5 was &quot;already
            available&quot; when it doesn&apos;t launch until Fall 2026.
          </p>
          <p className="mt-4">
            We built DLSS 5 Checker to cut through the noise with a single, accurate,
            regularly updated source of truth. Every data point on this site is sourced
            from NVIDIA&apos;s official announcements and press releases — and where
            information is genuinely uncertain, we say so clearly (e.g., &quot;TBD&quot;
            or &quot;Unlikely&quot;) rather than guessing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">What We Stand For</h2>
          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Accuracy over clicks</strong> — We changed RTX 5060/5060 Ti from &quot;Confirmed&quot; to &quot;Unlikely&quot; because the VRAM evidence doesn&apos;t support the optimistic claim, even though &quot;Confirmed&quot; would drive more traffic.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Transparency about uncertainty</strong> — NVIDIA&apos;s own FAQ says minimum GPU specs are &quot;pending model optimizations.&quot; We reflect that honestly rather than making up numbers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong className="text-foreground">Regular updates</strong> — As NVIDIA releases official specs and game support details ahead of the Fall 2026 launch, we update the data accordingly.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Disclaimer</h2>
          <p>
            DLSS 5 Checker is an independent resource and is <strong className="text-foreground">not
            affiliated with NVIDIA Corporation</strong>. All product names, logos, and brands
            are property of their respective owners. Performance data shown reflects
            estimated DLSS 4/4.5 benchmarks — DLSS 5 has no benchmark data yet as it
            has not been released.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">Get in Touch</h2>
          <p>
            Found a data error? Have a GPU we should add? Reach us at{" "}
            <a href="mailto:support@dlss5.net" className="text-blue-400 hover:underline">
              support@dlss5.net
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <a href="/" className="text-blue-400 hover:underline text-sm">← Back to DLSS 5 Checker</a>
      </div>
    </main>
  );
}
