'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { MotionReveal } from '@/components/motion';

const faqItems = [
  { q: 'Apa itu LDK Al-Fath?', a: 'Al-Fath adalah Unit Kegiatan Mahasiswa (UKM) Kerohanian resmi di Telkom University, sekaligus badan otonom DKM Syamsul \'Ulum, dan bagian dari FSLDK. Berdiri sejak 24 November 2013.' },
  { q: 'Saya bukan anak Tel-U, apa boleh ikut Collab atau baca Artikel?', a: 'Boleh banget. Artikel dan ruang Collab kami terbuka untuk publik. Kamu bisa apply atau mengusulkan project sendiri.' },
  { q: 'Bedanya Al-Fath sama UKM kerohanian lain di Tel-U?', a: 'Al-Fath bersifat integratif — hadir di tujuh fakultas dengan satu visi. Selain pembinaan kader, kami mengelola ruang publik yang bisa dimanfaatkan siapa saja.' },
  { q: 'Kapan pendaftaran kader baru?', a: 'Pendaftaran kader Generasi 14 direncanakan Desember 2026. Pantau Instagram kami untuk detail.' },
  { q: 'Saya tertarik kolaborasi/sponsor. Bagaimana caranya?', a: 'DM Instagram kami atau kirim email ke kontak di footer. Kami baca dan balas.' },
  { q: 'Apa itu pembinaan kader?', a: 'Proses tumbuh bersama — dari berkenalan, mengakar, hingga membagi. Detail akan ada di halaman khusus kader.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream-50 pt-20 md:pt-32 pb-40 md:pb-52">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <MotionReveal className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Pertanyaan yang<br />sering muncul.
          </h2>
          <p className="text-neutral-500 text-sm mt-3">
            Kalau jawabnya belum ada di sini, sapa kami langsung lewat Instagram.
          </p>
        </MotionReveal>

        <MotionReveal>
          <div>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b-2 border-ink/10 last:border-b-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-ink pr-4 group-hover:text-primary transition-colors duration-200">
                      {item.q}
                    </span>
                    <Plus
                      size={20}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-sm text-neutral-500 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
