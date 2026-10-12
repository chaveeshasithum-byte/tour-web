'use client';

import React from 'react';
import { useTrip } from '@/context/TripContext';
import { HOTELS } from '@/data/hotels';
import { DESTINATIONS } from '@/data/destinations';
import { StepProgress } from '@/components/planner/StepProgress';
import { BudgetBar } from '@/components/planner/BudgetBar';
import { 
  Star, 
  Bed, 
  MapPin, 
  Check, 
  ShieldAlert, 
  Trash2, 
  Sparkles,
  Info
} from 'lucide-react';
import { formatCurrency } from '@/lib/calculations';

export default function PlanHotelsPage() {
  const { 
    state, 
    setHotelSelection, 
    removeHotelSelection 
  } = useTrip();

  // Filter hotels by selected destinations, or show all if none selected
  const availableHotels = state.selectedDestinations.length > 0
    ? HOTELS.filter((h) => state.selectedDestinations.includes(h.destinationSlug))
    : HOTELS;

  return (
    <div className="space-y-8 pb-32 animate-fadeIn">
      {/* Progress */}
      <StepProgress />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Step 3 of 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Select Your Accommodations
          </h1>
          <p className="text-stone-600 text-sm">
            Handpicked Ceylon boutique retreats, historic colonial mansions, and beachfront havens across your chosen regions.
          </p>
        </div>

        {/* Availability Architecture Notice */}
        <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">
              Prototype Hotel Availability & Pricing Notice
            </strong>
            <p className="text-[11px] text-amber-900/90 leading-relaxed">
              These properties feature representative seasonal rates. In this version, mock availability is simulated. 
              Our modular service architecture is structured so that upon official submission, our team verifies exact room 
              inventory and confirms final pricing.
            </p>
          </div>
        </div>

        {/* Selected Hotels Summary Tray */}
        {Object.keys(state.selectedHotels).length > 0 && (
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3 max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>Your Selected Accommodations ({Object.keys(state.selectedHotels).length}):</span>
              <span className="text-amber-800">Total Accommodation Cost: {formatCurrency(
                Object.values(state.selectedHotels).reduce(
                  (acc, curr) => acc + curr.hotel.pricePerNightUSD * curr.nights * curr.rooms, 
                  0
                ), 
                state.currency
              )}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.values(state.selectedHotels).map(({ hotel, nights, rooms }) => {
                const totalItemCost = hotel.pricePerNightUSD * nights * rooms;
                return (
                  <div
                    key={hotel.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                  >
                    <div>
                      <strong className="block font-serif text-stone-900">{hotel.name}</strong>
                      <span className="text-[11px] text-stone-500">
                        {hotel.destinationName} • {nights} night(s) × {rooms} room(s)
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-bold text-stone-900">
                        ${totalItemCost}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeHotelSelection(hotel.id)}
                        className="text-stone-400 hover:text-rose-600 transition p-1"
                        title="Remove hotel"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableHotels.map((hotel) => {
            const selection = state.selectedHotels[hotel.id];
            const isSelected = !!selection;
            const currentNights = selection ? selection.nights : 2;
            const currentRooms = selection ? selection.rooms : state.details.rooms;
            const itemTotal = hotel.pricePerNightUSD * currentNights * currentRooms;

            return (
              <div
                key={hotel.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-800 ring-2 ring-amber-800/15 shadow-xl'
                    : 'border-stone-200 hover:border-stone-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Photo & Pricing Banner */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      ${hotel.pricePerNightUSD} / night
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      <span>{hotel.destinationName}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: hotel.starRating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-[11px] text-stone-500 ml-1">
                        {hotel.starRating}-Star Heritage
                      </span>
                    </div>

                    <h2 className="text-lg font-serif font-bold text-stone-900">
                      {hotel.name}
                    </h2>

                    <p className="text-xs font-medium text-amber-800">
                      {hotel.roomType}
                    </p>

                    <p className="text-xs text-stone-500 flex items-center gap-1">
                      <span>{hotel.location}</span>
                    </p>

                    {/* Amenities list */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {hotel.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Calculation Preview & Adjusters */}
                    <div className="pt-4 border-t border-stone-100 space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-600">
                        <span>Allocated Duration:</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const newNights = Math.max(1, currentNights - 1);
                              setHotelSelection(hotel, newNights, currentRooms);
                            }}
                            className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 font-bold flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="font-semibold text-stone-900 min-w-14 text-center">
                            {currentNights} night(s)
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const newNights = currentNights + 1;
                              setHotelSelection(hotel, newNights, currentRooms);
                            }}
                            className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 font-bold flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-stone-600">
                        <span>Rooms:</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const newRooms = Math.max(1, currentRooms - 1);
                              setHotelSelection(hotel, currentNights, newRooms);
                            }}
                            className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 font-bold flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="font-semibold text-stone-900 min-w-14 text-center">
                            {currentRooms} room(s)
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const newRooms = currentRooms + 1;
                              setHotelSelection(hotel, currentNights, newRooms);
                            }}
                            className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 font-bold flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-stone-50 flex items-center justify-between text-xs font-medium">
                        <span className="text-stone-500">
                          ${hotel.pricePerNightUSD} × {currentNights}N × {currentRooms}R =
                        </span>
                        <span className="font-bold text-amber-900 text-sm">
                          ${itemTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action button */}
                <div className="p-5 pt-0">
                  {isSelected ? (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => removeHotelSelection(hotel.id)}
                        className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition"
                      >
                        Remove from Trip
                      </button>
                      <div className="w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setHotelSelection(hotel, currentNights, currentRooms)}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold bg-amber-800 hover:bg-amber-900 text-white transition shadow"
                    >
                      + Select This Hotel
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Persistent Budget Bar */}
      <BudgetBar
        prevStepHref="/plan/destinations"
        nextStepHref="/plan/transport"
        nextStepLabel="Next: Select Transportation"
      />
    </div>
  );
}
