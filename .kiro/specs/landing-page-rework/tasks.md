# Landing Page Rework — Tasks

> Versi: v1.0 · Status: draft awaiting approval
> Companion docs: [`requirements.md`](./requirements.md), [`design.md`](./design.md), [`narrative.md`](./narrative.md)

---

## Prinsip Eksekusi

- **Branch:** `feat/web/landing-rework` (dari `dev`)
- **PR strategy:** 1 PR per phase, max 400 baris per PR (sesuai CONTRIBUTING.md). Kalau section besar, pecah per section.
- **Testing:** visual review internal (screenshot mobile + desktop), Lighthouse audit di akhir Phase 3.
- **Data:** tetap pakai `placeholder.ts` (restructure jadi `landing.ts`). Tidak menunggu backend.
- **Order:** Foundation dulu → Section top-to-bottom → Polish.

---

## Phase 0: Foundation

> Setup infrastruktur yang dibutuhkan sebelum menulis section apapun.

- [ ] **T-0.1** Buat branch `feat/web/landing-rework` dari `dev`
- [ ] **T-0.2** Install `framer-motion` (`pnpm add framer-motion` di `frontend/`)
- [ ] **T-0.3** Rewrite `globals.css` — implementasi design tokens baru (color, typography, spacing, radius, shadow) sesuai `design.md` §4
- [ ] **T-0.4** Buat `src/lib/motion.tsx` — `MotionProvider` + `LazyMotion` wrapper
- [ ] **T-0.5** Buat `src/lib/motion-variants.ts` — variants library (`fadeUp`, `fadeIn`, `fadeInRight`, `stagger`)
- [ ] **T-0.6** Tambahkan `MotionProvider` di `layout.tsx` (wrap children)
- [ ] **T-0.7** Buat folder `src/components/ui/` dan primitive components:
  - `Button.tsx` (variant: primary | secondary | ghost, size: sm | md | lg)
  - `Container.tsx` (max-w wrapper)
  - `SectionHeading.tsx` (eyebrow + title + sub)
  - `Eyebrow.tsx`
  - `QuoteBlock.tsx`
  - `TrustStrip.tsx`
  - `RevealOnScroll.tsx` (framer-motion wrapper)
- [ ] **T-0.8** Buat folder `src/components/sections/` (kosong dulu)
- [ ] **T-0.9** Restructure data: rename/refactor `src/data/placeholder.ts` → `src/data/landing.ts` dengan struktur yang sesuai section baru (traits, vision, philosophy, fakultas, faq, utility items)
- [ ] **T-0.10** Hapus hardcode `allowedDevOrigins` di `next.config.ts` (pindah ke env atau hapus)
- [ ] **T-0.11** Buat asset placeholder: `/public/calligraphy-alfath.svg` (bisa placeholder sederhana dulu, diganti nanti)

**Deliverable Phase 0:** PR #1 — foundation setup, tidak ada perubahan visual di halaman (landing masih pakai komponen lama).

---

## Phase 1: Section Implementation (Top → Bottom)

> Implement section satu per satu. Setiap section langsung menggantikan komponen lama di `page.tsx`.

### §1 Hero
- [ ] **T-1.1** Buat `src/components/sections/Hero.tsx` sesuai spec `design.md` §1
- [ ] **T-1.2** Implement Navbar polish (transparent → solid krem + blur on scroll, sesuai design)
- [ ] **T-1.3** Hapus `src/components/HeroSection.tsx` (old)
- [ ] **T-1.4** Update `page.tsx` — ganti `<HeroSection />` dengan `<Hero />`

### §2 Tiga Ruang Terbuka
- [ ] **T-1.5** Buat `src/components/sections/UtilitySection.tsx` + `UtilityCard` + `TeaserCard`
- [ ] **T-1.6** Hapus `src/components/EventSection.tsx`, `ArtikelSection.tsx`, `CollabSection.tsx`
- [ ] **T-1.7** Update `page.tsx` — ganti 3 section lama dengan `<UtilitySection />`

### §3 6 Sifat Kami
- [ ] **T-1.8** Buat `src/components/sections/TraitsSection.tsx` + `TraitCard`
- [ ] **T-1.9** Hapus `src/components/TentangSection.tsx`
- [ ] **T-1.10** Update `page.tsx` — ganti `<TentangSection />` dengan `<TraitsSection />`

### §4 Visi 4 Keyword
- [ ] **T-1.11** Buat `src/components/sections/VisionSection.tsx` + `VisionCard`
- [ ] **T-1.12** Update `page.tsx` — tambah `<VisionSection />` setelah `<TraitsSection />`

### §5 Raksa Samarasya
- [ ] **T-1.13** Buat `src/components/sections/KabinetSection.tsx` + `PhilosophyList`
- [ ] **T-1.14** Buat/siapkan SVG illustration (`/public/raksa-samarasya.svg` — placeholder geometric)
- [ ] **T-1.15** Update `page.tsx` — tambah `<KabinetSection />`

### §6 7 Fakultas
- [ ] **T-1.16** Refactor `src/components/FakultasSection.tsx` → pindah ke `src/components/sections/FakultasSection.tsx`
- [ ] **T-1.17** Implement tooltip per fakultas + animated connecting lines (framer-motion pathLength)
- [ ] **T-1.18** Reframe heading & sub copy sesuai `narrative.md` §6
- [ ] **T-1.19** Update `page.tsx` — ganti import path

### §7 CTA Final
- [ ] **T-1.20** Buat `src/components/sections/FinalCTA.tsx`
- [ ] **T-1.21** Hapus `src/components/CTASection.tsx`
- [ ] **T-1.22** Update `page.tsx` — ganti `<CTASection />` dengan `<FinalCTA />`

### §8 FAQ
- [ ] **T-1.23** Refactor `src/components/FAQSection.tsx` → pindah ke `src/components/sections/FAQSection.tsx`
- [ ] **T-1.24** Polish: single-open accordion, proper `aria-expanded`, smooth height transition
- [ ] **T-1.25** Update konten FAQ sesuai `narrative.md` §8
- [ ] **T-1.26** Update `page.tsx` — ganti import path

### §9 Footer
- [ ] **T-1.27** Refactor `src/components/Footer.tsx` → pindah ke `src/components/sections/Footer.tsx`
- [ ] **T-1.28** Buang watermark "AL-FATH" raksasa
- [ ] **T-1.29** Tambah tagline budaya + info heritage sesuai `narrative.md` §9
- [ ] **T-1.30** Update `page.tsx` — ganti import path

### ScrollToTop
- [ ] **T-1.31** Pertahankan `ScrollToTop.tsx`, polish styling (warna sesuai token baru)

**Deliverable Phase 1:** PR #2–#4 (pecah per babak jika perlu: Babak I+II, Babak III+IV, Babak V). Setiap PR = landing page progressif — tidak ada state "rusak".

---

## Phase 2: Responsive & Accessibility

- [ ] **T-2.1** Test responsif semua section di 5 breakpoint (xs/sm/md/lg/xl) — screenshot & fix
- [ ] **T-2.2** Pastikan semua image pakai `next/image` (audit `<img>` → 0 occurrence)
- [ ] **T-2.3** Implement `prefers-reduced-motion` di semua animasi (check `useReducedMotion`)
- [ ] **T-2.4** Keyboard navigation test: semua CTA, accordion FAQ, tooltip fakultas accessible via Tab
- [ ] **T-2.5** Kontras audit: check text-on-background ≥ 4.5:1 untuk semua body text
- [ ] **T-2.6** Add skip link (`Lompat ke konten utama`) di atas Navbar
- [ ] **T-2.7** Semantic HTML audit: proper heading hierarchy (h1 → h2 → h3), landmark regions

**Deliverable Phase 2:** PR #5 — a11y & responsive polish.

---

## Phase 3: Performance & Final Polish

- [ ] **T-3.1** Lighthouse audit (mobile + desktop) — target Performance ≥ 90, Accessibility ≥ 95
- [ ] **T-3.2** Font subsetting (Plus Jakarta Sans: latin only, weight 400+500+600+700)
- [ ] **T-3.3** Lazy load section ≥ §3 (`next/dynamic` atau scroll-trigger import)
- [ ] **T-3.4** SVG optimize (SVGO pass untuk semua `/public/*.svg`)
- [ ] **T-3.5** Bundle size check: pastikan framer-motion ≤ 25KB gz contribution
- [ ] **T-3.6** Cross-browser test: Chrome/Safari/Firefox/Edge (2 versi terakhir)
- [ ] **T-3.7** iOS Safari 16+ test (khusus sticky navbar + scroll behavior)
- [ ] **T-3.8** SEO meta: title, description, og:image placeholder sesuai `narrative.md` §5
- [ ] **T-3.9** Final copy review: bandingkan semua rendered text vs `narrative.md` — pastikan sinkron
- [ ] **T-3.10** Internal review: screenshot kirim ke minimal 3 reviewer (1 design, 1 dev, 1 non-tech)

**Deliverable Phase 3:** PR #6 — polish & performance. Setelah merge, landing page rework **DONE**.

---

## Phase 4: Post-Launch (Opsional / Backlog)

> Tidak termasuk scope MVP rework, tapi dicatat agar tidak hilang.

- [ ] **T-4.1** Ganti SVG placeholder dengan foto real Al-Fath (hero, kabinet, dll) saat tersedia
- [ ] **T-4.2** Hook section "Tiga Ruang Terbuka" ke backend API (artikel/collab/event) saat module ready
- [ ] **T-4.3** Buat halaman dedicated `/kader` untuk pembinaan & rekrutmen Gen 14 (≈ November 2026)
- [ ] **T-4.4** Aktifkan CTA "Daftar Kader" di landing saat pendaftaran dibuka (Desember 2026)
- [ ] **T-4.5** Implement ruang publik berikutnya (CV builder, dll) + update teaser card
- [ ] **T-4.6** Buat og:image final (1200×630) saat brand asset siap
- [ ] **T-4.7** Pertimbangkan analytics integration (Vercel Analytics / Posthog) untuk track scroll depth & CTR

---

## Estimasi Waktu

| Phase | Estimasi (1 dev) | Paralel? |
|---|---|---|
| Phase 0 | 1 hari | — |
| Phase 1 | 4–5 hari | Bisa dipecah ke 2 dev (front: §1-§4, back: §5-§9) |
| Phase 2 | 1–2 hari | Setelah Phase 1 selesai |
| Phase 3 | 1–2 hari | Setelah Phase 2 selesai |
| **Total** | **7–10 hari** | |

---

## Catatan PR Strategy

```
PR #1: Phase 0 (foundation)
       Branch: feat/web/landing-rework-foundation
       Target: dev

PR #2: Phase 1a (§1 Hero + §2 Utility)
       Branch: feat/web/landing-rework-hero-utility
       Target: dev

PR #3: Phase 1b (§3 Traits + §4 Vision + §5 Kabinet)
       Branch: feat/web/landing-rework-identity
       Target: dev

PR #4: Phase 1c (§6 Fakultas + §7 CTA + §8 FAQ + §9 Footer + ScrollToTop)
       Branch: feat/web/landing-rework-closing
       Target: dev

PR #5: Phase 2 (responsive + a11y)
       Branch: feat/web/landing-rework-a11y
       Target: dev

PR #6: Phase 3 (performance + final polish)
       Branch: feat/web/landing-rework-polish
       Target: dev
```

Setiap PR harus lolos review 1 orang + Lighthouse spot-check di section yang berubah.

---

## Versi & Approval

| Versi | Tanggal | Author | Catatan |
|---|---|---|---|
| v0.1 | 2026-05-20 | Kiro (draft) | Draft awal dari spec session |

> Setelah approval, tasks ini menjadi checklist resmi. Perubahan scope wajib update file ini + `design.md`.
