'use client';

import { useState } from 'react';
import { faculties } from '../data/placeholder';

export default function FakultasSection() {
  const [hoveredFaculty, setHoveredFaculty] = useState<number | null>(null);

  const centerRadius = 280;
  const centerX = 400;
  const centerY = 320;

  const facultyPositions = faculties.map((_, i) => {
    const angle = (i * 360) / faculties.length - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + Math.cos(rad) * centerRadius,
      y: centerY + Math.sin(rad) * centerRadius,
      angle,
    };
  });

  return (
    <section id="fakultas" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            Fakultas Kami
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            7 Fakultas, Satu Visi
          </h2>
        </div>

        {/* Desktop Radial Layout */}
        <div className="hidden lg:block relative h-[640px]">
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 640">
            {facultyPositions.map((pos, i) => (
              <line
                key={`line-${i}`}
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="6,6"
              />
            ))}
          </svg>

          {/* Center Logo */}
          <div className="absolute z-20" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="bg-[#C8102E] rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
              <img src="/AL-FATH-KECIL.png" alt="AL-FATH Pusat" className="w-24 h-24" />
            </div>
            <p className="text-center text-xs font-semibold text-[#C8102E] mt-2">Pusat</p>
          </div>

          {/* Faculty Nodes */}
          {faculties.map((faculty, i) => {
            const pos = facultyPositions[i];
            const isHovered = hoveredFaculty === i;
            return (
              <a
                key={faculty.id}
                href={`/fakultas/${faculty.id}`}
                className="absolute group"
                style={{
                  left: `${(pos.x / 800) * 100}%`,
                  top: `${(pos.y / 640) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredFaculty(i)}
                onMouseLeave={() => setHoveredFaculty(null)}
                aria-label={`Lihat detail ${faculty.name}`}
              >
                {/* Faculty Card */}
                <div
                  className={`relative bg-white border rounded-2xl p-4 flex flex-col items-center gap-2 transition-all duration-300 w-24 h-24 justify-center ${
                    isHovered
                      ? '-translate-y-2 shadow-xl border-[#C8102E]'
                      : 'border-[#E5E7EB] shadow-sm'
                  }`}
                  style={{
                    animation: `float 5s ease-in-out infinite`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{
                      backgroundColor: faculty.accentColor || '#F5E6E8',
                    }}
                  >
                    {faculty.emoji}
                  </div>
                  <span className="font-bold text-xs text-[#1A1A1A] text-center leading-tight">
                    {faculty.shortName}
                  </span>
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white border border-[#E5E7EB] rounded-xl shadow-xl p-4 w-56 pointer-events-auto transition-all duration-200 z-30 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{faculty.emoji}</span>
                    <span className="font-bold text-sm text-[#1A1A1A]">
                      {faculty.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{faculty.desc}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Grid Fallback */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
          {faculties.map((faculty) => (
            <a
              href={`/fakultas/${faculty.id}`}
              key={faculty.id}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg hover:border-[#C8102E] transition-all duration-200 group"
              aria-label={`Lihat detail ${faculty.name}`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{
                  backgroundColor: faculty.accentColor || '#F5E6E8',
                }}
              >
                {faculty.emoji}
              </div>
              <span className="font-bold text-sm text-[#1A1A1A] leading-tight">
                {faculty.name}
              </span>
              <p className="text-xs text-[#6B7280] line-clamp-2">{faculty.desc}</p>
              <span className="text-xs text-[#C8102E] font-medium group-hover:underline mt-auto">
                Lihat Detail →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
