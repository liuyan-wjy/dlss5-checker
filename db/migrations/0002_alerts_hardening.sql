-- Upgrade an existing dlss5-alerts D1 database created from the first alerts schema.
-- Run once BEFORE deploying the hardened alert functions:
--   npx wrangler d1 execute dlss5-alerts --remote --file=db/migrations/0002_alerts_hardening.sql

ALTER TABLE alert_subscribers ADD COLUMN pending_topics_json TEXT;
ALTER TABLE alert_subscribers ADD COLUMN pending_locale TEXT;
ALTER TABLE alert_subscribers ADD COLUMN confirm_sent_at TEXT;

CREATE TABLE IF NOT EXISTS alert_rate_limits (
  bucket TEXT PRIMARY KEY,
  window_start INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 0
);
