'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { MotionReveal } from '@/components/motion';
import { events } from '@/data/placeholder';

export default function RuangSection() {
  const allEvents = [...events.filter((e) => !e.isPast), ...events.filter((e) => e.isPast)].slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + allEvents.length) % allEvents.length);
  };
  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % allEvents.length);
  };
  const goTo = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  };

  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + allEvents.length) % allEvents.length;
    const next = (activeIndex + 1) % allEvents.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <MotionReveal className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block mb-3">
            Ruang
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Yang bisa kamu eksplor sekarang.
          </h2>
        </MotionReveal>

        {/* Artikel + Collab */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Artikel */}
          <div className="relative bg-[#111] rounded-lg min-h-[420px] md:min-h-[500px] group overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] transition-shadow duration-500">
            <div className="absolute inset-0 flex flex-col p-8 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
              <h3 className="font-bold text-white text-2xl md:text-3xl mb-auto">Artikel</h3>
              <div className="relative w-full h-48 md:h-56 my-8">
                <Image src="/AL-FATH-KECIL.png" alt="" fill className="object-contain opacity-25" />
              </div>
              <p className="text-sm text-neutral-400 mb-6">
                Tulisan tentang iman, ilmu, dan kehidupan kampus — dari kader, untuk siapa saja.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="font-bold text-white text-2xl md:text-3xl mb-3">Artikel</h3>
              <p className="text-sm text-neutral-400 mb-6 max-w-xs">
                Tulisan tentang iman, ilmu, dan kehidupan kampus — dari kader, untuk siapa saja.
              </p>
              <Link href="/artikel" className="border border-white text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#111] transition-all duration-300">
                Baca Artikel →
              </Link>
            </div>
          </div>

          {/* Collab */}
          <div className="relative bg-[#111] rounded-lg min-h-[420px] md:min-h-[500px] group overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] transition-shadow duration-500">
            <div className="absolute inset-0 flex flex-col p-8 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
              <h3 className="font-bold text-white text-2xl md:text-3xl mb-auto">Collab</h3>
              <div className="relative w-full h-48 md:h-56 my-8">
                <Image src="/AL-FATH-KECIL.png" alt="" fill className="object-contain opacity-25" />
              </div>
              <p className="text-sm text-neutral-400 mb-6">
                Proyek kolaboratif yang bisa kamu ikuti — atau mulai sendiri.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="font-bold text-white text-2xl md:text-3xl mb-3">Collab</h3>
              <p className="text-sm text-neutral-400 mb-6 max-w-xs">
                Proyek kolaboratif yang bisa kamu ikuti — atau mulai sendiri.
              </p>
              <Link href="/collab" className="border border-white text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#111] transition-all duration-300">
                Lihat Collab →
              </Link>
            </div>
          </div>
        </div>

        {/* Event */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-white text-2xl md:text-3xl">Event</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-primary transition-colors"
                aria-label="Event sebelumnya"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-primary transition-colors"
                aria-label="Event berikutnya"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel — slide animation (desktop: 3 cards, mobile: 1 card with swipe) */}
          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 items-center">
            {visibleIndices.map((idx, pos) => {
              const event = allEvents[idx];
              const isCenter = pos === 1;
              return (
                <AnimatePresence key={pos} mode="popLayout" initial={false} custom={direction}>
                  <motion.div
                    key={idx}
                    custom={direction}
                    initial={{ x: direction * 60, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.96,
                    }}
                    exit={{ x: -direction * 60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative bg-[#111] rounded-lg overflow-hidden group ${
                      isCenter
                        ? 'min-h-[560px] shadow-[0_0_50px_rgba(200,16,46,0.25)]'
                        : 'min-h-[480px]'
                    }`}
                  >
                    {/* Default state */}
                    <div className="absolute inset-0 flex flex-col transition-all duration-500 group-hover:opacity-0">
                      <div className="flex justify-between items-center p-4">
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                          {event.faculty}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${
                          event.isPast ? 'bg-neutral-700 text-neutral-300' : 'bg-primary/20 text-primary'
                        }`}>
                          {event.isPast ? 'Selesai' : 'Terdekat'}
                        </span>
                      </div>
                      <div className="relative flex-1 mx-4 mt-4 mb-6 overflow-hidden">
                        <Image src="/AL-FATH-KECIL.png" alt="" fill className="object-contain opacity-20" />
                      </div>
                      <div className="px-5 pb-7">
                        <span className="text-xs font-bold text-primary block mb-1">{event.dateShort}</span>
                        <h4 className="font-bold text-white text-base mb-2 line-clamp-2">{event.title}</h4>
                        <p className="text-xs text-neutral-500 line-clamp-2 mb-2">{event.description}</p>
                        <p className="text-[11px] text-neutral-600">{event.time} · {event.location}</p>
                      </div>
                    </div>
                    {/* Hover state */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0">
                        <Image src="/AL-FATH-KECIL.png" alt="" fill className="object-contain opacity-10 blur-sm" />
                        <div className="absolute inset-0 bg-[#111]/85" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs text-neutral-400 mb-1">{event.dateShort} · {event.time}</p>
                        <p className="text-xs text-neutral-500 mb-4">{event.location}</p>
                        <h4 className="font-bold text-white text-lg mb-2">{event.title}</h4>
                        <p className="text-xs text-neutral-400 mb-4 max-w-xs mx-auto">{event.description}</p>
                        <div className="flex items-center justify-center gap-2 mb-5">
                          <span className="text-[10px] font-bold text-neutral-400 uppercase">{event.faculty}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${
                            event.isPast ? 'bg-neutral-700 text-neutral-300' : 'bg-primary/20 text-primary'
                          }`}>
                            {event.isPast ? 'Selesai' : 'Terdekat'}
                          </span>
                        </div>
                        <Link href="/event" className="border border-white text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#111] transition-all duration-300 inline-block">
                          Lihat Detail →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Mobile — single card with swipe */}
          <div className="md:hidden touch-pan-y">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ x: direction * 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 80, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) goNext();
                  else if (info.offset.x > 60) goPrev();
                }}
                className="relative bg-[#111] rounded-lg overflow-hidden min-h-[480px] shadow-[0_0_30px_rgba(200,16,46,0.2)] cursor-grab active:cursor-grabbing"
              >
                {(() => {
                  const event = allEvents[activeIndex];
                  return (
                    <div className="flex flex-col h-full min-h-[480px]">
                      <div className="flex justify-between items-center p-4">
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                          {event.faculty}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${
                          event.isPast ? 'bg-neutral-700 text-neutral-300' : 'bg-primary/20 text-primary'
                        }`}>
                          {event.isPast ? 'Selesai' : 'Terdekat'}
                        </span>
                      </div>
                      <div className="relative flex-1 mx-4 mt-2 mb-6 overflow-hidden min-h-[180px]">
                        <Image src="/AL-FATH-KECIL.png" alt="" fill className="object-contain opacity-20 pointer-events-none" />
                      </div>
                      <div className="px-5 pb-7">
                        <span className="text-xs font-bold text-primary block mb-1">{event.dateShort}</span>
                        <h4 className="font-bold text-white text-base mb-2">{event.title}</h4>
                        <p className="text-xs text-neutral-500 mb-2">{event.description}</p>
                        <p className="text-[11px] text-neutral-600">{event.time} · {event.location}</p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
            <p className="text-[10px] text-neutral-600 uppercase tracking-wider text-center mt-4">
              Geser untuk melihat event lain
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {allEvents.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 transition-all duration-200 ${
                  i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-white/20'
                }`}
                aria-label={`Event ${i + 1}`}
              />
            ))}
          </div>

          {/* Lihat Semua */}
          <div className="flex justify-center mt-10">
            <Link
              href="/event"
              className="border-2 border-white text-white font-bold text-base px-10 py-4 rounded-lg hover:bg-white hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300"
            >
              Lihat Semua Event →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
