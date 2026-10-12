'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CURATED_TOURS } from '@/data/tours';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { Lightbox } from '@/components/ui/Lightbox';
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2,
  Calendar,
  Car,
  Bed,
  Check,
  X as XIcon,
  HelpCircle,
  ChevronDown,
  Compass
} from 'lucide-react';

export default function TourDetailPage() {
  return (
    <React.Suspense fallback={<div className="py-32 text-center text-xs font-mono text-[#77756D]">Loading tour details...</div>}>
      <TourDetailContent />
    </React.Suspense>
  );
}

function TourDetailContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const tour = CURATED_TOURS.find((t) => t.slug === slug);

  const [activeDay, setActiveDay] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!tour) {
    return (
      <div className="py-32 max-w-xl mx-auto text-center space-y-4 px-4">
        <h1 className="text-3xl font-serif font-normal text-[#252720]">Tour Not Found</h1>
        <p className="text-sm text-[#77756D] font-light">
          The requested curated journey could not be located in our catalogue.
        </p>
        <Link 
          href="/tours" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
        >
          <span>← Return to All Curated Tours</span>
        </Link>
      </div>
    );
  }

  // Format gallery for Lightbox
  const galleryImages = tour.gallery.map((url, i) => ({
    url,
    caption: `${tour.title} — Itinerary view ${i + 1}`,
    alt: `${tour.title} view ${i + 1}`
  }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  // Find destinations covered objects
  const destinationsCovered = HERITAGE_DESTINATIONS.filter((d) =>
    tour.destinationsCovered.includes(d.slug)
  );

  // Other tours
  const relatedTours = CURATED_TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. CINEMATIC TOUR HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#141814] text-white">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-[#141814]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-4">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EBE5DA] font-mono">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <Link href="/tours" className="hover:underline">Curated Tours</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <span className="text-[#A88C5A]">{tour.title}</span>
          </nav>

          <div className="space-y-2 max-w-4xl">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A88C5A] block">
              {tour.category}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-white tracking-tight">
              {tour.title}
            </h1>
            <p className="text-lg sm:text-2xl font-serif italic text-stone-200 font-light max-w-3xl">
              {tour.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="bg-[#252720]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-xs border border-white/20 text-xs font-mono text-[#EBE5DA] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A88C5A]" />
              <span>{tour.durationText}</span>
            </div>

            <div className="bg-[#252720]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-xs border border-white/20 text-xs font-mono text-[#EBE5DA] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#A88C5A]" />
              <span>Pace: {tour.pace}</span>
            </div>

            <Link
              href={`/contact?tour=${encodeURIComponent(tour.title)}`}
              className="bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-xs transition shadow-sm ml-auto"
            >
              <span>Request Personalised Quote →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW & METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Story column */}
          <div className="lg:col-span-8 space-y-10">
            
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                Itinerary Concept & Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
                About This Journey
              </h2>
              <p className="text-base sm:text-lg text-[#252720] font-light leading-relaxed">
                {tour.overview}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-[#EBE5DA]/70 border border-[#DCD4C6] rounded-xs p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-serif font-medium text-[#252720]">
                Journey Highlights
              </h3>
              <ul className="space-y-2.5">
                {tour.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#77756D] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#6C7357] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. VISUAL DAY-BY-DAY ITINERARY TIMELINE */}
            <div className="space-y-6 pt-4">
              <div className="flex items-end justify-between border-b border-[#DCD4C6] pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                    Day-by-Day Progression
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
                    Detailed Daily Itinerary
                  </h3>
                </div>
                <span className="text-xs text-[#77756D] font-mono">
                  {tour.dayByDayItinerary.length} Days Planned
                </span>
              </div>

              {/* Itinerary Accordion / Timeline */}
              <div className="space-y-4">
                {tour.dayByDayItinerary.map((day) => {
                  const isCurrentActive = activeDay === day.day;

                  return (
                    <div
                      key={day.day}
                      className="border border-[#DCD4C6] rounded-xs overflow-hidden bg-[#F5F1E9] transition"
                    >
                      <button
                        onClick={() => setActiveDay(isCurrentActive ? 0 : day.day)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 bg-[#EBE5DA]/40 hover:bg-[#EBE5DA] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xs bg-[#252720] text-[#F5F1E9] flex items-center justify-center font-mono text-xs font-semibold shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <div className="text-sm font-serif font-medium text-[#252720]">
                              {day.title}
                            </div>
                            <div className="text-[11px] text-[#A88C5A] font-mono">
                              {day.location} • {day.mealsIncluded}
                            </div>
                          </div>
                        </div>

                        <ChevronDown className={`w-4 h-4 text-[#77756D] transition-transform ${isCurrentActive ? 'rotate-180' : ''}`} />
                      </button>

                      {isCurrentActive && (
                        <div className="p-6 space-y-4 border-t border-[#DCD4C6] bg-[#F5F1E9] animate-fadeIn text-xs text-[#77756D] font-light leading-relaxed">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#DCD4C6]/60 pb-4">
                            <div className="space-y-1">
                              <span className="font-semibold text-[#252720] uppercase tracking-wider text-[10px] block">
                                Morning:
                              </span>
                              <p>{day.morning}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-semibold text-[#252720] uppercase tracking-wider text-[10px] block">
                                Afternoon:
                              </span>
                              <p>{day.afternoon}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-semibold text-[#252720] uppercase tracking-wider text-[10px] block">
                                Evening:
                              </span>
                              <p>{day.evening}</p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-[11px]">
                            <div className="flex items-center gap-1.5 text-[#252720]">
                              <Bed className="w-3.5 h-3.5 text-[#A88C5A]" />
                              <span>Overnight: <strong>{day.overnightLocation}</strong></span>
                            </div>
                            <div className="text-[#6C7357] font-medium">
                              Highlights: {day.highlights.join(' • ')}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DCD4C6]">
              <div className="space-y-3 p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs">
                <h4 className="text-sm font-serif font-semibold text-[#252720] uppercase tracking-wider">
                  Included in This Journey
                </h4>
                <ul className="space-y-2 text-xs text-[#77756D] font-light">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6C7357] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-6 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs">
                <h4 className="text-sm font-serif font-semibold text-[#252720] uppercase tracking-wider">
                  Excluded Services
                </h4>
                <ul className="space-y-2 text-xs text-[#77756D] font-light">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XIcon className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sidebar column: Booking CTA, Logistics & Traveler Profile */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quote & Enquiry Card */}
            <div className="bg-[#252720] text-[#F5F1E9] p-6 sm:p-8 rounded-xs space-y-5 border border-[#3D4034] shadow-md">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A88C5A] font-semibold block">
                Private Tour Enquiry
              </span>
              <h3 className="text-2xl font-serif font-normal">
                Enquire About This Tour
              </h3>
              <p className="text-xs text-[#C5C1B6] font-light leading-relaxed">
                All itineraries are customizable. Tell us your intended arrival month and travellers to receive a formal quotation and room availability.
              </p>

              <div className="space-y-2 text-xs text-[#A5A299] pt-2 border-t border-[#3D4034]">
                <div>Duration: <strong className="text-white">{tour.durationText}</strong></div>
                <div>Transport: <strong className="text-white">Private vehicle + chauffeur</strong></div>
                <div>Status: <strong className="text-[#A88C5A]">Proposed Itinerary Concept</strong></div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/contact?tour=${encodeURIComponent(tour.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium py-3.5 rounded-xs transition shadow-sm"
                >
                  <span>Enquire About This Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-[10px] text-[#8C887F] text-center font-light">
                No deposit required to enquire. Complimentary proposal within 24h.
              </p>
            </div>

            {/* Tour Logistics Card */}
            <div className="bg-[#EBE5DA] border border-[#DCD4C6] rounded-xs p-6 space-y-4 text-xs text-[#77756D] font-light">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252720] font-serif border-b border-[#DCD4C6] pb-2">
                Tour Logistics & Practicalities
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="block font-medium text-[#252720]">Transport Allocation:</span>
                  <p>{tour.transportDetails}</p>
                </div>
                <div>
                  <span className="block font-medium text-[#252720]">Accommodation Standard:</span>
                  <p>{tour.accommodationStyle}</p>
                </div>
                <div>
                  <span className="block font-medium text-[#252720]">Physical Exertion:</span>
                  <p>{tour.activityLevel}</p>
                </div>
                <div>
                  <span className="block font-medium text-[#252720]">Suitable Traveler Profile:</span>
                  <p>{tour.travelerType}</p>
                </div>
              </div>
            </div>

            {/* Destinations Included in this Tour */}
            <div className="p-6 border border-[#DCD4C6] rounded-xs space-y-3 bg-[#F5F1E9]">
              <h4 className="text-xs uppercase tracking-widest text-[#77756D] font-semibold">
                Destinations Visited
              </h4>
              <div className="space-y-2">
                {destinationsCovered.map((d) => (
                  <Link
                    key={d.id}
                    href={`/destinations/${d.slug}`}
                    className="flex items-center justify-between text-xs text-[#252720] hover:text-[#6C7357] border-b border-[#DCD4C6]/40 pb-2 transition"
                  >
                    <span className="font-serif text-sm">{d.name}</span>
                    <span className="text-[10px] text-[#A88C5A] font-mono">View Guide →</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PHOTOGRAPHY ARCHIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#DCD4C6] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Photographic Preview
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
              Visual Moments from {tour.title}
            </h3>
          </div>
          <p className="text-xs text-[#77756D] font-light">
            Click to expand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tour.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-16/10 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200 cursor-pointer shadow-xs"
            >
              <img
                src={img}
                alt={`${tour.title} gallery ${i + 1}`}
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

      {/* 5. TOUR FAQS */}
      <section className="bg-[#EBE5DA] py-16 border-y border-[#DCD4C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
              Questions About This Journey
            </h3>
          </div>

          <div className="space-y-3 pt-4">
            <div className="border border-[#DCD4C6] bg-[#F5F1E9] p-4 rounded-xs space-y-1">
              <h4 className="text-sm font-serif font-semibold text-[#252720]">
                Can the start date and duration be adjusted?
              </h4>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                Yes. Since all tours are private, you can begin on any day of the year. If you wish to extend your stay or alter specific stops, our Colombo specialists will adjust the itinerary accordingly.
              </p>
            </div>

            <div className="border border-[#DCD4C6] bg-[#F5F1E9] p-4 rounded-xs space-y-1">
              <h4 className="text-sm font-serif font-semibold text-[#252720]">
                How is the quote calculated?
              </h4>
              <p className="text-xs text-[#77756D] font-light leading-relaxed">
                Pricing is based on exact travel dates (seasonality), chosen boutique hotel categories, party size, and vehicle requirement. We provide a transparent, personalized quote without hidden booking fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED TOURS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Alternative Options
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720]">
            Other Curated Itineraries You May Like
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTours.map((rt) => (
            <div
              key={rt.id}
              className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                <img
                  src={rt.heroImage}
                  alt={rt.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#252720]/80 text-[#F5F1E9] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                  {rt.durationText}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-base font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors">
                    {rt.title}
                  </h4>
                  <p className="text-xs text-[#77756D] font-light line-clamp-2 mt-1">
                    {rt.overview}
                  </p>
                </div>
                <Link
                  href={`/tours/${rt.slug}`}
                  className="text-xs uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] flex items-center gap-1 transition pt-2 border-t border-[#DCD4C6]/60"
                >
                  <span>Explore Tour</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

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
