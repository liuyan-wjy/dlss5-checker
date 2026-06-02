import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DLSS 5 está confirmado? Evidências, placas e jogos",
  description:
    "Entenda o que está confirmado sobre o DLSS 5, o que ainda é anúncio, quais placas são mais seguras e quais detalhes dependem da NVIDIA.",
  alternates: {
    canonical: "/pt/dlss-5-confirmado",
    languages: {
      en: "https://dlss5.net/dlss-5-evidence-tracker",
      "pt-BR": "https://dlss5.net/pt/dlss-5-confirmado",
    },
  },
};

const evidenceRows = [
  {
    question: "DLSS 5 está confirmado?",
    answer:
      "Sim, a NVIDIA anunciou o DLSS 5 como uma camada de Neural Rendering em tempo real para fidelidade visual.",
    status: "Confirmado como anúncio oficial",
  },
  {
    question: "DLSS 5 já foi lançado?",
    answer:
      "Não. A janela pública comunicada é outono de 2026. Até lá, cada jogo ainda precisa de patch e documentação.",
    status: "Anunciado, não disponível",
  },
  {
    question: "RTX 50 é compatível?",
    answer:
      "RTX 50 é o caminho mais seguro com base nos recursos atuais e no posicionamento público da NVIDIA.",
    status: "Melhor aposta",
  },
  {
    question: "RTX 40 está confirmada?",
    answer:
      "Não. RTX 40 deve ser tratada como possível, mas sem confirmação final para a nova camada.",
    status: "Possível, sem garantia",
  },
  {
    question: "Os jogos anunciados já estão verificados?",
    answer:
      "Ainda não. Um jogo anunciado só fica verificado quando há patch notes, driver e opção visível.",
    status: "Precisa de verificação",
  },
];

const faqItems = [
  {
    question: "DLSS 5 está confirmado oficialmente?",
    answer:
      "Sim. A NVIDIA anunciou o DLSS 5 como uma tecnologia de Neural Rendering para melhorar iluminação e materiais. O que ainda falta é a documentação final de lançamento para placas, drivers e jogos específicos.",
  },
  {
    question: "O que ainda não está confirmado sobre DLSS 5?",
    answer:
      "Ainda faltam matriz final de GPUs, versão mínima de driver, comportamento por jogo, opções no menu gráfico e possíveis limites por placa.",
  },
  {
    question: "Por que separar confirmado, anunciado e possível?",
    answer:
      "Porque buscas sobre DLSS 5 misturam fatos oficiais, demonstrações, rumores e decisões de compra. Separar esses níveis evita prometer suporte que ainda não foi publicado.",
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
            Última checagem: maio de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 está confirmado? Evidências, placas e jogos
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta página é para a busca &quot;DLSS 5 está confirmado?&quot;. Ela separa o
            que a NVIDIA já anunciou, o que é uma inferência cautelosa e o que ainda
            precisa de documentação pública.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            DLSS 5 está confirmado como tecnologia anunciada pela NVIDIA, mas ainda não
            está disponível ao público. A parte não confirmada é a lista final de GPUs,
            jogos, drivers e configurações no lançamento.
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
              A NVIDIA comunicou publicamente o recurso, a direção técnica e a janela de
              lançamento.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Anunciado</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Jogos e parceiros foram nomeados, mas ainda precisam de patch notes finais.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Possível</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 merece acompanhamento, mas não deve ser vendida como suporte garantido.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial do DLSS 5
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
      </main>
    </>
  );
}
