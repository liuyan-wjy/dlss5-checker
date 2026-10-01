import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "Jogos com DLSS 5: NBA 2K27 disponível e status por título",
  description:
    "Veja NBA 2K27 com DLSS 5 já disponível em RTX 50, quais jogos seguem apenas anunciados e por que suporte do jogo não é igual ao suporte da sua placa.",
  alternates: {
    canonical: "/pt/dlss-5-jogos",
    languages: {
      en: "https://www.dlss5.net/dlss-5-games",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-jogos",
    },
  },
  openGraph: {
    title: "Jogos com DLSS 5: NBA 2K27 disponível e status por título",
    description:
      "Veja NBA 2K27 com DLSS 5 já disponível em RTX 50, quais jogos seguem apenas anunciados e por que suporte do jogo não é igual ao suporte da sua placa.",
    url: "https://www.dlss5.net/pt/dlss-5-jogos",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Jogos com DLSS 5: NBA 2K27 disponível e status por título",
    description:
      "Veja NBA 2K27 com DLSS 5 já disponível em RTX 50, quais jogos seguem apenas anunciados e por que suporte do jogo não é igual ao suporte da sua placa.",
  },
};

const NVIDIA_ANNOUNCEMENT = "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games";
const NBA_SUPPORT = "https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5";
const NBA_DRIVER = "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/";

const recentlyCheckedGames = ["NBA 2K27", "Starfield", "Resident Evil Requiem", "Assassin's Creed Shadows"];

const announcedGames = [
  "NBA 2K27",
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
      "NBA 2K27 já está disponível com DLSS 5 em GPUs GeForce RTX 50 desktop e notebook. A NVIDIA também anunciou um grupo inicial de jogos com DLSS 5, incluindo Starfield, Resident Evil Requiem, Assassin's Creed Shadows, Hogwarts Legacy, Phantom Blade Zero e Delta Force. Para esses outros jogos, ainda é preciso esperar notas de patch e configurações visíveis.",
  },
  {
    question: "DLSS 5 já está disponível nesses jogos?",
    answer:
      "Sim, em NBA 2K27 com GPU RTX 50 compatível. Nos demais títulos anunciados, trate como anunciado ou pendente de verificação até aparecerem patch notes, driver e opção de menu.",
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
            NBA 2K27 e três jogos anunciados revisados em 1 de outubro de 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Jogos com DLSS 5: NBA 2K27 disponível e status por título
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta página separa jogo disponível, jogo anunciado, patch confirmado e suporte
            da sua placa. Essa distinção é importante porque muita busca por &quot;jogos DLSS
            5&quot; mistura três respostas diferentes.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Resposta rápida</h2>
          <p className="text-foreground/80 leading-relaxed">
            NBA 2K27 já está disponível com DLSS 5 em placas GeForce RTX 50 desktop e
            notebook, com driver 616.64 WHQL e opção DLSS Neural Rendering em Features → Video Settings. Os outros jogos da lista continuam exigindo prova por patch antes de
            serem marcados como disponíveis.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Jogos com DLSS 5: disponíveis e anunciados</h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            A plataforma abaixo se refere ao DLSS 5, não a todas as versões do jogo.
            Starfield, Resident Evil Requiem e Assassin&apos;s Creed Shadows foram
            rechecados em 1 de outubro: encontramos os anúncios oficiais, mas nenhuma
            instrução pública de ativação do DLSS 5 nas fontes consultadas. Isso não prova
            que não exista uma atualização fora dessas fontes. Os demais anúncios mantêm
            a checagem de 5 de setembro; a data não é uma previsão de lançamento.
          </p>
          <p className="mb-2 text-sm text-muted-foreground">Deslize na horizontal para ver plataforma, driver e fontes. No teclado, coloque o foco na tabela e use as setas.</p>
          <div className="overflow-x-auto rounded-lg border border-border" tabIndex={0} role="region" aria-label="Tabela de jogos DLSS 5, role na horizontal para ver os detalhes">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th scope="col" className="sticky left-0 z-10 bg-background px-4 py-3 text-left font-semibold">Jogo</th>
                  <th className="px-4 py-3 text-left font-semibold">Status atual</th>
                  <th className="px-4 py-3 text-left font-semibold">Plataforma / GPU</th>
                  <th className="px-4 py-3 text-left font-semibold">Patch / driver</th>
                  <th className="px-4 py-3 text-left font-semibold">Fonte / verificação</th>
                </tr>
              </thead>
              <tbody>
                {announcedGames.map((game, index) => (
                  <tr
                    key={game}
                    className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="sticky left-0 z-10 bg-background px-4 py-3 font-medium">{game}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full border px-2.5 py-1 text-xs ${game === "NBA 2K27" ? "border-green-500/30 bg-green-500/10 text-green-300" : "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"}`}>
                        {game === "NBA 2K27" ? "Disponível em RTX 50" : recentlyCheckedGames.includes(game) ? "Anunciado; ativação não verificada" : "Anunciado"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {game === "NBA 2K27" ? "PC local: RTX 50 desktop/notebook. GeForce NOW depende do plano, região e servidor." : "Integração para PC anunciada; requisitos finais de GPU por jogo ainda não verificados."}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {game === "NBA 2K27"
                        ? "Driver de lançamento 616.64 WHQL; atualize o jogo pela loja. A 2K não especifica um número obrigatório de build no guia."
                        : "Patch público com Neural Rendering e driver para este jogo ainda não verificados; anúncio não confirma disponibilidade."}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      <a href={game === "NBA 2K27" ? NBA_SUPPORT : NVIDIA_ANNOUNCEMENT} className="text-blue-400 hover:underline">{game === "NBA 2K27" ? "Guia oficial 2K" : "Anúncio NVIDIA"}</a>
                      {game === "NBA 2K27" && <> · <a href={NBA_DRIVER} className="text-blue-400 hover:underline">Driver</a></>}
                      <p className="mt-1"><time dateTime={recentlyCheckedGames.includes(game) ? "2026-10-01" : "2026-09-05"}>{recentlyCheckedGames.includes(game) ? "1 out. 2026" : "5 set. 2026"}</time></p>
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
              href="/games/nba-2k27-dlss-5"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Guia do NBA 2K27</div>
              <p className="text-sm text-muted-foreground">
                Veja driver, caminho do menu, função do F9, RTX 40 e GeForce NOW no guia em inglês.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-quais-placas"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Placas compatíveis</div>
              <p className="text-sm text-muted-foreground">
                Confirme se sua GPU entra no grupo confirmado, planejado, sem suporte oficial ou sem DLSS.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              anúncio oficial do DLSS 5
            </a>{" "}
            e a{" "}
            <a
              href="https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/"
              className="text-blue-400 hover:underline"
            >
              nota do driver do NBA 2K27
            </a>{" "}
            como base; evita tratar vídeos de demonstração
            como comportamento final de cada jogo.
          </p>
        </section>
        <ArticleTrustBlock locale="pt" reviewedAt="2026-10-01" />
      </main>
    </>
  );
}
