'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const calligraphyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!calligraphyRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 5;
      calligraphyRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#1A0005' }}
    >
      {/* ── LAYER 1: Noise texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      {/* ── LAYER 2: Radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(139,0,0,0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── LAYER 3: Calligraphy — parallax background ── */}
      {/* Desktop: full size right side */}
      <div
        ref={calligraphyRef}
        className="absolute inset-0 hidden md:flex items-center justify-end pointer-events-none select-none transition-transform duration-75 ease-out"
        aria-hidden="true"
        style={{ willChange: 'transform' }}
      >
        {/* Faint ghost layer — furthest back */}
        <p
          style={{
            fontFamily: "'Scheherazade New', 'Amiri', serif",
            fontSize: 'clamp(280px, 40vw, 560px)',
            lineHeight: 0.85,
            color: '#C8102E',
            opacity: 0.02,
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          الفتح
        </p>

        {/* Mid layer — slightly more visible */}
        <p
          style={{
            fontFamily: "'Scheherazade New', 'Amiri', serif",
            fontSize: 'clamp(260px, 37vw, 520px)',
            lineHeight: 0.85,
            color: '#C8102E',
            opacity: 0.04,
            position: 'absolute',
            right: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          الفتح
        </p>

        {/* Front calligraphy layer — most visible */}
        <p
          style={{
            fontFamily: "'Scheherazade New', 'Amiri', serif",
            fontSize: 'clamp(240px, 34vw, 480px)',
            lineHeight: 0.85,
            color: '#C8102E',
            opacity: 0.08,
            position: 'absolute',
            right: '0%',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          الفتح
        </p>
      </div>

      {/* Mobile: small calligraphy at bottom-right */}
      <div
        className="absolute bottom-4 right-4 md:hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <p
          style={{
            fontFamily: "'Scheherazade New', 'Amiri', serif",
            fontSize: 'clamp(60px, 18vw, 100px)',
            lineHeight: 0.85,
            color: '#C8102E',
            opacity: 0.08,
            whiteSpace: 'nowrap',
          }}
        >
          الفتح
        </p>
      </div>

      {/* ── LAYER 4: Foreground content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Red accent line */}
          <div
            className="animate-fade-up w-12 h-[3px] bg-[#C8102E] rounded-full mb-6"
            style={{ animationDelay: '0ms' }}
          />

          {/* Heading */}
          <h1
            className="animate-fade-up font-extrabold leading-[1.05] tracking-tight text-white mb-6"
            style={{
              animationDelay: '150ms',
              fontSize: 'clamp(42px, 6vw, 80px)',
            }}
          >
            Bersama Membangun<br />
            <span
              style={{
                color: '#FF4D6D',
                textShadow: '0 0 40px rgba(255,77,109,0.4)',
              }}
            >
              Kampus yang Islami
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up text-lg leading-relaxed mb-10"
            style={{
              animationDelay: '300ms',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '480px',
            }}
          >
            LDK AL-FATH hadir untuk membangun komunitas Islam yang kuat,
            inklusif, dan berdampak di seluruh lingkungan Universitas Telkom
            melalui pembinaan kader dan syiar Islam.
          </p>

          {/* Single CTA */}
          <div className="animate-fade-up" style={{ animationDelay: '450ms' }}>
            <a
              href="#fakultas"
              className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A0005]"
              style={{
                background: '#C8102E',
                color: '#ffffff',
                boxShadow: '0 0 32px rgba(200,16,46,0.5)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#E01535';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(200,16,46,0.7)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#C8102E';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(200,16,46,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Jelajahi Fakultas
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ── LAYER 5: Bottom fade to next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
        }}
        aria-hidden="true"
      />

      {/* ── LAYER 6: Bismillah top-right watermark ── */}
      <p
        className="absolute top-8 right-8 text-sm select-none pointer-events-none"
        style={{
          fontFamily: "'Scheherazade New', serif",
          color: 'rgba(200,16,46,0.3)',
          letterSpacing: '0.1em',
        }}
        aria-hidden="true"
      >
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </p>
    </section>
  );
}
