'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 pb-24 pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="space-y-3 border-b border-[#DCD4C6] pb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
          Legal & Transparency
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#77756D] font-mono">
          Last Updated: October 2026 • Heritage Travels Private Limited
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-[#34372C] font-light leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">1. Introduction & Overview</h2>
          <p>
            Heritage Travels Private Limited (&ldquo;Heritage Travels,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and personal data of our travellers, website visitors, and clients. This Privacy Policy details the types of information we collect, how it is processed and protected, and your statutory rights regarding your personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">2. Information We Collect</h2>
          <p>We collect personal information directly provided by you through our website enquiries and Tour Planner, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Identity & Contact Data:</strong> Full name, email address, telephone/WhatsApp number, and country of residence.</li>
            <li><strong>Trip Preference Data:</strong> Intended travel dates, party size, children&apos;s age ranges, chosen heritage destinations, cultural interests, preferred pacing, and accommodation preferences.</li>
            <li><strong>Special Requests:</strong> Dietary requirements, mobility notes, or celebration requests submitted to tailor your private itinerary.</li>
            <li><strong>Technical Browsing Data:</strong> Non-personally identifiable browser type, device information, and IP address collected via essential website functionality.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">3. Purpose of Data Processing</h2>
          <p>We process your personal data exclusively for lawful travel operations:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Formulating and sending your custom private itinerary proposal and quotation.</li>
            <li>Coordinating dedicated transport with licensed tourist chauffeur guides and reserving boutique hotel accommodations.</li>
            <li>Communicating logistical updates or seasonal travel advisories regarding Sri Lanka.</li>
            <li>Complying with statutory Sri Lanka Tourism Development Authority (SLTDA) regulatory requirements.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal data to third-party marketing companies.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">4. Data Retention</h2>
          <p>
            Enquiry data is retained for the duration necessary to finalize your holiday arrangements and comply with standard accounting and legal audit obligations. If you do not proceed with a booking, your enquiry data is securely archived or erased upon request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">5. Cookies and Local Storage</h2>
          <p>
            Our website uses browser LocalStorage to temporarily preserve your Custom Tour Planner selections across page navigation so your itinerary choices are not lost if you navigate between destination guides. We do not deploy intrusive third-party cross-site tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">6. Your Privacy Rights</h2>
          <p>
            Depending on your jurisdiction (such as under the GDPR or national privacy laws), you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your personal contact records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-medium text-[#252720]">7. Contact for Privacy Matters</h2>
          <p>
            For any questions regarding this Privacy Policy or to exercise your data privacy rights, please contact our Data Protection Officer at:
          </p>
          <div className="p-4 bg-[#EBE5DA] rounded-xs space-y-1 font-mono text-xs text-[#252720]">
            <div>Heritage Travels Private Limited</div>
            <div>No. 42 Galle Face Court, Colombo 03, Sri Lanka</div>
            <div>Email: privacy@heritagetravels.lk</div>
          </div>
        </section>

      </div>

      <div className="pt-8 border-t border-[#DCD4C6]">
        <Link
          href="/terms-and-conditions"
          className="text-xs uppercase tracking-wider text-[#6C7357] hover:underline"
        >
          View Terms & Conditions →
        </Link>
      </div>

    </div>
  );
}
