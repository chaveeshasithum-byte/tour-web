'use client';

import React from 'react';
import { useTrip } from '@/context/TripContext';
import { VEHICLES } from '@/data/vehicles';
import { StepProgress } from '@/components/planner/StepProgress';
import { BudgetBar } from '@/components/planner/BudgetBar';
import { 
  Car, 
  Users, 
  Briefcase, 
  Check, 
  ShieldCheck, 
  AlertTriangle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { formatCurrency } from '@/lib/calculations';

export default function PlanTransportPage() {
  const { 
    state, 
    duration, 
    setSelectedVehicle 
  } = useTrip();

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Step Progress */}
      <StepProgress />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 4 of 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Private Vehicle & Chauffeur Guide
          </h1>
          <p className="text-stone-600 text-sm">
            Travel stress-free across Sri Lanka with your dedicated certified private driver.
          </p>
        </div>

        {/* IMPORTANT MANDATORY BUSINESS RULE BANNER */}
        <div className="bg-amber-900/10 border-2 border-amber-800/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white flex items-center justify-center shrink-0 shadow">
            <Car className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-800 text-white text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Heritage Travels Service Standard</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 pt-1">
              All Journeys Include a Dedicated Private Driver — We Do Not Offer Self-Drive
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
              Sri Lankan roads, mountain passes, and rural wildlife areas require intimate local navigational expertise. 
              Every private vehicle comes with an experienced, English-speaking certified chauffeur guide whose fuel, highway tolls, 
              meals, and overnight accommodations are 100% included in the daily rate.
            </p>
          </div>
        </div>

        {/* Vehicle Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VEHICLES.map((v) => {
            const isSelected = state.selectedVehicle?.id === v.id;
            const totalTransportCost = v.dailyRateUSD * duration.days;

            return (
              <div
                key={v.id}
                onClick={() => setSelectedVehicle(v)}
                className={`cursor-pointer bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-800 ring-2 ring-amber-800/20 shadow-xl'
                    : 'border-stone-200 hover:border-stone-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={v.imageUrl}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      ${v.dailyRateUSD} / day
                    </div>

                    <div className="absolute top-3 left-3 bg-amber-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Chauffeur Included
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-stone-900">
                        {v.name}
                      </h3>
                      <p className="text-xs text-amber-800 font-medium mt-1">
                        {v.tagline}
                      </p>
                    </div>

                    {/* Capacity Specs */}
                    <div className="flex items-center gap-4 text-xs text-stone-600 py-2 border-y border-stone-100">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-amber-800" />
                        <span>Up to {v.capacityAdults} passengers</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-amber-800" />
                        <span>{v.capacityLuggage} large bags</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 text-xs text-stone-600">
                      {v.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Total calculation for trip days */}
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-stone-500 block">
                          ${v.dailyRateUSD} / day × {duration.days} Days
                        </span>
                        <span className="text-xs font-semibold text-stone-800">
                          Total Chauffeur & Vehicle Allocation:
                        </span>
                      </div>
                      <span className="text-lg font-serif font-bold text-amber-900">
                        {formatCurrency(totalTransportCost, state.currency)}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Selection Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVehicle(v);
                    }}
                    className={`w-full py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition ${
                      isSelected
                        ? 'bg-amber-800 text-white shadow'
                        : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Selected for Your Entire Journey</span>
                      </>
                    ) : (
                      <>
                        <span>Select This Vehicle</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Persistent Budget Bar */}
      <BudgetBar
        prevStepHref="/plan/hotels"
        nextStepHref="/plan/experiences"
        nextStepLabel="Next: Select Experiences"
      />
    </div>
  );
}
