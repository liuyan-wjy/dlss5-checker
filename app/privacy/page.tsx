import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DLSS 5 GPU Compatibility Checker",
  description:
    "Privacy policy for DLSS 5 Checker, covering aggregate analytics, current advertising status, future consent requirements, email, and service providers.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: August 1, 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            1. Information You Provide
          </h2>
          <p>
            DLSS 5 Checker (dlss5.net) is a free informational site. It does not offer user
            accounts, purchases, or an on-site contact form. The GPU search runs as a site
            feature and does not ask for your name or email address. If you contact the
            publisher by email, we receive the address, message, and any information you
            choose to include so we can answer the request or review a correction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            2. Aggregate Site Analytics
          </h2>
          <p>
            We use a Plausible analytics script to understand aggregate activity such as
            page visits and referral sources. When the script loads, the analytics service
            may receive the page URL, referrer, browser and device details, and network
            information needed to deliver and aggregate the request. We use the resulting
            reports to find useful pages and technical problems, not to build personalized
            advertising profiles. Google Analytics code is not currently loaded on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            3. Hosting, Delivery, and Security
          </h2>
          <p>
            Hosting, content-delivery, and security providers may process ordinary request
            data such as IP address, browser details, requested URL, timestamps, and security
            signals. This processing is used to deliver pages, diagnose failures, prevent
            abuse, and protect the site. Those providers handle data under their own terms
            and privacy notices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            4. Current Google AdSense Status
          </h2>
          <p>
            DLSS 5 Checker is preparing for Google AdSense review. The site keeps an AdSense
            publisher meta tag and ads.txt record so Google can verify site ownership.
            <strong className="text-foreground">
              {" "}AdSense ad-serving code and Auto ads are not loaded
            </strong>
            , so the site does not currently request or display Google ads. The ownership
            records do not themselves serve ads or create an advertising profile.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            5. Advertising and Consent Before Future Activation
          </h2>
          <p>
            Before advertising is enabled, we will configure a Google-certified consent
            management platform where required, including for relevant visitors in the
            European Economic Area, the United Kingdom, and Switzerland. The consent message
            will provide the choices required for the advertising purposes in use, and this
            policy will be updated to describe the live configuration. We will not describe
            a consent tool as active until it is actually present on the site.
          </p>
          <p className="mt-3">
            If Google advertising is enabled later, Google and its partners may process data
            to deliver, secure, and measure ads as described in Google&apos;s{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              partner sites notice
            </a>
            . That future activation is not the site&apos;s current state.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            6. Cookies and Similar Technologies
          </h2>
          <p>
            The current site configuration does not load Google Analytics or AdSense
            ad-serving tags. Analytics, hosting, delivery, and security providers may still
            use cookies, local storage, or comparable technologies when necessary for their
            services. You can inspect, block, or delete stored website data through your
            browser. Blocking required storage or scripts may affect analytics or site
            delivery, but the compatibility articles remain available without an account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            7. Email Retention and Your Choices
          </h2>
          <p>
            Editorial correspondence is kept only as long as reasonably needed to answer the
            message, document a correction, prevent abuse, or meet legal obligations. You may
            ask us to delete an email conversation unless we need to retain it for one of
            those purposes. Browser privacy controls can also limit third-party scripts and
            stored site data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">8. Third-Party Links</h2>
          <p>
            Articles link to NVIDIA, game publishers, hardware vendors, and other external
            sources. Visiting an external link sends you to a separate service with its own
            privacy practices. DLSS 5 Checker does not control those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            9. Children&apos;s Privacy
          </h2>
          <p>
            This site is not directed at children under 13, and we do not knowingly collect
            personal information from children. If you believe a child has sent personal
            information to the editorial email, contact us so it can be reviewed and removed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this policy when the site&apos;s providers or data practices change.
            The date at the top identifies the current version. Advertising and consent
            disclosures will be revised before ad-serving code is activated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">11. Publisher Contact</h2>
          <p>
            The publisher is DLSS 5 Checker (dlss5.net), with editorial responsibility held
            by the DLSS 5 Checker Editor. For privacy questions or deletion requests, email{" "}
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
