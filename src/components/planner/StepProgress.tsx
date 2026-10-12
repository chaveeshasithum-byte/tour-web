'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Check } from 'lucide-react';

export const PLANNER_STEPS = [
  { id: 1, label: 'Trip Details', shortLabel: 'Details', href: '/plan/details' },
  { id: 2, label: 'Destinations', shortLabel: 'Destinations', href: '/plan/destinations' },
  { id: 3, label: 'Hotels', shortLabel: 'Hotels', href: '/plan/hotels' },
  { id: 4, label: 'Transport', shortLabel: 'Transport', href: '/plan/transport' },
  { id: 5, label: 'Experiences', shortLabel: 'Experiences', href: '/plan/experiences' },
  { id: 6, label: 'Review & Submit', shortLabel: 'Review', href: '/plan/review' },
];

function StepProgressInner() {
  const pathname = usePathname();

  const getCurrentStepIndex = () => {
    const found = PLANNER_STEPS.findIndex((s) => s.href === pathname);
    return found !== -1 ? found : 0;
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className="w-full bg-stone-100/80 border-b border-stone-200 py-3 px-4 sticky top-20 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <nav aria-label="Planner Progress" className="overflow-x-auto no-scrollbar">
          <ol className="flex items-center min-w-max justify-between md:justify-center gap-2 md:gap-6 text-xs font-medium">
            {PLANNER_STEPS.map((step, idx) => {
              const isCurrent = idx === currentIndex;
              const isCompleted = idx < currentIndex;

              return (
                <li key={step.id} className="flex items-center">
                  <Link
                    href={step.href}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                      isCurrent
                        ? 'bg-amber-800 text-white font-semibold shadow-sm'
                        : isCompleted
                        ? 'text-amber-900 bg-amber-100/80 hover:bg-amber-200/80'
                        : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200/50'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isCurrent
                          ? 'bg-white text-amber-900'
                          : isCompleted
                          ? 'bg-amber-800 text-white'
                          : 'bg-stone-300 text-stone-700'
                      }`}
                    >
                      {isCompleted ? <Check className="w-3 h-3" /> : step.id}
                    </span>
                    <span className="hidden sm:inline">{step.label}</span>
                    <span className="sm:hidden">{step.shortLabel}</span>
                  </Link>

                  {idx < PLANNER_STEPS.length - 1 && (
                    <span className="mx-2 text-stone-300 select-none">→</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function StepProgress() {
  return (
    <Suspense
      fallback={
        <div className="w-full bg-stone-100/80 border-b border-stone-200 py-3 px-4 h-12" />
      }
    >
      <StepProgressInner />
    </Suspense>
  );
}
