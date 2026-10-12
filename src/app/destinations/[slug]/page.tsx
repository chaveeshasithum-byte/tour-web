'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { CURATED_TOURS } from '@/data/tours';
import { HERITAGE_EXPERIENCES } from '@/data/experiences';
import { Lightbox } from '@/components/ui/Lightbox';
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2,
  Compass,
  AlertCircle
} from 'lucide-react';

export default function DestinationDetailPage() {
  return (
    <React.Suspense fallback={<div className="py-32 text-center text-xs font-mono text-[#77756D]">Loading destination...</div>}>
      <DestinationDetailContent />
    </React.Suspense>
  );
}

function DestinationDetailContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const destination = HERITAGE_DESTINATIONS.find((d) => d.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!destination) {
    return (
      <div className="py-32 max-w-xl mx-auto text-center space-y-4 px-4">
        <h1 className="text-3xl font-serif font-normal text-[#252720]">Destination Not Found</h1>
        <p className="text-sm text-[#77756D] font-light">
          The requested heritage destination could not be located in our curated catalogue.
        </p>
        <Link 
          href="/destinations" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
        >
          <span>← Return to All Destinations</span>
        </Link>
      </div>
    );
  }

  // Format gallery for Lightbox
  const galleryImages = destination.gallery.map((url, i) => ({
    url,
    caption: `${destination.name} — Archival view ${i + 1}`,
    alt: `${destination.name} view ${i + 1}`
  }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  // Find related tours and experiences
  const relatedTours = CURATED_TOURS.filter((t) => 
    destination.relatedTourSlugs.includes(t.slug)
  );

  const relatedExperiences = HERITAGE_EXPERIENCES.filter((e) =>
    destination.relatedExperienceSlugs.includes(e.slug)
  );

  const nearbyDests = HERITAGE_DESTINATIONS.filter((d) =>
    destination.nearbyDestinations.includes(d.slug)
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. FULL-WIDTH DESTINATION HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#141814] text-white">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-[#141814]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EBE5DA] font-mono">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <Link href="/destinations" className="hover:underline">Destinations</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <span className="text-[#A88C5A]">{destination.name}</span>
          </nav>

          <div className="space-y-2 max-w-4xl">
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-white tracking-tight">
                {destination.name}
              </h1>
              {destination.sinhalaName && (
                <span className="text-xl sm:text-2xl font-serif text-stone-300">
                  {destination.sinhalaName}
                </span>
              )}
            </div>
            <p className="text-lg sm:text-2xl font-serif italic text-stone-200 font-light">
              {destination.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="bg-[#252720]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-xs border border-white/20 text-xs font-mono text-[#EBE5DA] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A88C5A]" />
              <span>Region: {destination.region}</span>
            </div>

            <div className="bg-[#252720]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-xs border border-white/20 text-xs font-mono text-[#EBE5DA] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A88C5A]" />
              <span>Recommended Duration: {destination.suggestedDuration}</span>
            </div>

            <Link
              href={`/plan-your-journey?destination=${destination.slug}`}
              className="bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-xs transition shadow-sm ml-auto"
            >
              <span>Include in My Journey →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. ELEGANT EDITORIAL INTRO & HISTORICAL BACKGROUND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Story column */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                Historical Context & Genesis
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#252720] leading-tight">
                Historical and Cultural Background
              </h2>
              <p className="text-base sm:text-lg text-[#252720] font-light leading-relaxed">
                {destination.historicalBackground}
              </p>
            </div>

            {/* Why It Matters Callout */}
            <div className="bg-[#EBE5DA]/70 border-l-2 border-[#A88C5A] p-6 rounded-r-xs space-y-2">
              <h3 className="text-base font-serif font-medium text-[#252720]">
                Why This Destination Matters
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
                {destination.whyItMatters}
              </p>
            </div>

            {/* Editorial Quote if available */}
            {destination.editorialQuote && (
              <blockquote className="border-y border-[#DCD4C6] py-6 my-8 text-center">
                <p className="text-xl sm:text-2xl font-serif italic text-[#252720]">
                  &ldquo;{destination.editorialQuote}&rdquo;
                </p>
                <cite className="block text-[11px] uppercase tracking-widest text-[#77756D] font-mono mt-2 not-italic">
                  Heritage Travels Field Journal
                </cite>
              </blockquote>
            )}

            {/* 3. KEY PLACES TO EXPLORE */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-serif font-normal text-[#252720]">
                Key Places to Explore Within {destination.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {destination.keyPlaces.map((kp, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs p-5 space-y-2.5"
                  >
                    {kp.image && (
                      <div className="relative aspect-16/9 overflow-hidden rounded-xs bg-stone-200 mb-3">
                        <img 
                          src={kp.image} 
                          alt={kp.name} 
                          className="w-full h-full object-cover img-zoom" 
                        />
                      </div>
                    )}
                    <h4 className="text-base font-serif font-medium text-[#252720]">
                      {kp.name}
                    </h4>
                    <p className="text-xs text-[#77756D] font-light leading-relaxed">
                      {kp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar column: Practical Visitor Notes & Custom Itinerary CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Practical Visitor Notes Card */}
            <div className="bg-[#EBE5DA] border border-[#DCD4C6] rounded-xs p-6 space-y-4">
              <h3 className="text-sm uppercase tracking-[0.18em] font-serif text-[#252720] border-b border-[#DCD4C6] pb-3 font-semibold">
                Practical Visitor Notes
              </h3>

              <div className="space-y-3.5 text-xs text-[#77756D] font-light">
                {destination.practicalNotes.dressCode && (
                  <div>
                    <span className="block font-medium text-[#252720] mb-0.5">Dress Code Etiquette:</span>
                    <p className="leading-relaxed">{destination.practicalNotes.dressCode}</p>
                  </div>
                )}

                {destination.practicalNotes.bestTimeToVisit && (
                  <div>
                    <span className="block font-medium text-[#252720] mb-0.5">Best Time of Day:</span>
                    <p className="leading-relaxed">{destination.practicalNotes.bestTimeToVisit}</p>
                  </div>
                )}

                {destination.practicalNotes.physicalDemands && (
                  <div>
                    <span className="block font-medium text-[#252720] mb-0.5">Physical Terrain:</span>
                    <p className="leading-relaxed">{destination.practicalNotes.physicalDemands}</p>
                  </div>
                )}

                {destination.practicalNotes.entryPermits && (
                  <div>
                    <span className="block font-medium text-[#252720] mb-0.5">Entry Formalities:</span>
                    <p className="leading-relaxed">{destination.practicalNotes.entryPermits}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Itinerary CTA Card */}
            <div className="bg-[#252720] text-[#F5F1E9] rounded-xs p-6 space-y-4 border border-[#3D4034]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A88C5A] font-semibold block">
                Bespoke Private Journey
              </span>
              <h4 className="text-xl font-serif font-normal">
                Experience {destination.name} at Your Own Rhythm
              </h4>
              <p className="text-xs text-[#C5C1B6] font-light leading-relaxed">
                Connect {destination.name} with nearby heritage regions in an unhurried itinerary with a private vehicle and licensed specialist guide.
              </p>
              <div className="pt-2">
                <Link
                  href={`/plan-your-journey?destination=${destination.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium py-3 rounded-xs transition shadow-sm"
                >
                  <span>Plan This Destination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Nearby Heritage Destinations */}
            {nearbyDests.length > 0 && (
              <div className="p-6 border border-[#DCD4C6] rounded-xs space-y-3 bg-[#F5F1E9]">
                <h4 className="text-xs uppercase tracking-widest text-[#77756D] font-semibold">
                  Nearby Heritage Regions
                </h4>
                <div className="space-y-2">
                  {nearbyDests.map((nd) => (
                    <Link
                      key={nd.id}
                      href={`/destinations/${nd.slug}`}
                      className="flex items-center justify-between text-xs text-[#252720] hover:text-[#6C7357] border-b border-[#DCD4C6]/40 pb-2 transition"
                    >
                      <span className="font-serif text-sm">{nd.name}</span>
                      <span className="text-[10px] text-[#A88C5A] font-mono">Explore →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 4. PHOTOGRAPHY GALLERY (WITH LIGHTBOX) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#DCD4C6] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Photographic Archive
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
              Visual Glimpse of {destination.name}
            </h3>
          </div>
          <p className="text-xs text-[#77756D] font-light">
            Click any image for high-resolution inspection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destination.gallery.map((imgUrl, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-4/3 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200 cursor-pointer shadow-xs"
            >
              <img
                src={imgUrl}
                alt={`${destination.name} gallery image ${i + 1}`}
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

      {/* 5. RELATED EXPERIENCES */}
      {relatedExperiences.length > 0 && (
        <section className="bg-[#EBE5DA] py-16 border-y border-[#DCD4C6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                Cultural Masterclasses
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
                Related Heritage Experiences
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-5 flex flex-col justify-between space-y-4 group hover:shadow-md transition"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#A88C5A]">
                      {exp.eyebrow}
                    </span>
                    <h4 className="text-lg font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-[#77756D] font-light line-clamp-2 leading-relaxed">
                      {exp.subtitle}
                    </p>
                  </div>
                  <Link
                    href={`/experiences/${exp.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] transition pt-2 border-t border-[#DCD4C6]/60"
                  >
                    <span>Read Experience</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. RELATED TOURS */}
      {relatedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Proposed Itineraries
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
              Curated Journeys Featuring {destination.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map((tour) => (
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
                  <div className="absolute top-3 right-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] font-mono px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    {tour.durationText}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                      {tour.title}
                    </h4>
                    <p className="text-xs text-[#77756D] font-light line-clamp-2 leading-relaxed">
                      {tour.overview}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DCD4C6]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#A88C5A] font-medium">
                      {tour.pace} Pace
                    </span>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] flex items-center gap-1 transition"
                    >
                      <span>View Tour</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
