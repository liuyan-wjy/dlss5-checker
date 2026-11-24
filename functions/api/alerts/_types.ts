// Minimal Cloudflare Pages Functions + D1 + Email Sending ambient types
// so the repository stays dependency-light while typechecking functions/ strictly.

export interface D1Result<T = Record<string, unknown>> {
  results: T[];
  success: boolean;
  meta: Record<string, unknown>;
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export interface SendEmailMessage {
  from: string | { email: string; name?: string };
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string | { email: string; name?: string };
  headers?: Record<string, string>;
}

export interface SendEmailResult {
  messageId?: string;
}

export interface SendEmailBinding {
  send(message: SendEmailMessage): Promise<SendEmailResult>;
}

export interface ServiceBinding {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export interface AlertsEnv {
  DB?: D1Database;
  EMAIL_SERVICE?: ServiceBinding;
  EMAIL?: SendEmailBinding;
  CLOUDFLARE_ACCOUNT_ID?: string;
  CLOUDFLARE_EMAIL_API_TOKEN?: string;
  ALERT_FROM_EMAIL?: string;
  ALERT_ADMIN_KEY?: string;
  SITE_ORIGIN?: string;
  /** Optional Cloudflare Turnstile secret. When set, /subscribe requires a valid Turnstile token. */
  TURNSTILE_SECRET_KEY?: string;
  /** Optional global cap on confirmation emails per UTC day (default 300). */
  ALERT_DAILY_CONFIRM_CAP?: string;
}

export interface PagesContext<Env = AlertsEnv> {
  request: Request;
  env: Env;
  params: Record<string, string>;
  next: () => Promise<Response>;
}

export type AlertTopic = "rtx40" | "games";
export type AlertLocale = "en" | "pt" | "de" | "ko" | "fr";
