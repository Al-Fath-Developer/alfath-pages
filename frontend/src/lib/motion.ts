/**
 * Motion design tokens & reusable variants untuk landing page LDK Al-Fath.
 *
 * Tujuan: konsistensi animasi di semua section, gampang di-tune dari satu tempat.
 * Selaras dengan token CSS di `globals.css` (--ease-out-soft, --duration-*).
 */

import type { Transition, Variants, Variant } from 'framer-motion';

// === Easing ===
// Match `--ease-out-soft` di globals.css → cubic-bezier(0.22, 1, 0.36, 1).
// Gerakan terasa "settle smoothly", cocok untuk brand kalem/dakwah.
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

// === Durations (detik) ===
// Match `--duration-*` di globals.css.
export const duration = {
  quick: 0.2,
  base: 0.4,
  slow: 0.7,
} as const;

// === Default transition ===
export const defaultTransition: Transition = {
  duration: duration.base,
  ease: easeOutSoft,
};

// === Default viewport untuk whileInView ===
// `once: true` → animasi hanya jalan sekali per element (tidak re-trigger saat scroll balik).
// `margin: -80px` → trigger sedikit lebih awal sebelum element benar-benar masuk viewport,
// supaya user merasa konten "sudah siap" saat scroll sampai.
export const defaultViewport = {
  once: true,
  margin: '-80px 0px -80px 0px',
} as const;

// === Variants ===

/**
 * Fade + slide-up halus. Use case: judul section, paragraf intro, hero text.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Fade tanpa pergerakan. Use case: image overlay, watermark, background element.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

/**
 * Slide-up tipis (12px). Use case: item-item kecil dalam stagger,
 * supaya tidak terasa terlalu "berat" saat banyak element animate bareng.
 */
export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Container yang mengorkestrasi stagger pada children-nya.
 * Pasangkan dengan `staggerItem` di setiap child.
 *
 * Catatan: container HARUS punya state `hidden` & `visible` walaupun "kosong",
 * supaya Framer Motion tahu kapan trigger children.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // jeda antar child
      delayChildren: 0.1, // tunggu sebentar sebelum child pertama
    },
  },
};

/**
 * Item dalam stagger container. Animasinya di-trigger oleh parent,
 * bukan oleh whileInView sendiri.
 */
export const staggerItem: Variants = fadeUpSmall;

/**
 * Hover & tap interaction untuk tombol/kartu interaktif.
 * Pakai sebagai prop terpisah, bukan variants.
 *
 * Contoh:
 *   <motion.button whileHover={scaleHover.hover} whileTap={scaleHover.tap}>
 */
export const scaleHover = {
  hover: { scale: 1.03 } satisfies Variant,
  tap: { scale: 0.97 } satisfies Variant,
} as const;

/**
 * Slide-down untuk mobile menu / dropdown (pasangkan dengan AnimatePresence).
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: duration.quick, ease: easeOutSoft },
  },
};
