'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HERITAGE_EXPERIENCES } from '@/data/experiences';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { CURATED_TOURS } from '@/data/tours';
import { Lightbox } from '@/components/ui/Lightbox';
import { 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function ExperienceDetailPage() {
  return (
    <React.Suspense fallback={<div className="py-32 text-center text-xs font-mono text-[#77756D]">Loading experience...</div>}>
      <ExperienceDetailContent />
    </React.Suspense>
  );
}

function ExperienceDetailContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const experience = HERITAGE_EXPERIENCES.find((e) => e.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!experience) {
    return (
      <div className="py-32 max-w-xl mx-auto text-center space-y-4 px-4">
        <h1 className="text-3xl font-serif font-normal text-[#252720]">Experience Not Found</h1>
        <p className="text-sm text-[#77756D] font-light">
          The requested heritage experience could not be located.
        </p>
        <Link 
          href="/experiences" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
        >
          <span>← Return to All Experiences</span>
        </Link>
      </div>
    );
  }

  // Format gallery for Lightbox
  const galleryImages = experience.gallery.map((url, idx) => ({
    url,
    caption: `${experience.title} — Archival view ${idx + 1}`,
    alt: `${experience.title} ${idx + 1}`
  }));

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  // Find relevant destination objects
  const relevantDestinations = HERITAGE_DESTINATIONS.filter((d) =>
    experience.relevantDestinations.includes(d.slug)
  );

  // Find related tours
  const relatedTours = CURATED_TOURS.filter((t) =>
    experience.relatedTourSlugs.includes(t.slug)
  );

  // Other experiences
  const otherExperiences = HERITAGE_EXPERIENCES.filter((e) => e.slug !== experience.slug).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. IMMERSIVE HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-[#141814] text-white">
        <img
          src={experience.heroImage}
          alt={experience.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-[#141814]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-4">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EBE5DA] font-mono">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <Link href="/experiences" className="hover:underline">Experiences</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <span className="text-[#A88C5A]">{experience.title}</span>
          </nav>

          <div className="space-y-2 max-w-4xl">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A88C5A] block">
              {experience.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
              {experience.title}
            </h1>
            <p className="text-lg sm:text-xl font-serif italic text-stone-200 font-light max-w-2xl">
              {experience.subtitle}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={`/plan-your-journey?experience=${experience.slug}`}
              className="bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-xs transition shadow-sm"
            >
              <span>Add to Proposed Journey →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW & CULTURAL CONTEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                The Heritage Encounter
              </span>
              <h2 className="text-3xl font-serif font-normal text-[#252720]">
                Experience Overview
              </h2>
              <p className="text-base sm:text-lg text-[#252720] font-light leading-relaxed">
                {experience.overview}
              </p>
            </div>

            {/* Cultural Context */}
            <div className="bg-[#EBE5DA]/70 border-l-2 border-[#6C7357] p-6 rounded-r-xs space-y-3">
              <h3 className="text-lg font-serif font-medium text-[#252720]">
                Cultural Context & Living Significance
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
                {experience.culturalContext}
              </p>
            </div>

            {/* Possible Activities */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-serif font-normal text-[#252720]">
                Curated Activities & Masterclasses
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {experience.possibleActivities.map((act, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#6C7357] text-white flex items-center justify-center text-[10px] font-mono shrink-0">
                        {i + 1}
                      </span>
                      <h4 className="text-base font-serif font-medium text-[#252720]">
                        {act.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#77756D] font-light leading-relaxed pl-7">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Respectful Visitor Guidance Card */}
            <div className="bg-[#EBE5DA] border border-[#DCD4C6] rounded-xs p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#252720] border-b border-[#DCD4C6] pb-3">
                <ShieldCheck className="w-4 h-4 text-[#A88C5A]" />
                <h3 className="text-xs uppercase tracking-widest font-semibold font-serif">
                  Respectful Visitor Guidance
                </h3>
              </div>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                {experience.visitorEtiquette}
              </p>
              <div className="pt-2 text-[11px] text-[#A88C5A] font-mono">
                Cultural respect ensures genuine hospitality and protects island heritage.
              </div>
            </div>

            {/* Relevant Destinations */}
            {relevantDestinations.length > 0 && (
              <div className="p-6 border border-[#DCD4C6] rounded-xs space-y-4 bg-[#F5F1E9]">
                <h4 className="text-xs uppercase tracking-widest text-[#77756D] font-semibold">
                  Where to Experience This
                </h4>
                <div className="space-y-3">
                  {relevantDestinations.map((d) => (
                    <Link
                      key={d.id}
                      href={`/destinations/${d.slug}`}
                      className="block p-3 bg-[#EBE5DA]/50 hover:bg-[#EBE5DA] rounded-xs border border-[#DCD4C6]/60 transition group"
                    >
                      <div className="text-sm font-serif font-medium text-[#252720] group-hover:text-[#6C7357]">
                        {d.name}
                      </div>
                      <div className="text-[11px] text-[#77756D] font-light">
                        {d.region} • {d.suggestedDuration}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Trip CTA */}
            <div className="bg-[#252720] text-[#F5F1E9] p-6 rounded-xs space-y-3 border border-[#3D4034]">
              <h4 className="text-lg font-serif">
                Include This Experience
              </h4>
              <p className="text-xs text-[#C5C1B6] font-light leading-relaxed">
                Ask our travel designers to build this cultural encounter directly into your custom private itinerary.
              </p>
              <div className="pt-2">
                <Link
                  href={`/plan-your-journey?experience=${experience.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium py-3 rounded-xs transition shadow-sm"
                >
                  <span>Build Into My Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#DCD4C6] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Visual Archives
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
              Visual Impressions
            </h3>
          </div>
          <p className="text-xs text-[#77756D] font-light">
            Click to expand image.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {experience.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-16/10 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200 cursor-pointer shadow-xs"
            >
              <img
                src={img}
                alt={`${experience.title} view ${i + 1}`}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/25 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RELATED TOURS */}
      {relatedTours.length > 0 && (
        <section className="bg-[#EBE5DA] py-16 border-y border-[#DCD4C6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                Itineraries Featuring This
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
                Curated Heritage Tours
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTours.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                    <img
                      src={t.heroImage}
                      alt={t.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-[#252720]/80 text-[#F5F1E9] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                      {t.durationText}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="text-base font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                        {t.title}
                      </h4>
                      <p className="text-xs text-[#77756D] font-light line-clamp-2 mt-1">
                        {t.overview}
                      </p>
                    </div>
                    <Link
                      href={`/tours/${t.slug}`}
                      className="text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] flex items-center gap-1 transition pt-2 border-t border-[#DCD4C6]/60"
                    >
                      <span>Explore Tour</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
      />

    </div>
  );
}
