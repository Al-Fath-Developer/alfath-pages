# 🕌 LDK ALFATH Integrated Platform

Platform terintegrasi untuk mendukung operasional internal dan publikasi digital LDK ALFATH di tingkat fakultas.

---

# 📌 Overview

Sistem ini dikembangkan untuk mengatasi permasalahan utama dalam organisasi:

* Data kader tidak terpusat
* Monitoring mentoring sulit dilakukan
* Pengelolaan proker dan task tidak terstruktur
* Transparansi keuangan terbatas
* Media dakwah digital belum optimal
* Tidak adanya wadah kolaborasi

Platform ini menggabungkan **internal management system** dan **public-facing features** dalam satu aplikasi.

---

# 🎯 Objectives

* Sentralisasi database kader
* Monitoring pembinaan berbasis mentoring
* Efisiensi pengelolaan proker
* Transparansi keuangan
* Media dakwah digital
* Fasilitasi kolaborasi

---

# 🏗️ System Architecture

## Approach

* Modular Monolith (Microservice-ready)

## Stack

| Layer      | Technology |
| ---------- | ---------- |
| Frontend   | Next.js    |
| Backend    | NestJS     |
| Database   | PostgreSQL |
| ORM        | Prisma     |
| Auth       | JWT        |
| Deployment | Docker     |

---

# 🧩 System Modules

## Internal Modules

* Kader Management
* Mentoring System
* Task & Project Management
* Finance (Expense Tracking)

## Public Modules

* Landing Page
* CMS (Artikel Dakwah)
* Collab Project

---

# 🔄 Main Flows

| Flow             | Deskripsi                                                |
| ---------------- | -------------------------------------------------------- |
| Public Access    | User mengakses landing page, artikel, dan collab project |
| Kader Onboarding | Admin membuat dan mengelola data kader                   |
| Mentoring        | Mentor mencatat session, attendance, dan score           |
| Task & Proker    | Pengurus membuat project dan task                        |
| Finance          | Input pengeluaran + approval                             |
| CMS              | Artikel melalui proses draft → review → publish          |
| Collab Project   | User membuat project dan menerima applicant              |

---

# 📊 Business Rules

| Kategori   | Rules                                       |
| ---------- | ------------------------------------------- |
| Kader      | Wajib terdaftar, 1 fakultas, multi-role     |
| Mentoring  | Wajib, 1 group aktif, penilaian per session |
| Levelisasi | Mula → Muda → Madya → Purna                 |
| Task       | Harus terkait project + approval            |
| Finance    | Wajib bukti + approval                      |
| CMS        | Wajib moderasi                              |
| Collab     | Open/Close + apply system                   |

---

# ⚙️ Project Structure

```bash
src/
  modules/
    auth/
    user/
    kader/
    organization/
    mentoring/
    task/
    finance/
    cms/
    collab/

  prisma/
```

---

# 🧑‍💻 Development Environment

## Recommended

* OS: Linux (Fedora GNOME)
* Node.js ≥ 18
* Docker

---

# 🚀 Getting Started

## 1. Clone

```bash
git clone <repo-url>
cd backend
```

## 2. Install

```bash
npm install
```

## 3. Run Database

```bash
docker-compose up -d
```

## 4. Setup ENV

```env
DATABASE_URL="postgresql://alfath:alfath123@localhost:5432/alfath_db"
```

## 5. Prisma Migration

```bash
npx prisma migrate dev --name init
```

## 6. Run App

```bash
npm run start:dev
```

---

# 🔐 Access Control

* Role-Based Access Control (RBAC)
* Data isolation per fakultas
* Mentor hanya dapat mengakses mentee

---

# 📈 Roadmap

## Phase 1 (MVP)

* Auth
* Kader
* Mentoring
* Task

## Phase 2

* Finance
* CMS

## Phase 3

* Collab Project
* Public features

---

# ⚠️ Risks

| Risk                | Mitigation      |
| ------------------- | --------------- |
| Scope terlalu besar | Fokus MVP       |
| User malas input    | UI sederhana    |
| Data tidak valid    | Validasi sistem |

---

# 💡 Vision

Platform ini difokuskan untuk mendukung operasional LDK ALFATH secara terstruktur, efisien, dan terintegrasi, tanpa over-engineering, namun tetap scalable untuk pengembangan ke depan.

---

# 📌 Notes

* Fokus awal: Kader + Mentoring
* Hindari premature microservices
* Maintain modularity

---

**Built for structured dakwah management and sustainable system growth.**
