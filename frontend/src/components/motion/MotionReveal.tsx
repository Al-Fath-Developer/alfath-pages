'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { defaultViewport, fadeUp } from '@/lib/motion';

type MotionRevealProps = {
  children: ReactNode;
  /** Variants kustom (default: fadeUp). */
  variants?: Variants;
  /** Tag HTML yang dirender (default: 'div'). Pakai 'span' untuk inline. */
  as?: 'div' | 'span' | 'li' | 'article';
  className?: string;
  /**
   * Delay tambahan dalam detik (di atas variants default).
   * Berguna kalau ingin men-stagger manual antar MotionReveal.
   */
  delay?: number;
  /** Override viewport options. */
  viewport?: typeof defaultViewport;
};

/**
 * Wrapper untuk menganimasi konten saat masuk viewport (whileInView).
 * Cocok dipakai DI DALAM server component section, supaya section landmark
 * tetap server-rendered dan hanya konten yang jadi client component.
 *
 * Contoh:
 *   <section className="py-20">
 *     <MotionReveal>
 *       <h2>Tentang Al-Fath</h2>
 *       <p>...</p>
 *     </MotionReveal>
 *   </section>
 *
 * Honor `prefers-reduced-motion`: render tanpa animasi.
 */
export default function MotionReveal({
  children,
  variants = fadeUp,
  as = 'div',
  className,
  delay,
  viewport = defaultViewport,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
