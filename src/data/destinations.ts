export type Destination = {
  slug: string;
  name: string;
  region: 'Nile Valley' | 'Red Sea' | 'Sinai' | 'Mediterranean' | 'Western Desert';
  tagline: string;
  description: string;
  heroImage: string;
  galleryImage?: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: 'cairo',
    name: 'Cairo',
    region: 'Nile Valley',
    tagline: 'Where history and energy collide',
    description:
      'Cairo is where history and energy collide to create magic. Stand before the awe-inspiring Pyramids of Giza and feel the weight of millennia in their shadow. Wander through the bustling Khan El Khalili bazaar, where every corner bursts with color, scent, and life. The Egyptian Museum will leave you breathless with its treasures, including the golden mask of King Tutankhamun. End your day with a peaceful felucca ride on the Nile as the sun sets over the city’s iconic skyline.',
    heroImage: '/images/cairo-pyramids.jpg',
    galleryImage: '/images/cairo-camel-pyramid.png',
    highlights: [
      'Pyramids of Giza & the Sphinx',
      'Khan El Khalili bazaar',
      'The Egyptian Museum',
      'Sunset felucca ride on the Nile',
    ],
  },
  {
    slug: 'alexandria',
    name: 'Alexandria',
    region: 'Mediterranean',
    tagline: 'History, elegance, and seaside magic',
    description:
      'Imagine strolling along Alexandria’s Corniche with the Mediterranean breeze kissing your face. Visit the legendary Bibliotheca Alexandrina, where ancient wisdom meets modern marvels. Explore the mesmerizing Catacombs of Kom El Shoqafa, a journey deep into history, or unwind in the lush Montaza Palace Gardens. Grab a seat at a seaside café and savor fresh seafood as the city’s romantic charm sweeps you off your feet.',
    heroImage: '/images/alexandria-library.jpg',
    highlights: [
      'Bibliotheca Alexandrina',
      'Catacombs of Kom El Shoqafa',
      'Montaza Palace Gardens',
      'The Corniche & fresh seafood',
    ],
  },
  {
    slug: 'luxor',
    name: 'Luxor',
    region: 'Nile Valley',
    tagline: 'History brought to life',
    description:
      'Luxor is a treasure chest of wonders waiting to be explored. Soar above the city in a hot air balloon as the sun rises over the Valley of the Kings. Wander through the colossal Karnak Temple, where ancient columns and carvings whisper stories of pharaohs past. Take a Nile cruise to discover hidden temples, and as night falls, experience the magic of the Karnak sound and light show, a spectacle you’ll carry in your heart forever.',
    heroImage: '/images/luxor-hatshepsut-temple.jpg',
    galleryImage: '/images/luxor-karnak-columns.jpg',
    highlights: [
      'Hot air balloon over the Valley of the Kings',
      'Karnak Temple complex',
      'Temple of Hatshepsut',
      'Karnak sound & light show',
    ],
  },
  {
    slug: 'aswan',
    name: 'Aswan',
    region: 'Nile Valley',
    tagline: 'Calm, culture, and natural beauty',
    description:
      'Aswan is a peaceful escape with a charm that’s hard to resist. Take a boat ride to the magical Philae Temple, set on an island that feels like a fairytale. Visit the colorful Nubian villages, where the warmth of the people matches the vibrant hues of their homes. Relax on a felucca gliding over the calm waters of the Nile, or venture to the majestic Abu Simbel temples, a masterpiece of ancient engineering.',
    heroImage: '/images/aswan-philae-temple.jpg',
    galleryImage: '/images/aswan-nile-feluccas.jpg',
    highlights: [
      'Philae Temple by boat',
      'Nubian villages',
      'Felucca sailing on the Nile',
      'Abu Simbel temples',
    ],
  },
  {
    slug: 'fayoum',
    name: 'Fayoum',
    region: 'Western Desert',
    tagline: 'Adventure for the soul',
    description:
      'Fayoum is a destination that surprises you at every turn. Kayak across the glistening Magic Lake, where the views are as enchanting as the name. For adrenaline lovers, sandboarding down desert dunes is an absolute thrill. Wadi El Hitan, the Valley of the Whales, offers a surreal journey through time with fossils that tell tales of ancient seas, while Tunis Village charms with colorful pottery and warm smiles.',
    heroImage: '/images/fayoum-desert-dune.jpg',
    highlights: [
      'Kayaking on Magic Lake',
      'Sandboarding the dunes',
      'Wadi El Hitan (Valley of the Whales)',
      'Tunis Village pottery',
    ],
  },
  {
    slug: 'sharm-el-sheikh',
    name: 'Sharm El Sheikh',
    region: 'Red Sea',
    tagline: 'Adventure meets tranquil beach vibes',
    description:
      'Picture yourself in Sharm El Sheikh, where the Red Sea sparkles like a gem and the adventures never end. Snorkel through coral reefs so colorful they seem unreal, or dive deeper to discover a mesmerizing underwater kingdom. Feel the thrill of a desert safari as you race over golden dunes, ride camels, and enjoy a magical dinner under a sky bursting with stars, then take a boat trip to the crystal-clear waters of Tiran Island.',
    heroImage: '/images/sharm-red-sea.jpg',
    galleryImage: '/images/sharm-yacht.jpg',
    highlights: [
      'Coral reef snorkeling & diving',
      'Desert safari & Bedouin dinner',
      'Tiran Island boat trip',
      'Beach clubs & sunset sailing',
    ],
  },
  {
    slug: 'hurghada',
    name: 'Hurghada',
    region: 'Red Sea',
    tagline: 'Excitement, relaxation, endless Red Sea fun',
    description:
      'Hurghada is a lively coastal destination that perfectly blends relaxation and adventure. Dive into a vibrant underwater world of coral reefs and exotic marine life, or take a glass-bottom boat ride to enjoy the sea’s treasures from above. The bustling Marina offers world-class dining and nightlife, while Giftun Island and desert safaris filled with dune bashing round out the adventure.',
    heroImage: '/images/hurghada-water-lounge.png',
    galleryImage: '/images/hurghada-red-sea.png',
    highlights: [
      'Giftun Island excursions',
      'Glass-bottom boat rides',
      'Hurghada Marina dining & nightlife',
      'Dune bashing desert safari',
    ],
  },
  {
    slug: 'marsa-alam',
    name: 'Marsa Alam',
    region: 'Red Sea',
    tagline: 'Peace, nature, and marine adventures',
    description:
      'Marsa Alam is the kind of place you dream about but never believe exists. Swim alongside dolphins at Dolphin House or glide through the dazzling reefs of Elphinstone, surrounded by vibrant fish and sea turtles. Take a boat trip to Sataya Reef, where dolphins leap and play around you, then unwind on untouched beaches beneath serene sunsets.',
    heroImage: '/images/marsa-alam-diving.png',
    highlights: [
      'Dolphin House swim',
      'Elphinstone Reef diving',
      'Sataya Reef boat trip',
      'Untouched, quiet beaches',
    ],
  },
  {
    slug: 'siwa',
    name: 'Siwa',
    region: 'Western Desert',
    tagline: "The desert's best-kept secret",
    description:
      'Siwa Oasis is a hidden paradise that feels like a dream. Float weightlessly in the glittering salt lakes, or take a dip in Cleopatra’s Spring. Set off on a thrilling desert safari, sandboarding down towering dunes and watching sunsets so stunning they seem painted by the heavens, then explore the ancient Shali Fortress and peaceful groves of olive and date palms.',
    heroImage: '/images/siwa-desert-safari.png',
    highlights: [
      'Salt lakes & Cleopatra’s Spring',
      'Dune safari & sandboarding',
      'Shali Fortress',
      'Olive & date palm groves',
    ],
  },
  {
    slug: 'st-catherine',
    name: 'St. Catherine',
    region: 'Sinai',
    tagline: 'Serenity and profound beauty',
    description:
      'Nestled in the heart of the Sinai mountains, St. Catherine is a place of serenity and profound beauty. Hike up Mount Sinai at dawn and witness a sunrise so breathtaking it feels like a spiritual awakening. Explore St. Catherine’s Monastery, one of the oldest working monasteries in the world, where history, religion, and culture come together in a sacred embrace.',
    heroImage: '/images/st-catherine-monastery.jpg',
    highlights: [
      'Sunrise hike up Mount Sinai',
      "St. Catherine's Monastery",
      'Sinai mountain trails',
      'Bedouin desert camps',
    ],
  },
  {
    slug: 'nuweiba',
    name: 'Nuweiba',
    region: 'Sinai',
    tagline: 'Peace, natural beauty, a touch of adventure',
    description:
      'Nuweiba is a tranquil gem along the Gulf of Aqaba, offering pristine beaches and a laid-back atmosphere. Lounge by crystal-clear waters where the sea meets the mountains in a picture-perfect setting, discover colorful coral reefs while snorkeling, or spend the night in a cozy Bedouin camp under a sky filled with stars.',
    heroImage: '/images/nuweiba-camels-mountains.png',
    galleryImage: '/images/nuweiba-camel-beach.png',
    highlights: [
      'Gulf of Aqaba beaches',
      'Coral reef snorkeling',
      'Bedouin camp under the stars',
      'Camel rides along the coast',
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
