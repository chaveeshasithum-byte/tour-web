'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Heart, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#141814] text-white pt-24 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-transparent to-[rgba(20,24,20,0.6)]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Our Story & Heritage Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
            Travel With a Deeper Sense of Place
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            We exist to help international travellers discover Sri Lanka through its ancient civilisations, living traditions, and extraordinary sacred landscapes.
          </p>
        </div>
      </section>

      {/* 2. OUR PHILOSOPHY & WHY HERITAGE MATTERS (TWO-COLUMN EDITORIAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Founding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720] leading-tight">
              Why Heritage Matters
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#77756D] font-light leading-relaxed">
              <p>
                Sri Lanka is often celebrated for its golden beaches and wildlife reserves. Yet the true soul of the island resides in its deep cultural geography: in the monumental brick stupas of Anuradhapura that rival the Pyramids of Giza, the hydraulic ingenuity of ancient cascade irrigation tanks, and the sacred ceremonies that have endured unbroken for two dozen centuries.
              </p>
              <p>
                At Heritage Travels, we believe travel should foster mutual respect and genuine understanding. We eschew rushed tourist itineraries in favour of unhurried journeys that allow travellers to sit quietly beneath ancient Bo trees, engage with generational master craftspeople, and appreciate how ancient architecture harmonised with the tropical landscape.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
              alt="Ancient Sri Lankan stupa and serene landscape"
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute bottom-4 left-4 bg-[#F5F1E9]/90 px-3 py-1.5 text-[11px] font-mono text-[#77756D]">
              Anuradhapura • Continuous Devotion Since 3rd Century BCE
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH TO CULTURAL TRAVEL (3-CARD GRID) */}
      <section className="bg-[#EBE5DA] py-20 border-y border-[#DCD4C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              The Heritage Travels Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720]">
              Our Approach to Cultural Travel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#252720] text-[#F5F1E9] flex items-center justify-center font-mono text-xs">
                01
              </div>
              <h3 className="text-xl font-serif font-medium text-[#252720]">
                Knowledge Over Superficial Sightseeing
              </h3>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                We work alongside certified cultural lecturers, archaeological researchers, and senior licensed chauffeur guides who understand epigraphy, art history, and ancient hydraulic engineering.
              </p>
            </div>

            <div className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#252720] text-[#F5F1E9] flex items-center justify-center font-mono text-xs">
                02
              </div>
              <h3 className="text-xl font-serif font-medium text-[#252720]">
                Personalised Travel Planning
              </h3>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                No two journeys are identical. We structure every itinerary around your individual passions—whether focused on Buddhist monastic architecture, colonial maritime forts, or traditional village gastronomy.
              </p>
            </div>

            <div className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#252720] text-[#F5F1E9] flex items-center justify-center font-mono text-xs">
                03
              </div>
              <h3 className="text-xl font-serif font-medium text-[#252720]">
                Boutique Character & Sense of Place
              </h3>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                We partner with restored Dutch merchant villas, colonial planters&apos; bungalows, and sustainable eco-lodges that reflect authentic Sri Lankan architecture and vernacular craftsmanship.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. RESPONSIBLE TOURISM & RESPECT FOR SACRED SPACES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative aspect-4/3 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85"
              alt="Galle Fort maritime ramparts and coastal preservation"
              className="w-full h-full object-cover img-zoom"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Ethical Travel Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720]">
              Respect for Communities & Sacred Spaces
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
              <p>
                Responsible travel in Sri Lanka requires deep cultural sensitivity. We brief all our guests on sacred temple etiquette—wearing modest white clothing, removing shoes, and never photographing Buddha statues with one&apos;s back turned.
              </p>
              <p>
                In rural craft villages, we reject voyeuristic &ldquo;staged tourist shows.&rdquo; Instead, we facilitate respectful masterclasses where artisans receive fair direct compensation for their time and artistic expertise, ensuring traditional crafts remain viable for future generations.
              </p>
              <p>
                We also advocate for conservation of Sri Lanka&apos;s ancient water systems and fragile archaeological stones by adhering strictly to Department of Archaeology guidelines.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252720] text-[#F5F1E9] p-10 sm:p-16 rounded-xs text-center space-y-6 border border-[#3D4034]">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Begin Your Conversation
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white max-w-xl mx-auto">
            Ready to Plan a Meaningful Heritage Journey?
          </h3>
          <p className="text-xs sm:text-sm text-[#C5C1B6] font-light max-w-md mx-auto leading-relaxed">
            Our team in Colombo is ready to listen to your travel wishes and curate an unhurried, privately guided Sri Lankan itinerary.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/plan-your-journey"
              className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-6 py-3.5 rounded-xs transition shadow-sm"
            >
              <span>Launch Tour Planner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-[#F5F1E9] hover:bg-white/10 border border-[#F5F1E9]/30 text-xs uppercase tracking-wider font-medium px-6 py-3.5 rounded-xs transition"
            >
              <span>Contact Concierge</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
