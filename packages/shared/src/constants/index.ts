// ─── Activity Score Weights (PRD v1.1 §7.1) ──────────────────────────────────
// ⚠ Perlu dikonfirmasi ke stakeholder sebelum Sprint 9

export const ACTIVITY_SCORE_WEIGHTS = {
  ATTENDANCE: 0.4,
  MUTABAAH: 0.4,
  TASK: 0.2,
} as const;

// ─── Activity Score Thresholds (PRD v1.1 §7.3) ───────────────────────────────

export const ACTIVITY_SCORE_THRESHOLDS = {
  SANGAT_AKTIF: 85,
  AKTIF: 70,
  CUKUP_AKTIF: 50,
} as const;

export const ACTIVITY_SCORE_COLORS = {
  SANGAT_AKTIF: '#27AE60',
  AKTIF: '#2980B9',
  CUKUP_AKTIF: '#F4D03F',
  KURANG_AKTIF: '#C0392B',
} as const;

// ─── Pagination defaults ──────────────────────────────────────────────────────

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// ─── JWT ─────────────────────────────────────────────────────────────────────

export const JWT_EXPIRY = {
  ACCESS_TOKEN: '15m',
  REFRESH_TOKEN: '7d',
} as const;

// ─── Mutabaah ─────────────────────────────────────────────────────────────────

// week_start_date selalu Senin (ISO weekday 1)
export const MUTABAAH_WEEK_START_DAY = 1;

// ─── Absensi QR ───────────────────────────────────────────────────────────────

// QR token expire setelah event selesai + buffer
export const QR_TOKEN_EXPIRY_BUFFER_MINUTES = 30;
