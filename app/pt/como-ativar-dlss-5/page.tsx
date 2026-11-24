import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import VideoEmbed from "@/components/VideoEmbed";
import { OG_IMAGE_PT } from "@/lib/og-image";

const title = "Como baixar e ativar o DLSS 5: driver, placa e jogos";
const description = "Saiba onde baixar o driver oficial e como ativar o DLSS 5. Confira placa, jogo e atualização, encontre Neural Rendering e entenda as opções ausentes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/pt/como-ativar-dlss-5",
    languages: {
      en: "https://www.dlss5.net/dlss-5-download",
      "pt-BR": "https://www.dlss5.net/pt/como-ativar-dlss-5",
      de: "https://www.dlss5.net/de/dlss-5-aktivieren",
      "x-default": "https://www.dlss5.net/dlss-5-download",
    },
  },
  openGraph: { images: [OG_IMAGE_PT], title, description, type: "article", locale: "pt_BR", url: "https://www.dlss5.net/pt/como-ativar-dlss-5" },
  twitter: { card: "summary", title, description },
};

const REVIEWED = "2026-11-24";

const jogos = [
  { jogo: "NBA 2K27", href: "/games/nba-2k27-dlss-5", desde: "3 de setembro de 2026", menu: "Features → Video Settings → DLSS Neural Rendering", atalho: "F9", driver: "616.64 WHQL ou mais novo" },
  { jogo: "Hogwarts Legacy", href: "/games/hogwarts-legacy-dlss-5", desde: "5 de novembro de 2026", menu: "Game Settings → Display Settings → Upscale Type: NVIDIA DLSS → Neural Rendering", atalho: "Shift+Alt+B", driver: "621.14 WHQL ou mais novo" },
  { jogo: "War Thunder", desde: "12 de novembro de 2026", menu: "Atualize para o cliente Eagle's Shadow e procure Neural Rendering nas opções gráficas", atalho: "Não documentado", driver: "Driver Game Ready atual" },
  { jogo: "Where Winds Meet", desde: "23 de novembro de 2026 (24 fora da América do Norte)", menu: "Atualize o jogo e ative Neural Rendering nas opções gráficas", atalho: "Não documentado", driver: "621.24 WHQL ou mais novo" },
];

const problemas = [
  { sintoma: "A opção Neural Rendering não aparece", solucao: "O jogo ainda não recebeu o DLSS 5, a atualização não terminou ou o PC não tem RTX 50 / RTX Spark. Confira esses três pontos antes de qualquer outra coisa." },
  { sintoma: "Aparece, mas está cinza (desabilitada) numa RTX 50", solucao: "Em alguns jogos o Neural Rendering é uma subopção do DLSS: primeiro escolha NVIDIA DLSS como upscaler (no Hogwarts Legacy, Upscale Type). Depois atualize o driver e reinicie o jogo." },
  { sintoma: "Cinza num notebook gamer", solucao: "O jogo pode estar rodando no vídeo integrado. Em Configurações do Windows → Sistema → Tela → Gráficos, defina o jogo como Alto desempenho, ou ative o modo de GPU dedicada do notebook, e abra o jogo de novo." },
  { sintoma: "Ligou, mas o FPS caiu", solucao: "É esperado: o Neural Rendering consome GPU. Mantenha-o ligado e baixe o Super Resolution para Equilibrado ou Desempenho, ou ative a geração de quadros se a sua placa tiver." },
  { sintoma: "Rostos ou materiais parecem estranhos", solucao: "Compare a mesma cena com o atalho do jogo (F9 no NBA 2K27, Shift+Alt+B no Hogwarts Legacy). O efeito é opcional e desligá-lo não muda as outras opções de DLSS." },
];

const faqItems = [
  {
    question: "Existe download do DLSS 5?",
    answer:
      "Não existe um instalador separado. O DLSS 5 chega com um driver Game Ready atual da NVIDIA e com a atualização de um jogo que já tem o recurso, como NBA 2K27, Hogwarts Legacy ou War Thunder. Um site que oferece \"DLSS 5 para baixar\" não é a NVIDIA.",
  },
  {
    question: "Tem DLSS 5 para celular ou APK para Android?",
    answer:
      "Não. O DLSS 5 roda só em placas NVIDIA RTX 50 dentro de jogos de PC com Windows. Um arquivo chamado DLSS 5 APK não é da NVIDIA e não deve ser instalado. No celular, o único jeito oficial de ver o DLSS 5 é jogar pela nuvem com o GeForce NOW Ultimate.",
  },
  {
    question: "O PS5 ou o PS5 Pro tem DLSS 5?",
    answer:
      "Não. PS5 e PS5 Pro usam gráficos AMD, e nenhuma versão do DLSS roda neles. O PS5 Pro tem seu próprio upscaler, o PSSR, que foi melhorado em 2026, mas ele só aumenta a resolução; não muda iluminação e materiais como o DLSS 5.",
  },
  {
    question: "O Nintendo Switch 2 tem DLSS 5?",
    answer:
      "Não. O Switch 2 usa um processador NVIDIA e os jogos podem usar o upscaling DLSS, mas nem a Nintendo nem a NVIDIA anunciaram o DLSS 5 Neural Rendering para o console. Os vídeos de Mario com DLSS 5 eram o jogo emulado em um PC com RTX 5060 Ti.",
  },
  {
    question: "Preciso do NVIDIA App para usar o DLSS 5?",
    answer:
      "Não. O NVIDIA App facilita instalar o driver, mas você também pode baixá-lo em nvidia.com. O DLSS 5 é ligado dentro de cada jogo, não no NVIDIA App.",
  },
];

export default function ComoAtivarDlss5Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "pt-BR",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Caminho de navegação" className="text-sm text-muted-foreground mb-6">
        <Link href="/pt" className="hover:text-foreground">DLSS 5 Checker</Link> / Baixar e ativar
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Como baixar e ativar o DLSS 5</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Baixe o driver pela NVIDIA e obtenha a integração do DLSS 5 pela atualização de um jogo compatível.
          Para usar o recurso oficialmente no próprio computador, você precisa hoje de uma RTX 50 de desktop ou notebook, ou de um notebook RTX Spark.
          NBA 2K27, Hogwarts Legacy, War Thunder e Where Winds Meet já têm o recurso.
          Não existe um instalador oficial universal que adicione
          Neural Rendering a qualquer jogo. Este site é um guia independente, não um distribuidor de drivers.
        </p>
      </header>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Onde baixar com a origem correta</h2>
        <p>
          Use o <a href="https://www.nvidia.com/en-us/software/nvidia-app/" className="text-blue-400 hover:underline">NVIDIA App</a> para
          instalar o driver Game Ready compatível atual. Também é possível selecionar a placa e o sistema operacional na{" "}
          <a href="https://www.nvidia.com/en-us/drivers/" className="text-blue-400 hover:underline">página oficial de drivers</a>.
          Atualize o jogo pela loja em que você o comprou. Instalar um driver não cria uma integração que o desenvolvedor ainda não lançou.
        </p>
        <p>
          O <a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/" className="text-blue-400 hover:underline">guia de lançamento da NVIDIA</a> indica
          o 616.64 WHQL para a estreia no NBA 2K27. Esse número é uma referência do lançamento, não uma afirmação
          de que continua sendo o driver mais recente. O Hogwarts Legacy pede o 621.14 WHQL, e o mais recente que encontramos em
          18 de novembro de 2026 é o <a href="https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/" className="text-blue-400 hover:underline">621.24 WHQL</a> (11 de novembro), que prepara o PC para o Where Winds Meet.
          Consulte as notas atuais para sua placa antes de instalar um pacote antigo encontrado na busca.
        </p>
        <p>
          <strong>Windows 10:</strong> a NVIDIA diz que outubro de 2026 traz o último driver Game Ready para Windows 10.
          A partir de novembro, novos drivers Game Ready e Studio exigem Windows 11. O modelo de DLSS 5 mais rápido de
          outubro não precisa de download separado: ele chegou com a atualização do NBA 2K27 em 16 de outubro.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Confira placa, jogo e atualização</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Placa de vídeo:</strong> identifique o modelo exato, inclusive a versão Laptop GPU. RTX 50 tem suporte oficial; RTX 40 está planejada, sem data publicada. RTX 20/30, GTX, AMD e Intel não têm suporte oficial local atual. Consulte a <Link href="/pt/dlss-5-quais-placas" className="text-blue-400 hover:underline">lista de placas</Link>.</li>
          <li><strong>Jogo:</strong> confirme que a integração já foi lançada. Um anúncio ou vídeo com mod não basta. A <Link href="/pt/dlss-5-jogos" className="text-blue-400 hover:underline">lista de jogos</Link> separa disponibilidade de suporte anunciado.</li>
          <li><strong>Versões:</strong> conclua a instalação do driver e a atualização do jogo. Reinicie se o instalador solicitar e abra o jogo novamente. Anote o driver e a versão do jogo para um eventual atendimento de suporte.</li>
        </ol>
        <p>
          Um processador AMD Ryzen não impede o uso: o que importa nesta verificação é a placa de vídeo.
          Da mesma forma, ter uma GeForce RTX não significa que todos os recursos DLSS estão disponíveis naquela geração.
        </p>
      </section>

      <section id="jogos" className="mb-10 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-3">Onde ligar o DLSS 5 em cada jogo</h2>
        <p className="mb-4 leading-relaxed text-foreground/80">
          Cada jogo coloca a opção num lugar diferente. Os nomes abaixo são os do menu em inglês; em português a tradução pode variar.
          Fontes: artigos da NVIDIA sobre <a href="https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/" className="text-blue-400 hover:underline">Hogwarts Legacy</a> e{" "}
          <a href="https://www.nvidia.com/en-us/geforce/news/war-thunder-dlss-5-3d-guided-neural-rendering-out-now/" className="text-blue-400 hover:underline">War Thunder</a> e instruções de cada editora.
        </p>
        <div className="space-y-3">
          {jogos.map((g) => (
            <div key={g.jogo} className="rounded-lg border border-border p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {g.href ? (
                    <Link href={g.href} hrefLang="en" className="text-blue-400 hover:underline">
                      {g.jogo}
                    </Link>
                  ) : (
                    g.jogo
                  )}
                </h3>
                <span className="text-xs text-muted-foreground">{g.desde}</span>
              </div>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                <dt className="text-muted-foreground">Menu</dt><dd>{g.menu}</dd>
                <dt className="text-muted-foreground">Atalho</dt><dd>{g.atalho}</dd>
                <dt className="text-muted-foreground">Driver</dt><dd>{g.driver}</dd>
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Lista completa de jogos anunciados: <Link href="/pt/dlss-5-jogos" className="text-blue-400 hover:underline">jogos com DLSS 5</Link>.
        </p>
      </section>

      <VideoEmbed
        id="GPCM-PHjmWw"
        title="Hogwarts Legacy | DLSS 5 Launch Trailer"
        channel="NVIDIA GeForce"
        locale="pt"
        caption="Trailer oficial da NVIDIA (em inglês): mostra o tipo de mudança de iluminação e materiais que você deve notar ao ligar o Neural Rendering."
      />

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Como encontrar a opção no NBA 2K27</h2>
        <p>
          Procure <strong>DLSS Neural Rendering</strong>, nome usado no menu.
          A <a href="https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5" className="text-blue-400 hover:underline">documentação da 2K</a> orienta
          abrir Features → Video Settings. Esses são os nomes em inglês; a tradução exibida pode variar conforme o idioma do jogo.
          Super Resolution, Frame Generation e Reflex têm controles separados.
        </p>
        <p>
          O <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">guia específico do NBA 2K27, em inglês</Link> reúne
          o caminho completo, a alternância por F9 e as verificações para opção ausente ou desabilitada.
          Antes de procurar uma correção, confirme os três requisitos acima. Ver uma opção de Super Resolution
          não comprova suporte ao Neural Rendering; substituir DLLs também não equivale a habilitar uma integração oficial.
        </p>
        <p>
          Para decidir se vale a pena manter o efeito, compare a mesma cena com ele ligado e desligado,
          sem mudar resolução e demais configurações. A 2K permite desativá-lo se a queda de desempenho atrapalhar a experiência.
          Este guia não apresenta benchmark próprio nem promete uma taxa de quadros para sua máquina.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">Placas antigas, nuvem e mods</h2>
        <p>
          A expansão para RTX 40 aparece no <a href="https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/" className="text-blue-400 hover:underline">FAQ da NVIDIA</a>,
          mas ainda não tem data pública. Nenhum download transforma esse plano em suporte oficial disponível hoje.
          Injetores e pacotes comunitários são experimentos separados: não os testamos e não hospedamos esses binários.
        </p>
        <p>
          Uma sessão elegível do GeForce NOW pode oferecer o recurso sem RTX 50 local, mas depende de Ultimate,
          jogo compatível, servidor RTX 5080 e disponibilidade do operador na região.
          Veja as condições no <Link href="/pt/dlss-5-amd" className="text-blue-400 hover:underline">guia de AMD e acesso pela nuvem</Link>.
          Para entender por que Neural Rendering e geração de quadros são opções distintas, consulte{" "}
          <Link href="/pt/dlss-5-vs-dlss-4-5" className="text-blue-400 hover:underline">DLSS 5 vs DLSS 4.5</Link>.
        </p>
      </section>
      <section id="problemas" className="mb-10 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-3">DLSS 5 não aparece ou está cinza? Soluções por sintoma</h2>
        <div className="space-y-3">
          {problemas.map((p) => (
            <details key={p.sintoma} className="group rounded-lg border border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-semibold hover:bg-muted/30 [&::-webkit-details-marker]:hidden">
                <span>{p.sintoma}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-foreground/80">{p.solucao}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="console-celular" className="mb-10 scroll-mt-24 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">DLSS 5 no PS5, Xbox, Switch 2, celular ou Mac?</h2>
        <p>
          Nenhum console, celular ou Mac roda o DLSS 5 sozinho. O recurso é calculado por uma placa NVIDIA RTX 50,
          seja no seu PC, seja num servidor da NVIDIA.
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>PS5 e PS5 Pro:</strong> usam gráficos AMD, então não rodam nenhuma versão do DLSS. O PS5 Pro tem o PSSR, upscaler da Sony melhorado em 2026 com base no trabalho com a AMD (<a href="https://tbreak.com/ps5-pro-pssr-upgrade-resident-evil-requiem/" className="text-blue-400 hover:underline">tbreak</a>). Ele aumenta a resolução, mas não muda a iluminação como o DLSS 5.</li>
          <li><strong>Xbox Series X|S:</strong> também usa gráficos AMD. Sem DLSS.</li>
          <li><strong>Nintendo Switch 2:</strong> tem processador NVIDIA e os jogos podem usar o upscaling DLSS (<a href="https://blogs.nvidia.com/blog/nintendo-switch-2/" className="text-blue-400 hover:underline">blog da NVIDIA</a>), mas não há DLSS 5 anunciado para o console.</li>
          <li><strong>Celular, tablet, Mac, Steam Deck e Smart TV:</strong> só pela nuvem, com o GeForce NOW Ultimate.</li>
        </ul>
        <p>
          <strong>E os vídeos de &quot;DLSS 5 no PS5&quot;?</strong> Eles mostram jogos de PS5 rodando num PC com Windows, por
          ports feitos por fãs ou emuladores, com mods que injetam o efeito. O MakeUseOf testou assim o Bloodborne e achou o
          resultado pesado e com visual &quot;homogeneizado&quot; (<a href="https://www.makeuseof.com/dlss-5-already-works-on-ps5-games-but-the-results-arent-very-impressive/" className="text-blue-400 hover:underline">MakeUseOf</a>).
          O console em si não roda DLSS 5.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Como jogar com DLSS 5 pela nuvem</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Assine o GeForce NOW <strong>Ultimate</strong>; só ele usa servidores RTX 5080. No Brasil, o serviço é operado por parceiro, então confirme se o operador oferece RTX 5080 e DLSS 5.</li>
          <li>Tenha o jogo na versão de PC (Steam ou Epic). A versão de PS5 não vale.</li>
          <li>Conexão: a NVIDIA pede 25 Mbps para 1080p a 60 FPS e menos de 80 ms de latência até o data center (<a href="https://www.nvidia.com/en-us/geforce-now/system-reqs/" className="text-blue-400 hover:underline">requisitos</a>).</li>
          <li>No jogo, ligue o Neural Rendering no mesmo menu indicado na <a href="#jogos" className="text-blue-400 hover:underline">lista de jogos acima</a>.</li>
        </ol>
        <p className="text-sm text-muted-foreground">
          Guia completo em inglês: <Link href="/dlss-5-ps5" lang="en" className="text-blue-400 hover:underline">DLSS 5 on PS5, Xbox, Switch 2, Mac and phones</Link>.
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
      <ArticleTrustBlock locale="pt" reviewedAt={REVIEWED} />
    </main>
    </>
  );
}
