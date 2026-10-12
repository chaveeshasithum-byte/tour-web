'use client';

import React from 'react';
import Link from 'next/link';
import { HERITAGE_EXPERIENCES } from '@/data/experiences';
import { ArrowRight, Compass, MapPin, BookOpen, Clock } from 'lucide-react';

export default function ExperiencesIndexPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#141814] text-white pt-24 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-transparent to-[rgba(20,24,20,0.6)]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Cultural Pillars & Living Traditions
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
            Discover Heritage Beyond the Guidebook
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            From two-thousand-year-old rock frescoes to village hearth cooking and generational craft guilds, experience Sri Lanka through authentic human connections.
          </p>
        </div>
      </section>

      {/* 2. SIX PILLARS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="space-y-16">
          {HERITAGE_EXPERIENCES.map((exp, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#EBE5DA]/30 border border-[#DCD4C6] rounded-xs p-6 sm:p-10 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative aspect-16/10 overflow-hidden rounded-xs bg-stone-200 border border-[#DCD4C6] ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 left-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs font-mono">
                    {exp.eyebrow}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A88C5A]">
                      Heritage Pillar 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
                      {exp.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A88C5A] font-medium leading-relaxed">
                      {exp.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
                      {exp.overview}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-[#DCD4C6]/60">
                    <span className="text-[11px] uppercase tracking-wider text-[#252720] font-semibold block">
                      Featured Masterclasses:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#77756D] font-light">
                      {exp.possibleActivities.slice(0, 4).map((act, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#A88C5A] mt-0.5">•</span>
                          <span>{act.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={`/experiences/${exp.slug}`}
                      className="inline-flex items-center gap-2 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-xs transition shadow-sm"
                    >
                      <span>Explore Experience</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/plan-your-journey?experience=${exp.slug}`}
                      className="text-xs uppercase tracking-wider text-[#77756D] hover:text-[#252720] underline underline-offset-4 font-medium"
                    >
                      Add to Journey
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. TRIP PLANNER PROMPT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252720] text-[#F5F1E9] p-8 sm:p-14 rounded-xs text-center space-y-4 border border-[#3D4034]">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Crafted for Curious Minds
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white max-w-xl mx-auto">
            Integrate Authentic Cultural Encounters Into Your Itinerary
          </h3>
          <p className="text-xs sm:text-sm text-[#C5C1B6] font-light max-w-lg mx-auto leading-relaxed">
            Our private tour planner lets you select your favourite cultural traditions—whether village clay-pot cooking, ancient temple ceremonies, or wildlife lake journeys.
          </p>
          <div className="pt-2">
            <Link
              href="/plan-your-journey"
              className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-6 py-3.5 rounded-xs transition shadow-md"
            >
              <span>Design Your Heritage Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
