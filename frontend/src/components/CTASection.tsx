export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#C8102E]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Siap Bergabung dengan AL-FATH?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Jadilah bagian dari komunitas Islam yang kuat dan berdampak di Universitas Telkom. Pendaftaran akan segera dibuka!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/recruitment"
            className="bg-white text-[#C8102E] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#C8102E]"
          >
            Daftar Sekarang
          </a>
          <a
            href="/kontak"
            className="border-2 border-white text-white hover:bg-white hover:text-[#C8102E] font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#C8102E]"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
