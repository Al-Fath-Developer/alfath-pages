import Link from 'next/link';
import { Heart, Mail } from 'lucide-react';

import { InstagramIcon, YoutubeIcon, TwitterIcon } from '@/components/FooterIcons';

const kenaliKamiLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Collab', href: '/collab' },
  { label: 'Event', href: '/event' },
];

const fakultasList = [
  { label: 'FIF', href: '/fakultas/informatika' },
  { label: 'FTE', href: '/fakultas/teknik-elektro' },
  { label: 'FRI', href: '/fakultas/rekayasa-industri' },
  { label: 'FEB', href: '/fakultas/ekonomi-bisnis' },
  { label: 'FKS', href: '/fakultas/komunikasi-ilsos' },
  { label: 'FIK', href: '/fakultas/industri-kreatif' },
  { label: 'FIT', href: '/fakultas/ilmu-terapan' },
];

/**
 * Silhouette masjid — pakai background-image dari /public/masjid.svg.
 * SVG asli sudah black fill, ditampilkan langsung sebagai background.
 * Repeat-x supaya tile horizontal memenuhi full lebar.
 */
function MasjidSilhouette() {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-[120px] md:-top-[180px] inset-x-0 h-[120px] md:h-[180px] pointer-events-none"
      style={{
        backgroundImage: 'url(/masjid.svg)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom left',
      }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-12 md:pt-16 pb-12">
      <MasjidSilhouette />

      {/* Background photo AL-FATH dengan gradient samar di kiri */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full md:w-1/2 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/AL-FATH.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            opacity: 0.06,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(26, 0, 5, 0.6) 60%, rgb(26, 0, 5) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Top: Brand + 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight leading-none">
              LDK AL-FATH
            </h2>
            <p className="text-sm text-white/70 italic mb-3">
              Lebih Dekat, Lebih Bersahabat.
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-md">
              Menjadi rumah pembinaan mahasiswa muslim Telkom University yang
              relevan, inklusif, dan terintegrasi dalam membentuk generasi yang
              beriman, berkarakter, dan berdampak.
            </p>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-3 gap-6">
            {/* Kenali Kami */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Kenali Kami</h4>
              <div className="space-y-2">
                {kenaliKamiLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fakultas */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Fakultas</h4>
              <div className="space-y-2">
                {fakultasList.map((fac) => (
                  <Link
                    key={fac.label}
                    href={fac.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {fac.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sapa Kami */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Sapa Kami</h4>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/alfathtelu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-primary transition-colors">
                    <InstagramIcon />
                  </span>
                  <span>@alfathtelu</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-primary transition-colors">
                    <YoutubeIcon />
                  </span>
                  <span>LDK Al-Fath Tel-U</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-primary transition-colors">
                    <TwitterIcon />
                  </span>
                  <span>@alfathtelu</span>
                </a>
                <a
                  href="mailto:alfath@telkomuniversity.ac.id"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-primary transition-colors">
                    <Mail size={20} />
                  </span>
                  <span>alfath@telkomuniversity.ac.id</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-white/70 mb-2">
            Rumah pembinaan mahasiswa muslim Telkom University.
          </p>
          <p className="text-sm text-white/70 mb-8">
            Terbuka untuk semua yang ingin tumbuh.
          </p>

          <p className="text-xs text-white/40 mb-6">
            Didirikan pada 24 November 2013
          </p>

          <p className="text-xs text-white/40 mb-2">
            UKM Resmi Telkom University · Bagian DKM Syamsul &apos;Ulum
          </p>
          <p className="text-xs text-white/50 inline-flex items-center gap-1.5 mb-1">
            Dibuat dengan
            <Heart size={12} className="fill-primary text-primary" />
            untuk Umat
          </p>
          <p className="text-xs text-white/30 mt-2">
            © 2026 LDK Al-Fath Telkom University.
          </p>
        </div>
      </div>
    </footer>
  );
}
