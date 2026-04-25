# TESTING

# LDK ALFATH Integrated Platform

## Overview

LDK ALFATH Integrated Platform adalah sistem berbasis web yang dirancang untuk mendukung operasional organisasi dakwah kampus pada tingkat fakultas. Sistem ini bertujuan untuk mengatasi permasalahan utama seperti tidak terpusatnya data kader, kesulitan dalam monitoring pembinaan, pengelolaan program kerja yang tidak terstruktur, serta keterbatasan transparansi keuangan dan media publikasi.

Platform ini mengintegrasikan kebutuhan internal organisasi dengan fitur publik, sehingga mampu berfungsi sebagai sistem manajemen sekaligus media dakwah digital.

---

## Objectives

* Menyediakan database kader terpusat
* Mendukung monitoring pembinaan berbasis mentoring
* Meningkatkan efisiensi pengelolaan program kerja
* Menyediakan transparansi keuangan
* Menjadi media publikasi dakwah
* Memfasilitasi kolaborasi antar pengguna

---

## System Architecture

### Approach

Sistem dikembangkan menggunakan pendekatan modular monolith yang memungkinkan pengembangan terstruktur sekaligus memudahkan transisi ke arsitektur microservices di masa depan.

### Technology Stack

| Layer          | Technology           |
| -------------- | -------------------- |
| Frontend       | Next.js              |
| Backend        | NestJS               |
| Database       | PostgreSQL           |
| ORM            | Prisma               |
| Authentication | JSON Web Token (JWT) |
| Deployment     | Docker               |

---

## System Modules

### Internal Modules

* Kader Management
* Mentoring System
* Task and Project Management
* Finance (Expense Tracking)

### Public Modules

* Landing Page
* Content Management System (CMS)
* Collaboration Project (Collab Project)

---

## Main Flows

| Flow             | Description                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| Public Access    | Pengguna mengakses landing page, melihat artikel dan collab project, serta dapat melakukan registrasi dan login |
| Kader Onboarding | Admin membuat dan mengelola data kader serta melakukan assignment ke organisasi dan mentoring                   |
| Mentoring        | Mentor membuat sesi mingguan dan mencatat kehadiran serta penilaian                                             |
| Task and Project | Pengurus membuat project, mendistribusikan task, serta memonitor progres dan approval                           |
| Finance          | Pengurus mencatat pengeluaran, mengunggah bukti, dan melakukan proses approval                                  |
| CMS              | Pengguna membuat artikel, melalui proses review, kemudian dipublikasikan                                        |
| Collab Project   | Pengguna membuat project kolaborasi, pengguna lain melakukan pendaftaran, dan owner melakukan seleksi           |

---

## Business Rules

| Category       | Rules                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Kader          | Setiap kader wajib terdaftar, memiliki satu fakultas, dan dapat memiliki lebih dari satu peran          |
| Mentoring      | Wajib diikuti oleh seluruh kader, satu kader hanya dalam satu group aktif, penilaian dilakukan per sesi |
| Levelization   | Level terdiri dari Mula, Muda, Madya, dan Purna berdasarkan evaluasi mentoring                          |
| Task           | Setiap task harus terkait dengan project dan dapat memerlukan approval                                  |
| Finance        | Setiap pengeluaran wajib memiliki bukti dan melalui proses approval                                     |
| CMS            | Semua konten harus melalui proses moderasi sebelum dipublikasikan                                       |
| Collab Project | Project dapat dibuat oleh kader maupun publik dan memiliki sistem pendaftaran                           |

---

## Functional Requirements (EARS)

| ID    | Requirement                                                                               |
| ----- | ----------------------------------------------------------------------------------------- |
| FR-01 | When an admin creates a kader, the system shall store kader data                          |
| FR-02 | When a mentor creates a session, the system shall record attendance and score             |
| FR-03 | When a user creates a task, the system shall require association with a project           |
| FR-04 | When a finance entry is submitted, the system shall require proof and approval            |
| FR-05 | When a user submits an article, the system shall require moderation before publishing     |
| FR-06 | When a user creates a collab project, the system shall store the project with open status |
| FR-07 | When a user applies to a collab project, the system shall record the application          |

---

## Non-Functional Requirements

| ID     | Requirement                                                     |
| ------ | --------------------------------------------------------------- |
| NFR-01 | The system shall enforce role-based access control (RBAC)       |
| NFR-02 | The system shall ensure data isolation per faculty              |
| NFR-03 | The system shall respond within three seconds under normal load |
| NFR-04 | The system shall support modular scalability                    |
| NFR-05 | The system shall maintain uptime of at least 95 percent         |
| NFR-06 | The system shall provide responsive access across devices       |
| NFR-07 | The system shall maintain data consistency                      |

---

## Project Structure

```
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

## Development Environment

* Operating System: Linux (recommended)
* Node.js version 18 or higher
* Docker for containerized database

---

## Getting Started

### 1. Clone Repository

```
git clone <repository-url>
cd alfath-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Database (Docker)

```
docker-compose up -d
```

### 4. Configure Environment Variables

Create `.env` file:

```
DATABASE_URL="postgresql://alfath:alfath123@localhost:5432/alfath_db"
```

### 5. Run Migration

```
npx prisma migrate dev --name init
```

### 6. Start Application

```
npm run start:dev
```

---

## Access Control

Sistem menerapkan Role-Based Access Control (RBAC) dengan pembatasan akses berdasarkan peran dan fakultas. Data kader bersifat sensitif dan hanya dapat diakses oleh pihak yang memiliki otorisasi, termasuk pembatasan akses mentor terhadap mentee.

---

## Roadmap

### Phase 1

* Authentication
* Kader Management
* Mentoring System

### Phase 2

* Task and Project Management
* Finance Module

### Phase 3

* CMS
* Collab Project
* Public Features

---

## Risks and Mitigation

| Risk                      | Mitigation                      |
| ------------------------- | ------------------------------- |
| Scope terlalu luas        | Fokus pada implementasi MVP     |
| Rendahnya adopsi pengguna | Desain antarmuka yang sederhana |
| Data tidak konsisten      | Validasi dan kontrol sistem     |

---

## Conclusion

Platform ini dirancang sebagai solusi terintegrasi untuk mendukung operasional LDK ALFATH secara sistematis dan efisien. Dengan menggabungkan pengelolaan kader, monitoring pembinaan, pengelolaan program kerja, serta transparansi keuangan dalam satu sistem, organisasi dapat meningkatkan kualitas manajemen secara signifikan. Penambahan fitur publik seperti CMS dan collab project memperluas fungsi sistem sebagai media dakwah dan kolaborasi. Pendekatan modular monolith memastikan pengembangan tetap terstruktur dan adaptif terhadap kebutuhan di masa depan.
