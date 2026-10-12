import { HeritageExperience } from '@/types/heritage';
import { Experience } from '@/types/trip';

export const HERITAGE_EXPERIENCES: HeritageExperience[] = [
  {
    id: 'ancient-kingdoms',
    slug: 'ancient-kingdoms',
    title: 'Ancient Kingdoms and Lost Cities',
    eyebrow: 'ARCHAEOLOGY & MONUMENTAL CIVILISATIONS',
    subtitle: 'Explore monumental brick stupas, royal pleasure pavilions, and granite citadels across three millennia of imperial history.',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Sri Lanka’s dry zone plains were home to sophisticated urban civilisations that flourished when Rome was still a republic. From the ancient palace terraces of Sigiriya to the vast sacred precincts of Anuradhapura and the medieval palaces of Polonnaruwa, our private heritage journeys reveal how ancient engineers and sculptors shaped landscape, stone, and water into monumental expressions of sovereign power and spiritual devotion.',
    culturalContext: 'These sites are not merely archaeological ruins; they remain active spiritual ground and symbols of cultural continuity for the Sri Lankan people. Our specialist guides provide historical context based on contemporary epigraphy and chronicles such as the Mahavamsa and Culavamsa without mythologising or superficial generalisations.',
    possibleActivities: [
      {
        title: 'Dawn Exploration of the Sigiriya Citadel',
        description: 'Ascend the granite rock fortress in early morning light before midday warmth, accompanied by an archaeological specialist who deciphers the ancient water gardens and Mirror Wall poetry.'
      },
      {
        title: 'Monolithic Stone Sculptures of Polonnaruwa',
        description: 'Study the Gal Vihara granite Buddhas, the circular Vatadage relic house, and the engineering behind the Parakrama Samudra reservoir.'
      },
      {
        title: 'The Great Stupas of Anuradhapura by Bicycle or Chauffeur',
        description: 'Witness the scale of Ruwanwelisaya and Jetavanaramaya, discovering the brick manufacturing and foundation techniques that allowed them to withstand earthquakes for two millennia.'
      },
      {
        title: 'The Hidden Staircase of Yapahuwa',
        description: 'Climb the steep ceremonial granite staircase of the 13th-century cliff capital, admiring Chinese trade artifacts and carved guardian lion motifs.'
      }
    ],
    relevantDestinations: ['sigiriya', 'anuradhapura', 'polonnaruwa', 'yapahuwa', 'ritigala'],
    relatedTourSlugs: ['cultural-triangle-journey', 'ancient-kingdoms-sacred-cities', 'grand-heritage-journey'],
    visitorEtiquette: 'Preserve all historic stonework by avoiding touching delicate plaster murals and carved inscriptions. Do not climb unpaved walls or remove any archaeological fragments.',
    readingTime: '5 min read'
  },
  {
    id: 'sacred-architecture',
    slug: 'sacred-architecture',
    title: 'Sacred Temples and Spiritual Heritage',
    eyebrow: 'SANCTUARIES OF DEVOTION & FAITH',
    subtitle: 'Discover two thousand years of Buddhist and Hindu sacred architecture, living pilgrimage rituals, and monumental cave shrines.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'From the golden-roofed Temple of the Sacred Tooth Relic in Kandy to the cavern sanctuaries of Dambulla and the soaring Dravidian gopurams of Nallur Kandaswamy Kovil in Jaffna, Sri Lanka holds some of the world’s most venerable sacred sanctuaries. Experience the visual splendour of temple art and the serene rhythm of daily puja ceremonies.',
    culturalContext: 'Religion in Sri Lanka is woven deeply into community life. Pilgrims wear pristine white clothing to Buddhist temples and approach shrines with sincere mindfulness. In Hindu kovils, devotional music, brass oil lamps, and fragrant camphor rituals honour deities that have protected islanders for generations.',
    possibleActivities: [
      {
        title: 'Evening Drumming & Offering (Thevava) at Temple of the Tooth',
        description: 'Observe the historic ritual ceremonies accompanied by traditional hevisi drummers, silver conches, and offerings of fresh white lotus blossoms.'
      },
      {
        title: 'Illuminated Caverns of Dambulla at Morning Light',
        description: 'Walk through five cavern sanctuaries to inspect classical rock ceiling paintings created with natural earth cinnabar, lampblack, and ochre.'
      },
      {
        title: 'Pilgrimage Ascent of Mihintale Sacred Mountain',
        description: 'Climb 1,840 stone steps through frangipani groves to reach the sacred mountain terrace where Buddhism was first proclaimed to the royal court.'
      },
      {
        title: 'Puja Rituals at Nallur Kandaswamy Kovil in Jaffna',
        description: 'Participate respectfully in the vibrant evening ceremonies within the grand pillared halls of the North’s premier Murugan temple.'
      }
    ],
    relevantDestinations: ['kandy', 'dambulla', 'anuradhapura', 'mihintale', 'jaffna', 'matale'],
    relatedTourSlugs: ['sacred-cities-spiritual-heritage', 'kandy-hill-country-trail', 'grand-heritage-journey'],
    visitorEtiquette: 'Modest attire is mandatory: white or light-coloured clothing covering shoulders and knees. Remove footwear and headwear before stepping onto temple terraces. Always face deities and stupas respectfully; never pose for photos with your back turned to a Buddha statue.',
    readingTime: '6 min read'
  },
  {
    id: 'historic-architecture',
    slug: 'historic-architecture',
    title: 'Architecture Through the Ages',
    eyebrow: 'COLONIAL FORTRESSES & TIMBER MASTERPIECES',
    subtitle: 'From medieval timber temples and hydraulic bastions to 400-year-old Dutch ramparts and tropical modernist pavilions.',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Sri Lanka’s architectural heritage reflects centuries of indigenous ingenuity interwoven with maritime trade influences. Explore ancient stone foundation techniques, medieval Kandyan wood carvings, monumental colonial maritime bastions in Galle and Jaffna, and the pioneering 20th-century Tropical Modernism of Geoffrey Bawa.',
    culturalContext: 'Each architectural era reveals how builders adapted structures to the island’s monsoon rhythms, cooling breezes, and natural terrain. The Dutch used local coral and laterite; Kandyan master craftsmen worked seasoned jackfruit and ironwood timbers; and modern architects erased the barrier between indoors and lush tropical garden.',
    possibleActivities: [
      {
        title: 'Walking the 17th-Century Ramparts of Galle Fort',
        description: 'Discover the Dutch bastion layout, underground tidal drainage, and coral-stone architecture with a local architectural historian.'
      },
      {
        title: 'The Intricate Woodcarvings of Embekke Devale',
        description: 'Examine 14th-century carved wooden pillars depicting mythical swans (hamsa), double-headed eagles (bherunda), and wrestlers.'
      },
      {
        title: 'Jaffna Fort Coral-Stone Ramparts & Dutch Church Ruins',
        description: 'Walk the pentagonal ramparts overlooking the Palk Strait, studying military fortification methods from the Portuguese and VOC eras.'
      },
      {
        title: 'Geoffrey Bawa’s Architectural Landmarks',
        description: 'Visit iconic estates like Lunuganga Country Estate and the Parliament at Kotte to see how modern Sri Lankan architecture celebrates ancient landscape traditions.'
      }
    ],
    relevantDestinations: ['galle-fort', 'kandy', 'jaffna', 'colombo'],
    relatedTourSlugs: ['southern-heritage-escape', 'kandy-hill-country-trail', 'grand-heritage-journey'],
    visitorEtiquette: 'Respect private residences within historic fortified towns like Galle Fort. Support historic conservation by patronising registered heritage institutions.',
    readingTime: '5 min read'
  },
  {
    id: 'living-traditions',
    slug: 'living-traditions',
    title: 'Traditional Crafts and Living Culture',
    eyebrow: 'ARTISANAL GUILDS & IMMATERIAL HERITAGE',
    subtitle: 'Engage with multigenerational craft communities preserving brass casting, lacquerware, handloom weaving, and mask carving.',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Sri Lanka’s tangible heritage is kept vibrant by artisanal families who have practiced traditional crafts for generations under royal patronage charters. From the mask-carving workshops of Ambalangoda to the brassware smiths of Pilimathalawa and the Dumbara handloom weavers, encounter living heritage through genuine artistic connections.',
    culturalContext: 'These crafts are rooted in indigenous philosophy, folklore, and ritual healing. Kolam and Sanni masks are used in ancient theatrical exorcism dances; Dumbara tapestry weaving is protected on the UNESCO Intangible Cultural Heritage list; and batiks and lacework reflect centuries of maritime exchanges.',
    possibleActivities: [
      {
        title: 'Master Workshop: Dumbara Valley Handloom Weaving',
        description: 'Meet weaving masters using traditional pit-looms to weave geometric tapestries using patterns originally granted by Kandyan kings.'
      },
      {
        title: 'Mask Carving & Pigment Art in Ambalangoda',
        description: 'Learn the properties of Kaduru timber and how natural plant extracts and mineral pigments are blended to paint traditional raksha masks.'
      },
      {
        title: 'Brass Casting and Metalwork in Pilimathalawa',
        description: 'Observe traditional lost-wax brass casting and chasing techniques used to produce oil lamps, ceremonial bells, and temple ornaments.'
      },
      {
        title: 'Kandyan Dance & Drumming Masterclass',
        description: 'An intimate introduction to the five classical dance disciplines of Sri Lanka, rhythm structures (talas), and the significance of the sacred Ves headdress.'
      }
    ],
    relevantDestinations: ['kandy', 'galle-fort', 'matale', 'anuradhapura'],
    relatedTourSlugs: ['kandy-hill-country-trail', 'southern-heritage-escape', 'grand-heritage-journey'],
    visitorEtiquette: 'Always ask permission before photographing artisans in their workshops. We encourage purchasing authentic pieces directly from craftspeople to support artisanal livelihoods.',
    readingTime: '5 min read'
  },
  {
    id: 'culinary-heritage',
    slug: 'culinary-heritage',
    title: 'Sri Lankan Culinary Traditions',
    eyebrow: 'CEYLON SPICES & REGIONAL FLAVOUR HERITAGE',
    subtitle: 'Journey through centuries of spice cultivation, clay-pot hearth cooking, coconut curries, and regional gastronomic traditions.',
    heroImage: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Sri Lankan cuisine is one of the world’s most sophisticated spice cultures. Shaped by indigenous Ayurvedic principles, true Ceylon cinnamon (Cinnamomum verum), coconut milk, and centuries of Arab, Dutch, Portuguese, and South Indian culinary influences, each region offers distinct recipes prepared over wood-fired earthenware hearths.',
    culturalContext: 'Food in Sri Lanka is deeply tied to hospitality and community sharing. Meals are structured around the concept of balancing the six tastes (sweet, sour, salty, bitter, pungent, astringent) to nurture wellness. From the spicy seafood broths of Jaffna to the sour fish ambul thiyal of the south coast, discover Sri Lanka through its kitchen tables.',
    possibleActivities: [
      {
        title: 'Authentic Village Clay-Pot Cooking Experience',
        description: 'Harvest fresh vegetables and herbs from an organic village garden, grate coconuts with traditional scrapers, and slow-cook fragrant curries in clay pots over clay wood stoves.'
      },
      {
        title: 'Ceylon Cinnamon Peeling & Harvesting in the Southern Hills',
        description: 'Visit a working generational cinnamon plantation to observe the delicate craft of stripping paper-thin bark quills, learning why true Ceylon cinnamon was coveted by global empires.'
      },
      {
        title: 'Jaffna Culinary Heritage Masterclass',
        description: 'Discover the intense roasted spice blends, palmyra root flour delicacies (odiyal kool), and famous crab curries distinctive to northern Tamil cuisine.'
      },
      {
        title: 'The Art of the Hopper & Street-Food Walking Tour',
        description: 'Taste fermented rice-flour hoppers (appa) with runny egg centres, coconut sambols, and sweet buffalo curd with kitul palm treacle.'
      }
    ],
    relevantDestinations: ['matale', 'galle-fort', 'jaffna', 'colombo'],
    relatedTourSlugs: ['southern-heritage-escape', 'grand-heritage-journey', 'private-custom-heritage-tour'],
    visitorEtiquette: 'In traditional homes, food is eaten with the right hand. Please inform your private guide of any dietary restrictions or spice tolerances in advance.',
    readingTime: '5 min read'
  },
  {
    id: 'village-cultural-landscapes',
    slug: 'village-cultural-landscapes',
    title: 'Village Life and Cultural Landscapes',
    eyebrow: 'ANCIENT WEWAS & TRADITIONAL AGRICULTURE',
    subtitle: 'Witness the ancient cascade tank systems, community agrarian rituals, and peaceful rural life that have sustained the island for millennia.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Behind Sri Lanka’s ancient stone monuments lies the real secret to its longevity: the hydraulic civilisations of the dry zone. Discover the "Cascade Tank Systems" (Ellangawa)—a network of interconnected village reservoirs recognized by the FAO as a Globally Important Agricultural Heritage System—which sustained wildlife, forest ecosystems, and rice cultivation in perfect equilibrium.',
    culturalContext: 'Traditional Sri Lankan villages were built on a sacred tripartite bond: the Wewa (irrigation lake), the Dagoba (stupa), and the Ketha (rice paddy field). Life followed the rhythm of monsoonal rains, chena dryland farming, and communal harvest cooperation (kaiya).',
    possibleActivities: [
      {
        title: 'Catamaran Lake Journey on an Ancient Wewa',
        description: 'Glides across water lily-strewn village reservoirs at dawn, watching local fishermen cast hand-nets against a backdrop of distant jungle horizons.'
      },
      {
        title: 'Exploring the Ancient Ellangawa Tank Engineering',
        description: 'Walk ancient earthen bunds with an environmental historian to understand how ancient kings managed water flow without silting or erosion.'
      },
      {
        title: 'Chenafield Walk and Treehouse Watch-Post Visit',
        description: 'Learn how rural farmers protect crops from wild elephants using traditional treehouse lookout towers (pela) and night-time singing.'
      },
      {
        title: 'Rural Nature & Birding Walks Around Ritigala Foothills',
        description: 'Stroll through shaded forest trails learning indigenous medicinal plants, wild beekeeping, and village herbal remedies.'
      }
    ],
    relevantDestinations: ['ritigala', 'polonnaruwa', 'sigiriya', 'anuradhapura'],
    relatedTourSlugs: ['ancient-water-systems', 'cultural-triangle-journey', 'grand-heritage-journey'],
    visitorEtiquette: 'We prioritize respectful community interactions. We avoid staged human-zoo visits and ensure our community hosts receive fair direct compensation.',
    readingTime: '6 min read'
  }
];

// Compatibility export
export const EXPERIENCES: Experience[] = HERITAGE_EXPERIENCES.map((e) => ({
  id: e.id,
  slug: e.slug,
  name: e.title,
  category: 'Culture',
  region: 'Cultural Triangle & Heritage Regions',
  destinationSlug: e.relevantDestinations[0] || 'sigiriya',
  description: e.overview.slice(0, 220) + '...',
  duration: 'Half Day to Full Day',
  pricePerPersonUSD: 65,
  imageUrl: e.heroImage,
  includedHighlights: e.possibleActivities.map((a) => a.title)
}));
