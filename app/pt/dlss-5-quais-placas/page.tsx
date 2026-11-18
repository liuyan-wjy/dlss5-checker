import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import { OG_IMAGE_PT } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/pt/dlss-5-quais-placas";

export const metadata: Metadata = {
  title: "DLSS 5: Quais Placas Suportam? Lista por GPU [2026]",
  description:
    "Veja quais placas estão confirmadas, planejadas, sem suporte oficial ou fora do NVIDIA DLSS para DLSS 5, com status para RTX 50, RTX 40, RTX 30, GTX, AMD e Intel.",
  alternates: {
    canonical: "/pt/dlss-5-quais-placas",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: "https://www.dlss5.net/de/dlss-5-grafikkarten",
      "x-default": "https://www.dlss5.net/dlss-5-supported-cards",
    },
  },
  openGraph: {
    images: [OG_IMAGE_PT],
    title: "DLSS 5: Quais Placas Suportam? Lista por GPU [2026]",
    description:
      "Veja quais placas estão confirmadas, planejadas, sem suporte oficial ou fora do NVIDIA DLSS para DLSS 5, com status para RTX 50, RTX 40, RTX 30, GTX, AMD e Intel.",
    type: "article",
    url: PAGE_URL,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "DLSS 5: Quais Placas Suportam? Lista por GPU [2026]",
    description:
      "Veja quais placas estão confirmadas, planejadas, sem suporte oficial ou fora do NVIDIA DLSS para DLSS 5, com status para RTX 50, RTX 40, RTX 30, GTX, AMD e Intel.",
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
    note: "Os modelos RTX 50 neste grupo têm o caminho público mais claro para a nova camada de Neural Rendering.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  planned: {
    title: "Planejadas, mas ainda indisponíveis",
    label: "Planejada",
    note: "As placas RTX 40 rodam recursos atuais fortes de DLSS. A NVIDIA indicou plano posterior para RTX 40, mas ainda sem data pública e sem suporte ativo hoje.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unsupported: {
    title: "Sem suporte oficial atual ao DLSS 5",
    label: "Sem suporte oficial",
    note: "RTX 20 e RTX 30 continuam úteis para recursos DLSS atuais, mas as fontes checadas aqui não listam suporte atual ao DLSS 5 Neural Rendering.",
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
      "As placas confirmadas neste guia são GPUs RTX 50 de desktop e notebook. RTX 40 está planejada, mas ainda indisponível e sem data pública. RTX 20 e RTX 30 não têm suporte oficial atual ao DLSS 5 Neural Rendering.",
  },
  {
    question: "RTX 4090 suporta DLSS 5?",
    answer:
      "A RTX 4090 está no grupo RTX 40: suporte planejado para depois da otimização em RTX 50, mas ainda sem disponibilidade local e sem data pública. Hoje ela roda Frame Generation, Super Resolution, Ray Reconstruction e DLAA.",
  },
  {
    question: "RTX 3060 suporta DLSS 5?",
    answer:
      "Não. Em 18 de novembro de 2026, a RTX 3060 (8 GB ou 12 GB), a RTX 3060 Ti e a RTX 3060 de notebook não têm suporte oficial ao DLSS 5 Neural Rendering, e a NVIDIA não anunciou planos para a RTX 30. A placa continua rodando DLSS Super Resolution, DLAA e Ray Reconstruction.",
  },
  {
    question: "RTX 3080 ou RTX 3090 vão receber DLSS 5?",
    answer:
      "A NVIDIA não anunciou nada para a RTX 30. A única expansão anunciada é para a RTX 40, ainda sem data. Os 24 GB da RTX 3090 não mudam isso: o suporte depende da geração da placa, não da memória.",
  },
  {
    question: "Dá para jogar com DLSS 5 tendo uma RTX 30, AMD ou GTX?",
    answer:
      "Sim, pela nuvem. O GeForce NOW Ultimate roda NBA 2K27 e Hogwarts Legacy com Neural Rendering em servidores RTX 5080 e transmite a imagem para o seu PC. Para isso é preciso ter o jogo, a assinatura Ultimate e uma região com servidores RTX 5080; sua placa só decodifica o vídeo.",
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
  return <span>{gpu.name}</span>;
}

function StatusSection({ status }: { status: DlssSupport }) {
  const copy = STATUS_COPY[status];
  const cards = cardsByStatus(status);

  return (
    <section id={`status-${status}`} className="mb-10 scroll-mt-24">
      <div className={`rounded-lg border p-5 mb-4 ${copy.className}`}>
        <h2 className="text-2xl font-bold text-foreground mb-2">{copy.title}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">{copy.note}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <caption className="sr-only">{copy.title}</caption>
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DLSS 5 Checker",
        item: "https://www.dlss5.net/pt",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DLSS 5: Quais Placas Suportam",
        item: PAGE_URL,
      },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DLSS 5: Quais Placas Suportam",
    url: PAGE_URL,
    inLanguage: "pt-BR",
    dateModified: "2026-11-18",
    isPartOf: {
      "@type": "WebSite",
      name: "DLSS 5 Checker",
      url: "https://www.dlss5.net/pt",
    },
    about: [
      "placas com DLSS 5",
      "quais placas suportam DLSS 5",
      "compatibilidade RTX 50",
      "status RTX 40",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
          <p className="text-sm font-semibold text-blue-400 mb-3">Última verificação em 18 de novembro de 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5: Quais Placas Suportam?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A resposta curta: os modelos RTX 50 de desktop e notebook estão confirmados
            para DLSS 5 em NBA 2K27, Hogwarts Legacy e War Thunder. RTX 40 está planejada, mas ainda não disponível e
            sem data pública.
          </p>
        </header>

        <section
          id="resposta-curta"
          className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold mb-3">Quais placas suportam DLSS 5? Resposta curta</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Última verificação em 18 de novembro de 2026: RTX 50 é o caminho confirmado
            para DLSS 5 Neural Rendering em NBA 2K27, Hogwarts Legacy e War Thunder, incluindo RTX 5090 até RTX 5050 e
            versões de notebook, e os notebooks RTX Spark entraram com o modelo mais rápido
            de outubro. RTX 40 está planejada para depois da otimização em RTX 50, mas ainda
            não está ativa nem tem data. RTX 20 e RTX 30 não têm suporte oficial atual ao
            DLSS 5, e GTX, AMD e Intel não rodam NVIDIA DLSS.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href="#status-confirmed" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 50 confirmadas
            </a>
            <a href="#status-planned" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 40 planejadas
            </a>
            <a href="#status-unsupported" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 20/30 sem suporte atual
            </a>
            <a href="#status-none" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              GTX, AMD, Intel sem DLSS
            </a>
          </div>
        </section>

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
              RTX 30 ainda tem recursos atuais de DLSS, mas GTX não entra na família DLSS.{" "}
              <a href="#rtx-30" className="text-blue-400 hover:underline">Veja o que ainda funciona</a>.
            </p>
          </div>
        </section>

        <StatusSection status="confirmed" />
        <StatusSection status="planned" />
        <StatusSection status="unsupported" />
        <StatusSection status="none" />

        <section id="rtx-30" className="mb-10 scroll-mt-24 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">RTX 3060, 3070, 3080 e 3090: o que ainda funciona</h2>
          <p>
            Todas as placas RTX 30 e RTX 20, de desktop ou notebook, estão fora do DLSS 5 oficial. Os anúncios da NVIDIA
            citam apenas RTX 50, notebooks RTX Spark e GeForce NOW Ultimate, e o único plano de expansão é para a RTX 40.
            Versões Ti, SUPER ou com mais memória não mudam esse status.
          </p>
          <figure className="rounded-lg border border-border p-4" aria-labelledby="escada-caption">
            <figcaption id="escada-caption" className="mb-3">
              <span className="block font-bold">Recursos DLSS oficiais por geração</span>
              <span className="block text-sm text-muted-foreground">Novembro de 2026. RTX 30 e RTX 20 mantêm as três primeiras linhas.</span>
            </figcaption>
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="text-left">
                  <th scope="col" className="py-2 pr-2">Recurso</th>
                  {["20", "30", "40", "50"].map((g) => (
                    <th key={g} scope="col" className="px-0.5 py-2 text-center"><span className="sr-only sm:not-sr-only">RTX </span>{g}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Super Resolution", true, true, true, true],
                  ["DLAA", true, true, true, true],
                  ["Ray Reconstruction", true, true, true, true],
                  ["Frame Generation (2X)", false, false, true, true],
                  ["Multi Frame Generation", false, false, false, true],
                  ["DLSS 5 Neural Rendering", false, false, false, true],
                ].map(([feature, ...cols]) => (
                  <tr key={String(feature)} className="border-t border-border">
                    <th scope="row" className="py-2 pr-2 text-left font-medium">{feature}</th>
                    {cols.map((on, i) => (
                      <td key={i} className="px-0.5 py-2 text-center">
                        {on ? <span className="font-bold text-green-500" aria-label="Sim">✓</span> : <span className="font-bold text-red-400" aria-label="Não">✕</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
          <h3 className="text-lg font-semibold text-foreground">Como aproveitar uma RTX 30 hoje</h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>DLSS Super Resolution no modo Qualidade.</strong> Desça para Equilibrado ou Desempenho só se precisar de mais quadros.</li>
            <li><strong>Escolha o modelo no NVIDIA App.</strong> A RTX 30 roda os modelos Transformer, mas os modelos mais novos do DLSS 4.5 custam mais desempenho nela. Compare na mesma cena. Detalhes no <Link href="/pt/dlss-4-5-quais-placas" className="text-blue-400 hover:underline">guia do DLSS 4.5</Link>.</li>
            <li><strong>Ray Reconstruction com ray tracing ligado.</strong> Costuma deixar reflexos e iluminação mais limpos.</li>
            <li><strong>Geração de quadros do FSR.</strong> A Frame Generation da NVIDIA exige RTX 40, mas muitos jogos oferecem a do AMD FSR, que funciona em RTX 30. Funciona melhor quando o jogo já roda perto de 60 FPS.</li>
          </ol>
          <h3 className="text-lg font-semibold text-foreground">Vale trocar de placa só pelo DLSS 5?</h3>
          <p>
            Em 18 de novembro de 2026, só NBA 2K27, Hogwarts Legacy e War Thunder tinham DLSS 5, com Where Winds Meet
            previsto para 23 de novembro. Se você não joga nenhum deles, o DLSS 5 sozinho é um motivo fraco para comprar
            uma placa. Para só conhecer o efeito, um mês de GeForce NOW Ultimate custa menos que uma RTX 50. Se o objetivo é
            mais FPS, Frame Generation (RTX 40 ou 50) ajuda mais do que o DLSS 5, que consome desempenho.
          </p>
          <p>
            Ferramentas comunitárias que prometem DLSS 5 na RTX 30 não são suporte da NVIDIA e trazem risco de malware e
            de banimento por anti-cheat. Guia completo em inglês: <Link href="/dlss-5-rtx-30-series" lang="en" className="text-blue-400 hover:underline">DLSS 5 on RTX 30 and RTX 20</Link>.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Consultas relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/de/dlss-5-grafikkarten" hrefLang="de" className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors">
              <div className="font-semibold mb-1">Lista em alemão</div>
              <p lang="de" className="text-sm text-muted-foreground">Welche Grafikkarten unterstützen DLSS 5?</p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Lista em inglês</div>
              <p className="text-sm text-muted-foreground">
                Versão principal da lista de placas, em inglês.
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
            <Link
              href="/pt/dlss-5-vs-dlss-4-5"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 vs DLSS 4.5</div>
              <p className="text-sm text-muted-foreground">
                Compare a nova camada visual com os recursos atuais de desempenho.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              lançamento verificado do DLSS 5
            </a>{" "}
            e{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              tabela oficial de hardware DLSS
            </a>
            . Esta é uma página independente e deve ser atualizada se novos drivers,
            páginas de produto ou notas oficiais mudarem a matriz de suporte.
          </p>
        </section>
        <ArticleTrustBlock locale="pt" reviewedAt="2026-11-18" />
      </main>
    </>
  );
}
