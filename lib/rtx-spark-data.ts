import type { Metadata } from "next";

export type RtxSparkLocale = "en" | "pt";

export type RtxSparkRouteKey =
  | "hub"
  | "specs"
  | "laptops"
  | "vsApple"
  | "vsSnapdragon"
  | "localAi"
  | "gaming"
  | "releaseDate";

export type RtxSparkStatus = "confirmed" | "announced" | "expected" | "unknown";

export const RTX_SPARK_BASE_URL = "https://www.dlss5.net";

export const rtxSparkRoutes: Record<RtxSparkRouteKey, Record<RtxSparkLocale, string>> = {
  hub: {
    en: "/ai-pc/nvidia-rtx-spark",
    pt: "/pt/ai-pc/nvidia-rtx-spark",
  },
  specs: {
    en: "/ai-pc/nvidia-rtx-spark-specs",
    pt: "/pt/ai-pc/nvidia-rtx-spark-especificacoes",
  },
  laptops: {
    en: "/ai-pc/nvidia-rtx-spark-laptops",
    pt: "/pt/ai-pc/nvidia-rtx-spark-notebooks",
  },
  vsApple: {
    en: "/ai-pc/nvidia-rtx-spark-vs-apple-m5",
    pt: "/pt/ai-pc/nvidia-rtx-spark-vs-apple-m5",
  },
  vsSnapdragon: {
    en: "/ai-pc/nvidia-rtx-spark-vs-snapdragon-x",
    pt: "/pt/ai-pc/nvidia-rtx-spark-vs-snapdragon-x",
  },
  localAi: {
    en: "/ai-pc/nvidia-rtx-spark-for-local-ai",
    pt: "/pt/ai-pc/nvidia-rtx-spark-ia-local",
  },
  gaming: {
    en: "/ai-pc/nvidia-rtx-spark-gaming-performance",
    pt: "/pt/ai-pc/nvidia-rtx-spark-desempenho-jogos",
  },
  releaseDate: {
    en: "/ai-pc/nvidia-rtx-spark-release-date",
    pt: "/pt/ai-pc/nvidia-rtx-spark-data-lancamento",
  },
};

export const rtxSparkSources = {
  nvidiaProduct: {
    label: "NVIDIA RTX Spark product page",
    href: "https://www.nvidia.com/en-us/products/rtx-spark/",
  },
  nvidiaNews: {
    label: "NVIDIA Newsroom release",
    href: "https://nvidianews.nvidia.com/news/nvidia-microsoft-windows-pcs-agents-rtx-spark",
  },
  nvidiaIfa: {
    label: "NVIDIA IFA 2026 RTX Spark update",
    href: "https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark/",
  },
  appleM5: {
    label: "Apple MacBook Air with M5 announcement",
    href: "https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/",
  },
  appleM5ProMax: {
    label: "Apple M5 Pro and M5 Max announcement",
    href: "https://www.apple.com/newsroom/2026/03/apple-debuts-m5-pro-and-m5-max-to-supercharge-the-most-demanding-pro-workflows/",
  },
  qualcommAi: {
    label: "Qualcomm Snapdragon AI PC page",
    href: "https://www.qualcomm.com/snapdragon/laptops-and-tablets/consumer/ai",
  },
  qualcommDesktop: {
    label: "Qualcomm Snapdragon X Series desktop PC update",
    href: "https://www.qualcomm.com/news/onq/2026/01/accelerating-the-future-of-desktop-pcs-snapdragon-x-series",
  },
  amdRyzenAi: {
    label: "AMD Ryzen AI 400 Series announcement",
    href: "https://www.amd.com/en/newsroom/press-releases/2026-1-5-amd-expands-ai-leadership-across-client-graphics-.html",
  },
  intelCoreUltra: {
    label: "Intel Core Ultra Series 3 announcement",
    href: "https://newsroom.intel.com/artificial-intelligence/ces-2026-intel-core-ultra-series-3-debut-first-built-on-intel-18a",
  },
};

export const rtxSparkLastChecked: Record<RtxSparkLocale, string> = {
  en: "Last checked September 5, 2026",
  pt: "Última checagem: 5 de setembro de 2026",
};

export const statusCopy: Record<
  RtxSparkStatus,
  Record<RtxSparkLocale, { label: string; className: string }>
> = {
  confirmed: {
    en: {
      label: "Confirmed",
      className: "border-green-500/30 bg-green-500/10 text-green-300",
    },
    pt: {
      label: "Confirmado",
      className: "border-green-500/30 bg-green-500/10 text-green-300",
    },
  },
  announced: {
    en: {
      label: "Announced",
      className: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
    pt: {
      label: "Anunciado",
      className: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
  },
  expected: {
    en: {
      label: "Expected",
      className: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    },
    pt: {
      label: "Esperado",
      className: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    },
  },
  unknown: {
    en: {
      label: "Unknown",
      className: "border-orange-500/30 bg-orange-500/10 text-orange-300",
    },
    pt: {
      label: "Desconhecido",
      className: "border-orange-500/30 bg-orange-500/10 text-orange-300",
    },
  },
};

export const rtxSparkPageMeta: Record<
  RtxSparkRouteKey,
  Record<
    RtxSparkLocale,
    {
      breadcrumb: string;
      title: string;
      description: string;
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      fastAnswer: string;
      caveat: string;
      thirdPoint: string;
    }
  >
> = {
  hub: {
    en: {
      breadcrumb: "NVIDIA RTX Spark",
      title: "NVIDIA RTX Spark Hub: Specs, Laptops, Release Date, and Local AI",
      description:
        "Track NVIDIA RTX Spark for Windows AI PCs: up to 1 petaflop FP4 AI performance, 128GB unified memory, announced devices, local AI use cases, and what still needs launch proof.",
      metaTitle: "NVIDIA RTX Spark Hub: Specs, Laptops, Release Date",
      metaDescription:
        "NVIDIA RTX Spark explained with specs, laptop guide, release date, local AI notes, and cautious comparisons against Apple M5 and Snapdragon X.",
      eyebrow: "RTX Spark guide",
      fastAnswer:
        "RTX Spark is NVIDIA's new Windows AI PC superchip for slim laptops and small desktops, built around Blackwell RTX graphics, an efficient CPU, CUDA, and up to 128GB of unified memory.",
      caveat:
        "NVIDIA now says RTX Spark Windows PCs are arriving in October 2026, but exact retail days, regions, prices, benchmarks, and configurations still need OEM pages and reviews.",
      thirdPoint:
        "This is not an ordinary discrete RTX graphics card listing and not a DGX Spark workstation replacement guide.",
    },
    pt: {
      breadcrumb: "NVIDIA RTX Spark",
      title: "NVIDIA RTX Spark: especificações, notebooks, data e IA local",
      description:
        "Acompanhe o NVIDIA RTX Spark para PCs Windows com IA: até 1 petaflop FP4, 128GB de memória unificada, dispositivos anunciados e pendências de lançamento.",
      metaTitle: "NVIDIA RTX Spark: specs, notebooks e data de lançamento",
      metaDescription:
        "NVIDIA RTX Spark em português: especificações, notebooks, data, IA local e comparações cautelosas com Apple M5 e Snapdragon X.",
      eyebrow: "Guia RTX Spark",
      fastAnswer:
        "RTX Spark é o novo superchip da NVIDIA para PCs Windows com IA, combinando GPU Blackwell RTX, CPU eficiente, CUDA e até 128GB de memória unificada.",
      caveat:
        "A NVIDIA agora diz que PCs Windows com RTX Spark chegam em outubro de 2026, mas dia exato de varejo, regiões, preços, benchmarks e configurações ainda dependem dos OEMs.",
      thirdPoint:
        "Não é uma placa RTX discreta comum e também não deve ser tratado como uma página de DGX Spark.",
    },
  },
  specs: {
    en: {
      breadcrumb: "Specs",
      title: "NVIDIA RTX Spark Specs: What Is Confirmed and What Is Still Unknown",
      description:
        "A cautious RTX Spark spec table covering up to 6,144 CUDA cores, 20-core CPU, 1 petaflop FP4 AI performance, 128GB unified memory, media, gaming, and launch gaps.",
      metaTitle: "NVIDIA RTX Spark Specs: CUDA Cores, CPU, FP4, Memory",
      metaDescription:
        "See confirmed RTX Spark specs and unknowns: up to 6,144 CUDA cores, 20-core CPU, 1 petaflop FP4 AI, and 128GB unified memory.",
      eyebrow: "Specs guide",
      fastAnswer:
        "The safest specs are NVIDIA's own up-to numbers: 6,144 CUDA cores, 20-core CPU, 1 petaflop FP4 AI performance, and 128GB unified memory.",
      caveat:
        "Exact laptop-by-laptop configurations, power limits, clocks, storage, and pricing are still OEM-specific unknowns.",
      thirdPoint:
        "Do not compare FP4 petaflops directly with NPU TOPS without explaining workload, precision, and memory differences.",
    },
    pt: {
      breadcrumb: "Especificações",
      title: "NVIDIA RTX Spark: especificações confirmadas e pendentes",
      description:
        "Tabela cautelosa de especificações do RTX Spark: até 6.144 CUDA cores, CPU de 20 núcleos, 1 petaflop FP4, 128GB de memória unificada e lacunas.",
      metaTitle: "NVIDIA RTX Spark: especificações, CUDA, CPU e FP4",
      metaDescription:
        "Veja as especificações confirmadas do RTX Spark e o que ainda falta: até 6.144 CUDA cores, CPU de 20 núcleos, 1 petaflop FP4 e 128GB.",
      eyebrow: "Guia de especificações",
      fastAnswer:
        "As specs mais seguras são os números 'até' da NVIDIA: 6.144 CUDA cores, CPU de 20 núcleos, 1 petaflop FP4 e 128GB de memória unificada.",
      caveat:
        "Configurações por notebook, limites de energia, clocks, armazenamento e preço ainda dependem dos OEMs.",
      thirdPoint:
        "Não compare petaflops FP4 diretamente com TOPS de NPU sem explicar precisão, workload e memória.",
    },
  },
  laptops: {
    en: {
      breadcrumb: "Laptops and desktops",
      title: "NVIDIA RTX Spark Laptops and Desktop PCs Guide",
      description:
        "Track announced RTX Spark Windows laptops and compact desktops from ASUS, Dell, HP, Lenovo, Microsoft Surface, MSI, Acer, GIGABYTE, and more.",
      metaTitle: "NVIDIA RTX Spark Laptops and Desktop PCs Guide",
      metaDescription:
        "See announced RTX Spark laptops and desktops, October 2026 availability status, OEM partners, and what still needs confirmation before buying.",
      eyebrow: "Availability guide",
      fastAnswer:
        "NVIDIA lists RTX Spark slim laptops from ASUS, Dell, HP, Lenovo, Microsoft Surface, and MSI, plus compact desktops from major PC makers.",
      caveat:
        "This is an announced-device guide, not a live buying table. Availability, prices, SKUs, and regional launch dates are still pending.",
      thirdPoint:
        "The first useful update will be OEM product pages with exact memory, display, storage, and battery configurations.",
    },
    pt: {
      breadcrumb: "Notebooks e desktops",
      title: "NVIDIA RTX Spark: guia de notebooks e desktops",
      description:
        "Acompanhe notebooks Windows e desktops compactos RTX Spark anunciados por ASUS, Dell, HP, Lenovo, Microsoft Surface, MSI, Acer, GIGABYTE e outros.",
      metaTitle: "NVIDIA RTX Spark: notebooks e desktops anunciados",
      metaDescription:
        "Veja notebooks e desktops RTX Spark anunciados, janela de outubro de 2026, parceiros OEM e pendências antes da compra.",
      eyebrow: "Guia de disponibilidade",
      fastAnswer:
        "A NVIDIA lista notebooks RTX Spark de ASUS, Dell, HP, Lenovo, Microsoft Surface e MSI, além de desktops compactos de grandes fabricantes.",
      caveat:
        "Esta é uma tabela de dispositivos anunciados, não uma lista de compra. Preços, SKUs e datas regionais ainda estão pendentes.",
      thirdPoint:
        "A próxima prova relevante será uma página de OEM com memória, tela, armazenamento e bateria de cada modelo.",
    },
  },
  vsApple: {
    en: {
      breadcrumb: "RTX Spark vs Apple M5",
      title: "NVIDIA RTX Spark vs Apple M5: AI PC and Mac Comparison",
      description:
        "Compare RTX Spark and Apple M5 without fake benchmarks: Windows AI agents, CUDA, unified memory, macOS, M5 Neural Accelerators, and availability.",
      metaTitle: "NVIDIA RTX Spark vs Apple M5: AI PC vs Mac Guide",
      metaDescription:
        "Compare RTX Spark vs Apple M5 for local AI, unified memory, OS ecosystem, graphics, app support, availability, and buying timing.",
      eyebrow: "Comparison",
      fastAnswer:
        "RTX Spark is a Windows RTX/CUDA AI PC platform, while Apple M5 is a Mac silicon family with Apple Intelligence and unified memory.",
      caveat:
        "Do not treat this as a benchmark result. RTX Spark devices are still pending, while Apple M5 systems already have shipping configurations.",
      thirdPoint:
        "The practical choice depends more on OS, software stack, CUDA needs, and memory configuration than on one headline AI number.",
    },
    pt: {
      breadcrumb: "RTX Spark vs Apple M5",
      title: "NVIDIA RTX Spark vs Apple M5: PC com IA contra Mac",
      description:
        "Compare RTX Spark e Apple M5 sem benchmarks inventados: agentes Windows, CUDA, memória unificada, macOS, Neural Accelerators e disponibilidade.",
      metaTitle: "NVIDIA RTX Spark vs Apple M5: guia AI PC vs Mac",
      metaDescription:
        "Comparação cautelosa entre RTX Spark e Apple M5 para IA local, memória unificada, ecossistema, gráficos e momento de compra.",
      eyebrow: "Comparação",
      fastAnswer:
        "RTX Spark é uma plataforma Windows RTX/CUDA para IA local; Apple M5 é uma família de chips para Mac com Apple Intelligence e memória unificada.",
      caveat:
        "Não trate isto como benchmark. Dispositivos RTX Spark ainda estão pendentes, enquanto Macs M5 já têm configurações vendidas.",
      thirdPoint:
        "A escolha depende mais de sistema operacional, stack de software, necessidade de CUDA e configuração de memória.",
    },
  },
  vsSnapdragon: {
    en: {
      breadcrumb: "RTX Spark vs Snapdragon X",
      title: "NVIDIA RTX Spark vs Snapdragon X: Windows AI PC Comparison",
      description:
        "Compare NVIDIA RTX Spark and Snapdragon X for Windows AI PCs: CUDA/RTX GPU AI, NPU TOPS, Copilot+ positioning, local models, battery, and device timing.",
      metaTitle: "NVIDIA RTX Spark vs Snapdragon X: AI PC Comparison",
      metaDescription:
        "RTX Spark vs Snapdragon X explained for Windows AI PCs, with cautious notes on NPU TOPS, CUDA, local agents, and launch timing.",
      eyebrow: "Windows AI PC comparison",
      fastAnswer:
        "Snapdragon X is an efficient NPU-led Windows AI PC platform; RTX Spark is NVIDIA's RTX/CUDA-led path for heavier local agents, creators, and gaming.",
      caveat:
        "NPU TOPS and FP4 GPU AI performance are not interchangeable metrics. Use them as platform signals, not a universal speed ranking.",
      thirdPoint:
        "The buyer split is likely mobility and battery-first Snapdragon PCs versus CUDA/RTX workload-first RTX Spark PCs.",
    },
    pt: {
      breadcrumb: "RTX Spark vs Snapdragon X",
      title: "NVIDIA RTX Spark vs Snapdragon X: comparação de AI PC Windows",
      description:
        "Compare RTX Spark e Snapdragon X em PCs Windows com IA: CUDA/RTX, TOPS de NPU, Copilot+, modelos locais, bateria e janela de lançamento.",
      metaTitle: "NVIDIA RTX Spark vs Snapdragon X: AI PC Windows",
      metaDescription:
        "RTX Spark vs Snapdragon X explicado para AI PCs Windows, com notas cautelosas sobre NPU TOPS, CUDA, agentes locais e disponibilidade.",
      eyebrow: "Comparação de AI PC Windows",
      fastAnswer:
        "Snapdragon X é uma plataforma Windows eficiente liderada por NPU; RTX Spark é o caminho RTX/CUDA da NVIDIA para agentes locais, criação e jogos.",
      caveat:
        "TOPS de NPU e desempenho FP4 de GPU não são a mesma métrica. Use como sinal de plataforma, não ranking universal.",
      thirdPoint:
        "A divisão provável é Snapdragon para mobilidade/bateria e RTX Spark para cargas de trabalho CUDA/RTX.",
    },
  },
  localAi: {
    en: {
      breadcrumb: "Local AI",
      title: "NVIDIA RTX Spark for Local AI Agents and LLMs",
      description:
        "What RTX Spark could mean for local AI agents, LLMs, coding assistants, creative AI, 128GB unified memory, and CUDA-native development.",
      metaTitle: "NVIDIA RTX Spark for Local AI Agents and LLMs",
      metaDescription:
        "RTX Spark local AI guide: agents, LLMs, CUDA, 128GB unified memory, NVIDIA's 120B-model statement, and what needs launch testing.",
      eyebrow: "Local AI guide",
      fastAnswer:
        "RTX Spark's most interesting angle is local AI: CUDA-native development, large unified memory, and Windows agents running on the user's own PC.",
      caveat:
        "Model size statements depend on quantization, runtime, context length, thermals, and exact device configuration.",
      thirdPoint:
        "The first real tests should focus on memory fit, tokens per second, sustained performance, agent reliability, and battery behavior.",
    },
    pt: {
      breadcrumb: "IA local",
      title: "NVIDIA RTX Spark para IA local, agentes e LLMs",
      description:
        "O que o RTX Spark pode significar para agentes locais, LLMs, assistentes de código, IA criativa, 128GB de memória unificada e CUDA.",
      metaTitle: "NVIDIA RTX Spark para IA local, agentes e LLMs",
      metaDescription:
        "Guia de IA local com RTX Spark: agentes, LLMs, CUDA, 128GB de memória unificada, afirmações sobre modelos 120B e testes pendentes.",
      eyebrow: "Guia de IA local",
      fastAnswer:
        "O ponto mais interessante do RTX Spark é IA local: desenvolvimento CUDA, muita memória unificada e agentes Windows rodando no próprio PC.",
      caveat:
        "Afirmações sobre tamanho de modelo dependem de quantização, ambiente de execução, contexto, térmica e configuração exata do dispositivo.",
      thirdPoint:
        "Os primeiros testes reais devem medir memória, tokens por segundo, desempenho sustentado, confiabilidade de agentes e bateria.",
    },
  },
  gaming: {
    en: {
      breadcrumb: "Gaming performance",
      title: "NVIDIA RTX Spark Gaming Performance: What to Expect and What to Verify",
      description:
        "Track RTX Spark gaming expectations carefully: RTX graphics, ray tracing, DLSS suite, Reflex, G-SYNC, NVIDIA's 1440p/100 FPS statement, and proof still needed.",
      metaTitle: "NVIDIA RTX Spark Gaming Performance: Review Checklist",
      metaDescription:
        "Check RTX Spark gaming performance expectations, DLSS/RTX features, NVIDIA's 1440p statement, and what real reviews still need to verify.",
      eyebrow: "Gaming status",
      fastAnswer:
        "NVIDIA positions RTX Spark as an RTX gaming-capable AI PC chip with ray tracing, DLSS, Reflex, and G-SYNC support.",
      caveat:
        "No independent RTX Spark laptop or desktop benchmarks are available yet, so treat performance numbers as launch statements until reviews arrive.",
      thirdPoint:
        "The key questions are sustained GPU clocks, laptop power limits, DLSS mode, resolution, game settings, and thermals.",
    },
    pt: {
      breadcrumb: "Desempenho em jogos",
      title: "NVIDIA RTX Spark em jogos: expectativas e verificações",
      description:
        "Acompanhe afirmações de jogos do RTX Spark: gráficos RTX, ray tracing, DLSS, Reflex, G-SYNC, 1440p/100 FPS e provas pendentes.",
      metaTitle: "NVIDIA RTX Spark em jogos: expectativas e checklist",
      metaDescription:
        "Guia de desempenho em jogos do RTX Spark com afirmações da NVIDIA, recursos DLSS/RTX e o que ainda precisa de testes após o lançamento.",
      eyebrow: "Status de jogos",
      fastAnswer:
        "A NVIDIA posiciona o RTX Spark como chip de AI PC também capaz de jogos RTX, com ray tracing, DLSS, Reflex e G-SYNC.",
      caveat:
        "Ainda não há benchmarks independentes de notebooks ou desktops RTX Spark. Números de desempenho seguem como afirmações até análises.",
      thirdPoint:
        "As perguntas-chave são clocks sustentados, limites de energia, modo DLSS, resolução, presets e térmica.",
    },
  },
  releaseDate: {
    en: {
      breadcrumb: "Release date",
      title: "NVIDIA RTX Spark Release Date: October 2026 Availability Guide",
      description:
        "Track RTX Spark release timing, official May 31, 2026 announcement, October 2026 device window, OEM partners, and what would make availability confirmed.",
      metaTitle: "NVIDIA RTX Spark Release Date: October 2026 Guide",
      metaDescription:
        "RTX Spark release date guide: official announcement, October 2026 availability, listed OEM partners, and what is still not confirmed.",
      eyebrow: "Release guide",
      fastAnswer:
        "NVIDIA says RTX Spark Windows PCs arrive in October 2026, with slim laptops and compact desktops in the announced lineup.",
      caveat:
        "There is no confirmed day-one retail date, price list, regional rollout table, or review embargo information yet.",
      thirdPoint:
        "Availability becomes confirmed when OEM product pages list exact SKUs, regions, prices, and order dates.",
    },
    pt: {
      breadcrumb: "Data de lançamento",
      title: "Data de lançamento do NVIDIA RTX Spark: outubro de 2026",
      description:
        "Acompanhe data do RTX Spark, anúncio oficial de 31 de maio de 2026, janela em outubro de 2026, OEMs, preços e o que falta confirmar.",
      metaTitle: "Data de lançamento do NVIDIA RTX Spark: outubro de 2026",
      metaDescription:
        "Guia de data do RTX Spark: anúncio oficial, disponibilidade em outubro de 2026, parceiros OEM, preços, SKUs e lacunas a confirmar.",
      eyebrow: "Guia de lançamento",
      fastAnswer:
        "Segundo a NVIDIA, os PCs Windows com RTX Spark chegam em outubro de 2026. A linha anunciada inclui notebooks finos e desktops compactos.",
      caveat:
        "Ainda não há data de varejo, lista de preços, lançamento regional ou informação de embargo de análises.",
      thirdPoint:
        "A disponibilidade fica confirmada quando os OEMs publicarem SKUs, regiões, preços e datas de pedido.",
    },
  },
};

export const rtxSparkNavItems: Record<
  RtxSparkRouteKey,
  Record<RtxSparkLocale, { title: string; description: string }>
> = {
  hub: {
    en: {
      title: "RTX Spark hub",
      description: "Start with the overview, confirmed facts, and recommended next guides.",
    },
    pt: {
      title: "Hub RTX Spark",
      description: "Comece pela visão geral, fatos confirmados e próximas páginas.",
    },
  },
  specs: {
    en: {
      title: "Specs",
      description: "CUDA cores, CPU, FP4 AI performance, unified memory, and unknowns.",
    },
    pt: {
      title: "Especificações",
      description: "CUDA cores, CPU, FP4, memória unificada e pendências.",
    },
  },
  laptops: {
    en: {
      title: "Laptops and desktops",
      description: "Track announced RTX Spark devices and October 2026 availability.",
    },
    pt: {
      title: "Notebooks e desktops",
      description: "Acompanhe dispositivos anunciados e disponibilidade.",
    },
  },
  vsApple: {
    en: {
      title: "RTX Spark vs Apple M5",
      description: "Compare Windows RTX/CUDA AI PCs with Mac silicon.",
    },
    pt: {
      title: "RTX Spark vs Apple M5",
      description: "Compare AI PCs Windows RTX/CUDA com Mac.",
    },
  },
  vsSnapdragon: {
    en: {
      title: "RTX Spark vs Snapdragon X",
      description: "Compare CUDA/RTX AI with efficient Windows NPU PCs.",
    },
    pt: {
      title: "RTX Spark vs Snapdragon X",
      description: "Compare CUDA/RTX com PCs Windows focados em NPU.",
    },
  },
  localAi: {
    en: {
      title: "Local AI",
      description: "Agents, LLMs, coding, creative AI, and 128GB unified memory.",
    },
    pt: {
      title: "IA local",
      description: "Agents, LLMs, código, IA criativa e 128GB de memória.",
    },
  },
  gaming: {
    en: {
      title: "Gaming performance",
      description: "RTX, DLSS, Reflex, 1440p statements, and review checklist.",
    },
    pt: {
      title: "Desempenho em jogos",
      description: "RTX, DLSS, Reflex, afirmações em 1440p e checklist.",
    },
  },
  releaseDate: {
    en: {
      title: "Release date",
      description: "October 2026 timing, OEM partners, and proof needed.",
    },
    pt: {
      title: "Data de lançamento",
      description: "Janela em outubro de 2026, OEMs e provas pendentes.",
    },
  },
};

export const rtxSparkSpecRows: Record<
  RtxSparkLocale,
  { spec: string; value: string; status: RtxSparkStatus; note: string; sourceKey: keyof typeof rtxSparkSources }[]
> = {
  en: [
    {
      spec: "Blackwell RTX GPU",
      value: "Up to 6,144 CUDA cores",
      status: "confirmed",
      note: "Official product-page maximum. Exact device clocks and power limits remain OEM-specific.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "CPU",
      value: "Up to 20-core ultra-efficient CPU",
      status: "confirmed",
      note: "NVIDIA describes the CPU as part of the RTX Spark Superchip; final laptop SKUs still need product pages.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "AI performance",
      value: "Up to 1 petaflop FP4 AI performance",
      status: "confirmed",
      note: "Useful for local AI positioning, but not directly comparable with NPU TOPS without workload context.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Unified memory",
      value: "Up to 128GB unified memory",
      status: "confirmed",
      note: "The memory pool is the key local AI differentiator for larger models and agent workflows.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Local agents and LLMs",
      value: "120B-parameter LLMs and up to 1M token context stated by NVIDIA",
      status: "announced",
      note: "NVIDIA's release states this workload target; real-world throughput and usability need launch testing.",
      sourceKey: "nvidiaNews",
    },
    {
      spec: "Creator workloads",
      value: "12K 4:2:2 video, 4K AI video, and large 3D scenes stated by NVIDIA",
      status: "announced",
      note: "Workload support depends on final apps, drivers, memory configuration, and thermals.",
      sourceKey: "nvidiaNews",
    },
    {
      spec: "Gaming",
      value: "RTX graphics, DLSS suite, Reflex, G-SYNC; NVIDIA 1440p/100 FPS statement",
      status: "announced",
      note: "Treat as launch positioning until independent laptop and desktop benchmarks exist.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Price",
      value: "Not published",
      status: "unknown",
      note: "No safe pricing answer until OEM pages or retail listings appear.",
      sourceKey: "nvidiaNews",
    },
  ],
  pt: [
    {
      spec: "GPU Blackwell RTX",
      value: "Até 6.144 CUDA cores",
      status: "confirmed",
      note: "Máximo da página oficial. Clocks e energia dependem do OEM.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "CPU",
      value: "Até CPU ultraeficiente de 20 núcleos",
      status: "confirmed",
      note: "A NVIDIA descreve a CPU como parte do RTX Spark Superchip; SKUs finais dependem dos OEMs.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Desempenho de IA",
      value: "Até 1 petaflop FP4",
      status: "confirmed",
      note: "Bom sinal para IA local, mas não é comparável diretamente com TOPS de NPU.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Memória unificada",
      value: "Até 128GB de memória unificada",
      status: "confirmed",
      note: "É o principal diferencial para modelos maiores e fluxos de trabalho com agentes.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Agents locais e LLMs",
      value: "LLMs de 120B parâmetros e até 1M tokens de contexto em afirmação da NVIDIA",
      status: "announced",
      note: "O comunicado da NVIDIA faz a afirmação; taxa de resposta e usabilidade precisam de testes.",
      sourceKey: "nvidiaNews",
    },
    {
      spec: "Criação",
      value: "Vídeo 12K 4:2:2, vídeo IA 4K e cenas 3D grandes em afirmação da NVIDIA",
      status: "announced",
      note: "Depende de apps finais, drivers, memória e térmica.",
      sourceKey: "nvidiaNews",
    },
    {
      spec: "Jogos",
      value: "RTX, DLSS, Reflex, G-SYNC; afirmação de 1440p/100 FPS",
      status: "announced",
      note: "Trate como afirmação até existirem benchmarks independentes.",
      sourceKey: "nvidiaProduct",
    },
    {
      spec: "Preço",
      value: "Não publicado",
      status: "unknown",
      note: "Não há resposta segura até páginas de OEM ou varejo.",
      sourceKey: "nvidiaNews",
    },
  ],
};

export const rtxSparkDeviceRows: Record<
  RtxSparkLocale,
  {
    device: string;
    category: string;
    maker: string;
    status: RtxSparkStatus;
    availability: string;
    note: string;
  }[]
> = {
  en: [
    {
      device: "ASUS ProArt P16",
      category: "Slim Windows laptop",
      maker: "ASUS",
      status: "announced",
      availability: "October 2026 window",
      note: "Listed on NVIDIA's product page. Final RTX Spark SKU details still need ASUS confirmation.",
    },
    {
      device: "Dell XPS 16",
      category: "Slim Windows laptop",
      maker: "Dell",
      status: "announced",
      availability: "October 2026 window",
      note: "Listed on NVIDIA's product page. Watch for memory, storage, and display options.",
    },
    {
      device: "HP OmniBook X 14",
      category: "Slim Windows laptop",
      maker: "HP",
      status: "announced",
      availability: "October 2026 window",
      note: "Listed by NVIDIA; regional availability and price are not published.",
    },
    {
      device: "Lenovo Yoga Pro 9n",
      category: "Slim Windows laptop",
      maker: "Lenovo",
      status: "announced",
      availability: "October 2026 window",
      note: "Newly announced at IFA 2026. Exact chassis, battery, and thermal behavior need Lenovo pages or review units.",
    },
    {
      device: "Lenovo Yoga 9n 2-in-1",
      category: "Convertible Windows laptop",
      maker: "Lenovo",
      status: "announced",
      availability: "October 2026 window",
      note: "Newly announced at IFA 2026. Confirm final display, memory, pen, and regional SKU details before buying.",
    },
    {
      device: "Microsoft Surface Laptop Ultra",
      category: "Slim Windows laptop",
      maker: "Microsoft Surface",
      status: "announced",
      availability: "October 2026 window",
      note: "Listed by NVIDIA and important for the Windows-native agent story.",
    },
    {
      device: "MSI Prestige N16 Flip AI+",
      category: "Convertible Windows laptop",
      maker: "MSI",
      status: "announced",
      availability: "October 2026 window",
      note: "Listed by NVIDIA; confirm screen, memory, and thermal limits when MSI publishes details.",
    },
    {
      device: "RTX Spark desktop PCs",
      category: "Compact desktop",
      maker: "Acer, ASUS, Dell, GIGABYTE, HP, Lenovo, MSI",
      status: "announced",
      availability: "October 2026 window; some models may follow later",
      note: "NVIDIA says compact desktops are part of the RTX Spark platform. Acer showed a concept at IFA, so exact retail builders and SKUs still need launch pages.",
    },
  ],
  pt: [
    {
      device: "ASUS ProArt P16",
      category: "Notebook Windows fino",
      maker: "ASUS",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Listado na página da NVIDIA. Detalhes finais do SKU ainda dependem da ASUS.",
    },
    {
      device: "Dell XPS 16",
      category: "Notebook Windows fino",
      maker: "Dell",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Listado pela NVIDIA. Memória, armazenamento e tela ainda precisam de página da Dell.",
    },
    {
      device: "HP OmniBook X 14",
      category: "Notebook Windows fino",
      maker: "HP",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Listado pela NVIDIA; preço e regiões ainda não foram publicados.",
    },
    {
      device: "Lenovo Yoga Pro 9n",
      category: "Notebook Windows fino",
      maker: "Lenovo",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Anunciado na IFA 2026. Chassi, bateria e térmica ainda precisam de página da Lenovo ou análises.",
    },
    {
      device: "Lenovo Yoga 9n 2-in-1",
      category: "Notebook Windows conversível",
      maker: "Lenovo",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Anunciado na IFA 2026. Confirme tela, memória, caneta e SKU regional antes de comprar.",
    },
    {
      device: "Microsoft Surface Laptop Ultra",
      category: "Notebook Windows fino",
      maker: "Microsoft Surface",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Importante para a narrativa de agentes nativos no Windows.",
    },
    {
      device: "MSI Prestige N16 Flip AI+",
      category: "Notebook Windows conversível",
      maker: "MSI",
      status: "announced",
      availability: "Janela em outubro de 2026",
      note: "Listado pela NVIDIA; tela, memória e limites térmicos dependem da MSI.",
    },
    {
      device: "Desktops RTX Spark",
      category: "Desktop compacto",
      maker: "Acer, ASUS, Dell, GIGABYTE, HP, Lenovo, MSI",
      status: "announced",
      availability: "Janela em outubro de 2026; alguns modelos podem chegar depois",
      note: "A NVIDIA diz que desktops compactos fazem parte da plataforma. A Acer mostrou um conceito na IFA; fabricantes e SKUs de varejo ainda precisam de páginas de lançamento.",
    },
  ],
};

export const rtxSparkComparisonRows: Record<
  "apple" | "snapdragon",
  Record<RtxSparkLocale, { angle: string; rtxSpark: string; competitor: string; status: RtxSparkStatus }[]>
> = {
  apple: {
    en: [
      {
        angle: "Platform",
        rtxSpark: "Windows AI PC with NVIDIA RTX, CUDA, and Windows-native agent work.",
        competitor: "Mac platform with Apple silicon, macOS, and Apple Intelligence.",
        status: "confirmed",
      },
      {
        angle: "Memory story",
        rtxSpark: "Up to 128GB unified memory on announced RTX Spark devices.",
        competitor: "M5 MacBook Air starts lower; M5 Pro/Max systems can reach high unified memory configurations.",
        status: "confirmed",
      },
      {
        angle: "AI acceleration",
        rtxSpark: "FP4 Tensor Cores and RTX/CUDA stack for local AI and creative workloads.",
        competitor: "M5 includes Neural Accelerators in GPU cores plus Neural Engine support for Apple Intelligence.",
        status: "confirmed",
      },
      {
        angle: "Developer fit",
        rtxSpark: "Best when CUDA, RTX, Windows tooling, and local agents matter.",
        competitor: "Best when macOS, Apple frameworks, battery consistency, and Mac apps matter.",
        status: "expected",
      },
      {
        angle: "Availability",
        rtxSpark: "Announced for October 2026 devices.",
        competitor: "M5 MacBook Air availability began March 2026; M5 Pro/Max systems have their own Apple launch path.",
        status: "confirmed",
      },
    ],
    pt: [
      {
        angle: "Plataforma",
        rtxSpark: "AI PC Windows com NVIDIA RTX, CUDA e agentes nativos do Windows.",
        competitor: "Mac com Apple silicon, macOS e Apple Intelligence.",
        status: "confirmed",
      },
      {
        angle: "Memória",
        rtxSpark: "Até 128GB de memória unificada em dispositivos RTX Spark anunciados.",
        competitor: "MacBook Air M5 com configurações menores; M5 Pro/Max pode chegar a memória unificada alta.",
        status: "confirmed",
      },
      {
        angle: "Aceleração de IA",
        rtxSpark: "Tensor Cores FP4 e stack RTX/CUDA para IA local e criação.",
        competitor: "M5 tem Neural Accelerators nos núcleos de GPU e Neural Engine para Apple Intelligence.",
        status: "confirmed",
      },
      {
        angle: "Uso para dev",
        rtxSpark: "Melhor quando CUDA, RTX, Windows e agentes locais importam.",
        competitor: "Melhor quando macOS, frameworks Apple, bateria previsível e apps Mac importam.",
        status: "expected",
      },
      {
        angle: "Disponibilidade",
        rtxSpark: "Dispositivos anunciados para outubro de 2026.",
        competitor: "MacBook Air M5 com disponibilidade iniciada em março de 2026; M5 Pro/Max tem sua própria linha.",
        status: "confirmed",
      },
    ],
  },
  snapdragon: {
    en: [
      {
        angle: "AI engine",
        rtxSpark: "RTX/CUDA GPU AI with up to 1 petaflop FP4 performance.",
        competitor: "Snapdragon X PCs emphasize dedicated NPUs, with current 45 TOPS and next-generation higher-TOPS positioning.",
        status: "confirmed",
      },
      {
        angle: "Windows role",
        rtxSpark: "NVIDIA and Microsoft frame RTX Spark around personal agents and Windows-native agent experiences.",
        competitor: "Snapdragon X anchors many Copilot+ PC designs with efficient on-device AI.",
        status: "confirmed",
      },
      {
        angle: "Local model fit",
        rtxSpark: "Designed for heavier CUDA workflows, large unified memory, creators, and local agents.",
        competitor: "Designed for mobile AI features, battery life, and NPU-accelerated Windows experiences.",
        status: "expected",
      },
      {
        angle: "Gaming",
        rtxSpark: "RTX gaming stack with DLSS, ray tracing, Reflex, and G-SYNC support.",
        competitor: "Integrated graphics and efficient PC gaming vary by Snapdragon X model and game support.",
        status: "expected",
      },
      {
        angle: "Buying timing",
        rtxSpark: "October 2026 device window.",
        competitor: "Snapdragon X devices are already a broader Windows AI PC category, with next-gen models continuing in 2026.",
        status: "confirmed",
      },
    ],
    pt: [
      {
        angle: "Motor de IA",
        rtxSpark: "IA em GPU RTX/CUDA com até 1 petaflop FP4.",
        competitor: "Snapdragon X enfatiza NPUs dedicadas, com 45 TOPS atuais e modelos futuros com TOPS maiores.",
        status: "confirmed",
      },
      {
        angle: "Papel no Windows",
        rtxSpark: "NVIDIA e Microsoft posicionam RTX Spark para agentes pessoais no Windows.",
        competitor: "Snapdragon X sustenta muitos Copilot+ PCs com IA local eficiente.",
        status: "confirmed",
      },
      {
        angle: "Modelos locais",
        rtxSpark: "Focado em CUDA, memória grande, criadores e agentes locais mais pesados.",
        competitor: "Focado em recursos de IA móveis, bateria e experiências Windows via NPU.",
        status: "expected",
      },
      {
        angle: "Jogos",
        rtxSpark: "Stack RTX com DLSS, ray tracing, Reflex e G-SYNC.",
        competitor: "Graficos integrados e jogos variam por modelo Snapdragon X e suporte.",
        status: "expected",
      },
      {
        angle: "Momento de compra",
        rtxSpark: "Janela de dispositivos em outubro de 2026.",
        competitor: "Snapdragon X já é uma categoria mais ampla de AI PC Windows, com nova geração em 2026.",
        status: "confirmed",
      },
    ],
  },
};

export const rtxSparkLocalAiRows: Record<
  RtxSparkLocale,
  { workload: string; fit: string; caution: string; status: RtxSparkStatus }[]
> = {
  en: [
    {
      workload: "Coding agents",
      fit: "Strong target use case because CUDA, Windows tools, and local models can live on one device.",
      caution: "Agent reliability still depends on model quality, tool permissions, and OS integration.",
      status: "announced",
    },
    {
      workload: "7B to 13B LLMs",
      fit: "Likely comfortable on high-memory RTX Spark systems with common quantized runtimes.",
      caution: "Actual tokens per second need launch hardware tests.",
      status: "expected",
    },
    {
      workload: "30B to 70B LLMs",
      fit: "The 128GB memory ceiling makes this more realistic than typical thin AI PCs.",
      caution: "Speed, context length, and thermals are still device-specific.",
      status: "expected",
    },
    {
      workload: "120B LLMs and 1M-token context",
      fit: "NVIDIA explicitly names this class of workload in its release.",
      caution: "This needs verification with final models, quantization, runtime, and sustained performance.",
      status: "announced",
    },
    {
      workload: "Creative AI",
      fit: "FP4 Tensor Cores, unified memory, RTX media engines, and NVIDIA Studio support target creator workflows.",
      caution: "App support and real project timelines must be tested per tool.",
      status: "announced",
    },
  ],
  pt: [
    {
      workload: "Agents de código",
      fit: "Caso de uso forte porque CUDA, ferramentas Windows e modelos locais ficam no mesmo dispositivo.",
      caution: "Confiabilidade depende do modelo, permissões de ferramentas e integração com o SO.",
      status: "announced",
    },
    {
      workload: "LLMs de 7B a 13B",
      fit: "Provavelmente confortável em sistemas RTX Spark com muita memória e runtimes quantizados.",
      caution: "Tokens por segundo precisam de testes reais.",
      status: "expected",
    },
    {
      workload: "LLMs de 30B a 70B",
      fit: "O teto de 128GB torna isso mais realista que em AI PCs finos comuns.",
      caution: "Velocidade, contexto e térmica seguem específicos por dispositivo.",
      status: "expected",
    },
    {
      workload: "LLMs de 120B e contexto de 1M tokens",
      fit: "A NVIDIA cita esse tipo de carga de trabalho no comunicado.",
      caution: "Precisa de verificação com modelo final, quantização, ambiente de execução e desempenho sustentado.",
      status: "announced",
    },
    {
      workload: "IA criativa",
      fit: "Tensor Cores FP4, memória unificada, motores de mídia RTX e NVIDIA Studio miram criadores.",
      caution: "Suporte de app e tempo real de projeto devem ser testados por ferramenta.",
      status: "announced",
    },
  ],
};

export const rtxSparkGamingRows: Record<
  RtxSparkLocale,
  { claim: string; currentStatus: string; proofNeeded: string; status: RtxSparkStatus }[]
> = {
  en: [
    {
      claim: "Ray-traced games with the full DLSS suite",
      currentStatus: "NVIDIA product-page positioning",
      proofNeeded: "Game-specific settings, driver versions, and laptop/desktop benchmarks.",
      status: "announced",
    },
    {
      claim: "AAA games at 1440p and over 100 FPS",
      currentStatus: "NVIDIA newsroom statement",
      proofNeeded: "Named game, preset, DLSS mode, power limit, and independent review data.",
      status: "announced",
    },
    {
      claim: "Reflex and G-SYNC support",
      currentStatus: "Listed in NVIDIA's RTX platform positioning",
      proofNeeded: "Device display specs, game support, and measured latency.",
      status: "announced",
    },
    {
      claim: "Small desktop gaming",
      currentStatus: "Compact RTX Spark desktop PCs are announced",
      proofNeeded: "Thermals, noise, sustained clocks, and upgradeability details.",
      status: "announced",
    },
  ],
  pt: [
    {
      claim: "Jogos com ray tracing e suíte DLSS completa",
      currentStatus: "Posicionamento da página da NVIDIA",
      proofNeeded: "Configurações por jogo, versão de driver e benchmarks.",
      status: "announced",
    },
    {
      claim: "Jogos AAA em 1440p e acima de 100 FPS",
      currentStatus: "Afirmação da NVIDIA",
      proofNeeded: "Jogo, preset, modo DLSS, limite de energia e análise independente.",
      status: "announced",
    },
    {
      claim: "Reflex e G-SYNC",
      currentStatus: "Listados no posicionamento RTX da NVIDIA",
      proofNeeded: "Especificação da tela, suporte do jogo e latência medida.",
      status: "announced",
    },
    {
      claim: "Jogos em desktop compacto",
      currentStatus: "Desktops compactos RTX Spark foram anunciados",
      proofNeeded: "Térmica, ruído, clocks sustentados e possibilidade de upgrade.",
      status: "announced",
    },
  ],
};

export const rtxSparkTimelineRows: Record<
  RtxSparkLocale,
  { date: string; event: string; meaning: string; status: RtxSparkStatus; sourceKey: keyof typeof rtxSparkSources }[]
> = {
  en: [
    {
      date: "May 31, 2026",
      event: "NVIDIA and Microsoft announcement",
      meaning: "RTX Spark was announced as a Windows AI PC platform for personal agents.",
      status: "confirmed",
      sourceKey: "nvidiaNews",
    },
    {
      date: "June 2026",
      event: "Product page and device list visible",
      meaning: "NVIDIA lists specs, named laptop models, and compact desktop PC partners.",
      status: "confirmed",
      sourceKey: "nvidiaProduct",
    },
    {
      date: "September 3, 2026",
      event: "IFA availability update",
      meaning: "NVIDIA says RTX Spark Windows PCs are coming in October 2026, with new Lenovo designs and an Acer compact desktop concept shown at IFA.",
      status: "announced",
      sourceKey: "nvidiaIfa",
    },
    {
      date: "After OEM pages publish",
      event: "True buying window",
      meaning: "Prices, regional SKUs, memory options, and ship dates become verifiable.",
      status: "expected",
      sourceKey: "nvidiaNews",
    },
  ],
  pt: [
    {
      date: "31 de maio de 2026",
      event: "Anúncio da NVIDIA e Microsoft",
      meaning: "RTX Spark foi anunciado como plataforma Windows AI PC para agentes pessoais.",
      status: "confirmed",
      sourceKey: "nvidiaNews",
    },
    {
      date: "Junho de 2026",
      event: "Página de produto e lista de dispositivos",
      meaning: "A NVIDIA lista specs, notebooks nomeados e parceiros de desktops compactos.",
      status: "confirmed",
      sourceKey: "nvidiaProduct",
    },
    {
      date: "3 de setembro de 2026",
      event: "Atualização de disponibilidade na IFA",
      meaning: "A NVIDIA diz que PCs Windows com RTX Spark chegam em outubro de 2026, com novos modelos da Lenovo e um conceito de desktop compacto da Acer mostrado na IFA.",
      status: "announced",
      sourceKey: "nvidiaIfa",
    },
    {
      date: "Depois das páginas de OEM",
      event: "Janela real de compra",
      meaning: "Preços, SKUs regionais, memória e datas de envio ficam verificáveis.",
      status: "expected",
      sourceKey: "nvidiaNews",
    },
  ],
};

export const rtxSparkFaqs: Record<
  RtxSparkRouteKey,
  Record<RtxSparkLocale, { question: string; answer: string }[]>
> = {
  hub: {
    en: [
      {
        question: "What is NVIDIA RTX Spark?",
        answer:
          "NVIDIA RTX Spark is a new Windows AI PC superchip platform for slim laptops and compact desktops, aimed at local agents, creators, developers, and gaming.",
      },
      {
        question: "Is RTX Spark available now?",
        answer:
          "Broad retail availability is not confirmed yet. NVIDIA's latest public window says RTX Spark Windows PCs arrive in October 2026.",
      },
      {
        question: "Is RTX Spark the same as a normal RTX graphics card?",
        answer:
          "No. RTX Spark is a superchip platform for AI PCs, not a standalone consumer graphics card listing.",
      },
    ],
    pt: [
      {
        question: "O que é NVIDIA RTX Spark?",
        answer:
          "NVIDIA RTX Spark é uma nova plataforma de superchip para PCs Windows com IA, voltada a notebooks finos, desktops compactos, agentes locais, criadores, desenvolvedores e jogos.",
      },
      {
        question: "RTX Spark já está disponível?",
        answer:
          "Ainda não há ampla disponibilidade confirmada. A janela pública mais recente da NVIDIA diz que PCs Windows com RTX Spark chegam em outubro de 2026.",
      },
      {
        question: "RTX Spark é igual a uma placa RTX comum?",
        answer:
          "Não. RTX Spark é uma plataforma de superchip para AI PCs, não uma listagem de placa de vídeo discreta.",
      },
    ],
  },
  specs: {
    en: [
      {
        question: "What are the confirmed RTX Spark specs?",
        answer:
          "NVIDIA lists up to 6,144 CUDA cores, up to a 20-core CPU, up to 1 petaflop FP4 AI performance, and up to 128GB of unified memory.",
      },
      {
        question: "Does every RTX Spark laptop have 128GB of memory?",
        answer:
          "Not necessarily. NVIDIA says up to 128GB unified memory. Exact configurations depend on OEM SKUs.",
      },
      {
        question: "Can I compare RTX Spark FP4 performance with NPU TOPS?",
        answer:
          "Only cautiously. FP4 GPU AI performance and NPU TOPS are different metrics tied to different workloads and precision levels.",
      },
    ],
    pt: [
      {
        question: "Quais specs do RTX Spark estão confirmadas?",
        answer:
          "A NVIDIA lista até 6.144 CUDA cores, CPU de até 20 núcleos, até 1 petaflop FP4 e até 128GB de memória unificada.",
      },
      {
        question: "Todo notebook RTX Spark terá 128GB?",
        answer:
          "Não necessariamente. A NVIDIA diz até 128GB de memória unificada. Configurações exatas dependem dos SKUs dos OEMs.",
      },
      {
        question: "Dá para comparar FP4 do RTX Spark com TOPS de NPU?",
        answer:
          "Só com cautela. FP4 em GPU e TOPS de NPU são métricas diferentes para cargas de trabalho e precisões diferentes.",
      },
    ],
  },
  laptops: {
    en: [
      {
        question: "Which RTX Spark laptops are announced?",
        answer:
          "NVIDIA lists ASUS ProArt P16, Dell XPS 16, HP OmniBook X 14, Lenovo Yoga Pro 9n, Microsoft Surface Laptop Ultra, and MSI Prestige N16 Flip AI+.",
      },
      {
        question: "Can I buy an RTX Spark laptop today?",
        answer:
          "This guide does not treat RTX Spark devices as broadly available until OEM product pages or retail listings publish order details.",
      },
      {
        question: "Will there be RTX Spark desktop PCs?",
        answer:
          "Yes, NVIDIA says compact RTX Spark desktop PCs are part of the platform, with systems from major PC makers.",
      },
    ],
    pt: [
      {
        question: "Quais notebooks RTX Spark foram anunciados?",
        answer:
          "A NVIDIA lista ASUS ProArt P16, Dell XPS 16, HP OmniBook X 14, Lenovo Yoga Pro 9n, Microsoft Surface Laptop Ultra e MSI Prestige N16 Flip AI+.",
      },
      {
        question: "Já dá para comprar notebook RTX Spark?",
        answer:
          "Este guia não trata dispositivos RTX Spark como amplamente disponíveis até existirem páginas de OEM ou varejo com pedidos.",
      },
      {
        question: "Haverá desktops RTX Spark?",
        answer:
          "Sim, a NVIDIA diz que desktops compactos RTX Spark fazem parte da plataforma, com sistemas de grandes fabricantes.",
      },
    ],
  },
  vsApple: {
    en: [
      {
        question: "Is RTX Spark faster than Apple M5?",
        answer:
          "There is no safe independent benchmark answer yet because RTX Spark systems have not broadly launched. Compare platform fit first.",
      },
      {
        question: "Which is better for local AI, RTX Spark or Apple M5?",
        answer:
          "RTX Spark is likely stronger for CUDA/RTX AI workflows, while Apple M5 is stronger if the work is already built around macOS and Apple frameworks.",
      },
      {
        question: "Should Mac users switch for RTX Spark?",
        answer:
          "Only if CUDA, Windows-native agents, RTX gaming, or specific NVIDIA AI tools matter more than the Mac ecosystem.",
      },
    ],
    pt: [
      {
        question: "RTX Spark é mais rápido que Apple M5?",
        answer:
          "Ainda não há benchmark independente seguro porque sistemas RTX Spark não foram amplamente lançados. Compare primeiro o encaixe da plataforma.",
      },
      {
        question: "Qual é melhor para IA local, RTX Spark ou Apple M5?",
        answer:
          "RTX Spark tende a ser melhor para fluxos CUDA/RTX; Apple M5 tende a ser melhor se o trabalho já vive no macOS e frameworks Apple.",
      },
      {
        question: "Usuários de Mac devem trocar para RTX Spark?",
        answer:
          "Só se CUDA, agentes Windows, jogos RTX ou ferramentas NVIDIA específicas forem mais importantes que o ecossistema Mac.",
      },
    ],
  },
  vsSnapdragon: {
    en: [
      {
        question: "Is RTX Spark better than Snapdragon X for AI PCs?",
        answer:
          "They target different strengths: RTX Spark emphasizes CUDA/RTX GPU AI and memory, while Snapdragon X emphasizes efficient NPU-led Windows AI PCs.",
      },
      {
        question: "Are NPU TOPS and RTX Spark FP4 petaflops comparable?",
        answer:
          "Not directly. They describe different compute engines, precision levels, and workload targets.",
      },
      {
        question: "Which should I buy for a Windows AI laptop?",
        answer:
          "Choose Snapdragon X for mobility-first AI PC use. Wait for RTX Spark if local CUDA workloads, larger models, RTX creation, or gaming matter more.",
      },
    ],
    pt: [
      {
        question: "RTX Spark é melhor que Snapdragon X para AI PCs?",
        answer:
          "Eles miram forças diferentes: RTX Spark enfatiza IA em GPU CUDA/RTX e memória; Snapdragon X enfatiza eficiência com NPU no Windows.",
      },
      {
        question: "TOPS de NPU e petaflops FP4 do RTX Spark são comparáveis?",
        answer:
          "Não diretamente. São motores, precisões e cargas de trabalho diferentes.",
      },
      {
        question: "Qual comprar para notebook Windows com IA?",
        answer:
          "Escolha Snapdragon X para mobilidade e bateria. Espere RTX Spark se CUDA, modelos maiores, criação RTX ou jogos importam mais.",
      },
    ],
  },
  localAi: {
    en: [
      {
        question: "Can RTX Spark run local LLMs?",
        answer:
          "NVIDIA positions RTX Spark for local AI and says it can run large LLM and agent workloads, but exact speed depends on final hardware, quantization, and runtime.",
      },
      {
        question: "Why does 128GB unified memory matter?",
        answer:
          "Large local models are often memory-bound. A bigger unified memory pool can make larger quantized models and longer contexts more practical.",
      },
      {
        question: "Will RTX Spark replace cloud AI?",
        answer:
          "No. It may reduce cloud dependence for prototyping and personal agents, but frontier models, training, and team-scale workloads can still need cloud infrastructure.",
      },
    ],
    pt: [
      {
        question: "RTX Spark roda LLMs locais?",
        answer:
          "A NVIDIA posiciona RTX Spark para IA local e cargas de trabalho grandes, mas velocidade real depende de hardware final, quantização e ambiente de execução.",
      },
      {
        question: "Por que 128GB de memória unificada importa?",
        answer:
          "Modelos locais grandes costumam ser limitados por memória. Um pool maior ajuda modelos quantizados e contextos longos.",
      },
      {
        question: "RTX Spark substitui IA em nuvem?",
        answer:
          "Não. Pode reduzir dependência para protótipos e agentes pessoais, mas modelos de ponta e cargas de trabalho de equipe ainda podem exigir nuvem.",
      },
    ],
  },
  gaming: {
    en: [
      {
        question: "Is RTX Spark good for gaming?",
        answer:
          "NVIDIA positions RTX Spark as game-ready with RTX features, but real buying advice needs independent benchmarks from shipping devices.",
      },
      {
        question: "Does RTX Spark support DLSS?",
        answer:
          "NVIDIA says RTX Spark devices support the full DLSS suite as part of the RTX platform positioning.",
      },
      {
        question: "Can RTX Spark replace a gaming desktop GPU?",
        answer:
          "That is unknown. Small desktop and laptop performance will depend on power limits, thermals, clocks, and exact configurations.",
      },
    ],
    pt: [
      {
        question: "RTX Spark é bom para jogos?",
        answer:
          "A NVIDIA posiciona RTX Spark como pronto para jogos com recursos RTX, mas conselho de compra precisa de benchmarks independentes.",
      },
      {
        question: "RTX Spark suporta DLSS?",
        answer:
          "A NVIDIA diz que dispositivos RTX Spark suportam a suíte DLSS completa dentro da plataforma RTX.",
      },
      {
        question: "RTX Spark substitui uma GPU desktop gamer?",
        answer:
          "Ainda é desconhecido. Desempenho depende de energia, térmica, clocks e configuração exata.",
      },
    ],
  },
  releaseDate: {
    en: [
      {
        question: "When will NVIDIA RTX Spark devices launch?",
        answer:
          "NVIDIA says RTX Spark Windows PCs arrive in October 2026. The announced lineup includes slim laptops and compact desktop PCs; exact retail dates vary by manufacturer and region.",
      },
      {
        question: "Which companies will make RTX Spark PCs?",
        answer:
          "NVIDIA names ASUS, Dell, HP, Lenovo, Microsoft Surface, MSI, and compact desktop partners including GIGABYTE. Acer showed a compact desktop concept at IFA 2026, so wait for retail confirmation before treating it as a buyable SKU.",
      },
      {
        question: "Is there an exact RTX Spark release date?",
        answer:
          "No exact public retail date is confirmed yet. Treat narrower dates as unconfirmed unless an OEM or NVIDIA publishes them.",
      },
    ],
    pt: [
      {
        question: "Quando dispositivos NVIDIA RTX Spark chegam?",
        answer:
          "Segundo a NVIDIA, os PCs Windows com RTX Spark chegam em outubro de 2026. A linha anunciada inclui notebooks finos e desktops compactos; as datas de venda dependem do fabricante e da região.",
      },
      {
        question: "Quais empresas farão PCs RTX Spark?",
        answer:
          "A NVIDIA cita ASUS, Dell, HP, Lenovo, Microsoft Surface, MSI e parceiros de desktop como GIGABYTE. A Acer mostrou um conceito de desktop compacto na IFA 2026, então vale esperar confirmação de varejo antes de tratar como SKU comprável.",
      },
      {
        question: "Existe data exata para RTX Spark?",
        answer:
          "Ainda não há data exata de varejo confirmada. Datas mais específicas devem ser tratadas como não confirmadas.",
      },
    ],
  },
};

export function createRtxSparkMetadata(routeKey: RtxSparkRouteKey, locale: RtxSparkLocale): Metadata {
  const page = rtxSparkPageMeta[routeKey][locale];
  const route = rtxSparkRoutes[routeKey][locale];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: route,
    },
    robots: { index: false, follow: true },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: `${RTX_SPARK_BASE_URL}${route}`,
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}
