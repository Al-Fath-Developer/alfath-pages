export default function TentangSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              Tentang Kami
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
              Siapa LDK AL-FATH?
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              LDK AL-FATH adalah Lembaga Dakwah Kampus yang bergerak di lingkungan Universitas Telkom. Kami hadir untuk membina mahasiswa muslim yang berakhlak, berwawasan luas, dan berdampak nyata bagi masyarakat.
            </p>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              Dengan 7 unit fakultas yang terintegrasi, kami menjalankan program kajian, sosial, dan pengembangan diri yang menyentuh seluruh lapisan civitas akademika.
            </p>
            <a
              href="/tentang"
              className="inline-block mt-6 text-[#C8102E] hover:text-[#8B0000] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
            >
              Selengkapnya →
            </a>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 - 7 Fakultas (accent red) */}
            <div className="bg-[#C8102E] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <span className="text-5xl font-extrabold">7</span>
              <span className="text-sm font-medium">Fakultas Tergabung</span>
            </div>

            {/* Card 2 - 500+ Anggota (light red) */}
            <div className="bg-[#F5E6E8] text-[#C8102E] rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <span className="text-5xl font-extrabold">500+</span>
              <span className="text-sm font-medium">Anggota Aktif</span>
            </div>

            {/* Card 3 - 50+ Program (full width) */}
            <div className="col-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <span className="text-5xl font-extrabold text-[#C8102E]">50+</span>
              <div>
                <span className="text-[#1A1A1A] font-semibold block">Program Per Tahun</span>
                <span className="text-xs text-[#6B7280]">Kajian, sosial, dan pengembangan diri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
