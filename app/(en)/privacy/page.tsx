import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DLSS 5 GPU Compatibility Checker",
  description:
    "Privacy policy for DLSS 5 Checker, covering aggregate analytics, Google AdSense advertising, cookies and consent choices, email, and service providers.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: October 25, 2026</p>

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
          <p className="mt-3">
            Cloudflare Web Analytics also collects aggregate traffic and real-user
            monitoring (RUM) measurements through a browser beacon. These reports help
            us identify slow loading, delayed interactions, and layout shifts. They can
            include the visited page, referrer, browser or device category, and page
            performance measurements. Cloudflare states that Web Analytics does not use
            cookies or local storage to track visitors. See{" "}
            <a href="https://developers.cloudflare.com/web-analytics/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s Web Analytics documentation</a>
            {" "}for its collection methods and privacy details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            3. Hosting, Delivery, and Security
          </h2>
          <p>
            Cloudflare hosts and delivers this site. Hosting, content-delivery, and security
            services may process ordinary request
            data such as IP address, browser details, requested URL, timestamps, and security
            signals. This processing is used to deliver pages, diagnose failures, prevent
            abuse, and protect the site. Those providers handle data under their own terms
            and privacy notices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            4. Advertising with Google AdSense
          </h2>
          <p>
            DLSS 5 Checker shows ads served by Google AdSense, including Auto ads that Google
            places on the page. Ads keep the GPU checker and guides free. To deliver, measure,
            and protect ads, Google and its partners may use cookies, device identifiers, and
            similar technologies, and may receive information such as your IP address,
            browser and device details, the page you are viewing, and your interactions with
            ads. Depending on your choices and location, ads may be personalized based on
            your previous visits to this and other websites.
          </p>
          <p className="mt-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads
            based on your visits to this site and other sites on the internet. Learn more in
            Google&apos;s{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              explanation of how Google uses information from sites that use its services
            </a>
            . You can turn off personalized advertising in{" "}
            <a
              href="https://adssettings.google.com/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s My Ad Center
            </a>
            , and you can opt out of some third-party vendors&apos; use of cookies for
            personalized advertising at{" "}
            <a
              href="https://www.aboutads.info/choices/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutads.info
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            5. Consent Choices
          </h2>
          <p>
            Visitors in the European Economic Area, the United Kingdom, and Switzerland see a
            consent message from Google&apos;s certified consent management platform before
            personalized ads or advertising cookies are used. You can accept, reject, or
            manage your choices there, and change them later from the privacy and cookie
            settings link the message provides. If you do not consent, Google may still show
            non-personalized or limited ads, which use less data and are not based on your
            browsing history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            6. Cookies and Similar Technologies
          </h2>
          <p>
            Google AdSense uses cookies and similar storage to serve and measure ads, limit
            how often you see the same ad, and detect fraud. Analytics, hosting, delivery, and
            security providers may also use cookies, local storage, or comparable technologies
            when necessary for their services. Google Analytics is not loaded on this site.
            You can inspect, block, or delete stored website data through your browser.
            Blocking these technologies may change which ads you see, but the compatibility
            articles remain available without an account.
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
          <h2 className="text-xl font-semibold mb-3 text-foreground">8. Optional Tips Through Stripe</h2>
          <p>
            The &quot;Buy me a coffee&quot; links open a checkout page hosted by Stripe. No Stripe
            code runs on this site until you follow that link. If you choose to pay, Stripe
            processes your payment details, email address, and related payment data under the{" "}
            <a
              href="https://stripe.com/privacy"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe Privacy Policy
            </a>
            . We receive the payment record from Stripe, such as the amount, date, and email
            address, but never your full card number. We use it only to keep accounts and
            handle refunds or questions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">9. Third-Party Links</h2>
          <p>
            Articles link to NVIDIA, game publishers, hardware vendors, and other external
            sources. Visiting an external link sends you to a separate service with its own
            privacy practices. DLSS 5 Checker does not control those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            10. Children&apos;s Privacy
          </h2>
          <p>
            This site is not directed at children under 13, and we do not knowingly collect
            personal information from children. If you believe a child has sent personal
            information to the editorial email, contact us so it can be reviewed and removed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this policy when the site&apos;s providers or data practices change.
            The date at the top identifies the current version. We will update the
            advertising and consent sections if the ad formats, partners, or consent tool
            change.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-foreground">12. Publisher Contact</h2>
          <p>
            The publisher is DLSS 5 Checker (dlss5.net), with editorial responsibility held
            by liuyan-wjy. For privacy questions or deletion requests, email{" "}
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
