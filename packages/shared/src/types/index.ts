import type {
  ApprovalStatus,
  KaderLevel,
  KaderStatus,
  ScopeType,
  UserRole,
  ActivityCategory,
} from '../enums';

// ─── Pagination ───────────────────────────────────────────────────────────────

export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// ─── API Response ─────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// ─── Auth & JWT ───────────────────────────────────────────────────────────────

export interface JwtPayload {
  sub: string;             // user id
  email: string;
  roles: RoleWithScope[];
  isPublicUser?: boolean;
}

export interface RoleWithScope {
  role: UserRole;
  scopeType: ScopeType;
  scopeId: string | null;  // null = GLOBAL, string = faculty_id
}

// ─── User Summary ─────────────────────────────────────────────────────────────

export interface UserSummary {
  id: string;
  name: string;
  email: string;
  status: KaderStatus;
  level: KaderLevel;
  facultyId: string;
  bidangId?: string;
}

// ─── Approval generic ─────────────────────────────────────────────────────────

export interface ApprovableEntity {
  id: string;
  status: ApprovalStatus;
  submittedBy: string;
  reviewedBy?: string;
  rejectionNote?: string;
  submittedAt?: Date;
  reviewedAt?: Date;
}

// ─── Activity Score (PRD v1.1 §7) ────────────────────────────────────────────

export interface ActivityScoreBreakdown {
  attendanceScore: number;  // 0–100, bobot 40%
  mutabaahScore: number;    // 0–100, bobot 40%
  taskScore: number;        // 0–100, bobot 20%
  totalScore: number;       // hasil weighted
  category: ActivityCategory;
  periodMonth: string;      // format: YYYY-MM
}
