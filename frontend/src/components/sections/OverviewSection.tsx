import Link from 'next/link';

import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/motion';

const visionItems = [
  { num: '01', keyword: 'Relevan', body: 'Hadir di tantangan zaman. Berbicara dalam bahasa generasi ini.', accent: false },
  { num: '02', keyword: 'Inklusif', body: 'Tidak menyaring siapa yang boleh tumbuh bersama.', accent: true },
  { num: '03', keyword: 'Terintegrasi', body: 'Tujuh fakultas, satu napas dakwah.', accent: false },
  { num: '04', keyword: 'Berdampak', body: 'Bukan sekadar ada — tapi membekas.', accent: true },
];

export default function OverviewSection() {
  return (
    <section id="tentang" className="bg-cream-50 py-20 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Tentang */}
        <MotionReveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Tentang Al-Fath
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight mb-6">
            Tempat Bertumbuh Bersama.
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            LDK AL-FATH adalah Lembaga Dakwah Kampus yang bergerak di lingkungan
            Universitas Telkom. Kami hadir untuk membina mahasiswa muslim yang
            berakhlak, berwawasan luas, dan berdampak nyata bagi masyarakat.
          </p>
        </MotionReveal>

        {/* Visi */}
        <MotionReveal className="text-center mb-14">
          <h3 className="text-3xl md:text-5xl font-bold text-ink leading-tight mb-8">
            Visi Kami.
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-500 text-lg leading-relaxed">
              Menjadi rumah pembinaan mahasiswa muslim Telkom University yang
              relevan, inklusif, dan terintegrasi dalam membentuk generasi yang
              beriman, berkarakter, dan berdampak.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Point cards — tall & bold */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {visionItems.map((item) => (
            <MotionStaggerItem key={item.num}>
              <div className={`relative p-8 md:p-10 min-h-[280px] md:min-h-[320px] overflow-hidden group ${
                item.accent ? 'bg-primary' : 'bg-white'
              }`}>
                {/* Default state */}
                <div className={`absolute inset-0 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4 ${
                  item.accent ? 'text-white' : 'text-ink'
                }`}>
                  <span className={`text-5xl md:text-6xl font-bold block ${
                    item.accent ? 'text-white/20' : 'text-primary/20'
                  }`}>
                    {item.num}
                  </span>
                  <div>
                    <h4 className={`font-bold text-xl md:text-2xl mb-3 ${item.accent ? 'text-white' : 'text-ink'}`}>
                      {item.keyword}
                    </h4>
                    <p className={`text-sm leading-relaxed ${item.accent ? 'text-white/70' : 'text-neutral-500'}`}>
                      {item.body}
                    </p>
                  </div>
                </div>

                {/* Hover state — reverse warna */}
                <div className={`absolute inset-0 p-8 md:p-10 flex flex-col items-center justify-center text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${
                  item.accent ? 'bg-white text-ink' : 'bg-primary text-white'
                }`}>
                  <span className={`text-5xl md:text-6xl font-bold block mb-2 ${
                    item.accent ? 'text-primary/20' : 'text-white/20'
                  }`}>
                    {item.num}
                  </span>
                  <h4 className={`font-bold text-xl md:text-2xl mb-3 ${item.accent ? 'text-ink' : 'text-white'}`}>
                    {item.keyword}
                  </h4>
                  <p className={`text-sm leading-relaxed ${item.accent ? 'text-neutral-500' : 'text-white/70'}`}>
                    {item.body}
                  </p>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* CTA */}
        <MotionReveal className="text-center mt-12">
          <Link
            href="/tentang"
            className="inline-block border-2 border-primary text-primary font-bold text-sm px-8 py-3 rounded-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
          >
            Selengkapnya Tentang Kami →
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
