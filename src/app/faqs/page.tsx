'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS } from '@/data/faqs';
import { ChevronDown, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const categories = [
    'All',
    'Planning & Customization',
    'Tours & Experiences',
    'Sacred Etiquette & Culture',
    'Practical & Transport'
  ];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 pt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HEADER */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
          Practical & Cultural Advice
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
          Clear, honest answers to help you plan your journey through Sri Lanka’s ancient kingdoms, sacred places, and cultural landscapes.
        </p>
      </div>

      {/* 2. CATEGORY TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#DCD4C6] pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-4 py-2 rounded-xs transition-colors ${
              activeCategory === cat
                ? 'bg-[#252720] text-[#F5F1E9] font-medium'
                : 'bg-[#EBE5DA]/50 text-[#77756D] hover:text-[#252720] border border-[#DCD4C6]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. ACCORDIONS */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border border-[#DCD4C6] rounded-xs overflow-hidden bg-[#F5F1E9] transition"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-[#EBE5DA]/30 hover:bg-[#EBE5DA]/60 transition cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-serif font-medium text-[#252720]">
                  {faq.question}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#77756D] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="p-5 sm:p-6 text-xs sm:text-sm text-[#77756D] font-light leading-relaxed border-t border-[#DCD4C6] bg-[#F5F1E9] animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. PLANNER & CONTACT CTA */}
      <div className="bg-[#252720] text-[#F5F1E9] p-8 sm:p-12 rounded-xs text-center space-y-4 border border-[#3D4034]">
        <h3 className="text-2xl font-serif font-normal text-white">
          Have a question not addressed here?
        </h3>
        <p className="text-xs text-[#C5C1B6] font-light max-w-md mx-auto leading-relaxed">
          Our destination team in Colombo is happy to discuss specific travel dates, pacing, or family requirements.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-xs transition shadow-sm"
          >
            <span>Ask Our Concierge Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-2 bg-transparent text-[#F5F1E9] hover:bg-white/10 border border-white/30 text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-xs transition"
          >
            <span>Launch Tour Planner</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
