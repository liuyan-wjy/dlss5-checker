import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | DLSS 5 GPU Compatibility Checker",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground mb-12">
        Have a question, found a data error, or want to suggest a GPU? We&apos;d love to hear from you.
      </p>

      <div className="grid gap-6">
        <div className="border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-muted-foreground text-sm mb-3">
            For all inquiries including data corrections, GPU requests, and general feedback.
          </p>
          <a
            href="mailto:support@dlss5.net"
            className="text-blue-400 hover:underline font-medium"
          >
            support@dlss5.net
          </a>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Report a Data Error</h2>
          <p className="text-muted-foreground text-sm mb-3">
            If you believe any GPU compatibility status or benchmark data is incorrect,
            please email us with the GPU or game name, the exact claim that should change,
            the source URL, and why the current answer may be outdated. We prioritize fixes
            that affect buying decisions, release timing, GPU support, or claims that could
            be mistaken for official NVIDIA guidance.
          </p>
          <div className="mb-3 rounded-md bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
            Suggested format: GPU/game name; page URL; current claim; source URL; what the
            source proves.
          </div>
          <a
            href="mailto:support@dlss5.net?subject=Data Error Report"
            className="text-blue-400 hover:underline font-medium"
          >
            Report an error →
          </a>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Request a GPU</h2>
          <p className="text-muted-foreground text-sm mb-3">
            Don&apos;t see your GPU in our database? Send the model name, vendor, generation,
            and any official product page you want us to check. We add models when they are
            useful for DLSS support decisions and can be described without guessing.
          </p>
          <a
            href="mailto:support@dlss5.net?subject=GPU Request"
            className="text-blue-400 hover:underline font-medium"
          >
            Request a GPU →
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-blue-400 hover:underline text-sm">
          ← Back to DLSS 5 Checker
        </Link>
      </div>
    </main>
  );
}
