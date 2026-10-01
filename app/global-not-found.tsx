import type { Metadata } from "next";
import Link from "next/link";
import SiteDocument from "@/components/SiteDocument";

export const metadata: Metadata = {
  title: "Page not found | DLSS 5 Checker",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <SiteDocument>
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold">404: Page not found</h1>
        <p className="mb-6 text-muted-foreground">Check the address, or start with the GPU checker.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="inline-flex min-h-11 items-center text-blue-400 hover:underline">Go to GPU checker</Link>
          <Link href="/pt" lang="pt-BR" className="inline-flex min-h-11 items-center text-blue-400 hover:underline">Verificador em português</Link>
        </div>
      </main>
    </SiteDocument>
  );
}
