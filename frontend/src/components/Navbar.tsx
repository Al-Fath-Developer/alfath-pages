'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Tentang', 'Fakultas', 'Event', 'Artikel'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOverHero(window.scrollY < window.innerHeight - 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = isOverHero;

  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2">
            <img
              src="/AL-FATH-KECIL.png"
              alt="Logo AL-FATH"
              className={`h-10 w-auto transition-all duration-300 ${isDark ? 'invert' : ''}`}
            />
            <span className={`font-bold text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#C8102E]'}`}>
              AL-FATH
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#6B7280] hover:text-[#C8102E]'
                }`}
              >
                {link}
              </a>
            ))}
            <a
              href="/login"
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                isDark
                  ? 'border-2 border-white text-white hover:bg-white hover:text-[#C8102E]'
                  : 'bg-[#C8102E] hover:bg-[#8B0000] text-white'
              }`}
            >
              Masuk
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle navigation"
            className={`md:hidden p-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-4 ${isDark ? 'bg-[#1A0005]/90 backdrop-blur-md rounded-b-2xl px-4 pt-2 -mx-4' : ''}`}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 py-2 ${
                    isDark ? 'text-white/80 hover:text-white' : 'text-[#6B7280] hover:text-[#C8102E]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="/login"
                className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm text-center mt-2 ${
                  isDark
                    ? 'border-2 border-white text-white hover:bg-white hover:text-[#C8102E]'
                    : 'bg-[#C8102E] hover:bg-[#8B0000] text-white'
                }`}
              >
                Masuk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
