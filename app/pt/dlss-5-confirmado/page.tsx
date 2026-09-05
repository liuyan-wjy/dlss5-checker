import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const PAGE_URL = "https://www.dlss5.net/pt/dlss-5-confirmado";

export const metadata: Metadata = {
  title: "DLSS 5 está confirmado? Lançamento, placas e jogos",
  description:
    "Entenda o DLSS 5 após o lançamento: RTX 50 confirmado, RTX 40 planejado sem data, NBA 2K27 disponível e outros jogos ainda em verificação.",
  alternates: {
    canonical: "/pt/dlss-5-confirmado",
    languages: {
      en: "https://www.dlss5.net/dlss-5-evidence-tracker",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-confirmado",
    },
  },
  openGraph: {
    title: "DLSS 5 está confirmado? Lançamento, placas e jogos",
    description:
      "Entenda o DLSS 5 após o lançamento: RTX 50 confirmado, RTX 40 planejado sem data, NBA 2K27 disponível e outros jogos ainda em verificação.",
    type: "article",
    locale: "pt_BR",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: "DLSS 5 está confirmado? Lançamento, placas e jogos",
    description:
      "Entenda o DLSS 5 após o lançamento: RTX 50 confirmado, RTX 40 planejado sem data, NBA 2K27 disponível e outros jogos ainda em verificação.",
  },
};

const evidenceRows = [
  {
    question: "DLSS 5 está confirmado?",
    answer:
      "Sim, a NVIDIA lançou o DLSS 5 como uma camada de Neural Rendering em tempo real para fidelidade visual.",
    status: "Confirmado e lançado",
  },
  {
    question: "DLSS 5 já foi lançado?",
    answer:
      "Sim. A liberação pública ocorreu em 3 de setembro de 2026 no Pacífico, equivalente a 4 de setembro de 2026 no Brasil.",
    status: "Disponível",
  },
  {
    question: "RTX 50 é compatível?",
    answer:
      "Sim. O suporte local confirmado cobre GeForce RTX Série 50 no desktop e seis linhas de notebook: RTX 5090, 5080, 5070 Ti, 5070, 5060 e 5050 Laptop GPU.",
    status: "Confirmada",
  },
  {
    question: "RTX 40 está confirmada?",
    answer:
      "Ainda não está disponível. A NVIDIA falou em expansão futura para RTX 40, mas sem publicar uma data de disponibilidade anunciada.",
    status: "Planejada, sem data",
  },
  {
    question: "Os jogos anunciados já estão verificados?",
    answer:
      "NBA 2K27 está verificado. Outros jogos anunciados continuam em acompanhamento até terem patch notes ou menu confirmado.",
    status: "Misto",
  },
];

const faqItems = [
  {
    question: "DLSS 5 está confirmado oficialmente?",
    answer:
      "Sim. A NVIDIA lançou o DLSS 5 como uma tecnologia de Neural Rendering para melhorar iluminação e materiais. Hoje, o suporte local confirmado é para RTX 50 em jogos publicados com esse recurso.",
  },
  {
    question: "O que ainda não está confirmado sobre DLSS 5?",
    answer:
      "Ainda faltam data para RTX 40, mais jogos com patch público e detalhes por título. NBA 2K27 já tem driver, menu e atalho documentados; isso não deve ser copiado automaticamente para todos os jogos.",
  },
  {
    question: "Por que separar confirmado, planejado e sem suporte atual?",
    answer:
      "Porque buscas sobre DLSS 5 misturam suporte local, streaming via GeForce NOW, jogos apenas anunciados e decisões de compra. Separar esses níveis evita prometer suporte que ainda não existe.",
  },
];

export default function PtDlss5ConfirmadoPage() {
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
          <span>Confirmado</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Última checagem: 5 de setembro de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 está confirmado? Evidências, placas e jogos
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A resposta curta depende de onde você vai jogar. No PC local, DLSS 5 já vale
            para RTX 50 em jogos com suporte. No GeForce NOW Ultimate, quem renderiza é a
            infraestrutura RTX 5080 da NVIDIA. RTX 40 continua planejada, sem data definida.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            Sim. DLSS 5 está lançado. A resposta prática em 5 de setembro de 2026 é:
            RTX 50 roda localmente em jogos com suporte, NBA 2K27 já está disponível,
            RTX 40 está planejada para depois sem data pública e RTX 20/30 não têm
            suporte oficial atual ao DLSS 5 Neural Rendering.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Evidências por pergunta</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Pergunta</th>
                  <th className="px-4 py-3 text-left font-semibold">Resposta atual</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {evidenceRows.map((row, index) => (
                  <tr
                    key={row.question}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.question}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.answer}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Confirmado</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A NVIDIA publicou o lançamento do DLSS 5, confirmou RTX 50 e documentou
              NBA 2K27 com driver 616.64 WHQL.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Anunciado</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Alguns jogos continuam anunciados, mas sem patch notes ou menu visível
              para serem tratados como disponíveis.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Planejado</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 merece acompanhamento, mas ainda não deve ser vendida como suporte
              local disponível ao DLSS 5.
            </p>
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Páginas relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/pt/dlss-5-requisitos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Requisitos do DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Veja o que o PC precisa e o que ainda falta confirmar.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-jogos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Jogos com DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Lista de jogos anunciados e critérios de verificação.
              </p>
            </Link>
            <Link
              href="/pt/ai-pc/nvidia-rtx-spark"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX Spark AI PC</div>
              <p className="text-sm text-muted-foreground">
                Novo hub para a plataforma Windows AI PC da NVIDIA.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Fontes</h2>
          <p>
            Baseado no{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial de lançamento do DLSS 5
            </a>{" "}
            e na{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              página oficial de tecnologias DLSS
            </a>
            .
          </p>
        </section>
        <ArticleTrustBlock locale="pt" reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
