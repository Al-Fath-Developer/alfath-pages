'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { defaultViewport, staggerContainer } from '@/lib/motion';

type MotionStaggerProps = {
  children: ReactNode;
  /** Tag HTML root container (default: 'div'). Pakai 'ul' untuk list. */
  as?: 'div' | 'ul' | 'ol' | 'section';
  className?: string;
  /** Variants kustom untuk container (default: staggerContainer). */
  variants?: Variants;
  /**
   * Mode trigger animasi:
   * - 'inView' (default): animate saat container masuk viewport
   * - 'load': animate langsung saat mount (cocok untuk hero / section pertama
   *   yang dilihat user begitu landing).
   */
  trigger?: 'inView' | 'load';
  /** Override viewport options (hanya berlaku untuk trigger='inView'). */
  viewport?: typeof defaultViewport;
};

/**
 * Container yang men-stagger animasi children. Pasangkan dengan
 * `<MotionStaggerItem>` di setiap child.
 *
 * Default-nya animate saat masuk viewport. Untuk hero / section pertama,
 * pakai `trigger="load"` supaya animate langsung saat mount.
 *
 * Contoh inView (cards reveal saat scroll):
 *   <MotionStagger as="ul" className="grid grid-cols-3 gap-4">
 *     {events.map(e => (
 *       <MotionStaggerItem key={e.id} as="li">
 *         <EventCard event={e} />
 *       </MotionStaggerItem>
 *     ))}
 *   </MotionStagger>
 *
 * Contoh load (hero entrance):
 *   <MotionStagger trigger="load" className="text-center">
 *     <MotionStaggerItem><h1>...</h1></MotionStaggerItem>
 *     <MotionStaggerItem><p>...</p></MotionStaggerItem>
 *   </MotionStagger>
 *
 * Honor `prefers-reduced-motion`: render tanpa animasi.
 */
export default function MotionStagger({
  children,
  as = 'div',
  className,
  variants = staggerContainer,
  trigger = 'inView',
  viewport = defaultViewport,
}: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  if (trigger === 'load') {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
