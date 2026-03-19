import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DLSS 5 GPU Compatibility Checker",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
          <p>
            DLSS 5 Checker (dlss5.net) is a free, informational tool. We do not require
            registration or collect personal information directly. However, third-party
            services integrated into this site may collect data as described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">2. Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our site. Google Analytics
            collects anonymized data including pages visited, time spent, and general geographic
            location. This data is processed by Google in accordance with their{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            . You can opt out via the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">3. Google AdSense</h2>
          <p>
            We display advertisements served by Google AdSense. Google may use cookies to
            serve ads based on your prior visits to this or other websites. You can opt out
            of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">4. Cookies</h2>
          <p>
            Our site uses cookies solely through Google Analytics and Google AdSense.
            We do not set any first-party cookies ourselves. You can control cookie
            preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">5. Third-Party Links</h2>
          <p>
            This site may contain links to external websites. We are not responsible for
            the privacy practices or content of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">6. Children&apos;s Privacy</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected
            by the updated date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">8. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
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
