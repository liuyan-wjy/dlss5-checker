import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const PAGE_URL = "https://www.dlss5.net/pt/dlss-5-requisitos";

export const metadata: Metadata = {
  title: "Requisitos DLSS 5: placas, driver e jogos",
  description:
    "Veja requisitos atuais do DLSS 5 no Brasil: RTX 50 desktop e notebook, driver 616.64 no NBA 2K27, RTX 40 planejada sem data definida e limites RTX 20/30.",
  alternates: {
    canonical: "/pt/dlss-5-requisitos",
    languages: {
      en: "https://www.dlss5.net/dlss-5-system-requirements",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-requisitos",
    },
  },
  openGraph: {
    title: "Requisitos DLSS 5: placas, driver e jogos",
    description:
      "Veja requisitos atuais do DLSS 5 no Brasil: RTX 50 desktop e notebook, driver 616.64 no NBA 2K27, RTX 40 planejada sem data definida e limites RTX 20/30.",
    type: "article",
    locale: "pt_BR",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: "Requisitos DLSS 5: placas, driver e jogos",
    description:
      "Veja requisitos atuais do DLSS 5 no Brasil: RTX 50 desktop e notebook, driver 616.64 no NBA 2K27, RTX 40 planejada sem data definida e limites RTX 20/30.",
  },
};

const faqItems = [
  {
    question: "Quais são os requisitos do DLSS 5?",
    answer:
      "Para rodar DLSS 5 localmente hoje, o requisito confirmado é uma GPU GeForce RTX Série 50, um jogo com suporte publicado e driver compatível. No NBA 2K27, a NVIDIA indicou o driver GeForce Game Ready 616.64 WHQL.",
  },
  {
    question: "RTX 40 vai rodar DLSS 5?",
    answer:
      "Ainda não. A NVIDIA disse que pretende expandir o DLSS 5 para RTX 40 depois, mas não publicou data de disponibilidade anunciada. Até lá, RTX 40 continua com Super Resolution, Ray Reconstruction e Frame Generation em jogos compatíveis.",
  },
  {
    question: "RTX 30 ou GTX entram nos requisitos?",
    answer:
      "RTX 30 e RTX 20 ainda podem usar Super Resolution e Ray Reconstruction em jogos compatíveis, mas não têm suporte oficial atual ao DLSS 5 Neural Rendering. Placas GTX não têm suporte a DLSS.",
  },
];

const generationRows = [
  {
    group: "RTX 50",
    status: "Confirmada",
    note: "No desktop: RTX 5090, 5080, 5070 Ti, 5070, 5060 Ti, 5060 e 5050. Em notebook: Laptop GPU RTX 5090, 5080, 5070 Ti, 5070, 5060 e 5050.",
  },
  {
    group: "RTX 40",
    status: "Planejada, sem data",
    note: "Boa para DLSS atual; o DLSS 5 depende da futura expansão planejada pela NVIDIA.",
  },
  {
    group: "RTX 30 / RTX 20",
    status: "Sem suporte oficial atual",
    note: "Útil para recursos atuais de DLSS, mas não deve ser comprada esperando DLSS 5.",
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
            Revisado em 5 de setembro de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Requisitos do DLSS 5: placas compatíveis e o que falta confirmar
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A resposta prática começa pela GPU, pelo jogo e pelo driver: sua placa precisa
            estar no grupo RTX 50 confirmado, o jogo precisa ter suporte publicado e o driver
            deve ser o indicado para aquele título.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            Para jogar localmente hoje, DLSS 5 exige uma GeForce RTX Série 50 e um jogo
            com suporte publicado. NBA 2K27 é o primeiro exemplo confirmado e usa o driver
            GeForce Game Ready 616.64 WHQL. RTX 40 está planejada para depois, mas ainda
            não tem data. RTX 30, RTX 20 e GTX não devem ser compradas esperando DLSS 5.
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
              No NBA 2K27, use o driver GeForce Game Ready 616.64 WHQL; outros jogos devem
              ser conferidos nas próprias notas de patch.
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
                Lista por GPU com status confirmado, planejado, sem suporte oficial atual ou fora do DLSS.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial de lançamento do DLSS 5
            </a>{" "}
            e{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              página oficial de tecnologias DLSS
            </a>
            . Esta página separa jogo local em RTX 50 de streaming via GeForce NOW Ultimate,
            onde o processamento roda nos servidores RTX 5080 da NVIDIA.
          </p>
        </section>
        <ArticleTrustBlock locale="pt" reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
