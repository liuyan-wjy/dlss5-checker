import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "Requisitos DLSS 5: placas compatíveis e pendências",
  description:
    "Veja os requisitos do DLSS 5 em português: placas compatíveis, status RTX 50, RTX 40 e RTX 30, jogos, drivers e o que ainda não foi confirmado.",
  alternates: {
    canonical: "/pt/dlss-5-requisitos",
    languages: {
      en: "https://www.dlss5.net/dlss-5-system-requirements",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-requisitos",
    },
  },
};

const faqItems = [
  {
    question: "Quais são os requisitos do DLSS 5?",
    answer:
      "O requisito confirmado mais importante é a família de GPU: a série RTX 50 é o caminho mais seguro para DLSS 5. A NVIDIA ainda não publicou uma ficha final com driver mínimo, VRAM mínima e limites por jogo.",
  },
  {
    question: "RTX 40 vai rodar DLSS 5?",
    answer:
      "Ainda é desconhecido. RTX 40 roda recursos atuais de DLSS, como Frame Generation, Super Resolution e Ray Reconstruction, mas a nova camada de Neural Rendering deve esperar a documentação final.",
  },
  {
    question: "RTX 30 ou GTX entram nos requisitos?",
    answer:
      "RTX 30 ainda pode usar recursos atuais como Super Resolution e Ray Reconstruction em jogos compatíveis, mas não está confirmada para DLSS 5. Placas GTX não têm suporte a DLSS.",
  },
];

const generationRows = [
  {
    group: "RTX 50",
    status: "Confirmada / esperada",
    note: "Modelos RTX 50 superiores têm o caminho mais claro; modelos de entrada ainda precisam de documentação por modelo.",
  },
  {
    group: "RTX 40",
    status: "Desconhecida",
    note: "Boa para DLSS atual, mas ainda precisa de matriz oficial para a nova camada.",
  },
  {
    group: "RTX 30 / RTX 20",
    status: "Improvável para DLSS 5",
    note: "Útil para recursos atuais de DLSS, mas não para assumir compatibilidade futura.",
  },
  {
    group: "GTX / AMD / Intel",
    status: "Fora do DLSS",
    note: "GTX não roda DLSS. AMD usa FSR; Intel usa XeSS.",
  },
];

export default function PtDlss5RequisitosPage() {
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
          <span>Requisitos</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Atualizado em maio de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Requisitos do DLSS 5: placas compatíveis e o que falta confirmar
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Se você procura &quot;requisitos DLSS 5&quot;, a resposta útil não é uma lista
            genérica de PC. O ponto principal é saber quais placas são compatíveis, quais
            jogos vão expor o recurso e o que ainda depende de driver e patch.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            A série RTX 50 é o caminho mais seguro para DLSS 5. RTX 40 ainda deve ser
            tratada como desconhecida até a documentação final. RTX 30, RTX 20 e GTX não devem ser
            compradas com a expectativa de receber a nova camada de Neural Rendering.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Resumo por geração de placa</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Placa / família</th>
                  <th className="px-4 py-3 text-left font-semibold">Status prático</th>
                  <th className="px-4 py-3 text-left font-semibold">Como interpretar</th>
                </tr>
              </thead>
              <tbody>
                {generationRows.map((row, index) => (
                  <tr
                    key={row.group}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.group}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.status}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Requisito de GPU</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A placa de vídeo é o requisito mais importante porque DLSS depende de hardware
              RTX e de suporte por geração.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Requisito de jogo</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Mesmo com a placa certa, o jogo precisa receber suporte e mostrar a opção no
              menu gráfico.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Requisito de driver</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A versão final deve depender de um driver ou NVIDIA App compatível no
              lançamento.
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
          <h2 className="text-2xl font-bold mb-4">Próximas consultas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/pt/dlss-5-quais-placas"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Quais placas suportam DLSS 5?</div>
              <p className="text-sm text-muted-foreground">
                Lista por GPU com status confirmado, esperado, desconhecido, improvável ou sem suporte.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-jogos"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Jogos com DLSS 5</div>
              <p className="text-sm text-muted-foreground">
                Títulos anunciados e o que ainda precisa de confirmação por jogo.
              </p>
            </Link>
            <Link
              href="/pt/ai-pc/nvidia-rtx-spark"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX Spark e AI PCs</div>
              <p className="text-sm text-muted-foreground">
                Separe requisitos DLSS da nova plataforma Windows AI PC da NVIDIA.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Fontes e limites</h2>
          <p>
            Fontes:{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial do DLSS 5
            </a>{" "}
            e{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              página oficial de tecnologias DLSS
            </a>
            . Esta página evita inventar requisitos finais que a NVIDIA ainda não publicou.
          </p>
        </section>
        <ArticleTrustBlock locale="pt" />
      </main>
    </>
  );
}
