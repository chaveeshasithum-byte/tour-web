export interface KeySite {
  name: string;
  description: string;
  image?: string;
}

export interface HeritageDestination {
  id: string;
  slug: string;
  name: string;
  sinhalaName?: string;
  tagline: string;
  subtitle: string;
  region: 'Cultural Triangle' | 'Hill Country' | 'Southern' | 'Northern' | 'North Central' | 'North Western' | 'Western';
  categories: (
    | 'Ancient Kingdoms'
    | 'UNESCO World Heritage Sites'
    | 'Sacred Architecture'
    | 'Colonial Heritage'
    | 'Traditional Culture'
    | 'Historic Cities'
    | 'Cultural Landscapes'
    | 'Lesser-Known Heritage'
  )[];
  heroImage: string;
  gallery: string[];
  historicalBackground: string;
  whyItMatters: string;
  keyPlaces: KeySite[];
  suggestedDuration: string;
  practicalNotes: {
    dressCode?: string;
    bestTimeToVisit?: string;
    physicalDemands?: string;
    entryPermits?: string;
  };
  nearbyDestinations: string[];
  relatedExperienceSlugs: string[];
  relatedTourSlugs: string[];
  editorialQuote?: string;
}

export interface HeritageExperience {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  culturalContext: string;
  possibleActivities: {
    title: string;
    description: string;
  }[];
  relevantDestinations: string[]; // destination slugs
  relatedTourSlugs: string[];
  visitorEtiquette: string;
  readingTime?: string;
}

export interface ItineraryDayDetail {
  day: number;
  title: string;
  location: string;
  morning: string;
  afternoon: string;
  evening: string;
  highlights: string[];
  overnightLocation: string;
  mealsIncluded: string;
}

export interface HeritageTour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  durationDays: number;
  durationNights: number;
  durationText: string;
  category: 'Signature Journeys' | 'Short Heritage Escapes' | 'Private Cultural Tours' | 'Grand Expeditions';
  pace: 'Relaxed' | 'Balanced' | 'Active';
  travelerType: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  destinationsCovered: string[]; // destination slugs
  heritageThemes: string[];
  keyHighlights: string[];
  dayByDayItinerary: ItineraryDayDetail[];
  inclusions: string[];
  exclusions: string[];
  transportDetails: string;
  accommodationStyle: string;
  activityLevel: string;
  customizationNotes: string;
  faqs?: { question: string; answer: string }[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'History and Heritage' | 'Destination Guides' | 'Architecture' | 'Culture and Traditions' | 'Travel Planning' | 'Responsible Travel';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  heroImage: string;
  summary: string;
  intro: string;
  sections: {
    heading?: string;
    content: string[];
    quote?: string;
    image?: {
      url: string;
      caption: string;
    };
  }[];
  relatedDestinations: string[];
  relatedTours: string[];
}

export interface FAQItem {
  id: string;
  category: 'Planning & Customization' | 'Tours & Experiences' | 'Sacred Etiquette & Culture' | 'Practical & Transport';
  question: string;
  answer: string;
}
