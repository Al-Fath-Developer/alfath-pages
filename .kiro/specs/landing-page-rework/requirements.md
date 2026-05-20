# Landing Page Rework — Requirements

> Spec untuk rework menyeluruh landing page publik Al-Fath (`/`).
> Versi: v1.0 · Status: draft awaiting approval

---

## 1. Latar Belakang

Landing page versi pertama (`feat/web/homepage/pusat`) sudah memiliki struktur dan komponen, namun **tidak memiliki story arc yang utuh**. Setiap section berdiri sendiri sebagai inventaris ("kami punya X, Y, Z") tanpa membangun narasi yang membuat pengunjung merasa terhubung dengan identitas Al-Fath.

Rework ini bertujuan memindahkan landing page dari **inventory page** menjadi **narrative public hub** yang:
1. Memperkenalkan identitas Al-Fath dengan tone hangat (sesuai motto *"Lebih Dekat, Lebih Bersahabat"*).
2. Memberikan utilitas publik segera (artikel, collab, event) — bukan funnel rekrutmen kader.
3. Menyiapkan ruang bagi fitur publik berikutnya (mis. CV builder, dll).

---

## 2. Tujuan Halaman

### Primary Goal
Menjadi **pintu masuk publik** Al-Fath: memperkenalkan identitas organisasi dan menyalurkan pengunjung ke layanan publik (artikel, collab, event).

### Secondary Goal
Membangun trust dan brand recognition (legitimasi sebagai UKM resmi Tel-U + DKM Syamsul 'Ulum + FSLDK).

### Bukan Goal Halaman Ini
- Rekrutmen kader detail (akan dibuat halaman dedicated saat pendaftaran Gen 14 dibuka, target Desember).
- Onboarding internal kader (gunakan dashboard internal).
- Showcase organizational structure detail (gunakan halaman `/tentang`).

### Success Metric
- **Engagement:** scroll depth median ≥ 70% (visitor mencapai section "Raksa Samarasya" atau lebih jauh).
- **Conversion utility:** CTR ≥ 8% ke salah satu dari `/artikel`, `/collab`, atau `/event`.
- **Performance:** Lighthouse Performance ≥ 90, LCP < 2.5s, CLS < 0.1.
- **A11y:** Lighthouse Accessibility ≥ 95.
- **Brand fit:** review subjektif tim — pengunjung merasakan tone *"hangat, mengundang, bukan eksklusif"* (tervalidasi via internal user testing minimal 5 orang).

---

## 3. Target Audience

### Primary
**Mahasiswa Muslim Telkom University** (semester 1–8) yang ingin:
- Membaca konten yang relevan dengan kehidupan kampus & iman.
- Ikut atau mengusulkan project collab.
- Tahu kegiatan/kajian terdekat.

### Secondary
- **Publik umum & alumni** — mencari informasi tentang Al-Fath.
- **Mitra collab eksternal** (organisasi mahasiswa lain, lembaga dakwah lain).
- **Calon kader Gen 14** (saat pendaftaran dibuka — sekunder untuk landing utama, primer untuk halaman dedicated nanti).

---

## 4. Pesan Utama

> **"Al-Fath adalah rumah pembinaan mahasiswa muslim Telkom University yang relevan, inklusif, dan terintegrasi — terbuka untuk semua yang ingin tumbuh."**

Empat keyword non-negotiable: **Relevan · Inklusif · Terintegrasi · Berdampak**.

Motto sebagai jangkar tone: **"Lebih Dekat, Lebih Bersahabat."**

---

## 5. Pain Points Versi Sekarang

### Naratif
- **Hero hitam-pekat dengan kaligrafi raksasa** terasa megah & intimidating, **mismatch dengan motto** "Lebih Dekat, Lebih Bersahabat".
- **3 carousel beruntun** (Event → Artikel → Collab) melelahkan dan repetitif secara visual.
- **Stat angka kosong** ("500+ anggota, 7 fakultas, 50+ proker") tanpa konteks naratif terasa flexing, bukan touching.
- **Tidak ada arc**: setiap section seperti modul terpisah, tanpa membawa pengunjung dalam perjalanan emosional.
- **Identitas DNA hilang** — tidak ada penyebutan 6 sifat, visi 3 tahun, kabinet Raksa Samarasya, atau status sebagai UKM resmi/DKM/FSLDK.

### Visual & Sistem
- **Palet warna pincang:** filosofi Raksa Samarasya menyebut "Merah & Krem", tapi implementasi sekarang hanya merah + putih bersih (krem hilang).
- **Fakultas radial bagus**, tapi konteks/tooltip kurang menjelaskan *kenapa itu penting*.
- **Image masih `<img>`**, belum migrasi ke `next/image` (impact LCP & CLS).
- **`next.config.ts` hardcode IP LAN dev** — leakage konfigurasi developer ke repo.
- **Watermark "AL-FATH" raksasa di Footer** terlalu shouty untuk tone hangat.

### Aksesibilitas & Responsif
- Tidak ada handling `prefers-reduced-motion` untuk parallax & carousel.
- Carousel auto-play tanpa kontrol pause/play eksplisit.
- Beberapa kontras text-on-image mepet WCAG AA.

---

## 6. Konten yang HARUS Ada

| Konten | Alasan |
|---|---|
| Motto **"Lebih Dekat, Lebih Bersahabat"** sebagai headline hero | Jangkar tone seluruh halaman |
| Trust strip (UKM Resmi Tel-U · DKM Syamsul 'Ulum · FSLDK · Sejak 2013) | Legitimasi organisasi |
| Akses cepat ke Artikel, Collab, Event | Utility public hub |
| 6 Sifat (Intelek, Qur'ani, Profesional, Kekeluargaan, Inklusif, Dinamis) | Identitas DNA |
| Visi 4 keyword (Relevan, Inklusif, Terintegrasi, Berdampak) + visi 3 tahun verbatim | Arah strategis |
| Kabinet Raksa Samarasya & filosofi (pucuk daun, bintang, simetri, merah-krem, 7 warna) | Semangat generasi kini |
| 7 Fakultas dengan konteks naratif | Sebaran organisasi |
| FAQ dasar | Reduce friction visitor |
| Tagline budaya **"Senyum, Salam, Sapa, Jabat Tangan."** di Footer | Mempertahankan DNA budaya tanpa section dedicated |
| Tanggal pendirian (24 Nov 2013 / 21 Muharram 1435 H) | Heritage & trust |

---

## 7. Konten yang BOLEH/HARUS Dibuang

| Konten | Alasan dibuang |
|---|---|
| EventSection sebagai carousel sendiri | Digabung jadi 1 panel di section "Tiga Ruang Terbuka" |
| ArtikelSection sebagai carousel sendiri | Digabung |
| CollabSection sebagai grid sendiri | Digabung |
| Stat bento 3 angka tanpa konteks | Stat boleh ada, tapi sebagai proof bar pendukung di section 6 Sifat |
| Watermark "AL-FATH" raksasa di Footer | Terlalu shouty |
| Section "Perjalanan Kader (Mula→Purna)" | Bukan untuk audiens publik. Akan dibuat di halaman terpisah `/kader` saat pendaftaran dibuka. |
| Section "Budaya" dedicated (Senyum/Salam/Sapa/Jabat Tangan) | Disisipkan sebagai 1 baris tagline di Footer |
| Hero hitam pekat dengan kaligrafi raksasa | Mismatch dengan motto |

---

## 8. Constraint

### Brand
- Warna primer **#C8102E** (merah Tel-U) — final, tidak negotiable.
- Krem/Putih Gading **wajib** masuk palet (sesuai filosofi Raksa Samarasya).
- Gold & Leaf hanya sebagai aksen halus di section Raksa Samarasya — **tidak boleh** menjadi warna brand sekunder.

### Teknis
- **Next.js 16** App Router (perhatian: banyak breaking change vs N.js 14/15).
- **React 19**.
- **Tailwind v4** (pakai `@theme` directive di `globals.css`).
- **Wajib** `next/image` untuk semua gambar.
- **Boleh tambah dependency:** `framer-motion` (untuk scroll-reveal & micro-interaction).
- **Pertahankan** `lucide-react`, `Plus Jakarta Sans`, `Scheherazade New`.
- Hormati `prefers-reduced-motion`.

### Konten
- **Tidak ada foto real** Al-Fath saat ini → strategi visual: **illustration-led + abstract gradient + SVG geometric**.
- Copy ditulis dalam Bahasa Indonesia (formal-hangat, bukan kaku).
- Penggunaan kata Arab/Islami: sparing & kontekstual (jangan over).

### Aksesibilitas
- WCAG 2.1 AA minimum.
- Kontras text-on-background ≥ 4.5:1 untuk body text.
- Semua interactive element keyboard-navigable.
- Animasi off ketika `prefers-reduced-motion: reduce`.

### Performance
- Bundle size budget: tidak menambah > 50KB gz untuk landing page (framer-motion ~20KB gz acceptable).
- Lazy load section di bawah fold pertama.
- Font: subsetting + `display: swap`.

### Browser Support
- Chrome/Edge/Safari/Firefox 2 versi terakhir.
- iOS Safari 16+, Chrome Android 100+.

---

## 9. Out of Scope

Hal-hal berikut **bukan bagian** dari spec ini:
- Halaman `/tentang` lengkap (organizational chart, sejarah panjang).
- Halaman `/kader`, `/pembinaan`, `/levelisasi` (dedicated rekrutmen).
- Halaman detail artikel `/artikel/[slug]`, detail collab `/collab/[id]`, detail event `/event/[id]`.
- Halaman fakultas `/fakultas/[slug]`.
- Backend API hookup (landing page tetap pakai `placeholder.ts` untuk MVP rework — hookup akan dilakukan saat backend module Article/Collab/Event ready).
- Internationalization (i18n) — saat ini mono-bahasa (ID).
- CV builder & fitur publik lanjutan — disebutkan sebagai *"ruang lain sedang kami siapkan"* di Section 2, tapi tidak diimplementasikan di rework ini.

---

## 10. Asumsi & Risiko

### Asumsi
- Tim sepakat dengan story arc 5 babak (Perkenalan → Manfaat Publik → Identitas → Semangat Kini → Ajakan).
- Foto real Al-Fath akan tersedia dalam 1–2 bulan ke depan untuk replacement bertahap.
- Pendaftaran kader Gen 14 sekitar Desember — landing page tidak perlu CTA rekrutmen mendesak sampai mendekati waktu itu.
- Backend module untuk Article/Collab/Event akan ready dalam 1–2 sprint setelah landing rework.

### Risiko
| Risiko | Mitigasi |
|---|---|
| Copy terkesan "kering" tanpa foto real | Heavy illustration + tipografi yang ekspresif |
| Visitor merasa landing "kurang Islami" karena visual minimalist | Pertahankan ornamen kaligrafi halus + tipografi Arabic untuk kutipan kunci |
| Pengembangan section terlalu lama | Lean MVP per section, polish iteratif setelah merge ke `dev` |
| framer-motion bikin bundle besar | Import selektif (`m.div` + `LazyMotion`), bukan `motion.*` global |
| Future feature (CV builder) tidak konsisten dengan landing | Section 2 sudah disiapkan dengan teaser card "Ruang lain sedang disiapkan" |

---

## 11. Definisi Selesai (Definition of Done)

Rework dianggap selesai ketika:
- [ ] Semua 9 section sesuai spec di `design.md` ter-implement.
- [ ] Copy sesuai `narrative.md`.
- [ ] Lighthouse Performance ≥ 90 di mobile + desktop.
- [ ] Lighthouse Accessibility ≥ 95.
- [ ] Cross-browser test passed (Chrome/Safari/Firefox).
- [ ] `prefers-reduced-motion` diuji & dihormati.
- [ ] Tidak ada `<img>` polos (semua via `next/image`).
- [ ] Internal review minimal 3 orang (1 design, 1 dev, 1 non-tech).
- [ ] Merged ke `dev` via PR sesuai `CONTRIBUTING.md`.
