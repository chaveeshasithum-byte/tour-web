import { HeritageDestination } from '@/types/heritage';
import { Destination } from '@/types/trip';

export const HERITAGE_DESTINATIONS: HeritageDestination[] = [
  {
    id: 'sigiriya',
    slug: 'sigiriya',
    name: 'Sigiriya',
    sinhalaName: 'සීගිරිය',
    tagline: 'The Monumental 5th-Century Lion Rock Citadel & Royal Water Gardens',
    subtitle: 'A dramatic granite monolith rising 200 metres above forest canopy, crowned by King Kashyapa’s palace in the sky.',
    region: 'Cultural Triangle',
    categories: ['Ancient Kingdoms', 'UNESCO World Heritage Sites', 'Sacred Architecture', 'Cultural Landscapes'],
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Conceived in the 5th century CE by King Kashyapa (477–495 CE) following a turbulent dynastic conflict, Sigiriya represents one of the world’s most astonishing examples of ancient urban planning, hydraulic engineering, landscape architecture, and monumental art. Abandoning the ancient capital of Anuradhapura, the monarch transformed a sheer volcanic plug into an impregnable palace-fortress flanked by symmetrical pleasure gardens, boulder pavilions, and gravity-fed fountains that still function during the monsoon rains.',
    whyItMatters: 'Sigiriya is a UNESCO World Heritage Site regarded by scholars as an extraordinary synthesis of nature and human ambition. The western cliff face preserves the famous Sigiriya Frescoes—exquisite 5th-century celestial maidens painted in natural earth pigments on wet plaster. Higher up, the Mirror Wall contains ancient graffiti scribbled between the 6th and 14th centuries by pilgrims and poets from across Asia, offering an unprecedented window into ancient vernacular literature.',
    keyPlaces: [
      {
        name: 'The Lion Gate (Simha Mukha)',
        description: 'The monumental entrance midway up the rock, where ancient visitors stepped between gigantic sculpted lion paws to begin the final ascent.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Royal Water Gardens',
        description: 'Symmetrical aquatic terraces featuring bathing pools, gravity-fed water conduits, islands, and miniature fountains constructed 1,500 years ago.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Sigiriya Frescoes Gallery',
        description: 'Sheltered in a natural rock pocket 100 metres above the ground, these luminous murals depict apsaras (celestial nymphs) bearing lotus blossoms.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Summit Palace Foundations',
        description: 'The tiered brick terraces atop the 1.5-hectare rock plateau, where King Kashyapa’s throne, reception halls, and private bathing cistern look out across the jungle expanse.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: 'Half day to full day (best at dawn or late afternoon)',
    practicalNotes: {
      dressCode: 'Lightweight breathable attire. Sturdy walking shoes with reliable grip are essential for climbing 1,200 rock-hewn steps and metal staircases.',
      bestTimeToVisit: 'Early morning (06:30 – 09:00) or late afternoon (15:30 – 18:00) to avoid intense midday sun and peak visitor crowds.',
      physicalDemands: 'Moderate to high fitness required. The vertical climb takes approximately 1.5 to 2.5 hours round-trip.',
      entryPermits: 'Central Cultural Fund ticket required; included in all Heritage Travels guided private itineraries.'
    },
    nearbyDestinations: ['dambulla', 'polonnaruwa', 'ritigala', 'anuradhapura'],
    relatedExperienceSlugs: ['ancient-kingdoms', 'sacred-architecture', 'historic-architecture'],
    relatedTourSlugs: ['cultural-triangle-journey', 'ancient-kingdoms-sacred-cities', 'grand-heritage-journey'],
    editorialQuote: 'To stand on Kashyapa’s rock terrace at daybreak as mist uncoils over the forest is to grasp how ancient kings shaped stone to command the skies.'
  },
  {
    id: 'anuradhapura',
    slug: 'anuradhapura',
    name: 'Anuradhapura',
    sinhalaName: 'අනුරාධපුරය',
    tagline: 'First Imperial Kingdom of Sri Lanka & Sacred Stupas of Antiquity',
    subtitle: 'The spiritual cradle of Theravada Buddhism, where monumental white stupas have anchored island devotion for over two millennia.',
    region: 'North Central',
    categories: ['Ancient Kingdoms', 'UNESCO World Heritage Sites', 'Sacred Architecture', 'Historic Cities'],
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Founded in the 4th century BCE by King Pandukabhaya, Anuradhapura served as the island’s seat of royal power for more than 1,300 years until 993 CE. In the 3rd century BCE, following Emperor Ashoka’s mission from India led by Arahat Mahinda, Buddhism became the state religion. King Devanampiya Tissa planted a sapling of the original Bodhi Tree brought by Sanghamitta Theri—the Jaya Sri Maha Bodhi—which remains the oldest living historically documented tree in the world today.',
    whyItMatters: 'Anuradhapura was a sprawling monastic metropolis whose engineering marvels rivalled the Pyramids of Giza. Colossal brick stupas like Ruwanwelisaya and Jetavanaramaya—once the third tallest structure on Earth after the pyramids of Egypt—demonstrate unprecedented mastery of brickwork and geometry. Immense man-made irrigation reservoirs (wewas) created a fertile oasis that sustained hundreds of thousands of residents.',
    keyPlaces: [
      {
        name: 'Jaya Sri Maha Bodhi',
        description: 'The sacred fig tree planted in 288 BCE from the southern branch of the historical Bodhi tree in Bodh Gaya beneath which the Buddha attained Enlightenment.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ruwanwelisaya Stupa',
        description: 'Commissioned by King Dutugemunu in 140 BCE, this gleaming white hemispherical stupa is encircled by a frieze of sculpted elephant forequarters.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Jetavanaramaya',
        description: 'Built by King Mahasena in the 3rd century CE, this stupa required approximately 93 million baked clay bricks and stood over 120 metres tall.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Kuttam Pokuna (The Twin Ponds)',
        description: 'Exquisite 6th-century stone bathing pools designed with underground filtering channels, water spouts, and classical balustrades.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '1 to 2 full days',
    practicalNotes: {
      dressCode: 'Modest white or light clothing covering shoulders and knees is mandatory. Footwear and hats must be removed before entering stupa courtyards and temple enclosures.',
      bestTimeToVisit: 'Early mornings and late afternoons when stone terraces are cool underfoot.',
      physicalDemands: 'Gentle walking across extensive archaeological grounds; electric vehicles or bicycles are available for private tours.',
      entryPermits: 'Central Cultural Fund ticket covers all key archaeological sites.'
    },
    nearbyDestinations: ['mihintale', 'ritigala', 'sigiriya'],
    relatedExperienceSlugs: ['ancient-kingdoms', 'sacred-architecture', 'living-traditions'],
    relatedTourSlugs: ['ancient-kingdoms-sacred-cities', 'grand-heritage-journey'],
    editorialQuote: 'In Anuradhapura, time slows down. The fragrance of jasmine flowers and the rhythmic chanting of pilgrims carry the devotion of two dozen centuries.'
  },
  {
    id: 'polonnaruwa',
    slug: 'polonnaruwa',
    name: 'Polonnaruwa',
    sinhalaName: 'පොළොන්නරුව',
    tagline: 'Medieval Capital of Monolithic Stone Sculptures & Palaces',
    subtitle: 'The second great kingdom of Sri Lanka, famed for King Parakramabahu I’s hydraulic empire and the colossal stone Buddhas of Gal Vihara.',
    region: 'North Central',
    categories: ['Ancient Kingdoms', 'UNESCO World Heritage Sites', 'Sacred Architecture', 'Historic Cities'],
    heroImage: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Established as the royal capital following the fall of Anuradhapura in 1070 CE, Polonnaruwa reached its golden age during the reign of King Parakramabahu the Great (1153–1186 CE). Famous for his royal decree—"Let not even a single drop of water falling as rain flow into the ocean without being useful to man"—he constructed the vast Parakrama Samudra (Sea of Parakrama), an inland sea reservoir spanning 2,500 hectares.',
    whyItMatters: 'Polonnaruwa represents the peak of classical Sinhalese stone carving and brick temple architecture. The Quadrangle (Dalada Maluwa) showcases a dense ensemble of circular relic houses, Hindu devales, and stone inscription slabs. At Gal Vihara, four massive Buddha statues carved directly from a single cliff face of granite rock represent the undisputed pinnacle of Asian rock sculpture.',
    keyPlaces: [
      {
        name: 'Gal Vihara (Rock Shrine)',
        description: 'Four monumental figures carved out of grey granite: a seated Buddha in meditation, a standing disciple or Buddha, and a 14-metre reclining Buddha capturing Parinirvana.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Sacred Quadrangle (Dalada Maluwa)',
        description: 'A raised stone terrace containing twelve ancient monuments, including the circular Vatadage, Hatadage, and the 8-metre carved stone book (Gal Potha).',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Royal Palace of King Parakramabahu',
        description: 'Ruins of a seven-storey royal residence with thick brick walls, stone pillars, and the adjacent Kumara Pokuna (Royal Bath).',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Lankatilaka Image House',
        description: 'A towering vaulted brick cathedral with 17-metre high walls sheltering a colossal standing Buddha torso.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: 'Full day exploring archaeological zone & Parakrama Samudra reservoir',
    practicalNotes: {
      dressCode: 'Modest white attire. Shoulders and knees must remain covered at all sacred stone sites.',
      bestTimeToVisit: 'Morning or late afternoon. Bicycles or chauffeur vehicle recommended for travelling between archaeological clusters.',
      physicalDemands: 'Flat terrain, easy walking across shaded ruins.',
      entryPermits: 'Central Cultural Fund pass valid for the entire ancient park.'
    },
    nearbyDestinations: ['sigiriya', 'dambulla', 'minneriya'],
    relatedExperienceSlugs: ['ancient-kingdoms', 'sacred-architecture', 'village-cultural-landscapes'],
    relatedTourSlugs: ['cultural-triangle-journey', 'ancient-kingdoms-sacred-cities'],
    editorialQuote: 'The serene expressions carved into Gal Vihara’s granite convey an absolute tranquility that centuries of weathering could never dim.'
  },
  {
    id: 'dambulla',
    slug: 'dambulla',
    name: 'Dambulla',
    sinhalaName: 'දඹුල්ල',
    tagline: 'The Golden Rock Cavern Complex & Sacred Buddhist Murals',
    subtitle: 'Five cavern sanctuaries hollowed into a sheer granite cliff, sheltering 153 Buddha statues and 2,100 square metres of vibrant ceiling frescoes.',
    region: 'Cultural Triangle',
    categories: ['Sacred Architecture', 'UNESCO World Heritage Sites', 'Ancient Kingdoms'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Occupied as a monastic hermitage since the 3rd century BCE, Dambulla became a royal sanctuary in the 1st century BCE when King Valagamba took refuge here during a South Indian invasion. After regaining his throne in Anuradhapura, the grateful sovereign converted the caverns into magnificent rock shrines. Subsequent monarchs over two millennia—notably King Nissanka Malla in the 12th century, who gilded the figures—continued embellishing the complex.',
    whyItMatters: 'Dambulla is the largest and best-preserved rock cave temple complex in South Asia. Its five distinct caves contain religious murals that follow the natural contours of the undulating cave ceilings, depicting historical episodes from the Mahavamsa and scenes from the Buddha’s life. In Cave II, sacred water continually drips upward from the ceiling against gravity into a golden vessel.',
    keyPlaces: [
      {
        name: 'Devaraja Lena (Cave of the Divine King)',
        description: 'Features a 14-metre reclining Buddha carved from the bedrock, attended by Ananda and the Hindu deity Vishnu.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Maharaja Lena (Cave of the Great Kings)',
        description: 'The largest and most spectacular cavern, measuring over 50 metres wide, containing 56 statues, life-sized statues of Kings Valagamba and Nissanka Malla, and a sacred spring.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Maha Alut Vihara (Great New Temple)',
        description: 'Constructed by King Kirti Sri Rajasinha of Kandy in the 18th century, showcasing vibrant Kandyan-era paintings and 50 Buddha images.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '2 to 3 hours (climb up rock terrace takes 20-30 minutes)',
    practicalNotes: {
      dressCode: 'Strict temple attire: shoulders and knees fully covered. Socks recommended as stone courtyard becomes hot at midday.',
      bestTimeToVisit: 'Early morning or late afternoon for cooler rock temperatures and panoramic valley views.',
      physicalDemands: 'A moderate uphill stairway walk of approximately 160 metres elevation.',
      entryPermits: 'Tickets must be purchased at the lower entrance before starting the climb.'
    },
    nearbyDestinations: ['sigiriya', 'kandy', 'matale', 'ritigala'],
    relatedExperienceSlugs: ['sacred-architecture', 'historic-architecture'],
    relatedTourSlugs: ['cultural-triangle-journey', 'kandy-hill-country-trail'],
    editorialQuote: 'Stepping from the bright tropical sun into the cool, incense-scented darkness of Dambulla’s cave sanctuaries feels like entering a forgotten realm of pure gold and devotion.'
  },
  {
    id: 'kandy',
    slug: 'kandy',
    name: 'Kandy',
    sinhalaName: 'මහනුවර',
    tagline: 'Last Royal Capital of Ceylon & Temple of the Sacred Tooth',
    subtitle: 'Nestled beside a tranquil lake in mist-wreathed mountain foothills, Kandy preserved Sinhalese sovereign independence until 1815.',
    region: 'Hill Country',
    categories: ['Sacred Architecture', 'UNESCO World Heritage Sites', 'Traditional Culture', 'Historic Cities'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Founded in the 14th century and designated the royal capital (Senkadagala) by King Wickramabahu in 1592, Kandy withstood Portuguese and Dutch colonial forces for three centuries owing to its natural mountain fortress geography and fierce martial traditions. It remained the sole independent Sinhalese kingdom until the British signing of the Kandyan Convention in 1815.',
    whyItMatters: 'Kandy is the spiritual heart of modern Sri Lanka, home to Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic). Whoever possessed the Sacred Tooth relic was historically recognized as having the divine right to rule Sri Lanka. Every year during Esala Perahera (July/August), the sacred relic casket is paraded through city streets in one of Asia’s most spectacular pageants featuring hundreds of Kandyan dancers, drummers, and caparisoned elephants.',
    keyPlaces: [
      {
        name: 'Sri Dalada Maligawa (Temple of the Sacred Tooth)',
        description: 'The golden-roofed royal temple sanctuary enshrining the left canine tooth relic of the Gautama Buddha.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Kandy Lake (Kiri Muhuda)',
        description: 'An artificial lake built in 1807 by Sri Wickrama Rajasinha with the decorative cloud wall (Walakulu Bamma) along its perimeter.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Royal Botanical Gardens, Peradeniya',
        description: 'A 60-hectare botanical sanctuary originating as a 14th-century royal pleasure garden, renowned for its Avenue of Royal Palms and rare orchid collection.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Embekke & Gadaladeniya Temples',
        description: 'Exquisite 14th-century architectural gems outside the city featuring intricate wooden pillar carvings of mythical beasts and dancers.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '2 to 3 days',
    practicalNotes: {
      dressCode: 'White clothing covering shoulders and knees is strictly observed at the Temple of the Tooth. Footwear checked at secure counter.',
      bestTimeToVisit: 'Puja ceremony timings (05:30, 09:30, 18:30) provide atmospheric drumming and chanting experiences.',
      physicalDemands: 'Comfortable walking around lake and temple courtyards.',
      entryPermits: 'Separate admission for Temple of the Tooth and Peradeniya Gardens.'
    },
    nearbyDestinations: ['matale', 'dambulla', 'sigiriya'],
    relatedExperienceSlugs: ['sacred-architecture', 'living-traditions', 'historic-architecture'],
    relatedTourSlugs: ['kandy-hill-country-trail', 'grand-heritage-journey'],
    editorialQuote: 'The resonance of traditional hevisi drums echoing across Kandy Lake at twilight speaks directly to Ceylon’s enduring royal soul.'
  },
  {
    id: 'galle-fort',
    slug: 'galle-fort',
    name: 'Galle Fort',
    sinhalaName: 'ගාල්ල බලකොටුව',
    tagline: '17th-Century UNESCO Maritime Bastion & Dutch Colonial Heritage',
    subtitle: 'A living historic fortified city on the southern sea, where cobblestone streets, coral-stone ramparts, and colonial villas face the Indian Ocean.',
    region: 'Southern',
    categories: ['Colonial Heritage', 'UNESCO World Heritage Sites', 'Historic Cities', 'Traditional Culture'],
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'First fortified by Portuguese navigators in 1588, Galle Fort was extensively redesigned and expanded by the Dutch East India Company (VOC) starting in 1649 following a bitter siege. The Dutch constructed fourteen massive coral-and-granite bastions, a deep underground sewer network flushed by tidal seawater, and grid-iron streets lined with red-tiled gabled villas that survived into the British era.',
    whyItMatters: 'Recognized by UNESCO as the best preserved fortified city built by European colonial powers in South and Southeast Asia, Galle Fort is uniquely a living heritage city. Unlike museum relics, its historic alleys host active multigenerational families, antique jewelers, spice merchants, boutique art galleries, and literary gatherings.',
    keyPlaces: [
      {
        name: 'The Flag Rock Bastion & Ramparts Walk',
        description: 'The southwestern rampart point where Dutch flags once signaled ships, renowned for sunset ocean views and local cliff divers.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Galle Lighthouse at Point Utrecht',
        description: 'Built in 1939 beside a canopy of ancient coastal trees, standing sentinel over the emerald waters of Galle Bay.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Groote Kerk (Dutch Reformed Church)',
        description: 'Erected in 1755, paved with intricately carved Dutch gravestones from the former cemetery, containing an original baroque organ and pulpit.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'National Maritime Archaeology Museum',
        description: 'Housed in the colossal 1671 Dutch VOC warehouse over the Old Gate, displaying artifacts recovered from ancient shipwrecks in Galle harbour.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '1 to 2 days (unhurried walking)',
    practicalNotes: {
      dressCode: 'Casual elegant resort wear. Sun hat and walking shoes recommended for strolling the stone ramparts.',
      bestTimeToVisit: 'Late afternoon rampart walks when ocean breezes sweep across the bastions and sunset colours illuminate the lighthouse.',
      physicalDemands: 'Effortless level walking through pedestrian-friendly cobblestone lanes.',
      entryPermits: 'Free access to the fort town and ramparts.'
    },
    nearbyDestinations: ['colombo', 'weligama', 'koggala'],
    relatedExperienceSlugs: ['historic-architecture', 'culinary-heritage', 'living-traditions'],
    relatedTourSlugs: ['southern-heritage-escape', 'grand-heritage-journey'],
    editorialQuote: 'Within Galle Fort, the scent of sea salt mingles with cinnamon and roasted coffee, telling four centuries of maritime trade.'
  },
  {
    id: 'jaffna',
    slug: 'jaffna',
    name: 'Jaffna',
    sinhalaName: 'යාපනය',
    tagline: 'Northern Tamil Kingdom, Sacred Kovils & Colonial Fortresses',
    subtitle: 'The cultural capital of Sri Lanka’s Tamil heritage, marked by vibrant Dravidian temple architecture, Palmyra landscapes, and coastal history.',
    region: 'Northern',
    categories: ['Sacred Architecture', 'Colonial Heritage', 'Traditional Culture', 'Historic Cities'],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Historical capital of the medieval Jaffna Kingdom (Aryacakravarti dynasty) from the 13th to early 17th century, Jaffna developed a distinct Tamil cultural, literary, and architectural identity deeply connected with South India. The Portuguese captured the kingdom in 1619, followed by Dutch and British colonial administrators who built the colossal star-shaped Jaffna Fort overlooking the lagoon.',
    whyItMatters: 'Jaffna provides international travellers with a profound and culturally distinct experience of Sri Lankan diversity. It is the centre of Saiva Siddhanta Hindu traditions, characterised by grand Dravidian gopurams (temple gateway towers) and distinct regional culinary traditions centred on Jaffna crab curry, roasted curry powders, and palmyra delicacies.',
    keyPlaces: [
      {
        name: 'Nallur Kandaswamy Kovil',
        description: 'One of the most sacred Hindu pilgrimage sites in Sri Lanka, famed for its towering golden gopuram, brass lamps, and devotional puja rituals.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Jaffna Fort',
        description: 'A massive pentagonal fortress constructed by the Portuguese and reconstructed by the Dutch in 1680 using coral stone overlooking the lagoon.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Jaffna Public Library',
        description: 'A grand Indo-Saracenic cultural landmark rebuilt after historic destruction, standing as a proud symbol of northern intellectual history.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Nagadeepa Purana Vihara & Nainativu Kovil',
        description: 'An offshore island sanctuary reachable by ferry, sacred to both Buddhists and Hindus for over two millennia.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '2 to 3 days',
    practicalNotes: {
      dressCode: 'Men must remove shirts when entering Nallur Kovil; women must wear clothing covering legs and shoulders. Modest temple attire respected throughout.',
      bestTimeToVisit: 'Morning and evening temple ceremonies. October through March offers pleasant weather.',
      physicalDemands: 'Gentle walking. Day excursions to islands require brief passenger ferry rides.',
      entryPermits: 'Free access to public religious sites; respectful photography rules enforced.'
    },
    nearbyDestinations: ['anuradhapura'],
    relatedExperienceSlugs: ['sacred-architecture', 'culinary-heritage', 'living-traditions'],
    relatedTourSlugs: ['northern-heritage-discovery', 'grand-heritage-journey'],
    editorialQuote: 'The ringing of temple bells and the incense smoke billowing through Nallur Kovil reveal an ancient devotional heartbeat untouched by modernity.'
  },
  {
    id: 'yapahuwa',
    slug: 'yapahuwa',
    name: 'Yapahuwa',
    sinhalaName: 'යාපහුව',
    tagline: '13th-Century Rock Fortress & Monumental Ceremonial Staircase',
    subtitle: 'The dramatic cliff citadel where King Bhuvenakabahu I sheltered the Sacred Tooth Relic after the collapse of Polonnaruwa.',
    region: 'North Western',
    categories: ['Ancient Kingdoms', 'Lesser-Known Heritage', 'Historic Cities', 'Sacred Architecture'],
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Following the fall of Polonnaruwa to invading forces, King Bhuvenakabahu I (1272–1284 CE) fortified this 100-metre granite cliff in the Kurunegala district, establishing Yapahuwa as the royal capital and enshrining the Sacred Tooth Relic in a cliffside temple. Yapahuwa flourished briefly until Pandyan armies stormed the citadel in 1284 and seized the relic, after which the capital was abandoned back to the jungle.',
    whyItMatters: 'Often described as Sri Lanka’s "Little Sigiriya," Yapahuwa is celebrated for its breathtaking ornamental granite staircase. Built in an architectural style displaying Dravidian and Cambodian influences, the stone steps are flanked by carved guardian lions (Gajasimha), female dancers, drummers, and pierced stone lattice windows.',
    keyPlaces: [
      {
        name: 'The Monumental Stone Staircase',
        description: 'An extraordinary series of three ascending flights of steep stone stairs flanked by fierce sculpted lions with bulging eyes and mythical makaras.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Sacred Tooth Relic Temple Porch',
        description: 'The stone gateway at the head of the staircase, famous for its delicately carved stone screen windows and friezes of dancers.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Archaeological Museum of Yapahuwa',
        description: 'Contains Chinese coins, pottery, and celadon ware unearthed at the site, testifying to 13th-century trade links with the Song and Yuan dynasties.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: 'Half day (3 hours)',
    practicalNotes: {
      dressCode: 'Sturdy walking shoes with excellent grip. The stone steps are narrow and steep.',
      bestTimeToVisit: 'Morning or late afternoon when stone is shaded.',
      physicalDemands: 'Moderate climb up steep stairs; handrails installed on the steepest section.',
      entryPermits: 'Department of Archaeology ticket purchased on-site.'
    },
    nearbyDestinations: ['anuradhapura', 'sigiriya'],
    relatedExperienceSlugs: ['ancient-kingdoms', 'historic-architecture'],
    relatedTourSlugs: ['ancient-kingdoms-sacred-cities', 'private-custom-heritage-tour'],
    editorialQuote: 'Yapahuwa’s stone staircase feels like a secret carved into the mountainside—wild, solitary, and magnificent.'
  },
  {
    id: 'mihintale',
    slug: 'mihintale',
    name: 'Mihintale',
    sinhalaName: 'මිහින්තලය',
    tagline: 'The Cradle of Buddhism & Mountain Monastic Sanctuary',
    subtitle: 'The sacred mountain ridge where Arahat Mahinda met King Devanampiya Tissa in 247 BCE, changing the course of Sri Lankan history forever.',
    region: 'North Central',
    categories: ['Sacred Architecture', 'Cultural Landscapes', 'Ancient Kingdoms'],
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Located 12 km east of Anuradhapura, Mihintale is regarded as the historic cradle where Buddhism was formally introduced to Sri Lanka in 247 BCE. Arahat Mahinda, son of Emperor Ashoka of India, met King Devanampiya Tissa of Anuradhapura atop the Missaka mountain while the monarch was hunting deer. The king embraced the Dhamma, and Mihintale transformed into a sanctuary of thousands of cave hermitages and monastic halls.',
    whyItMatters: 'Mihintale preserves the world’s oldest recorded wildlife sanctuary (decreed in the 3rd century BCE by royal edict) alongside the ancient world’s most advanced monastic hospital with medicinal immersion baths. A majestic staircase of 1,840 granite steps shaded by frangipani trees leads pilgrims up the sacred hillside.',
    keyPlaces: [
      {
        name: 'The Grand Flight of 1,840 Steps',
        description: 'An ancient grand staircase composed of broad granite slabs climbing through three wooded terraces to the mountain plateau.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Maha Stupa & Aradhana Gala (Meditation Rock)',
        description: 'The windswept rocky outcrop where Mahinda preached his first sermon to the king, crowned by the commanding white Maha Stupa.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ancient Monastic Hospital & Stone Medicine Bath',
        description: 'Ruins of a 9th-century monastic infirmary containing a monolithic stone trough carved to the human form for medicinal herbal oil baths.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: 'Half day (best combined with Anuradhapura at sunset)',
    practicalNotes: {
      dressCode: 'Modest white attire required; shoes removed at upper terrace.',
      bestTimeToVisit: 'Late afternoon (16:00 – 18:30) for sunset views across Anuradhapura’s forest lakes.',
      physicalDemands: 'Moderate staircase climb with shaded resting terraces.',
      entryPermits: 'Central Cultural Fund ticket available at site base.'
    },
    nearbyDestinations: ['anuradhapura', 'ritigala'],
    relatedExperienceSlugs: ['sacred-architecture', 'ancient-kingdoms'],
    relatedTourSlugs: ['ancient-kingdoms-sacred-cities', 'grand-heritage-journey'],
    editorialQuote: 'To climb Mihintale at twilight, when the frangipani blossoms scatter on stone steps and chanting echoes over the plains, is an encounter with pure serenity.'
  },
  {
    id: 'ritigala',
    slug: 'ritigala',
    name: 'Ritigala',
    sinhalaName: 'රිටිගල',
    tagline: 'Strict Nature Reserve & Mysterious Forest Hermitage',
    subtitle: 'An isolated misty mountain ridge covered in cloud forest, sheltering ancient stone meditation paths and non-ornamented monastic ruins.',
    region: 'Cultural Triangle',
    categories: ['Lesser-Known Heritage', 'Cultural Landscapes', 'Ancient Kingdoms'],
    heroImage: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Rising 766 metres above the dry plains, Ritigala is an isolated granite mountain range designated as a Strict Natural Reserve. In the 9th and 10th centuries CE, King Sena I and royal patrons constructed an austere forest monastery for the Pansakulika ("rag-robe wearing") ascetic monks who had renounced the wealthy urban monasteries of Anuradhapura for solitary meditation.',
    whyItMatters: 'Unlike the monumental, elaborately carved temples of Anuradhapura and Polonnaruwa, Ritigala features strictly unadorned architecture harmonised with the rainforest. Famous for its cyclopean paved stone pathways, cantilevered meditation platforms (double-platform buildings) designed for thermal cooling, and the massive stone-lined reservoir Banda Pokuna.',
    keyPlaces: [
      {
        name: 'Banda Pokuna (Sacred Stone Reservoir)',
        description: 'A massive 9th-century granite-lined stone bathing reservoir built across a seasonal stream where ascetic monks bathed and meditated.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Paved Stone Meditation Pathways',
        description: 'Immaculately fitted interlocking granite slab pathways that wind gently through mossy rainforest trees.',
        image: 'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Double-Platform Meditation Structures',
        description: 'Unique architectural pavilions joined by stone bridges, engineered to maximize forest airflow without decorative distractions.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: '2 to 3 hours',
    practicalNotes: {
      dressCode: 'Comfortable hiking shoes and light breathable clothing. Insect repellent recommended for rainforest paths.',
      bestTimeToVisit: 'Early morning for birdwatching and cool forest temperatures.',
      physicalDemands: 'Moderate hiking on shaded stone pathways.',
      entryPermits: 'Department of Archaeology ticket at site entrance.'
    },
    nearbyDestinations: ['sigiriya', 'dambulla', 'anuradhapura'],
    relatedExperienceSlugs: ['village-cultural-landscapes', 'sacred-architecture'],
    relatedTourSlugs: ['cultural-triangle-journey', 'private-custom-heritage-tour'],
    editorialQuote: 'At Ritigala, silence is tangible. The stone paths lead not to grand palaces, but deeper into the quiet dignity of ancient ascetics.'
  },
  {
    id: 'matale',
    slug: 'matale',
    name: 'Matale',
    sinhalaName: 'මාතලේ',
    tagline: 'Historic Spice Foothills & The Sacred Caves of Aluvihara',
    subtitle: 'The fertile mid-country gateway between Kandy and the dry plains, celebrated for aromatic spice gardens and the preservation of the Buddhist canon.',
    region: 'Cultural Triangle',
    categories: ['Sacred Architecture', 'Traditional Culture', 'Cultural Landscapes'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588258524675-c63583592451?auto=format&fit=crop&w=1200&q=85'
    ],
    historicalBackground: 'Nestled in the lush hills north of Kandy, Matale holds immense significance in world Buddhist history. At Aluvihara Rock Cave Temple in the 1st century BCE, during a devastating famine and threat of war, 500 scholarly Buddhist monks assembled to commit the entire Tipitaka (Buddhist scriptures) to writing onto ola (palm leaf) manuscripts for the first time in human history, preserving teachings that had previously existed only orally.',
    whyItMatters: 'Matale combines monumental textual heritage with centuries of agricultural traditions. The surrounding hills have produced Ceylon cinnamon, cardamoms, cloves, nutmeg, and pepper for international merchant fleets for over a millennium. It also hosts the towering Sri Muthumariamman Thevasthanam Hindu Kovil with its 32-metre polychromatic gopuram.',
    keyPlaces: [
      {
        name: 'Aluvihara Rock Cave Temple',
        description: 'The cliffside caves where the sacred Pali Tipitaka was first inscribed onto ola palm leaves in the 1st century BCE.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Sri Muthumariamman Hindu Temple',
        description: 'A magnificent Dravidian temple famous for its 108-foot gopuram decorated with hundreds of vibrantly sculpted Hindu deities.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Traditional Spice & Herbal Estates',
        description: 'Historic estates showcasing living cultivation of true Ceylon cinnamon, vanilla orchids, cardamom, and traditional Ayurvedic preparation.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedDuration: 'Half day stopping en route between Kandy and Dambulla',
    practicalNotes: {
      dressCode: 'Modest temple attire for Aluvihara and Kovil.',
      bestTimeToVisit: 'Morning when spices emit their richest natural fragrances.',
      physicalDemands: 'Short walk between cave shrines.',
      entryPermits: 'Local temple donations/tickets.'
    },
    nearbyDestinations: ['kandy', 'dambulla'],
    relatedExperienceSlugs: ['culinary-heritage', 'sacred-architecture', 'living-traditions'],
    relatedTourSlugs: ['kandy-hill-country-trail', 'grand-heritage-journey'],
    editorialQuote: 'Between the ancient palm leaf manuscripts of Aluvihara and the scented cinnamon groves, Matale is a sensory bridge between kingdoms.'
  }
];

// Compatibility export for trip planner & legacy components
export const DESTINATIONS: Destination[] = HERITAGE_DESTINATIONS.map((d) => ({
  id: d.id,
  slug: d.slug,
  name: d.name,
  tagline: d.tagline,
  description: d.historicalBackground.slice(0, 220) + '...',
  heroImage: d.heroImage,
  recommendedStay: d.suggestedDuration,
  highlights: d.keyPlaces.map((kp) => kp.name),
  keyExperiences: d.relatedExperienceSlugs,
  nearbyRegions: d.nearbyDestinations
}));
