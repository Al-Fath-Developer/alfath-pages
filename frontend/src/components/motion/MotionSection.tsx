'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { defaultViewport, fadeUp } from '@/lib/motion';

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** ARIA label untuk section landmark. */
  'aria-label'?: string;
  /** Variants kustom (default: fadeUp). */
  variants?: Variants;
  /**
   * Mode trigger animasi:
   * - 'inView' (default): animate saat section masuk viewport
   * - 'load': animate langsung saat mount (cocok untuk hero / section pertama)
   */
  trigger?: 'inView' | 'load';
  /** Override viewport options (hanya berlaku untuk trigger='inView'). */
  viewport?: typeof defaultViewport;
};

/**
 * Full `<section>` wrapper yang animate. Pakai ini ketika seluruh section
 * memang harus jadi client component (misal hero yang animate saat mount,
 * atau section dengan interactivity penuh).
 *
 * Untuk kasus mayoritas, prefer `<MotionReveal>` di dalam server section
 * supaya section landmark tetap server-rendered (lebih ramah SEO).
 *
 * Honor `prefers-reduced-motion`: render tanpa animasi.
 */
export default function MotionSection({
  children,
  className,
  id,
  'aria-label': ariaLabel,
  variants = fadeUp,
  trigger = 'inView',
  viewport = defaultViewport,
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className={className} id={id} aria-label={ariaLabel}>
        {children}
      </section>
    );
  }

  if (trigger === 'load') {
    return (
      <motion.section
        className={className}
        id={id}
        aria-label={ariaLabel}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      className={className}
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
