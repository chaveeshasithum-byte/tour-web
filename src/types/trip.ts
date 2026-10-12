export type PlanningMode = 'BUDGET' | 'NO_BUDGET';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  recommendedStay: string;
  highlights: string[];
  keyExperiences: string[];
  nearbyRegions: string[];
}

export interface Hotel {
  id: string;
  destinationSlug: string;
  destinationName: string;
  name: string;
  starRating: number;
  location: string;
  roomType: string;
  pricePerNightUSD: number;
  amenities: string[];
  imageUrl: string;
  nightsAllocated?: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'van';
  tagline: string;
  idealFor: string;
  capacityAdults: number;
  capacityLuggage: number;
  dailyRateUSD: number;
  driverIncluded: boolean;
  features: string[];
  imageUrl: string;
}

export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: 'Wildlife' | 'Beaches' | 'Adventure' | 'Culture' | 'Food' | 'Wellness';
  region: string;
  destinationSlug: string;
  description: string;
  duration: string;
  pricePerPersonUSD: number;
  imageUrl: string;
  includedHighlights: string[];
}

export interface SelectedHotelItem {
  hotel: Hotel;
  nights: number;
  rooms: number;
}

export interface TripDetails {
  arrivalDate: string; // YYYY-MM-DD
  departureDate: string; // YYYY-MM-DD
  adults: number;
  children: number;
  rooms: number;
}

export interface ItineraryDay {
  dayNumber: number;
  dateStr?: string;
  title: string;
  destination: string;
  highlights: string[];
  overnightStay: string;
}

export interface TripState {
  planningMode: PlanningMode;
  currency: Currency;
  targetBudgetUSD: number;
  details: TripDetails;
  selectedDestinations: string[]; // destination slugs
  selectedHotels: Record<string, SelectedHotelItem>; // key = hotelId
  selectedVehicle: Vehicle | null;
  selectedExperiences: string[]; // experience IDs
  customerContact?: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    specialRequests?: string;
  };
  submittedTripId?: string;
}

export interface TripCostSummary {
  hotelTotalUSD: number;
  transportTotalUSD: number;
  experiencesTotalUSD: number;
  totalEstimatedUSD: number;
  remainingBudgetUSD: number | null;
  totalDays: number;
  totalNights: number;
}
