'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTrip } from '@/context/TripContext';
import { formatCurrency } from '@/lib/calculations';
import { 
  Wallet, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ChevronUp, 
  ChevronDown, 
  ArrowRight,
  Bed,
  Car,
  Compass,
  Calendar
} from 'lucide-react';

interface BudgetBarProps {
  variant?: 'sticky-footer' | 'sidebar-card' | 'compact-header';
  nextStepHref?: string;
  nextStepLabel?: string;
  prevStepHref?: string;
}

export function BudgetBar({
  variant = 'sticky-footer',
  nextStepHref,
  nextStepLabel = 'Next Step',
  prevStepHref,
}: BudgetBarProps) {
  const { state, costSummary, duration } = useTrip();
  const [isExpanded, setIsExpanded] = useState(false);

  const isBudgetMode = state.planningMode === 'BUDGET';
  const currency = state.currency;

  const startingBudget = state.targetBudgetUSD;
  const totalCost = costSummary.totalEstimatedUSD;
  const remaining = costSummary.remainingBudgetUSD ?? (startingBudget - totalCost);
  const isOverBudget = isBudgetMode && remaining < 0;

  const percentUsed = isBudgetMode && startingBudget > 0 
    ? Math.min(100, Math.max(0, Math.round((totalCost / startingBudget) * 100))) 
    : 0;

  // Breakdown counts
  const hotelsCount = Object.keys(state.selectedHotels).length;
  const destsCount = state.selectedDestinations.length;
  const expsCount = state.selectedExperiences.length;
  const hasVehicle = !!state.selectedVehicle;

  // Render for Sidebar Card layout
  if (variant === 'sidebar-card') {
    return (
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-6 sticky top-36">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                {isBudgetMode ? 'Budget Tracker' : 'Live Estimate'}
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                {isBudgetMode ? 'Your Trip Budget' : 'Current Estimate'}
              </h3>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded bg-stone-100 text-stone-600">
            {duration.days}D / {duration.nights}N
          </span>
        </div>

        {/* Numbers Section */}
        {isBudgetMode ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div>
                <span className="text-[11px] text-stone-700 block">Starting</span>
                <span className="text-sm font-bold text-stone-800">
                  {formatCurrency(startingBudget, currency)}
                </span>
              </div>
              <div className="border-x border-stone-200">
                <span className="text-[11px] text-stone-700 block">Selected</span>
                <span className="text-sm font-bold text-amber-800">
                  {formatCurrency(totalCost, currency)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-stone-700 block">Remaining</span>
                <span
                  className={`text-sm font-bold ${
                    isOverBudget ? 'text-rose-600' : 'text-emerald-700'
                  }`}
                >
                  {formatCurrency(remaining, currency)}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium text-stone-700">
                <span>Budget Consumed</span>
                <span className={isOverBudget ? 'text-rose-600 font-bold' : 'text-stone-700'}>
                  {percentUsed}% {isOverBudget && '(Exceeded)'}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isOverBudget
                      ? 'bg-rose-500'
                      : percentUsed > 85
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min(100, (totalCost / startingBudget) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200/60">
            <span className="text-xs uppercase font-semibold text-amber-800 tracking-wider">
              Total Proposed Estimate
            </span>
            <div className="text-3xl font-serif font-bold text-stone-900 mt-1">
              {formatCurrency(totalCost, currency)}
            </div>
            <p className="text-[11px] text-stone-700 mt-1">
              Real-time calculations based on {duration.days} days & {state.details.adults} traveler(s).
            </p>
          </div>
        )}

        {/* Cost Breakdown */}
        <div className="space-y-3 pt-2 border-t border-stone-100 text-sm">
          <div className="flex items-center justify-between text-stone-600">
            <span className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-stone-400" />
              <span>Hotels ({hotelsCount})</span>
            </span>
            <span className="font-semibold text-stone-900">
              {formatCurrency(costSummary.hotelTotalUSD, currency)}
            </span>
          </div>

          <div className="flex items-center justify-between text-stone-600">
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4 text-stone-400" />
              <span>Private Chauffeur ({hasVehicle ? '1' : '0'})</span>
            </span>
            <span className="font-semibold text-stone-900">
              {formatCurrency(costSummary.transportTotalUSD, currency)}
            </span>
          </div>

          <div className="flex items-center justify-between text-stone-600">
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-stone-400" />
              <span>Experiences ({expsCount})</span>
            </span>
            <span className="font-semibold text-stone-900">
              {formatCurrency(costSummary.experiencesTotalUSD, currency)}
            </span>
          </div>
        </div>

        {/* Disclaimer note */}
        <div className="bg-stone-50 rounded-xl p-3 text-[11px] text-stone-700 leading-relaxed border border-stone-100">
          * Estimated price subject to room availability & travel dates.
        </div>

        {/* Action Buttons if provided */}
        {(nextStepHref || prevStepHref) && (
          <div className="pt-2 flex flex-col gap-2">
            {nextStepHref && (
              <Link
                href={nextStepHref}
                className="w-full flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 rounded-xl shadow transition"
              >
                <span>{nextStepLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {prevStepHref && (
              <Link
                href={prevStepHref}
                className="w-full text-center text-xs font-semibold text-stone-500 hover:text-stone-800 py-2 transition"
              >
                ← Back to Previous Step
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }

  // Sticky Bottom Bar (Visible everywhere in the planner flow)
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl transition-all">
      {/* Expandable breakdown panel */}
      {isExpanded && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 border-b border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs animate-fadeIn">
          <div className="p-3 bg-stone-50 rounded-xl">
            <span className="text-stone-700 block">Accommodations</span>
            <span className="font-bold text-stone-900 text-sm">
              {formatCurrency(costSummary.hotelTotalUSD, currency)}
            </span>
            <span className="text-[10px] text-stone-700 block mt-0.5">
              {hotelsCount} hotel(s) chosen
            </span>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl">
            <span className="text-stone-700 block">Private Vehicle + Chauffeur</span>
            <span className="font-bold text-stone-900 text-sm">
              {formatCurrency(costSummary.transportTotalUSD, currency)}
            </span>
            <span className="text-[10px] text-stone-700 block mt-0.5">
              {duration.days} days private service
            </span>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl">
            <span className="text-stone-700 block">Activities & Passes</span>
            <span className="font-bold text-stone-900 text-sm">
              {formatCurrency(costSummary.experiencesTotalUSD, currency)}
            </span>
            <span className="text-[10px] text-stone-700 block mt-0.5">
              {expsCount} curated experience(s)
            </span>
          </div>
        </div>
      )}

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left Side: Summary Metrics */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-stone-700 hover:text-stone-900 text-xs font-semibold focus:outline-none"
            title="Toggle Cost Breakdown"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <div className="text-left hidden xs:block">
              <span className="block text-[10px] uppercase tracking-wider text-stone-700">
                {isBudgetMode ? 'Trip Budget Tracker' : 'Live Estimate'}
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-stone-900">
                {isBudgetMode ? (
                  <>
                    <span>Remaining:</span>
                    <span className={isOverBudget ? 'text-rose-600' : 'text-emerald-700'}>
                      {formatCurrency(remaining, currency)}
                    </span>
                  </>
                ) : (
                  <>
                    <span>Total:</span>
                    <span className="text-amber-900 font-extrabold">
                      {formatCurrency(totalCost, currency)}
                    </span>
                  </>
                )}
                {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
              </span>
            </div>
          </button>

          {/* Quick Metrics Badges */}
          <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-stone-200 text-xs">
            {isBudgetMode ? (
              <div className="flex items-center gap-3">
                <span className="text-stone-700">
                  Target: <strong>{formatCurrency(startingBudget, currency)}</strong>
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-700">
                  Selected: <strong>{formatCurrency(totalCost, currency)}</strong>
                </span>
              </div>
            ) : (
              <span className="text-stone-700">
                {destsCount} region(s) • {hotelsCount} hotel(s) • {expsCount} experience(s)
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Step Navigation Buttons */}
        <div className="flex items-center gap-2.5">
          {prevStepHref && (
            <Link
              href={prevStepHref}
              className="text-stone-600 hover:text-stone-900 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-stone-100 transition hidden sm:inline-block"
            >
              ← Back
            </Link>
          )}

          {nextStepHref ? (
            <Link
              href={nextStepHref}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>{nextStepLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/plan/review"
              className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-md transition"
            >
              <span>Review Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
