# AGENTS.md — ldk-alfath

## Workspace

pnpm monorepo (Node >=20, pnpm >=9). Three packages:
- `backend/` — NestJS 11 API, Prisma 7, PostgreSQL
- `frontend/` — Next.js 16, React 19
- `packages/shared` — `@ldk-alfath/shared` types/enums/constants consumed by backend

## Commands (run from root)

| Action | Command |
|---|---|
| Dev (all) | `pnpm dev` |
| Build | `pnpm build` — builds shared **first**, then backend + frontend in parallel |
| Lint | `pnpm lint` |
| Type-check | `pnpm type-check` |
| Clean | `pnpm clean` |

**Build order matters:** shared must be compiled before backend/frontend can resolve `@ldk-alfath/shared`.

### Backend-only (`backend/`)
- `pnpm dev` or `nest start --watch`
- `pnpm test` / `pnpm test:watch` / `pnpm test:cov` (Jest, `*.spec.ts` in `src/`)
- Prisma: `pnpm prisma:generate`, `pnpm prisma:migrate` (dev), `pnpm prisma:migrate:prod` (deploy), `pnpm prisma:studio`, `pnpm prisma:seed`

### Frontend-only (`frontend/`)
- `pnpm dev` / `pnpm build` / `pnpm start`

## Setup

1. `pnpm install`
2. Copy `backend/.env` (gitignored). `DATABASE_URL` must point to a running Postgres.
3. `docker compose up -d postgres` — starts Postgres 15 on port 5432 (creds: `alfath`/`alfath123`/`alfath_db`).
4. `cd backend && pnpm prisma:generate && pnpm prisma:migrate`

## Architecture notes

- Prisma uses the new `prisma.config.ts` format (earlyAccess) — not the old CLI flag style. Config lives in `backend/prisma.config.ts`, schema at `backend/prisma/schema.prisma`.
- Generated Prisma client output: `backend/prisma/generated/` (gitignored).
- Frontend has its own `AGENTS.md` with a critical warning: Next.js 16 has breaking changes vs training data. Read `node_modules/next/dist/docs/` before writing frontend code.
- ESLint uses flat config (`eslint.config.mjs`) in both backend and frontend.
- Prettier (backend only): `singleQuote: true`, `trailingComma: "all"`.
- No CI workflows configured yet.
- Branches: `main` (stable), `dev` (integration), feature branches off `dev`.
