# Landing Page Rework — Narrative & Copy

> Versi: v1.0 · Status: draft awaiting approval
> Single source of truth untuk seluruh copy landing page.
> Semua perubahan copy di komponen wajib dirujukkan ke file ini.

---

## 1. Tone & Voice Guidelines

### 1.1 Karakter Suara

**Hangat — Mengundang — Sederhana — Tulus.**

Bayangkan: senior yang lebih tua satu-dua tahun, mengajak ngobrol di kantin sambil menyapa orang lewat. Bukan ustadz di mimbar, bukan brosur kampus, bukan AI generator.

### 1.2 Aturan Penulisan

- **Pakai "kami" bukan "kita"** untuk menyebut Al-Fath. Pakai "kamu" untuk pengunjung. Hindari "anda" (terlalu formal) dan "lo" (terlalu casual).
- **Kalimat pendek-pendek**. Maksimal 18 kata per kalimat untuk body text.
- **Hindari jargon dakwah berlapis** ("manhaj", "tarbiyah", "fikrah"). Pakai bahasa yang dimengerti mahasiswa Tel-U manapun.
- **Boleh emosional, tapi tidak melodramatis**. "Pintu kami selalu terbuka" — OK. "Pintu surga di hati ini sedia menyambutmu" — terlalu jauh.
- **Penggunaan kata Arab/Islami**: hemat, kontekstual. *Ukhuwah, dakwah, ta'aruf, syuro* OK saat memang itu istilahnya. Hindari menumpuk dalam satu kalimat.
- **Tanda baca**: gunakan em-dash `—` untuk pause naratif, bukan `--` atau `-`. Gunakan tanda titik tegas, jarang seru.
- **Capitalization**: Title Case untuk heading, sentence case untuk subheading & body.

### 1.3 Don'ts

- ❌ "Mari kita bersama-sama menggapai ridha-Nya..."
- ❌ "Bergabunglah dengan kami!! Wujudkan mimpimu!!!"
- ❌ "Lembaga Dakwah Kampus terbesar dan terbaik di Telkom University."
- ❌ Mengklaim superlatif tanpa bukti.
- ❌ Menggunakan emoji di copy utama (boleh di FAQ jawaban kalau pas).

### 1.4 Do's

- ✅ "Lebih Dekat, Lebih Bersahabat."
- ✅ "Pintu kami selalu terbuka."
- ✅ "Tujuh fakultas, satu napas dakwah."
- ✅ Kalimat yang bisa dibaca pelan-pelan dan terasa.

---

## 2. Common Brand Phrases

Frasa yang konsisten dipakai di seluruh landing:

| Frasa | Konteks pemakaian |
|---|---|
| **Lebih Dekat, Lebih Bersahabat** | Motto. Hero headline & Footer. |
| **Rumah pembinaan** | Cara mendeskripsikan Al-Fath secara fungsional |
| **Terbuka untuk semua** / **Terbuka untukmu** | Penekanan inklusivitas |
| **Tujuh fakultas, satu napas** | Frase kunci di section 7 fakultas |
| **Senyum, Salam, Sapa, Jabat Tangan** | Tagline budaya — Footer |
| **Tumbuh bersama** | Frase tumbuh-bareng di beberapa section |

---

## 3. Section Copy

> Format setiap section:
> - **Eyebrow** (mikro, uppercase di UI)
> - **Heading** (display)
> - **Subheading / sub** (body lg)
> - **Body** (jika ada)
> - **CTA / Micro-copy** (jika ada)

---

### §1 Hero

**Eyebrow:**
> Lembaga Dakwah Kampus Telkom University

**Heading (display 2xl):**
> Lebih Dekat,
> Lebih Bersahabat.

> *Catatan render: pecah dua baris di desktop. Di mobile bisa dua baris atau satu baris fluid—tergantung font scale. Tetap satu kalimat secara semantik (`<h1>`).*

**Sub:**
> Rumah pembinaan mahasiswa muslim Telkom University.
> Terbuka untuk semua yang ingin tumbuh.

**CTA primer:**
> Kenali Al-Fath →

> *Tujuan: smooth-scroll ke §3 (6 Sifat). `aria-label="Kenali Al-Fath, lompat ke bagian identitas"`.*

**Trust strip:**
> UKM Resmi Telkom University · Badan Otonom DKM Syamsul 'Ulum · Anggota FSLDK · Sejak 24 November 2013

**Scroll indicator (micro):**
> Scroll untuk berkenalan

---

### §2 Tiga Ruang Terbuka

**Eyebrow:**
> Untukmu

**Heading:**
> Tiga ruang yang terbuka untukmu.

**Sub:**
> Sebelum kamu jadi bagian dari kami, kamu sudah jadi bagian dari yang kami tulis, kami ajak, dan kami kerjakan.

**Card 1 — Artikel:**
- Title: **Artikel**
- Body: Tulisan tentang iman, ilmu, dan kehidupan kampus — dari kader, untuk siapa saja.
- Link: Baca semua artikel →
- Items (placeholder, 3 latest dari `placeholder.ts`)

**Card 2 — Collab:**
- Title: **Collab**
- Body: Proyek kolaboratif yang bisa kamu ikuti — atau kamu mulai sendiri.
- Link: Lihat semua collab →
- Items (placeholder, 3 highlight)

**Card 3 — Event:**
- Title: **Event**
- Body: Kajian, ngobrol santai, dan pertemuan yang menghangatkan.
- Link: Lihat semua event →
- Items (placeholder, 3 terdekat)

**Teaser card (di bawah 3 card):**
> **Ruang lain sedang kami siapkan.**
> Penasaran? Ikuti kami sebentar.
> [ke Instagram →]

---

### §3 6 Sifat Kami

**Eyebrow:**
> Karakter Kami

**Heading:**
> Kami dibangun dari enam sifat.

**Sub:**
> Bukan slogan untuk dipajang. Ini cara kami berpikir, beramal, dan saling menjaga.

**Card 1 — Intelek**
> Kompeten secara akademik. Karena ilmu adalah jalan, bukan musuh, dakwah.

**Card 2 — Qur'ani**
> Berpijak pada Al-Qur'an. Sumber kami menimbang dan menapak.

**Card 3 — Profesional**
> Beramal dengan ilmu, dan bertanggung jawab atasnya.

**Card 4 — Kekeluargaan**
> Ukhuwah yang erat: yang dekat semakin akrab, yang jauh kami sapa lebih dulu.

**Card 5 — Inklusif**
> Terbuka untuk semua mahasiswa muslim Tel-U — apa pun fakultasmu, dari mana pun jalanmu.

**Card 6 — Dinamis**
> Adaptif, kreatif, dan selalu mencari cara yang lebih baik.

**Stat strip (di bawah grid):**
> 500+ kader · 7 fakultas · 50+ program tahun ini

---

### §4 Visi 4 Keyword

**Eyebrow:**
> Visi 3 Tahun

**Heading:**
> Tiga tahun ke depan, kami menuju empat hal.

**Sub:**
> Visi kami sederhana, tapi konsisten.

**Card 01 — Relevan**
> Hadir di tantangan zaman. Berbicara dalam bahasa generasi ini.

**Card 02 — Inklusif**
> Tidak menyaring siapa yang boleh tumbuh bersama.

**Card 03 — Terintegrasi**
> Tujuh fakultas, satu napas dakwah.

**Card 04 — Berdampak**
> Bukan sekadar ada — tapi membekas.

**Quote box (di bawah):**
> "Menjadi rumah pembinaan mahasiswa muslim Telkom University yang relevan, inklusif, dan terintegrasi dalam membentuk generasi yang beriman, berkarakter, dan berdampak dalam kehidupan akademik dan sosial."
> 
> — Visi Al-Fath, 2025–2028

---

### §5 Raksa Samarasya

**Eyebrow:**
> Generasi ke-13

**Heading (display lg, dua baris):**
> Generasi ini punya nama:
> **Raksa Samarasya.**

> *Render: "Raksa Samarasya" diberi warna `primary`, ukuran lebih besar dari baris pertama, dengan garis kecil 1px width 48px di bawahnya.*

**Sub:**
> Setiap lambang menyimpan niat. Setiap warna mengeja semangat.

**Filosofi list (5 baris dengan ikon kecil):**

| Lambang | Body |
|---|---|
| **Pucuk Daun** | Tumbuh tanpa henti — adaptif terhadap musim, sabar pada proses. |
| **Bintang** | Cita-cita yang tinggi, terlihat dari kejauhan. |
| **Simetri & Seimbang** | Kokoh karena seimbang, teratur karena cermat. |
| **Merah & Krem** | Keberanian almamater Telkom, ketenangan dalam langkah. |
| **Tujuh Bagian Warna** | Tujuh fakultas, satu identitas yang menyatu. |

**Footer kalimat (paragraf penutup section, opsional):**
> Kami sedang menapak — tahun demi tahun, generasi demi generasi.

---

### §6 7 Fakultas

**Eyebrow:**
> Sebaran Kami

**Heading:**
> Karena Al-Fath itu satu, hadir di tujuh.

**Sub:**
> Setiap fakultas punya warna dan iramanya sendiri — tapi kami menapak di pondasi yang sama.

**Tooltip per fakultas (1 kalimat masing-masing):**

| Fakultas | Tooltip |
|---|---|
| **FIF** — Fakultas Informatika | Tempat teknologi bertemu adab. |
| **FTE** — Fakultas Teknik Elektro | Arus yang mengalir, niat yang menyala. |
| **FRI** — Fakultas Rekayasa Industri | Sistem yang efisien, hati yang tenang. |
| **FEB** — Fakultas Ekonomi & Bisnis | Berhitung dengan akal, bertimbang dengan iman. |
| **FKIS** — Fakultas Komunikasi & Ilmu Sosial | Kata yang menjangkau, makna yang menyentuh. |
| **FIK** — Fakultas Industri Kreatif | Karya yang lahir dari niat yang baik. |
| **FIT** — Fakultas Ilmu Terapan | Praktik yang nyata, dampak yang terasa. |

> *Catatan: Tooltip ini bukan jargon resmi setiap fakultas. Ini interpretasi tone Al-Fath atas masing-masing rumpun keilmuan. Boleh diiterasi.*

**Caption legend (mobile, di bawah radial):**
> Klik atau hover sebuah fakultas untuk mengenalnya.

---

### §7 CTA Final

**Heading (display lg):**
> Pintu kami selalu terbuka.

**Sub:**
> Mulai dari membaca, ikut diskusi, atau sekadar menyapa.

**Button primer:**
> Baca Artikel

**Button sekunder:**
> ✦ Ikuti @ldkalfath

> *Catatan: handle Instagram placeholder. Konfirmasi handle resmi sebelum production.*

**Tagline kecil di bawah button (opsional):**
> Pendaftaran kader Generasi 14 dibuka Desember 2026.

> *Penekanan ringan, bukan pushy. Visitor yang tertarik tahu kapan momen-nya, sisanya tidak terganggu.*

---

### §8 FAQ

**Heading:**
> Pertanyaan yang sering muncul.

**Sub:**
> Kalau jawabnya belum ada di sini, sapa kami langsung lewat Instagram.

**Item 1**
- Q: **Apa itu LDK Al-Fath?**
- A: Al-Fath adalah Unit Kegiatan Mahasiswa (UKM) Kerohanian resmi di Telkom University, sekaligus badan otonom Dewan Kemakmuran Masjid (DKM) Syamsul 'Ulum, dan bagian dari jaringan Forum Silaturahim Lembaga Dakwah Kampus (FSLDK). Kami berdiri sejak 24 November 2013 (21 Muharram 1435 H).

**Item 2**
- Q: **Saya bukan anak Tel-U, apa boleh ikut Collab atau baca Artikel?**
- A: Boleh banget. Artikel dan ruang Collab kami terbuka untuk publik. Untuk Collab, kamu bisa apply atau bahkan mengusulkan project sendiri.

**Item 3**
- Q: **Bedanya Al-Fath sama UKM kerohanian lain di Tel-U?**
- A: Al-Fath bersifat *integratif* — kami hadir di tujuh fakultas dengan satu visi yang sama. Selain pembinaan kader, kami juga mengelola ruang publik (artikel, collab, event) yang bisa dimanfaatkan siapa saja.

**Item 4**
- Q: **Kapan pendaftaran kader baru?**
- A: Pendaftaran kader Generasi 14 direncanakan Desember 2026. Detailnya akan kami umumkan lebih dekat ke waktu — pantau Instagram kami.

**Item 5**
- Q: **Saya tertarik kolaborasi/sponsor/ngobrol. Bagaimana caranya?**
- A: DM Instagram kami atau kirim email ke [email kontak]. Kami baca dan balas.

**Item 6 (opsional, kalau perlu):**
- Q: **Apa itu pembinaan kader?**
- A: Proses tumbuh bersama — dari berkenalan, mengakar, hingga membagi. Detail levelisasi dan mentoring akan ada di halaman khusus kader.

---

### §9 Footer

**Kolom 1 — Brand**
- Logo Al-Fath
- Tagline: *Lebih Dekat, Lebih Bersahabat.*

**Kolom 2 — Tentang**
- Sejarah
- Visi & Misi
- Kabinet Raksa Samarasya
- 7 Fakultas

**Kolom 3 — Layanan**
- Artikel
- Collab
- Event
- Kalender

**Kolom 4 — Hubungi**
- Instagram: @ldkalfath
- YouTube: LDK Al-Fath Tel-U
- Email: [email]
- Lokasi: Masjid Syamsul 'Ulum, Telkom University

**Tagline budaya (separator + center, italic):**
> *Senyum, Salam, Sapa, Jabat Tangan.*

**Info heritage (kecil, center):**
> Didirikan 24 November 2013 / 21 Muharram 1435 H · Bandung
> UKM Resmi Telkom University · Badan Otonom DKM Syamsul 'Ulum · Anggota FSLDK

**Copyright:**
> © 2026 LDK Al-Fath Telkom University. Semua hak dilindungi.

---

## 4. Microcopy & UI Strings

| Konteks | String |
|---|---|
| Loading skeleton | *Sedang menyiapkan...* |
| Empty state utility | *Belum ada [artikel/collab/event]. Cek kembali nanti.* |
| Error state | *Sedang ada gangguan. Coba lagi sebentar?* |
| Form submit success | *Pesan kamu sudah sampai. Kami balas secepatnya.* |
| ScrollToTop button | *Ke atas* (aria-label: *Kembali ke atas halaman*) |
| Skip link | *Lompat ke konten utama* |

---

## 5. SEO Meta

**Title (default):**
> LDK Al-Fath Telkom University — Lebih Dekat, Lebih Bersahabat

**Description:**
> Rumah pembinaan mahasiswa muslim Telkom University. Terbuka untuk semua yang ingin tumbuh bersama melalui artikel, kolaborasi, dan kegiatan kampus.

**OG Image:**
- 1200×630px, background krem, kaligrafi Al-Fath halus, motto sebagai headline. *Asset perlu dibuat.*

---

## 6. Open Copy Decisions

Hal-hal yang masih perlu konfirmasi sebelum production:

1. **Handle Instagram resmi** (`@ldkalfath` placeholder).
2. **Email kontak resmi** (Footer & FAQ).
3. **Channel YouTube** (nama persis).
4. **Tooltip 7 fakultas** — perlu validasi dengan tim/PJ masing-masing fakultas? Atau cukup interpretasi tim landing page?
5. **Tanggal pendaftaran Gen 14** — "Desember 2026" cukup atau diganti "akhir 2026" sampai pasti?
6. **Email kontak format** — `info@`, `hello@`, `dkm@`?

---

## 7. Versi & Persetujuan

| Versi | Tanggal | Penulis | Catatan |
|---|---|---|---|
| v0.1 | 2026-05-19 | Kiro (draft) | Draft awal berdasarkan DNA + arah produk dari tim |

> Setelah approval, copy ini menjadi single-source-of-truth. Perubahan di komponen wajib mengupdate file ini terlebih dahulu via PR.
