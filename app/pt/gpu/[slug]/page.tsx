import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GPUDetailPage from "@/components/GPUDetailPage";
import {
  GPU_DETAIL_SLUGS,
  getGpuBySlug,
  getLocalizedSupportText,
  isEnabledGpuSlug,
} from "@/lib/gpu-page-config";

export function generateStaticParams() {
  return GPU_DETAIL_SLUGS.pt.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gpu = getGpuBySlug(slug);
  if (!gpu || !isEnabledGpuSlug("pt", slug)) {
    return {};
  }

  const statusText = getLocalizedSupportText("pt", gpu.dlss5_support);
  return {
    title: `${gpu.name}: ${statusText} no DLSS 5 [2026]`,
    description: `A ${gpu.name} suporta DLSS 5? Veja o status, os recursos atuais de DLSS e se faz sentido pensar em upgrade.`,
    alternates: { canonical: `/pt/gpu/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function PtGPUPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isEnabledGpuSlug("pt", slug)) {
    notFound();
  }

  const gpu = getGpuBySlug(slug);
  if (!gpu) {
    notFound();
  }

  return <GPUDetailPage gpu={gpu} locale="pt" />;
}
