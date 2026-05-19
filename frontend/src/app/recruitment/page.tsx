import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RecruitmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center pt-16">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center py-24">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="w-16 h-16 bg-[#F5E6E8] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📋</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
              Pendaftaran akan Segera Dibuka
            </h1>
            <p className="text-[#6B7280] text-lg mb-8">
              Open recruitment LDK AL-FATH untuk periode selanjutnya akan segera dibuka. 
              Siapkan diri kamu dan nantikan informasi lebih lanjut melalui media sosial kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-[#C8102E] hover:bg-[#8B0000] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
              >
                Kembali ke Beranda
              </Link>
              <Link
                href="/kontak"
                className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
