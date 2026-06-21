import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy | DLSS 5 Checker",
  description:
    "How DLSS 5 Checker labels confirmed, expected, unknown, unlikely, and unsupported claims, plus source, correction, and update standards.",
  alternates: { canonical: "/editorial-policy" },
};

const statusRows = [
  {
    label: "Confirmed",
    meaning: "NVIDIA or an official partner has clearly published the claim.",
  },
  {
    label: "Expected",
    meaning:
      "The claim follows from the announced generation or platform path, but final per-model documentation is still needed.",
  },
  {
    label: "Unknown",
    meaning:
      "There is not enough public evidence to treat the claim as supported or unsupported.",
  },
  {
    label: "Unlikely",
    meaning:
      "Current hardware tiers or official feature splits point away from support, but a future official update could change the answer.",
  },
  {
    label: "Unsupported",
    meaning: "The hardware or vendor is outside NVIDIA DLSS support.",
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
        <p className="mb-3 text-sm font-semibold text-blue-400">Last checked June 22, 2026</p>
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
            If a page is wrong or missing a source, contact support@dlss5.net. We prioritize
            corrections that affect buying decisions, compatibility status, release timing,
            or claims that could be mistaken for official NVIDIA guidance.
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
