import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "DLSS 5 vs DLSS 4.5: diferença real para jogos e placas",
  description:
    "Compare DLSS 5 vs DLSS 4.5 em português: Neural Rendering, Super Resolution, geração de quadros, jogos compatíveis e suporte de placas RTX.",
  alternates: {
    canonical: "/pt/dlss-5-vs-dlss-4-5",
    languages: {
      en: "https://www.dlss5.net/dlss-5-vs-dlss-4-5",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-vs-dlss-4-5",
    },
  },
};

const comparisonRows = [
  {
    angle: "Objetivo principal",
    dlss45: "Melhorar Super Resolution e geração de quadros na pilha atual.",
    dlss5: "Adicionar Neural Rendering para iluminação e materiais.",
  },
  {
    angle: "Disponibilidade",
    dlss45: "Disponível em jogos compatíveis hoje.",
    dlss5: "Anunciado para outono de 2026, ainda sem detalhes finais por jogo.",
  },
  {
    angle: "O que o jogador percebe",
    dlss45: "Mais FPS, imagem mais limpa e frame generation em placas compatíveis.",
    dlss5: "Potencial melhoria visual em iluminação, pele, cabelo, tecido e materiais.",
  },
  {
    angle: "Compra de GPU",
    dlss45: "RTX 50 aproveita os recursos mais novos; RTX 40 continua forte no DLSS atual.",
    dlss5: "RTX 50 é o caminho mais seguro. RTX 40 ainda precisa de confirmação.",
  },
];

const faqItems = [
  {
    question: "DLSS 5 é a mesma coisa que DLSS 4.5?",
    answer:
      "Não. DLSS 4.5 faz parte da pilha atual de Super Resolution e geração de quadros. DLSS 5 é a camada anunciada de Neural Rendering para fidelidade visual.",
  },
  {
    question: "DLSS 4.5 já está disponível?",
    answer:
      "Sim, recursos atuais de DLSS 4.5 estão disponíveis em jogos e caminhos compatíveis. Já o DLSS 5 ainda depende do lançamento público previsto para outono de 2026.",
  },
  {
    question: "Vale comprar RTX 50 só por causa do DLSS 5?",
    answer:
      "RTX 50 é o caminho mais seguro para quem quer DLSS 5, mas se esse for o único motivo da compra, vale esperar a matriz final de suporte e testes reais em jogos.",
  },
];

export default function PtDlss5VsDlss45Page() {
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
          <span>DLSS 5 vs 4.5</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Atualizado em maio de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 vs DLSS 4.5: diferença real para jogos e placas
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comparação mais importante é simples: DLSS 4.5 é a pilha atual de
            desempenho e qualidade de imagem. DLSS 5 é a camada anunciada de Neural
            Rendering para fidelidade visual.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">DLSS 5 é igual ao DLSS 4.5?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Não. DLSS 4.5 melhora a pilha atual de upscaling e geração de quadros. DLSS 5
            adiciona uma camada de Neural Rendering para iluminação e materiais, mas ainda
            precisa de confirmação final em jogos e placas.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Comparação direta</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Pergunta</th>
                  <th className="px-4 py-3 text-left font-semibold">DLSS 4.5</th>
                  <th className="px-4 py-3 text-left font-semibold">DLSS 5</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.angle}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.angle}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dlss45}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dlss5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Tabela completa de gerações DLSS</h2>
          <ComparisonTable />
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Use a tabela como visão geral. Para decisão de compra, combine com a página de
            placas compatíveis.
          </p>
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
          <h2 className="text-2xl font-bold mb-4">Links úteis</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/pt/dlss-5-requisitos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Requisitos do DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Veja quais requisitos são confirmados e quais ainda estão pendentes.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-confirmado"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 está confirmado?</div>
              <p className="text-sm text-muted-foreground">
                Separe fatos oficiais, anúncios e incertezas antes de decidir.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Fontes e limites</h2>
          <p>
            Fontes:{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              página oficial de tecnologias DLSS
            </a>
            ,{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-4-5-super-resolution-available-now/"
              className="text-blue-400 hover:underline"
            >
              anúncio do DLSS 4.5
            </a>{" "}
            e{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/"
              className="text-blue-400 hover:underline"
            >
              anúncio do DLSS 5
            </a>
            .
          </p>
        </section>
        <ArticleTrustBlock locale="pt" />
      </main>
    </>
  );
}
