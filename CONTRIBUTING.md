# Contributing Guide — LDK Alfath Monorepo

## Workflow
1. Ambil Issue di GitHub Project
2. Buat branch dari `dev`
3. Commit sesuai konvensi
4. Push branch → buka PR ke `dev`
5. Mention reviewer di PR + Discord
6. Setelah merge, hapus branch

## Rules
- Jangan push langsung ke `dev` atau `main`
- Resolve conflict di branch sendiri
- Satu Issue = satu branch = satu PR
- Pull `dev` sebelum mulai kerja

## Branching
- Semua kerjaan di branch feature/fix/chore/docs
- Format: `{type}/{scope}-{deskripsi}`
- Scope: `web`, `api`, `shared`, `docker`, `github`

Contoh:
- `feat/web-navbar-desktop`
- `fix/api-prisma-seed`
- `chore/docker-compose-update`

## Commit Message
Gunakan [Conventional Commits](https://www.conventionalcommits.org/):

Contoh:
- `feat(web): add sticky navbar`
- `fix(api): resolve prisma timeout`

Type yang dipakai: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`.

## Pull Request
- PR dari branch feature → `dev`
- PR template wajib diisi
- Max 400 baris perubahan
- Review dalam 48 jam
- 1 approval + CI pass sebelum merge
