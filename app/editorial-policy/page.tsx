import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy | DLSS 5 Checker",
  description:
    "How DLSS 5 Checker labels confirmed, planned, unsupported, and no-DLSS claims, plus source, correction, and update standards.",
  alternates: { canonical: "/editorial-policy" },
  openGraph: {
    title: "Editorial Policy | DLSS 5 Checker",
    description: "How DLSS 5 Checker labels confirmed, planned, unsupported, and no-DLSS claims, plus source, correction, and update standards.",
    type: "article",
    url: "https://www.dlss5.net/editorial-policy",
  },
  twitter: {
    card: "summary",
    title: "Editorial Policy | DLSS 5 Checker",
    description: "How DLSS 5 Checker labels confirmed, planned, unsupported, and no-DLSS claims, plus source, correction, and update standards.",
  },
};

const statusRows = [
  {
    label: "Confirmed",
    meaning: "Official release documentation confirms current DLSS 5 support for the named hardware or game.",
  },
  {
    label: "Planned",
    meaning:
      "An official source indicates future support, but the feature is not available yet or lacks a public date.",
  },
  {
    label: "Unsupported",
    meaning:
      "The sources checked here do not list current official support for the feature.",
  },
  {
    label: "No DLSS",
    meaning: "The local GPU does not support NVIDIA DLSS. Streaming on a supported cloud GPU is a separate case.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          DLSS 5 Checker
        </Link>
        <span className="mx-2">/</span>
        <span>Editorial Policy</span>
      </nav>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-blue-400">Last checked September 5, 2026</p>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Editorial Policy
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          DLSS 5 Checker is an independent reference site. We do not present ourselves as
          NVIDIA, and we avoid turning previews, demos, or rumors into final buying advice.
        </p>
      </header>

      <section className="mb-10 rounded-lg border border-border p-5">
        <h2 className="mb-4 text-2xl font-bold">Status labels</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="p-3 font-semibold">Label</th>
                <th className="p-3 font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {statusRows.map((row) => (
                <tr key={row.label} className="border-t border-border align-top">
                  <td className="p-3 font-medium">{row.label}</td>
                  <td className="p-3 text-muted-foreground">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border p-5">
          <h2 className="mb-2 text-xl font-bold">Source priority</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            Primary sources come first: NVIDIA announcements, NVIDIA DLSS technology pages,
            official driver notes, game patch notes, and official OEM documentation. Media
            reports can help with context, but they do not override primary documentation.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h2 className="mb-2 text-xl font-bold">Corrections</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            If a page is wrong or missing a source, contact{" "}
            <a href="mailto:support@dlss5.net" className="text-blue-400 hover:underline">
              support@dlss5.net
            </a>
            . We prioritize corrections that affect buying decisions, compatibility status,
            release timing, or claims that could be mistaken for official NVIDIA guidance.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h2 className="mb-2 text-xl font-bold">Update cadence</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            Pages are reviewed when NVIDIA publishes DLSS updates, when major game or driver
            releases mention DLSS, and before important launch windows. Tracker pages show
            their last checked dates where useful.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h2 className="mb-2 text-xl font-bold">Independence</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            DLSS 5 Checker is not affiliated with NVIDIA. Product names and trademarks belong
            to their respective owners. We may monetize the site with ads if enabled, but ad
            placement does not determine compatibility labels.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-lg border border-border p-5">
        <h2 className="mb-3 text-xl font-bold">How corrections are handled</h2>
        <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
          <p>
            A correction request should include the page URL, the current claim, the source
            that changes the answer, and whether the change affects hardware support, game
            support, driver requirements, release timing, or wording clarity.
          </p>
          <p>
            When a primary source changes a status label, we update the relevant article,
            the evidence tracker, related GPU pages, and any structured data that repeats
            the same answer. A future official plan is not current support. Missing DLSS 5
            support does not remove a card&apos;s older DLSS features, and an unrecognized GPU
            query returns no match rather than a guessed compatibility result.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border p-5">
        <h2 className="mb-3 text-xl font-bold">Related policy pages</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/about" className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline">
            About this site
          </Link>
          <Link href="/privacy" className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/contact" className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline">
            Contact
          </Link>
          <Link
            href="/dlss-5-evidence-tracker"
            className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline"
          >
            Evidence Tracker
          </Link>
        </div>
      </section>
    </main>
  );
}
