import type { Metadata } from "next";
import GPUChecker from "@/components/GPUChecker";
import SupportedGPUsTable from "@/components/SupportedGPUsTable";
import ComparisonTable from "@/components/ComparisonTable";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "DLSS 5: Quais Placas São Suportadas? Verificador de Compatibilidade GPU",
  description:
    "Verifique se sua placa de vídeo NVIDIA suporta DLSS 5 Neural Rendering (lançamento outono 2026). Descubra quais placas são compatíveis com DLSS 5, compare DLSS 3 vs 4 vs 4.5 vs 5.",
  keywords: [
    "dlss 5 quais placas",
    "dlss 5 placas suportadas",
    "dlss 5 compatibilidade",
    "dlss5 placas de vídeo",
    "nvidia dlss 5 brasil",
    "dlss 5 rtx 50",
    "dlss 5 lançamento",
    "dlss 5 neural rendering",
    "verificador dlss 5",
    "dlss 5 rtx 4090",
  ],
  alternates: {
    canonical: "/pt",
    languages: {
      "en": "https://dlss5.net",
      "pt-BR": "https://dlss5.net/pt",
    },
  },
  openGraph: {
    title: "DLSS 5: Quais Placas São Suportadas?",
    description: "Verifique a compatibilidade da sua GPU com DLSS 5 Neural Rendering (outono 2026).",
    type: "website",
    locale: "pt_BR",
    url: "https://dlss5.net/pt",
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
          text: "A NVIDIA confirmou o DLSS 5 Neural Rendering para as GPUs da série RTX 50. O suporte para a série RTX 40 foi sugerido, mas não confirmado. O suporte para RTX 20/30 é improvável. O DLSS 5 será lançado no outono de 2026.",
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
          text: "A NVIDIA confirmou mais de 16 títulos para o DLSS 5, incluindo Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem e The Elder Scrolls IV: Oblivion Remastered.",
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
                <strong>outono de 2026</strong>. A NVIDIA confirmou suporte para a série RTX 50.
                Há 16+ títulos confirmados incluindo Starfield, Hogwarts Legacy e
                Assassin&apos;s Creed Shadows.
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
              DLSS 5 Neural Rendering está confirmado para a série RTX 50 (outono 2026).
              Outras arquiteturas não foram confirmadas. Recursos atuais do DLSS 4/4.5 mostrados para referência.
            </p>
            <SupportedGPUsTable />
          </section>

          {/* Comparação DLSS */}
          <section id="comparacao-dlss">
            <h2 className="text-3xl font-bold mb-2">DLSS 3 vs 4 vs 4.5 vs 5</h2>
            <p className="text-muted-foreground mb-6">
              Como cada geração do DLSS se compara. MFG é um recurso do DLSS 4. Neural Rendering é o recurso do DLSS 5.
            </p>
            <ComparisonTable />
          </section>

          <AdSlot slot="content-mid" />

          {/* FAQ em Português */}
          <section id="perguntas-frequentes">
            <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre DLSS 5</h2>
            <PtFAQ />
          </section>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border/50 py-8 px-4 text-center text-muted-foreground text-sm">
        <p className="mb-2">
          <strong className="text-foreground">DLSS Checker</strong> — Recurso independente de
          compatibilidade DLSS 5. Não afiliado à NVIDIA.
        </p>
        <p className="text-xs">
          Os dados de desempenho refletem os benchmarks atuais do DLSS 4/4.5 (estimados).
          O DLSS 5 Neural Rendering ainda não foi lançado e não há dados de benchmark disponíveis.
        </p>
        <nav aria-label="Navegação do rodapé" className="flex justify-center gap-6 mt-4 text-xs flex-wrap">
          <a href="/pt#o-que-e-dlss-5" className="hover:text-foreground transition-colors">
            O que é DLSS 5
          </a>
          <a href="/pt#placas-suportadas" className="hover:text-foreground transition-colors">
            Placas Suportadas
          </a>
          <a href="/pt#comparacao-dlss" className="hover:text-foreground transition-colors">
            DLSS 3 vs 4 vs 4.5 vs 5
          </a>
          <a href="/pt#perguntas-frequentes" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="/" className="hover:text-foreground transition-colors">
            English
          </a>
        </nav>
      </footer>
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
      a: "A NVIDIA confirmou o DLSS 5 Neural Rendering para as GPUs da série RTX 50 (RTX 5090, 5080, 5070 Ti, 5070, 5060 Ti, 5060). O suporte para RTX 40 foi sugerido, mas NÃO confirmado. O suporte para RTX 20/30 é improvável. O DLSS 5 ainda não foi lançado — será lançado no outono de 2026.",
    },
    {
      q: "Qual a diferença entre DLSS 5 e DLSS 4?",
      a: "DLSS 4 (CES 2025) introduziu a Geração Multi-Frame (até 3 frames adicionais de IA) e o primeiro modelo Transformer para Super Resolution. DLSS 4.5 (CES 2026) adicionou Dynamic 6X MFG (5 frames adicionais). DLSS 5 é completamente diferente — é sobre fidelidade visual, não desempenho. Adiciona Neural Rendering que analisa a semântica da cena e gera respostas fotorrealistas de materiais.",
    },
    {
      q: "RTX 4090 vai suportar DLSS 5?",
      a: "Não está confirmado. A NVIDIA confirmou DLSS 5 apenas para a série RTX 50. Para RTX 40 (incluindo RTX 4090), o suporte foi 'sugerido' mas não anunciado oficialmente. Se você tem uma RTX 40, pode usar DLSS 3 Frame Generation e DLSS Super Resolution hoje, mas DLSS 5 Neural Rendering é incerto.",
    },
    {
      q: "O DLSS 5 já está disponível no Brasil?",
      a: "Não. O DLSS 5 foi anunciado na GTC em 16 de março de 2026 e será lançado globalmente no outono de 2026. O que está disponível agora: DLSS 4/4.5 com Geração Multi-Frame para RTX 50, Geração de Frames para RTX 40, e Super Resolution para RTX 20/30/40/50 em mais de 250 jogos.",
    },
    {
      q: "Quais jogos vão ter DLSS 5?",
      a: "A NVIDIA confirmou mais de 16 títulos para o DLSS 5 Neural Rendering no lançamento, incluindo Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem e The Elder Scrolls IV: Oblivion Remastered. Mais títulos devem ser anunciados antes do lançamento no outono de 2026.",
    },
    {
      q: "Vale a pena comprar RTX 50 para o DLSS 5?",
      a: "A série RTX 50 é a única arquitetura confirmada para o DLSS 5. Mas não precisa esperar até o outono de 2026 — as GPUs RTX 50 já rodam DLSS 4/4.5 com Geração Multi-Frame (até 6X), entregando ganhos massivos de desempenho em 250+ jogos hoje. Quando o DLSS 5 for lançado, os donos de RTX 50 receberão a atualização de Neural Rendering.",
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
