import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import { getGpuPageHref, isEnabledGpuSlug } from "@/lib/gpu-page-config";

export const metadata: Metadata = {
  title: "DLSS 5: Quais Placas Suportam? Lista por GPU [2026]",
  description:
    "Veja quais placas estão confirmadas, possíveis, improváveis ou sem suporte para DLSS 5, com status para RTX 50, RTX 40, RTX 30, GTX, AMD e Intel.",
  alternates: {
    canonical: "/pt/dlss-5-quais-placas",
    languages: {
      en: "https://dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://dlss5.net/pt/dlss-5-quais-placas",
    },
  },
};

const STATUS_COPY: Record<
  DlssSupport,
  {
    title: string;
    label: string;
    note: string;
    className: string;
  }
> = {
  confirmed: {
    title: "Placas confirmadas",
    label: "Confirmada",
    note: "Os modelos RTX 50 neste grupo confirmado são o caminho mais seguro para quem quer a nova camada de Neural Rendering.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  possible: {
    title: "Possíveis, mas sem confirmação",
    label: "Possível",
    note: "As placas RTX 40 já rodam recursos atuais fortes de DLSS, mas ainda não há uma matriz final para DLSS 5 nessa geração.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unlikely: {
    title: "Improváveis para a nova camada",
    label: "Improvável",
    note: "RTX 20 e RTX 30 continuam úteis para DLSS atual, mas não seguem o mesmo caminho de geração de quadros das gerações mais novas.",
    className: "border-orange-500/30 bg-orange-500/5 text-orange-300",
  },
  none: {
    title: "Sem suporte ao DLSS",
    label: "Sem DLSS",
    note: "GTX, AMD e Intel não rodam NVIDIA DLSS. Nesses casos, procure FSR no lado AMD ou XeSS no lado Intel.",
    className: "border-red-500/30 bg-red-500/5 text-red-300",
  },
};

const faqItems = [
  {
    question: "Quais placas suportam DLSS 5?",
    answer:
      "As placas confirmadas neste guia são modelos RTX 50. A série RTX 40 ainda deve ser tratada como possível, mas sem confirmação final.",
  },
  {
    question: "RTX 4090 suporta DLSS 5?",
    answer:
      "O suporte da RTX 4090 ao DLSS 5 ainda não foi confirmado. Hoje ela roda recursos atuais como Frame Generation, Super Resolution, Ray Reconstruction e DLAA.",
  },
  {
    question: "GTX 1060 suporta DLSS 5?",
    answer:
      "Não. A GTX 1060 não suporta NVIDIA DLSS porque DLSS requer hardware RTX.",
  },
];

function cardsByStatus(status: DlssSupport): GPU[] {
  return ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);
}

function featureText(gpu: GPU): string {
  if (gpu.current_dlss_features.includes("dynamic_mfg_6x")) {
    return "DLSS 4.5 Dynamic MFG, Multi Frame Generation, Super Resolution";
  }

  if (gpu.current_dlss_features.includes("frame_generation")) {
    return "Frame Generation, Super Resolution, Ray Reconstruction";
  }

  if (gpu.current_dlss_features.includes("ray_reconstruction")) {
    return "Super Resolution, Ray Reconstruction, DLAA";
  }

  if (gpu.brand === "AMD") {
    return "Use FSR como alternativa";
  }

  if (gpu.brand === "Intel") {
    return "Use XeSS como alternativa";
  }

  return "Sem suporte ao DLSS";
}

function GpuName({ gpu }: { gpu: GPU }) {
  if (isEnabledGpuSlug("pt", gpu.id)) {
    return (
      <Link href={getGpuPageHref("pt", gpu.id)} className="hover:text-blue-400 hover:underline">
        {gpu.name}
      </Link>
    );
  }

  return <span>{gpu.name}</span>;
}

function StatusSection({ status }: { status: DlssSupport }) {
  const copy = STATUS_COPY[status];
  const cards = cardsByStatus(status);

  return (
    <section className="mb-10">
      <div className={`rounded-lg border p-5 mb-4 ${copy.className}`}>
        <h2 className="text-2xl font-bold text-foreground mb-2">{copy.title}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">{copy.note}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-semibold">Placa</th>
              <th className="px-4 py-3 text-left font-semibold">Série</th>
              <th className="px-4 py-3 text-left font-semibold">VRAM</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Recursos atuais</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((gpu, index) => (
              <tr
                key={gpu.id}
                className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
              >
                <td className="px-4 py-3 font-medium">
                  <GpuName gpu={gpu} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.series}</td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-1 text-xs ${copy.className}`}>
                    {copy.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{featureText(gpu)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function PtDlss5QuaisPlacasPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/pt" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>Quais placas</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">Atualizado em abril de 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5: Quais Placas Suportam?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A resposta curta: os modelos confirmados nesta lista são RTX 50. RTX 40 ainda
            merece atenção, mas não deve ser tratada como garantida até a NVIDIA publicar
            os requisitos finais de lançamento.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Para comprar agora</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Se o objetivo principal é ter compatibilidade confirmada com a nova camada,
              a escolha conservadora é uma placa RTX 50.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Para quem já tem RTX 40</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Vale esperar. Essas placas continuam fortes no DLSS atual, especialmente com
              Frame Generation e Super Resolution.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Para RTX 30 ou GTX</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 30 ainda tem recursos atuais de DLSS, mas GTX não entra na família DLSS.
            </p>
          </div>
        </section>

        <StatusSection status="confirmed" />
        <StatusSection status="possible" />
        <StatusSection status="unlikely" />
        <StatusSection status="none" />

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Consultas relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/pt/gpu/rtx-4090"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 4090 e DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Página específica para a placa mais procurada da série RTX 40.
              </p>
            </Link>
            <Link
              href="/pt/gpu/gtx-1060"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">GTX 1060 e DLSS</div>
              <p className="text-sm text-muted-foreground">
                Resposta direta para quem usa uma placa GTX antiga.
              </p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Lista em inglês</div>
              <p className="text-sm text-muted-foreground">
                Veja a versão principal com links para modelos RTX 4070 e RTX 3070.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-requisitos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Requisitos do sistema</div>
              <p className="text-sm text-muted-foreground">
                Entenda a diferença entre requisitos e lista de placas.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-jogos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Jogos com DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Veja títulos anunciados e o que ainda precisa de confirmação.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-confirmado"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 está confirmado?</div>
              <p className="text-sm text-muted-foreground">
                Separe confirmação oficial, anúncio e incertezas de suporte.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold mb-1">{item.question}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Fontes e limites</h2>
          <p>
            Fontes:{" "}
            <a
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial do DLSS 5
            </a>{" "}
            e{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              tabela oficial de hardware DLSS
            </a>
            . Esta é uma página independente e deve ser atualizada se a NVIDIA mudar a matriz
            de suporte antes do lançamento.
          </p>
        </section>
      </main>
    </>
  );
}
