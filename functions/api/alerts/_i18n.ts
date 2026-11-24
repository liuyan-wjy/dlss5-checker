import type { AlertLocale, AlertTopic } from "./_types";

type PageCopy = { title: string; heading: string; body: string };

export interface AlertCopy {
  htmlLang: string;
  homePath: string;
  backLink: string;
  topics: Record<AlertTopic, string>;
  topicJoiner: string;
  confirmEmail: {
    subject: string;
    heading: string;
    intro: string;
    updateSubject: string;
    updateHeading: string;
    updateIntro: string;
    button: string;
    note: string;
    ignorePrefix: string;
    ignoreLink: string;
    textConfirm: string;
    textTopics: string;
    textIgnore: string;
  };
  broadcast: {
    readMore: string;
    footer: string;
    unsubscribeLink: string;
    textDetails: string;
    textUnsubscribe: string;
  };
  pages: {
    confirmPrompt: PageCopy & { button: string };
    confirmed: PageCopy;
    confirmInvalid: PageCopy;
    confirmExpired: PageCopy;
    unsubscribePrompt: PageCopy & { button: string };
    unsubscribed: PageCopy;
    unsubscribeInvalid: PageCopy;
  };
}

export const ALERT_COPY: Record<AlertLocale, AlertCopy> = {
  en: {
    htmlLang: "en",
    homePath: "/",
    backLink: "Back to DLSS 5 Checker",
    topics: {
      rtx40: "RTX 40 Series official DLSS 5 support",
      games: "New live DLSS 5 game patches",
    },
    topicJoiner: " & ",
    confirmEmail: {
      subject: "Confirm your DLSS 5 status alerts (dlss5.net)",
      heading: "Confirm your DLSS 5 alerts",
      intro:
        "You asked DLSS 5 Checker (dlss5.net) to email you when there is an official update for:",
      updateSubject: "Confirm your updated DLSS 5 alert preferences (dlss5.net)",
      updateHeading: "Confirm your new alert preferences",
      updateIntro:
        "Someone asked to change the DLSS 5 Checker (dlss5.net) alerts for this address to:",
      button: "Confirm my alerts",
      note: "We only send concise transactional notices when NVIDIA or a game publisher ships an official update — never rumors or marketing newsletters. This link expires in 72 hours.",
      ignorePrefix: "Did not request this? Ignore this message or",
      ignoreLink: "unsubscribe immediately",
      textConfirm: "Confirm (link expires in 72 hours):",
      textTopics: "Requested topics:",
      textIgnore: "If you did not request this, ignore this email or unsubscribe:",
    },
    broadcast: {
      readMore: "Read verified details on dlss5.net",
      footer: "You requested official DLSS 5 status alerts from dlss5.net.",
      unsubscribeLink: "Unsubscribe in one click",
      textDetails: "Verified details:",
      textUnsubscribe: "Unsubscribe:",
    },
    pages: {
      confirmPrompt: {
        title: "Confirm alerts",
        heading: "Confirm your DLSS 5 alerts",
        body: "Press the button below to activate official DLSS 5 status alerts for your email address.",
        button: "Confirm my alerts",
      },
      confirmed: {
        title: "Alerts confirmed",
        heading: "You are subscribed to official DLSS 5 alerts",
        body: "We will email you only when NVIDIA publishes official RTX 40 support or a new game ships a verified live DLSS 5 patch. Every email includes a one-click unsubscribe link.",
      },
      confirmInvalid: {
        title: "Invalid link",
        heading: "Confirmation link not found",
        body: "This confirmation link is invalid or has already been used. You can re-enter your email on dlss5.net anytime.",
      },
      confirmExpired: {
        title: "Link expired",
        heading: "This confirmation link has expired",
        body: "Confirmation links are valid for 72 hours. Re-enter your email on dlss5.net to receive a new one.",
      },
      unsubscribePrompt: {
        title: "Unsubscribe",
        heading: "Unsubscribe from DLSS 5 alerts?",
        body: "Press the button below and this address will stop receiving DLSS 5 status alerts from dlss5.net.",
        button: "Unsubscribe",
      },
      unsubscribed: {
        title: "Unsubscribed",
        heading: "You have been unsubscribed",
        body: "Your email will no longer receive DLSS 5 status alerts from dlss5.net.",
      },
      unsubscribeInvalid: {
        title: "Invalid link",
        heading: "Unsubscribe link not found",
        body: "This unsubscribe link is invalid. If you still receive alerts, use the link in the most recent email.",
      },
    },
  },
  pt: {
    htmlLang: "pt-BR",
    homePath: "/pt",
    backLink: "Voltar ao DLSS 5 Checker",
    topics: {
      rtx40: "Suporte oficial do DLSS 5 na série RTX 40",
      games: "Novos jogos com patch de DLSS 5",
    },
    topicJoiner: " e ",
    confirmEmail: {
      subject: "Confirme seus alertas do DLSS 5 (dlss5.net)",
      heading: "Confirme seus alertas do DLSS 5",
      intro:
        "Você pediu ao DLSS 5 Checker (dlss5.net) para receber um e-mail quando houver uma atualização oficial sobre:",
      updateSubject: "Confirme as novas preferências de alerta do DLSS 5 (dlss5.net)",
      updateHeading: "Confirme suas novas preferências",
      updateIntro:
        "Alguém pediu para alterar os alertas do DLSS 5 Checker (dlss5.net) deste endereço para:",
      button: "Confirmar meus alertas",
      note: "Só enviamos avisos curtos quando a NVIDIA ou uma publisher lança uma atualização oficial — nunca rumores ou newsletters de marketing. Este link expira em 72 horas.",
      ignorePrefix: "Não foi você? Ignore esta mensagem ou",
      ignoreLink: "cancele a inscrição agora",
      textConfirm: "Confirmar (o link expira em 72 horas):",
      textTopics: "Temas escolhidos:",
      textIgnore: "Se não foi você, ignore este e-mail ou cancele a inscrição:",
    },
    broadcast: {
      readMore: "Ver detalhes verificados no dlss5.net",
      footer: "Você pediu alertas oficiais do DLSS 5 ao dlss5.net.",
      unsubscribeLink: "Cancelar inscrição com um clique",
      textDetails: "Detalhes verificados:",
      textUnsubscribe: "Cancelar inscrição:",
    },
    pages: {
      confirmPrompt: {
        title: "Confirmar alertas",
        heading: "Confirme seus alertas do DLSS 5",
        body: "Clique no botão abaixo para ativar os alertas oficiais do DLSS 5 neste e-mail.",
        button: "Confirmar meus alertas",
      },
      confirmed: {
        title: "Alertas confirmados",
        heading: "Seus alertas do DLSS 5 estão ativos",
        body: "Só enviaremos e-mail quando a NVIDIA anunciar o suporte oficial na RTX 40 ou um novo jogo receber o patch de DLSS 5. Todo e-mail traz um link para cancelar com um clique.",
      },
      confirmInvalid: {
        title: "Link inválido",
        heading: "Link de confirmação não encontrado",
        body: "Este link é inválido ou já foi usado. Você pode cadastrar seu e-mail de novo no dlss5.net quando quiser.",
      },
      confirmExpired: {
        title: "Link expirado",
        heading: "Este link de confirmação expirou",
        body: "Os links de confirmação valem por 72 horas. Cadastre seu e-mail de novo no dlss5.net para receber outro.",
      },
      unsubscribePrompt: {
        title: "Cancelar inscrição",
        heading: "Cancelar os alertas do DLSS 5?",
        body: "Clique no botão abaixo e este endereço deixará de receber alertas do DLSS 5 do dlss5.net.",
        button: "Cancelar inscrição",
      },
      unsubscribed: {
        title: "Inscrição cancelada",
        heading: "Sua inscrição foi cancelada",
        body: "Este e-mail não receberá mais alertas do DLSS 5 do dlss5.net.",
      },
      unsubscribeInvalid: {
        title: "Link inválido",
        heading: "Link de cancelamento não encontrado",
        body: "Este link de cancelamento é inválido. Se ainda receber alertas, use o link do e-mail mais recente.",
      },
    },
  },
  de: {
    htmlLang: "de",
    homePath: "/de/dlss-5-grafikkarten",
    backLink: "Zurück zum DLSS 5 Checker",
    topics: {
      rtx40: "Offizieller DLSS-5-Support für RTX 40",
      games: "Neue Spiele mit DLSS-5-Update",
    },
    topicJoiner: " und ",
    confirmEmail: {
      subject: "Bitte bestätige deine DLSS-5-Benachrichtigungen (dlss5.net)",
      heading: "DLSS-5-Benachrichtigungen bestätigen",
      intro:
        "Du hast beim DLSS 5 Checker (dlss5.net) Benachrichtigungen zu offiziellen Updates für folgende Themen angefordert:",
      updateSubject: "Bitte bestätige deine geänderten DLSS-5-Einstellungen (dlss5.net)",
      updateHeading: "Neue Einstellungen bestätigen",
      updateIntro:
        "Für diese Adresse wurde eine Änderung der DLSS-5-Checker-Benachrichtigungen (dlss5.net) angefordert:",
      button: "Benachrichtigungen bestätigen",
      note: "Wir senden nur kurze Hinweise, wenn NVIDIA oder ein Publisher ein offizielles Update veröffentlicht – keine Gerüchte, kein Marketing-Newsletter. Dieser Link ist 72 Stunden gültig.",
      ignorePrefix: "Nicht angefordert? Ignoriere diese Nachricht oder",
      ignoreLink: "melde dich sofort ab",
      textConfirm: "Bestätigen (Link 72 Stunden gültig):",
      textTopics: "Gewählte Themen:",
      textIgnore: "Nicht angefordert? Ignoriere diese E-Mail oder melde dich ab:",
    },
    broadcast: {
      readMore: "Geprüfte Details auf dlss5.net lesen",
      footer: "Du hast offizielle DLSS-5-Statusmeldungen von dlss5.net angefordert.",
      unsubscribeLink: "Mit einem Klick abmelden",
      textDetails: "Geprüfte Details:",
      textUnsubscribe: "Abmelden:",
    },
    pages: {
      confirmPrompt: {
        title: "Benachrichtigungen bestätigen",
        heading: "DLSS-5-Benachrichtigungen bestätigen",
        body: "Klicke auf die Schaltfläche, um offizielle DLSS-5-Statusmeldungen für deine E-Mail-Adresse zu aktivieren.",
        button: "Benachrichtigungen bestätigen",
      },
      confirmed: {
        title: "Bestätigt",
        heading: "Deine DLSS-5-Benachrichtigungen sind aktiv",
        body: "Wir schreiben dir nur, wenn NVIDIA den offiziellen RTX-40-Support veröffentlicht oder ein neues Spiel ein bestätigtes DLSS-5-Update erhält. Jede E-Mail enthält einen Abmeldelink.",
      },
      confirmInvalid: {
        title: "Ungültiger Link",
        heading: "Bestätigungslink nicht gefunden",
        body: "Dieser Bestätigungslink ist ungültig oder wurde bereits verwendet. Du kannst deine E-Mail-Adresse jederzeit erneut auf dlss5.net eintragen.",
      },
      confirmExpired: {
        title: "Link abgelaufen",
        heading: "Dieser Bestätigungslink ist abgelaufen",
        body: "Bestätigungslinks sind 72 Stunden gültig. Trage deine E-Mail-Adresse erneut auf dlss5.net ein, um einen neuen Link zu erhalten.",
      },
      unsubscribePrompt: {
        title: "Abmelden",
        heading: "Von DLSS-5-Benachrichtigungen abmelden?",
        body: "Klicke auf die Schaltfläche, und diese Adresse erhält keine DLSS-5-Statusmeldungen von dlss5.net mehr.",
        button: "Abmelden",
      },
      unsubscribed: {
        title: "Abgemeldet",
        heading: "Du wurdest abgemeldet",
        body: "Diese E-Mail-Adresse erhält keine DLSS-5-Statusmeldungen von dlss5.net mehr.",
      },
      unsubscribeInvalid: {
        title: "Ungültiger Link",
        heading: "Abmeldelink nicht gefunden",
        body: "Dieser Abmeldelink ist ungültig. Falls du weiterhin Nachrichten erhältst, nutze den Link in der neuesten E-Mail.",
      },
    },
  },
  ko: {
    htmlLang: "ko",
    homePath: "/ko/dlss-5-supported-cards",
    backLink: "DLSS 5 Checker로 돌아가기",
    topics: {
      rtx40: "RTX 40 시리즈 DLSS 5 공식 지원",
      games: "신규 DLSS 5 게임 패치",
    },
    topicJoiner: ", ",
    confirmEmail: {
      subject: "DLSS 5 알림 신청을 확인해 주세요 (dlss5.net)",
      heading: "DLSS 5 알림 신청 확인",
      intro: "DLSS 5 Checker(dlss5.net)에 다음 항목의 공식 업데이트 알림을 신청하셨습니다:",
      updateSubject: "변경된 DLSS 5 알림 설정을 확인해 주세요 (dlss5.net)",
      updateHeading: "새 알림 설정 확인",
      updateIntro: "이 주소의 DLSS 5 Checker(dlss5.net) 알림 설정을 다음과 같이 변경하도록 요청되었습니다:",
      button: "알림 신청 확인",
      note: "NVIDIA 또는 게임 퍼블리셔가 공식 업데이트를 발표할 때만 짧은 안내 메일을 보냅니다. 루머나 마케팅 뉴스레터는 보내지 않습니다. 이 링크는 72시간 후 만료됩니다.",
      ignorePrefix: "직접 신청하지 않으셨나요? 이 메일을 무시하거나",
      ignoreLink: "즉시 수신 거부하세요",
      textConfirm: "신청 확인 (72시간 후 링크 만료):",
      textTopics: "신청 항목:",
      textIgnore: "직접 신청하지 않으셨다면 이 메일을 무시하거나 수신 거부하세요:",
    },
    broadcast: {
      readMore: "dlss5.net에서 확인된 내용 보기",
      footer: "dlss5.net의 DLSS 5 공식 상태 알림을 신청하셨습니다.",
      unsubscribeLink: "원클릭 수신 거부",
      textDetails: "확인된 내용:",
      textUnsubscribe: "수신 거부:",
    },
    pages: {
      confirmPrompt: {
        title: "알림 확인",
        heading: "DLSS 5 알림 신청 확인",
        body: "아래 버튼을 누르면 이 이메일 주소로 DLSS 5 공식 상태 알림이 활성화됩니다.",
        button: "알림 신청 확인",
      },
      confirmed: {
        title: "알림 확인 완료",
        heading: "DLSS 5 공식 알림 신청이 완료되었습니다",
        body: "NVIDIA가 RTX 40 공식 지원을 발표하거나 새 게임에 DLSS 5 패치가 적용될 때만 메일을 보내드립니다. 모든 메일에는 원클릭 수신 거부 링크가 포함됩니다.",
      },
      confirmInvalid: {
        title: "잘못된 링크",
        heading: "확인 링크를 찾을 수 없습니다",
        body: "이 확인 링크는 유효하지 않거나 이미 사용되었습니다. 언제든지 dlss5.net에서 이메일을 다시 입력할 수 있습니다.",
      },
      confirmExpired: {
        title: "링크 만료",
        heading: "확인 링크가 만료되었습니다",
        body: "확인 링크는 72시간 동안 유효합니다. dlss5.net에서 이메일을 다시 입력하면 새 링크를 받을 수 있습니다.",
      },
      unsubscribePrompt: {
        title: "수신 거부",
        heading: "DLSS 5 알림을 수신 거부하시겠습니까?",
        body: "아래 버튼을 누르면 이 주소로 더 이상 dlss5.net의 DLSS 5 상태 알림이 발송되지 않습니다.",
        button: "수신 거부",
      },
      unsubscribed: {
        title: "수신 거부 완료",
        heading: "수신 거부가 완료되었습니다",
        body: "이 이메일 주소로 더 이상 dlss5.net의 DLSS 5 상태 알림이 발송되지 않습니다.",
      },
      unsubscribeInvalid: {
        title: "잘못된 링크",
        heading: "수신 거부 링크를 찾을 수 없습니다",
        body: "이 수신 거부 링크는 유효하지 않습니다. 알림이 계속 온다면 가장 최근 메일의 링크를 사용해 주세요.",
      },
    },
  },
  fr: {
    htmlLang: "fr",
    homePath: "/fr/dlss-5-cartes-compatibles",
    backLink: "Retour à DLSS 5 Checker",
    topics: {
      rtx40: "Prise en charge officielle de DLSS 5 sur RTX 40",
      games: "Nouveaux jeux avec patch DLSS 5",
    },
    topicJoiner: " et ",
    confirmEmail: {
      subject: "Confirmez vos alertes DLSS 5 (dlss5.net)",
      heading: "Confirmez vos alertes DLSS 5",
      intro:
        "Vous avez demandé à DLSS 5 Checker (dlss5.net) de vous prévenir par e-mail en cas de mise à jour officielle concernant :",
      updateSubject: "Confirmez vos nouvelles préférences d'alerte DLSS 5 (dlss5.net)",
      updateHeading: "Confirmez vos nouvelles préférences",
      updateIntro:
        "Une modification des alertes DLSS 5 Checker (dlss5.net) a été demandée pour cette adresse :",
      button: "Confirmer mes alertes",
      note: "Nous n'envoyons que de courtes notifications lorsque NVIDIA ou un éditeur publie une mise à jour officielle — jamais de rumeurs ni de newsletter marketing. Ce lien expire dans 72 heures.",
      ignorePrefix: "Vous n'êtes pas à l'origine de cette demande ? Ignorez ce message ou",
      ignoreLink: "désinscrivez-vous immédiatement",
      textConfirm: "Confirmer (lien valable 72 heures) :",
      textTopics: "Sujets choisis :",
      textIgnore: "Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail ou désinscrivez-vous :",
    },
    broadcast: {
      readMore: "Lire les détails vérifiés sur dlss5.net",
      footer: "Vous avez demandé les alertes officielles DLSS 5 de dlss5.net.",
      unsubscribeLink: "Se désinscrire en un clic",
      textDetails: "Détails vérifiés :",
      textUnsubscribe: "Se désinscrire :",
    },
    pages: {
      confirmPrompt: {
        title: "Confirmer les alertes",
        heading: "Confirmez vos alertes DLSS 5",
        body: "Cliquez sur le bouton ci-dessous pour activer les alertes officielles DLSS 5 pour votre adresse e-mail.",
        button: "Confirmer mes alertes",
      },
      confirmed: {
        title: "Alertes confirmées",
        heading: "Vos alertes DLSS 5 sont activées",
        body: "Nous vous écrirons uniquement lorsque NVIDIA officialisera la prise en charge sur RTX 40 ou qu'un nouveau jeu recevra un patch DLSS 5 vérifié. Chaque e-mail contient un lien de désinscription en un clic.",
      },
      confirmInvalid: {
        title: "Lien invalide",
        heading: "Lien de confirmation introuvable",
        body: "Ce lien de confirmation est invalide ou a déjà été utilisé. Vous pouvez saisir à nouveau votre e-mail sur dlss5.net à tout moment.",
      },
      confirmExpired: {
        title: "Lien expiré",
        heading: "Ce lien de confirmation a expiré",
        body: "Les liens de confirmation sont valables 72 heures. Saisissez à nouveau votre e-mail sur dlss5.net pour en recevoir un nouveau.",
      },
      unsubscribePrompt: {
        title: "Se désinscrire",
        heading: "Se désinscrire des alertes DLSS 5 ?",
        body: "Cliquez sur le bouton ci-dessous et cette adresse ne recevra plus les alertes DLSS 5 de dlss5.net.",
        button: "Se désinscrire",
      },
      unsubscribed: {
        title: "Désinscription confirmée",
        heading: "Vous êtes désinscrit",
        body: "Cette adresse ne recevra plus les alertes DLSS 5 de dlss5.net.",
      },
      unsubscribeInvalid: {
        title: "Lien invalide",
        heading: "Lien de désinscription introuvable",
        body: "Ce lien de désinscription est invalide. Si vous recevez encore des alertes, utilisez le lien du dernier e-mail.",
      },
    },
  },
};

export function topicText(locale: AlertLocale, topics: readonly AlertTopic[]): string {
  const copy = ALERT_COPY[locale];
  return topics.map((t) => copy.topics[t]).join(copy.topicJoiner);
}
