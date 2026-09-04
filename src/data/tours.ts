export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  slug: string;
  title: string;
  summary: string;
  destinationSlugs: string[];
  durationDays: number;
  durationNights: number;
  category: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  itinerary: ItineraryDay[];
};

export const tourCategories = [
  'All',
  'Historical & Culture',
  'Nile Cruise',
  'Diving & Beach',
  'Desert & Adventure',
  'Spiritual Journey',
  'Grand Tour',
] as const;

export const tours: Tour[] = [
  {
    slug: 'best-of-egypt',
    title: 'Best of Egypt',
    summary:
      'The classic first-timer route: Giza, Luxor, and Aswan woven into one seamless journey through five thousand years of history.',
    destinationSlugs: ['cairo', 'luxor', 'aswan'],
    durationDays: 8,
    durationNights: 7,
    category: 'Historical & Culture',
    coverImage: '/images/cairo-pyramids.jpg',
    gallery: [
      '/images/luxor-karnak-columns.jpg',
      '/images/aswan-philae-temple.jpg',
      '/images/cairo-camel-pyramid.png',
    ],
    highlights: [
      'Pyramids of Giza & the Sphinx',
      'Egyptian Museum & King Tutankhamun’s treasures',
      'Karnak & Luxor temples',
      'Felucca sailing at Aswan',
      'Philae Temple',
    ],
    included: [
      'Private air-conditioned transport',
      'Licensed Egyptologist guide',
      'Domestic flights between Cairo, Luxor & Aswan',
      'Handpicked hotels with breakfast',
      'All entrance fees on the itinerary',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Cairo', description: 'Welcome to Egypt. Transfer to your hotel and evening orientation over dinner with your guide.' },
      { day: 2, title: 'Giza Pyramids & the Sphinx', description: 'Full day at the Giza Plateau, the Solar Boat Museum, and a panoramic desert viewpoint.' },
      { day: 3, title: 'Egyptian Museum & Khan El Khalili', description: 'Explore the treasures of Tutankhamun, then get lost in the bazaar’s alleys and coffee houses.' },
      { day: 4, title: 'Fly to Luxor — East Bank', description: 'Karnak Temple and Luxor Temple, connected by the newly restored Avenue of Sphinxes.' },
      { day: 5, title: 'Luxor West Bank', description: 'Valley of the Kings, Temple of Hatshepsut, and the Colossi of Memnon at sunrise.' },
      { day: 6, title: 'Sail to Aswan', description: 'Scenic drive or cruise south, visiting Kom Ombo and Edfu temples en route.' },
      { day: 7, title: 'Aswan — Philae & the Nile', description: 'Philae Temple by boat, the High Dam, and a felucca sail at sunset around Elephantine Island.' },
      { day: 8, title: 'Departure', description: 'Free morning, then transfer to the airport for your onward flight.' },
    ],
  },
  {
    slug: 'nile-cruise-luxor-aswan',
    title: 'Nile Cruise: Luxor to Aswan',
    summary:
      'A slow, scenic float down the world’s most storied river, docking at a different temple almost every morning.',
    destinationSlugs: ['luxor', 'aswan'],
    durationDays: 5,
    durationNights: 4,
    category: 'Nile Cruise',
    coverImage: '/images/nile-cruise-ship.png',
    gallery: [
      '/images/luxor-karnak-columns.jpg',
      '/images/aswan-nile-feluccas.jpg',
      '/images/aswan-philae-temple.jpg',
    ],
    highlights: [
      '4 nights aboard a Nile cruise ship',
      'Karnak & Luxor temples',
      'Valley of the Kings',
      'Kom Ombo & Edfu temples',
      'Philae Temple & Aswan High Dam',
    ],
    included: [
      '4 nights full-board on the Nile cruise',
      'Guided shore excursions at every stop',
      'Domestic flight or private transfer to Luxor',
      'Licensed Egyptologist guide throughout',
    ],
    itinerary: [
      { day: 1, title: 'Board in Luxor', description: 'Embark your Nile cruise ship, then visit Karnak and Luxor temples in the afternoon light.' },
      { day: 2, title: 'Valley of the Kings', description: 'Cross to the West Bank for the royal tombs, Hatshepsut’s temple, and the Colossi of Memnon.' },
      { day: 3, title: 'Sail to Edfu & Kom Ombo', description: 'Visit the Temple of Horus at Edfu, then the twin temple of Kom Ombo overlooking the river.' },
      { day: 4, title: 'Arrive in Aswan', description: 'Philae Temple, the High Dam, and a sunset felucca sail between the Nubian villages.' },
      { day: 5, title: 'Disembark', description: 'Breakfast on board, then transfer for your onward journey.' },
    ],
  },
  {
    slug: 'red-sea-diving-escape',
    title: 'Red Sea Diving Escape',
    summary:
      'Reefs, wrecks, and wide-open water — a diver’s route through Egypt’s two great Red Sea hubs.',
    destinationSlugs: ['hurghada', 'marsa-alam'],
    durationDays: 6,
    durationNights: 5,
    category: 'Diving & Beach',
    coverImage: '/images/marsa-alam-diving.png',
    gallery: [
      '/images/hurghada-water-lounge.png',
      '/images/hurghada-red-sea.png',
      '/images/sharm-red-sea.jpg',
    ],
    highlights: [
      'Giftun Island snorkeling & diving',
      'Elphinstone Reef',
      'Dolphin House swim',
      'Beachfront resort stays',
    ],
    included: [
      '5 nights in beachfront resorts',
      'PADI-certified dive guides',
      'Daily boat excursions',
      'Airport transfers in both cities',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Hurghada', description: 'Settle into your beachfront resort and gear check with your dive guide.' },
      { day: 2, title: 'Giftun Island', description: 'Boat trip to Giftun Island for snorkeling and diving in the marine reserve.' },
      { day: 3, title: 'Hurghada Marina & free time', description: 'Morning glass-bottom boat ride, afternoon free at the Marina.' },
      { day: 4, title: 'Transfer to Marsa Alam', description: 'Scenic drive south along the coast to Marsa Alam.' },
      { day: 5, title: 'Elphinstone Reef & Dolphin House', description: 'Two dive or snorkel excursions to the region’s signature reefs.' },
      { day: 6, title: 'Departure', description: 'Free morning by the sea before your transfer to the airport.' },
    ],
  },
  {
    slug: 'sinai-spiritual-journey',
    title: 'Sinai Spiritual Journey',
    summary:
      'Mount Sinai at dawn, an ancient monastery, and quiet coastline — a slower, reflective route through the Sinai.',
    destinationSlugs: ['st-catherine', 'nuweiba'],
    durationDays: 4,
    durationNights: 3,
    category: 'Spiritual Journey',
    coverImage: '/images/st-catherine-monastery.jpg',
    gallery: [
      '/images/nuweiba-camels-mountains.png',
      '/images/nuweiba-camel-beach.png',
    ],
    highlights: [
      'Sunrise hike up Mount Sinai',
      "St. Catherine's Monastery",
      'Bedouin camp under the stars',
      'Nuweiba beaches on the Gulf of Aqaba',
    ],
    included: [
      '3 nights accommodation (mountain lodge & beach camp)',
      'Mountain guide for the Mount Sinai hike',
      'All transport within Sinai',
      'Bedouin dinner experience',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & St. Catherine', description: 'Travel into the Sinai highlands and settle in near St. Catherine’s Monastery.' },
      { day: 2, title: 'Mount Sinai Sunrise', description: 'Night hike up Mount Sinai for sunrise, then visit the Monastery and its ancient library.' },
      { day: 3, title: 'To Nuweiba', description: 'Drive to the coast, afternoon by the Gulf of Aqaba, evening at a Bedouin camp.' },
      { day: 4, title: 'Departure', description: 'Morning swim or snorkel, then transfer onward.' },
    ],
  },
  {
    slug: 'alexandria-mediterranean-getaway',
    title: 'Alexandria Mediterranean Getaway',
    summary:
      'A short, easy escape to Egypt’s Mediterranean capital — libraries, catacombs, and seafood on the Corniche.',
    destinationSlugs: ['alexandria'],
    durationDays: 3,
    durationNights: 2,
    category: 'Historical & Culture',
    coverImage: '/images/alexandria-library.jpg',
    gallery: ['/images/alexandria-library.jpg'],
    highlights: [
      'Bibliotheca Alexandrina',
      'Catacombs of Kom El Shoqafa',
      'Montaza Palace Gardens',
      'Seafood dinner on the Corniche',
    ],
    included: [
      '2 nights in a seafront hotel',
      'Private transport from Cairo',
      'Guided city tour',
    ],
    itinerary: [
      { day: 1, title: 'Cairo to Alexandria', description: 'Scenic drive along the desert road, check in, and evening stroll on the Corniche.' },
      { day: 2, title: 'City of the Library', description: 'Bibliotheca Alexandrina, the Catacombs, and Montaza Palace Gardens.' },
      { day: 3, title: 'Return to Cairo', description: 'Free morning by the sea before the drive back.' },
    ],
  },
  {
    slug: 'siwa-oasis-desert-adventure',
    title: 'Siwa Oasis Desert Adventure',
    summary:
      'Salt lakes, sand dunes, and one of the most remote, atmospheric oases in the Western Desert.',
    destinationSlugs: ['siwa'],
    durationDays: 5,
    durationNights: 4,
    category: 'Desert & Adventure',
    coverImage: '/images/siwa-desert-safari.png',
    gallery: ['/images/siwa-desert-safari.png'],
    highlights: [
      'Salt lakes & Cleopatra’s Spring',
      'Great Sand Sea safari',
      'Shali Fortress',
      'Traditional Siwan village life',
    ],
    included: [
      '4 nights in an eco-style desert lodge',
      '4x4 desert safari with local guides',
      'All meals during the safari days',
      'Private transport from Cairo or Marsa Matrouh',
    ],
    itinerary: [
      { day: 1, title: 'Journey to Siwa', description: 'Long, scenic drive west to the oasis; evening arrival and orientation walk.' },
      { day: 2, title: 'Siwa Town', description: 'Shali Fortress, the old town, and Cleopatra’s Spring.' },
      { day: 3, title: 'Great Sand Sea Safari', description: 'Full-day 4x4 safari with sandboarding and a dune-top sunset.' },
      { day: 4, title: 'Salt Lakes & Gardens', description: 'Float in the salt lakes and visit Siwa’s olive and date groves.' },
      { day: 5, title: 'Departure', description: 'Return journey begins in the morning.' },
    ],
  },
  {
    slug: 'fayoum-weekend-escape',
    title: 'Fayoum Weekend Escape',
    summary:
      'The closest thing to a desert-and-lake weekend from Cairo — perfect for a short break.',
    destinationSlugs: ['fayoum'],
    durationDays: 2,
    durationNights: 1,
    category: 'Desert & Adventure',
    coverImage: '/images/fayoum-desert-dune.jpg',
    gallery: ['/images/fayoum-desert-dune.jpg'],
    highlights: [
      'Kayaking on Magic Lake',
      'Sandboarding the dunes',
      'Wadi El Hitan (Valley of the Whales)',
      'Tunis Village pottery workshops',
    ],
    included: [
      '1 night in a lakeside eco-lodge',
      'Private transport from Cairo',
      'Kayak & sandboarding equipment',
    ],
    itinerary: [
      { day: 1, title: 'Cairo to Fayoum', description: 'Morning drive to Fayoum, kayaking on Magic Lake, and sandboarding at sunset.' },
      { day: 2, title: 'Wadi El Hitan & Tunis Village', description: 'Visit the Valley of the Whales, then browse pottery studios in Tunis Village before returning to Cairo.' },
    ],
  },
  {
    slug: 'grand-egypt-red-sea',
    title: 'Grand Egypt & Red Sea',
    summary:
      'Our flagship route — every icon of the Nile Valley plus a proper stretch of Red Sea relaxation at the end.',
    destinationSlugs: ['cairo', 'luxor', 'aswan', 'hurghada'],
    durationDays: 12,
    durationNights: 11,
    category: 'Grand Tour',
    coverImage: '/images/kom-ombo-columns.jpg',
    gallery: [
      '/images/cairo-pyramids.jpg',
      '/images/luxor-hatshepsut-temple.jpg',
      '/images/aswan-philae-temple.jpg',
      '/images/hurghada-water-lounge.png',
    ],
    highlights: [
      'Giza Pyramids & Egyptian Museum',
      '4-night Nile cruise from Luxor to Aswan',
      'Abu Simbel (optional add-on)',
      '4 nights beach relaxation in Hurghada',
    ],
    included: [
      'Domestic flights between all cities',
      'Nile cruise (full board) & Red Sea resort stay',
      'Licensed Egyptologist guide throughout the Nile Valley',
      'All transfers and entrance fees',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Cairo', description: 'Welcome to Egypt and evening orientation.' },
      { day: 2, title: 'Giza Plateau', description: 'The Pyramids, the Sphinx, and the Solar Boat Museum.' },
      { day: 3, title: 'Egyptian Museum & Old Cairo', description: 'Tutankhamun’s treasures, then the churches and mosques of Old Cairo.' },
      { day: 4, title: 'Fly to Luxor', description: 'Karnak and Luxor temples in the afternoon.' },
      { day: 5, title: 'Board the Nile cruise', description: 'Valley of the Kings and Hatshepsut’s temple, then embark your ship.' },
      { day: 6, title: 'Sail to Edfu & Kom Ombo', description: 'Two temples, one river, ever-changing scenery.' },
      { day: 7, title: 'Arrive in Aswan', description: 'Philae Temple and a sunset felucca sail.' },
      { day: 8, title: 'Disembark & fly to Hurghada', description: 'Trade temples for turquoise water.' },
      { day: 9, title: 'Giftun Island', description: 'A full day of snorkeling and swimming around the marine reserve.' },
      { day: 10, title: 'Free beach day', description: 'Rest, spa, or an optional desert safari.' },
      { day: 11, title: 'Hurghada Marina', description: 'Relaxed final day with dinner at the Marina.' },
      { day: 12, title: 'Departure', description: 'Transfer to the airport for your flight home.' },
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}
