import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.dlss5.net/pt/dlss-4-5-quais-placas";
const META_TITLE = "DLSS 4.5: Quais Placas de Vídeo São Compatíveis?";
const META_DESCRIPTION =
  "Veja quais placas de vídeo rodam DLSS 4.5 nas séries RTX 20, 30, 40 e 50. Compare Super Resolution, Ray Reconstruction, Frame Generation e MFG.";
const NVIDIA_DLSS_BR = "https://www.nvidia.com/pt-br/geforce/technologies/dlss/";
const NVIDIA_DLSS_45_BR =
  "https://www.nvidia.com/pt-br/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/";
const NVIDIA_RR_NEWS =
  "https://www.nvidia.com/en-us/geforce/news/gamescom-2026-nvidia-geforce-rtx-dlss-4-5-announcements/";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/pt/dlss-4-5-quais-placas",
    languages: {
      en: "https://www.dlss5.net/dlss-4-5-supported-cards",
      "pt-BR": PAGE_URL,
    },
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "article",
    locale: "pt_BR",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const matrixRows = [
  {
    serie: "GeForce RTX Série 50",
    exemplos: "RTX 5050, 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090 e versões para notebook",
    sr: "Sim, Modelos M/L/K",
    rr: "Sim",
    fg: "Sim",
    mfg: "Sim, inclusive Dynamic MFG",
    resumo: "Pacote completo do DLSS 4.5",
  },
  {
    serie: "GeForce RTX Série 40",
    exemplos: "RTX 4050, 4060, 4070, 4080, 4090 e versões para notebook",
    sr: "Sim, Modelos M/L/K",
    rr: "Sim",
    fg: "Sim",
    mfg: "Não",
    resumo: "Reconstrução de imagem e Frame Generation",
  },
  {
    serie: "GeForce RTX Série 30",
    exemplos: "RTX 3050, 3060, 3070, 3080, 3090, modelos Ti e notebooks",
    sr: "Sim, com custo maior nos Modelos M/L",
    rr: "Sim",
    fg: "Não",
    mfg: "Não",
    resumo: "Super Resolution, DLAA e Ray Reconstruction",
  },
  {
    serie: "GeForce RTX Série 20",
    exemplos: "RTX 2060, 2070, 2080, versões Super, 2080 Ti e notebooks",
    sr: "Sim, com custo maior nos Modelos M/L",
    rr: "Sim",
    fg: "Não",
    mfg: "Não",
    resumo: "Reconstrução de imagem com limites de desempenho",
  },
];

const faqItems = [
  {
    question: "Quais placas de vídeo são compatíveis com DLSS 4.5?",
    answer:
      "As placas GeForce RTX das séries 20, 30, 40 e 50 são compatíveis com o caminho de Super Resolution, DLAA e Ray Reconstruction do DLSS 4.5 em games com suporte. Frame Generation exige uma RTX 40 ou 50. Multi Frame Generation, Dynamic MFG e o modo 6X ficam restritos à Série RTX 50.",
  },
  {
    question: "A RTX 4060 roda DLSS 4.5?",
    answer:
      "Sim. A RTX 4060 pode usar os modelos compatíveis de Super Resolution, Ray Reconstruction, DLAA e Frame Generation. Ela não oferece Multi Frame Generation nem Dynamic MFG, recursos exclusivos da Série RTX 50.",
  },
  {
    question: "A RTX 3070 tem suporte ao DLSS 4.5?",
    answer:
      "Sim, dentro dos limites da Série RTX 30. A RTX 3070 pode usar Super Resolution, DLAA e Ray Reconstruction quando o game ou um perfil compatível do NVIDIA App disponibiliza o recurso. Ela não recebe Frame Generation nem MFG.",
  },
  {
    question: "A RTX 4050 de notebook é compatível?",
    answer:
      "Sim. A RTX 4050 Laptop GPU pertence à Série RTX 40 e pode usar Super Resolution, Ray Reconstruction, DLAA e Frame Generation em games compatíveis. O desempenho varia conforme o limite de potência e a refrigeração de cada notebook.",
  },
  {
    question: "Preciso instalar o NVIDIA App para usar DLSS 4.5?",
    answer:
      "Não em todo game. Quando o título recebe o modelo de forma nativa, a opção aparece nas configurações do próprio jogo. O NVIDIA App é necessário para aplicar um override compatível ou acessar recursos em Early Access oferecidos pelo aplicativo.",
  },
  {
    question: "DLSS 4.5 e DLSS 5 são a mesma coisa?",
    answer:
      "Não. O DLSS 4.5 reúne recursos atuais de reconstrução de imagem e geração de quadros. O DLSS 5 Neural Rendering foi anunciado separadamente para o segundo semestre de 2026 e trabalha com renderização neural de iluminação e materiais.",
  },
];

export default function Dlss45QuaisPlacasPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "DLSS 5 Checker", item: "https://www.dlss5.net/pt" },
      { "@type": "ListItem", position: 2, name: "DLSS 4.5: quais placas", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "DLSS 4.5: quais placas de vídeo são compatíveis?",
    url: PAGE_URL,
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: "Editor do DLSS 5 Checker" },
    publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/pt" className="hover:text-foreground">DLSS 5 Checker Brasil</Link>
          <span className="mx-2">/</span>
          <span>DLSS 4.5: quais placas</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">Guia de compatibilidade · Atualizado em 26 de agosto de 2026</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS 4.5: Quais Placas de Vídeo São Compatíveis?
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            O DLSS 4.5 funciona em todas as gerações GeForce RTX, mas cada série recebe um
            conjunto diferente de recursos. Veja o que roda nas RTX 20, 30, 40 e 50, quais
            opções aparecem em cada placa e como conferir o suporte no seu game sem confundir
            Super Resolution, Frame Generation e Multi Frame Generation.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Resposta rápida: quais placas rodam DLSS 4.5?</h2>
          <p className="leading-relaxed text-foreground/80">
            As placas GeForce RTX das séries 20, 30, 40 e 50 podem usar o DLSS 4.5 Super
            Resolution, o DLAA e o Ray Reconstruction em games compatíveis. As séries RTX 40
            e RTX 50 também contam com Frame Generation. Para ativar Multi Frame Generation,
            Dynamic Multi Frame Generation ou o modo 6X, é preciso ter uma placa da Série RTX 50.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Portanto, dizer apenas que uma placa “tem DLSS 4.5” não resolve a dúvida. Uma RTX
            3070 consegue aproveitar os novos modelos de reconstrução, mas não ganha geração de
            quadros. A RTX 4060 pode usar Frame Generation, porém fica sem MFG. Já uma RTX 5070
            ou superior entra no pacote completo, desde que o game, o driver e o perfil do NVIDIA
            App também ofereçam o recurso escolhido.
          </p>
        </section>

        <figure className="mb-10">
          <figcaption className="mb-3 text-2xl font-bold">Tabela de placas compatíveis com DLSS 4.5</figcaption>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3">Série</th><th className="p-3">Exemplos</th>
                  <th className="p-3">Super Resolution</th><th className="p-3">Ray Reconstruction</th>
                  <th className="p-3">Frame Generation</th><th className="p-3">Multi Frame Generation</th>
                  <th className="p-3">Resumo</th>
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row) => (
                  <tr key={row.serie} className="border-t border-border align-top">
                    <th className="p-3 text-left font-semibold">{row.serie}</th>
                    <td className="p-3 text-muted-foreground">{row.exemplos}</td>
                    <td className="p-3 text-green-400">{row.sr}</td>
                    <td className="p-3 text-green-400">{row.rr}</td>
                    <td className="p-3">{row.fg}</td>
                    <td className="p-3">{row.mfg}</td>
                    <td className="p-3 text-muted-foreground">{row.resumo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A tabela mostra a compatibilidade do hardware. A opção só aparece quando o game
            implementa o recurso ou quando existe um override compatível no NVIDIA App.
          </p>
        </figure>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Por que o suporte muda de uma série RTX para outra?</h2>
          <p className="leading-relaxed">
            DLSS não é um único botão. Super Resolution renderiza o game em uma resolução interna
            menor e reconstrói a imagem na resolução de saída. DLAA usa o modelo em resolução nativa
            para melhorar o serrilhado. Ray Reconstruction substitui denoisers tradicionais em cenas
            com ray tracing ou path tracing. Frame Generation cria um quadro adicional, enquanto o
            Multi Frame Generation pode gerar vários quadros entre dois renderizados pelo game.
          </p>
          <p className="leading-relaxed">
            Como cada tecnologia usa partes diferentes do hardware, a NVIDIA mantém uma matriz por
            geração. As RTX 20 e 30 possuem Tensor Cores e rodam os recursos de reconstrução, mas não
            têm o caminho do Frame Generation. A Série RTX 40 adiciona esse recurso. A Série RTX 50
            amplia o processo com MFG, Dynamic MFG e multiplicadores maiores.
          </p>
          <p className="leading-relaxed">
            Isso também explica por que uma atualização de driver não transforma uma RTX 3060 em
            uma placa com Frame Generation. O driver pode levar um modelo mais novo de Super
            Resolution a um perfil compatível, mas não cria uma capacidade de hardware ausente. Para
            saber se o upgrade vale a pena, escolha primeiro o recurso que você realmente quer usar.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">Série RTX 50: experiência completa</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 5050, 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090 e suas versões para notebook
                entram no grupo com todos os recursos do DLSS 4.5. Isso inclui Super Resolution,
                DLAA, Ray Reconstruction, Frame Generation, MFG e Dynamic MFG.
              </p>
              <p>
                O pacote completo não significa que o maior multiplicador seja sempre a melhor
                escolha. MFG funciona melhor com uma taxa de quadros base estável e um monitor com
                alta taxa de atualização. Em uma tela de 60 Hz, o ganho visual pode ser pequeno. Em
                240 Hz ou 360 Hz, há mais espaço para exibir os quadros adicionais.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">Série RTX 40: Frame Generation sem MFG</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                Placas como RTX 4050, 4060, 4070, 4080 e 4090 podem usar os modelos de reconstrução
                do DLSS 4.5, Ray Reconstruction, DLAA e Frame Generation. Elas não oferecem MFG nem
                Dynamic MFG, que continuam exclusivos da geração RTX 50.
              </p>
              <p>
                Para quem já tem uma RTX 40, isso não torna a placa ultrapassada. Em games compatíveis,
                a geração pode receber um modelo aprimorado de Frame Generation e os novos modelos de
                Super Resolution. Antes de trocar de placa, compare o desempenho nativo, a quantidade
                de VRAM e os games que você joga com a vantagem real do MFG.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">Série RTX 30: DLSS 4.5 com limites claros</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 3050, 3060, 3070, 3080 e 3090 podem usar Super Resolution, DLAA e Ray
                Reconstruction quando o título oferece esses recursos. Nenhuma placa da Série RTX
                30 recebe Frame Generation, MFG ou Dynamic MFG.
              </p>
              <p>
                Os Modelos M e L do DLSS 4.5 têm custo proporcionalmente maior nessa geração, pois
                as RTX 30 não contam com a mesma aceleração FP8 nativa das placas mais novas. Na
                prática, o Modo Qualidade costuma ser um bom ponto de partida em 1440p. Em 4K, teste
                o Modo Desempenho e observe tanto o FPS quanto a estabilidade da imagem em movimento.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">Série RTX 20: compatível, mas sem folga</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 2060, 2070, 2080, versões Super e RTX 2080 Ti permanecem compatíveis com Super
                Resolution, DLAA e Ray Reconstruction. A geração não oferece Frame Generation e
                costuma ter menos margem para ray tracing pesado nos lançamentos atuais.
              </p>
              <p>
                O melhor caminho é partir de uma configuração que já entregue uma taxa de quadros
                aceitável. Ative somente os efeitos de ray tracing que façam diferença para você e,
                depois, escolha o modo de DLSS. Ray Reconstruction pode limpar reflexos e iluminação,
                mas não elimina o custo de calcular esses efeitos.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">O que são os Modelos M, L e K?</h2>
          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              A NVIDIA usa modelos diferentes conforme a faixa de resolução interna. O Modelo K
              atende os modos Qualidade, Balanceado e DLAA. O Modelo M é voltado ao Modo Desempenho.
              O Modelo L fica com o Ultra Desempenho, que parte de uma quantidade bem menor de pixels.
              Essa divisão ajuda a escolher o modelo adequado em vez de procurar apenas a letra mais nova.
            </p>
            <p className="leading-relaxed">
              Para jogar em 1080p, reduzir demais a resolução interna costuma prejudicar textos, fios,
              vegetação e detalhes finos. Comece pelo Modo Qualidade. Em 1440p, Qualidade ou Balanceado
              geralmente oferecem uma base mais limpa. Em 4K, o Modo Desempenho pode fazer sentido em
              um game pesado, principalmente com ray tracing, mas precisa ser comparado na mesma cena.
            </p>
            <p className="leading-relaxed">
              O Ultra Desempenho é mais apropriado para resolução de saída muito alta ou uma carga
              extrema de renderização. Usá-lo automaticamente em qualquer monitor pode aumentar
              cintilação e perda de detalhe. Faça o teste movimentando a câmera; uma captura parada
              não mostra ghosting, instabilidade temporal ou elementos que demoram a reaparecer.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Ray Reconstruction em agosto de 2026</h2>
          <div className="space-y-4 leading-relaxed text-foreground/80">
            <p>
              A NVIDIA anunciou o modelo de segunda geração do DLSS 4.5 Ray Reconstruction para
              todas as placas GeForce RTX. Em agosto de 2026, o acesso começou pelo canal Early
              Access do NVIDIA App, enquanto a distribuição regular foi indicada para setembro.
              Ter uma RTX compatível é necessário, mas o perfil do game também precisa aceitar o modelo.
            </p>
            <p>
              No NVIDIA App, o caminho divulgado passa por Configurações, Sobre e Early Access. No
              perfil do game, abra Gráficos, localize DLSS Override Model Presets, escolha Custom e
              selecione a recomendação de Ray Reconstruction quando ela estiver disponível. Os nomes
              podem aparecer em inglês no aplicativo mesmo com o Windows em português, por isso vale
              procurar também por “Graphics” e “Driver Settings”.
            </p>
            <p>
              Ray Reconstruction só tem função quando existe um sinal de ray tracing ou path tracing
              para reconstruir. Se todos os efeitos de iluminação por raios estiverem desligados, a
              ausência da opção pode ser normal. Ative o efeito suportado pelo game, reinicie o título
              quando solicitado e compare reflexos, sombras, partículas e iluminação com a câmera em movimento.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">Como ativar e conferir no seu PC</h2>
          <ol className="space-y-4 text-foreground/80">
            <li><strong className="text-foreground">1. Confira o modelo exato da placa.</strong> Abra o NVIDIA App ou o Gerenciador de Tarefas. Em notebook, anote também o limite de potência, pois duas RTX 4060 Laptop podem entregar resultados diferentes.</li>
            <li><strong className="text-foreground">2. Atualize pelos canais oficiais.</strong> Instale o driver Game Ready e o NVIDIA App atuais. Evite pacotes de terceiros que prometem liberar um recurso incompatível com a geração.</li>
            <li><strong className="text-foreground">3. Atualize o game.</strong> Leia as notas do patch e procure o nome exato da opção. Um game pode oferecer Super Resolution sem Ray Reconstruction ou Frame Generation.</li>
            <li><strong className="text-foreground">4. Veja o perfil no NVIDIA App.</strong> Overrides só aparecem para títulos reconhecidos e compatíveis. A falta do controle pode indicar perfil ausente, aplicativo antigo ou rollout ainda indisponível.</li>
            <li><strong className="text-foreground">5. Ajuste a taxa de quadros base.</strong> Reduza primeiro sombras, ray tracing ou outros itens pesados. Frame Generation e MFG deixam o movimento mais fluido, mas não corrigem uma resposta de comando lenta causada por um FPS base muito baixo.</li>
            <li><strong className="text-foreground">6. Teste com método.</strong> Use a mesma resolução, o mesmo trecho do game e a mesma câmera. Observe FPS, frametime, resposta dos controles e qualidade da imagem durante o movimento.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Por que a opção não aparece?</h2>
          <p className="leading-relaxed">
            Primeiro, confirme se a função pertence à geração da placa. RTX 3070 não mostra Frame
            Generation; RTX 4060 não mostra Multi Frame Generation. Nesses casos, reinstalar o
            driver não muda o resultado. Volte à tabela e procure o recurso específico, não apenas
            a marca DLSS 4.5.
          </p>
          <p className="leading-relaxed">
            Em seguida, verifique o próprio game. Alguns títulos exigem DirectX 12, agendamento de
            GPU com aceleração de hardware ou ray tracing ativo. Outros implementam somente parte do
            pacote. Também pode ser necessário reiniciar depois de mudar a opção, recompilar shaders
            ou abrir o game pelo executável reconhecido no perfil do NVIDIA App.
          </p>
          <p className="leading-relaxed">
            Por fim, remova modificações e trocas manuais de DLL durante o diagnóstico. Elas mudam as
            condições do teste, podem causar travamentos e, em games competitivos, criar problemas com
            o anti-cheat. Descubra primeiro se o caminho oficial funciona. Depois disso, qualquer teste
            adicional terá uma base limpa para comparação.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Vale trocar de placa por causa do DLSS 4.5?</h2>
          <p className="leading-relaxed">
            Se você já tem uma RTX 30 e joga bem com Super Resolution, a chegada do DLSS 4.5 não
            obriga uma troca. A placa continua compatível com reconstrução de imagem e pode receber
            Ray Reconstruction nos títulos suportados. Compare a melhora visual do modelo com o custo
            de desempenho e veja se a quantidade de VRAM ainda atende os games que você usa.
          </p>
          <p className="leading-relaxed">
            Uma RTX 40 faz sentido quando Frame Generation é importante e o restante do desempenho
            também acompanha sua resolução. Quem já possui uma RTX 4060 ou 4070 não deve concluir que
            perdeu todo o DLSS 4.5 por não ter MFG. A placa recebe uma parte ampla do pacote e pode
            entregar uma experiência boa em 1080p ou 1440p, conforme o modelo e o game.
          </p>
          <p className="leading-relaxed">
            A Série RTX 50 é a escolha necessária para quem exige Multi Frame Generation, Dynamic MFG
            ou 6X. Mesmo assim, coloque na conta o preço no Brasil, o consumo de energia, a fonte, o
            espaço no gabinete, a taxa de atualização do monitor e o FPS base dos seus jogos. Comprar
            uma placa mais cara para gerar quadros que a tela não consegue exibir é um upgrade mal aproveitado.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link href="/dlss-4-5-supported-cards" hrefLang="en" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Versão em inglês</div>
            <p className="text-sm text-muted-foreground">Consulte a página equivalente com os termos usados na documentação internacional.</p>
          </Link>
          <Link href="/pt/dlss-5-quais-placas" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Quais placas terão DLSS 5?</div>
            <p className="text-sm text-muted-foreground">Separe a compatibilidade atual do DLSS 4.5 das confirmações para Neural Rendering.</p>
          </Link>
          <Link href="/dlss-4-5-ray-reconstruction" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Ray Reconstruction em detalhes</div>
            <p className="text-sm text-muted-foreground">Veja jogos anunciados, melhorias de imagem e o passo a passo do novo modelo.</p>
          </Link>
          <Link href="/pt/dlss-5-vs-dlss-4-5" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5 vs DLSS 4.5</div>
            <p className="text-sm text-muted-foreground">Entenda o que já está disponível e o que pertence à próxima geração.</p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Fontes e método editorial</h2>
          <p>
            A matriz segue a página oficial de{" "}
            <a href={NVIDIA_DLSS_BR} rel="noreferrer" className="text-blue-400 hover:underline">tecnologias NVIDIA DLSS em português</a>,{" "}
            o anúncio brasileiro dos{" "}
            <a href={NVIDIA_DLSS_45_BR} rel="noreferrer" className="text-blue-400 hover:underline">modelos e recursos do DLSS 4.5</a>{" "}
            e a atualização oficial de{" "}
            <a href={NVIDIA_RR_NEWS} rel="noreferrer" className="text-blue-400 hover:underline">Ray Reconstruction na Gamescom 2026</a>.
            Publicado e conferido pelo Editor do DLSS 5 Checker em 26 de agosto de 2026. A
            compatibilidade da placa não garante o recurso em todos os games. Perfis, drivers e
            disponibilidade em Early Access podem mudar depois desta revisão.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Perguntas frequentes</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
