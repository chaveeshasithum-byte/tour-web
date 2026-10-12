'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="space-y-12 pb-24 pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="space-y-3 border-b border-[#DCD4C6] pb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
          Operating Terms
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-[#77756D] font-mono">
          Last Updated: October 2026 • Heritage Travels Private Limited
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-[#34372C] font-light leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">1. Proposed vs. Confirmed Itineraries</h2>
          <p>
            All itineraries, routes, and accommodation selections generated through our website, Custom Tour Planner, or initial correspondence are <strong>proposed concepts</strong> provided for planning and estimation purposes. An itinerary becomes a <strong>confirmed booking</strong> only once room availability has been secured, a written confirmation agreement is issued, and any mutually agreed deposit has been received.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">2. Quotations and Pricing Policy</h2>
          <p>
            Quotations are tailored based on travel seasonality, group size, vehicle class, and boutique lodging standards. Unless explicitly stated in writing, quotes exclude international airfares, Sri Lanka Electronic Travel Authorization (ETA) visa fees, personal travel insurance, and discretionary gratuities for chauffeur guides and local lecturers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">3. Modifications and Route Adjustments</h2>
          <p>
            Because our tours are private, route adjustments can often be accommodated. However, modifications requested close to travel dates are subject to boutique hotel change policies and room availability. During unforeseen adverse weather or regional road works, our chauffeur guides and operations managers reserve the right to alter driving routes to safeguard client safety and comfort.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">4. Travel Insurance and Health</h2>
          <p>
            It is a condition of travel with Heritage Travels that all international clients possess comprehensive international travel insurance covering emergency medical treatment, repatriation, trip cancellation, and luggage protection. Clients must disclose any mobility limitations or severe health conditions prior to travel so suitable transport and room accessibility can be arranged.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">5. Respect for Cultural and Sacred Sites</h2>
          <p>
            Clients agree to respect local customs, temple regulations, and dress codes when visiting sacred Buddhist, Hindu, Muslim, and Christian shrines across Sri Lanka. Heritage Travels chauffeur guides are instructed to enforce appropriate decorum to ensure respect for local communities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">6. Limitation of Liability</h2>
          <p>
            Heritage Travels acts in the capacity of a professional tour operator coordinating private transport, hotel reservations, and excursion logistics. While we carefully vet all third-party properties and transport vehicles, we are not liable for losses, delays, or damages arising from acts of God, flight delays, civil disruptions, or government authority actions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">7. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts of Colombo.
          </p>
        </section>

      </div>

      <div className="pt-8 border-t border-[#DCD4C6] flex items-center justify-between text-xs">
        <Link href="/privacy-policy" className="text-[#6C7357] hover:underline">
          ← Privacy Policy
        </Link>
        <Link href="/contact" className="text-[#252720] hover:text-[#6C7357] uppercase tracking-wider font-medium">
          Contact Concierge
        </Link>
      </div>

    </div>
  );
}
