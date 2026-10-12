'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Compass } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#252720] text-[#EBE5DA] pt-20 pb-12 border-t border-[#34372C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Brand Intro & CTA Grid */}
        <div className="pb-16 border-b border-[#3D4034] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <Link href="/" className="inline-block group mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-tight.png"
                alt="Heritage Travels Logo"
                className="w-44 rounded-sm border border-[#D7C4A6]/30 shadow-md group-hover:border-[#C9A24D] transition-all"
              />
            </Link>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Boutique Heritage Journeys
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5F1E9] leading-tight max-w-xl">
              Discover Sri Lanka beyond ordinary sightseeing.
            </h3>
            <p className="text-sm text-[#A5A299] max-w-lg font-light leading-relaxed">
              We curate private heritage journeys through ancient kingdoms, sacred temple architecture, living craft guilds, and colonial maritime cities. Thoughtfully planned for travellers who desire cultural depth, personal flexibility, and authentic encounters.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#2E3128] border border-[#44483B] p-8 rounded-xs space-y-4">
            <h4 className="text-lg font-serif text-[#F5F1E9] font-normal">
              Begin Shaping Your Proposed Journey
            </h4>
            <p className="text-xs text-[#A5A299] font-light leading-relaxed">
              Share your travel dates and cultural interests. Our Colombo destination specialists will design a personalized itinerary crafted exclusively for you.
            </p>
            <div className="pt-2">
              <Link
                href="/plan-your-journey"
                className="inline-flex items-center gap-2 bg-[#F5F1E9] text-[#252720] hover:bg-white text-xs uppercase tracking-[0.18em] font-medium px-6 py-3 rounded-xs transition shadow-sm"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-[#3D4034]">
          
          {/* Column 1: Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88C5A] font-semibold">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5C1B6] font-light">
              <li>
                <Link href="/destinations/sigiriya" className="hover:text-[#F5F1E9] transition">
                  Sigiriya Citadel
                </Link>
              </li>
              <li>
                <Link href="/destinations/anuradhapura" className="hover:text-[#F5F1E9] transition">
                  Anuradhapura Kingdom
                </Link>
              </li>
              <li>
                <Link href="/destinations/polonnaruwa" className="hover:text-[#F5F1E9] transition">
                  Polonnaruwa Relics
                </Link>
              </li>
              <li>
                <Link href="/destinations/dambulla" className="hover:text-[#F5F1E9] transition">
                  Dambulla Cave Temples
                </Link>
              </li>
              <li>
                <Link href="/destinations/kandy" className="hover:text-[#F5F1E9] transition">
                  Kandy Royal City
                </Link>
              </li>
              <li>
                <Link href="/destinations/galle-fort" className="hover:text-[#F5F1E9] transition">
                  Galle Fort Bastions
                </Link>
              </li>
              <li>
                <Link href="/destinations/jaffna" className="hover:text-[#F5F1E9] transition">
                  Jaffna Tamil Heritage
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-[#A88C5A] hover:underline font-normal">
                  View All Destinations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88C5A] font-semibold">
              Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5C1B6] font-light">
              <li>
                <Link href="/experiences/ancient-kingdoms" className="hover:text-[#F5F1E9] transition">
                  Ancient Kingdoms
                </Link>
              </li>
              <li>
                <Link href="/experiences/sacred-architecture" className="hover:text-[#F5F1E9] transition">
                  Sacred Architecture
                </Link>
              </li>
              <li>
                <Link href="/experiences/historic-architecture" className="hover:text-[#F5F1E9] transition">
                  Colonial Fortresses
                </Link>
              </li>
              <li>
                <Link href="/experiences/living-traditions" className="hover:text-[#F5F1E9] transition">
                  Traditional Crafts
                </Link>
              </li>
              <li>
                <Link href="/experiences/culinary-heritage" className="hover:text-[#F5F1E9] transition">
                  Culinary Heritage
                </Link>
              </li>
              <li>
                <Link href="/experiences/village-cultural-landscapes" className="hover:text-[#F5F1E9] transition">
                  Village Water Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Curated Tours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88C5A] font-semibold">
              Curated Tours
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5C1B6] font-light">
              <li>
                <Link href="/tours/cultural-triangle-journey" className="hover:text-[#F5F1E9] transition">
                  Cultural Triangle (5 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours/ancient-kingdoms-sacred-cities" className="hover:text-[#F5F1E9] transition">
                  Ancient Kingdoms (8 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours/southern-heritage-escape" className="hover:text-[#F5F1E9] transition">
                  Galle Fort Escape (4 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours/kandy-hill-country-trail" className="hover:text-[#F5F1E9] transition">
                  Hill Country Trail (6 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours/grand-heritage-journey" className="hover:text-[#F5F1E9] transition">
                  Grand Odyssey (14 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-[#A88C5A] hover:underline font-normal">
                  Browse All Itineraries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Brand & Editorial */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88C5A] font-semibold">
              Heritage Travels
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5C1B6] font-light">
              <li>
                <Link href="/about" className="hover:text-[#F5F1E9] transition">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#F5F1E9] transition">
                  The Travel Journal
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#F5F1E9] transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5F1E9] transition">
                  Contact Concierge
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F5F1E9] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#F5F1E9] transition">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Destination Concierge Office */}
          <div className="space-y-4 col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88C5A] font-semibold">
              Colombo Office
            </h4>
            <div className="space-y-2 text-xs text-[#A5A299] font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A88C5A] shrink-0 mt-0.5" />
                <span>Galle Face Court, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A88C5A] shrink-0" />
                <span>+94 (11) 234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A88C5A] shrink-0" />
                <span>enquiries@heritagetravels.lk</span>
              </div>
              <div className="pt-2 text-[11px] text-[#8C887F] italic leading-tight">
                Operating private cultural journeys across all nine provinces of Sri Lanka.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#8C887F] font-light gap-4">
          <div>
            © {currentYear} Heritage Travels Private Limited. All rights reserved. Registered Tourist Enterprise.
          </div>
          <div className="flex items-center gap-6">
            <span>Warm Ivory Palette `#F5F1E9`</span>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#C5C1B6] transition">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#C5C1B6] transition">
              Terms
            </Link>
            <span>•</span>
            <Link href="/plan-your-journey" className="hover:text-[#C5C1B6] transition">
              Custom Tour Planner
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
