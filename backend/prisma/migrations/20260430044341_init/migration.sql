-- CreateEnum
CREATE TYPE "UserRoleEnum" AS ENUM ('SUPER_ADMIN', 'FACULTY_ADMIN', 'MENTOR', 'KADER');

-- CreateEnum
CREATE TYPE "ScopeType" AS ENUM ('GLOBAL', 'FACULTY');

-- CreateEnum
CREATE TYPE "KaderStatus" AS ENUM ('PENDING', 'ACTIVE', 'INACTIVE', 'ALUMNI', 'RESIGNED');

-- CreateEnum
CREATE TYPE "KaderLevelEnum" AS ENUM ('MULA', 'MUDA', 'MADYA', 'PURNA');

-- CreateEnum
CREATE TYPE "KaderJabatan" AS ENUM ('INTI', 'KEPALA_BIDANG', 'PIC_PROKER', 'ANGGOTA');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('DRAFT', 'PENDING', 'APPROVED', 'REJECTED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE', 'REJECTED');

-- CreateEnum
CREATE TYPE "CollabProjectStatus" AS ENUM ('PENDING', 'ACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "AttendanceMethod" AS ENUM ('QR', 'MANUAL');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('HADIR', 'IZIN', 'ALPA');

-- CreateEnum
CREATE TYPE "MentoringMemberRole" AS ENUM ('MENTOR', 'MENTEE');

-- CreateEnum
CREATE TYPE "CalendarEventType" AS ENUM ('MANUAL', 'MENTORING_SESSION', 'TASK_DEADLINE', 'PROKER', 'ATTENDANCE_EVENT');

-- CreateEnum
CREATE TYPE "CalendarScopeType" AS ENUM ('GLOBAL', 'FACULTY');

-- CreateEnum
CREATE TYPE "FinanceEntryType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "FinanceEntryStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SETTLED');

-- CreateEnum
CREATE TYPE "ArticleAuthorType" AS ENUM ('USER', 'PUBLIC_USER');

-- CreateEnum
CREATE TYPE "CollabOwnerType" AS ENUM ('USER', 'PUBLIC_USER');

-- CreateEnum
CREATE TYPE "AttendanceEventStatus" AS ENUM ('DRAFT', 'ACTIVE', 'CLOSED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone" TEXT,
    "avatar_url" TEXT,
    "nim" TEXT,
    "angkatan" INTEGER,
    "status" "KaderStatus" NOT NULL DEFAULT 'PENDING',
    "jabatan" "KaderJabatan" NOT NULL DEFAULT 'ANGGOTA',
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "public_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "UserRoleEnum" NOT NULL,
    "scope_type" "ScopeType" NOT NULL,
    "scope_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "primary_color" TEXT,
    "logo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faculties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bidangs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "faculty_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bidangs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kader_bidangs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "bidang_id" TEXT NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kader_bidangs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kader_levels" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "level" "KaderLevelEnum" NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "approved_by" TEXT,
    "approved_at" TIMESTAMP(3),
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kader_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentoring_groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "faculty_id" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentoring_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentoring_members" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "MentoringMemberRole" NOT NULL,

    CONSTRAINT "mentoring_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentoring_sessions" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "conducted_by" TEXT NOT NULL,
    "session_date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentoring_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_attendances" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "AttendanceStatus" NOT NULL,
    "score" DOUBLE PRECISION,
    "note" TEXT,

    CONSTRAINT "session_attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "faculty_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_end_date" TIMESTAMP(3),
    "is_qr_enabled" BOOLEAN NOT NULL DEFAULT false,
    "qr_token" TEXT,
    "qr_expires_at" TIMESTAMP(3),
    "status" "AttendanceEventStatus" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendance_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_records" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "method" "AttendanceMethod" NOT NULL,
    "status" "AttendanceStatus" NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,

    CONSTRAINT "attendance_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mutabaah_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "max_score" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mutabaah_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mutabaah_entries" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "week_start_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mutabaah_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mutabaah_entry_items" (
    "id" TEXT NOT NULL,
    "entry_id" TEXT NOT NULL,
    "template_id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "note" TEXT,

    CONSTRAINT "mutabaah_entry_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_scores" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "period_month" TEXT NOT NULL,
    "attendance_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mutabaah_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "task_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "calculated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prokers" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "bidang_id" TEXT NOT NULL,
    "faculty_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prokers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "proker_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "assigned_to" TEXT,
    "created_by" TEXT NOT NULL,
    "approved_by" TEXT,
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "deadline" TIMESTAMP(3),
    "rejection_note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finance_entries" (
    "id" TEXT NOT NULL,
    "faculty_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "amount" DECIMAL(15,2) NOT NULL,
    "type" "FinanceEntryType" NOT NULL,
    "proof_url" TEXT,
    "submitted_by" TEXT NOT NULL,
    "approved_by" TEXT,
    "status" "FinanceEntryStatus" NOT NULL DEFAULT 'PENDING',
    "rejection_note" TEXT,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "finance_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "excerpt" TEXT,
    "cover_url" TEXT,
    "author_id" TEXT NOT NULL,
    "author_type" "ArticleAuthorType" NOT NULL,
    "faculty_id" TEXT,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'DRAFT',
    "reviewed_by" TEXT,
    "rejection_note" TEXT,
    "published_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collab_projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "owner_type" "CollabOwnerType" NOT NULL,
    "status" "CollabProjectStatus" NOT NULL DEFAULT 'PENDING',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collab_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collab_applications" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "applicant_id" TEXT NOT NULL,
    "applicant_type" "CollabOwnerType" NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "message" TEXT,
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collab_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendar_events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "event_type" "CalendarEventType" NOT NULL,
    "scope_type" "CalendarScopeType" NOT NULL,
    "scope_id" TEXT,
    "created_by" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_end_date" TIMESTAMP(3),
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "mentoring_session_id" TEXT,
    "task_id" TEXT,
    "proker_id" TEXT,
    "attendance_event_id" TEXT,

    CONSTRAINT "calendar_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_nim_key" ON "users"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "public_users_email_key" ON "public_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_role_scope_type_scope_id_key" ON "user_roles"("user_id", "role", "scope_type", "scope_id");

-- CreateIndex
CREATE UNIQUE INDEX "faculties_slug_key" ON "faculties"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "bidangs_name_faculty_id_key" ON "bidangs"("name", "faculty_id");

-- CreateIndex
CREATE UNIQUE INDEX "kader_bidangs_user_id_bidang_id_key" ON "kader_bidangs"("user_id", "bidang_id");

-- CreateIndex
CREATE UNIQUE INDEX "mentoring_members_group_id_user_id_key" ON "mentoring_members"("group_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "session_attendances_session_id_user_id_key" ON "session_attendances"("session_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_events_qr_token_key" ON "attendance_events"("qr_token");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_records_event_id_user_id_key" ON "attendance_records"("event_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "mutabaah_entries_user_id_week_start_date_key" ON "mutabaah_entries"("user_id", "week_start_date");

-- CreateIndex
CREATE UNIQUE INDEX "mutabaah_entry_items_entry_id_template_id_key" ON "mutabaah_entry_items"("entry_id", "template_id");

-- CreateIndex
CREATE UNIQUE INDEX "activity_scores_user_id_period_month_key" ON "activity_scores"("user_id", "period_month");

-- CreateIndex
CREATE UNIQUE INDEX "collab_applications_project_id_applicant_id_applicant_type_key" ON "collab_applications"("project_id", "applicant_id", "applicant_type");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_events_mentoring_session_id_key" ON "calendar_events"("mentoring_session_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_events_task_id_key" ON "calendar_events"("task_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_events_proker_id_key" ON "calendar_events"("proker_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_events_attendance_event_id_key" ON "calendar_events"("attendance_event_id");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_scope_id_fkey" FOREIGN KEY ("scope_id") REFERENCES "faculties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bidangs" ADD CONSTRAINT "bidangs_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kader_bidangs" ADD CONSTRAINT "kader_bidangs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kader_bidangs" ADD CONSTRAINT "kader_bidangs_bidang_id_fkey" FOREIGN KEY ("bidang_id") REFERENCES "bidangs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kader_levels" ADD CONSTRAINT "kader_levels_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kader_levels" ADD CONSTRAINT "kader_levels_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentoring_groups" ADD CONSTRAINT "mentoring_groups_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentoring_members" ADD CONSTRAINT "mentoring_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "mentoring_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentoring_members" ADD CONSTRAINT "mentoring_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentoring_sessions" ADD CONSTRAINT "mentoring_sessions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "mentoring_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentoring_sessions" ADD CONSTRAINT "mentoring_sessions_conducted_by_fkey" FOREIGN KEY ("conducted_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_attendances" ADD CONSTRAINT "session_attendances_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "mentoring_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_attendances" ADD CONSTRAINT "session_attendances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_events" ADD CONSTRAINT "attendance_events_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_events" ADD CONSTRAINT "attendance_events_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "attendance_events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mutabaah_entries" ADD CONSTRAINT "mutabaah_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mutabaah_entry_items" ADD CONSTRAINT "mutabaah_entry_items_entry_id_fkey" FOREIGN KEY ("entry_id") REFERENCES "mutabaah_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mutabaah_entry_items" ADD CONSTRAINT "mutabaah_entry_items_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "mutabaah_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_scores" ADD CONSTRAINT "activity_scores_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prokers" ADD CONSTRAINT "prokers_bidang_id_fkey" FOREIGN KEY ("bidang_id") REFERENCES "bidangs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prokers" ADD CONSTRAINT "prokers_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prokers" ADD CONSTRAINT "prokers_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_proker_id_fkey" FOREIGN KEY ("proker_id") REFERENCES "prokers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finance_entries" ADD CONSTRAINT "finance_entries_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finance_entries" ADD CONSTRAINT "finance_entries_submitted_by_fkey" FOREIGN KEY ("submitted_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finance_entries" ADD CONSTRAINT "finance_entries_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "article_internal_author" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "article_public_author" FOREIGN KEY ("author_id") REFERENCES "public_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_reviewed_by_fkey" FOREIGN KEY ("reviewed_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collab_projects" ADD CONSTRAINT "collab_internal_owner" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collab_projects" ADD CONSTRAINT "collab_public_owner" FOREIGN KEY ("owner_id") REFERENCES "public_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collab_applications" ADD CONSTRAINT "collab_applications_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "collab_projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collab_applications" ADD CONSTRAINT "collab_app_internal" FOREIGN KEY ("applicant_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collab_applications" ADD CONSTRAINT "collab_app_public" FOREIGN KEY ("applicant_id") REFERENCES "public_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_scope_id_fkey" FOREIGN KEY ("scope_id") REFERENCES "faculties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_mentoring_session_id_fkey" FOREIGN KEY ("mentoring_session_id") REFERENCES "mentoring_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_proker_id_fkey" FOREIGN KEY ("proker_id") REFERENCES "prokers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_attendance_event_id_fkey" FOREIGN KEY ("attendance_event_id") REFERENCES "attendance_events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
