'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  TripState, 
  PlanningMode, 
  Currency, 
  TripDetails, 
  SelectedHotelItem, 
  Vehicle, 
  TripCostSummary, 
  ItineraryDay, 
  Hotel 
} from '@/types/trip';
import { VEHICLES } from '@/data/vehicles';
import { 
  getTripCostSummary, 
  calculateTripDuration, 
  generateRoughItinerary 
} from '@/lib/calculations';

interface TripContextType {
  state: TripState;
  costSummary: TripCostSummary;
  duration: { days: number; nights: number };
  roughItinerary: ItineraryDay[];
  setPlanningMode: (mode: PlanningMode) => void;
  setCurrency: (currency: Currency) => void;
  setTargetBudget: (budget: number) => void;
  updateDetails: (details: Partial<TripDetails>) => void;
  toggleDestination: (slug: string) => void;
  setHotelSelection: (hotel: Hotel, nights?: number, rooms?: number) => void;
  removeHotelSelection: (hotelId: string) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  toggleExperience: (experienceId: string) => void;
  setCustomerContact: (contact: TripState['customerContact']) => void;
  submitTrip: (contact?: TripState['customerContact']) => Promise<string>;
  resetTrip: () => void;
}

const STORAGE_KEY = 'heritage_travels_trip_state_v1';

// Default initial state
const defaultState: TripState = {
  planningMode: 'NO_BUDGET',
  currency: 'USD',
  targetBudgetUSD: 2500,
  details: {
    arrivalDate: '2026-11-10',
    departureDate: '2026-11-18',
    adults: 2,
    children: 0,
    rooms: 1,
  },
  selectedDestinations: ['cultural-triangle', 'kandy-hill-country', 'south-coast'],
  selectedHotels: {},
  selectedVehicle: VEHICLES[0], // Default to Private Sedan + Driver
  selectedExperiences: ['exp-sigiriya-dawn-ascent', 'exp-mirissa-whale-watching'],
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TripState>(defaultState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState(parsed);
      }
    } catch (e) {
      console.warn('Could not load saved trip state from localStorage', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn('Could not save trip state to localStorage', e);
      }
    }
  }, [state, isHydrated]);

  // Calculations
  const costSummary = useMemo(() => getTripCostSummary(state), [state]);
  const duration = useMemo(() => calculateTripDuration(state.details.arrivalDate, state.details.departureDate), [
    state.details.arrivalDate,
    state.details.departureDate,
  ]);
  const roughItinerary = useMemo(() => generateRoughItinerary(state), [state]);

  const setPlanningMode = (mode: PlanningMode) => {
    setState((prev) => ({ ...prev, planningMode: mode }));
  };

  const setCurrency = (currency: Currency) => {
    setState((prev) => ({ ...prev, currency }));
  };

  const setTargetBudget = (budget: number) => {
    setState((prev) => ({ ...prev, targetBudgetUSD: Math.max(0, budget) }));
  };

  const updateDetails = (details: Partial<TripDetails>) => {
    setState((prev) => ({
      ...prev,
      details: { ...prev.details, ...details },
    }));
  };

  const toggleDestination = (slug: string) => {
    setState((prev) => {
      const exists = prev.selectedDestinations.includes(slug);
      const updated = exists
        ? prev.selectedDestinations.filter((s) => s !== slug)
        : [...prev.selectedDestinations, slug];
      return { ...prev, selectedDestinations: updated };
    });
  };

  const setHotelSelection = (hotel: Hotel, nights?: number, rooms?: number) => {
    setState((prev) => {
      const currentNights = nights !== undefined ? nights : 2;
      const currentRooms = rooms !== undefined ? rooms : prev.details.rooms;
      return {
        ...prev,
        selectedHotels: {
          ...prev.selectedHotels,
          [hotel.id]: {
            hotel,
            nights: Math.max(1, currentNights),
            rooms: Math.max(1, currentRooms),
          },
        },
      };
    });
  };

  const removeHotelSelection = (hotelId: string) => {
    setState((prev) => {
      const updated = { ...prev.selectedHotels };
      delete updated[hotelId];
      return { ...prev, selectedHotels: updated };
    });
  };

  const setSelectedVehicle = (vehicle: Vehicle | null) => {
    setState((prev) => ({ ...prev, selectedVehicle: vehicle }));
  };

  const toggleExperience = (experienceId: string) => {
    setState((prev) => {
      const exists = prev.selectedExperiences.includes(experienceId);
      const updated = exists
        ? prev.selectedExperiences.filter((id) => id !== experienceId)
        : [...prev.selectedExperiences, experienceId];
      return { ...prev, selectedExperiences: updated };
    });
  };

  const setCustomerContact = (contact: TripState['customerContact']) => {
    setState((prev) => ({ ...prev, customerContact: contact }));
  };

  const submitTrip = async (contact?: TripState['customerContact']): Promise<string> => {
    // Generate a unique professional Sri Lanka Trip ID, e.g., SL-10001
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const tripId = `SL-${randomNum}`;

    const updatedState: TripState = {
      ...state,
      customerContact: contact || state.customerContact,
      submittedTripId: tripId,
    };

    setState(updatedState);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
      // Optionally notify local API route
      await fetch('/api/trips/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tripId, tripState: updatedState }),
      }).catch(() => null);
    } catch {
      // client-side resilient
    }

    return tripId;
  };

  const resetTrip = () => {
    setState(defaultState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <TripContext.Provider
      value={{
        state,
        costSummary,
        duration,
        roughItinerary,
        setPlanningMode,
        setCurrency,
        setTargetBudget,
        updateDetails,
        toggleDestination,
        setHotelSelection,
        removeHotelSelection,
        setSelectedVehicle,
        toggleExperience,
        setCustomerContact,
        submitTrip,
        resetTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
}
