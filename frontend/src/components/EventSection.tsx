'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data/placeholder';

export default function EventSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const displayEvents = showAll ? events : events.slice(0, 5);
  const slidesToShow = 3;
  const totalSlides = Math.max(1, Math.ceil(displayEvents.length / slidesToShow));

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="event" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              Event
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Event Terdekat
            </h2>
          </div>
          <a
            href="/event"
            className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
          >
            Lihat Semua →
          </a>
        </div>

        {/* Desktop - Horizontal Timeline Carousel */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white border border-[#E5E7EB] hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white text-[#6B7280] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
              aria-label="Event sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white border border-[#E5E7EB] hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white text-[#6B7280] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
              aria-label="Event berikutnya"
            >
              <ChevronRight size={20} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden mx-8 relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-[#C8102E] z-0" />

              {/* Cards */}
              <div
                className="flex transition-transform duration-500 ease-out relative z-10"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
              >
                {displayEvents.map((event) => {
                  const isPusat = event.faculty === 'Pusat';
                  return (
                    <div
                      key={event.id}
                      className={`min-w-[33.333%] px-3 group ${event.isPast ? 'grayscale opacity-60' : ''}`}
                    >
                      {/* Timeline Dot */}
                      <div className="flex justify-center mb-4">
                        <div className={`w-4 h-4 rounded-full border-2 z-10 transition-colors duration-200 ${
                          event.isPast
                            ? 'border-gray-400 bg-gray-300'
                            : 'border-[#C8102E] bg-[#C8102E] group-hover:shadow-lg group-hover:shadow-[#C8102E]/30'
                        }`} />
                      </div>

                      {/* Card */}
                      <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-[#C8102E]">
                        {/* Image Container with Overlay */}
                        <div className="relative overflow-hidden">
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="w-full aspect-video object-cover transition-all duration-300 group-hover:blur-sm"
                            loading="lazy"
                          />
                          {/* Identity Badge */}
                          <span className={`absolute top-3 left-3 z-20 text-xs font-semibold px-3 py-1 rounded-full ${
                            isPusat
                              ? 'bg-[#C8102E] text-white'
                              : 'bg-[#F5E6E8] text-[#C8102E]'
                          }`}>
                            {isPusat ? 'Pusat' : event.faculty}
                          </span>
                          {/* Past Badge */}
                          {event.isPast && (
                            <span className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">
                              Selesai
                            </span>
                          )}
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="text-center text-white px-4">
                              <p className="text-xs leading-relaxed">{event.description}</p>
                              <div className="flex items-center justify-center gap-3 mt-2 text-xs">
                                <span>🕐 {event.time}</span>
                                <span>📍 {event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          {/* Date */}
                          <span className={`text-xs font-bold ${event.isPast ? 'text-gray-400' : 'text-[#C8102E]'}`}>
                            {event.dateShort}
                          </span>

                          {/* Title */}
                          <h3 className={`font-bold text-sm mt-1 leading-tight ${event.isPast ? 'text-gray-500' : 'text-[#1A1A1A]'}`}>
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-200 focus:outline-none ${
                    i === currentIndex
                      ? 'bg-[#C8102E] w-6'
                      : 'bg-[#E5E7EB] w-2 hover:bg-[#C8102E]/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Show more toggle */}
          {events.length > 5 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#C8102E] hover:text-[#8B0000] font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
              >
                {showAll ? 'Tampilkan Lebih Sedikit' : `Lihat ${events.length - 5} Event Lainnya →`}
              </button>
            </div>
          )}
        </div>

        {/* Mobile - Vertical List */}
        <div className="md:hidden">
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#C8102E]" />

            {displayEvents.slice(0, 4).map((event) => {
              const isPusat = event.faculty === 'Pusat';
              return (
                <div key={event.id} className="relative mb-6 last:mb-0">
                  {/* Timeline dot */}
                  <div className={`absolute -left-6 top-1 w-4 h-4 rounded-full border-2 z-10 ${
                    event.isPast ? 'border-gray-400 bg-gray-300' : 'border-[#C8102E] bg-[#C8102E]'
                  }`} />

                  <div className={`flex gap-4 ${event.isPast ? 'grayscale opacity-60' : ''}`}>
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className={`absolute top-1 left-1 text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${
                        isPusat ? 'bg-[#C8102E] text-white' : 'bg-[#F5E6E8] text-[#C8102E]'
                      }`}>
                        {isPusat ? 'Pusat' : event.faculty}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className={`text-xs font-bold ${event.isPast ? 'text-gray-400' : 'text-[#C8102E]'}`}>
                        {event.dateShort}
                      </span>
                      <h3 className={`font-bold text-sm leading-tight mt-1 ${event.isPast ? 'text-gray-500' : 'text-[#1A1A1A]'}`}>
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-1">{event.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show more toggle */}
          {events.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#C8102E] hover:text-[#8B0000] font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
              >
                {showAll ? 'Tampilkan Lebih Sedikit' : `Lihat ${events.length - 4} Event Lainnya →`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
