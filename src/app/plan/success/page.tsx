'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTrip } from '@/context/TripContext';
import { formatCurrency } from '@/lib/calculations';
import { 
  CheckCircle2, 
  Calendar, 
  Video, 
  ArrowRight, 
  Home, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Download,
  Mail,
  MessageSquare
} from 'lucide-react';

function PlanSuccessContent() {
  const searchParams = useSearchParams();
  const urlTripId = searchParams.get('tripId');
  const { state, costSummary, duration } = useTrip();

  const tripId = urlTripId || state.submittedTripId || 'SL-10001';
  const [copied, setCopied] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultBooked, setConsultBooked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(tripId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      
      {/* 1. Main Success Celebration Banner */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Journey Proposal Received
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900">
            Your Journey Has Been Submitted
          </h1>
          <p className="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">
            Thank you for planning with Heritage Travels! Our Colombo reservation specialists have received your proposed itinerary 
            and are verifying hotel room availability and private vehicle allocation.
          </p>
        </div>

        {/* Unique Trip ID Box */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border-2 border-dashed border-amber-300 max-w-md mx-auto space-y-2">
          <span className="text-[11px] uppercase font-bold text-amber-900 tracking-wider block">
            Official Reference Number
          </span>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl sm:text-4xl font-serif font-black tracking-wider text-amber-950">
              {tripId}
            </span>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white border border-amber-200 text-amber-900 hover:bg-amber-100 transition"
              title="Copy Trip ID"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-[11px] text-amber-800">
            Quote this reference in any correspondence with our concierge desk.
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="pt-6 border-t border-stone-100 text-left space-y-4">
          <h3 className="font-serif font-bold text-stone-900 text-base">
            What Happens Next?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
              <span className="font-bold text-stone-900 block">1. Inventory Audit</span>
              <p className="leading-relaxed">
                Our reservations team contacts the chosen boutique villas to secure rooms and preferred floor levels.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
              <span className="font-bold text-stone-900 block">2. Driver Assignment</span>
              <p className="leading-relaxed">
                We select and assign a certified English-speaking chauffeur guide tailored to your route and travel party.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
              <span className="font-bold text-stone-900 block">3. Final Consultation</span>
              <p className="leading-relaxed">
                We present confirmed seasonal rates and finalize any bespoke requests via phone or Google Meet.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setShowConsultModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold px-6 py-3.5 rounded-xl shadow transition text-sm"
          >
            <Video className="w-4 h-4" />
            <span>Schedule a Consultation</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold px-6 py-3.5 rounded-xl transition text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Snapshot of Submitted Trip */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <h3 className="font-serif font-bold text-xl text-white">
            Trip Summary Snapshot
          </h3>
          <span className="text-xs text-amber-400 font-medium">
            Status: Pending Team Review
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300">
          <div>
            <span className="text-stone-500 block">Duration</span>
            <strong className="text-white text-sm">{duration.days} Days / {duration.nights} Nights</strong>
          </div>
          <div>
            <span className="text-stone-500 block">Party</span>
            <strong className="text-white text-sm">{state.details.adults} Travelers</strong>
          </div>
          <div>
            <span className="text-stone-500 block">Vehicle</span>
            <strong className="text-white text-sm">{state.selectedVehicle?.name || 'Private Chauffeur'}</strong>
          </div>
          <div>
            <span className="text-stone-500 block">Estimated Investment</span>
            <strong className="text-amber-400 text-sm">
              {formatCurrency(costSummary.totalEstimatedUSD, state.currency)}
            </strong>
          </div>
        </div>

        <div className="text-xs text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
          <span>A copy has been recorded for our Colombo travel desk.</span>
          <a
            href="mailto:concierge@heritagetravels.lk"
            className="text-amber-300 hover:underline flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Need immediate assistance?</span>
          </a>
        </div>
      </div>

      {/* Consultation Scheduling Modal (Interactive) */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-amber-800" />
                <span>Schedule Video Consultation</span>
              </h3>
              <button
                onClick={() => setShowConsultModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {consultBooked ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-stone-900">
                  Consultation Request Logged!
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We will email you a calendar invitation with a Google Meet link for your selected time slot.
                </p>
                <button
                  onClick={() => setShowConsultModal(false)}
                  className="bg-stone-900 text-white font-semibold text-xs px-5 py-2.5 rounded-xl mt-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <p className="text-stone-600 leading-relaxed">
                  Arrange a 20-minute video session with our senior Sri Lanka tour director to discuss your itinerary <strong>{tripId}</strong>.
                </p>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-10-12"
                    className="w-full p-2.5 border border-stone-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Preferred Time Window (GMT / IST)
                  </label>
                  <select className="w-full p-2.5 border border-stone-300 rounded-xl bg-white">
                    <option>Morning (09:00 – 12:00 IST / 03:30 – 06:30 GMT)</option>
                    <option>Afternoon (14:00 – 17:00 IST / 08:30 – 11:30 GMT)</option>
                    <option>Evening (18:00 – 21:00 IST / 12:30 – 15:30 GMT)</option>
                  </select>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultBooked(true)}
                    className="flex-1 bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 rounded-xl transition"
                  >
                    Confirm Consultation Slot
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default function PlanSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-sm text-stone-500">
          Loading submission details...
        </div>
      }
    >
      <PlanSuccessContent />
    </Suspense>
  );
}
