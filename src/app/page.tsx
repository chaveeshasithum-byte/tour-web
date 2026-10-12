'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { HERITAGE_EXPERIENCES } from '@/data/experiences';
import { CURATED_TOURS } from '@/data/tours';
import { JOURNAL_ARTICLES } from '@/data/journal';
import { Lightbox } from '@/components/ui/Lightbox';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Compass, 
  BookOpen, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Gallery items for Section 8 (A Glimpse of Sri Lanka)
  const galleryItems = [
    {
      url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85',
      caption: 'The monolithic 5th-century granite citadel of Sigiriya emerging through early morning mist.',
      alt: 'Sigiriya Rock Fortress'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=85',
      caption: 'Gleaming white hemispherical stupa of Ruwanwelisaya in ancient Anuradhapura, sacred for over two millennia.',
      alt: 'Anuradhapura White Stupa'
    },
    {
      url: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1600&q=85',
      caption: 'Colossal rock-cut granite Buddha sculptures of Gal Vihara in the medieval royal capital of Polonnaruwa.',
      alt: 'Gal Vihara Rock Sculpture Polonnaruwa'
    },
    {
      url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85',
      caption: '17th-century Dutch colonial ramparts and the white Point Utrecht lighthouse of Galle Fort facing the Indian Ocean.',
      alt: 'Galle Fort Ramparts and Lighthouse'
    },
    {
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
      caption: 'Golden-roofed Temple of the Sacred Tooth Relic beside Kandy Lake in the mist-shrouded central highlands.',
      alt: 'Temple of the Tooth Kandy'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      caption: 'Ancient water lily-strewn village wewa (irrigation lake) reflecting tropical skies at dawn.',
      alt: 'Ancient Wewa Irrigation Lake'
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Curated destinations for homepage Section 3
  const curatedDestinations = HERITAGE_DESTINATIONS.slice(0, 8);
  const featuredTours = CURATED_TOURS.slice(0, 5);
  const featuredArticles = JOURNAL_ARTICLES.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* SECTION 1: CINEMATIC FULL-SCREEN HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#141814] text-white">
        {/* Cinematic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2400&q=85')`
          }}
        >
          {/* Subtle dark overlay tuned to maintain photographic detail */}
          <div className="absolute inset-0 bg-[rgba(20,24,20,0.36)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,24,20,0.85)] via-transparent to-[rgba(20,24,20,0.4)]" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center space-y-8 animate-fadeIn">
          
          {/* Eyebrow */}
          <div className="inline-block">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-sans text-stone-200 font-medium px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-xs">
              A Journey Through Time
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Discover the Soul of Sri Lanka
          </h1>

          {/* Supporting line (refined italic serif) */}
          <p className="text-lg sm:text-2xl font-serif italic text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Ancient kingdoms. Living traditions. Journeys beyond the ordinary.
          </p>

          {/* Minimal CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-xs transition-all shadow-md"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/plan-your-journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white/10 border border-white/40 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-xs backdrop-blur-xs transition-all"
            >
              <span>Create Your Journey</span>
            </Link>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/70 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.2em]">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION TO HERITAGE TRAVELS (EDITORIAL TWO-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large photograph */}
          <div className="lg:col-span-6 relative aspect-4/5 overflow-hidden rounded-xs border border-[#DCD4C6] bg-[#EBE5DA] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
              alt="Sri Lankan heritage architecture and serene stone sanctuary"
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute bottom-4 left-4 bg-[#F5F1E9]/90 backdrop-blur-xs px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#77756D] font-medium">
              Senkadagala Realm • Central Highlands
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              About Heritage Travels
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720] leading-[1.15]">
              More Than a Destination. <br />
              <span className="italic font-light">A Story Waiting to Be Discovered.</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#77756D] font-light leading-relaxed">
              <p>
                Travel through the stories, places, and traditions that have shaped Sri Lanka for over three thousand years. We create thoughtful, private journeys for travellers who want to truly understand a destination, not simply pass through it.
              </p>
              <p>
                From monumental brick stupas engineered before the fall of Rome to living crafts passed through artisan family charters, our bespoke itineraries reveal the island’s authentic cultural depth with certified archaeologist lecturers and dedicated chauffeur guides.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#252720] hover:text-[#6C7357] border-b border-[#252720] pb-1 transition-colors"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: DISCOVER SRI LANKA (EDITORIAL ASYMMETRIC GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD4C6] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Curated Destinations
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
              Discover the Island’s Heritage
            </h2>
            <p className="text-sm text-[#77756D] font-light leading-relaxed">
              Explore extraordinary places shaped by centuries of history, culture, and tradition.
            </p>
          </div>
          <Link
            href="/destinations"
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#252720] hover:text-[#6C7357] flex items-center gap-1.5 shrink-0"
          >
            <span>All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {curatedDestinations.map((dest, index) => {
            // Apply subtle asymmetric span for visual editorial balance
            const isFeatured = index === 0 || index === 5;

            return (
              <div 
                key={dest.id}
                className={`group flex flex-col justify-between bg-[#EBE5DA]/50 border border-[#DCD4C6] rounded-xs overflow-hidden transition hover:shadow-lg ${
                  isFeatured ? 'md:col-span-2' : 'col-span-1'
                }`}
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
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                        {dest.name}
                      </h3>
                      {dest.sinhalaName && (
                        <span className="text-xs font-serif text-[#77756D]">
                          {dest.sinhalaName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#77756D] font-light line-clamp-2 leading-relaxed">
                      {dest.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCD4C6]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#A88C5A] font-medium tracking-wide">
                      {dest.categories[0]}
                    </span>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] flex items-center gap-1 transition"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: SIGNATURE HERITAGE EXPERIENCES */}
      <section className="bg-[#EBE5DA] py-24 border-y border-[#DCD4C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Living Culture & Sacred Arts
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
              Experience the Stories Behind the Places
            </h2>
            <p className="text-sm text-[#77756D] font-light leading-relaxed">
              Immerse yourself in authentic encounters that illuminate Sri Lanka’s history beyond ordinary guidebooks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HERITAGE_EXPERIENCES.map((exp) => (
              <div 
                key={exp.id}
                className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 left-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs font-mono">
                    {exp.eyebrow}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#77756D] font-light leading-relaxed line-clamp-3">
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCD4C6]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#77756D] font-light">
                      {exp.possibleActivities.length} Unique Masterclasses
                    </span>
                    <Link
                      href={`/experiences/${exp.slug}`}
                      className="text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] flex items-center gap-1 transition"
                    >
                      <span>Discover</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: FEATURED JOURNEYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD4C6] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Curated Private Itineraries
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
              Journeys, Thoughtfully Curated
            </h2>
            <p className="text-sm text-[#77756D] font-light leading-relaxed">
              Carefully structured routes combining ancient kingdoms, sacred mountain temples, and coastal maritime forts.
            </p>
          </div>
          <Link
            href="/tours"
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#252720] hover:text-[#6C7357] flex items-center gap-1.5 shrink-0"
          >
            <span>Browse All Tours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
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
                <div className="absolute top-3 right-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs font-mono">
                  {tour.durationText}
                </div>
                <div className="absolute bottom-3 left-3 bg-[#F5F1E9]/90 text-[#252720] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs backdrop-blur-xs font-semibold">
                  {tour.pace} Pace
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#A88C5A] font-medium">
                    {tour.subtitle}
                  </p>
                  <p className="text-xs text-[#77756D] font-light leading-relaxed line-clamp-2">
                    {tour.overview}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#DCD4C6]/60">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#77756D]">
                    <MapPin className="w-3 h-3 text-[#A88C5A] shrink-0" />
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
                      <span>Discover</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: AN EDITORIAL HERITAGE STORY (FULL-WIDTH ATMOSPHERIC) */}
      <section className="relative py-28 sm:py-36 bg-[#1D211C] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141814] via-[#141814]/75 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            The Living Chronicles
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5F1E9] leading-tight">
            Every Stone Holds a Story.
          </h2>
          <p className="text-base sm:text-lg font-light text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Discover the connections between Sri Lanka’s ancient cities, sacred spaces, cultural traditions, and the communities that keep its heritage alive.
          </p>
          <div className="pt-4">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 rounded-xs transition shadow-md"
            >
              <span>Explore the Heritage Journal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY TRAVEL WITH HERITAGE TRAVELS? (EDITORIAL 4-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720]">
            Why Travel With Heritage Travels?
          </h2>
          <p className="text-sm text-[#77756D] font-light leading-relaxed">
            We focus on thoughtful execution, cultural authenticity, and respectful hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-3">
            <span className="text-xs font-mono text-[#A88C5A] font-semibold">01</span>
            <h3 className="text-lg font-serif font-medium text-[#252720]">
              Thoughtfully Planned Journeys
            </h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              Every route is structured with realistic driving times and unhurried stops, allowing you to immerse yourself deeply in each location.
            </p>
          </div>

          <div className="p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-3">
            <span className="text-xs font-mono text-[#A88C5A] font-semibold">02</span>
            <h3 className="text-lg font-serif font-medium text-[#252720]">
              Cultural Depth & Local Insight
            </h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              Travel alongside certified archaeological specialists and generational chauffeur guides who share fact-based historical stories.
            </p>
          </div>

          <div className="p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-3">
            <span className="text-xs font-mono text-[#A88C5A] font-semibold">03</span>
            <h3 className="text-lg font-serif font-medium text-[#252720]">
              Private and Flexible Travel
            </h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              Enjoy complete independence in a dedicated private vehicle. Pause whenever an ancient roadside temple or scenic viewpoint calls.
            </p>
          </div>

          <div className="p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-3">
            <span className="text-xs font-mono text-[#A88C5A] font-semibold">04</span>
            <h3 className="text-lg font-serif font-medium text-[#252720]">
              Meaningful Heritage Experiences
            </h3>
            <p className="text-xs text-[#77756D] font-light leading-relaxed">
              From village clay-pot culinary traditions to master craft workshops, our encounters respect community integrity and ancient sanctuaries.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 8: A GLIMPSE OF SRI LANKA (IMMERSIVE PHOTO GALLERY & LIGHTBOX) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCD4C6] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Visual Archives
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720]">
              A Glimpse of Sri Lanka
            </h2>
          </div>
          <p className="text-xs text-[#77756D] font-light max-w-xs sm:text-right">
            Click any photograph to open the full-screen interactive lightbox.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-4/3 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200 cursor-pointer shadow-xs"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/75 to-transparent text-white text-[11px] font-light opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: REFINED BRAND STATEMENT & PHILOSOPHY */}
      <section className="bg-[#EBE5DA] py-20 border-y border-[#DCD4C6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Our Promise to You
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#252720] leading-snug">
            &ldquo;Thoughtfully planned journeys, shaped around your interests, guided by local knowledge, and grounded in respect for Sri Lanka’s ancient sacred heritage.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.2em] text-[#77756D] font-medium">
            Heritage Travels • Private Cultural Journeys Colombo
          </p>
        </div>
      </section>

      {/* SECTION 10: TRAVEL JOURNAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD4C6] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              The Heritage Journal
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
              Stories from the Island
            </h2>
            <p className="text-sm text-[#77756D] font-light leading-relaxed">
              In-depth essays, architectural notes, and thoughtful guides written by our destination specialists.
            </p>
          </div>
          <Link
            href="/journal"
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#252720] hover:text-[#6C7357] flex items-center gap-1.5 shrink-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs backdrop-blur-xs font-mono">
                  {article.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#77756D] font-mono">
                    <Clock className="w-3 h-3 text-[#A88C5A]" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#77756D] font-light line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCD4C6]/60">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-[11px] uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] flex items-center gap-1 transition"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 11: FINAL ENQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252720] text-[#F5F1E9] rounded-xs p-10 sm:p-16 lg:p-20 text-center space-y-6 relative overflow-hidden border border-[#3D4034]">
          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Start Planning Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Your Journey Begins With a Story.
            </h2>
            <p className="text-sm sm:text-base text-[#C5C1B6] font-light leading-relaxed">
              Tell us what draws you to Sri Lanka. Together, we can shape a private journey around the places, traditions, and experiences that matter to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/plan-your-journey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-xs transition shadow-md"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#F5F1E9] hover:bg-white/10 border border-[#F5F1E9]/30 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-xs transition"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
      />

    </div>
  );
}
