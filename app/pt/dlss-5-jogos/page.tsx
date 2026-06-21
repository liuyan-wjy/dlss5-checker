import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "Jogos com DLSS 5: lista anunciada e status por título",
  description:
    "Veja quais jogos com DLSS 5 foram anunciados, o que ainda precisa ser verificado e por que suporte de jogo não é igual a suporte da sua placa.",
  alternates: {
    canonical: "/pt/dlss-5-jogos",
    languages: {
      en: "https://www.dlss5.net/dlss-5-games",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-jogos",
    },
  },
};

const announcedGames = [
  "AION 2",
  "Assassin's Creed Shadows",
  "Black State",
  "CINDER CITY",
  "Delta Force",
  "Hogwarts Legacy",
  "Justice",
  "NARAKA: BLADEPOINT",
  "NTE: Neverness to Everness",
  "Phantom Blade Zero",
  "Resident Evil Requiem",
  "Sea of Remnants",
  "Starfield",
  "The Elder Scrolls IV: Oblivion Remastered",
  "Where Winds Meet",
];

const faqItems = [
  {
    question: "Quais jogos vão ter DLSS 5?",
    answer:
      "A NVIDIA anunciou um grupo inicial de jogos com DLSS 5, incluindo Starfield, Resident Evil Requiem, Assassin's Creed Shadows, Hogwarts Legacy, Phantom Blade Zero e Delta Force. Ainda é preciso esperar notas de patch e configurações visíveis em cada jogo.",
  },
  {
    question: "DLSS 5 já está disponível nesses jogos?",
    answer:
      "Não. A NVIDIA anunciou o DLSS 5 para o outono de 2026. Até lá, jogos podem ter DLSS 4 ou DLSS 4.5, mas isso não significa que a camada de Neural Rendering do DLSS 5 já esteja disponível.",
  },
  {
    question: "Um jogo com DLSS 5 funciona em qualquer RTX?",
    answer:
      "Não necessariamente. Suporte do jogo e suporte da GPU são coisas diferentes. Um jogo pode receber integração com DLSS 5, mas a opção pode depender da geração da placa e do driver.",
  },
];

export default function PtDlss5JogosPage() {
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
          <span>Jogos</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Atualizado em maio de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Jogos com DLSS 5: lista anunciada e status por título
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta página separa jogo anunciado, patch confirmado e suporte da sua placa.
            Essa distinção é importante porque muita busca por &quot;jogos DLSS 5&quot;
            mistura três respostas diferentes.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            A NVIDIA já anunciou uma primeira lista de jogos com DLSS 5, mas isso ainda
            não é o mesmo que suporte verificado em cada jogo. A confirmação final precisa
            vir de notas de patch, driver compatível e opção visível no menu gráfico.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Jogos anunciados para DLSS 5</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-3 text-left font-semibold">Jogo</th>
                  <th className="px-4 py-3 text-left font-semibold">Status atual</th>
                  <th className="px-4 py-3 text-left font-semibold">O que verificar depois</th>
                </tr>
              </thead>
              <tbody>
                {announcedGames.map((game, index) => (
                  <tr
                    key={game}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{game}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-xs text-green-300">
                        Anunciado
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Patch do jogo, driver, menu gráfico e limite por GPU.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Como verificar um jogo com DLSS 5</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-1">1. Anúncio</h3>
              <p className="text-sm text-muted-foreground">
                A NVIDIA ou o estúdio cita o jogo publicamente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">2. Patch notes</h3>
              <p className="text-sm text-muted-foreground">
                O jogo documenta o recurso em uma atualização.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">3. Driver</h3>
              <p className="text-sm text-muted-foreground">
                Driver ou NVIDIA App expõe o caminho de suporte.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">4. Configuração</h3>
              <p className="text-sm text-muted-foreground">
                O menu gráfico mostra a opção e a placa compatível.
              </p>
            </div>
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
          <h2 className="text-2xl font-bold mb-4">Links úteis</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/pt/dlss-5-quais-placas"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Placas compatíveis</div>
              <p className="text-sm text-muted-foreground">
                Confirme se sua GPU entra no grupo confirmado, esperado, desconhecido ou improvável.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-confirmado"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">O que está confirmado?</div>
              <p className="text-sm text-muted-foreground">
                Veja a diferença entre fato oficial, anúncio e inferência cautelosa.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Fonte principal</h2>
          <p>
            Esta página usa o{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial do DLSS 5
            </a>{" "}
            como base e evita tratar vídeos de demonstração como comportamento final de
            lançamento.
          </p>
        </section>
        <ArticleTrustBlock locale="pt" />
      </main>
    </>
  );
}
