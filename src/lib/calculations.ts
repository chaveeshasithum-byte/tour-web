import { 
  TripState, 
  TripCostSummary, 
  SelectedHotelItem, 
  Vehicle, 
  ItineraryDay, 
  Currency 
} from '@/types/trip';
import { EXPERIENCES } from '@/data/experiences';
import { DESTINATIONS } from '@/data/destinations';

/**
 * Calculates the number of days and nights between arrival and departure dates.
 */
export function calculateTripDuration(arrivalDateStr: string, departureDateStr: string): { days: number; nights: number } {
  if (!arrivalDateStr || !departureDateStr) {
    return { days: 8, nights: 7 }; // standard default
  }
  const start = new Date(arrivalDateStr);
  const end = new Date(departureDateStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const nights = Math.max(1, diffDays > 0 ? diffDays : 7);
  const days = nights + 1;
  return { days, nights };
}

/**
 * Calculates total hotel cost: Price per night × nights × rooms
 */
export function calculateHotelCost(selectedHotels: Record<string, SelectedHotelItem>): number {
  return Object.values(selectedHotels).reduce((total, item) => {
    const cost = (item.hotel.pricePerNightUSD || 0) * (item.nights || 1) * (item.rooms || 1);
    return total + cost;
  }, 0);
}

/**
 * Calculates transportation cost: Daily rate × trip days
 */
export function calculateTransportCost(vehicle: Vehicle | null, totalDays: number): number {
  if (!vehicle) return 0;
  return (vehicle.dailyRateUSD || 0) * (totalDays || 1);
}

/**
 * Calculates activity & experience cost: pricePerPerson × adults
 */
export function calculateActivityCost(selectedExperienceIds: string[], adultsCount: number = 2): number {
  return selectedExperienceIds.reduce((total, id) => {
    const exp = EXPERIENCES.find((e) => e.id === id);
    if (!exp) return total;
    return total + exp.pricePerPersonUSD * Math.max(1, adultsCount);
  }, 0);
}

/**
 * Calculates total estimated trip cost combining hotels, transport, and experiences
 */
export function calculateTripTotal(
  selectedHotels: Record<string, SelectedHotelItem>,
  vehicle: Vehicle | null,
  totalDays: number,
  selectedExperienceIds: string[],
  adultsCount: number = 2
): number {
  const hotelTotal = calculateHotelCost(selectedHotels);
  const transportTotal = calculateTransportCost(vehicle, totalDays);
  const experiencesTotal = calculateActivityCost(selectedExperienceIds, adultsCount);
  return hotelTotal + transportTotal + experiencesTotal;
}

/**
 * Calculates remaining budget in budget mode. Returns null if not in budget mode.
 */
export function calculateRemainingBudget(startingBudgetUSD: number | null, tripTotalUSD: number): number | null {
  if (startingBudgetUSD === null || startingBudgetUSD === undefined || startingBudgetUSD <= 0) {
    return null;
  }
  return startingBudgetUSD - tripTotalUSD;
}

/**
 * Returns a complete calculation summary object for the current trip state
 */
export function getTripCostSummary(state: TripState): TripCostSummary {
  const { days, nights } = calculateTripDuration(state.details.arrivalDate, state.details.departureDate);
  const hotelTotalUSD = calculateHotelCost(state.selectedHotels);
  const transportTotalUSD = calculateTransportCost(state.selectedVehicle, days);
  const experiencesTotalUSD = calculateActivityCost(state.selectedExperiences, state.details.adults);
  
  const totalEstimatedUSD = hotelTotalUSD + transportTotalUSD + experiencesTotalUSD;
  const remainingBudgetUSD = state.planningMode === 'BUDGET'
    ? calculateRemainingBudget(state.targetBudgetUSD, totalEstimatedUSD)
    : null;

  return {
    hotelTotalUSD,
    transportTotalUSD,
    experiencesTotalUSD,
    totalEstimatedUSD,
    remainingBudgetUSD,
    totalDays: days,
    totalNights: nights,
  };
}

/**
 * Currency formatter with symbol support
 */
export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const rounded = Math.round(amount);
  switch (currency) {
    case 'EUR':
      return `€${rounded.toLocaleString()}`;
    case 'GBP':
      return `£${rounded.toLocaleString()}`;
    case 'AUD':
      return `A$${rounded.toLocaleString()}`;
    case 'USD':
    default:
      return `$${rounded.toLocaleString()}`;
  }
}

/**
 * Generates an automated proposed rough itinerary based on selected destinations and trip duration
 */
export function generateRoughItinerary(state: TripState): ItineraryDay[] {
  const { days } = calculateTripDuration(state.details.arrivalDate, state.details.departureDate);
  const selectedDests = state.selectedDestinations
    .map((slug) => DESTINATIONS.find((d) => d.slug === slug))
    .filter(Boolean) as typeof DESTINATIONS;

  const itinerary: ItineraryDay[] = [];

  // Fallback if no destinations selected
  if (selectedDests.length === 0) {
    return [
      {
        dayNumber: 1,
        title: 'Arrival in Sri Lanka → Colombo',
        destination: 'Colombo',
        highlights: ['VIP airport meet & greet', 'Private transfer to oceanfront boutique hotel', 'Sunset Galle Face Green promenade'],
        overnightStay: 'Colombo'
      },
      {
        dayNumber: 2,
        title: 'Central Highlands & Cultural Immersion',
        destination: 'Kandy & Hill Country',
        highlights: ['Temple of the Sacred Tooth Relic', 'Scenic highland drive past cascading waterfalls'],
        overnightStay: 'Kandy'
      },
      {
        dayNumber: 3,
        title: 'Southern Coastline & Return',
        destination: 'South Coast',
        highlights: ['Historic Galle Fort 17th-century ramparts', 'Departure transfer to Bandaranaike International Airport'],
        overnightStay: 'Airport / Departure'
      }
    ];
  }

  // Distribute days across selected destinations
  const destCount = selectedDests.length;
  let currentDay = 1;

  // Day 1 is always Arrival & first destination
  const firstDest = selectedDests[0];
  itinerary.push({
    dayNumber: 1,
    title: `Day 1 — Arrival at Bandaranaike Airport (CMB) → ${firstDest.name}`,
    destination: firstDest.name,
    highlights: [
      'Warm traditional Sri Lankan welcome with fragrant flower garland',
      'Meet your private dedicated English-speaking chauffeur guide',
      `Scenic transfer to your hotel in ${firstDest.name}`,
      'Check-in, welcome king coconut beverage & evening relaxation'
    ],
    overnightStay: firstDest.name
  });
  currentDay++;

  // Middle days spread among selected destinations
  const remainingDays = Math.max(1, days - 2);
  const daysPerDest = Math.max(1, Math.floor(remainingDays / destCount));

  for (let i = 0; i < destCount && currentDay < days; i++) {
    const dest = selectedDests[i];
    const isTransition = i > 0;

    if (isTransition && currentDay < days) {
      const prevDest = selectedDests[i - 1];
      itinerary.push({
        dayNumber: currentDay,
        title: `Day ${currentDay} — ${prevDest.name} → ${dest.name}`,
        destination: dest.name,
        highlights: [
          `Scenic morning journey in your private air-conditioned vehicle`,
          `Spontaneous roadside fruit stalls & scenic viewpoint stops`,
          `Arrival & check-in at ${dest.name}`,
          dest.highlights[0] || 'Sunset leisure walk'
        ],
        overnightStay: dest.name
      });
      currentDay++;
    }

    // Full day in destination if days remain
    if (currentDay < days) {
      itinerary.push({
        dayNumber: currentDay,
        title: `Day ${currentDay} — Exploring ${dest.name}`,
        destination: dest.name,
        highlights: [
          dest.keyExperiences[0] || dest.highlights[1] || 'Guided excursion with your private chauffeur',
          dest.keyExperiences[1] || dest.highlights[2] || 'Local cultural dining & artisan discovery',
          'Relaxing evening at your hotel'
        ],
        overnightStay: dest.name
      });
      currentDay++;
    }
  }

  // Fill in any remaining days up to days - 1
  while (currentDay < days) {
    const currentDest = selectedDests[selectedDests.length - 1];
    itinerary.push({
      dayNumber: currentDay,
      title: `Day ${currentDay} — Leisure & Excursions in ${currentDest.name}`,
      destination: currentDest.name,
      highlights: [
        'Leisurely breakfast overlooking the scenery',
        'Optional wellness massage, boutique shopping or beach stroll',
        'Sunset signature dinner experience'
      ],
      overnightStay: currentDest.name
    });
    currentDay++;
  }

  // Final Day — Departure
  const lastDest = selectedDests[selectedDests.length - 1];
  itinerary.push({
    dayNumber: days,
    title: `Day ${days} — ${lastDest.name} → Airport & Departure`,
    destination: 'Bandaranaike International Airport (CMB)',
    highlights: [
      'Relaxed morning breakfast and souvenir packing',
      'Comfortable highway express transfer with your private driver',
      'Assisted check-in at Colombo International Airport (CMB)',
      'Farewell with unforgettable Ceylon memories (Ayubowan!)'
    ],
    overnightStay: 'International Flight Home'
  });

  return itinerary;
}
