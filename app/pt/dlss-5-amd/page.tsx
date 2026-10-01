import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

const title = "DLSS 5 na AMD: suporte oficial, GeForce NOW e mods";
const description = "Radeon não tem suporte oficial local ao DLSS 5. Entenda as condições do GeForce NOW, os limites de mods experimentais e a diferença para FSR e XeSS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/pt/dlss-5-amd",
    languages: { en: "https://www.dlss5.net/dlss-5-amd", "pt-BR": "https://www.dlss5.net/pt/dlss-5-amd" },
  },
  openGraph: { title, description, type: "article", locale: "pt_BR", url: "https://www.dlss5.net/pt/dlss-5-amd" },
  twitter: { card: "summary", title, description },
};

export default function PtDlss5AmdPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Caminho de navegação" className="text-sm text-muted-foreground mb-6">
        <Link href="/pt" className="hover:text-foreground">DLSS 5 Checker</Link> / Suporte na AMD
      </nav>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">DLSS 5 funciona em placa AMD?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Placas AMD Radeon não têm suporte oficial local ao DLSS 5 Neural Rendering em 1º de outubro de 2026.
          O GeForce NOW pode executar o recurso remotamente em hardware NVIDIA, desde que a sessão seja elegível.
          Também existem projetos comunitários para AMD, mas não os testamos e eles não representam compatibilidade oficial.
          Se o seu computador combina processador Ryzen e placa RTX 50, a marca do processador não é a restrição.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Uso local, streaming e experimento são situações diferentes</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Formas de acesso ao DLSS 5 para usuários AMD</caption>
            <thead className="bg-muted/40"><tr><th scope="col" className="p-4 text-left">Caminho</th><th scope="col" className="p-4 text-left">Situação</th><th scope="col" className="p-4 text-left">O que significa</th></tr></thead>
            <tbody>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">Radeon local</th><td className="p-4">Sem suporte oficial</td><td className="p-4">Um driver NVIDIA não adiciona compatibilidade à Radeon.</td></tr>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">GeForce NOW</th><td className="p-4">Disponível com condições</td><td className="p-4">A GPU RTX do servidor renderiza; seu aparelho recebe o vídeo.</td></tr>
              <tr className="border-t border-border"><th scope="row" className="p-4 text-left">Mods comunitários</th><td className="p-4">Experimentais</td><td className="p-4">Dependem do projeto, modelo de GPU, jogo e versão.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">GeForce NOW: confira região, plano e servidor</h2>
        <p>
          O <a href="https://blogs.nvidia.com/blog/geforce-now-thursday-september-2026-games-list/" className="text-blue-400 hover:underline">anúncio de setembro da NVIDIA</a> confirma
          NBA 2K27 com Neural Rendering para membros Ultimate em regiões operadas pela NVIDIA, em sessões com servidor RTX 5080.
          Conseguir abrir o jogo no serviço não comprova, por si só, acesso ao DLSS 5 naquela sessão.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Identifique o operador e a oferta da sua região. O <a href="https://www.nvidia.com/en-us/geforce-now/faq/" className="text-blue-400 hover:underline">FAQ oficial</a> lista operação NVIDIA na América do Norte, Europa, Japão e Índia; outras regiões usam parceiros GeForce NOW Alliance.</li>
          <li>Confirme a disponibilidade de Ultimate e de servidores RTX 5080. Os parceiros Alliance anunciam a própria implantação. Um plano pago local, mesmo com nome parecido, não comprova acesso a esse recurso.</li>
          <li>Confira o jogo e a edição de loja aceitos na sua região. Para um título pago, você precisa da licença correspondente; a assinatura do streaming não inclui automaticamente a compra do jogo.</li>
          <li>Verifique aparelho e conexão nos <a href="https://www.nvidia.com/en-us/geforce-now/system-reqs/" className="text-blue-400 hover:underline">requisitos oficiais de streaming</a>. Confirme o hardware da sessão antes de procurar Neural Rendering no menu do jogo.</li>
        </ol>
        <p>
          No Brasil e em outros mercados atendidos por parceiros, consulte os anúncios de hardware e recursos
          do operador local. Uma disponibilidade anunciada para a operação NVIDIA na Europa não garante o mesmo
          serviço no Brasil. O streaming muda o lugar onde o jogo é processado; não instala DLSS localmente na Radeon.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">O que os vídeos com mods realmente comprovam</h2>
        <p>
          O <a href="https://github.com/TheAutomatic/dlss-5-amd-project" className="text-blue-400 hover:underline">projeto comunitário de TheAutomatic</a>,
          por exemplo, documenta integrações entre runtimes AMD e caminhos modificados do OptiScaler.
          As notas descrevem o trabalho dos autores, não um lançamento homologado pela NVIDIA ou pela desenvolvedora do jogo.
          Não reproduzimos a instalação, a qualidade de imagem nem o desempenho desse projeto em equipamento próprio.
        </p>
        <p>
          Antes de aplicar um resultado ao seu computador, compare modelo exato da Radeon, versão do jogo,
          API gráfica, runtime e versão do mod. Um vídeo de outra configuração não comprova sua taxa de quadros,
          estabilidade ou compatibilidade. Guarde uma cópia dos arquivos originais e siga as limitações do projeto;
          não presuma que a modificação é permitida em jogos online com anticheat.
        </p>
        <p>
          Não oferecemos instalador universal para AMD nem recomendamos pacotes redistribuídos sem origem verificável.
          O <a href="https://github.com/optiscaler/OptiScaler" className="text-blue-400 hover:underline">repositório original do OptiScaler</a> diferencia
          seus lançamentos dos aplicativos de gerenciamento de terceiros. Encontrar um nome conhecido em um botão de download não é suficiente para identificar a origem.
        </p>
      </section>

      <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
        <h2 className="text-2xl font-bold text-foreground">FSR e XeSS não são outro nome para DLSS 5</h2>
        <p>
          Para melhorar o desempenho na Radeon, comece pelas opções de upscaling e geração de quadros que o jogo
          e sua placa realmente oferecem. Avalie FSR ou um caminho XeSS disponível por esses recursos.
          A presença deles não comprova suporte ao Neural Rendering nem um resultado equivalente de iluminação e materiais.
          Veja a <Link href="/pt/dlss-5-vs-dlss-4-5" className="text-blue-400 hover:underline">diferença entre os recursos DLSS</Link> antes de escolher uma configuração.
        </p>
        <p>
          Para acesso oficial local, consulte a <Link href="/pt/dlss-5-quais-placas" className="text-blue-400 hover:underline">lista de placas</Link> e
          o <Link href="/pt/como-ativar-dlss-5" className="text-blue-400 hover:underline">guia para baixar e ativar</Link>.
          Se já tem hardware ou sessão de nuvem elegível, o <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">guia do NBA 2K27, em inglês</Link> explica os menus.
        </p>
      </section>
      <ArticleTrustBlock locale="pt" reviewedAt="2026-10-01" />
    </main>
  );
}
