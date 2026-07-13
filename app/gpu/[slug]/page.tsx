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
  return GPU_DETAIL_SLUGS.en.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gpu = getGpuBySlug(slug);
  if (!gpu || !isEnabledGpuSlug("en", slug)) {
    return {};
  }

  const statusText = getLocalizedSupportText("en", gpu.dlss5_support);
  return {
    title: `${gpu.name} & DLSS 5: ${statusText} [2026]`,
    description: `Does the ${gpu.name} support DLSS 5 Neural Rendering? Status: ${statusText}. See current DLSS features and whether the card is worth upgrading.`,
    alternates: { canonical: `/gpu/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function GPUPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isEnabledGpuSlug("en", slug)) {
    notFound();
  }

  const gpu = getGpuBySlug(slug);
  if (!gpu) {
    notFound();
  }

  return <GPUDetailPage gpu={gpu} locale="en" />;
}
