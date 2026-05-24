import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/motion';

const traits = [
  { title: 'Intelek', body: 'Kompeten secara akademik. Karena ilmu adalah jalan, bukan musuh, dakwah.' },
  { title: 'Qur\'ani', body: 'Berpijak pada Al-Qur\'an. Sumber kami menimbang dan menapak.' },
  { title: 'Profesional', body: 'Beramal dengan ilmu, dan bertanggung jawab atasnya.' },
  { title: 'Kekeluargaan', body: 'Ukhuwah yang erat: yang dekat semakin akrab, yang jauh kami sapa lebih dulu.' },
  { title: 'Inklusif', body: 'Terbuka untuk semua mahasiswa muslim Tel-U — apa pun fakultasmu.' },
  { title: 'Dinamis', body: 'Adaptif, kreatif, dan selalu mencari cara yang lebih baik.' },
];

export default function TraitsSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <MotionReveal className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block mb-3">
            Karakter Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight mb-4">
            Dibangun dari<br />enam sifat.
          </h2>
          <p className="text-neutral-500 max-w-lg">
            Bukan slogan untuk dipajang. Ini cara kami berpikir, beramal, dan saling menjaga.
          </p>
        </MotionReveal>

        {/* Bento grid — gap-px for grid lines */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {traits.map((trait, i) => (
            <MotionStaggerItem key={trait.title}>
              <div className="bg-white p-8 h-full group hover:bg-cream-50 transition-all duration-300">
                <span className="text-4xl font-bold text-ink/[0.06] block mb-4 group-hover:text-primary/20 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-ink text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {trait.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {trait.body}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Stat strip */}
        <MotionReveal className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="text-sm text-neutral-500"><span className="text-ink font-bold">500+</span> kader</span>
          <span className="text-sm text-neutral-500"><span className="text-ink font-bold">7</span> fakultas</span>
          <span className="text-sm text-neutral-500"><span className="text-ink font-bold">50+</span> program tahun ini</span>
        </MotionReveal>
      </div>
    </section>
  );
}
