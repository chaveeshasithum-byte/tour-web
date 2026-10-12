'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { JOURNAL_ARTICLES } from '@/data/journal';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { CURATED_TOURS } from '@/data/tours';
import { Clock, ArrowRight, ChevronRight, User, Share2, Compass } from 'lucide-react';

export default function JournalArticlePage() {
  return (
    <React.Suspense fallback={<div className="py-32 text-center text-xs font-mono text-[#77756D]">Loading essay...</div>}>
      <JournalArticleContent />
    </React.Suspense>
  );
}

function JournalArticleContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-32 max-w-xl mx-auto text-center space-y-4 px-4">
        <h1 className="text-3xl font-serif font-normal text-[#252720]">Article Not Found</h1>
        <p className="text-sm text-[#77756D] font-light">
          The requested journal article could not be found.
        </p>
        <Link 
          href="/journal" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
        >
          <span>← Return to Travel Journal</span>
        </Link>
      </div>
    );
  }

  // Find related destinations and tours
  const relatedDestinations = HERITAGE_DESTINATIONS.filter((d) =>
    article.relatedDestinations.includes(d.slug)
  );

  const relatedTours = CURATED_TOURS.filter((t) =>
    article.relatedTours.includes(t.slug)
  );

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="space-y-16 pb-24">
      
      {/* 1. LARGE EDITORIAL HERO IMAGE */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#141814] text-white">
        <img
          src={article.heroImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-[#141814]/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-4">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EBE5DA] font-mono">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <Link href="/journal" className="hover:underline">Travel Journal</Link>
            <ChevronRight className="w-3 h-3 text-[#A88C5A]" />
            <span className="text-[#A88C5A]">{article.category}</span>
          </nav>

          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A88C5A] block">
              {article.category} • {article.readTime}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-[1.1]">
              {article.title}
            </h1>
            <p className="text-base sm:text-xl font-serif italic text-stone-200 font-light leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3 text-xs text-stone-300 font-mono">
            <span>By {article.author.name}</span>
            <span>•</span>
            <span>{article.author.title}</span>
            <span>•</span>
            <span>Published {article.publishedDate}</span>
          </div>

        </div>
      </section>

      {/* 2. ARTICLE BODY (LONG-FORM EDITORIAL) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Paragraph */}
        <div className="border-b border-[#DCD4C6] pb-8 mb-10">
          <p className="text-lg sm:text-xl font-serif text-[#252720] leading-relaxed font-normal">
            {article.intro}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-[#252720] leading-relaxed">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#252720] pt-4">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-4 text-sm sm:text-base font-light text-[#34372C] leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {section.quote && (
                <blockquote className="my-8 p-6 sm:p-8 bg-[#EBE5DA]/60 border-l-2 border-[#A88C5A] rounded-r-xs">
                  <p className="text-lg sm:text-xl font-serif italic text-[#252720] leading-relaxed">
                    &ldquo;{section.quote}&rdquo;
                  </p>
                </blockquote>
              )}

              {section.image && (
                <figure className="my-8 space-y-2">
                  <div className="relative aspect-16/10 overflow-hidden rounded-xs border border-[#DCD4C6] bg-stone-200">
                    <img
                      src={section.image.url}
                      alt={section.image.caption}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <figcaption className="text-xs text-[#77756D] font-mono italic text-center">
                    {section.image.caption}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* 3. RELEVANT DESTINATIONS & TOURS */}
      {(relatedDestinations.length > 0 || relatedTours.length > 0) && (
        <section className="bg-[#EBE5DA] py-16 border-y border-[#DCD4C6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {relatedDestinations.length > 0 && (
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                  Featured Locations
                </span>
                <h3 className="text-2xl font-serif font-normal text-[#252720]">
                  Destinations Explored in This Essay
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedDestinations.map((d) => (
                    <Link
                      key={d.id}
                      href={`/destinations/${d.slug}`}
                      className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between hover:shadow-xs transition group"
                    >
                      <div>
                        <div className="font-serif text-base font-medium text-[#252720] group-hover:text-[#6C7357]">
                          {d.name}
                        </div>
                        <div className="text-[11px] text-[#77756D] font-light">
                          {d.region}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A88C5A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedTours.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#DCD4C6]/60">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
                  Recommended Journeys
                </span>
                <h3 className="text-2xl font-serif font-normal text-[#252720]">
                  Itineraries That Experience This Heritage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTours.map((t) => (
                    <Link
                      key={t.id}
                      href={`/tours/${t.slug}`}
                      className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between hover:shadow-xs transition group"
                    >
                      <div>
                        <div className="font-serif text-base font-medium text-[#252720] group-hover:text-[#6C7357]">
                          {t.title}
                        </div>
                        <div className="text-[11px] text-[#77756D] font-mono">
                          {t.durationText}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A88C5A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 4. TOUR ENQUIRY CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252720] text-[#F5F1E9] p-8 sm:p-12 rounded-xs text-center space-y-4 border border-[#3D4034]">
          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
            Inspired to Experience This in Person?
          </h3>
          <p className="text-xs sm:text-sm text-[#C5C1B6] font-light max-w-lg mx-auto leading-relaxed">
            Our private tour planning team can weave the themes of this essay directly into your personalized Sri Lankan itinerary.
          </p>
          <div className="pt-2">
            <Link
              href="/plan-your-journey"
              className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-xs transition shadow-sm"
            >
              <span>Design Your Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OTHER ARTICLES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-8 border-t border-[#DCD4C6]">
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#77756D]">
          More from the Heritage Journal
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherArticles.map((oa) => (
            <Link
              key={oa.id}
              href={`/journal/${oa.slug}`}
              className="p-4 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs space-y-2 hover:shadow-xs transition group block"
            >
              <div className="text-[10px] font-mono text-[#A88C5A]">{oa.readTime}</div>
              <h5 className="text-sm font-serif font-medium text-[#252720] group-hover:text-[#6C7357] line-clamp-2">
                {oa.title}
              </h5>
              <p className="text-[11px] text-[#77756D] font-light line-clamp-2">
                {oa.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
}
