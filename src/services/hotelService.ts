import { Hotel } from '@/types/trip';
import { HOTELS } from '@/data/hotels';

export interface HotelSearchParams {
  destinationSlug: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  roomsCount: number;
}

export interface HotelAvailabilityResult {
  hotel: Hotel;
  isAvailable: boolean;
  pricePerNightUSD: number;
  availableRoomTypes: string[];
  cancellationPolicy: string;
}

/**
 * Service abstraction for Hotel Availability & Pricing.
 * In this version, uses mock data and simulated availability.
 * Designed to be swapped with a real channel manager or hotel API (e.g. RateGain, Amadeus, Hotelbeds) without altering the UI components.
 */
export async function searchHotelAvailability(
  params: HotelSearchParams
): Promise<HotelAvailabilityResult[]> {
  // Simulate network latency for API readiness
  await new Promise((resolve) => setTimeout(resolve, 80));

  const matching = HOTELS.filter((h) => h.destinationSlug === params.destinationSlug);

  return matching.map((hotel) => ({
    hotel,
    isAvailable: true,
    pricePerNightUSD: hotel.pricePerNightUSD,
    availableRoomTypes: [hotel.roomType, 'Deluxe Garden Villa', 'Executive Sea Suite'],
    cancellationPolicy: 'Free cancellation up to 14 days prior to arrival.',
  }));
}
