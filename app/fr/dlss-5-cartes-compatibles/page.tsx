import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import UpdateAlertForm from "@/components/UpdateAlertForm";
import { OG_IMAGE_FR } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/fr/dlss-5-cartes-compatibles";
const TITLE = "DLSS 5 : quelles cartes graphiques sont compatibles ? [2026]";
const DESCRIPTION =
  "Liste complète des cartes compatibles DLSS 5 : RTX 50 et RTX Spark confirmées, RTX 40 prévue sans date, RTX 30/20 non prises en charge. Sources NVIDIA officielles.";
const CHECKED = "2026-11-24";
const CHECKED_LABEL = "24 novembre 2026";

const SOURCES = {
  nvidiaFr: "https://www.nvidia.com/fr-fr/geforce/technologies/dlss/",
  launch: "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/",
  october: "https://www.nvidia.com/en-us/geforce/news/dlss-5-faster-ai-model-hogwarts-legacy-rtx-spark-laptops/",
  november: "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/",
  driver62124: "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/",
  rtx40Faq: "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/",
  gfnReqs: "https://www.nvidia.com/en-us/geforce-now/system-reqs/",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/dlss-5-cartes-compatibles",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: "https://www.dlss5.net/de/dlss-5-grafikkarten",
      ko: "https://www.dlss5.net/ko/dlss-5-supported-cards",
      fr: PAGE_URL,
      "x-default": "https://www.dlss5.net/dlss-5-supported-cards",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: PAGE_URL,
    locale: "fr_FR",
    images: [OG_IMAGE_FR],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_FR.url],
  },
};

const STATUS_COPY: Record<
  DlssSupport,
  {
    short: string;
    verdict: string;
    title: string;
    note: string;
    dot: string;
    box: string;
    text: string;
  }
> = {
  confirmed: {
    short: "RTX 50 & RTX Spark",
    verdict: "Pris en charge",
    title: "GeForce RTX 50 et RTX Spark : DLSS 5 disponible maintenant",
    note: "Toutes les cartes RTX 50 de bureau et PC portables (de la RTX 5050 à la RTX 5090) ainsi que les portables RTX Spark prennent en charge le rendu neuronal DLSS 5, en plus du DLSS 4.5 (Super Resolution, Ray Reconstruction et Multi Frame Generation jusqu'à 6X).",
    dot: "bg-green-400",
    box: "border-green-500/30 bg-green-500/5",
    text: "text-green-400",
  },
  planned: {
    short: "RTX 40",
    verdict: "Prévu, sans date officielle",
    title: "GeForce RTX 40 : prévu par NVIDIA, pas encore actif",
    note: "NVIDIA a confirmé vouloir apporter DLSS 5 à la série RTX 40 après l'optimisation sur RTX 50, sans annoncer de date publique. En attendant, votre carte conserve Super Resolution, DLAA, Ray Reconstruction et Frame Generation (2X).",
    dot: "bg-yellow-400",
    box: "border-yellow-500/30 bg-yellow-500/5",
    text: "text-yellow-400",
  },
  unsupported: {
    short: "RTX 30 & RTX 20",
    verdict: "Pas de DLSS 5 officiel",
    title: "GeForce RTX 30 et RTX 20 : aucun support DLSS 5 officiel",
    note: "NVIDIA n'a annoncé aucun déploiement officiel de DLSS 5 pour les RTX 30 et RTX 20. Ces cartes continuent toutefois d'utiliser DLSS Super Resolution (y compris le modèle DLSS 4.5), DLAA et Ray Reconstruction.",
    dot: "bg-orange-400",
    box: "border-orange-500/30 bg-orange-500/5",
    text: "text-orange-400",
  },
  none: {
    short: "GTX, AMD, Intel",
    verdict: "Pas de DLSS local",
    title: "GTX, AMD Radeon et Intel Arc : aucun DLSS en local",
    note: "DLSS nécessite les cœurs Tensor d'une carte NVIDIA RTX. Les utilisateurs AMD doivent activer FSR dans les options du jeu, et les utilisateurs Intel Arc disposent de XeSS.",
    dot: "bg-red-400",
    box: "border-red-500/30 bg-red-500/5",
    text: "text-red-400",
  },
};

const STATUS_ORDER = ["confirmed", "planned", "unsupported", "none"] as const;

const popularCards = [
  {
    name: "RTX 5060, RTX 5060 Ti et RTX 5070",
    status: "confirmed" as DlssSupport,
    text: "Entièrement compatibles avec DLSS 5 en local (versions bureau et ordinateur portable). Comme le rendu neuronal ajoute un coût GPU notable, associez-le à DLSS Super Resolution (Qualité ou Équilibré) ou au Multi Frame Generation en 1440p/4K.",
  },
  {
    name: "RTX 4060, RTX 4070, 4070 SUPER et 4090",
    status: "planned" as DlssSupport,
    text: "Toujours en attente : le modèle allégé d'octobre 2026 est réservé pour l'instant aux RTX 50, aux portables RTX Spark et à GeForce NOW Ultimate. Une mise à jour de pilote ne débloque pas encore DLSS 5 sur RTX 40.",
  },
  {
    name: "RTX 3060, RTX 3070, RTX 3080 et RTX 3090",
    status: "unsupported" as DlssSupport,
    text: "Non compatibles officiellement, même avec 12 Go ou 24 Go de VRAM. NVIDIA n'a annoncé aucun calendrier pour l'architecture Ampere. Profitez en revanche de DLSS 4.5 Super Resolution et du Ray Reconstruction dans les jeux pris en charge.",
  },
  {
    name: "AMD Radeon RX, Intel Arc et GTX",
    status: "none" as DlssSupport,
    text: "Aucun support local possible. Méfiez-vous des sites proposant un « téléchargement DLSS 5 pour AMD » : la seule solution officielle pour tester DLSS 5 sans carte RTX 50 reste le cloud GeForce NOW Ultimate.",
  },
];

const faqs = [
  {
    question: "Quelles cartes graphiques sont compatibles avec DLSS 5 aujourd'hui ?",
    answer:
      "Au 24 novembre 2026, seules les cartes GeForce RTX 50 (bureau et PC portable, de la RTX 5050 à la RTX 5090) et les ordinateurs portables RTX Spark prennent en charge DLSS 5 en local dans les quatre jeux disponibles.",
  },
  {
    question: "DLSS 5 va-t-il arriver sur la série RTX 40 ?",
    answer:
      "Oui, NVIDIA indique que le support des cartes GeForce RTX 40 est prévu après les travaux d'optimisation sur RTX 50, mais aucune date officielle n'a encore été annoncée. Les quatre jeux DLSS 5 actuels n'incluent pas encore les RTX 40.",
  },
  {
    question: "Ma RTX 3060 ou RTX 3080 peut-elle faire tourner DLSS 5 ?",
    answer:
      "Pas officiellement. Les séries RTX 30 et RTX 20 ne figurent pas dans la feuille de route officielle de DLSS 5. Elles conservent néanmoins DLSS Super Resolution, DLAA et Ray Reconstruction, et vous pouvez essayer les jeux DLSS 5 via GeForce NOW Ultimate.",
  },
  {
    question: "Quelle est la différence entre DLSS 5 et DLSS 4.5 ?",
    answer:
      "DLSS 4.5 regroupe l'upscaling Super Resolution (modèle Transformer 2e génération), le Ray Reconstruction et le Dynamic Multi Frame Generation 6X dédiés à la fluidité. DLSS 5 ajoute une couche distincte de rendu neuronal guidé en 3D (3D-Guided Neural Rendering) dédiée à la fidélité des éclairages et des matériaux, avec un coût supplémentaire en FPS.",
  },
  {
    question: "Quels jeux proposent déjà DLSS 5 en novembre 2026 ?",
    answer:
      "Quatre jeux PC intègrent DLSS 5 en live : NBA 2K27 (depuis le 3 septembre), Hogwarts Legacy (depuis le 5 novembre), War Thunder (depuis le 12 novembre) et Where Winds Meet (depuis le 23/24 novembre, avec le pilote 621.24 WHQL). Les autres titres cités par NVIDIA restent annoncés sans patch disponible.",
  },
  {
    question: "Existe-t-il un installateur ou un mod officiel pour activer DLSS 5 partout ?",
    answer:
      "Non. Il n'existe aucun installateur universel officiel : il faut un pilote NVIDIA Game Ready récent et un jeu officiellement mis à jour. Les outils communautaires (Swapper, Manager, packs « DLSS 5 for all ») reposent sur des fichiers non signés exposant à des risques de logiciels malveillants et de bannissement anti-triche en ligne.",
  },
];

function formatFrenchMemory(vram: string): string {
  if (vram.toLowerCase().includes("shared")) return "Mémoire unifiée partagée avec le CPU";
  if (vram.toLowerCase().includes("or")) return vram.replace(/\bor\b/gi, "ou").replace(/GB/g, "Go");
  return vram.replace(/GB/g, "Go");
}

function formatFrenchFeatures(gpu: GPU): string {
  if (gpu.current_dlss_features.includes("dynamic_mfg_6x")) {
    return "DLSS 4.5 Dynamic MFG 6X, Multi Frame Generation, Super Resolution, Ray Reconstruction";
  }
  if (gpu.current_dlss_features.includes("frame_generation")) {
    return "Frame Generation (2X), Super Resolution, Ray Reconstruction, DLAA";
  }
  if (gpu.current_dlss_features.includes("ray_reconstruction")) {
    return "Super Resolution (modèle 4.5 inclus), Ray Reconstruction, DLAA";
  }
  if (gpu.brand === "AMD") return "Utiliser AMD FSR selon le jeu";
  if (gpu.brand === "Intel") return "Utiliser Intel XeSS selon le jeu";
  return "Pas de support DLSS";
}

export default function FrenchSupportedCardsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "fr",
      datePublished: CHECKED,
      dateModified: CHECKED,
      mainEntityOfPage: PAGE_URL,
      author: { "@type": "Person", name: "liuyan-wjy", url: "https://www.dlss5.net/about" },
      publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
        <nav aria-label="Langue" className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span aria-current="page" className="font-medium text-foreground">Français</span>
          <Link href="/dlss-5-supported-cards" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/dlss-5-quais-placas" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
          <Link href="/de/dlss-5-grafikkarten" hrefLang="de" lang="de" className="hover:text-foreground">Deutsch</Link>
          <Link href="/ko/dlss-5-supported-cards" hrefLang="ko" lang="ko" className="hover:text-foreground">한국어</Link>
        </nav>

        <article id="guide-fr" className="space-y-12">
          <header>
            <p className="mb-3 text-sm font-semibold text-blue-400">
              Vérifié le <time dateTime={CHECKED}>{CHECKED_LABEL}</time>
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              DLSS 5 : quelles cartes graphiques sont compatibles ?
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pour activer officiellement NVIDIA DLSS 5 (rendu neuronal guidé en 3D) sur votre PC aujourd&apos;hui,
              il faut une carte <strong className="text-foreground">GeForce RTX 50</strong> (bureau ou portable) ou
              un PC portable <strong className="text-foreground">RTX Spark</strong>. La génération RTX 40 est prévue
              sans date publique, tandis que les RTX 30, RTX 20, GTX, AMD Radeon et Intel Arc n&apos;ont aucun support
              DLSS 5 en local.
            </p>
          </header>

          <section className="grid gap-3 sm:grid-cols-2">
            {STATUS_ORDER.map((status) => {
              const info = STATUS_COPY[status];
              return (
                <a
                  key={status}
                  href={`#status-${status}`}
                  className={`rounded-xl border p-4 transition-colors hover:border-blue-400 ${info.box}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${info.dot}`} aria-hidden="true" />
                    <span className="font-bold text-foreground">{info.short}</span>
                  </div>
                  <p className={`mt-1 text-sm font-semibold ${info.text}`}>{info.verdict}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">{info.note}</p>
                </a>
              );
            })}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">DLSS 5 n&apos;est pas un simple boost de FPS</h2>
            <p className="leading-relaxed text-foreground/85">
              Beaucoup de joueurs associent encore DLSS 5 à la génération d&apos;images multiples (Multi Frame
              Generation), qui relève en réalité de DLSS 4 et DLSS 4.5 (jusqu&apos;au Dynamic MFG 6X sur RTX 50).
              DLSS 5 introduit un module distinct : le <strong>3D-Guided Neural Rendering</strong>, qui s&apos;appuie
              sur les données de scène, les vecteurs de mouvement et l&apos;éclairage du moteur pour affiner la
              lumière, les ombres et les matériaux en temps réel.
            </p>
            <p className="leading-relaxed text-foreground/85">
              En contrepartie, DLSS 5 consomme des ressources GPU supplémentaires. En octobre 2026, NVIDIA a
              déployé un modèle révisé environ 24 % plus léger (~118 millions de paramètres), nécessitant environ
              20 % de VRAM en moins en 4K et près de deux fois moins de temps GPU que la version de septembre.
              Malgré ce gain d&apos;efficacité, il reste recommandé de l&apos;associer à DLSS Super Resolution ou au
              Multi Frame Generation pour préserver un framerate élevé.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Réponses rapides pour les cartes les plus recherchées</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {popularCards.map((card) => {
                const info = STATUS_COPY[card.status];
                return (
                  <div key={card.name} className="rounded-xl border border-border bg-card/50 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold">{card.name}</h3>
                      <span className={`text-xs font-semibold ${info.text}`}>{info.verdict}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Jeux disponibles, pilote 621.24 et option Cloud</h2>
            <p className="leading-relaxed text-foreground/85">
              Posséder une RTX 50 ne suffit pas à activer DLSS 5 dans toute votre bibliothèque : le jeu doit avoir
              reçu son patch officiel et votre PC doit disposer d&apos;un pilote NVIDIA Game Ready récent
              (<strong>621.24 WHQL</strong> ou plus récent pour couvrir l&apos;ensemble des quatre jeux actifs) sous
              Windows 11.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
              <li>
                <strong>NBA 2K27</strong> (depuis le 3 septembre 2026 ; modèle rapide depuis le 16 octobre) — pilote 616.64+, touche F9.{" "}
                <Link href="/games/nba-2k27-dlss-5" lang="en" className="text-blue-400 hover:underline">Guide anglais</Link>
              </li>
              <li>
                <strong>Hogwarts Legacy</strong> (depuis le 5 novembre) — pilote 621.14+, raccourci Shift+Alt+B.{" "}
                <Link href="/games/hogwarts-legacy-dlss-5" lang="en" className="text-blue-400 hover:underline">Guide anglais</Link>
              </li>
              <li>
                <strong>War Thunder</strong> (depuis le 12 novembre) — mise à jour majeure Eagle&apos;s Shadow.
              </li>
              <li>
                <strong>Where Winds Meet</strong> (depuis le 23/24 novembre) — pilote 621.24 WHQL, option activable avec réglages visuels personnalisés.{" "}
                <Link href="/games/where-winds-meet-dlss-5" lang="en" className="text-blue-400 hover:underline">Guide anglais</Link>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sans carte RTX 50 en local (RTX 40, RTX 30, AMD, Mac ou PC portable bureautique), le seul accès
              officiel passe par le streaming <strong>GeForce NOW Ultimate</strong> sur serveurs RTX 5080 (NVIDIA
              recommande au moins 25 Mbit/s en 1080p60 et la possession du jeu sur PC).
            </p>
          </section>

          <UpdateAlertForm
            locale="fr"
            defaultTopics={["rtx40", "games"]}
            sourcePage="/fr/dlss-5-cartes-compatibles"
          />

          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Statut complet des {ALL_GPUS.length} cartes suivies</h2>
            {STATUS_ORDER.map((status) => {
              const info = STATUS_COPY[status];
              const cards = ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);
              return (
                <section key={status} id={`status-${status}`} className="scroll-mt-24 space-y-3">
                  <h3 className={`text-xl font-bold ${info.text}`}>{info.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{info.note}</p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {cards.map((gpu) => (
                      <li
                        key={gpu.id}
                        data-gpu-id={gpu.id}
                        className="rounded-lg border border-border bg-card/40 p-3.5 text-sm"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-semibold text-foreground">{gpu.name}</span>
                          <span className="text-xs text-muted-foreground">{formatFrenchMemory(gpu.vram)}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{formatFrenchFeatures(gpu)}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold">Questions fréquentes sur la compatibilité DLSS 5</h2>
            {faqs.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-3 sm:grid-cols-2">
            <Link href="/" lang="en" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">Vérificateur interactif de GPU (anglais)</div>
              <p className="text-sm text-muted-foreground">Recherchez votre carte exacte et comparez vos fonctions DLSS.</p>
            </Link>
            <Link href="/dlss-5-games" lang="en" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">Liste complète des jeux DLSS 5 (anglais)</div>
              <p className="text-sm text-muted-foreground">Suivez les 4 jeux actifs et les titres annoncés par NVIDIA.</p>
            </Link>
          </section>

          <section className="text-sm leading-relaxed text-muted-foreground">
            <h2 className="mb-3 text-xl font-bold text-foreground">Sources officielles</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><a href={SOURCES.nvidiaFr} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA France : tableau officiel des technologies DLSS</a></li>
              <li><a href={SOURCES.launch} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA : présentation officielle de DLSS 5 3D-Guided Neural Rendering</a></li>
              <li><a href={SOURCES.october} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA : modèle DLSS 5 allégé d&apos;octobre 2026 et RTX Spark</a></li>
              <li><a href={SOURCES.november} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA : déploiement sur Hogwarts Legacy, War Thunder et Where Winds Meet</a></li>
              <li><a href={SOURCES.driver62124} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA : pilote Game Ready 621.24 WHQL</a></li>
              <li><a href={SOURCES.rtx40Faq} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA : FAQ officielle sur le statut des RTX 40</a></li>
              <li><a href={SOURCES.gfnReqs} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA GeForce NOW : configuration requise</a></li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
