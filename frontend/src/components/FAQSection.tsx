'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/placeholder';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-[#6B7280] text-sm mt-2">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border-b border-[#E5E7EB] last:border-b-0`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFAFA] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#1A1A1A] pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
