'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, Calendar, ArrowRight, ShieldCheck, Mail, Phone, Compass } from 'lucide-react';

export default function EnquiryConfirmationPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading confirmation...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const refCodeParam = searchParams.get('ref') || 'HT-2026-CONFIRMED';

  const [savedData, setSavedData] = useState<any>(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem('heritage_latest_enquiry');
      if (data) {
        setSavedData(JSON.parse(data));
      }
    } catch (e) {
      console.warn('Could not read saved enquiry from localStorage', e);
    }
  }, []);

  return (
    <div className="space-y-12 pb-24 pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Confirmation Banner */}
      <div className="bg-[#EBE5DA]/60 border border-[#DCD4C6] rounded-xs p-8 sm:p-12 text-center space-y-5 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-[#6C7357] text-white flex items-center justify-center mx-auto shadow-sm">
          <Check className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Enquiry Received
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
            Your Journey Has Begun
          </h1>
          <p className="text-xs sm:text-sm text-[#77756D] font-light max-w-md mx-auto leading-relaxed">
            Thank you for trusting Heritage Travels. Your travel preferences and dates have been safely registered with our Colombo destination team.
          </p>
        </div>

        <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs inline-block text-xs font-mono text-[#252720]">
          Proposal Reference: <strong className="text-[#6C7357] text-sm ml-1">{refCodeParam}</strong>
        </div>
      </div>

      {/* Structured Receipt Summary (If available) */}
      {savedData && (
        <div className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-serif font-medium text-[#252720] border-b border-[#DCD4C6] pb-3">
            Summary of Submitted Selections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#77756D] font-light">
            <div>
              <span className="font-semibold text-[#252720] block">Lead Traveller:</span>
              <p>{savedData.fullName} ({savedData.email}) • {savedData.country}</p>
            </div>

            <div>
              <span className="font-semibold text-[#252720] block">Travel Window:</span>
              <p>{savedData.arrivalDate} to {savedData.departureDate} ({savedData.calculatedDuration?.days || 0} Days)</p>
            </div>

            <div>
              <span className="font-semibold text-[#252720] block">Party Size & Pace:</span>
              <p>{savedData.adults} Adults {savedData.children > 0 ? `• ${savedData.children} Children` : ''} • {savedData.travelPace} Pace</p>
            </div>

            <div>
              <span className="font-semibold text-[#252720] block">Indicative Budget:</span>
              <p>{savedData.budgetRange} ({savedData.currency})</p>
            </div>

            <div className="sm:col-span-2">
              <span className="font-semibold text-[#252720] block">Selected Cultural Focus:</span>
              <p>{savedData.interests?.join(', ')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps Card */}
      <div className="bg-[#252720] text-[#F5F1E9] rounded-xs p-8 sm:p-10 space-y-6 border border-[#3D4034]">
        <h2 className="text-2xl font-serif font-normal">
          What Happens Next?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#C5C1B6] font-light">
          <div className="space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#6C7357] text-white flex items-center justify-center font-mono text-[11px]">1</span>
            <strong className="block text-white font-serif text-sm">Specialist Review</strong>
            <p className="leading-relaxed">
              A certified Sri Lankan destination specialist will analyze your route, driving logistics, and seasonal weather.
            </p>
          </div>

          <div className="space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#6C7357] text-white flex items-center justify-center font-mono text-[11px]">2</span>
            <strong className="block text-white font-serif text-sm">Custom Proposal</strong>
            <p className="leading-relaxed">
              Within 24 business hours, you will receive a detailed PDF proposal with day-by-day routing, hotel options, and transparent pricing.
            </p>
          </div>

          <div className="space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#6C7357] text-white flex items-center justify-center font-mono text-[11px]">3</span>
            <strong className="block text-white font-serif text-sm">Direct Consultation</strong>
            <p className="leading-relaxed">
              We refine every detail together over email or WhatsApp until the itinerary perfectly matches your vision.
            </p>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#DCD4C6]">
        <Link
          href="/"
          className="text-xs uppercase tracking-wider text-[#252720] hover:text-[#6C7357] underline underline-offset-4 font-medium"
        >
          ← Return to Homepage
        </Link>
        <div className="flex gap-4">
          <Link
            href="/destinations"
            className="text-xs uppercase tracking-wider text-[#6C7357] hover:underline"
          >
            Explore Destinations
          </Link>
          <Link
            href="/journal"
            className="text-xs uppercase tracking-wider text-[#6C7357] hover:underline"
          >
            Read the Travel Journal
          </Link>
        </div>
      </div>

    </div>
  );
}
