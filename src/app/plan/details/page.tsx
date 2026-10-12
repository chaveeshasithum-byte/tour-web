'use client';

import React from 'react';
import { useTrip } from '@/context/TripContext';
import { StepProgress } from '@/components/planner/StepProgress';
import { BudgetBar } from '@/components/planner/BudgetBar';
import { Currency } from '@/types/trip';
import { 
  Calendar, 
  Users, 
  Bed, 
  Wallet, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function TripDetailsPage() {
  const { 
    state, 
    duration, 
    updateDetails, 
    setPlanningMode, 
    setCurrency, 
    setTargetBudget 
  } = useTrip();

  const isBudgetMode = state.planningMode === 'BUDGET';

  const handleArrivalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arrival = e.target.value;
    updateDetails({ arrivalDate: arrival });
    // auto adjust departure if invalid
    if (new Date(state.details.departureDate) <= new Date(arrival)) {
      const nextDate = new Date(arrival);
      nextDate.setDate(nextDate.getDate() + 7);
      updateDetails({ departureDate: nextDate.toISOString().split('T')[0] });
    }
  };

  const handleDepartureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateDetails({ departureDate: e.target.value });
  };

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Step Progress Bar */}
      <StepProgress />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 1 of 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Trip Dates & Party Details
          </h1>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Specify your expected travel window and travel party size so we can accurately calibrate accommodations and private vehicle capacity.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-10">
          
          {/* Mode Switcher pill */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div>
              <span className="text-xs font-semibold text-stone-800 block">
                Selected Planning Approach:
              </span>
              <span className="text-xs text-stone-500">
                {isBudgetMode ? 'Fixed budget ceiling with remaining balance' : 'Open running cost estimate'}
              </span>
            </div>

            <div className="inline-flex rounded-xl p-1 bg-stone-200">
              <button
                type="button"
                onClick={() => setPlanningMode('BUDGET')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isBudgetMode
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Fixed Budget Mode
              </button>
              <button
                type="button"
                onClick={() => setPlanningMode('NO_BUDGET')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  !isBudgetMode
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                No-Budget Mode
              </button>
            </div>
          </div>

          {/* Budget Input Section (If in Budget Mode) */}
          {isBudgetMode && (
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-amber-800" />
                <h3 className="text-base font-serif font-bold text-stone-900">
                  What&apos;s your total trip budget?
                </h3>
              </div>
              <p className="text-xs text-stone-600">
                Our calculation engine will automatically deduct hotels, private driver, and excursions from this target.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Budget (Estimated Total)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-stone-400 font-bold text-sm">$</span>
                    <input
                      type="number"
                      min={500}
                      step={100}
                      value={state.targetBudgetUSD}
                      onChange={(e) => setTargetBudget(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white"
                      placeholder="2500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Currency
                  </label>
                  <select
                    value={state.currency}
                    onChange={(e) => setCurrency(e.target.value as Currency)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="AUD">AUD (A$)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Travel Dates */}
          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-800" />
              <span>Travel Dates & Automatic Duration Calculation</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Expected Arrival Date *
                </label>
                <input
                  type="date"
                  value={state.details.arrivalDate}
                  onChange={handleArrivalChange}
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Expected Departure Date *
                </label>
                <input
                  type="date"
                  value={state.details.departureDate}
                  min={state.details.arrivalDate}
                  onChange={handleDepartureChange}
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white"
                />
              </div>
            </div>

            {/* Duration Display Box */}
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0" />
                <div>
                  <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider block">
                    Calculated Duration
                  </span>
                  <span className="text-base font-serif font-bold text-stone-900">
                    {duration.days} Days / {duration.nights} Nights
                  </span>
                </div>
              </div>

              <span className="text-xs text-stone-500 bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                Chauffeur vehicle assigned for {duration.days} days
              </span>
            </div>
          </div>

          {/* Party Size & Rooms */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-800" />
              <span>Travel Party & Room Allocation</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Adults */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-800">Adults (12+ yrs)</span>
                  <span className="text-base font-bold text-stone-900">{state.details.adults}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => updateDetails({ adults: Math.max(1, state.details.adults - 1) })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => updateDetails({ adults: state.details.adults + 1 })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-800">Children (&lt;12 yrs)</span>
                  <span className="text-base font-bold text-stone-900">{state.details.children}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => updateDetails({ children: Math.max(0, state.details.children - 1) })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => updateDetails({ children: state.details.children + 1 })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Number of Rooms */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-800">Rooms Required</span>
                  <span className="text-base font-bold text-stone-900">{state.details.rooms}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => updateDetails({ rooms: Math.max(1, state.details.rooms - 1) })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => updateDetails({ rooms: state.details.rooms + 1 })}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Sticky Budget Bar with Next Action */}
      <BudgetBar
        prevStepHref="/plan"
        nextStepHref="/plan/destinations"
        nextStepLabel="Next: Select Destinations"
      />
    </div>
  );
}
