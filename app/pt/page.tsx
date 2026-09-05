import type { Metadata } from "next";
import Link from "next/link";
import GPUChecker from "@/components/GPUChecker";
import SupportedGPUsTable from "@/components/SupportedGPUsTable";
import ComparisonTable from "@/components/ComparisonTable";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "DLSS 5: quais placas suportam? Verificador GPU",
  description:
    "Verifique se sua placa NVIDIA suporta DLSS 5, veja placas compatíveis, requisitos, jogos confirmados e diferenças entre DLSS 4.5 e DLSS 5.",
  alternates: {
    canonical: "/pt",
    languages: {
      "en": "https://www.dlss5.net",
      "pt-BR": "https://www.dlss5.net/pt",
    },
  },
  openGraph: {
    title: "DLSS 5: quais placas suportam? Verificador GPU",
    description:
      "Verifique se sua placa NVIDIA suporta DLSS 5, veja placas compatíveis, requisitos, jogos confirmados e diferenças entre DLSS 4.5 e DLSS 5.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.dlss5.net/pt",
  },
  twitter: {
    card: "summary",
    title: "DLSS 5: quais placas suportam? Verificador GPU",
    description:
      "Verifique se sua placa NVIDIA suporta DLSS 5, veja placas compatíveis, requisitos, jogos confirmados e diferenças entre DLSS 4.5 e DLSS 5.",
  },
};

const ptFaqs = [
  {
    q: "O que é o DLSS 5?",
    a: "DLSS 5 é a tecnologia de renderização com IA de próxima geração da NVIDIA, anunciada na GTC em 16 de março de 2026 e liberada publicamente em 4 de setembro de 2026 no Brasil. Ao contrário do DLSS 4/4.5, que focam em desempenho, o DLSS 5 mira fidelidade visual. Seu recurso principal é o Real-time Neural Rendering — aprimoramento com IA de iluminação e materiais. Jensen Huang chamou de 'o momento GPT para gráficos.'",
  },
  {
    q: "Quais placas de vídeo suportam o DLSS 5?",
    a: "O suporte local confirmado é RTX 50. No desktop, isso cobre RTX 5090, 5080, 5070 Ti, 5070, 5060 Ti, 5060 e 5050. Em notebook, cobre Laptop GPU RTX 5090, 5080, 5070 Ti, 5070, 5060 e 5050. RTX 40 está planejada para uma etapa futura, mas sem data de disponibilidade anunciada. RTX 20/30 não têm suporte oficial atual ao DLSS 5 Neural Rendering.",
  },
  {
    q: "Qual a diferença entre DLSS 5 e DLSS 4?",
    a: "DLSS 4 (CES 2025) introduziu a Geração Multi-Frame (até 3 frames adicionais de IA) e o primeiro modelo Transformer para Super Resolution. DLSS 4.5 (CES 2026) adicionou Dynamic 6X MFG (5 frames adicionais). DLSS 5 é completamente diferente — é sobre fidelidade visual, não desempenho. Adiciona Neural Rendering que analisa a semântica da cena e gera respostas fotorrealistas de materiais.",
  },
  {
    q: "RTX 4090 vai suportar DLSS 5?",
    a: "Ainda não. Se você tem uma RTX 40, pode usar DLSS Frame Generation, Super Resolution e Ray Reconstruction hoje, mas o DLSS 5 Neural Rendering está apenas no plano futuro da NVIDIA para essa geração, sem data de disponibilidade anunciada.",
  },
  {
    q: "O DLSS 5 já está disponível no Brasil?",
    a: "Sim. O DLSS 5 foi liberado globalmente em 3 de setembro de 2026 no Pacífico, o que corresponde a 4 de setembro de 2026 no Brasil. O primeiro jogo confirmado é NBA 2K27 em hardware RTX 50 com o driver 616.64 WHQL.",
  },
  {
    q: "Quais jogos vão ter DLSS 5?",
    a: "NBA 2K27 é o primeiro jogo confirmado como disponível. Outros jogos citados pela NVIDIA seguem como anunciados ou em verificação até aparecerem patch notes, driver ou opção visível no menu do título.",
  },
  {
    q: "Vale a pena comprar RTX 50 para o DLSS 5?",
    a: "RTX 50 é o caminho local confirmado para DLSS 5 hoje. Se você joga via GeForce NOW Ultimate, o DLSS 5 roda na infraestrutura RTX 5080 da NVIDIA; isso é diferente de ter suporte no seu PC ou notebook.",
  },
];

export default function PtHome() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ptFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-background via-background to-muted/20 px-4">
          <div className="max-w-3xl mx-auto w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              DLSS 5 Neural Rendering · Disponível desde 4 de setembro de 2026
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              DLSS 5: Quais Placas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                São Suportadas?
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Verifique se sua placa de vídeo NVIDIA suporta o DLSS 5 Neural Rendering,
              veja os dados de desempenho do DLSS 4/4.5 e encontre o melhor caminho de upgrade.
            </p>

            <GPUChecker />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Consultas populares:</span>
              <Link
                href="/pt/dlss-5-quais-placas"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Quais placas suportam
              </Link>
              <Link
                href="/pt/dlss-4-5-quais-placas"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Placas para DLSS 4.5
              </Link>
              <Link
                href="/pt/dlss-5-requisitos"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Requisitos
              </Link>
              <Link
                href="/pt/dlss-5-jogos"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Jogos
              </Link>
              <Link
                href="/pt/dlss-5-confirmado"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Está confirmado?
              </Link>
              <Link
                href="/pt/ai-pc/nvidia-rtx-spark"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX Spark
              </Link>
              <Link
                href="/pt/dlss-5-vs-dlss-4-5"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 vs 4.5
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

          {/* O que é DLSS 5 */}
          <section id="o-que-e-dlss-5">
            <h2 className="text-3xl font-bold mb-4">O que é o DLSS 5?</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                <strong>DLSS 5</strong> é a tecnologia de renderização com IA de próxima geração
                da NVIDIA, anunciada por Jensen Huang na GTC em 16 de março de 2026. Ao contrário
                do DLSS 4 e 4.5, que focavam em <em>desempenho</em> através de upscaling e geração
                de frames, o DLSS 5 é sobre <strong>fidelidade visual</strong>. Jensen chamou de{" "}
                <strong>&quot;o momento GPT para gráficos.&quot;</strong>
              </p>
              <p>
                O recurso principal do DLSS 5 é o <strong>Real-time Neural Rendering</strong> —
                aprimoramento com IA de iluminação e materiais. O DLSS 5 analisa a semântica da
                cena (personagens, cabelos, tecido, pele translúcida, iluminação ambiental) e gera
                respostas fotorrealistas de iluminação e material em tempo real.
              </p>
              <p>
                O DLSS 5 <strong>já foi lançado</strong>: a liberação pública aconteceu em{" "}
                <strong>4 de setembro de 2026 no Brasil</strong>. O suporte local confirmado
                é para PCs e notebooks GeForce RTX Série 50, incluindo RTX 5060 Ti, RTX 5060
                e RTX 5050, além das Laptop GPU RTX 5090, 5080, 5070 Ti, 5070, 5060 e 5050.
                A RTX 40 está no plano da NVIDIA, mas sem data de disponibilidade anunciada;
                por isso, não deve ser tratada como compatível hoje.
              </p>
              <p>
                <strong>O que está disponível hoje:</strong> NBA 2K27 é o primeiro jogo com
                DLSS 5 disponível localmente para RTX 50 usando o driver GeForce Game Ready
                616.64 WHQL. Em GeForce NOW Ultimate, o processamento acontece nas máquinas
                RTX 5080 da NVIDIA; isso não significa que o seu PC local sem RTX 50 ganhou
                suporte ao DLSS 5.
              </p>
            </div>
          </section>

          <AdSlot slot="content-mid" />

          {/* Placas Suportadas */}
          <section id="placas-suportadas">
            <h2 className="text-3xl font-bold mb-2">Quais Placas Suportam DLSS 5?</h2>
            <p className="text-muted-foreground mb-6">
              O status do DLSS 5 Neural Rendering é separado em confirmado, planejado,
              sem suporte oficial atual ou fora do DLSS. Recursos atuais do DLSS 4/4.5 são
              mostrados para referência.
            </p>
            <SupportedGPUsTable locale="pt" />
          </section>

          {/* Comparação DLSS */}
          <section id="comparacao-dlss">
            <h2 className="text-3xl font-bold mb-2">DLSS 3 vs 4 vs 4.5 vs 5</h2>
            <p className="text-muted-foreground mb-6">
              Como cada geração do DLSS se compara. MFG é um recurso do DLSS 4. Neural Rendering é o recurso do DLSS 5.
            </p>
            <ComparisonTable locale="pt" />
          </section>

          <AdSlot slot="content-mid" />

          {/* FAQ em Português */}
          <section id="perguntas-frequentes">
            <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre DLSS 5</h2>
            <PtFAQ />
          </section>
        </div>
      </main>

    </>
  );
}

function PtFAQ() {
  return (
    <div className="space-y-4">
      {ptFaqs.map((item, i) => (
        <div key={i} className="border border-border rounded-lg p-5">
          <h3 className="font-semibold text-sm sm:text-base mb-2">{item.q}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
