'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from '../data/placeholder';

export default function ArtikelSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 768) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(articles.length / slidesToShow);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="artikel" className="py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              Artikel
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Artikel Terbaru
            </h2>
          </div>
          <a
            href="/artikel"
            className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
          >
            Lihat Semua →
          </a>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev Button */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#2A2A2A] hover:bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            aria-label="Artikel sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#2A2A2A] hover:bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            aria-label="Artikel berikutnya"
          >
            <ChevronRight size={20} />
          </button>

          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2"
                >
                  <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#C8102E] transition-all duration-200 flex flex-col h-full">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                    <div className="p-5 flex flex-col flex-1 gap-3">
                      <span className="inline-block bg-[#C8102E]/20 text-[#C8102E] text-xs font-semibold px-3 py-1 rounded-full w-fit">
                        {article.category}
                      </span>
                      <h3 className="font-bold text-white line-clamp-2 text-base">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex justify-between items-center pt-3 border-t border-[#3A3A3A]">
                        <span className="text-xs text-gray-500">
                          {article.date} · {article.author}
                        </span>
                        <a
                          href={`/artikel/${article.id}`}
                          className="text-[#C8102E] hover:text-[#8B0000] font-medium transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
                        >
                          Baca →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${
                  i === currentIndex ? 'bg-[#C8102E] w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
