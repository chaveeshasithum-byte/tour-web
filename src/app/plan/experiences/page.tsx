'use client';

import React from 'react';
import { useTrip } from '@/context/TripContext';
import { EXPERIENCES } from '@/data/experiences';
import { StepProgress } from '@/components/planner/StepProgress';
import { BudgetBar } from '@/components/planner/BudgetBar';
import { 
  Compass, 
  Clock, 
  MapPin, 
  Check, 
  Sparkles, 
  Plus, 
  X,
  ArrowRight
} from 'lucide-react';
import { formatCurrency } from '@/lib/calculations';

export default function PlanExperiencesPage() {
  const { 
    state, 
    toggleExperience 
  } = useTrip();

  // Highlight recommended experiences that match traveler's selected destinations
  const recommendedExperiences = EXPERIENCES.filter((e) =>
    state.selectedDestinations.includes(e.destinationSlug)
  );

  const otherExperiences = EXPERIENCES.filter(
    (e) => !state.selectedDestinations.includes(e.destinationSlug)
  );

  const adults = state.details.adults;

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Step Progress */}
      <StepProgress />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 5 of 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Select Your Experiences
          </h1>
          <p className="text-stone-600 text-sm">
            Curate distinctive activities matched to your chosen regions. 
            All permits, tracker naturalists, and equipment will be coordinated by our travel team.
          </p>
        </div>

        {/* Selected counter banner */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs">
            <Compass className="w-4 h-4 text-amber-800" />
            <span className="font-semibold text-stone-800">
              {state.selectedExperiences.length} Experience(s) Selected
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-500">
              For {adults} Traveler(s)
            </span>
          </div>

          <span className="text-xs text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-lg">
            Adding or removing automatically updates your budget
          </span>
        </div>

        {/* SECTION 1: Recommended For Your Chosen Regions */}
        {recommendedExperiences.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <h2 className="text-lg font-serif font-bold text-stone-900">
                Recommended For Your Selected Destinations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedExperiences.map((exp) => {
                const isSelected = state.selectedExperiences.includes(exp.id);
                const totalItemCost = exp.pricePerPersonUSD * adults;

                return (
                  <div
                    key={exp.id}
                    onClick={() => toggleExperience(exp.id)}
                    className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-800 bg-white ring-2 ring-amber-800/15 shadow-xl'
                        : 'border-stone-200 bg-white hover:border-stone-300 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Photo Header */}
                      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                        <img
                          src={exp.imageUrl}
                          alt={exp.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-amber-900/90 text-amber-100 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          {exp.category}
                        </div>

                        <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          ~${exp.pricePerPersonUSD} / person
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-[11px] text-stone-500">
                          <span className="flex items-center gap-1 font-semibold text-amber-900">
                            <MapPin className="w-3 h-3 text-amber-700" />
                            <span>{exp.region}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </span>
                        </div>

                        <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                          {exp.name}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="p-2.5 rounded-xl bg-stone-50 flex items-center justify-between text-xs text-stone-600 mt-2">
                          <span>${exp.pricePerPersonUSD} × {adults} adult(s)</span>
                          <span className="font-bold text-stone-900">
                            ${totalItemCost} total
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExperience(exp.id);
                        }}
                        className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition ${
                          isSelected
                            ? 'bg-emerald-700 text-white shadow'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>Added to Proposed Journey</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-stone-600" />
                            <span>Include in Trip</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: Explore Additional Island Experiences */}
        {otherExperiences.length > 0 && (
          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-serif font-bold text-stone-900">
              Other Island Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherExperiences.map((exp) => {
                const isSelected = state.selectedExperiences.includes(exp.id);
                const totalItemCost = exp.pricePerPersonUSD * adults;

                return (
                  <div
                    key={exp.id}
                    onClick={() => toggleExperience(exp.id)}
                    className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-800 bg-white ring-2 ring-amber-800/15 shadow-xl'
                        : 'border-stone-200 bg-white hover:border-stone-300 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                        <img
                          src={exp.imageUrl}
                          alt={exp.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          {exp.category}
                        </div>
                        <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          ~${exp.pricePerPersonUSD}
                        </div>
                      </div>

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-[11px] text-stone-500">
                          <span className="flex items-center gap-1 font-semibold text-amber-900">
                            <MapPin className="w-3 h-3 text-amber-700" />
                            <span>{exp.region}</span>
                          </span>
                          <span>•</span>
                          <span>{exp.duration}</span>
                        </div>

                        <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                          {exp.name}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExperience(exp.id);
                        }}
                        className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition ${
                          isSelected
                            ? 'bg-emerald-700 text-white shadow'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? '✓ Added' : '+ Include in Trip'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Persistent Budget Bar */}
      <BudgetBar
        prevStepHref="/plan/transport"
        nextStepHref="/plan/review"
        nextStepLabel="Next: Review Journey"
      />
    </div>
  );
}
