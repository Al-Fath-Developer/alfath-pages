import { InstagramIcon, YoutubeIcon, TwitterIcon } from './FooterIcons';

const navLinks = ['Beranda', 'Tentang', 'Fakultas', 'Artikel', 'Event'];
const infoLinks = [
  { label: 'Kontak', href: '/kontak' },
  { label: 'Kebijakan Privasi', href: '/privasi' },
  { label: 'Tentang Sistem', href: '/sistem' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden pt-8">
        <span
          className="text-[150px] md:text-[250px] font-extrabold text-white opacity-[0.02] select-none"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          aria-hidden="true"
        >
          AL-FATH
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 pb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/AL-FATH-KECIL.png" alt="AL-FATH" className="h-14 w-auto mb-4" />
            <p className="text-sm text-gray-400">
              Bersama Menuju Kampus yang Islami
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram AL-FATH"
                className="text-white hover:text-[#C8102E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube AL-FATH"
                className="text-white hover:text-[#C8102E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter AL-FATH"
                className="text-white hover:text-[#C8102E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigasi */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-gray-400 hover:text-white mb-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3 - Informasi */}
          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            {infoLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-400 hover:text-white mb-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 4 - Kontak */}
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <p className="text-sm text-gray-400">
              📍 Jl. Telekomunikasi No.1, Terusan Buah Batu, Bandung 40257
            </p>
            <p className="text-sm text-gray-400 mt-2">
              📧 alfath@telkomuniversity.ac.id
            </p>
            <p className="text-sm text-gray-400 mt-2">
              🕐 Senin – Jumat, 08.00 – 17.00 WIB
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          © 2025 LDK AL-FATH Universitas Telkom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
