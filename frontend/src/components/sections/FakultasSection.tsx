'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { MotionReveal } from '@/components/motion';
import { faculties } from '@/data/placeholder';

const tooltipCopy: Record<string, string> = {
  'informatika': 'Tempat teknologi bertemu adab.',
  'teknik-elektro': 'Arus yang mengalir, niat yang menyala.',
  'rekayasa-industri': 'Sistem yang efisien, hati yang tenang.',
  'ekonomi-bisnis': 'Berhitung dengan akal, bertimbang dengan iman.',
  'komunikasi-ilsos': 'Kata yang menjangkau, makna yang menyentuh.',
  'industri-kreatif': 'Karya yang lahir dari niat yang baik.',
  'ilmu-terapan': 'Praktik yang nyata, dampak yang terasa.',
};

const accentColor: Record<string, string> = {
  'informatika': '#F5C518',       // FIF — Kuning
  'teknik-elektro': '#1E3A8A',    // FTE — Biru Tua
  'rekayasa-industri': '#15803D', // FRI — Hijau Tua
  'ekonomi-bisnis': '#3B82F6',    // FEB — Biru Muda
  'komunikasi-ilsos': '#7C3AED',  // FKIS — Ungu
  'industri-kreatif': '#F97316',  // FIK — Oren
  'ilmu-terapan': '#84CC16',      // FIT — Hijau Muda
};

export default function FakultasSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeFaculty = faculties.find((f) => f.id === activeId);

  return (
    <section className="bg-ink py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <MotionReveal className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block mb-3">
            Sebaran
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Tujuh pintu,<br />satu rumah.
          </h2>
          <p className="text-neutral-400 max-w-lg">
            Setiap fakultas dengan warna dan iramanya sendiri — namun tetap dalam satu visi.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
          {/* Left — list */}
          <div className="bg-ink">
            {faculties.map((faculty) => {
              const isActive = activeId === faculty.id;
              const color = accentColor[faculty.id] || '#C8102E';
              return (
                <button
                  key={faculty.id}
                  onMouseEnter={() => setActiveId(faculty.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(isActive ? null : faculty.id)}
                  className="block w-full text-left transition-all duration-300 ease-in-out cursor-pointer"
                  style={{
                    borderBottom: '2px solid',
                    borderBottomColor: isActive ? color : 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="px-2 py-6 md:py-8 flex items-baseline gap-4 transition-all duration-300 ease-in-out">
                    <span
                      className="text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out"
                      style={{ color: isActive ? color : '#ffffff' }}
                    >
                      {faculty.shortName}
                    </span>
                    <span
                      className="text-sm transition-colors duration-300 hidden sm:inline"
                      style={{ color: isActive ? '#ffffff' : '#71717a' }}
                    >
                      {faculty.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — preview */}
          <div className="bg-ink relative min-h-[400px] lg:min-h-full overflow-hidden">
            <AnimatePresence mode="wait">
              {activeFaculty ? (
                <motion.div
                  key={activeFaculty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-center p-8 md:p-12"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-15"
                    style={{
                      background: `radial-gradient(circle at center, ${accentColor[activeFaculty.id]} 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 opacity-[0.04]">
                    <Image src="/AL-FATH.png" alt="" fill className="object-contain" />
                  </div>

                  <div className="relative z-10">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-4"
                      style={{ color: accentColor[activeFaculty.id] }}
                    >
                      {activeFaculty.shortName}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      {activeFaculty.name}
                    </h3>
                    <p className="text-base md:text-lg text-neutral-300 italic leading-relaxed max-w-md">
                      &ldquo;{tooltipCopy[activeFaculty.id] || activeFaculty.desc}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  {/* White glow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-[400px] h-[400px] rounded-full bg-white/[0.08] blur-3xl" />
                  </div>
                  <div className="relative w-full h-full max-w-lg max-h-[440px]">
                    <Image
                      src="/AL-FATH.png"
                      alt="Al-Fath"
                      fill
                      className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
