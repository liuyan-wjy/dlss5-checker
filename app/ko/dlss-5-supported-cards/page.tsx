import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import UpdateAlertForm from "@/components/UpdateAlertForm";
import { OG_IMAGE_KO } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/ko/dlss-5-supported-cards";
const TITLE = "DLSS 5 지원 그래픽카드: RTX 50 확정·RTX 40 예정 [2026]";
const DESCRIPTION =
  "DLSS 5 지원 그래픽카드 전체 목록. RTX 50·RTX Spark 공식 지원, RTX 40 지원 예정(일정 미정), RTX 30·20 미지원 및 GTX·AMD·Intel 호환 여부를 NVIDIA 공식 출처로 정리했습니다.";
const CHECKED = "2026-11-24";
const CHECKED_LABEL = "2026년 11월 24일";

const SOURCES = {
  nvidiaKr: "https://www.nvidia.com/ko-kr/geforce/technologies/dlss/",
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
    canonical: "/ko/dlss-5-supported-cards",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
      de: "https://www.dlss5.net/de/dlss-5-grafikkarten",
      ko: PAGE_URL,
      fr: "https://www.dlss5.net/fr/dlss-5-cartes-compatibles",
      "x-default": "https://www.dlss5.net/dlss-5-supported-cards",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: PAGE_URL,
    locale: "ko_KR",
    images: [OG_IMAGE_KO],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_KO.url],
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
    short: "RTX 50 · RTX Spark",
    verdict: "공식 지원 (사용 가능)",
    title: "RTX 50 시리즈 및 RTX Spark: DLSS 5 즉시 사용 가능",
    note: "데스크톱과 노트북용 RTX 50 전 모델(RTX 5050~5090) 및 RTX Spark 노트북에서 DLSS 5 뉴럴 렌더링을 공식 지원합니다. DLSS 4.5 슈퍼 해상도, DLAA, 레이 리컨스트럭션, 6X 다이내믹 멀티 프레임 생성도 함께 사용할 수 있습니다.",
    dot: "bg-green-400",
    box: "border-green-500/30 bg-green-500/5",
    text: "text-green-400",
  },
  planned: {
    short: "RTX 40 시리즈",
    verdict: "지원 예정 (일정 미정)",
    title: "RTX 40 시리즈: 추후 지원 예정, 아직 날짜 미정",
    note: "NVIDIA는 RTX 50 최적화 이후 RTX 40 시리즈 지원을 계획 중이라고 밝혔으나, 2026년 11월 24일 기준 공개된 출시일이나 로컬 설정은 없습니다. 현재는 슈퍼 해상도, DLAA, 레이 리컨스트럭션, 프레임 생성(2X)을 그대로 쓸 수 있습니다.",
    dot: "bg-yellow-400",
    box: "border-yellow-500/30 bg-yellow-500/5",
    text: "text-yellow-400",
  },
  unsupported: {
    short: "RTX 30 · RTX 20",
    verdict: "DLSS 5 미지원",
    title: "RTX 30 및 RTX 20 시리즈: 공식 DLSS 5 미지원",
    note: "공식 지원 목록에 없으며 추후 지원 계획도 발표되지 않았습니다. 다만 DLSS 4.5 트랜스포머 슈퍼 해상도, DLAA, 레이 리컨스트럭션은 지원 게임에서 계속 사용할 수 있습니다.",
    dot: "bg-orange-400",
    box: "border-orange-500/30 bg-orange-500/5",
    text: "text-orange-400",
  },
  none: {
    short: "GTX · AMD · Intel",
    verdict: "로컬 DLSS 불가",
    title: "GTX, AMD Radeon, Intel Arc: 로컬 NVIDIA DLSS 미지원",
    note: "DLSS는 NVIDIA RTX 전용 텐서 코어가 필요합니다. AMD 그래픽카드는 FSR을, Intel Arc는 XeSS를 게임 내 업스케일링 옵션으로 활용하세요.",
    dot: "bg-red-400",
    box: "border-red-500/30 bg-red-500/5",
    text: "text-red-400",
  },
};

const STATUS_ORDER = ["confirmed", "planned", "unsupported", "none"] as const;

const popularCards = [
  {
    name: "RTX 5060 / RTX 5060 Ti / RTX 5070",
    status: "confirmed" as DlssSupport,
    text: "데스크톱과 노트북 모두 공식 DLSS 5 지원 대상입니다. 뉴럴 렌더링은 화질 옵션이며 GPU 부하가 추가되므로, 1440p 이상에서는 DLSS 슈퍼 해상도(밸런스/성능)나 멀티 프레임 생성과 함께 조합하는 편이 유리합니다.",
  },
  {
    name: "RTX 4060 / RTX 4070 / RTX 4070 SUPER / RTX 4090",
    status: "planned" as DlssSupport,
    text: "NVIDIA가 RTX 40 시리즈 후속 지원을 예고했지만 아직 출시 일정과 로컬 드라이버 경로가 없습니다. 2026년 10월 경량화된 신규 DLSS 5 모델 역시 현재까지는 RTX 50, RTX Spark, GeForce NOW에만 배포되었습니다.",
  },
  {
    name: "RTX 3060 / RTX 3070 / RTX 3080 / RTX 3090",
    status: "unsupported" as DlssSupport,
    text: "VRAM이 12GB(RTX 3060)나 24GB(RTX 3090)여도 공식 DLSS 5 지원 대상이 아닙니다. NVIDIA는 RTX 30·20 시리즈에 대한 DLSS 5 계획을 발표하지 않았습니다. 대신 최신 DLSS 4.5 슈퍼 해상도와 레이 리컨스트럭션은 그대로 작동합니다.",
  },
  {
    name: "GTX 1660 / AMD Radeon RX / Intel Arc",
    status: "none" as DlssSupport,
    text: "로컬 PC에서 DLSS 자체를 실행할 수 없습니다. 인터넷에 떠도는 'AMD용 DLSS 5 다운로드'나 비공식 DLL 패치는 악성코드 및 안티치트 제재 위험이 있으니 설치하지 마세요.",
  },
];

const faqs = [
  {
    question: "현재 DLSS 5를 공식 지원하는 그래픽카드는 무엇인가요?",
    answer:
      "2026년 11월 24일 기준, 로컬 PC에서 공식 지원되는 모델은 GeForce RTX 50 시리즈(RTX 5050~5090 데스크톱 및 노트북)와 RTX Spark 노트북입니다. NBA 2K27, 호그와트 레거시, 워 썬더, 연운(Where Winds Meet) 등 현재 출시된 4개 게임 모두 동일한 하드웨어 기준을 따릅니다.",
  },
  {
    question: "RTX 40 시리즈(4060, 4070, 4080, 4090)는 언제 DLSS 5를 지원하나요?",
    answer:
      "NVIDIA는 RTX 50 최적화 작업 이후 RTX 40 시리즈에 DLSS 5를 제공할 계획이라고 밝혔지만, 아직 공식 배포 날짜를 공개하지 않았습니다. 드라이버 업데이트만으로 미리 활성화되지는 않으며, 공식 발표가 나오면 이 페이지와 알림으로 즉시 안내합니다.",
  },
  {
    question: "RTX 3060이나 RTX 3080, RTX 3090에서도 DLSS 5를 쓸 수 있나요?",
    answer:
      "공식적으로는 지원하지 않습니다. NVIDIA가 RTX 30 및 RTX 20 시리즈용 DLSS 5 계획을 밝힌 바가 없습니다. 다만 최신 DLSS 4.5 슈퍼 해상도, DLAA, 레이 리컨스트럭션은 계속 사용할 수 있으며, 로컬 업그레이드 없이 체험하려면 GeForce NOW Ultimate 클라우드 스트리밍을 이용할 수 있습니다.",
  },
  {
    question: "DLSS 5는 프레임(FPS)을 올려주는 기능인가요?",
    answer:
      "아닙니다. 프레임 향상을 담당하는 기능은 DLSS 슈퍼 해상도(업스케일링)와 DLSS 4 / 4.5의 프레임 생성·멀티 프레임 생성입니다. DLSS 5의 핵심인 3D 가이드 뉴럴 렌더링은 조명, 그림자, 재질 표현을 끌어올리는 화질 기능이며 오히려 GPU 연산 비용이 추가로 발생합니다.",
  },
  {
    question: "DLSS 5를 지원하는 게임은 현재 몇 개인가요?",
    answer:
      "2026년 11월 24일 기준 실제 플레이 가능한 게임은 NBA 2K27(9월 3일), 호그와트 레거시(11월 5일), 워 썬더(11월 12일), Where Winds Meet(11월 23~24일) 총 4개입니다. 스타필드, 바이오하자드 레퀴엠 등 나머지 발표작은 패치 공개 전까지 예정 상태로 구분합니다.",
  },
  {
    question: "비공식 모드(DLSS 5 Swapper, Manager 등)로 구형 카드에서 켜도 안전한가요?",
    answer:
      "권장하지 않습니다. 비공식 래퍼와 변조된 DLL은 NVIDIA의 공식 서명이 없으며, 위장 악성코드 위험과 온라인 게임 안티치트(VAC, Easy Anti-Cheat, BattlEye 등) 계정 정지 위험이 존재합니다.",
  },
];

function formatKoreanMemory(vram: string): string {
  if (vram.toLowerCase().includes("shared")) return "CPU와 통합 메모리 공유";
  if (vram.toLowerCase().includes("or")) return vram.replace(/\bor\b/gi, "또는");
  return vram;
}

function formatKoreanFeatures(gpu: GPU): string {
  if (gpu.current_dlss_features.includes("dynamic_mfg_6x")) {
    return "DLSS 4.5 다이내믹 6X MFG, 멀티 프레임 생성, 슈퍼 해상도, 레이 리컨스트럭션";
  }
  if (gpu.current_dlss_features.includes("frame_generation")) {
    return "프레임 생성(2X), 슈퍼 해상도, 레이 리컨스트럭션, DLAA";
  }
  if (gpu.current_dlss_features.includes("ray_reconstruction")) {
    return "슈퍼 해상도(4.5 모델 포함), 레이 리컨스트럭션, DLAA";
  }
  if (gpu.brand === "AMD") return "게임 내 AMD FSR 사용";
  if (gpu.brand === "Intel") return "게임 내 Intel XeSS 사용";
  return "DLSS 미지원";
}

export default function KoreanSupportedCardsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "ko",
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
        <nav aria-label="언어 선택" className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span aria-current="page" className="font-medium text-foreground">한국어</span>
          <Link href="/dlss-5-supported-cards" hrefLang="en" lang="en" className="hover:text-foreground">English</Link>
          <Link href="/pt/dlss-5-quais-placas" hrefLang="pt-BR" lang="pt-BR" className="hover:text-foreground">Português</Link>
          <Link href="/de/dlss-5-grafikkarten" hrefLang="de" lang="de" className="hover:text-foreground">Deutsch</Link>
          <Link href="/fr/dlss-5-cartes-compatibles" hrefLang="fr" lang="fr" className="hover:text-foreground">Français</Link>
        </nav>

        <article id="guide-ko" className="space-y-12">
          <header>
            <p className="mb-3 text-sm font-semibold text-blue-400">
              최종 확인: <time dateTime={CHECKED}>{CHECKED_LABEL}</time>
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              DLSS 5 지원 그래픽카드 총정리 (RTX 50·40·30·20)
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              NVIDIA DLSS 5(3D 가이드 뉴럴 렌더링)를 지금 바로 로컬 PC에서 사용할 수 있는 그래픽카드는{" "}
              <strong className="text-foreground">GeForce RTX 50 시리즈</strong>와{" "}
              <strong className="text-foreground">RTX Spark 노트북</strong>입니다. RTX 40 시리즈는 추후 지원
              예정이지만 아직 날짜가 공개되지 않았으며, RTX 30·20 시리즈는 공식 지원 대상이 아닙니다.
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
            <h2 className="text-2xl font-bold">DLSS 5와 DLSS 4.5, 무엇이 다른가요?</h2>
            <p className="leading-relaxed text-foreground/85">
              많은 사용자가 DLSS 5를 더 높은 FPS를 뽑아주는 차세대 업스케일링이나 멀티 프레임 생성(MFG)으로
              오해합니다. 실제로 멀티 프레임 생성(4X)은 DLSS 4에서, 다이내믹 6X MFG와 2세대 트랜스포머 슈퍼
              해상도는 DLSS 4.5에서 도입되었습니다. 반면 <strong>DLSS 5의 핵심은 3D 가이드 뉴럴 렌더링</strong>으로,
              게임 엔진의 지오메트리·모션 벡터·조명 데이터를 바탕으로 빛 반사, 그림자 깊이, 옷감·피부·금속 재질을
              실시간으로 개선하는 화질 기능입니다.
            </p>
            <p className="leading-relaxed text-foreground/85">
              따라서 DLSS 5를 켜면 화질은 바뀌지만 추가 GPU 연산이 필요합니다. 2026년 10월 NVIDIA가 배포한
              개선 모델은 초기 9월 모델 대비 GPU 연산 비용을 약 절반으로, 4K VRAM 점유율을 약 20% 줄였지만
              여전히 무료 프레임 상승 옵션은 아닙니다. 현재 공식 적용된 4개 게임(NBA 2K27, 호그와트 레거시,
              워 썬더, Where Winds Meet) 모두 게임 설정 안에서 DLSS 슈퍼 해상도·프레임 생성과 별도 스위치로
              분리되어 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">많이 찾는 그래픽카드별 빠른 결론</h2>
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
            <h2 className="text-2xl font-bold">현재 DLSS 5 지원 게임 및 드라이버 조건</h2>
            <p className="leading-relaxed text-foreground/85">
              RTX 50 그래픽카드가 있더라도 모든 게임에서 DLSS 5가 자동으로 켜지지 않습니다. 게임 자체의 공식
              패치와 NVIDIA Game Ready 드라이버(2026년 11월 기준 <strong>621.24 WHQL</strong> 이상 권장),
              그리고 Windows 11 환경(NVIDIA는 2026년 11월부터 Game Ready 드라이버에 Windows 11을 요구)이 함께
              갖춰져야 합니다.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
              <li>
                <strong>NBA 2K27</strong> (2026년 9월 3일 출시, 10월 16일 고속 모델 적용) — 드라이버 616.64 이상, 단축키 F9.{" "}
                <Link href="/games/nba-2k27-dlss-5" lang="en" className="text-blue-400 hover:underline">영어 가이드</Link>
              </li>
              <li>
                <strong>호그와트 레거시 (Hogwarts Legacy)</strong> (11월 5일 적용) — 드라이버 621.14 이상, 단축키 Shift+Alt+B.{" "}
                <Link href="/games/hogwarts-legacy-dlss-5" lang="en" className="text-blue-400 hover:underline">영어 가이드</Link>
              </li>
              <li>
                <strong>워 썬더 (War Thunder)</strong> (11월 12일 적용) — Eagle&apos;s Shadow 메이저 업데이트.
              </li>
              <li>
                <strong>Where Winds Meet (연운)</strong> (11월 23~24일 적용) — 드라이버 621.24 WHQL, 게임 내 옵션으로 켜기/끄기 및 화질 미세 조정 지원.{" "}
                <Link href="/games/where-winds-meet-dlss-5" lang="en" className="text-blue-400 hover:underline">영어 가이드</Link>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              RTX 50이 없다면 RTX 5080급 클라우드 서버를 쓰는 <strong>GeForce NOW Ultimate</strong>가 현재
              유일한 공식 체험 경로입니다. 한국 지역 파트너 운영 여부와 RTX 5080 서버 배정 상태는 구독 전
              별도로 확인하세요.
            </p>
          </section>

          <UpdateAlertForm
            locale="ko"
            defaultTopics={["rtx40", "games"]}
            sourcePage="/ko/dlss-5-supported-cards"
          />

          <section className="space-y-8">
            <h2 className="text-2xl font-bold">전체 {ALL_GPUS.length}개 그래픽카드 호환 목록</h2>
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
                          <span className="text-xs text-muted-foreground">{formatKoreanMemory(gpu.vram)}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{formatKoreanFeatures(gpu)}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold">자주 묻는 질문 (FAQ)</h2>
            {faqs.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-3 sm:grid-cols-2">
            <Link href="/" lang="en" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">GPU 검색기 바로가기 (영어)</div>
              <p className="text-sm text-muted-foreground">내 그래픽카드 모델명을 입력해 즉시 호환 여부를 확인하세요.</p>
            </Link>
            <Link href="/dlss-5-games" lang="en" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">DLSS 5 지원 게임 전체 트래커 (영어)</div>
              <p className="text-sm text-muted-foreground">출시 완료 4개 타이틀과 예정작 현황을 한눈에 확인하세요.</p>
            </Link>
          </section>

          <section className="text-sm leading-relaxed text-muted-foreground">
            <h2 className="mb-3 text-xl font-bold text-foreground">공식 출처</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><a href={SOURCES.nvidiaKr} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA 한국 공식 DLSS 기술 및 지원 표</a></li>
              <li><a href={SOURCES.launch} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: DLSS 5 3D 가이드 뉴럴 렌더링 공식 발표</a></li>
              <li><a href={SOURCES.october} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: 2026년 10월 경량 DLSS 5 모델 및 RTX Spark 안내</a></li>
              <li><a href={SOURCES.november} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: 호그와트 레거시·워 썬더·Where Winds Meet 11월 업데이트</a></li>
              <li><a href={SOURCES.driver62124} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: Game Ready 드라이버 621.24 WHQL 노트</a></li>
              <li><a href={SOURCES.rtx40Faq} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA: RTX 40 지원 계획 공식 FAQ</a></li>
              <li><a href={SOURCES.gfnReqs} className="text-blue-400 hover:underline" rel="noreferrer">NVIDIA GeForce NOW 시스템 요구 사양</a></li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
