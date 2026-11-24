-- Cloudflare D1 schema for optional DLSS 5 official status alerts (fresh installs).
-- Apply locally:  npx wrangler d1 execute dlss5-alerts --local  --file=db/alerts-schema.sql
-- Apply remotely: npx wrangler d1 execute dlss5-alerts --remote --file=db/alerts-schema.sql
-- Existing databases created from the first version of this file must run
-- db/migrations/0002_alerts_hardening.sql instead.

CREATE TABLE IF NOT EXISTS alert_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  topics_json TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  source_page TEXT NOT NULL DEFAULT '/',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  confirm_token TEXT NOT NULL UNIQUE,
  unsubscribe_token TEXT NOT NULL UNIQUE,
  -- Preference changes requested by an already-confirmed subscriber; applied only after confirmation.
  pending_topics_json TEXT,
  pending_locale TEXT,
  -- Last time a confirmation email was successfully sent (cooldown + link expiry).
  confirm_sent_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  confirmed_at TEXT,
  unsubscribed_at TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_alert_subscribers_status
  ON alert_subscribers (status);

CREATE TABLE IF NOT EXISTS alert_deliveries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_key TEXT NOT NULL,
  subscriber_id INTEGER NOT NULL,
  message_id TEXT,
  sent_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (event_key, subscriber_id),
  FOREIGN KEY (subscriber_id) REFERENCES alert_subscribers(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_alert_deliveries_event
  ON alert_deliveries (event_key);

-- Fixed-window abuse counters. Buckets hold hashed IPs or global counters only (no raw IPs).
CREATE TABLE IF NOT EXISTS alert_rate_limits (
  bucket TEXT PRIMARY KEY,
  window_start INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 0
);
