import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const title = "Como baixar e ativar o DLSS 5: driver, placa e jogos";
const description = "Saiba onde baixar o driver oficial e como ativar o DLSS 5. Confira placa, jogo e atualização, encontre Neural Rendering e entenda as opções ausentes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/pt/como-ativar-dlss-5",
    languages: { en: "https://www.dlss5.net/dlss-5-download", "pt-BR": "https://www.dlss5.net/pt/como-ativar-dlss-5" },
  },
  openGraph: { title, description, type: "article", locale: "pt_BR", url: "https://www.dlss5.net/pt/como-ativar-dlss-5" },
  twitter: { card: "summary", title, description },
};

export default function ComoAtivarDlss5Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Caminho de navegação" className="text-sm text-muted-foreground mb-6">
        <Link href="/pt" className="hover:text-foreground">DLSS 5 Checker</Link> / Baixar e ativar
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Como baixar e ativar o DLSS 5</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Baixe o driver pela NVIDIA e obtenha a integração do DLSS 5 pela atualização de um jogo compatível.
          Para usar o recurso oficialmente no próprio computador, você precisa hoje de uma RTX 50 de desktop ou notebook.
          NBA 2K27 é um título com disponibilidade verificada. Não existe um instalador oficial universal que adicione
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
          de que continua sendo o driver mais recente. Consulte as notas atuais para sua placa antes de instalar um pacote antigo encontrado na busca.
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
      <ArticleTrustBlock locale="pt" reviewedAt="2026-10-01" />
    </main>
  );
}
