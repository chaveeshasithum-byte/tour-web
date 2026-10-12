'use client';

import React from 'react';
import { useTrip } from '@/context/TripContext';
import { DESTINATIONS } from '@/data/destinations';
import { StepProgress } from '@/components/planner/StepProgress';
import { BudgetBar } from '@/components/planner/BudgetBar';
import { Check, MapPin, Clock, ArrowRight, Info } from 'lucide-react';

export default function PlanDestinationsPage() {
  const { state, toggleDestination } = useTrip();

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Progress */}
      <StepProgress />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 2 of 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Select Your Destinations
          </h1>
          <p className="text-stone-600 text-sm">
            Choose the major Sri Lankan regions you want to experience. 
            We automatically assemble them into a logical, scenic driving route with your private chauffeur.
          </p>
        </div>

        {/* Selected count banner */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-900 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-800 shrink-0" />
            <span>
              <strong>{state.selectedDestinations.length} Region(s) Selected:</strong>{' '}
              {state.selectedDestinations.length === 0
                ? 'Please select at least 1 or 2 regions to continue.'
                : state.selectedDestinations
                    .map((s) => DESTINATIONS.find((d) => d.slug === s)?.name)
                    .join(' → ')}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-lg shrink-0">
            Click cards to toggle
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => {
            const isSelected = state.selectedDestinations.includes(dest.slug);

            return (
              <div
                key={dest.id}
                onClick={() => toggleDestination(dest.slug)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-800 bg-white ring-2 ring-amber-800/10 shadow-lg'
                    : 'border-stone-200 bg-white hover:border-stone-400 shadow-sm'
                }`}
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{dest.recommendedStay}</span>
                    </div>

                    {/* Selection Pill */}
                    <div
                      className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-amber-800 text-white scale-105 shadow'
                          : 'bg-white/80 text-stone-400 backdrop-blur-sm'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-lg font-serif font-bold text-stone-900">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-medium line-clamp-1">
                      {dest.tagline}
                    </p>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {dest.highlights.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer button */}
                <div className="p-5 pt-0">
                  <div
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold text-center transition ${
                      isSelected
                        ? 'bg-amber-800 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected ? '✓ Selected in Route' : '+ Select Destination'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Persistent Budget Bar */}
      <BudgetBar
        prevStepHref="/plan/details"
        nextStepHref="/plan/hotels"
        nextStepLabel="Next: Select Hotels"
      />
    </div>
  );
}
