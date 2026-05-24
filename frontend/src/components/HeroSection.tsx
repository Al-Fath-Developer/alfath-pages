'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { MotionStagger, MotionStaggerItem } from '@/components/motion';
import { easeOutSoft, fadeUp, scaleHover } from '@/lib/motion';

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Accent strip — bold red bar top */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-1 bg-primary" />

      {/* Oversized watermark — editorial style */}
      <motion.p
        initial={shouldReduceMotion ? { opacity: 0.04 } : { opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, ease: easeOutSoft }}
        className="absolute select-none pointer-events-none text-ink"
        style={{
          fontFamily: "var(--font-scheherazade), 'Scheherazade New', serif",
          fontSize: 'clamp(160px, 25vw, 360px)',
          lineHeight: 0.8,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        الفتح
      </motion.p>

      {/* Content */}
      <MotionStagger
        trigger="load"
        variants={heroStagger}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <MotionStaggerItem variants={fadeUp}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span aria-hidden="true" className="h-[2px] w-8 md:w-12 bg-primary" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ahlan Wa Sahlan
            </span>
            <span aria-hidden="true" className="h-[2px] w-8 md:w-12 bg-primary" />
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem variants={fadeUp}>
          <h1 className="font-bold text-ink leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}>
            Lebih Dekat,
            <br />
            <span className="text-primary">Lebih Bersahabat.</span>
          </h1>
        </MotionStaggerItem>

        <MotionStaggerItem variants={fadeUp}>
          <p className="text-neutral-500 text-lg md:text-xl mb-10 max-w-lg mx-auto">
            Rumah pembinaan mahasiswa muslim Telkom University.
            <br />
            <span className="text-sm">Terbuka untuk semua yang ingin tumbuh.</span>
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem variants={fadeUp}>
          <motion.a
            href="/tentang"
            whileHover={scaleHover.hover}
            whileTap={scaleHover.tap}
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors text-sm tracking-wide"
          >
            Kenali Al-Fath →
          </motion.a>
        </MotionStaggerItem>
      </MotionStagger>

      {/* Scroll cue */}
      <motion.a
        href="#tentang"
        aria-label="Geser ke bagian Tentang"
        className="group absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-primary transition-colors"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.2, duration: 0.5, ease: easeOutSoft }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
          Scroll
        </span>
        <motion.span
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
