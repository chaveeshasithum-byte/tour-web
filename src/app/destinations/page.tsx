'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { Search, X, ArrowRight, MapPin, Clock, Filter, RotateCcw } from 'lucide-react';

export default function DestinationsIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'editorial' | 'name'>('editorial');

  const regions = [
    'All',
    'Cultural Triangle',
    'Hill Country',
    'Southern',
    'Northern',
    'North Central',
    'North Western'
  ];

  const categories = [
    'All',
    'Ancient Kingdoms',
    'UNESCO World Heritage Sites',
    'Sacred Architecture',
    'Colonial Heritage',
    'Traditional Culture',
    'Historic Cities',
    'Cultural Landscapes',
    'Lesser-Known Heritage'
  ];

  // Filtering and Sorting
  const filteredDestinations = useMemo(() => {
    let result = HERITAGE_DESTINATIONS.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.sinhalaName && d.sinhalaName.includes(searchQuery));

      const matchesRegion =
        selectedRegion === 'All' || d.region === selectedRegion;

      const matchesCategory =
        selectedCategory === 'All' ||
        d.categories.includes(selectedCategory as any);

      return matchesSearch && matchesRegion && matchesCategory;
    });

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedRegion, selectedCategory, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSortBy('editorial');
  };

  const hasActiveFilters =
    searchQuery !== '' || selectedRegion !== 'All' || selectedCategory !== 'All';

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#141814] text-white pt-24 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-transparent to-[rgba(20,24,20,0.6)]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Archaeological & Sacred Map
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
            Places That Tell Our Story
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Explore the cities, landscapes, sacred spaces and architectural treasures that reveal Sri Lanka’s rich cultural heritage.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE5DA]/70 border border-[#DCD4C6] rounded-xs p-6 sm:p-8 space-y-6">
          
          {/* Search bar & Sorting */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77756D]" />
              <input
                type="text"
                placeholder="Search by destination name, keyword, or site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#252720] placeholder-[#77756D] focus:outline-none focus:ring-1 focus:ring-[#6C7357]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77756D] hover:text-[#252720]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <label htmlFor="sortSelect" className="text-[11px] uppercase tracking-wider text-[#77756D] font-medium shrink-0">
                Sort By:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F5F1E9] border border-[#DCD4C6] text-xs text-[#252720] rounded-xs px-3 py-2 focus:outline-none"
              >
                <option value="editorial">Editorial Curation</option>
                <option value="name">Alphabetical (A–Z)</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-[#6C7357] hover:text-[#4D533B] underline underline-offset-4 ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>

          {/* Region Tabs */}
          <div className="space-y-2 border-t border-[#DCD4C6]/60 pt-4">
            <span className="text-[10px] uppercase tracking-widest text-[#77756D] font-semibold block">
              Filter By Region:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`text-xs px-3.5 py-1.5 rounded-xs transition-colors ${
                    selectedRegion === region
                      ? 'bg-[#252720] text-[#F5F1E9] font-medium'
                      : 'bg-[#F5F1E9] text-[#77756D] hover:text-[#252720] border border-[#DCD4C6]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-2 border-t border-[#DCD4C6]/60 pt-4">
            <span className="text-[10px] uppercase tracking-widest text-[#77756D] font-semibold block">
              Filter By Heritage Category:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
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
      </section>

      {/* 3. DESTINATIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Count indicator */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DCD4C6]">
          <p className="text-xs text-[#77756D] font-mono">
            Showing {filteredDestinations.length} of {HERITAGE_DESTINATIONS.length} Heritage Destinations
          </p>
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <h3 className="text-2xl font-serif text-[#252720]">No destinations found</h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              We couldn&apos;t find any heritage destinations matching your search criteria. Try adjusting your filters or search keywords.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 bg-[#252720] text-[#F5F1E9] text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs mt-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 left-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    {dest.region}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#F5F1E9]/90 text-[#252720] text-[10px] font-mono px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    {dest.suggestedDuration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-2xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                        {dest.name}
                      </h2>
                      {dest.sinhalaName && (
                        <span className="text-xs font-serif text-[#77756D]">
                          {dest.sinhalaName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#A88C5A] font-medium leading-tight">
                      {dest.tagline}
                    </p>
                    <p className="text-xs text-[#77756D] font-light leading-relaxed line-clamp-3">
                      {dest.subtitle}
                    </p>

                    {/* Categories Pill List */}
                    <div className="pt-2 flex flex-wrap gap-1">
                      {dest.categories.map((c, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#EBE5DA] text-[#6C7357] px-2 py-0.5 rounded-xs font-mono"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#DCD4C6]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#77756D] font-light">
                      {dest.keyPlaces.length} Key Sites
                    </span>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] transition"
                    >
                      <span>View Destination</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* 4. PLANNER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE5DA] border border-[#DCD4C6] p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-serif text-[#252720]">
              Unsure which ancient sites to connect?
            </h3>
            <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
              Use our interactive Custom Tour Planner to select your preferred regions, and our specialists will formulate an optimal, unhurried route for you.
            </p>
          </div>
          <Link
            href="/plan-your-journey"
            className="shrink-0 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-[0.18em] font-medium px-6 py-3.5 rounded-xs transition shadow-sm"
          >
            <span>Launch Tour Planner</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
