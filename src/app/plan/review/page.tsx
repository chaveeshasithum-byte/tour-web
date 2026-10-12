'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTrip } from '@/context/TripContext';
import { StepProgress } from '@/components/planner/StepProgress';
import { DESTINATIONS } from '@/data/destinations';
import { EXPERIENCES } from '@/data/experiences';
import { formatCurrency } from '@/lib/calculations';
import { 
  Compass, 
  Calendar, 
  Users, 
  Bed, 
  Car, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Edit3, 
  Clock, 
  AlertCircle,
  Send,
  Loader2
} from 'lucide-react';

export default function PlanReviewPage() {
  const router = useRouter();
  const { 
    state, 
    costSummary, 
    duration, 
    roughItinerary, 
    submitTrip, 
    setCustomerContact 
  } = useTrip();

  const [contact, setContact] = useState({
    fullName: state.customerContact?.fullName || '',
    email: state.customerContact?.email || '',
    phone: state.customerContact?.phone || '',
    country: state.customerContact?.country || '',
    specialRequests: state.customerContact?.specialRequests || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const isBudgetMode = state.planningMode === 'BUDGET';
  const currency = state.currency;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.fullName || !contact.email) {
      setFormError('Please enter your full name and email address to receive your Trip ID and itinerary.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      setCustomerContact(contact);
      const tripId = await submitTrip(contact);
      router.push(`/plan/success?tripId=${tripId}`);
    } catch {
      setFormError('An error occurred submitting your trip. Please try again.');
      setIsSubmitting(false);
    }
  };

  const selectedDestsList = state.selectedDestinations
    .map((slug) => DESTINATIONS.find((d) => d.slug === slug)?.name)
    .filter(Boolean);

  const selectedExpsList = state.selectedExperiences
    .map((id) => EXPERIENCES.find((e) => e.id === id))
    .filter(Boolean) as typeof EXPERIENCES;

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Progress */}
      <StepProgress />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 6 of 6 — Final Review
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900">
            Your Sri Lanka Journey
          </h1>
          <p className="text-stone-600 text-sm">
            Review your proposed journey, day-by-day outline, and calculated estimated costs before submitting to our travel team.
          </p>
        </div>

        {/* 1. KEY TRIP DETAILS SUMMARY CARD */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-800" />
              <span>Trip Details & Route</span>
            </h2>
            <Link
              href="/plan/details"
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 bg-stone-50 rounded-xl">
              <span className="text-stone-400 block font-medium">Duration</span>
              <strong className="text-stone-900 text-sm font-serif block mt-0.5">
                {duration.days} Days / {duration.nights} Nights
              </strong>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl">
              <span className="text-stone-400 block font-medium">Travel Dates</span>
              <strong className="text-stone-900 text-xs block mt-0.5">
                {state.details.arrivalDate} → {state.details.departureDate}
              </strong>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl">
              <span className="text-stone-400 block font-medium">Travelers</span>
              <strong className="text-stone-900 text-sm font-serif block mt-0.5">
                {state.details.adults} Adults {state.details.children > 0 && `• ${state.details.children} Kids`}
              </strong>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl">
              <span className="text-stone-400 block font-medium">Rooms Allocated</span>
              <strong className="text-stone-900 text-sm font-serif block mt-0.5">
                {state.details.rooms} Room(s)
              </strong>
            </div>
          </div>

          {/* Route path */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900 block mb-1">
                Scenic Proposed Driving Route:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-stone-800 font-medium">
                {selectedDestsList.length > 0 ? (
                  selectedDestsList.map((name, i) => (
                    <React.Fragment key={i}>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-amber-200 shadow-2xs font-serif font-bold text-stone-900">
                        {name}
                      </span>
                      {i < selectedDestsList.length - 1 && (
                        <span className="text-amber-700 font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <span className="text-stone-500 italic">No specific regions chosen</span>
                )}
              </div>
            </div>

            <Link
              href="/plan/destinations"
              className="text-xs font-semibold text-amber-800 hover:underline shrink-0"
            >
              Change Regions
            </Link>
          </div>
        </div>

        {/* 2. HOTELS & VEHICLE SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Hotels Card */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <Bed className="w-4 h-4 text-amber-800" />
                <span>Selected Accommodations</span>
              </h3>
              <Link
                href="/plan/hotels"
                className="text-xs text-amber-800 font-semibold hover:underline"
              >
                Edit
              </Link>
            </div>

            <div className="space-y-3">
              {Object.keys(state.selectedHotels).length > 0 ? (
                Object.values(state.selectedHotels).map(({ hotel, nights, rooms }) => {
                  const itemCost = hotel.pricePerNightUSD * nights * rooms;
                  return (
                    <div
                      key={hotel.id}
                      className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between text-xs"
                    >
                      <div>
                        <strong className="block text-stone-900 font-serif">{hotel.name}</strong>
                        <span className="text-[11px] text-stone-500">
                          {hotel.destinationName} • {nights}N × {rooms}R (${hotel.pricePerNightUSD}/nt)
                        </span>
                      </div>
                      <span className="font-bold text-stone-900">
                        ${itemCost}
                      </span>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-stone-500 italic py-2">
                  No specific hotels selected yet. You can add them or allow our team to recommend boutique villas.
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-between text-xs font-semibold text-stone-800">
              <span>Accommodations Subtotal:</span>
              <span className="text-stone-900">{formatCurrency(costSummary.hotelTotalUSD, currency)}</span>
            </div>
          </div>

          {/* Vehicle & Chauffeur Card */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-800" />
                <span>Dedicated Chauffeur & Vehicle</span>
              </h3>
              <Link
                href="/plan/transport"
                className="text-xs text-amber-800 font-semibold hover:underline"
              >
                Change
              </Link>
            </div>

            {state.selectedVehicle ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                  <strong className="block text-stone-900 font-serif text-sm">
                    {state.selectedVehicle.name}
                  </strong>
                  <span className="text-[11px] text-emerald-700 font-semibold block">
                    ✓ Chauffeur guide, fuel, toll highway passes & driver meals covered
                  </span>
                  <span className="text-stone-500 block">
                    ${state.selectedVehicle.dailyRateUSD}/day × {duration.days} Days
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-stone-500 italic">No vehicle selected.</p>
            )}

            <div className="pt-2 border-t border-stone-100 flex justify-between text-xs font-semibold text-stone-800">
              <span>Vehicle & Chauffeur Subtotal:</span>
              <span className="text-stone-900">{formatCurrency(costSummary.transportTotalUSD, currency)}</span>
            </div>
          </div>

        </div>

        {/* 3. SELECTED EXPERIENCES */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-800" />
              <span>Selected Curated Experiences ({selectedExpsList.length})</span>
            </h3>
            <Link
              href="/plan/experiences"
              className="text-xs text-amber-800 font-semibold hover:underline"
            >
              Add / Remove Experiences
            </Link>
          </div>

          {selectedExpsList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {selectedExpsList.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between"
                >
                  <div>
                    <strong className="block text-stone-900 font-medium">{exp.name}</strong>
                    <span className="text-[11px] text-stone-500">
                      {exp.region} • {exp.duration}
                    </span>
                  </div>
                  <span className="font-bold text-stone-900">
                    ${exp.pricePerPersonUSD * state.details.adults}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-stone-500 italic">No experiences added yet.</p>
          )}

          <div className="pt-2 border-t border-stone-100 flex justify-between text-xs font-semibold text-stone-800">
            <span>Experiences & Activities Subtotal:</span>
            <span className="text-stone-900">{formatCurrency(costSummary.experiencesTotalUSD, currency)}</span>
          </div>
        </div>

        {/* 4. ROUGH ITINERARY (AUTOMATICALLY GENERATED DAY-BY-DAY) */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Rough Day-by-Day Itinerary
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Preliminary route schedule synthesized from your selected destinations and travel window.
            </p>
          </div>

          <div className="space-y-4">
            {roughItinerary.map((day) => (
              <div
                key={day.dayNumber}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2 hover:border-amber-200 transition"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-serif font-bold text-amber-950">
                    {day.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-stone-500 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                    Overnight: {day.overnightStay}
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-stone-600 pl-4 list-disc marker:text-amber-700">
                  {day.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 5. TRANSPARENT COST ENGINE SUMMARY */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Transparent Cost Calculations
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Estimated Trip Investment
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-800 text-stone-300">
              Currency: {currency}
            </span>
          </div>

          {/* Numbers */}
          {isBudgetMode ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center p-4 bg-stone-800/80 rounded-2xl border border-stone-700">
              <div>
                <span className="text-xs text-stone-400 block">Starting Budget Target</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {formatCurrency(state.targetBudgetUSD, currency)}
                </span>
              </div>
              <div className="border-y sm:border-y-0 sm:border-x border-stone-700 py-2 sm:py-0">
                <span className="text-xs text-stone-400 block">Selected Items Total</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400">
                  {formatCurrency(costSummary.totalEstimatedUSD, currency)}
                </span>
              </div>
              <div>
                <span className="text-xs text-stone-400 block">Remaining Budget Balance</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-emerald-400">
                  {formatCurrency(costSummary.remainingBudgetUSD || 0, currency)}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-stone-800/80 rounded-2xl border border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Calculated Proposed Total</span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                  {formatCurrency(costSummary.totalEstimatedUSD, currency)}
                </span>
                <span className="text-[11px] text-stone-400 block mt-1">
                  For {state.details.adults} traveler(s) • {duration.days} days private service
                </span>
              </div>
              <div className="text-xs text-stone-300 space-y-1 text-right">
                <div>Hotels: {formatCurrency(costSummary.hotelTotalUSD, currency)}</div>
                <div>Vehicle & Driver: {formatCurrency(costSummary.transportTotalUSD, currency)}</div>
                <div>Experiences: {formatCurrency(costSummary.experiencesTotalUSD, currency)}</div>
              </div>
            </div>
          )}

          {/* CRITICAL BUSINESS NOTICE */}
          <div className="p-4 rounded-xl bg-amber-950/50 border border-amber-800/60 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">
                Official Business Pricing Disclaimer
              </strong>
              This is an <strong>estimated cost</strong>. The traveler is creating a <strong>proposed journey</strong>. 
              Final availability of selected hotels, vehicles, and confirmed pricing will be manually verified by our Colombo travel specialists.
            </div>
          </div>
        </div>

        {/* 6. TRAVELER CONTACT & SUBMISSION FORM */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Submit Your Proposed Journey to Our Travel Team
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Enter your contact details. You will receive an official Trip ID (e.g. SL-10001) and our reservation team will review room inventory.
            </p>
          </div>

          {formError && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sir Arthur Conan Doyle"
                  value={contact.fullName}
                  onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address (For Trip Reference) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. traveler@example.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  WhatsApp or Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +44 7123 456789"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Country of Residence
                </label>
                <input
                  type="text"
                  placeholder="e.g. United Kingdom, Australia, United States"
                  value={contact.country}
                  onChange={(e) => setContact({ ...contact, country: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention any child car seats, dietary preferences, milestone anniversaries, or specific hotel wishes..."
                value={contact.specialRequests}
                onChange={(e) => setContact({ ...contact, specialRequests: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
              <Link
                href="/plan/experiences"
                className="text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                ← Back to Edit Experiences
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition text-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Journey...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Proposed Journey</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
