'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Collab', href: '/collab' },
  { label: 'Event', href: '/event' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDF8F4]/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/AL-FATH.png" alt="Logo AL-FATH" className="h-9 w-auto" />
            <span className="font-bold text-lg text-primary">AL-FATH</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-text-muted hover:text-primary py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Masuk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
