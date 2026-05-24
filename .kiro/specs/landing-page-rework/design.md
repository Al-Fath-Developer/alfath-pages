# Landing Page Rework — Design

> Versi: v1.0 · Status: draft awaiting approval
> Companion docs: [`requirements.md`](./requirements.md), [`narrative.md`](./narrative.md), [`tasks.md`](./tasks.md)

---

## 1. Story Arc

```
BABAK I    PERKENALAN     §1  Hero
BABAK II   MANFAAT PUBLIK §2  Tiga Ruang Terbuka
BABAK III  IDENTITAS      §3  6 Sifat   §4  Visi 4 Keyword
BABAK IV   SEMANGAT KINI  §5  Raksa Samarasya   §6  7 Fakultas
BABAK V    AJAKAN         §7  CTA Final   §8  FAQ   §9  Footer
```

**Prinsip emosi:** *Sapa hangat → tunjukkan manfaat → bangun trust → kenalkan generasi → undang interaksi.*

---

## 2. Information Architecture

| § | Section | Tinggi (vp) desktop | Tinggi (vp) mobile | Lazy? |
|---|---|---|---|---|
| 1 | Hero | 100vh | 100vh | tidak |
| 2 | Tiga Ruang Terbuka | ~80vh | ~140vh (3 card stacked) | tidak |
| 3 | 6 Sifat | ~90vh | ~180vh | ya |
| 4 | Visi 4 Keyword | ~80vh | ~150vh | ya |
| 5 | Raksa Samarasya | ~110vh | ~200vh | ya |
| 6 | 7 Fakultas | ~90vh | ~120vh | ya |
| 7 | CTA Final | ~50vh | ~70vh | ya |
| 8 | FAQ | ~auto | ~auto | ya |
| 9 | Footer | ~auto | ~auto | tidak |

Lazy loading: `next/dynamic` untuk section ≥ §3, dengan placeholder skeleton tipis.

---

## 3. Section Specifications

> Setiap section ditulis dengan struktur: **Tujuan naratif → Layout → Behavior → Komponen → Asset**.

---

### §1. Hero — *Sapa Hangat*

**Tujuan naratif:** Menyapa pengunjung dengan motto sebagai pesan pertama. Dalam 5 detik, pengunjung tahu (a) ini Al-Fath, (b) ini hangat, bukan kaku, (c) ada legitimasi resmi.

**Filosofi layout:** *Clear & centered.* Hindari decorative noise. Motto adalah pusat — semua elemen lain hanya pendukung.

**Layout (desktop ≥ 1024px):**
```
┌───────────────────────────────────────────────────────┐
│  [Navbar transparan]                                  │
│                                                       │
│             ┌─ kaligrafi watermark center ─┐         │
│             │  (opacity 6%, centered)       │         │
│             │                               │         │
│                  Lebih Dekat,                          │
│                Lebih Bersahabat.                       │
│                                                        │
│       Rumah pembinaan mahasiswa muslim                 │
│              Telkom University.                        │
│                                                        │
│              [ Kenali Al-Fath → ]                      │
│                                                        │
│                                                        │
│      UKM Resmi Tel-U · DKM Syamsul 'Ulum               │
│         · Anggota FSLDK · Sejak 2013                   │
│                                                        │
└───────────────────────────────────────────────────────┘
```

**Layout (mobile):** stacked center, all text & CTA centered, trust strip wrap 2 baris dengan separator titik tengah.

**Behavior:**
- Background: gradient lembut `cream-50 → gading` (#FDF8F4 → #F5F0EB) — flat, tanpa noise overlay/radial vignette.
- Watermark kaligrafi *الفتح*: dirender sebagai background absolute terpusat, opacity ~6%, ukuran clamp(200px, 30vw, 450px). **Tidak ada parallax**, tidak ada layering ganda.
- Subtle **fadeInUp** sequence saat mount: headline → sub → CTA → trust strip (stagger 150ms).
- Tidak ada scroll indicator (kontras dengan minimalisme).
- Navbar transition: transparent saat di atas → solid krem (`#FDF8F4`/90) + backdrop-blur saat scroll > 100px.

**Aturan copy hero (lock):**
- Eyebrow **dihilangkan** — biar motto langsung jadi fokus.
- Sub disederhanakan jadi **1 baris** (tidak 2 baris seperti versi awal): *"Rumah pembinaan mahasiswa muslim Telkom University."*
- CTA tetap: `Kenali Al-Fath →` (link ke `/tentang`).
- Trust strip 1 baris (responsif wrap di mobile).

**Komponen:**
- `<HeroSection />` (replace komponen lama yang dark + parallax)
- `<Button variant="primary" size="md">` — primitive baru
- `<TrustStrip />` — primitive baru, reusable di Footer juga

**Asset:**
- Watermark kaligrafi pakai font Scheherazade New (sudah loaded). Tidak butuh asset SVG terpisah untuk sekarang.
- Tidak ada foto. Tidak ada video.

> **Catatan revisi:** Versi spec awal (left-aligned + eyebrow + scroll indicator + 2-line sub) di-superseded oleh versi *clear centered* ini per keputusan owner pada eksekusi rework. Phase 0 tetap mempertahankan primitive `Button` & `TrustStrip` agar reusable.

---

### §2. Tiga Ruang Terbuka — *Manfaat Publik*

**Tujuan naratif:** Sebelum visitor bertanya "kenapa saya harus peduli?", kita jawab dengan "ini yang bisa kamu pakai". Utility-first.

**Layout (desktop):**
```
┌───────────────────────────────────────────────────────┐
│  [eyebrow] Untukmu                                    │
│  Tiga ruang yang terbuka untukmu.                     │
│  [sub] Sebelum kamu jadi bagian dari kami,            │
│  kamu sudah jadi bagian dari yang kami tulis,         │
│  kami ajak, dan kami kerjakan.                        │
│                                                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ ✦ Artikel  │  │ ✦ Collab   │  │ ✦ Event    │       │
│  │            │  │            │  │            │       │
│  │ Tulisan    │  │ Proyek     │  │ Kajian &   │       │
│  │ tentang... │  │ kolab...   │  │ kumpul...  │       │
│  │            │  │            │  │            │       │
│  │ ─────      │  │ ─────      │  │ ─────      │       │
│  │ 3 latest   │  │ 3 highlight│  │ 3 terdekat │       │
│  │ items      │  │ items      │  │ items      │       │
│  │            │  │            │  │            │       │
│  │ Lihat →    │  │ Lihat →    │  │ Lihat →    │       │
│  └────────────┘  └────────────┘  └────────────┘       │
│                                                       │
│  ┌─────────────────────────────────────────────┐      │
│  │  Ruang lain sedang kami siapkan.            │      │
│  │  Penasaran?  [ke instagram → ]              │      │
│  └─────────────────────────────────────────────┘      │
└───────────────────────────────────────────────────────┘
```

**Layout (mobile):** 3 card stacked vertikal, teaser card paling bawah.

**Behavior:**
- **Rounded top corner overlap:** Section ini memiliki `border-radius: 32px` di pojok kiri atas dan kanan atas, dengan `margin-top: -32px` (atau `-mt-8` Tailwind) untuk overlap visual ke Hero. Efek ini menciptakan transisi *card-rises-up* yang lembut antara hero dan section §2 — meniru pola modern landing seperti Linear, Vercel, Notion.
- Background: `cream-100` (#F5EBD8) — sengaja **lebih warna** dibanding hero (yang `cream-50`), supaya rounded corner-nya terlihat sebagai panel terangkat.
- Tiap card: surface `cream-50`, border `cream-200` (1px), radius 16px, padding 32px. Tanpa shadow tebal.
- Hover (desktop): subtle lift `translateY(-2px)` + border `primary-soft`.
- Item dalam card: 3 row, judul + meta (tanggal/lokasi).
- Teaser card "Ruang lain sedang kami siapkan": background `primary-soft`, dashed border 1px.
- Scroll-reveal: stagger `fadeUp` 0.08s per card.

**Z-index & overlap detail:**
- Section §2 punya `position: relative; z-index: 10` agar berada di atas hero
- Hero punya `position: relative; z-index: 0`
- Saat scroll, rounded corner section §2 akan terlihat "naik" dari bawah hero — bukan sekadar two flat sections.

**Komponen:**
- `<UtilitySection />` (baru)
- `<UtilityCard title icon items href />` — 1 card pattern, 3 instance
- `<TeaserCard />` — untuk hint future feature
- Buang: `EventSection.tsx`, `ArtikelSection.tsx`, `CollabSection.tsx` (jadi data prop untuk UtilityCard)

**Asset:**
- 3 ikon (lucide-react): `BookOpen`, `Users`, `Calendar` — atau custom SVG outline jika tone tidak pas.

---

### §3. 6 Sifat Kami — *Identitas*

**Tujuan naratif:** Saat visitor sudah lihat manfaat, mulailah cerita siapa di baliknya. Dimulai dari nilai-nilai inti.

**Layout (desktop, bento asimetris):**
```
┌──────────────────────────────────────────────┐
│  [eyebrow] Karakter Kami                     │
│  Kami dibangun dari enam sifat.              │
│                                              │
│  ┌────────────┐  ┌──────────────────────┐    │
│  │ Intelek    │  │ Qur'ani              │    │
│  │            │  │ (kartu lebih lebar)  │    │
│  │ Kompeten...│  │ Berpijak pada...     │    │
│  └────────────┘  └──────────────────────┘    │
│                                              │
│  ┌──────────────────────┐  ┌────────────┐    │
│  │ Profesional          │  │ Kekeluarga.│    │
│  │ (lebar)              │  │            │    │
│  └──────────────────────┘  └────────────┘    │
│                                              │
│  ┌────────────┐  ┌────────────┐              │
│  │ Inklusif   │  │ Dinamis    │              │
│  └────────────┘  └────────────┘              │
│                                              │
│  ─────────────────────────────────           │
│  500+ kader  ·  7 fakultas  ·  50+ program  │
└──────────────────────────────────────────────┘
```

**Layout (mobile):** Grid 2 kolom seragam, atau 1 kolom stacked (clean lebih penting daripada asimetris).

**Behavior:**
- Tiap kartu: surface `gading`, ikon outline kecil di kiri-atas (lucide), title bold, body text reguler.
- Stagger reveal 0.06s per kartu.
- Stat strip di bawah: text-only, `text-neutral-700`, separator titik tengah.

**Komponen:**
- `<TraitsSection />` (baru, reuse `<TentangSection>` slot tapi rewrite)
- `<TraitCard title body icon variant>` — variant: `default | wide`

**Ikon (lucide):**
- Intelek → `BookOpen` atau `GraduationCap`
- Qur'ani → custom SVG mushaf minimal (atau `BookMarked`)
- Profesional → `Briefcase`
- Kekeluargaan → `Users` atau custom hand-clasp
- Inklusif → `HeartHandshake`
- Dinamis → `Sparkles` atau `Zap`

---

### §4. Visi 4 Keyword — *Identitas (lanjut)*

**Tujuan naratif:** Setelah identitas (siapa kami), tunjukkan ke mana kami menuju.

**Layout (desktop):**
```
┌────────────────────────────────────────────────┐
│  [eyebrow] Visi 3 Tahun                        │
│  Tiga tahun ke depan,                          │
│  kami menuju empat hal.                        │
│                                                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ 01   │ │ 02   │ │ 03   │ │ 04   │           │
│  │ ▢    │ │ ▢    │ │ ▢    │ │ ▢    │           │
│  │Relev.│ │Inklu.│ │Terin.│ │Berda.│           │
│  │      │ │      │ │      │ │      │           │
│  │body  │ │body  │ │body  │ │body  │           │
│  └──────┘ └──────┘ └──────┘ └──────┘           │
│                                                │
│  ╔══════════════════════════════════════════╗  │
│  ║ "Menjadi rumah pembinaan mahasiswa       ║  │
│  ║ muslim Telkom University yang relevan,   ║  │
│  ║ inklusif, dan terintegrasi dalam         ║  │
│  ║ membentuk generasi yang beriman,         ║  │
│  ║ berkarakter, dan berdampak..."           ║  │
│  ║                       — Visi Al-Fath      ║  │
│  ╚══════════════════════════════════════════╝  │
└────────────────────────────────────────────────┘
```

**Layout (mobile):** 2 kolom kartu (atau 1 kolom), quote box stacked di bawah.

**Behavior:**
- Background: `cream-100` (kontras lembut dari §3 yang `cream-50`).
- Kartu: number `01–04` di atas, ikon abstrak SVG, nama keyword sebagai display, body 1–2 baris.
- Animasi: tiap kartu reveal dari kiri ke kanan staggered (untuk efek "satu per satu menuju ke arah").
- Quote box: surface `cream-50` border `cream-200`, font Plus Jakarta Sans 600 italic.

**Komponen:**
- `<VisionSection />`
- `<VisionCard number title body icon />`
- `<QuoteBlock />` — primitive reusable

**Ikon abstrak (SVG custom, simple line art):**
- Relevan → ikon "kompas" atau "sinar"
- Inklusif → ikon "lingkaran-lingkaran beririsan"
- Terintegrasi → ikon "node-node terhubung"
- Berdampak → ikon "gelombang air" atau "tetesan air"

---

### §5. Raksa Samarasya — *Semangat Kini*

**Tujuan naratif:** Sampai di sini, visitor tahu siapa Al-Fath secara prinsipil. Sekarang kenalkan generasi yang sedang membawanya. Ini section paling **story-rich**.

**Layout (desktop, 2 kolom):**
```
┌────────────────────────────────────────────────────┐
│  [eyebrow] Generasi ke-13                          │
│                                                    │
│  ┌─────────────┐ │ Generasi ini                    │
│  │             │ │ punya nama:                     │
│  │  ▲          │ │                                 │
│  │ ╱ ╲ pucuk   │ │ Raksa                           │
│  │╱   ╲ daun + │ │ Samarasya                       │
│  │  ★  bintang │ │ ──────────                      │
│  │ ─────       │ │                                 │
│  │ ╱╲╱╲ simetri│ │ Setiap lambang menyimpan        │
│  │             │ │ niat. Setiap warna mengeja      │
│  │ illustrasi  │ │ semangat.                       │
│  │ filosofi    │ │                                 │
│  │ kabinet     │ │ ▢ Pucuk Daun  → tumbuh          │
│  │             │ │ ★ Bintang     → cita-cita       │
│  │             │ │ ◆ Simetri     → keseimbangan    │
│  │             │ │ ● Merah/Krem  → keberanian +    │
│  │             │ │                tenang            │
│  │             │ │ ⏐ 7 Bagian    → 7 fakultas      │
│  └─────────────┘ │                                 │
└────────────────────────────────────────────────────┘
```

**Layout (mobile):** 1 kolom, illustration di atas, list filosofi di bawah, accordion-like (default expanded, optional collapse).

**Behavior:**
- Background: `cream-50`.
- Illustration: SVG custom (compose 3 elemen: pucuk daun + bintang + frame simetris). Stroke `primary` thin + fill `gold-soft` opacity 30% di bintang. **Tidak rumit** — minimalist line art.
- Animasi: SVG `path` draw-on-scroll (stroke-dasharray) saat masuk viewport. Filosofi list: stagger fadeInRight 0.1s per item.
- Tipografi nama "Raksa Samarasya": Plus Jakarta Sans 700, ukuran 4xl–6xl, color `primary`. Terdapat garis kecil di bawah judul (1px, primary, w-12).

**Komponen:**
- `<KabinetSection />`
- `<PhilosophyList />` — list 5 baris

**Asset:**
- `/public/raksa-samarasya.svg` — illustration komposit baru, monoline, palette: `primary` + `gold-soft` + `cream-200`.

---

### §6. 7 Fakultas — *Semangat Kini (lanjut)*

**Tujuan naratif:** Tunjukkan jangkauan: Al-Fath bukan hanya pusat, ada di tiap fakultas. Mempertahankan visual radial yang sudah jadi signature, tapi rework framing.

**Layout (desktop):** Pertahankan radial layout existing, polish:
- Logo Al-Fath di tengah (ukuran lebih kecil dari sekarang)
- 7 logo fakultas mengelilingi dalam radius
- Connecting lines SVG dengan **animasi draw-on-scroll** (improvement)
- Tooltip on hover: nama fakultas + 1 kalimat tone

**Layout (mobile):** 
- Grid 2-kolom (existing fallback OK), tapi judul card tambah 1 line tone description
- Atau: vertical list dengan icon kiri, deskripsi kanan

**Behavior:**
- Background: `gading`.
- Lines: stroke `primary` opacity 30%, dashed `4 4`, animasi `pathLength: 0 → 1` (framer-motion atau SVG SMIL).
- Tooltip: appear with `fadeIn` + `scale` 0.95 → 1, surface `cream-50`, border `primary-soft`, shadow halus.
- Logo fakultas: hover scale 1.05, brightness up.

**Tooltip copy 7 fakultas (lihat `narrative.md` §6):**
- FIF, FTE, FRI, FEB, FKIS, FIK, FIT — masing-masing 1 kalimat tone.

**Komponen:**
- `<FakultasSection />` — refactor existing, jangan rewrite total
- `<FakultasTooltip facultyId />`

---

### §7. CTA Final — *Ajakan*

**Tujuan naratif:** Setelah perjalanan story, undang tindakan ringan (bukan rekrutmen mendesak).

**Layout (desktop):**
```
┌───────────────────────────────────────────────────┐
│                                                   │
│             Pintu kami selalu terbuka.            │
│             ───────────────────────────           │
│                                                   │
│   Mulai dari membaca, ikut diskusi, atau          │
│   sekadar menyapa.                                │
│                                                   │
│   [ Baca Artikel ]   [ ✦ Ikuti @ldkalfath ]       │
│                                                   │
└───────────────────────────────────────────────────┘
```

**Layout (mobile):** stacked, button full width.

**Behavior:**
- Background: solid `primary` dengan subtle texture (noise SVG opacity 4%) — TIDAK gradient agresif.
- Tipografi heading: `cream-50`, Plus Jakarta Sans 700, ukuran besar.
- Button primer (Baca Artikel): bg `cream-50` text `primary` — invert kontras.
- Button sekunder (Instagram): bg transparent, border `cream-50`, ikon Instagram (lucide).
- Subtle ornament kaligrafi sebagai watermark di sudut, opacity 6%.
- Tidak ada CTA "Daftar Kader" di sini (alasan: pendaftaran masih jauh, tone tidak pushy).

**Komponen:**
- `<FinalCTA />` (rework `CTASection.tsx`)
- Reuse `<Button />`

---

### §8. FAQ

**Tujuan naratif:** Reduce friction. Jawab pertanyaan praktis tanpa membebani section utama.

**Layout (desktop):**
- Container max-w 768px, center.
- Heading sederhana di atas, accordion list di bawah.
- 5–6 item.

**Behavior:**
- Single-open accordion (membuka satu menutup yang lain).
- Smooth height transition (CSS `grid-template-rows: 0fr → 1fr` trick atau framer `AnimatePresence`).
- Plus icon rotate 45° saat open.
- Background: `cream-50`.

**Komponen:**
- `<FAQSection />` — bisa pertahankan existing dengan polish accessibility (proper `<button>`, `aria-expanded`).

**Konten FAQ (lihat `narrative.md` §8).**

---

### §9. Footer

**Tujuan naratif:** Tutup hangat, tetap informatif, tagline budaya muncul di sini.

**Layout (desktop, 4 kolom):**
```
┌──────────────────────────────────────────────────────────┐
│  Al-Fath        Tentang        Layanan        Hubungi    │
│  [logo]         Sejarah         Artikel       Instagram   │
│  Lebih Dekat,   Visi Misi       Collab        YouTube    │
│  Lebih          Kabinet         Event         Email      │
│  Bersahabat.    7 Fakultas      Kalender      Lokasi     │
│                                                          │
│  ──────────────────────────────────────────────────────  │
│  Senyum, Salam, Sapa, Jabat Tangan.                      │
│                                                          │
│  Didirikan 24 November 2013 / 21 Muharram 1435 H ·       │
│  Bandung                                                 │
│  UKM Resmi Tel-U · DKM Syamsul 'Ulum · FSLDK             │
│                                                          │
│  © 2026 LDK Al-Fath Telkom University                    │
└──────────────────────────────────────────────────────────┘
```

**Layout (mobile):** 2 kolom (col 1+2 dan col 3+4 jadi 2 grid), tagline & info center.

**Behavior:**
- Background: `ink` (#1A0005) atau `charcoal` — gelap untuk kontras dengan section krem.
- Tipografi: warm white text, link hover `primary-soft`.
- **Buang watermark "AL-FATH" raksasa**.
- Tagline budaya `Senyum, Salam, Sapa, Jabat Tangan.` ditampilkan dengan italic, ukuran cukup untuk noticeable tapi tidak shouty.

**Komponen:**
- `<Footer />` — refactor existing.

---

## 4. Design Tokens

> File: `frontend/src/app/globals.css` (Tailwind v4 `@theme` directive).

### 4.1 Color

```css
@theme {
  /* === Neutral === */
  --color-ink: #1A0005;          /* Display & dark surface (Footer) */
  --color-charcoal: #2A1A12;     /* Body text */
  --color-neutral-700: #4A3A30;  /* Secondary text */
  --color-neutral-500: #7A6A5C;  /* Tertiary text, captions */

  /* === Brand Primary === */
  --color-primary: #C8102E;      /* Tel-U red */
  --color-primary-dark: #8B0000;
  --color-primary-soft: #FCE9EC; /* Latar lembut, hover background */

  /* === Cream / Putih Gading === */
  --color-cream-50: #FBF7EF;     /* Body background, hero base */
  --color-cream-100: #F5EBD8;    /* Surface utama (card) */
  --color-gading: #EFE3CC;       /* Surface accent / section divider */
  --color-cream-200: #E8D9B5;    /* Border hangat */

  /* === Aksen Filosofi (HEMAT pakai!) === */
  --color-gold-soft: #C9A961;    /* Bintang Raksa Samarasya — hanya di §5 */
  --color-leaf-soft: #6B8E4E;    /* Pucuk Daun — hanya di §5 */
}
```

**Aturan pemakaian:**
- `cream-50` adalah **default body background** — jangan pakai putih murni `#FFFFFF`.
- Merah `primary` digunakan sebagai **aksen** (link, button primer, highlight kecil), bukan sebagai bidang besar — kecuali §7 (Final CTA) yang sengaja diberi area merah.
- Gold & Leaf **tidak boleh** muncul di luar §5 Raksa Samarasya.

### 4.2 Typography

```css
@theme {
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-arabic: 'Scheherazade New', serif;

  /* Display & Heading */
  --text-display-2xl: 5rem / 1.05;   /* hero headline desktop */
  --text-display-xl:  4rem / 1.05;
  --text-display-lg:  3rem / 1.1;
  --text-display-md:  2.25rem / 1.15; /* section headline */
  --text-display-sm:  1.75rem / 1.2;

  /* Body */
  --text-body-lg: 1.125rem / 1.7;
  --text-body-md: 1rem / 1.7;
  --text-body-sm: 0.875rem / 1.65;

  /* Eyebrow / micro */
  --text-eyebrow: 0.8125rem / 1; /* uppercase tracking-widest */
}
```

**Aturan:**
- Body text default: `text-body-md` weight 400, `color-charcoal`.
- Heading section: `text-display-md` weight 700, line-height tight.
- **Hindari font weight 800–900** (terlalu tegas untuk tone hangat). Maksimal 700.
- Eyebrow: uppercase, `letter-spacing: 0.12em`, `color-primary`, ukuran kecil.
- Arabic: hanya untuk kutipan kunci atau watermark — tidak pernah body text.

### 4.3 Spacing

8pt grid:
```
  0  4  8  12  16  20  24  32  40  48  64  80  96  128
```

**Section padding:**
- Mobile: `py-16` (64px) atau `py-20` (80px)
- Desktop: `py-24` (96px) atau `py-32` (128px)

**Container:**
- Max width `1200px` (`max-w-screen-xl`)
- Padding inline mobile `px-6`, desktop `px-8`

### 4.4 Radius

```
  --radius-sm: 8px;     /* badge, chip */
  --radius-md: 12px;    /* button, input */
  --radius-lg: 16px;    /* card */
  --radius-xl: 24px;    /* card large, section */
  --radius-2xl: 32px;   /* hero feature card */
```

### 4.5 Shadow

Minimalist — **tidak ada shadow tebal**. Hanya:
```
  --shadow-soft: 0 1px 2px rgba(26, 0, 5, 0.04), 0 4px 12px rgba(26, 0, 5, 0.04);
  --shadow-card-hover: 0 2px 4px rgba(26, 0, 5, 0.06), 0 8px 24px rgba(26, 0, 5, 0.06);
```

Default card: tanpa shadow, hanya border `cream-200`. Hover: tambah `shadow-soft`.

### 4.6 Motion

```
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-quick: 200ms;
  --duration-base: 400ms;
  --duration-slow: 700ms;
```

---

## 5. Visual Style Direction

**Filosofi:** *Minimalist warm — empty space adalah elemen desain, bukan kekosongan.*

- **80%+ ruang krem**, merah hanya sebagai aksen (kecuali §7).
- **Garis tipis (1px)** lebih disukai daripada bidang penuh atau shadow.
- **Tipografi diberi napas** — line-height generous (1.7 untuk body, 1.1 untuk display).
- **Ornamen Islami minimal:** tidak ada border arabesque ribet, tidak ada frame ornamental. Cukup kaligrafi watermark di hero & ornamen halus di FinalCTA.
- **Illustration > foto stock.** Sampai foto real ada, semua visual via SVG.
- **Tidak ada gradient agresif.** Gradient hanya halus di hero (cream → gading + radial primary glow 6%).

---

## 6. Animation Strategy (framer-motion)

### 6.1 Setup

```tsx
// src/lib/motion.tsx
import { LazyMotion, domAnimation, m } from 'framer-motion';

export function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
export { m };
```

Pakai `m.*` (bukan `motion.*`) + `LazyMotion` untuk **bundle hemat** (~6KB vs ~32KB).

### 6.2 Variants Library

```tsx
// src/lib/motion-variants.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }},
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 }},
};

export const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 }},
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay }},
});
```

### 6.3 Pattern Penggunaan

```tsx
<m.div
  variants={stagger(0.08)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-15%' }}
>
  {items.map(item => (
    <m.div key={item.id} variants={fadeUp}>...</m.div>
  ))}
</m.div>
```

### 6.4 Reduced Motion

```tsx
// src/lib/motion.tsx
import { useReducedMotion } from 'framer-motion';
// ...
const reduce = useReducedMotion();
const v = reduce ? { hidden: {}, visible: {} } : fadeUp;
```

**Wajib:** semua section yang punya animasi reveal harus check `useReducedMotion`.

---

## 7. Responsive Strategy

**Mobile-first**. Breakpoints (Tailwind default):
- `sm: 640px` — phone large
- `md: 768px` — tablet portrait
- `lg: 1024px` — tablet landscape / small laptop
- `xl: 1280px` — desktop
- `2xl: 1536px` — wide desktop

**Layout shifts:**
- Section yang berubah significantly mobile↔desktop:
  - §1 Hero: padding & font scale, tidak ada layout shift
  - §3 6 Sifat: bento asimetris (≥md) → grid uniform 2-kol (sm) → 1-kol (xs)
  - §5 Raksa Samarasya: 2-kolom (≥md) → 1-kolom stacked
  - §6 7 Fakultas: radial (≥md) → grid 2-kolom (sm) → 1-kolom list (xs)
  - §9 Footer: 4-kol (≥md) → 2-kol (sm) → 1-kol (xs)

---

## 8. Component Inventory

### 8.1 Primitive baru (`src/components/ui/`)

```
Button.tsx           — variant: primary | secondary | ghost · size: sm | md | lg
Container.tsx        — max-w wrapper konsisten
SectionHeading.tsx   — eyebrow + title + sub
Eyebrow.tsx          — text micro uppercase aksen primary
QuoteBlock.tsx       — surface untuk kutipan visi/nilai
TrustStrip.tsx       — strip badge legitimacy
RevealOnScroll.tsx   — wrapper framer-motion fadeUp
```

### 8.2 Section components (`src/components/sections/`)

```
Hero.tsx
UtilitySection.tsx           ← gantikan Event/Artikel/Collab
TraitsSection.tsx            ← gantikan TentangSection
VisionSection.tsx            ← baru
KabinetSection.tsx           ← baru (Raksa Samarasya)
FakultasSection.tsx          ← refactor existing
FinalCTA.tsx                 ← gantikan CTASection
FAQSection.tsx               ← refactor existing
Footer.tsx                   ← refactor existing
```

### 8.3 Yang Dibuang
```
src/components/HeroSection.tsx       (replaced by sections/Hero.tsx)
src/components/TentangSection.tsx    (replaced by TraitsSection.tsx)
src/components/EventSection.tsx      (merged into UtilitySection)
src/components/ArtikelSection.tsx    (merged into UtilitySection)
src/components/CollabSection.tsx     (merged into UtilitySection)
src/components/CTASection.tsx        (replaced by FinalCTA)
```

`Navbar.tsx` & `ScrollToTop.tsx` dipertahankan dengan polish (Navbar: blur on scroll yang lebih halus).

---

## 9. Asset Inventory

### Yang Perlu Dibuat
| Asset | Format | Lokasi | Catatan |
|---|---|---|---|
| Kaligrafi Al-Fath watermark | SVG monoline | `/public/calligraphy-alfath.svg` | Stroke 1.5px, currentColor |
| Logo Raksa Samarasya / illustrasi filosofi | SVG | `/public/raksa-samarasya.svg` | Komposit pucuk daun + bintang + frame |
| Ikon visi (4 keyword) | SVG inline (di komponen) | inline | Geometric simple, 1px stroke |
| Noise texture (opsional) | SVG | `/public/noise.svg` | Untuk §7 background |
| Logo 7 fakultas | SVG/PNG | `/public/fakultas/*.svg` | Audit & cleanup yang sudah ada |
| Favicon hangat | ICO/PNG | `/src/app/favicon.ico` | Pertahankan jika sudah pas |
| Logo Al-Fath utama | PNG/SVG | `/public/AL-FATH-KECIL.png` | Sudah ada — convert ke SVG jika memungkinkan |

### Yang Tidak Dibutuhkan Sekarang
- Foto kegiatan, foto pengurus, video hero — placeholder via illustration sampai foto real tersedia.

---

## 10. Tech Decisions

| Keputusan | Pilihan | Alasan |
|---|---|---|
| Animation lib | **framer-motion** + LazyMotion | API jelas, scroll-trigger native, bundle hemat dengan LazyMotion |
| Image | **`next/image`** wajib | Migrasi dari `<img>`, optimize LCP |
| Icon | **lucide-react** (existing) + custom SVG | Konsisten dengan existing |
| Form (newsletter, dll) | **Tidak ada** di rework ini | Out of scope |
| State management | **None** | Landing static, tidak butuh state global |
| Data source | `placeholder.ts` → ke API setelah backend ready | Decoupling progres landing dari progres backend |
| Styling | **Tailwind v4 only** + design tokens | Tidak pakai CSS-in-JS atau styled-components |
| Linting | ESLint flat config existing | Pertahankan |
| Test | Skip untuk MVP rework | Test akan ditambahkan saat backend hookup |
| `next.config.ts` | Hapus `allowedDevOrigins` hardcode | Pindah ke env atau hapus |

---

## 11. Konsekuensi & Migrasi

### File yang Berubah/Hilang

```diff
- frontend/src/app/page.tsx                           ← rewrite full
- frontend/src/components/HeroSection.tsx             ← delete
- frontend/src/components/TentangSection.tsx          ← delete
- frontend/src/components/EventSection.tsx            ← delete
- frontend/src/components/ArtikelSection.tsx          ← delete
- frontend/src/components/CollabSection.tsx           ← delete
- frontend/src/components/CTASection.tsx              ← delete
- frontend/src/components/FAQSection.tsx              ← polish
- frontend/src/components/Footer.tsx                  ← polish
- frontend/src/components/Navbar.tsx                  ← polish
- frontend/src/components/FooterIcons.tsx             ← keep
- frontend/src/components/ScrollToTop.tsx             ← keep
- frontend/src/app/globals.css                        ← rewrite tokens
- frontend/src/app/layout.tsx                         ← tambah MotionProvider
+ frontend/src/components/sections/                   ← folder baru
+ frontend/src/components/ui/                         ← folder baru
+ frontend/src/lib/motion.tsx                         ← baru
+ frontend/src/lib/motion-variants.ts                 ← baru
+ frontend/src/data/landing.ts                        ← restructure dari placeholder.ts
+ frontend/public/calligraphy-alfath.svg              ← asset baru
+ frontend/public/raksa-samarasya.svg                 ← asset baru
```

### Dependency Tambahan

```jsonc
// frontend/package.json
{
  "dependencies": {
    "framer-motion": "^11.11.x"   // pin minor saat install
  }
}
```

---

## 12. Open Questions

Hal-hal yang masih perlu diputuskan saat eksekusi:

1. **Domain final** — `alfath.id`? `ldkalfath.com`? Saat ini disebut `alfath.com` di chat — perlu konfirmasi untuk SEO meta.
2. **Social handles** — username Instagram, YouTube, dst untuk CTA & Footer.
3. **Email kontak resmi** untuk Footer.
4. **Logo SVG fakultas** — apakah akan disuplai dari tim brand fakultas masing-masing, atau buat sendiri minimal?
5. **Tone Arabic font** — pakai untuk eyebrow watermark di section selain hero, atau cukup di hero saja?
