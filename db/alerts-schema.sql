-- Cloudflare D1 schema for optional DLSS 5 official status alerts.
-- Apply locally:  npx wrangler d1 execute dlss5-alerts --local  --file=db/alerts-schema.sql
-- Apply remotely: npx wrangler d1 execute dlss5-alerts --remote --file=db/alerts-schema.sql

CREATE TABLE IF NOT EXISTS alert_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  topics_json TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  source_page TEXT NOT NULL DEFAULT '/',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  confirm_token TEXT NOT NULL UNIQUE,
  unsubscribe_token TEXT NOT NULL UNIQUE,
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
