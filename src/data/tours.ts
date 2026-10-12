import { HeritageTour } from '@/types/heritage';

export const CURATED_TOURS: HeritageTour[] = [
  {
    id: 'cultural-triangle-journey',
    slug: 'cultural-triangle-journey',
    title: 'The Cultural Triangle Journey',
    subtitle: 'Sigiriya, Polonnaruwa, Dambulla & Ancient Waterways',
    durationDays: 5,
    durationNights: 4,
    durationText: '5 Days / 4 Nights',
    category: 'Signature Journeys',
    pace: 'Balanced',
    travelerType: 'Couples, culturally curious explorers & first-time heritage travelers',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'An intensive, beautifully paced exploration of Sri Lanka’s golden archaeological core. Stand atop the 5th-century summit palace of Sigiriya at dawn, wander through the serene stone monoliths of Polonnaruwa, and step into the illuminated cavern galleries of Dambulla, while resting at atmospheric heritage boutique hotels surrounded by ancient forest lakes.',
    destinationsCovered: ['sigiriya', 'dambulla', 'polonnaruwa', 'ritigala'],
    heritageThemes: ['UNESCO World Heritage Sites', 'Ancient Hydraulic Engineering', 'Buddhist Art & Murals', 'Royal Fortress Citadels'],
    keyHighlights: [
      'Private dawn ascent of Sigiriya Rock Fortress avoiding crowds',
      'Gal Vihara monolithic granite sculptures and Royal Quadrangle in Polonnaruwa',
      'Privately guided walkthrough of the five cave temples of Dambulla',
      'Catamaran glide across a peaceful village wewa (ancient reservoir)',
      'Forested stone meditation pathways of the ancient ascetic retreat at Ritigala'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Arrival into the Cultural Triangle & Dambulla Cave Temples',
        location: 'Dambulla & Sigiriya',
        morning: 'Your private chauffeur guide meets you upon arrival in Colombo or your coastal hotel for a scenic transfer inland into the Cultural Triangle.',
        afternoon: 'Ascend the gentle granite slope to explore the golden caverns of Dambulla Rock Cave Temple, admiring 153 gilded Buddha statues and 2,000 square metres of ceiling frescoes.',
        evening: 'Check in to your boutique heritage resort nestled amid jungle gardens; welcome dinner featuring authentic village dishes.',
        highlights: ['Dambulla Cave Sanctuaries', 'Scenic drive through dry zone forest', 'Sunset over forest reservoirs'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'The Sky Citadel of Sigiriya & Rural Lake Discovery',
        location: 'Sigiriya',
        morning: 'Begin an early ascent of Sigiriya Rock Fortress at first light. Explore the lower water gardens, ancient Mirror Wall graffiti, and the monumental Lion Gate paw terrace before reaching the summit palace.',
        afternoon: 'Descend for a relaxed mid-morning breakfast followed by a peaceful catamaran cruise across an ancient village wewa, observing water lilies and birdlife.',
        evening: 'Leisurely evening at the lodge with an Ayurvedic herbal foot massage; evening discussion on Kashyapa’s dynastic reign.',
        highlights: ['Sigiriya Lion Rock summit', '5th-century frescoes', 'Ancient reservoir boat cruise'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast & Lunch included'
      },
      {
        day: 3,
        title: 'The Medieval Imperial Splendour of Polonnaruwa',
        location: 'Polonnaruwa',
        morning: 'Drive to the medieval royal capital of Polonnaruwa. Visit the monumental ruins of King Parakramabahu’s seven-storey palace, the Council Chamber, and the Royal Baths.',
        afternoon: 'Explore the Sacred Quadrangle (Dalada Maluwa) and cycle or stroll to Gal Vihara to witness the four colossal rock-cut Buddha statues.',
        evening: 'Drive along the vast embankment of the Parakrama Samudra reservoir as the sun sets over the distant Knuckles Mountain range.',
        highlights: ['Gal Vihara granite masterpieces', 'Sacred Quadrangle Vatadage', 'Parakrama Samudra inland sea'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 4,
        title: 'Forest Ascetics of Ritigala & Traditional Hearth Lunch',
        location: 'Ritigala',
        morning: 'Journey off the beaten path into the forested slopes of Ritigala Strict Natural Reserve. Walk ancient cyclopean stone pathways and double-platform meditation halls.',
        afternoon: 'Enjoy an authentic lunch cooked in clay pots over wood fires at a local family homestead, featuring organic indigenous grains and heirloom curries.',
        evening: 'Free evening at leisure or optional sunset excursion to Pidurangala rock viewpoint.',
        highlights: ['Ritigala forest monastery', 'Traditional clay-pot culinary experience', 'Pidurangala sunset panorama'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast & Traditional Lunch included'
      },
      {
        day: 5,
        title: 'Homeward Journey or Extension to Hill Country / Coast',
        location: 'Return Transfer',
        morning: 'Enjoy a leisurely breakfast overlooking the water gardens before departing with your private chauffeur towards Kandy, the southern coast, or Colombo airport.',
        afternoon: 'En-route stop at an artisanal spice estate in Matale or direct airport connection.',
        evening: 'Departure or continuation to your next heritage destination.',
        highlights: ['Scenic onward transfer', 'Matale spice route stop'],
        overnightLocation: 'Departure / Next Destination',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Dedicated air-conditioned luxury private vehicle with English-speaking chauffeur guide',
      '4 nights in hand-selected boutique heritage villas/resorts',
      'Daily breakfast, plus specified welcome dinners and village meals',
      'All archaeological site entrance permits and government taxes (Sigiriya, Polonnaruwa, Dambulla, Ritigala)',
      'Mineral water and refreshing king coconuts during touring excursions'
    ],
    exclusions: [
      'International flights and Sri Lanka ETA entry visas',
      'Lunches and alcoholic beverages not specified in the itinerary',
      'Discretionary gratuities for chauffeur guide and hotel staff',
      'Personal travel insurance and personal expenses'
    ],
    transportDetails: 'Private luxury sedan (1–2 guests) or spacious passenger van (3–6 guests) with dedicated chauffeur guide throughout.',
    accommodationStyle: 'Handpicked eco-luxury boutique retreats with garden verandas and swimming pools.',
    activityLevel: 'Moderate walking and climbing on ancient stone staircases; adapted to your personal pace.',
    customizationNotes: 'This journey can be seamlessly extended to Kandy (Hill Country) or Galle Fort (South Coast).'
  },
  {
    id: 'ancient-kingdoms-sacred-cities',
    slug: 'ancient-kingdoms-sacred-cities',
    title: 'Ancient Kingdoms and Sacred Cities',
    subtitle: 'Anuradhapura, Mihintale, Yapahuwa, Sigiriya & Polonnaruwa',
    durationDays: 8,
    durationNights: 7,
    durationText: '8 Days / 7 Nights',
    category: 'Signature Journeys',
    pace: 'Balanced',
    travelerType: 'Archaeology enthusiasts, history scholars, families & cultural travelers',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The definitive deep-dive into the rise, golden age, and medieval transformations of classical Ceylon. Trace the historical narrative from the founding of Anuradhapura in the 4th century BCE to the rock redoubts of Yapahuwa and the forest sanctuaries of the pansakulika monks.',
    destinationsCovered: ['anuradhapura', 'mihintale', 'yapahuwa', 'sigiriya', 'polonnaruwa', 'dambulla'],
    heritageThemes: ['Classical Theravada Architecture', 'Ancient Chronicles & Inscriptions', 'Monastic Medicine & Hydraulics', 'Living Pilgrimage'],
    keyHighlights: [
      'The sacred living Jaya Sri Maha Bodhi tree and colossal white stupas of Anuradhapura',
      'Mihintale sacred mountain climb at sunset along frangipani stone steps',
      'The dramatic ceremonial staircase and carved lion balustrades of Yapahuwa',
      'Sigiriya Lion Rock ascent and Polonnaruwa Gal Vihara granite masterpieces',
      'Private meetings with local archaeologists and conservation experts'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Arrival & Journey to the Kurunegala Citadel of Yapahuwa',
        location: 'Yapahuwa & Anuradhapura',
        morning: 'Airport greeting by your private chauffeur guide; travel north through rural coconut groves towards Kurunegala.',
        afternoon: 'Explore the steep, magnificent granite staircase and lion sculptures of the 13th-century cliff capital of Yapahuwa.',
        evening: 'Arrive in Anuradhapura; check in to your heritage sanctuary beside the ancient Tissa Wewa reservoir.',
        highlights: ['Yapahuwa stone staircase', 'Tissa Wewa sunset walk'],
        overnightLocation: 'Heritage Estate, Anuradhapura',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'Anuradhapura: The First Sacred Metropolis',
        location: 'Anuradhapura',
        morning: 'Stand before the ancient Jaya Sri Maha Bodhi tree, offering fragrant lotus flowers alongside white-clad pilgrims.',
        afternoon: 'Visit Ruwanwelisaya stupa, the monumental brick mass of Jetavanaramaya, and the twin stone bathing ponds of Kuttam Pokuna.',
        evening: 'Quiet contemplation at Samadhi Buddha statue under the shaded canopy of Mahamevnawa park.',
        highlights: ['Jaya Sri Maha Bodhi', 'Ruwanwelisaya stupa', 'Jetavanaramaya brick marvel'],
        overnightLocation: 'Heritage Estate, Anuradhapura',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 3,
        title: 'Mihintale Mountain Sanctuary & Monastic Medicine',
        location: 'Mihintale',
        morning: 'Explore the 9th-century monastic hospital at Mihintale, viewing the monolithic stone medicinal oil bath and ancient medical instruments.',
        afternoon: 'Climb the 1,840 shaded stone steps of Missaka Hill to Aradhana Gala (Meditation Rock), absorbing the vast panoramic view.',
        evening: 'Atmospheric twilight chanting ceremonies around the white Maha Stupa.',
        highlights: ['Ancient monastic hospital', '1,840 stone steps', 'Windswept panoramic meditation rock'],
        overnightLocation: 'Heritage Estate, Anuradhapura',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 4,
        title: 'Ritigala Forest Ascetics & Transition to Sigiriya',
        location: 'Ritigala & Sigiriya',
        morning: 'Journey southeast into the mist-shrouded cloud forest of Ritigala Strict Natural Reserve.',
        afternoon: 'Walk ancient paved stone pathways and double-platform meditation halls constructed without ornamental carvings.',
        evening: 'Check in to your boutique forest retreat in Sigiriya; evening dinner under starlit skies.',
        highlights: ['Ritigala forest monastery', 'Ancient stone causeways', 'Nature walk'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 5,
        title: 'King Kashyapa’s Sky Palace at Sigiriya',
        location: 'Sigiriya',
        morning: 'Private dawn climb of the Sigiriya Lion Rock citadel before morning heat sets in.',
        afternoon: 'Explore the boulder gardens, ancient water conduits, and the famous Sigiriya Frescoes and Mirror Wall inscriptions.',
        evening: 'Relaxation at the resort; private talk on 5th-century Sinhalese architecture.',
        highlights: ['Sigiriya summit palace', 'Mirror Wall poetry', 'Royal water gardens'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 6,
        title: 'Polonnaruwa: Medieval Stone Masterpieces',
        location: 'Polonnaruwa',
        morning: 'Visit the medieval royal capital of Polonnaruwa, exploring the Royal Palace, Council Chambers, and the Kumara Pokuna royal bath.',
        afternoon: 'Marvel at the Gal Vihara rock-cut Buddha sculptures and the circular Vatadage within the Sacred Quadrangle.',
        evening: 'Sunset drive along the ancient Parakrama Samudra reservoir bund.',
        highlights: ['Gal Vihara granite Buddhas', 'Vatadage circular temple', 'Parakrama Samudra'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 7,
        title: 'The Golden Caves of Dambulla & Matale Spice Foothills',
        location: 'Dambulla & Kandy Foothills',
        morning: 'Ascend the rock slope to inspect the five cave sanctuaries of Dambulla Cave Temple.',
        afternoon: 'Travel south toward the Kandyan foothills, stopping at Aluvihara Rock Cave Temple where the Buddhist canon was first transcribed on palm leaves.',
        evening: 'Farewell celebratory dinner showcasing royal Kandyan and heritage cuisine.',
        highlights: ['Dambulla cave frescoes', 'Aluvihara palm-leaf scripture caves', 'Celebration heritage dinner'],
        overnightLocation: 'Colonial Manor / Heritage Retreat',
        mealsIncluded: 'Breakfast & Farewell Dinner included'
      },
      {
        day: 8,
        title: 'Homeward Departure or Coastal Relaxation',
        location: 'Return Transfer',
        morning: 'Leisurely breakfast before private chauffeur transfer to Colombo Bandaranaike International Airport or your onward destination.',
        afternoon: 'Departure with memories of ancient royal kingdoms.',
        evening: 'Return flight.',
        highlights: ['Scenic drive', 'Personalized departure assistance'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Private air-conditioned vehicle with dedicated English-speaking chauffeur guide throughout',
      '7 nights in premier boutique heritage properties',
      'Daily breakfast, plus specified dinners',
      'All entrance fees to Anuradhapura, Mihintale, Yapahuwa, Sigiriya, Polonnaruwa, Dambulla & Aluvihara',
      'Dedicated private archaeological tour facilitation'
    ],
    exclusions: [
      'International flights and visas',
      'Meals not specified',
      'Discretionary tips and gratuities',
      'Personal insurance'
    ],
    transportDetails: 'Private luxury touring vehicle with licensed tourist chauffeur guide.',
    accommodationStyle: 'Colonial manors, serene lakeside heritage retreats, and jungle boutique pavilions.',
    activityLevel: 'Moderate: includes stair climbing at Sigiriya, Mihintale, and Yapahuwa.',
    customizationNotes: 'Pacing can be softened by adding an extra rest day or combining with hill-country tea estates.'
  },
  {
    id: 'southern-heritage-escape',
    slug: 'southern-heritage-escape',
    title: 'Galle Fort and Southern Heritage',
    subtitle: '17th-Century Ramparts, Colonial Architecture & Maritime Spice Trails',
    durationDays: 4,
    durationNights: 3,
    durationText: '4 Days / 3 Nights',
    category: 'Short Heritage Escapes',
    pace: 'Relaxed',
    travelerType: 'Design enthusiasts, couples, architecture lovers & ocean travelers',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Immerse yourself in the living 400-year-old story of Galle Fort. Wander cobblestone streets lined with Dutch VOC architecture, inspect restored coral-and-granite bastions at sunset, explore generational cinnamon estates, and unwind in historic colonial merchant mansions.',
    destinationsCovered: ['galle-fort', 'colombo'],
    heritageThemes: ['Colonial Maritime History', 'Living Historic Fortified Towns', 'Ceylon Cinnamon Heritage', 'Tropical Modernism'],
    keyHighlights: [
      'Private walking tour of Galle Fort with a local heritage conservationist',
      'Sunset cocktail on the Flag Rock Bastion overlooking the Indian Ocean',
      'Exclusive visit to a generational Ceylon cinnamon estate and peeling demonstration',
      'Tour of Geoffrey Bawa’s architectural country estate at Lunuganga',
      'Strolling the historic Dutch Reformed Church, Old Gate, and Maritime Museum'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Arrival in Galle Fort & Twilight Rampart Walk',
        location: 'Galle Fort',
        morning: 'Chauffeur transfer from Colombo along the southern expressway into Galle Fort.',
        afternoon: 'Check in to a restored 18th-century Dutch colonial merchant house with high ceilings and internal courtyards.',
        evening: 'Walk the ocean ramparts from Sun Bastion to the iconic 1939 Lighthouse as sea breezes roll in at sunset.',
        highlights: ['Galle Fort arrival', 'Twilight ramparts walk', 'Dutch colonial villa check-in'],
        overnightLocation: 'Historic Boutique Villa, Galle Fort',
        mealsIncluded: 'Welcome Dinner included'
      },
      {
        day: 2,
        title: 'Maritime History, Dutch Bastions & Artisan Alleys',
        location: 'Galle Fort',
        morning: 'Architectural walking tour through Church Street, Pedlar Street, and Leyn Baan Street, examining Dutch gables and coral stonework.',
        afternoon: 'Visit the Dutch Reformed Church (Groote Kerk) paved with gravestones, followed by the National Maritime Archaeology Museum.',
        evening: 'Sunset drinks at Flag Rock Bastion watching traditional cliff divers, followed by fresh seafood dining.',
        highlights: ['Groote Kerk Dutch church', 'Old VOC Gate & warehouses', 'Artisan boutiques and jewelers'],
        overnightLocation: 'Historic Boutique Villa, Galle Fort',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 3,
        title: 'Ceylon Cinnamon Heritage & Geoffrey Bawa’s Lunuganga',
        location: 'Southern Coast & Bentota',
        morning: 'Drive inland into the southern foothills to an artisanal cinnamon plantation; observe traditional quilling of true Ceylon cinnamon.',
        afternoon: 'Visit Lunuganga Country Estate, the legendary 50-year landscape laboratory of architect Geoffrey Bawa.',
        evening: 'Return to Galle Fort for dinner at an acclaimed seafood restaurant inside a Dutch hospital courtyard.',
        highlights: ['Cinnamon peeling demonstration', 'Lunuganga garden tour', 'Dutch Hospital dining'],
        overnightLocation: 'Historic Boutique Villa, Galle Fort',
        mealsIncluded: 'Breakfast & Lunch included'
      },
      {
        day: 4,
        title: 'Morning Fort Reflections & Departure',
        location: 'Galle to Colombo',
        morning: 'Peaceful morning coffee on your private veranda; last stroll along the ramparts for ocean photography.',
        afternoon: 'Private transfer back to Colombo or international airport.',
        evening: 'Departure.',
        highlights: ['Morning rampart walk', 'Scenic coastal drive'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Private air-conditioned transport and dedicated chauffeur guide',
      '3 nights in a heritage boutique mansion inside Galle Fort',
      'Daily breakfast and welcome dinner',
      'All guided tours and entrance fees to Galle museums and Lunuganga estate'
    ],
    exclusions: [
      'Flights and visas',
      'Discretionary tips',
      'Personal purchases'
    ],
    transportDetails: 'Private luxury sedan with dedicated chauffeur.',
    accommodationStyle: 'Restored Dutch and British colonial boutique villas inside the fort walls.',
    activityLevel: 'Gentle: relaxed pedestrian strolls on flat cobblestone streets.',
    customizationNotes: 'Easily combined with wildlife safaris in Yala or hill country tea estates.'
  },
  {
    id: 'kandy-hill-country-trail',
    slug: 'kandy-hill-country-trail',
    title: 'Kandy and Hill Country Heritage Trail',
    subtitle: 'Sacred Relics, Medieval Woodcarvings & Imperial Tea Estates',
    durationDays: 6,
    durationNights: 5,
    durationText: '6 Days / 5 Nights',
    category: 'Signature Journeys',
    pace: 'Balanced',
    travelerType: 'Couples, families, cultural travelers & scenic rail enthusiasts',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Ascend into the emerald mountains of Sri Lanka. From the last royal court of Kandy and the drumming rituals of the Temple of the Tooth to the medieval timber masterpieces of Embekke and the misty Victorian tea plantations of the central highlands.',
    destinationsCovered: ['kandy', 'matale'],
    heritageThemes: ['Royal Kandyan Kingdom', 'Sacred Buddhist Relics', 'Timber & Stone Architecture', 'British Colonial Tea Heritage'],
    keyHighlights: [
      'Evening thevava drumming puja at Sri Dalada Maligawa (Temple of the Sacred Tooth)',
      'The Western Temple triad: 14th-century woodcarvings of Embekke, stone Gadaladeniya, and Lankatilaka',
      'Scenic highland railway journey through misty ravines and tea-covered peaks',
      'Exclusive private tea masterclass at an operational 19th-century colonial tea factory',
      'Peradeniya Royal Botanical Gardens royal palm avenue and orchid collection'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Arrival in the Hill Capital of Kandy',
        location: 'Kandy',
        morning: 'Drive into the misty hills towards Kandy, pausing at a traditional spice plantation in the Matale foothills.',
        afternoon: 'Arrive in Kandy; check in to your colonial hill-station manor overlooking the valley.',
        evening: 'Sunset walk around the scenic perimeter of Kandy Lake; welcome dinner featuring hill-country curries.',
        highlights: ['Scenic hill climb', 'Kandy Lake stroll', 'Colonial manor check-in'],
        overnightLocation: 'Colonial Hill Manor, Kandy',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'The Sacred Tooth Temple & Royal Botanical Gardens',
        location: 'Kandy',
        morning: 'Visit the world-renowned Royal Botanical Gardens in Peradeniya, founded in 1371 as a royal court pleasure garden.',
        afternoon: 'Private introduction to Kandyan architecture and royal court history with an architectural researcher.',
        evening: 'Attend the solemn evening drumming and offering ceremony (Thevava) at Sri Dalada Maligawa, offering fresh lotus blossoms.',
        highlights: ['Peradeniya Orchid House', 'Temple of the Sacred Tooth Relic', 'Thevava evening puja ceremony'],
        overnightLocation: 'Colonial Hill Manor, Kandy',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 3,
        title: 'The Medieval Western Temple Triad',
        location: 'Pilimathalawa & Gampola',
        morning: 'Explore Embekke Devale to inspect the 14th-century wooden pillar carvings of mythical beasts, swans, and combatants.',
        afternoon: 'Visit Gadaladeniya Rock Temple (displaying Dravidian stone architectural influences) and the commanding rock-top Lankatilaka Vihara.',
        evening: 'Private performance of classical Kandyan drumming and sacred dance.',
        highlights: ['Embekke wood carvings', 'Gadaladeniya rock temple', 'Lankatilaka panoramic vista'],
        overnightLocation: 'Colonial Hill Manor, Kandy',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 4,
        title: 'Scenic Train to the Cloud Country of Nuwara Eliya',
        location: 'Central Highlands',
        morning: 'Board the historic blue highland train for a legendary rail journey through tea-draped valleys and mist-hung peaks.',
        afternoon: 'Chauffeur meets you at Nanu Oya station; transfer to Nuwara Eliya ("Little England"), inspecting British colonial cottages and post office.',
        evening: 'Traditional high tea by a roaring log fire at a heritage tea planter’s club.',
        highlights: ['Highland scenic train ride', 'Tea country panoramas', 'Colonial planters high tea'],
        overnightLocation: 'Heritage Tea Planter’s Bungalow',
        mealsIncluded: 'Breakfast & High Tea included'
      },
      {
        day: 5,
        title: 'The Living Legacy of Ceylon Tea',
        location: 'Highland Tea Valleys',
        morning: 'Walk through emerald tea bushes with experienced tea pickers, learning the two-leaves-and-a-bud harvest standard.',
        afternoon: 'Private factory walkthrough tracing withering, rolling, oxidation, and firing; guided cupping session of Orange Pekoes.',
        evening: 'Leisurely dinner at the tea bungalow with sweeping mountain views.',
        highlights: ['Tea plucking experience', 'Colonial factory tour', 'Exclusive tea tasting session'],
        overnightLocation: 'Heritage Tea Planter’s Bungalow',
        mealsIncluded: 'Breakfast & Lunch included'
      },
      {
        day: 6,
        title: 'Descent from the Highlands & Departure',
        location: 'Return Transfer',
        morning: 'Morning breakfast on the lawn overlooking the tea gardens.',
        afternoon: 'Scenic descent through the waterfall valleys towards Colombo or coastal destinations.',
        evening: 'Departure.',
        highlights: ['St Clair & Devon waterfall viewpoints', 'Scenic mountain descent'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Private air-conditioned vehicle with dedicated chauffeur guide',
      '5 nights in boutique colonial hotels and authentic tea planter bungalows',
      'Daily breakfast and specified meals',
      'Reserved first-class or observation rail tickets (subject to railway schedule)',
      'All temple entry permits and private tea factory access'
    ],
    exclusions: [
      'Flights and visas',
      'Meals not specified',
      'Discretionary tips'
    ],
    transportDetails: 'Private luxury touring car + scenic mountain rail sector.',
    accommodationStyle: 'Colonial hilltop manors and authentic restored tea planter bungalows.',
    activityLevel: 'Mild to moderate: gentle walks across botanical gardens and tea hills.',
    customizationNotes: 'Can be linked with Galle Fort or extended into Yala National Park.'
  },
  {
    id: 'northern-heritage-discovery',
    slug: 'northern-heritage-discovery',
    title: 'Northern Sri Lanka Heritage Discovery',
    subtitle: 'Jaffna, Nallur Kovil, Coastal Forts & Island Sanctuaries',
    durationDays: 7,
    durationNights: 6,
    durationText: '7 Days / 6 Nights',
    category: 'Private Cultural Tours',
    pace: 'Balanced',
    travelerType: 'Intrepid cultural travelers, scholars & off-the-beaten-path explorers',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Discover the rich, distinct Tamil heritage of Sri Lanka’s northern peninsula. Experience the devotional beauty of Nallur Kandaswamy Kovil, walk the coral-stone ramparts of Jaffna Fort, take wooden boats to island hermitages, and savour distinctive northern culinary traditions.',
    destinationsCovered: ['jaffna', 'anuradhapura'],
    heritageThemes: ['Saiva Siddhanta Dravidian Kovils', 'Colonial Coastal Forts', 'Palmyra Culture', 'Northern Island Communities'],
    keyHighlights: [
      'Witnessing the sacred evening puja at Nallur Kandaswamy Kovil',
      'Walking the coral-stone walls of the Dutch pentagonal Jaffna Fort',
      'Ferry crossing to Nainativu / Nagadeepa island sacred to Buddhists and Hindus',
      'Tasting authentic Jaffna crab curry and odiyal kool seafood stew',
      'Inspecting the Indo-Saracenic architecture of Jaffna Public Library'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Journey North Across the Elephant Pass Causeway',
        location: 'Jaffna Peninsula',
        morning: 'Depart Anuradhapura or Colombo, travelling north through the vast dry zone and the historic Elephant Pass causeway.',
        afternoon: 'Arrive in Jaffna; check in to your boutique heritage hotel.',
        evening: 'Introductory walking tour of central Jaffna and the iconic Jaffna Public Library.',
        highlights: ['Elephant Pass crossing', 'Jaffna Public Library', 'Palmyra landscapes'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'Nallur Kandaswamy Kovil & The Ancient Aryacakravarti Capital',
        location: 'Nallur & Jaffna',
        morning: 'Explore the historic sites of the medieval Jaffna Kingdom: the King Sangiliyan statue, Yamuna Eri royal bath, and Manthiri Manai palace ruins.',
        afternoon: 'Rest and cultural briefing on northern temple traditions.',
        evening: 'Attend the awe-inspiring evening puja at Nallur Kandaswamy Kovil, filled with resonant bells, conch shells, and burning camphor.',
        highlights: ['Nallur Kovil puja ceremony', 'Yamuna Eri royal tank', 'Kingdom ruins'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 3,
        title: 'Jaffna Fort Ramparts & Island Boat Excursion',
        location: 'Jaffna Fort & Nainativu',
        morning: 'Walk the extensive coral-stone ramparts and bastions of Jaffna Fort overlooking the calm lagoon.',
        afternoon: 'Take a scenic ferry from Kurikadduwan jetty to Nainativu island, visiting the Nagapooshani Amman Kovil and Nagadeepa Purana Vihara.',
        evening: 'Sunset over the coastal causeway; dinner featuring traditional Jaffna vegetable curries and appam.',
        highlights: ['Jaffna Fort bastions', 'Nainativu island ferry', 'Nagadeepa Buddhist temple'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast & Lunch included'
      },
      {
        day: 4,
        title: 'Point Pedro & The Sacred Mineral Springs of Keerimalai',
        location: 'Point Pedro & Keerimalai',
        morning: 'Travel to Point Pedro, the northernmost point of Sri Lanka, viewing the historic lighthouse and fishing catamarans.',
        afternoon: 'Visit the ancient seaside Keerimalai Naguleswaram Kovil and bathe at the sacred freshwater coastal spring.',
        evening: 'Explore the mysterious Kadurugoda Buddhist miniature stupas in Chunnakam.',
        highlights: ['Northernmost point of Sri Lanka', 'Keerimalai coastal freshwater springs', 'Kadurugoda miniature stupas'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 5,
        title: 'Palmyra Craft Traditions & Northern Culinary Feast',
        location: 'Jaffna Craft Villages',
        morning: 'Visit a traditional Palmyra palm weaving community to observe how every part of the tree is utilised for timber, baskets, and sweet kitul.',
        afternoon: 'Private northern cooking masterclass: preparing fragrant roasted Jaffna curry powder and local seafood.',
        evening: 'Celebratory banquet with northern crab curry.',
        highlights: ['Palmyra artisanal weaving', 'Jaffna crab curry masterclass', 'Authentic culinary banquet'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast & Feast included'
      },
      {
        day: 6,
        title: 'Southward Journey to the Sacred City of Anuradhapura',
        location: 'Anuradhapura',
        morning: 'Depart Jaffna, travelling south into the ancient royal capital of Anuradhapura.',
        afternoon: 'Afternoon visit to the ancient Ruwanwelisaya stupa in early evening twilight.',
        evening: 'Quiet dinner at a lakeside lodge in Anuradhapura.',
        highlights: ['Scenic southern drive', 'Ruwanwelisaya stupa in twilight'],
        overnightLocation: 'Lakeside Lodge, Anuradhapura',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 7,
        title: 'Return to Colombo & Departure',
        location: 'Return Transfer',
        morning: 'Leisurely breakfast before private transfer to Colombo or the airport.',
        afternoon: 'Airport arrival for flight home.',
        evening: 'Departure.',
        highlights: ['Scenic drive', 'Homeward journey'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Dedicated air-conditioned private vehicle and chauffeur guide',
      '6 nights in comfortable boutique accommodations',
      'Daily breakfast, plus specified meals and cooking feast',
      'All local ferries, island permits, and temple admissions'
    ],
    exclusions: [
      'Flights and visas',
      'Personal expenses',
      'Tips'
    ],
    transportDetails: 'Private air-conditioned vehicle with experienced chauffeur.',
    accommodationStyle: 'Curated boutique hotels in Jaffna and lakeside heritage retreats.',
    activityLevel: 'Moderate: includes short island boat crossings and temple walking.',
    customizationNotes: 'Can be linked with train service on the restored Yal Devi express line.'
  },
  {
    id: 'ancient-water-systems',
    slug: 'ancient-water-systems',
    title: 'Ancient Water Systems and Cultural Landscapes',
    subtitle: 'The Great Reservoirs, Cascade Tanks & Dry-Zone Agrarian Civilisation',
    durationDays: 5,
    durationNights: 4,
    durationText: '5 Days / 4 Nights',
    category: 'Private Cultural Tours',
    pace: 'Relaxed',
    travelerType: 'Eco-conscious travelers, engineers, landscape lovers & birders',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Discover how ancient Sri Lanka conquered drought without electricity or modern concrete. Explore the globally celebrated Ellangawa (Cascade Tank) systems, colossal inland sea reservoirs, stone sluice gates (bisokotuwa), and the idyllic village ecosystems that remain vital today.',
    destinationsCovered: ['polonnaruwa', 'anuradhapura', 'ritigala', 'sigiriya'],
    heritageThemes: ['Hydraulic Engineering', 'FAO Agricultural Heritage', 'Ecosystem Conservation', 'Rural Village Traditions'],
    keyHighlights: [
      'Inspecting 2,000-year-old stone bisokotuwa (valve pits) that pioneered hydraulic pressure regulation',
      'Catamaran journey at dawn across water lily-carpeted ancient tanks',
      'Guided walk along the massive earthen bund of Parakrama Samudra inland sea',
      'Meeting local organic farming families practicing traditional kaiya community cooperation',
      'Birdwatching on ancient village tanks that attract hundreds of migratory species'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Introduction to the Hydraulic Civilization: Tissa Wewa',
        location: 'Anuradhapura',
        morning: 'Arrive in the North Central plains; check in to an eco-resort nestled by an ancient irrigation lake.',
        afternoon: 'Examine the 3rd-century BCE Tissa Wewa embankment and the royal gold-plated pleasure gardens (Ranmasu Uyana).',
        evening: 'Sunset over Nuwara Wewa reservoir with a specialist in ancient water architecture.',
        highlights: ['Tissa Wewa reservoir', 'Ranmasu Uyana star chart rock', 'Sunset water views'],
        overnightLocation: 'Eco-Heritage Resort, Anuradhapura',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'Bisokotuwa: The Valve Pit Invention That Changed History',
        location: 'Ancient Tank Systems',
        morning: 'Field trip to discover ancient stone sluice gates (bisokotuwa), learning how ancient engineers relieved water pressure before European science solved the problem.',
        afternoon: 'Explore the UNESCO Globally Important Agricultural Heritage cascade system in a rural village.',
        evening: 'Authentic village dinner prepared by water-tank farming families.',
        highlights: ['Bisokotuwa stone sluice discovery', 'Cascade tank engineering', 'Village home meal'],
        overnightLocation: 'Eco-Heritage Resort, Anuradhapura',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 3,
        title: 'Parakrama Samudra: The Sea of Parakramabahu',
        location: 'Polonnaruwa',
        morning: 'Travel to Polonnaruwa to inspect the colossal Parakrama Samudra, covering 2,500 hectares of water surface.',
        afternoon: 'Visit the historic Angamedilla canal headworks and stone aqueducts that fed ancient royal palaces.',
        evening: 'Boat cruise on the reservoir observing cormorants, pelicans, and wild Asian elephants drinking on the banks.',
        highlights: ['Parakrama Samudra inland sea', 'Angamedilla ancient weir', 'Elephant watching at waterhole'],
        overnightLocation: 'Lakeside Resort, Polonnaruwa',
        mealsIncluded: 'Breakfast & Lunch included'
      },
      {
        day: 4,
        title: 'Ritigala Rainforest Watershed & Traditional Chena Agriculture',
        location: 'Ritigala',
        morning: 'Ascend the foothills of Ritigala Strict Nature Reserve to see how mountain cloud forests capture moisture for downstream dry plains.',
        afternoon: 'Walk through traditional seasonal chena fields and visit an elevated treehouse watchtower (pela).',
        evening: 'Starlit dining beside a private village lake.',
        highlights: ['Ritigala mountain catchment', 'Traditional treehouse lookout', 'Waterside dining'],
        overnightLocation: 'Lakeside Resort, Polonnaruwa',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 5,
        title: 'Morning Waterway Reflections & Departure',
        location: 'Return Transfer',
        morning: 'Early morning catamaran glide across the lotus ponds.',
        afternoon: 'Private transfer back to Colombo or international airport.',
        evening: 'Departure.',
        highlights: ['Dawn catamaran glide', 'Homeward transfer'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Private air-conditioned touring vehicle and experienced guide',
      '4 nights in sustainable eco-luxury heritage lodges',
      'Daily breakfast and specified traditional meals',
      'All tank excursions, boat cruises, and specialist hydraulic briefings'
    ],
    exclusions: [
      'Flights and visas',
      'Tips',
      'Personal items'
    ],
    transportDetails: 'Private vehicle with dedicated chauffeur guide.',
    accommodationStyle: 'Eco-luxury retreats and tranquil lakeside pavilions.',
    activityLevel: 'Gentle to moderate: flat walking across earthen dams and village trails.',
    customizationNotes: 'Ideal for nature enthusiasts and environmentally minded travelers.'
  },
  {
    id: 'grand-heritage-journey',
    slug: 'grand-heritage-journey',
    title: 'Sri Lanka Grand Heritage Journey',
    subtitle: 'The Definitive 14-Day Odyssey Through Three Millennia of Island Culture',
    durationDays: 14,
    durationNights: 13,
    durationText: '14 Days / 13 Nights',
    category: 'Grand Expeditions',
    pace: 'Balanced',
    travelerType: 'Discerning international travelers seeking the ultimate Sri Lanka cultural discovery',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The comprehensive Sri Lankan cultural expedition. Connect the ancient sacred stupas of Anuradhapura and the rock citadels of Sigiriya and Yapahuwa, cross into the Tamil kingdom of Jaffna, climb into the misty royal hills of Kandy, ride colonial mountain trains through tea valleys, and complete your journey along the Dutch ramparts of Galle Fort.',
    destinationsCovered: ['anuradhapura', 'jaffna', 'sigiriya', 'polonnaruwa', 'dambulla', 'kandy', 'galle-fort'],
    heritageThemes: ['All Major UNESCO Heritage Sites', 'Northern & Southern Civilisations', 'Sacred Buddhist & Hindu Pilgrimages', 'Maritime Colonial Fortresses', 'Living Crafts & Culinary Traditions'],
    keyHighlights: [
      'All seven cultural UNESCO World Heritage Sites of Sri Lanka in one seamless route',
      'Private dawn ascents of Sigiriya and sunset climbs of Mihintale',
      'Exclusive access to temple ceremonies in Kandy, Anuradhapura, and Jaffna',
      'Highland observation train journey through emerald Ceylon tea estates',
      'Three nights in Galle Fort inside restored 18th-century Dutch merchant manors',
      'Dedicated private vehicle, expert chauffeur guide, and 24/7 concierge support'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo & Coastal Heritage Welcome',
        location: 'Colombo',
        morning: 'Airport greeting by your senior chauffeur guide; transfer to a colonial seaside hotel.',
        afternoon: 'Walking tour of Colombo’s historic Fort district, Old Dutch Hospital, and Galle Face Green.',
        evening: 'Welcome seafood dinner at an acclaimed heritage restaurant.',
        highlights: ['Colonial Fort walk', 'Old Dutch Hospital', 'Galle Face sunset'],
        overnightLocation: 'Heritage Hotel, Colombo',
        mealsIncluded: 'Dinner included'
      },
      {
        day: 2,
        title: 'The Granite Staircase of Yapahuwa En Route to Anuradhapura',
        location: 'Yapahuwa & Anuradhapura',
        morning: 'Travel north toward the ancient kingdom of Anuradhapura, pausing at the 13th-century cliff citadel of Yapahuwa.',
        afternoon: 'Climb the ornamental carved stone staircase flanked by guardian lions.',
        evening: 'Check in to a heritage estate beside the ancient waters of Tissa Wewa.',
        highlights: ['Yapahuwa cliff fortress', 'Tissa Wewa lake check-in'],
        overnightLocation: 'Heritage Estate, Anuradhapura',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 3,
        title: 'Anuradhapura: Two Millennia of Buddhist Devotion',
        location: 'Anuradhapura',
        morning: 'Pay respects at the ancient Jaya Sri Maha Bodhi, world’s oldest documented tree.',
        afternoon: 'Stand before the colossal Ruwanwelisaya and Jetavanaramaya brick stupas, and view the Kuttam Pokuna twin ponds.',
        evening: 'Sunset contemplation at Samadhi Buddha statue.',
        highlights: ['Jaya Sri Maha Bodhi', 'Ruwanwelisaya stupa', 'Jetavanaramaya'],
        overnightLocation: 'Heritage Estate, Anuradhapura',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 4,
        title: 'Mihintale Sacred Mountain & Northward Odyssey to Jaffna',
        location: 'Mihintale to Jaffna',
        morning: 'Climb the frangipani stone staircase of Mihintale sacred mountain where Buddhism was first proclaimed.',
        afternoon: 'Travel north across the Elephant Pass causeway into the vibrant Tamil cultural capital of Jaffna.',
        evening: 'Evening welcome walk through Jaffna town; tasting authentic northern hoppers.',
        highlights: ['Mihintale sacred mountain', 'Elephant Pass causeway', 'Jaffna arrival'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 5,
        title: 'Jaffna Fort, Nallur Kovil & Island Sanctuaries',
        location: 'Jaffna & Nainativu',
        morning: 'Explore the coral-stone ramparts of Jaffna Fort and take a ferry to Nainativu island temples.',
        afternoon: 'Visit the historic Jaffna Public Library and Yamuna Eri royal pool ruins.',
        evening: 'Attend the awe-inspiring evening puja at Nallur Kandaswamy Kovil.',
        highlights: ['Nallur Kandaswamy Kovil puja', 'Jaffna Fort ramparts', 'Island boat ferry'],
        overnightLocation: 'Boutique Hotel, Jaffna',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 6,
        title: 'Journey South to King Kashyapa’s Realm in Sigiriya',
        location: 'Sigiriya',
        morning: 'Depart Jaffna, travelling south back into the lush Cultural Triangle.',
        afternoon: 'Check in to your boutique eco-resort in Sigiriya; afternoon leisure by the pool.',
        evening: 'Catamaran boat ride across an ancient lotus-filled wewa with views of the distant rock fortress.',
        highlights: ['Scenic southern drive', 'Catamaran lake cruise'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 7,
        title: 'The Majestic Summit of Sigiriya Rock Fortress',
        location: 'Sigiriya',
        morning: 'Early dawn ascent of Sigiriya Lion Rock citadel before morning heat sets in.',
        afternoon: 'Examine the 5th-century frescoes, the Mirror Wall graffiti, and the monumental Lion Gate terrace.',
        evening: 'Traditional village culinary experience cooked over wood fires in clay pots.',
        highlights: ['Sigiriya summit palace', 'Mirror Wall poetry', 'Traditional clay-pot feast'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast & Dinner included'
      },
      {
        day: 8,
        title: 'Polonnaruwa: Medieval Stone Masterpieces & Gal Vihara',
        location: 'Polonnaruwa',
        morning: 'Explore the medieval royal palaces, Council Chamber, and royal baths of Polonnaruwa.',
        afternoon: 'Marvel at the four colossal rock-cut Buddha statues at Gal Vihara and the circular Vatadage.',
        evening: 'Sunset drive along the embankment of the Parakrama Samudra inland sea.',
        highlights: ['Gal Vihara stone Buddhas', 'Vatadage circular relic shrine', 'Parakrama Samudra'],
        overnightLocation: 'Boutique Lodge, Sigiriya',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 9,
        title: 'Dambulla Golden Caves & Aluvihara En Route to Kandy',
        location: 'Dambulla to Kandy',
        morning: 'Walk through the five golden cave shrines of Dambulla Cave Temple.',
        afternoon: 'Visit Aluvihara Rock Cave Temple in Matale where Buddhist scriptures were first inscribed on palm leaves.',
        evening: 'Arrive in the royal hill capital of Kandy; check in to a colonial hilltop manor.',
        highlights: ['Dambulla cave frescoes', 'Aluvihara palm-leaf scriptures', 'Kandy arrival'],
        overnightLocation: 'Colonial Hill Manor, Kandy',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 10,
        title: 'Temple of the Tooth & Kandyan Living Traditions',
        location: 'Kandy',
        morning: 'Stroll through the royal palm avenues of Peradeniya Botanical Gardens.',
        afternoon: 'Examine the medieval carved timber pillars of Embekke Devale.',
        evening: 'Attend the thevava drumming and offering ceremony at the Temple of the Sacred Tooth Relic.',
        highlights: ['Temple of the Tooth Relic', 'Embekke woodcarvings', 'Peradeniya Botanical Gardens'],
        overnightLocation: 'Colonial Hill Manor, Kandy',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 11,
        title: 'Scenic Mountain Train to Highland Tea Country',
        location: 'Central Highlands',
        morning: 'Board the historic blue mountain train for a breathtaking journey through mist-wreathed tea hills.',
        afternoon: 'Check in to a restored British colonial tea planter’s bungalow.',
        evening: 'High tea by a fireplace, followed by dinner overlooking tea valleys.',
        highlights: ['Highland scenic train ride', 'Tea planter bungalow stay', 'Colonial high tea'],
        overnightLocation: 'Heritage Tea Planter’s Bungalow',
        mealsIncluded: 'Breakfast & High Tea included'
      },
      {
        day: 12,
        title: 'Descent to the 17th-Century Ramparts of Galle Fort',
        location: 'Galle Fort',
        morning: 'Private tea factory tour and tasting session before descending out of the mountains toward the southern coast.',
        afternoon: 'Arrive in the UNESCO World Heritage living city of Galle Fort; check in to a restored Dutch colonial villa.',
        evening: 'Twilight stroll along the ocean ramparts towards the Galle Lighthouse.',
        highlights: ['Tea tasting masterclass', 'Galle Fort arrival', 'Twilight rampart stroll'],
        overnightLocation: 'Historic Boutique Villa, Galle Fort',
        mealsIncluded: 'Breakfast included'
      },
      {
        day: 13,
        title: 'Living History in Galle Fort & Cinnamon Plantation',
        location: 'Galle Fort & Southern Coast',
        morning: 'Private architectural walking tour through Galle Fort’s cobblestone alleys, Dutch churches, and bastions.',
        afternoon: 'Visit an artisanal cinnamon estate to watch traditional quilling of true Ceylon cinnamon.',
        evening: 'Celebratory farewell seafood dinner inside the historic Dutch Hospital courtyard.',
        highlights: ['Galle Fort architecture', 'Cinnamon quilling demonstration', 'Farewell seafood banquet'],
        overnightLocation: 'Historic Boutique Villa, Galle Fort',
        mealsIncluded: 'Breakfast & Farewell Dinner included'
      },
      {
        day: 14,
        title: 'Final Reflections & Departure',
        location: 'Return Transfer',
        morning: 'Relaxed morning coffee on the veranda and final photography around the fort.',
        afternoon: 'Express transfer along the southern coastal motorway directly to Colombo International Airport.',
        evening: 'Homeward flight carrying unforgettable memories of Sri Lankan heritage.',
        highlights: ['Last fort stroll', 'Smooth airport transfer'],
        overnightLocation: 'Departure',
        mealsIncluded: 'Breakfast included'
      }
    ],
    inclusions: [
      'Dedicated air-conditioned luxury private touring vehicle with senior English-speaking chauffeur guide throughout',
      '13 nights in handpicked premier boutique heritage hotels, colonial manors, and tea bungalows',
      'Daily breakfast, plus specified welcome/farewell feasts and traditional village lunches',
      'All entrance fees to all 7 cultural UNESCO sites, private boat excursions, and temple admissions',
      'Scenic highland railway tickets',
      '24/7 dedicated local concierge and trip management support'
    ],
    exclusions: [
      'International flights and Sri Lanka ETA visa',
      'Meals and drinks not specified',
      'Discretionary tips for chauffeur and guides',
      'Personal travel insurance'
    ],
    transportDetails: 'Private luxury touring car or van with senior licensed chauffeur guide.',
    accommodationStyle: 'Exclusive boutique heritage hotels, private colonial villas, and tea planter bungalows.',
    activityLevel: 'Balanced: tailored to your rhythm with rest breaks and gentle cultural exploration.',
    customizationNotes: 'Completely customizable: additional beach days, wildlife safaris, or wellness days can be added.'
  },
  {
    id: 'private-custom-heritage-tour',
    slug: 'private-custom-heritage-tour',
    title: 'Bespoke Cultural Heritage Journey',
    subtitle: 'Tailored Exclusively to Your Personal Travel Pace & Passions',
    durationDays: 7,
    durationNights: 6,
    durationText: 'Completely Flexible Duration',
    category: 'Private Cultural Tours',
    pace: 'Relaxed',
    travelerType: 'Travelers with bespoke dates, specific interests, multi-generational families & private groups',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Design your own Sri Lankan heritage journey. Whether you wish to focus exclusively on ancient Buddhist epigraphy, explore colonial fortresses along both coastlines, spend weeks discovering village water engineering, or balance cultural exploration with Ayurveda and wildlife, our Colombo travel specialists will curate every day around your wishes.',
    destinationsCovered: ['sigiriya', 'kandy', 'galle-fort', 'anuradhapura', 'jaffna'],
    heritageThemes: ['100% Customized Itinerary', 'Private Chauffeur Guide', 'Handpicked Boutique Hotels', 'Flexible Pace'],
    keyHighlights: [
      'Customized itinerary crafted by certified Sri Lankan heritage specialists',
      'Your choice of boutique heritage villas, eco-lodges, or luxury colonial manors',
      'Private air-conditioned vehicle with dedicated personal chauffeur guide',
      'Flexibility to stop, explore, or rest whenever you wish',
      'Direct WhatsApp and phone concierge support throughout your journey'
    ],
    dayByDayItinerary: [
      {
        day: 1,
        title: 'Personalized Arrival & Private Chauffeur Greeting',
        location: 'Flexible',
        morning: 'Warm arrival greeting at Colombo Airport with cold towels and fresh king coconut.',
        afternoon: 'Transfer to your chosen opening destination with scenic en-route stops.',
        evening: 'Evening welcome briefing on your custom route.',
        highlights: ['VIP airport greeting', 'Private luxury transfer'],
        overnightLocation: 'Your selected boutique hotel',
        mealsIncluded: 'As per custom plan'
      },
      {
        day: 2,
        title: 'Custom Cultural Exploration at Your Rhythm',
        location: 'Tailored',
        morning: 'Morning visits tailored to your specific passions (archaeology, architecture, crafts, or photography).',
        afternoon: 'Relaxed afternoon at your own pace without rigid bus tour schedules.',
        evening: 'Evening culinary or cultural experiences chosen by you.',
        highlights: ['Personalized excursion timing', 'Unrushed discovery'],
        overnightLocation: 'Your selected boutique hotel',
        mealsIncluded: 'As per custom plan'
      }
    ],
    inclusions: [
      'Dedicated private vehicle with licensed tourist chauffeur guide throughout',
      'Boutique accommodations matched to your preferred standard',
      'All custom entrance passes and permits pre-arranged',
      'Personalized route planning and 24/7 on-trip assistance'
    ],
    exclusions: [
      'International flights and visas',
      'Services not requested in your custom quotation'
    ],
    transportDetails: 'Private luxury sedan, premium SUV, or executive van.',
    accommodationStyle: 'Handpicked according to your preferences (Boutique Heritage, Colonial Luxury, or Sustainable Retreats).',
    activityLevel: 'Customized to your physical comfort and mobility requirements.',
    customizationNotes: 'Launch our interactive Tour Planner to specify your dream dates, destinations, and preferences!'
  }
];
