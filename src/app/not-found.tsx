import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-[#EBE5DA] border border-[#DCD4C6] text-[#252720] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-[#A88C5A]" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block font-mono">
            404 • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#252720]">
            An Uncharted Path
          </h1>
          <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
            The ancient route or page you are looking for does not exist in our archives. Perhaps it was lost to time or moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-xs transition shadow-sm"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EBE5DA] text-[#252720] hover:bg-stone-200 text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-xs transition"
          >
            <span>Explore Destinations</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
