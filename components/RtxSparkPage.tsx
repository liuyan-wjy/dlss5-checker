import Link from "next/link";
import {
  RTX_SPARK_BASE_URL,
  rtxSparkComparisonRows,
  rtxSparkDeviceRows,
  rtxSparkFaqs,
  rtxSparkGamingRows,
  rtxSparkLastChecked,
  rtxSparkLocalAiRows,
  rtxSparkNavItems,
  rtxSparkPageMeta,
  rtxSparkRoutes,
  rtxSparkSources,
  rtxSparkSpecRows,
  rtxSparkTimelineRows,
  statusCopy,
  type RtxSparkLocale,
  type RtxSparkRouteKey,
  type RtxSparkStatus,
} from "@/lib/rtx-spark-data";

const routeOrder: RtxSparkRouteKey[] = [
  "hub",
  "specs",
  "laptops",
  "releaseDate",
  "localAi",
  "gaming",
  "vsApple",
  "vsSnapdragon",
];

const text = {
  en: {
    home: "DLSS 5 Checker",
    source: "Source",
    sources: "Sources and limits",
    related: "Related RTX Spark pages",
    faq: "Frequently asked questions",
    fastAnswer: "Fast answer",
    caveat: "Important caveat",
    whatChanges: "What to watch next",
    readMore: "Open page",
    spec: "Spec",
    value: "Current value",
    status: "Status",
    note: "How to read it",
    device: "Device",
    category: "Category",
    maker: "Maker",
    availability: "Availability",
    angle: "Question",
    rtxSpark: "RTX Spark",
    competitor: "Comparison platform",
    workload: "Workload",
    fit: "Best fit",
    caution: "Caution",
    claim: "NVIDIA says",
    proofNeeded: "Proof needed",
    date: "Date",
    event: "Event",
    meaning: "Meaning",
    latestUpdate:
      "Update this page only when NVIDIA, Microsoft, an OEM, or a first-party benchmark/review publishes stronger evidence.",
  },
  pt: {
    home: "DLSS 5 Checker",
    source: "Fonte",
    sources: "Fontes e limites",
    related: "Páginas relacionadas sobre RTX Spark",
    faq: "Perguntas frequentes",
    fastAnswer: "Resposta rápida",
    caveat: "Cautela importante",
    whatChanges: "O que acompanhar",
    readMore: "Abrir página",
    spec: "Especificação",
    value: "Valor atual",
    status: "Status",
    note: "Como interpretar",
    device: "Dispositivo",
    category: "Categoria",
    maker: "Fabricante",
    availability: "Disponibilidade",
    angle: "Pergunta",
    rtxSpark: "RTX Spark",
    competitor: "Plataforma comparada",
    workload: "Carga de trabalho",
    fit: "Uso indicado",
    caution: "Cautela",
    claim: "Afirmação",
    proofNeeded: "Prova necessária",
    date: "Data",
    event: "Evento",
    meaning: "Significado",
    latestUpdate:
      "Atualize esta página apenas quando NVIDIA, Microsoft, um OEM ou uma análise de primeira mão publicar evidência mais forte.",
  },
};

function StatusBadge({ locale, status }: { locale: RtxSparkLocale; status: RtxSparkStatus }) {
  const copy = statusCopy[status][locale];

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${copy.className}`}>
      {copy.label}
    </span>
  );
}

function SourceLink({ sourceKey }: { sourceKey: keyof typeof rtxSparkSources }) {
  const source = rtxSparkSources[sourceKey];

  return (
    <a href={source.href} className="text-blue-400 hover:underline" rel="noreferrer">
      {source.label}
    </a>
  );
}

function RtxSparkShell({
  children,
  locale,
  routeKey,
}: {
  children: React.ReactNode;
  locale: RtxSparkLocale;
  routeKey: RtxSparkRouteKey;
}) {
  const page = rtxSparkPageMeta[routeKey][locale];
  const faqItems = rtxSparkFaqs[routeKey][locale];
  const route = rtxSparkRoutes[routeKey][locale];
  const homeHref = locale === "pt" ? "/pt" : "/";

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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: text[locale].home,
        item: `${RTX_SPARK_BASE_URL}${homeHref === "/" ? "" : homeHref}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumb,
        item: `${RTX_SPARK_BASE_URL}${route}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={homeHref} className="hover:text-foreground transition-colors">
            {text[locale].home}
          </Link>
          <span className="mx-2">/</span>
          {routeKey === "hub" ? (
            <span>{page.breadcrumb}</span>
          ) : (
            <>
              <Link
                href={rtxSparkRoutes.hub[locale]}
                className="hover:text-foreground transition-colors"
              >
                NVIDIA RTX Spark
              </Link>
              <span className="mx-2">/</span>
              <span>{page.breadcrumb}</span>
            </>
          )}
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            {page.eyebrow} · {rtxSparkLastChecked[locale]}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{page.description}</p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">{text[locale].fastAnswer}</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">{page.fastAnswer}</p>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h2 className="font-bold mb-2">{text[locale].caveat}</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">{page.caveat}</p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">{text[locale].whatChanges}</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">{page.thirdPoint}</p>
          </div>
        </section>

        {children}

        <RelatedPages locale={locale} currentRoute={routeKey} />
        <FaqSection locale={locale} routeKey={routeKey} />
        <SourcesSection locale={locale} />
      </main>
    </>
  );
}

function RelatedPages({
  currentRoute,
  locale,
}: {
  currentRoute: RtxSparkRouteKey;
  locale: RtxSparkLocale;
}) {
  const pages = routeOrder.filter((key) => key !== currentRoute);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{text[locale].related}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {pages.map((key) => {
          const item = rtxSparkNavItems[key][locale];
          return (
            <Link
              key={key}
              href={rtxSparkRoutes[key][locale]}
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">{item.title}</div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function FaqSection({
  locale,
  routeKey,
}: {
  locale: RtxSparkLocale;
  routeKey: RtxSparkRouteKey;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{text[locale].faq}</h2>
      <div className="space-y-5">
        {rtxSparkFaqs[routeKey][locale].map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold mb-1">{item.question}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SourcesSection({ locale }: { locale: RtxSparkLocale }) {
  return (
    <section className="text-sm text-muted-foreground leading-relaxed">
      <h2 className="text-xl font-bold text-foreground mb-3">{text[locale].sources}</h2>
      <p className="mb-3">{text[locale].latestUpdate}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {Object.values(rtxSparkSources).map((source) => (
          <a
            key={source.href}
            href={source.href}
            className="text-blue-400 hover:underline"
            rel="noreferrer"
          >
            {source.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function SpecsTable({ locale }: { locale: RtxSparkLocale }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].spec}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].value}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].note}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].source}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkSpecRows[locale].map((row, index) => (
            <tr
              key={row.spec}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium">{row.spec}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.value}</td>
              <td className="px-4 py-3">
                <StatusBadge locale={locale} status={row.status} />
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
              <td className="px-4 py-3">
                <SourceLink sourceKey={row.sourceKey} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeviceTable({ locale }: { locale: RtxSparkLocale }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].device}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].category}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].maker}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].availability}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].note}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkDeviceRows[locale].map((row, index) => (
            <tr
              key={row.device}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium">{row.device}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.category}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.maker}</td>
              <td className="px-4 py-3">
                <StatusBadge locale={locale} status={row.status} />
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.availability}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComparisonTable({
  locale,
  variant,
}: {
  locale: RtxSparkLocale;
  variant: "apple" | "snapdragon";
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].angle}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].rtxSpark}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].competitor}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkComparisonRows[variant][locale].map((row, index) => (
            <tr
              key={row.angle}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium">{row.angle}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.rtxSpark}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.competitor}</td>
              <td className="px-4 py-3">
                <StatusBadge locale={locale} status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LocalAiTable({ locale }: { locale: RtxSparkLocale }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].workload}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].fit}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].caution}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkLocalAiRows[locale].map((row, index) => (
            <tr
              key={row.workload}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium">{row.workload}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.fit}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.caution}</td>
              <td className="px-4 py-3">
                <StatusBadge locale={locale} status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GamingTable({ locale }: { locale: RtxSparkLocale }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].claim}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].proofNeeded}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkGamingRows[locale].map((row, index) => (
            <tr
              key={row.claim}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium">{row.claim}</td>
              <td className="px-4 py-3 text-muted-foreground">
                <div className="mb-2">{row.currentStatus}</div>
                <StatusBadge locale={locale} status={row.status} />
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.proofNeeded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineTable({ locale }: { locale: RtxSparkLocale }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold">{text[locale].date}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].event}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].meaning}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].status}</th>
            <th className="px-4 py-3 text-left font-semibold">{text[locale].source}</th>
          </tr>
        </thead>
        <tbody>
          {rtxSparkTimelineRows[locale].map((row, index) => (
            <tr
              key={`${row.date}-${row.event}`}
              className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
            >
              <td className="px-4 py-3 font-medium whitespace-nowrap">{row.date}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.event}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.meaning}</td>
              <td className="px-4 py-3">
                <StatusBadge locale={locale} status={row.status} />
              </td>
              <td className="px-4 py-3">
                <SourceLink sourceKey={row.sourceKey} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HubContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Fatos principais" : "Key facts"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rtxSparkSpecRows[locale].slice(0, 4).map((row) => (
            <div key={row.spec} className="rounded-lg border border-border p-5">
              <div className="text-sm text-muted-foreground mb-2">{row.spec}</div>
              <div className="text-xl font-bold mb-3">{row.value}</div>
              <StatusBadge locale={locale} status={row.status} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Mapa do hub" : "Hub map"}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {routeOrder
            .filter((key) => key !== "hub")
            .map((key) => (
              <Link
                key={key}
                href={rtxSparkRoutes[key][locale]}
                className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
              >
                <div className="font-semibold mb-1">{rtxSparkNavItems[key][locale].title}</div>
                <p className="text-sm text-muted-foreground">
                  {rtxSparkNavItems[key][locale].description}
                </p>
              </Link>
            ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Dispositivos anunciados" : "Announced devices"}
        </h2>
        <DeviceTable locale={locale} />
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border p-5">
          <h2 className="font-bold mb-2">
            {locale === "pt" ? "Não é uma GPU comum" : "Not a normal GPU page"}
          </h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {locale === "pt"
              ? "RTX Spark é uma plataforma de AI PC com CPU, GPU, memória e software, não uma placa RTX discreta para comprar separadamente."
              : "RTX Spark is an AI PC platform with CPU, GPU, memory, and software positioning, not a standalone RTX card to buy separately."}
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h2 className="font-bold mb-2">
            {locale === "pt" ? "Não é DGX Spark" : "Not DGX Spark"}
          </h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {locale === "pt"
              ? "DGX Spark é um produto de outro nível. Esta página cobre RTX Spark para PCs Windows pessoais."
              : "DGX Spark is a different class of product. This hub covers RTX Spark for personal Windows PCs."}
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h2 className="font-bold mb-2">
            {locale === "pt" ? "Não prometa benchmarks" : "Do not promise benchmarks"}
          </h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {locale === "pt"
              ? "Antes do lançamento, a resposta honesta é separar afirmações oficiais de testes independentes ainda ausentes."
              : "Before launch, the honest answer is to separate official statements from independent tests that do not exist yet."}
          </p>
        </div>
      </section>
    </>
  );
}

function SpecsContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Tabela de especificações" : "Specification table"}
        </h2>
        <SpecsTable locale={locale} />
      </section>
      <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "Como ler números 'até'" : "How to read up-to numbers"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {locale === "pt"
            ? "Todos os números principais devem ser tratados como máximos de plataforma até os OEMs publicarem SKUs finais. Um notebook fino pode ter limites de energia, memória e térmica diferentes de um desktop compacto."
            : "Treat every headline number as a platform maximum until OEMs publish final SKUs. A slim laptop can have different power, memory, and thermal limits than a compact desktop."}
        </p>
      </section>
    </>
  );
}

function LaptopsContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Guia de dispositivos" : "Device guide"}
        </h2>
        <DeviceTable locale={locale} />
      </section>
      <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "Antes de comprar" : "Before buying"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {locale === "pt"
            ? "Espere por páginas oficiais dos OEMs, configuração de memória, preço, garantia, data regional e pelo menos uma análise com desempenho sustentado."
            : "Wait for OEM product pages, memory configurations, price, warranty, regional dates, and at least one review with sustained performance data."}
        </p>
      </section>
    </>
  );
}

function ComparisonContent({
  locale,
  variant,
}: {
  locale: RtxSparkLocale;
  variant: "apple" | "snapdragon";
}) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Comparação direta" : "Side-by-side comparison"}
        </h2>
        <ComparisonTable locale={locale} variant={variant} />
      </section>
      <section className="mb-10 rounded-lg border border-border p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "Melhor critério de decisão" : "Best decision filter"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {variant === "apple"
            ? locale === "pt"
              ? "Compare pelo ecossistema: Windows/CUDA/RTX e agentes locais contra macOS, apps Apple e disponibilidade atual dos Macs M5."
              : "Compare by ecosystem: Windows/CUDA/RTX and local agents versus macOS, Apple apps, and currently available M5 Macs."
            : locale === "pt"
              ? "Compare pela prioridade: mobilidade e NPU eficiente contra CUDA/RTX, memória maior, criação e jogos."
              : "Compare by priority: mobility and efficient NPU AI versus CUDA/RTX, larger memory, creation, and gaming."}
        </p>
      </section>
    </>
  );
}

function LocalAiContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Cargas de IA local" : "Local AI workloads"}
        </h2>
        <LocalAiTable locale={locale} />
      </section>
      <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "O que medir nos primeiros testes" : "What early tests should measure"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {locale === "pt"
            ? "As primeiras análises devem medir uso de memória, tokens por segundo, contexto sustentado, tempo até a primeira resposta, térmica, ruído, consumo e estabilidade dos agentes."
            : "Early reviews should measure memory fit, tokens per second, sustained context length, time to first response, thermals, noise, power draw, and agent stability."}
        </p>
      </section>
    </>
  );
}

function GamingContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Afirmações de jogos e provas pendentes" : "Gaming expectations and verification"}
        </h2>
        <GamingTable locale={locale} />
      </section>
      <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "Não use como ranking de FPS ainda" : "Do not use this as an FPS ranking yet"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {locale === "pt"
            ? "Sem hardware de varejo e benchmarks independentes, esta página deve ser um guia de status, não uma recomendação de compra gamer."
            : "Without retail hardware and independent benchmarks, this page should remain a status guide, not a gaming purchase recommendation."}
        </p>
      </section>
    </>
  );
}

function ReleaseDateContent({ locale }: { locale: RtxSparkLocale }) {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {locale === "pt" ? "Linha do tempo" : "Release timeline"}
        </h2>
        <TimelineTable locale={locale} />
      </section>
      <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
        <h2 className="text-xl font-bold mb-3">
          {locale === "pt" ? "Resposta segura para data" : "Safe release-date answer"}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {locale === "pt"
            ? "A data segura é outono de 2026. Qualquer mês, dia ou preço específico precisa de fonte da NVIDIA ou do OEM."
            : "The safe date answer is fall 2026. Any specific month, day, or price needs NVIDIA or OEM evidence."}
        </p>
      </section>
    </>
  );
}

export default function RtxSparkPage({
  locale,
  routeKey,
}: {
  locale: RtxSparkLocale;
  routeKey: RtxSparkRouteKey;
}) {
  let content: React.ReactNode;

  if (routeKey === "hub") {
    content = <HubContent locale={locale} />;
  } else if (routeKey === "specs") {
    content = <SpecsContent locale={locale} />;
  } else if (routeKey === "laptops") {
    content = <LaptopsContent locale={locale} />;
  } else if (routeKey === "vsApple") {
    content = <ComparisonContent locale={locale} variant="apple" />;
  } else if (routeKey === "vsSnapdragon") {
    content = <ComparisonContent locale={locale} variant="snapdragon" />;
  } else if (routeKey === "localAi") {
    content = <LocalAiContent locale={locale} />;
  } else if (routeKey === "gaming") {
    content = <GamingContent locale={locale} />;
  } else {
    content = <ReleaseDateContent locale={locale} />;
  }

  return (
    <RtxSparkShell locale={locale} routeKey={routeKey}>
      {content}
    </RtxSparkShell>
  );
}
