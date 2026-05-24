'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { staggerItem } from '@/lib/motion';

type MotionStaggerItemProps = {
  children: ReactNode;
  /** Tag HTML untuk item (default: 'div'). */
  as?: 'div' | 'li' | 'article' | 'section';
  className?: string;
  /** Variants kustom (default: staggerItem). */
  variants?: Variants;
};

/**
 * Item dalam `<MotionStagger>` container. Animasi di-trigger oleh parent,
 * jadi TIDAK perlu `whileInView` di sini.
 *
 * Honor `prefers-reduced-motion`: render tanpa animasi.
 */
export default function MotionStaggerItem({
  children,
  as = 'div',
  className,
  variants = staggerItem,
}: MotionStaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
