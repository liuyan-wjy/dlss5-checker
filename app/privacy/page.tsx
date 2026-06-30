import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DLSS 5 GPU Compatibility Checker",
  description:
    "Privacy policy for DLSS 5 Checker, covering analytics, advertising cookies, consent, third-party links, and contact details.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: June 2026</p>

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
            . You can limit analytics tracking with browser privacy controls and Google
            account settings where available.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">3. Advertising Services</h2>
          <p>
            We may use Google AdSense or other third-party advertising services to display
            ads if advertising is enabled on the site. Third-party vendors, including Google,
            may use cookies or similar technologies to serve ads based on your prior visits
            to this website or other websites.
          </p>
          <p className="mt-3">
            Google&apos;s use of advertising cookies enables Google and its partners to serve
            personalized ads to users based on their visits to this site and other sites on
            the internet. Ads may also be served as non-personalized ads depending on your
            settings, region, and consent choices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">4. How Google Uses Data</h2>
          <p>
            Google explains how it uses information from sites and apps that use Google
            services here:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information from sites or apps that use our services
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">5. Your Advertising Choices</h2>
          <p>
            You can opt out of personalized advertising or manage your Google ad preferences
            by visiting{" "}
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
          <p className="mt-3">
            You can also limit or delete cookies through your browser settings. If you block
            cookies, some analytics, advertising, or preference features may not work as
            intended.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">6. Cookies</h2>
          <p>
            Our site may use cookies through Google Analytics, Google AdSense, consent
            tools, and other site functionality. We use these technologies to understand
            site usage, improve pages, remember choices, and support advertising if enabled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">7. EEA, UK, and Switzerland Consent</h2>
          <p>
            If we show personalized ads to visitors in the European Economic Area, the United
            Kingdom, or Switzerland, we will use a Google-certified consent management
            platform that supports the IAB Transparency and Consent Framework where required.
            Until appropriate consent is collected, advertising may be limited or served as
            non-personalized ads.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">8. Third-Party Links</h2>
          <p>
            This site may contain links to external websites. We are not responsible for
            the privacy practices or content of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">9. Children&apos;s Privacy</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected
            by the updated date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">11. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <span className="font-medium text-foreground">support [at] dlss5.net</span>.
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
