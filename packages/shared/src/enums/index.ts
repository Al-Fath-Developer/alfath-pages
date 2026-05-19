// ─── Role Sistem (PRD v1.1 §2.1) ─────────────────────────────────────────────

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  FACULTY_ADMIN = 'FACULTY_ADMIN',
  MENTOR = 'MENTOR',
  KADER = 'KADER',
}

// Scope untuk UserRole (mendukung multi-role per user)
export enum ScopeType {
  GLOBAL = 'GLOBAL',
  FACULTY = 'FACULTY',
}

// ─── Siklus Hidup Kader (PRD v1.1 §3.1) ──────────────────────────────────────

export enum KaderStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ALUMNI = 'ALUMNI',
  RESIGNED = 'RESIGNED',
}

// ─── Level Kaderisasi (PRD v1.1 §3.2) ────────────────────────────────────────

export enum KaderLevel {
  MULA = 'MULA',
  MUDA = 'MUDA',
  MADYA = 'MADYA',
  PURNA = 'PURNA',
}

// ─── Jabatan Struktural (PRD v1.1 §2.4) ──────────────────────────────────────
// Bukan role sistem — disimpan sebagai field di profil kader
export enum KaderJabatan {
  INTI = 'INTI',
  KEPALA_BIDANG = 'KEPALA_BIDANG',
  PIC_PROKER = 'PIC_PROKER',
  ANGGOTA = 'ANGGOTA',
}

// ─── Approval (PRD v1.1 §4.1 - pola reusable) ────────────────────────────────

export enum ApprovalStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PUBLISHED = 'PUBLISHED',
}

// ─── Task Proker (PRD v1.1 §2.7) ─────────────────────────────────────────────

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  REJECTED = 'REJECTED',
}

// ─── Collab Project (PRD v1.1 §2.10) ─────────────────────────────────────────

export enum CollabProjectStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}

// ─── Absensi (PRD v1.1 §2.4) ─────────────────────────────────────────────────

export enum AttendanceMethod {
  QR = 'QR',
  MANUAL = 'MANUAL',
}

export enum AttendanceStatus {
  HADIR = 'HADIR',
  IZIN = 'IZIN',
  ALPA = 'ALPA',
}

// ─── Kategori Keaktifan (PRD v1.1 §7.3) ──────────────────────────────────────

export enum ActivityCategory {
  SANGAT_AKTIF = 'SANGAT_AKTIF', // 85–100
  AKTIF = 'AKTIF',               // 70–84
  CUKUP_AKTIF = 'CUKUP_AKTIF',   // 50–69
  KURANG_AKTIF = 'KURANG_AKTIF', // 0–49
}

// ─── Mentoring (PRD v1.1 §2.3) ───────────────────────────────────────────────

export enum MentoringMemberRole {
  MENTOR = 'MENTOR',
  MENTEE = 'MENTEE',
}

// ─── Kalender (PRD v1.1 §2.11) ───────────────────────────────────────────────

export enum CalendarEventType {
  MANUAL = 'MANUAL',
  MENTORING_SESSION = 'MENTORING_SESSION',
  TASK_DEADLINE = 'TASK_DEADLINE',
  PROKER = 'PROKER',
  ATTENDANCE_EVENT = 'ATTENDANCE_EVENT',
}

export enum CalendarScopeType {
  GLOBAL = 'GLOBAL',
  FACULTY = 'FACULTY',
}
