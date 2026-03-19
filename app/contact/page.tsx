import type { Metadata } from "next";

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
            please email us with the GPU name, the issue, and a source link if available.
            We take accuracy seriously and will update the data promptly.
          </p>
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
            Don&apos;t see your GPU in our database? Let us know and we&apos;ll add it.
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
        <a href="/" className="text-blue-400 hover:underline text-sm">← Back to DLSS 5 Checker</a>
      </div>
    </main>
  );
}
