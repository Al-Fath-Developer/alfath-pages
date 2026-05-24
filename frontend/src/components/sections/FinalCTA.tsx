import Link from 'next/link';

import { MotionReveal } from '@/components/motion';

export default function FinalCTA() {
  return (
    <section className="relative bg-primary py-24 md:py-36 overflow-hidden">
      {/* Oversized watermark */}
      <p
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none text-white/[0.05] font-bold"
        style={{ fontSize: 'clamp(200px, 30vw, 500px)', lineHeight: 0.8 }}
      >
        افتح
      </p>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <MotionReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
            Pintu kami<br />selalu terbuka.
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-lg mx-auto">
            Mulai dari membaca, ikut diskusi, atau sekadar menyapa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/artikel"
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-md shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
            >
              Baca Artikel
            </Link>
            <a
              href="https://instagram.com/ldkalfath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-all duration-300 text-sm tracking-wide"
            >
              Ikuti @ldkalfath
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
