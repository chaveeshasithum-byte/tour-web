import { Hotel } from '@/types/trip';

export const HOTELS: Hotel[] = [
  // Colombo
  {
    id: 'hotel-galle-face',
    destinationSlug: 'colombo',
    destinationName: 'Colombo',
    name: 'Galle Face Hotel Heritage',
    starRating: 5,
    location: 'Galle Face Green, Colombo 03',
    roomType: 'Colonial Ocean View Suite',
    pricePerNightUSD: 165,
    amenities: ['Oceanfront Pool', 'Heritage Museum', 'Fine Dining', 'Free High-speed Wi-Fi', 'Spa & Wellness'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-cinnamon-red',
    destinationSlug: 'colombo',
    destinationName: 'Colombo',
    name: 'Cinnamon Red Boutique City',
    starRating: 4,
    location: 'Cinnamon Gardens, Colombo 07',
    roomType: 'Deluxe City View Room',
    pricePerNightUSD: 85,
    amenities: ['Rooftop Infinity Pool', 'Sky Lounge Bar', 'Fitness Center', 'Free Wi-Fi', 'Breakfast Buffet'],
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-shangri-la-colombo',
    destinationSlug: 'colombo',
    destinationName: 'Colombo',
    name: 'Shangri-La Colombo Waterfront',
    starRating: 5,
    location: 'One Galle Face, Colombo 02',
    roomType: 'Executive Premier Ocean Suite',
    pricePerNightUSD: 240,
    amenities: ['Signature Chi Spa', 'Harbor View Dining', 'Outdoor Pool', 'Concierge Butler Service'],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },

  // Cultural Triangle / Sigiriya
  {
    id: 'hotel-aliyan-resort',
    destinationSlug: 'cultural-triangle',
    destinationName: 'Cultural Triangle & Sigiriya',
    name: 'Aliya Resort & Ancient View Spa',
    starRating: 4,
    location: 'Audangawa, Sigiriya',
    roomType: 'Deluxe Paddy View Chalet',
    pricePerNightUSD: 110,
    amenities: ['Direct Sigiriya Rock Views', 'Ayurvedic Spa', 'Infinity Pool', 'Ceylonese Specialty Restaurant'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-water-garden-sigiriya',
    destinationSlug: 'cultural-triangle',
    destinationName: 'Cultural Triangle & Sigiriya',
    name: 'Water Garden Sigiriya Boutique',
    starRating: 5,
    location: 'Indigaswewa, Sigiriya',
    roomType: 'Luxury Lagoon Private Plunge Pool Villa',
    pricePerNightUSD: 260,
    amenities: ['Private Plunge Pool', 'Helipad Access', 'Organic Farm Dining', 'Naturalist Guided Walks'],
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-heritance-kandalama',
    destinationSlug: 'cultural-triangle',
    destinationName: 'Cultural Triangle & Sigiriya',
    name: 'Heritance Kandalama (Geoffrey Bawa Design)',
    starRating: 5,
    location: 'Kandalama Lake, Dambulla',
    roomType: 'Superior Panoramic Forest Lake Room',
    pricePerNightUSD: 175,
    amenities: ['Architectural Icon', 'Natural Rock Pool', 'Lake Excursions', 'Six Senses Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
  },

  // Kandy & Hill Country
  {
    id: 'hotel-kings-pavilion',
    destinationSlug: 'kandy-hill-country',
    destinationName: 'Kandy & Hill Country',
    name: 'Kings Pavilion Luxury Mountain Villa',
    starRating: 5,
    location: 'Aniwatta, Kandy',
    roomType: 'Monarch Suite with Mountain Balcony',
    pricePerNightUSD: 190,
    amenities: ['Panoramic Valley Vistas', 'Infinity Heated Jacuzzi', 'Private Butler', 'Fine Dining Patio'],
    imageUrl: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-thilanka-kandy',
    destinationSlug: 'kandy-hill-country',
    destinationName: 'Kandy & Hill Country',
    name: 'Hotel Thilanka Lakefront',
    starRating: 4,
    location: 'Sangamitta Mawatha, Kandy',
    roomType: 'Deluxe Udawatta Kele Forest Room',
    pricePerNightUSD: 95,
    amenities: ['Kandy Lake Walk Access', 'Hillside Pool', 'Ayurvedic Therapy', 'Free Parking & Wi-Fi'],
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-ceylon-tea-trails',
    destinationSlug: 'kandy-hill-country',
    destinationName: 'Kandy & Hill Country',
    name: 'Ceylon Tea Trails Heritage Bungalow',
    starRating: 5,
    location: 'Hatton, Central Highlands',
    roomType: 'Planter’s Heritage Master Suite',
    pricePerNightUSD: 310,
    amenities: ['All-Inclusive Planter Meals', 'Croquet Lawn', 'High Tea Service', 'Private Tea Master Tour'],
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
  },

  // Ella
  {
    id: 'hotel-98-acres-resort',
    destinationSlug: 'ella',
    destinationName: 'Ella & Cloud Country',
    name: '98 Acres Resort & Spa',
    starRating: 5,
    location: 'Passara Road, Ella',
    roomType: 'Deluxe Chalet Overlooking Ella Gap',
    pricePerNightUSD: 210,
    amenities: ['Direct Views of Little Adam’s Peak', 'Bar 98 Cliff Terrace', 'Helicopter Pad', 'Tea Plantation Pool'],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-ella-flower-garden',
    destinationSlug: 'ella',
    destinationName: 'Ella & Cloud Country',
    name: 'Ella Flower Garden Boutique Eco-Lodge',
    starRating: 4,
    location: 'Waterfall Road, Ella',
    roomType: 'Mountain Panoramic View Room',
    pricePerNightUSD: 90,
    amenities: ['Lush Tropical Gardens', 'Homemade Ceylon Breakfast', 'Nine Arch Bridge Trail', 'Free Wi-Fi'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },

  // South Coast / Galle
  {
    id: 'hotel-amangalla',
    destinationSlug: 'south-coast',
    destinationName: 'The South Coast & Galle',
    name: 'Amangalla Historic Fort Sanctuary',
    starRating: 5,
    location: 'Church Street, Galle Fort',
    roomType: 'Historic Dutch Suite with Freestanding Tub',
    pricePerNightUSD: 295,
    amenities: ['The Baths Hydrotherapy Spa', 'Verandah Gin Bar', 'UNESCO Fort Garden', 'High Tea Terrace'],
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-jetwing-lighthouse',
    destinationSlug: 'south-coast',
    destinationName: 'The South Coast & Galle',
    name: 'Jetwing Lighthouse Oceanfront',
    starRating: 5,
    location: 'Dadella, Galle',
    roomType: 'Ocean Deluxe Coral View',
    pricePerNightUSD: 160,
    amenities: ['Clifftop Ocean Pools', 'Geoffrey Bawa Architecture', 'Sunset Pizzeria', 'Ayurveda Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-weligama-bay-marriott',
    destinationSlug: 'south-coast',
    destinationName: 'The South Coast & Galle',
    name: 'Weligama Bay Horizon Beach Resort',
    starRating: 5,
    location: 'Matara Road, Weligama',
    roomType: 'Superior King Ocean Surf Balcony',
    pricePerNightUSD: 145,
    amenities: ['Direct Sand Beach Frontage', 'Kids Club & Activity Center', 'Surf School Access', 'Rooftop Lounge'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },

  // Yala & Wildlife
  {
    id: 'hotel-cinnamon-wild-yala',
    destinationSlug: 'yala-wildlife',
    destinationName: 'Yala & Southern Wilderness',
    name: 'Cinnamon Wild Yala Wilderness Lodge',
    starRating: 4,
    location: 'Kirinda, Bordering Yala Park',
    roomType: 'Jungle Chalet Bordering Wildlife Lagoon',
    pricePerNightUSD: 155,
    amenities: ['Observation Deck over Crocodile Lagoon', 'Outdoor Pool', 'Resident Naturalist Team', 'Open Safari Jeep Hub'],
    imageUrl: 'https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-wild-coast-tented-lodge',
    destinationSlug: 'yala-wildlife',
    destinationName: 'Yala & Southern Wilderness',
    name: 'Wild Coast Tented Lodge Relais & Châteaux',
    starRating: 5,
    location: 'Palatupana, Yala Beach',
    roomType: 'Cocoon Luxury Tent Suite with Copper Tub',
    pricePerNightUSD: 340,
    amenities: ['Relais & Châteaux Gastronomy', 'Wild Coast Beachfront', 'Private Safari Game Drives', 'Bamboo Sanctuary Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },

  // East Coast / Trincomalee
  {
    id: 'hotel-trinco-blu',
    destinationSlug: 'east-coast',
    destinationName: 'The East Coast & Trincomalee',
    name: 'Trinco Blu Beachfront Haven',
    starRating: 4,
    location: 'Uppuveli, Trincomalee',
    roomType: 'Superior Beach Chalet Walkout',
    pricePerNightUSD: 105,
    amenities: ['Private Beachfront Dive Base', 'Crab Seafood Restaurant', 'Ocean Pool', 'Dolphin Excursion Launch'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-uva-meridian-pasikuda',
    destinationSlug: 'east-coast',
    destinationName: 'The East Coast & Trincomalee',
    name: 'Uga Bay Luxury Ocean Sanctuary',
    starRating: 5,
    location: 'Pasikuda Bay, Batticaloa',
    roomType: 'Ocean Studio Private Terrace',
    pricePerNightUSD: 185,
    amenities: ['Calm Shallow Turquoise Swimming Bay', 'Underground Wine Cellar', 'Water Sports Club', 'Ayurvedic Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  }
];
