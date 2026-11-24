"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Bell, CheckCircle2, Loader2 } from "lucide-react";

export type AlertTopic = "rtx40" | "games";
export type AlertLocale = "en" | "pt" | "de" | "ko" | "fr";

/** Optional Cloudflare Turnstile site key. When unset, the form relies on server-side rate limits. */
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const TURNSTILE_LANG: Record<AlertLocale, string> = { en: "en", pt: "pt-br", de: "de", ko: "ko", fr: "fr" };

interface TurnstileApi {
  render(
    el: HTMLElement,
    options: {
      sitekey: string;
      language?: string;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ): string;
  reset(widgetId?: string): void;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let turnstileLoader: Promise<TurnstileApi> | null = null;

/** Loads the Turnstile script once, only after a visitor starts using an alert form. */
function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileLoader) {
    turnstileLoader = new Promise<TurnstileApi>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () =>
        window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile unavailable"));
      script.onerror = () => {
        turnstileLoader = null;
        reject(new Error("Turnstile failed to load"));
      };
      document.head.appendChild(script);
    });
  }
  return turnstileLoader;
}

const ERROR_COPY_KEYS = {
  invalid_email: "emailError",
  no_topics: "topicError",
  rate_limited: "rateLimitError",
  captcha_failed: "captchaError",
} as const;

interface UpdateAlertFormProps {
  defaultTopics?: AlertTopic[];
  sourcePage: string;
  locale?: AlertLocale;
  heading?: string;
  description?: string;
  compact?: boolean;
}

const COPY: Record<
  AlertLocale,
  {
    heading: string;
    description: string;
    rtx40Label: string;
    gamesLabel: string;
    placeholder: string;
    button: string;
    submitting: string;
    privacyNote: string;
    privacyLink: string;
    topicError: string;
    emailError: string;
    genericError: string;
    rateLimitError: string;
    captchaError: string;
    successTitle: string;
    successBody: string;
  }
> = {
  en: {
    heading: "Get official DLSS 5 status alerts",
    description:
      "One short email only when NVIDIA publishes official RTX 40 support or a new game ships a live DLSS 5 patch. Double opt-in, zero marketing spam, 1-click unsubscribe.",
    rtx40Label: "RTX 40 Series official launch",
    gamesLabel: "New live DLSS 5 game patches",
    placeholder: "you@example.com",
    button: "Notify me",
    submitting: "Sending confirmation...",
    privacyNote: "Sent via Cloudflare Email Service from dlss5.net. See our ",
    privacyLink: "Privacy Policy",
    topicError: "Select at least one alert topic.",
    emailError: "Enter a valid email address.",
    genericError: "Could not save your alert right now. Please try again shortly.",
    rateLimitError: "Too many attempts. Please wait a while and try again.",
    captchaError: "Verification failed. Please complete the check and try again.",
    successTitle: "Check your inbox to confirm",
    successBody:
      "We sent a confirmation link from alerts@dlss5.net. Click it once to activate your DLSS 5 alerts.",
  },
  pt: {
    heading: "Receba alertas oficiais do DLSS 5",
    description:
      "Enviamos um e-mail curto apenas quando a NVIDIA confirmar a data oficial da RTX 40 ou quando um novo jogo lançar o patch de DLSS 5. Confirmação em dois cliques e cancelamento imediato.",
    rtx40Label: "Suporte oficial na série RTX 40",
    gamesLabel: "Novos jogos com DLSS 5 ativo",
    placeholder: "voce@exemplo.com",
    button: "Me avise",
    submitting: "Enviando confirmação...",
    privacyNote: "Enviado via Cloudflare Email Service por dlss5.net. Veja a ",
    privacyLink: "Política de Privacidade (em inglês)",
    topicError: "Escolha pelo menos um tipo de alerta.",
    emailError: "Digite um endereço de e-mail válido.",
    genericError: "Não foi possível registrar o alerta agora. Tente novamente em instantes.",
    rateLimitError: "Muitas tentativas. Aguarde um pouco e tente novamente.",
    captchaError: "A verificação falhou. Conclua a checagem e tente novamente.",
    successTitle: "Confirme no seu e-mail",
    successBody:
      "Enviamos um link de confirmação de alerts@dlss5.net. Clique nele uma vez para ativar os alertas.",
  },
  de: {
    heading: "Offizielle DLSS-5-Status-Updates per E-Mail",
    description:
      "Eine kurze Nachricht nur dann, wenn NVIDIA den offiziellen RTX-40-Start bestätigt oder ein neues Spiel ein Live-Update für DLSS 5 erhält. Double-Opt-in, kein Newsletter-Spam, Abmeldung mit einem Klick.",
    rtx40Label: "Offizieller RTX-40-Start",
    gamesLabel: "Neue Live-Spiele mit DLSS 5",
    placeholder: "name@beispiel.de",
    button: "Benachrichtigen",
    submitting: "Bestätigung wird gesendet...",
    privacyNote: "Versand über Cloudflare Email Service von dlss5.net. Siehe ",
    privacyLink: "Datenschutzerklärung (Englisch)",
    topicError: "Bitte mindestens ein Thema auswählen.",
    emailError: "Bitte eine gültige E-Mail-Adresse eingeben.",
    genericError: "Die Anmeldung konnte gerade nicht gespeichert werden. Bitte später erneut versuchen.",
    rateLimitError: "Zu viele Versuche. Bitte warte kurz und versuche es dann erneut.",
    captchaError: "Die Überprüfung ist fehlgeschlagen. Bitte schließe sie ab und versuche es erneut.",
    successTitle: "Bitte E-Mail-Postfach prüfen",
    successBody:
      "Wir haben einen Bestätigungslink von alerts@dlss5.net gesendet. Mit einem Klick werden deine Hinweise aktiviert.",
  },
  ko: {
    heading: "DLSS 5 공식 업데이트 알림 받기",
    description:
      "NVIDIA가 RTX 40 공식 지원 일정을 발표하거나 새 게임에 DLSS 5 패치가 적용될 때만 짧은 안내 메일을 보내드립니다. 이중 확인(Double Opt-in), 스팸 없음, 원클릭 수신 거부.",
    rtx40Label: "RTX 40 시리즈 공식 지원 소식",
    gamesLabel: "신규 DLSS 5 지원 게임 패치",
    placeholder: "you@example.com",
    button: "알림 신청",
    submitting: "확인 메일 전송 중...",
    privacyNote: "Cloudflare Email Service를 통해 dlss5.net에서 발송됩니다. ",
    privacyLink: "개인정보 처리방침(영어)",
    topicError: "알림 항목을 하나 이상 선택해 주세요.",
    emailError: "올바른 이메일 주소를 입력해 주세요.",
    genericError: "현재 알림을 저장할 수 없습니다. 잠시 후 다시 시도해 주세요.",
    rateLimitError: "시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.",
    captchaError: "보안 확인에 실패했습니다. 확인을 완료한 뒤 다시 시도해 주세요.",
    successTitle: "이메일에서 인증을 완료해 주세요",
    successBody:
      "alerts@dlss5.net에서 확인 링크를 보냈습니다. 링크를 클릭하면 알림이 활성화됩니다.",
  },
  fr: {
    heading: "Recevoir les alertes officielles DLSS 5",
    description:
      "Un court e-mail uniquement lorsque NVIDIA officialise le lancement sur RTX 40 ou qu'un nouveau jeu reçoit son patch DLSS 5. Double opt-in, sans spam marketing, désinscription en un clic.",
    rtx40Label: "Lancement officiel sur RTX 40",
    gamesLabel: "Nouveaux jeux compatibles DLSS 5",
    placeholder: "vous@exemple.fr",
    button: "M'avertir",
    submitting: "Envoi de la confirmation...",
    privacyNote: "Envoyé via Cloudflare Email Service depuis dlss5.net. Voir la ",
    privacyLink: "Politique de confidentialité (en anglais)",
    topicError: "Sélectionnez au moins un sujet d'alerte.",
    emailError: "Veuillez saisir une adresse e-mail valide.",
    genericError: "Impossible d'enregistrer votre alerte pour le moment. Réessayez bientôt.",
    rateLimitError: "Trop de tentatives. Patientez un peu avant de réessayer.",
    captchaError: "La vérification a échoué. Terminez la vérification et réessayez.",
    successTitle: "Vérifiez votre boîte de réception",
    successBody:
      "Nous avons envoyé un lien de confirmation depuis alerts@dlss5.net. Cliquez dessus une fois pour activer vos alertes.",
  },
};

export default function UpdateAlertForm({
  defaultTopics = ["rtx40", "games"],
  sourcePage,
  locale = "en",
  heading,
  description,
  compact = false,
}: UpdateAlertFormProps) {
  const t = COPY[locale];
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [topics, setTopics] = useState<AlertTopic[]>(defaultTopics);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      const id = widgetIdRef.current;
      if (id && id !== "loading") window.turnstile?.remove(id);
    };
  }, []);

  function ensureTurnstile() {
    if (!TURNSTILE_SITE_KEY || widgetIdRef.current || !turnstileRef.current) return;
    widgetIdRef.current = "loading";
    loadTurnstile()
      .then((api) => {
        if (!turnstileRef.current) return;
        widgetIdRef.current = api.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          language: TURNSTILE_LANG[locale],
          callback: setTurnstileToken,
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => setTurnstileToken(""),
        });
      })
      .catch(() => {
        widgetIdRef.current = null;
      });
  }

  function resetTurnstile() {
    const id = widgetIdRef.current;
    if (id && id !== "loading") window.turnstile?.reset(id);
    setTurnstileToken("");
  }

  function toggleTopic(topic: AlertTopic) {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg("");

    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setErrorMsg(t.emailError);
      setStatus("error");
      return;
    }
    if (topics.length === 0) {
      setErrorMsg(t.topicError);
      setStatus("error");
      return;
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      ensureTurnstile();
      setErrorMsg(t.captchaError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/alerts/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          topics,
          locale,
          sourcePage,
          website,
          ...(TURNSTILE_SITE_KEY ? { turnstileToken } : {}),
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
      };
      // Turnstile tokens are single-use; always request a fresh one after a submit.
      if (TURNSTILE_SITE_KEY) resetTurnstile();
      if (!response.ok || !payload.ok) {
        // Show localized copy only; server error strings are English diagnostics.
        const key = payload.code ? ERROR_COPY_KEYS[payload.code as keyof typeof ERROR_COPY_KEYS] : undefined;
        setErrorMsg(key ? t[key] : t.genericError);
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
      window.plausible?.("Alert subscribe", {
        props: {
          source: sourcePage,
          topics: topics.join(","),
          locale,
        },
      });
    } catch {
      setErrorMsg(t.genericError);
      setStatus("error");
    }
  }

  return (
    <section
      aria-label={heading ?? t.heading}
      className={`rounded-xl border border-blue-500/30 bg-blue-500/5 text-left ${
        compact ? "mt-5 p-4 sm:p-5" : "my-8 p-5 sm:p-6"
      }`}
    >
      <div className="flex items-start gap-3">
        <Bell className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h2 className={compact ? "text-base font-bold text-foreground" : "text-xl font-bold text-foreground"}>
            {heading ?? t.heading}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {description ?? t.description}
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mt-4 flex items-start gap-2.5 rounded-lg border border-green-500/30 bg-green-500/10 p-3.5 text-sm text-green-300"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">{t.successTitle}</p>
                <p className="mt-0.5 text-xs text-green-200/90">{t.successBody}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={ensureTurnstile} className="mt-4 space-y-3" noValidate>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/90">
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={topics.includes("rtx40")}
                    onChange={() => toggleTopic("rtx40")}
                    className="h-4 w-4 rounded border-border accent-blue-500"
                  />
                  <span>{t.rtx40Label}</span>
                </label>
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={topics.includes("games")}
                    onChange={() => toggleTopic("games")}
                    className="h-4 w-4 rounded border-border accent-blue-500"
                  />
                  <span>{t.gamesLabel}</span>
                </label>
              </div>

              {/* Honeypot field to block automated form bots without CAPTCHA friction. */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor={`alert-website-${sourcePage}`}>Website</label>
                <input
                  id={`alert-website-${sourcePage}`}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  className="h-11 flex-1 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  <span>{status === "submitting" ? t.submitting : t.button}</span>
                </button>
              </div>

              {TURNSTILE_SITE_KEY ? <div ref={turnstileRef} className="min-h-0" /> : null}

              {status === "error" && errorMsg && (
                <p role="alert" className="text-xs text-red-400">
                  {errorMsg}
                </p>
              )}

              <p className="text-xs text-muted-foreground">
                {t.privacyNote}
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  {t.privacyLink}
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
