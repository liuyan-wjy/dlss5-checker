import type { Metadata } from "next";
import Link from "next/link";
import GPUChecker from "@/components/GPUChecker";
import SupportedGPUsTable from "@/components/SupportedGPUsTable";
import ComparisonTable from "@/components/ComparisonTable";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "DLSS 5: quais placas suportam? Verificador GPU",
  description:
    "Verifique se sua placa NVIDIA suporta DLSS 5, veja placas compatíveis, requisitos, jogos anunciados e diferenças entre DLSS 4.5 e DLSS 5.",
  alternates: {
    canonical: "/pt",
    languages: {
      "en": "https://www.dlss5.net",
      "pt-BR": "https://www.dlss5.net/pt",
    },
  },
  openGraph: {
    title: "DLSS 5: Quais Placas São Suportadas?",
    description: "Verifique a compatibilidade da sua GPU com DLSS 5 Neural Rendering (outono 2026).",
    type: "website",
    locale: "pt_BR",
    url: "https://www.dlss5.net/pt",
  },
};

export default function PtHome() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 5 é a tecnologia de renderização com IA de próxima geração da NVIDIA, anunciada na GTC em 16 de março de 2026, com lançamento previsto para o outono de 2026. Ao contrário do DLSS 4/4.5, que focam em desempenho, o DLSS 5 é sobre fidelidade visual através do Real-time Neural Rendering — aprimoramento com IA de iluminação e materiais.",
        },
      },
      {
        "@type": "Question",
        name: "Quais placas de vídeo suportam o DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O caminho mais claro para o DLSS 5 Neural Rendering é a série RTX 50. Este site trata RTX 5090, 5080, 5070 Ti e 5070 como confirmadas, RTX 5060 Ti / 5060 como esperadas com documentação final pendente por modelo, RTX 40 como desconhecida e RTX 20/30 como improvável.",
        },
      },
      {
        "@type": "Question",
        name: "Qual é a diferença entre DLSS 5 e DLSS 4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O DLSS 4 introduziu a Geração Multi-Frame (até 3 quadros adicionais de IA) para desempenho. O DLSS 5 é completamente diferente — ele adiciona Neural Rendering para fidelidade visual, usando IA para aprimorar iluminação e materiais com qualidade fotorrealista. O DLSS 5 roda sobre o DLSS 4.5.",
        },
      },
      {
        "@type": "Question",
        name: "O DLSS 5 funciona em placas AMD ou Intel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O DLSS é uma tecnologia exclusiva da NVIDIA. Usuários AMD devem usar FSR 4, e usuários Intel devem usar XeSS como alternativas.",
        },
      },
      {
        "@type": "Question",
        name: "O DLSS 5 já está disponível?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O DLSS 5 foi anunciado na GTC em 16 de março de 2026 e será lançado no outono de 2026. O que está disponível agora: DLSS 4/4.5 com Geração Multi-Frame para RTX 50, Geração de Quadros para RTX 40, e Super Resolution para RTX 20/30/40/50.",
        },
      },
      {
        "@type": "Question",
        name: "Quais jogos vão suportar DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A NVIDIA anunciou um grupo inicial de jogos para DLSS 5, incluindo Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem e The Elder Scrolls IV: Oblivion Remastered. Cada jogo ainda precisa de patch notes e detalhes finais.",
        },
      },
    ],
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
              DLSS 5 Neural Rendering · Anunciado GTC 2026 · Lançamento Outono 2026
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
              <Link
                href="/pt/gpu/rtx-4070"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 4070
              </Link>
              <Link
                href="/pt/gpu/rtx-4080"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 4080
              </Link>
              <Link
                href="/pt/gpu/rtx-3060"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 3060
              </Link>
              <Link
                href="/pt/gpu/rtx-4090"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 4090
              </Link>
              <Link
                href="/pt/gpu/gtx-1060"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                GTX 1060
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
                O DLSS 5 <strong>ainda não foi lançado</strong> — será lançado no{" "}
                <strong>outono de 2026</strong>. A NVIDIA confirmou o caminho RTX 50,
                enquanto modelos de entrada ainda devem ser verificados na documentação final
                por modelo. A NVIDIA anunciou um grupo inicial de títulos, incluindo Starfield, Hogwarts
                Legacy e Assassin&apos;s Creed Shadows, mas os detalhes finais ainda dependem
                de cada jogo.
              </p>
              <p>
                <strong>O que está disponível hoje:</strong> As GPUs da série RTX 50 já se
                beneficiam do DLSS 4/4.5, que inclui Geração Multi-Frame (até 6X com DLSS 4.5),
                Super Resolution baseado em Transformer de 2ª geração, e Ray Reconstruction.
                Mais de 250 jogos suportam as versões atuais do DLSS.
              </p>
            </div>
          </section>

          <AdSlot slot="content-mid" />

          {/* Placas Suportadas */}
          <section id="placas-suportadas">
            <h2 className="text-3xl font-bold mb-2">Quais Placas Suportam DLSS 5?</h2>
            <p className="text-muted-foreground mb-6">
              O status do DLSS 5 Neural Rendering é separado em confirmado, esperado,
              desconhecido, improvável ou sem suporte. Recursos atuais do DLSS 4/4.5 são
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
  const faqs = [
    {
      q: "O que é o DLSS 5?",
      a: "DLSS 5 é a tecnologia de renderização com IA de próxima geração da NVIDIA, anunciada na GTC em 16 de março de 2026, com lançamento previsto para o outono de 2026. Ao contrário do DLSS 4/4.5, que focam em desempenho, o DLSS 5 é sobre fidelidade visual. Seu recurso principal é o Real-time Neural Rendering — aprimoramento com IA de iluminação e materiais. Jensen Huang chamou de 'o momento GPT para gráficos.'",
    },
    {
      q: "Quais placas de vídeo suportam o DLSS 5?",
      a: "O caminho mais claro é RTX 50: RTX 5090, 5080, 5070 Ti e 5070 são tratadas como confirmadas neste tracker; RTX 5060 Ti e 5060 ficam como esperadas, mas pendentes da documentação final por modelo. RTX 40 é desconhecida e RTX 20/30 é improvável.",
    },
    {
      q: "Qual a diferença entre DLSS 5 e DLSS 4?",
      a: "DLSS 4 (CES 2025) introduziu a Geração Multi-Frame (até 3 frames adicionais de IA) e o primeiro modelo Transformer para Super Resolution. DLSS 4.5 (CES 2026) adicionou Dynamic 6X MFG (5 frames adicionais). DLSS 5 é completamente diferente — é sobre fidelidade visual, não desempenho. Adiciona Neural Rendering que analisa a semântica da cena e gera respostas fotorrealistas de materiais.",
    },
    {
      q: "RTX 4090 vai suportar DLSS 5?",
      a: "Ainda é desconhecido. Se você tem uma RTX 40, pode usar DLSS 3 Frame Generation, Super Resolution e Ray Reconstruction hoje, mas DLSS 5 Neural Rendering deve esperar a documentação final da NVIDIA.",
    },
    {
      q: "O DLSS 5 já está disponível no Brasil?",
      a: "Não. O DLSS 5 foi anunciado na GTC em 16 de março de 2026 e será lançado globalmente no outono de 2026. O que está disponível agora: DLSS 4/4.5 com Geração Multi-Frame para RTX 50, Geração de Frames para RTX 40, e Super Resolution para RTX 20/30/40/50 em mais de 250 jogos.",
    },
    {
      q: "Quais jogos vão ter DLSS 5?",
      a: "A NVIDIA anunciou um grupo inicial de jogos para o DLSS 5 Neural Rendering, incluindo Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem e The Elder Scrolls IV: Oblivion Remastered. Trate isso como suporte anunciado até cada jogo publicar notas de patch, configurações e detalhes de GPU.",
    },
    {
      q: "Vale a pena comprar RTX 50 para o DLSS 5?",
      a: "RTX 50 é o caminho mais seguro para DLSS 5, mas modelos específicos ainda devem ser conferidos na documentação final. Hoje, as GPUs RTX 50 já rodam recursos do DLSS 4/4.5 com Geração Multi-Frame em jogos compatíveis.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((item, i) => (
        <div key={i} className="border border-border rounded-lg p-5">
          <h3 className="font-semibold text-sm sm:text-base mb-2">{item.q}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
