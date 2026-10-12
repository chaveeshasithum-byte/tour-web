import { Vehicle } from '@/types/trip';

export const VEHICLES: Vehicle[] = [
  {
    id: 'private-sedan-car',
    name: 'Private Air-Conditioned Sedan + Chauffeur Guide',
    type: 'car',
    tagline: 'Ideal for couples, solo travelers & intimate escapes',
    idealFor: '1 – 3 Passengers with luggage',
    capacityAdults: 3,
    capacityLuggage: 3,
    dailyRateUSD: 65,
    driverIncluded: true,
    features: [
      'Dedicated English-speaking certified chauffeur guide',
      'Modern air-conditioned Japanese sedan (Toyota Prius / Premio or similar)',
      'Fuel, toll road highway fees & vehicle insurance included',
      'Complimentary chilled bottled water throughout journey',
      'Flexible departure times & spontaneous photo stopovers',
      'Driver meals and overnight accommodation fully covered'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'private-luxury-van',
    name: 'Private Executive High-Roof Passenger Van + Chauffeur Guide',
    type: 'van',
    tagline: 'Spacious comfort for families, groups & relaxed luggage space',
    idealFor: '4 – 7 Passengers with ample luggage',
    capacityAdults: 7,
    capacityLuggage: 8,
    dailyRateUSD: 90,
    driverIncluded: true,
    features: [
      'Experienced English-speaking senior chauffeur guide',
      'Luxury air-conditioned Toyota KDH / Commuter high-roof van',
      'Reclining velvet passenger seats with generous legroom',
      'Fuel, toll road highway fees & comprehensive passenger coverage included',
      'Chilled mineral water & USB device charging ports for all seats',
      'Driver meals and overnight accommodation fully covered'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  }
];
