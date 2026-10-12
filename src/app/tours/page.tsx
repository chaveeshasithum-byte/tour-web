'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CURATED_TOURS } from '@/data/tours';
import { Search, MapPin, Clock, ArrowRight, RotateCcw } from 'lucide-react';

export default function ToursIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const durationOptions = [
    'All',
    'Short Escapes (3–5 Days)',
    'Classic Journeys (6–9 Days)',
    'Grand Expeditions (10+ Days)',
  ];

  const categoryOptions = [
    'All',
    'Signature Journeys',
    'Short Heritage Escapes',
    'Private Cultural Tours',
    'Grand Expeditions',
  ];

  const filteredTours = useMemo(() => {
    return CURATED_TOURS.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destinationsCovered.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesDuration = true;
      if (selectedDuration === 'Short Escapes (3–5 Days)') {
        matchesDuration = tour.durationDays <= 5;
      } else if (selectedDuration === 'Classic Journeys (6–9 Days)') {
        matchesDuration = tour.durationDays >= 6 && tour.durationDays <= 9;
      } else if (selectedDuration === 'Grand Expeditions (10+ Days)') {
        matchesDuration = tour.durationDays >= 10;
      }

      const matchesCategory =
        selectedCategory === 'All' || tour.category === selectedCategory;

      return matchesSearch && matchesDuration && matchesCategory;
    });
  }, [searchQuery, selectedDuration, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedDuration('All');
    setSelectedCategory('All');
  };

  const hasActiveFilters =
    searchQuery !== '' || selectedDuration !== 'All' || selectedCategory !== 'All';

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#141814] text-white pt-24 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-transparent to-[rgba(20,24,20,0.6)]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Curated Private Journeys
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
            Journeys Designed Around Discovery
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Explore thoughtfully structured journeys through Sri Lanka’s ancient cities, sacred places, historic architecture, and living traditions.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE5DA]/70 border border-[#DCD4C6] rounded-xs p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77756D]" />
              <input
                type="text"
                placeholder="Search tours by title, destination, or theme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#252720] placeholder-[#77756D] focus:outline-none focus:ring-1 focus:ring-[#6C7357]"
              />
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#6C7357] hover:text-[#4D533B] underline underline-offset-4"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#DCD4C6]/60">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#77756D] font-semibold block">
                Duration:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {durationOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedDuration(opt)}
                    className={`text-xs px-3 py-1.5 rounded-xs transition-colors ${
                      selectedDuration === opt
                        ? 'bg-[#252720] text-[#F5F1E9] font-medium'
                        : 'bg-[#F5F1E9] text-[#77756D] hover:text-[#252720] border border-[#DCD4C6]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#77756D] font-semibold block">
                Tour Style:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categoryOptions.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-xs transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#6C7357] text-white font-medium'
                        : 'bg-[#F5F1E9] text-[#77756D] hover:text-[#252720] border border-[#DCD4C6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TOURS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 border-b border-[#DCD4C6]">
          <p className="text-xs text-[#77756D] font-mono">
            Showing {filteredTours.length} Curated Itineraries
          </p>
        </div>

        {filteredTours.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <h3 className="text-2xl font-serif text-[#252720]">No tours found</h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              We couldn’t find an itinerary matching your current filters. You can customize your own journey using our Tour Planner!
            </p>
            <Link
              href="/plan-your-journey"
              className="inline-block bg-[#252720] text-[#F5F1E9] text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs mt-2"
            >
              Launch Custom Tour Planner
            </Link>
          </div>
        ) : (
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 right-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase font-mono px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    {tour.durationText}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#F5F1E9]/90 text-[#252720] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    {tour.pace} Pace
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                      {tour.title}
                    </h2>
                    <p className="text-xs text-[#A88C5A] font-medium leading-tight">
                      {tour.subtitle}
                    </p>
                    <p className="text-xs text-[#77756D] font-light leading-relaxed line-clamp-3">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#DCD4C6]/60">
                    <div className="flex items-start gap-1.5 text-[11px] text-[#77756D]">
                      <MapPin className="w-3.5 h-3.5 text-[#A88C5A] shrink-0 mt-0.5" />
                      <span className="line-clamp-1 font-light">
                        {tour.destinationsCovered.join(' • ')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-[#77756D] italic">
                        Request personalised quote
                      </span>
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] transition"
                      >
                        <span>Discover Tour</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* 4. CUSTOM TRIP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252720] text-[#F5F1E9] p-8 sm:p-14 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3D4034]">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A88C5A] font-semibold block">
              Prefer a Completely Bespoke Itinerary?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              Every Journey Can Be Shaped Around You
            </h3>
            <p className="text-xs sm:text-sm text-[#C5C1B6] font-light leading-relaxed">
              Tell us your travel dates, group size, and preferred pace. We will tailor every stop, private driver, and boutique hotel to your wishes.
            </p>
          </div>
          <Link
            href="/plan-your-journey"
            className="shrink-0 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-6 py-3.5 rounded-xs transition shadow-sm"
          >
            <span>Launch Tour Planner</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
