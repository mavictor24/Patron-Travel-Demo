import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';

import Image from 'next/image';

// <>------------------<>
// Destinations Data
//<>-------------------<>

export interface LandingContent {
  num: number;
  title: string;
  subtitle: string;
}

export const landingContent: LandingContent[] = [
  {
    num: 1,
    title: 'Choose Place, activity and time',
    subtitle:
      'Every Can choose a root and activity according to his tasts and possibilities',
  },
  {
    num: 2,
    title: 'Find people who have the same...',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque perspiciatis inventore id excepturi mollitia qui aperiam fugit, quae consectetur eligendi tenetur sunt pariatur illum? Qui in delectus quod amet.',
  },
  {
    num: 3,
    title: 'Start chat and offer to go on...',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque perspiciatis inventore id excepturi mollitia qui aperiam fugit, quae consectetur eligendi tenetur sunt pariatur illum? Qui in delectus quod amet.',
  },
];

// Destinations Cards

export interface Destination {
  image: string;
  title: string;
}

export const destinations: Destination[] = [
  {
    image: '/Card1.jpg',
    title: 'Destination 1',
  },
  {
    image: '/Card2.jpg',
    title: 'Destination 2',
  },
  {
    image: '/Card3.jpg',
    title: 'Destination 3',
  },
  {
    image: '/Card4.jpg',
    title: 'Destination 4',
  },
  {
    image: '/cover2.jpg',
    title: 'Destination 5',
  },
];

export const Trips = [
  {
    description:
      'Immerse yourself in the vast Sinai Desert with camel treks, Bedouin feasts, and nights spent under a billion stars. Experience the serenity and wonder of a truly untouched landscape.',
    name: 'Desert Safaris and Stargazing',
    num: '01',
    src: '/8.png',
  },
  {
    description:
      'Dive into the vibrant underwater world of the Red Sea, teeming with coral reefs and exotic marine life. Ideal for adventurers and nature lovers..',
    name: 'Snorkeling and Diving in the Red Sea',
    num: '02',
    src: '/7.png',
  },
  {
    description:
      "Sail along the lifeline of ancient Egypt on a luxury cruise, stopping at iconic temples like Karnak, Luxor, and Philae. Witness the Nile's breathtaking sunsets from the comfort of a world-class vessel.",
    name: 'Nile Cruises: A Journey Through Time',
    num: '03',
    src: '/9.png',
  },
  {
    description:
      'Visit the Great Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum. Stroll through bustling bazaars, savor local cuisine, and engage with Egypt’s vibrant traditions.',
    name: 'Historical Marvels and Cultural Immersion',
    num: '04',
    src: '/6.png',
  },
  {
    description:
      'Tucked beneath Mount Sinai, St. Catherine’s Monastery is a sacred gem, where ancient history, spiritual tranquility, and stunning beauty converge in one unforgettable experience.',
    name: 'Jewel of Sinai - St. Catherine’s Monastery',
    num: '05',
    src: '/monastero-di-santa-caterina.jpg',
  },
];

interface FeaturedCities {
  coverImage: string;
  info: string;
  location: string;
}

export const FeaturedCitiesData: FeaturedCities[] = [
  {
    coverImage: '/city8.png',
    info: 'Cairo is where history and energy collide to create magic. Stand before the awe-inspiring Pyramids of Giza and feel the weight of millennia in their shadow. Wander through the bustling Khan El Khalili bazaar, where every corner bursts with color, scent, and life. The Egyptian Museum will leave you breathless with its treasures, including the golden mask of King Tutankhamun. End your day with a peaceful felucca ride on the Nile as the sun sets over the city’s iconic skyline. Cairo isn’t just a visit; it’s an adventure you’ll never forget. Perfect for when you want to immerse yourself in culture and history.',
    location: 'Cairo',
  },
  {
    coverImage: '/city6.png',
    info: 'Imagine strolling along Alexandria’s Corniche with the Mediterranean breeze kissing your face. Visit the legendary Bibliotheca Alexandrina, where ancient wisdom meets modern marvels. Explore the mesmerizing Catacombs of Kom El Shoqafa, a journey deep into history, or unwind in the lush Montaza Palace Gardens. Grab a seat at a seaside café, savor fresh seafood, and let the city’s romantic charm sweep you off your feet. Alexandria is a blend of history, elegance, and seaside magic that will have you falling in love instantly. Perfect for when you want history, culture, and a romantic coastal escape.',
    location: 'Alexandria',
  },
  {
    coverImage: '/city11.png',
    info: 'Fayoum is a destination that surprises you at every turn. Kayak across the glistening Magic Lake, where the views are as enchanting as the name. For adrenaline lovers, sandboarding down desert dunes is an absolute thrill! Wadi El Hitan, the Valley of the Whales, offers a surreal journey through time with fossils that tell tales of ancient seas. Stroll through Tunis Village, where colorful pottery and warm smiles create an unforgettable vibe. Fayoum isn’t just a trip—it’s an adventure for the soul and a feast for the senses. Perfect for a quick getaway filled with both adventure and tranquility.',
    location: 'Fayoum',
  },
  {
    coverImage: '/city4.png',
    info: 'Luxor is a treasure chest of wonders waiting to be explored. Soar above the city in a hot air balloon as the sun rises over the Valley of the Kings. Wander through the colossal Karnak Temple, where ancient columns and carvings whisper stories of pharaohs past. Take a Nile cruise to discover hidden temples and soak in the romance of this timeless river. As night falls, experience the magic of the Karnak sound and light show, a spectacle you’ll carry in your heart forever. Luxor is history brought to life in the most breathtaking way. Perfect for when you crave awe-inspiring history and breathtaking sights.',
    location: 'Luxer',
  },
  {
    coverImage: '/city9.png',
    info: 'Aswan is a peaceful escape with a charm that’s hard to resist. Take a boat ride to the magical Philae Temple, set on an island that feels like a fairytale. Visit the colorful Nubian villages, where the warmth of the people matches the vibrant hues of their homes. Relax on a felucca, gliding over the calm waters of the Nile, or venture to the majestic Abu Simbel temples, a masterpiece of ancient engineering. In Aswan, life slows down, beauty surrounds you, and every moment feels like pure serenity. Perfect for when you need calm, culture, and natural beauty.',
    location: 'Aswan',
  },
  {
    coverImage: '/city1.png',
    info: 'Picture yourself in Sharm El Sheikh, where the Red Sea sparkles like a gem, and the adventures never end! Snorkel through coral reefs so colorful they seem unreal, or dive deeper to discover a mesmerizing underwater kingdom. Feel the thrill of a desert safari as you race over golden dunes, ride camels, and enjoy a magical dinner under a sky bursting with stars. Take a boat trip to the stunning Tiran Island, where the water is so clear you’ll want to jump right in! Whether you crave excitement or ultimate relaxation, Sharm El Sheikh will steal your heart. Perfect for when you need a mix of adventure and tranquil beach vibes.',
    location: 'Sharm El-Shiekh',
  },
  {
    coverImage: '/city2.png',
    info: 'Hurghada is a lively coastal destination that perfectly blends relaxation and adventure. Dive into the vibrant underwater world, where coral reefs and exotic marine life create a diver’s paradise. If you prefer staying above water, take a glass-bottom boat ride to enjoy the stunning views of the Red Sea’s treasures. Hurghada’s bustling Marina offers world-class dining, shopping, and nightlife, while its sandy beaches invite you to unwind under the sun. For a day of adventure, head to Giftun Island or embark on a desert safari filled with dune bashing and Bedouin culture. Perfect for when you want excitement, relaxation, and endless Red Sea fun.',
    location: 'Hurghada',
  },
  {
    coverImage: '/city3.png',
    info: 'Marsa Alam is the kind of place you dream about but never believe exists. Imagine swimming alongside dolphins at Dolphin House or gliding through the dazzling reefs of Elphinstone, surrounded by vibrant fish and sea turtles. Take a boat trip to Sataya Reef, where dolphins leap and play around you—an experience you’ll never forget. When it’s time to unwind, the untouched beaches and serene sunsets will soothe your soul. Marsa Alam is your escape to pure beauty, where every moment feels like a postcard come to life. Perfect for when you’re seeking peace, nature, and marine adventures.',
    location: 'Marsa Alam',
  },
  {
    coverImage: '/city5.png',
    info: 'Siwa Oasis is a hidden paradise that feels like a dream. Float weightlessly in the glittering salt lakes, or take a dip in Cleopatra’s Spring, where the water is as refreshing as the setting is magical. Set off on a thrilling desert safari, sandboarding down towering dunes and watching sunsets so stunning they seem painted by the heavens. Explore the ancient Shali Fortress and stroll through peaceful groves of olive and date palms. Siwa is a place of wonder, where every corner whispers a story and every moment feels like a blessing. Perfect for when you need to unplug and immerse yourself in natural beauty.',
    location: 'Siwa',
  },
  {
    coverImage: '/city7.png',
    info: 'Nestled in the heart of the Sinai mountains, St. Catherine is a place of serenity and profound beauty. Hike up Mount Sinai at dawn and witness a sunrise so breathtaking, it feels like a spiritual awakening. Explore St. Catherine’s Monastery, one of the oldest in the world, where history, religion, and culture come together in a sacred embrace. For nature lovers, the surrounding mountains offer countless trails and stunning views that will leave you in awe. Perfect for when you seek spiritual connection, adventure, and awe-inspiring landscapes.',
    location: 'St catherine ',
  },
  {
    coverImage: '/city10.png',
    info: 'Nuweiba is a tranquil gem along the Gulf of Aqaba, offering pristine beaches and a laid-back atmosphere. Lounge by the crystal-clear waters, where the sea meets the mountains in a picture-perfect setting. Discover the colorful coral reefs while snorkeling or enjoy a boat trip to explore nearby lagoons. For a unique experience, spend the night in a cozy Bedouin camp under a sky filled with stars. Nuweiba is a place where time slows down, and every moment feels like pure bliss. Perfect for when you crave peace, natural beauty, and a touch of adventure.',
    location: 'Nuweiba',
  },
];

// Cities Data

export const CitiesData = [
  {
    location: 'Cairo',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
          Cairo is where history and energy collide to create magic. Stand
          before the awe-inspiring Pyramids of Giza and feel the weight of
          millennia in their shadow. Wander through the bustling Khan El Khalili
          bazaar, where every corner bursts with color, scent, and life. The
          Egyptian Museum will leave you breathless with its treasures,
          including the golden mask of King Tutankhamun. End your day with a
          peaceful felucca ride on the Nile as the sun sets over the city’s
          iconic skyline. Cairo isn’t just a visit; it’s an adventure you’ll
          never forget. Perfect for when you want to immerse yourself in culture
          and history.
        </p>
        <div>
          <Image
            src="/city8.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Alexandria',
    coverImage: '/10.png',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
          Imagine strolling along Alexandria’s Corniche with the Mediterranean
          breeze kissing your face. Visit the legendary Bibliotheca Alexandrina,
          where ancient wisdom meets modern marvels. Explore the mesmerizing
          Catacombs of Kom El Shoqafa, a journey deep into history, or unwind in
          the lush Montaza Palace Gardens. Grab a seat at a seaside café, savor
          fresh seafood, and let the city’s romantic charm sweep you off your
          feet. Alexandria is a blend of history, elegance, and seaside magic
          that will have you falling in love instantly. Perfect for when you
          want history, culture, and a romantic coastal escape.
        </p>

        <div>
          <Image
            src="/city6.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Fayoum',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Fayoum is a destination that surprises you at every turn. Kayak across
          the glistening Magic Lake, where the views are as enchanting as the
          name. For adrenaline lovers, sandboarding down desert dunes is an
          absolute thrill! Wadi El Hitan, the Valley of the Whales, offers a
          surreal journey through time with fossils that tell tales of ancient
          seas. Stroll through Tunis Village, where colorful pottery and warm
          smiles create an unforgettable vibe. Fayoum isn’t just a trip—it’s an
          adventure for the soul and a feast for the senses. Perfect for a quick
          getaway filled with both adventure and tranquility.
        </p>
        <div>
          <Image
            src="/city11.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Luxer',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Luxor is a treasure chest of wonders waiting to be explored. Soar
          above the city in a hot air balloon as the sun rises over the Valley
          of the Kings. Wander through the colossal Karnak Temple, where ancient
          columns and carvings whisper stories of pharaohs past. Take a Nile
          cruise to discover hidden temples and soak in the romance of this
          timeless river. As night falls, experience the magic of the Karnak
          sound and light show, a spectacle you’ll carry in your heart forever.
          Luxor is history brought to life in the most breathtaking way. Perfect
          for when you crave awe-inspiring history and breathtaking sights.
        </p>
        <div>
          <Image
            src="/city4.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Aswan',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Aswan is a peaceful escape with a charm that’s hard to resist. Take a
          boat ride to the magical Philae Temple, set on an island that feels
          like a fairytale. Visit the colorful Nubian villages, where the warmth
          of the people matches the vibrant hues of their homes. Relax on a
          felucca, gliding over the calm waters of the Nile, or venture to the
          majestic Abu Simbel temples, a masterpiece of ancient engineering. In
          Aswan, life slows down, beauty surrounds you, and every moment feels
          like pure serenity. Perfect for when you need calm, culture, and
          natural beauty.
        </p>
        <div>
          <Image
            src="/city9.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Sharm El Sheikh',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Picture yourself in Sharm El Sheikh, where the Red Sea sparkles like a
          gem, and the adventures never end! Snorkel through coral reefs so
          colorful they seem unreal, or dive deeper to discover a mesmerizing
          underwater kingdom. Feel the thrill of a desert safari as you race
          over golden dunes, ride camels, and enjoy a magical dinner under a sky
          bursting with stars. Take a boat trip to the stunning Tiran Island,
          where the water is so clear you’ll want to jump right in! Whether you
          crave excitement or ultimate relaxation, Sharm El Sheikh will steal
          your heart. Perfect for when you need a mix of adventure and tranquil
          beach vibes.
        </p>
        <div>
          <Image
            src="/city1.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Hurghada',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Hurghada is a lively coastal destination that perfectly blends
          relaxation and adventure. Dive into the vibrant underwater world,
          where coral reefs and exotic marine life create a diver’s paradise. If
          you prefer staying above water, take a glass-bottom boat ride to enjoy
          the stunning views of the Red Sea’s treasures. Hurghada’s bustling
          Marina offers world-class dining, shopping, and nightlife, while its
          sandy beaches invite you to unwind under the sun. For a day of
          adventure, head to Giftun Island or embark on a desert safari filled
          with dune bashing and Bedouin culture. Perfect for when you want
          excitement, relaxation, and endless Red Sea fun.
        </p>
        <div>
          <Image
            src="/city2.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Marsa Alam',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Marsa Alam is the kind of place you dream about but never believe
          exists. Imagine swimming alongside dolphins at Dolphin House or
          gliding through the dazzling reefs of Elphinstone, surrounded by
          vibrant fish and sea turtles. Take a boat trip to Sataya Reef, where
          dolphins leap and play around you—an experience you’ll never forget.
          When it’s time to unwind, the untouched beaches and serene sunsets
          will soothe your soul. Marsa Alam is your escape to pure beauty, where
          every moment feels like a postcard come to life. Perfect for when
          you’re seeking peace, nature, and marine adventures.
        </p>
        <div>
          <Image
            src="/city3.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Siwa',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Siwa Oasis is a hidden paradise that feels like a dream. Float
          weightlessly in the glittering salt lakes, or take a dip in
          Cleopatra’s Spring, where the water is as refreshing as the setting is
          magical. Set off on a thrilling desert safari, sandboarding down
          towering dunes and watching sunsets so stunning they seem painted by
          the heavens. Explore the ancient Shali Fortress and stroll through
          peaceful groves of olive and date palms. Siwa is a place of wonder,
          where every corner whispers a story and every moment feels like a
          blessing. Perfect for when you need to unplug and immerse yourself in
          natural beauty.
        </p>
        <div>
          <Image
            src="/city5.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'St. Catherine',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Nestled in the heart of the Sinai mountains, St. Catherine is a place
          of serenity and profound beauty. Hike up Mount Sinai at dawn and
          witness a sunrise so breathtaking, it feels like a spiritual
          awakening. Explore St. Catherine’s Monastery, one of the oldest in the
          world, where history, religion, and culture come together in a sacred
          embrace. For nature lovers, the surrounding mountains offer countless
          trails and stunning views that will leave you in awe. Perfect for when
          you seek spiritual connection, adventure, and awe-inspiring
          landscapes.
        </p>
        <div>
          <Image
            src="/city7.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    location: 'Nuweiba',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
          Nuweiba is a tranquil gem along the Gulf of Aqaba, offering pristine
          beaches and a laid-back atmosphere. Lounge by the crystal-clear
          waters, where the sea meets the mountains in a picture-perfect
          setting. Discover the colorful coral reefs while snorkeling or enjoy a
          boat trip to explore nearby lagoons. For a unique experience, spend
          the night in a cozy Bedouin camp under a sky filled with stars.
          Nuweiba is a place where time slows down, and every moment feels like
          pure bliss. Perfect for when you crave peace, natural beauty, and a
          touch of adventure.
        </p>
        <div>
          <Image
            src="/city10.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

// <>------------------<>
// 0-Page Links
//<>-------------------<>

interface Links {
  id: number;
  title: string;
  href: string;
}

export const Links: Links[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Cities', href: '/cities' },
  { id: 3, title: 'Programs', href: '/programs' },
  { id: 3, title: 'Contact Us', href: '/contactUs' },
];

// <>------------------<>
// 1-Home Data
//<>-------------------<>

// CountsBox

interface CountsBoxItem {
  id: number;
  num: number;
  title: string;
}

export const CountsBox: CountsBoxItem[] = [
  { id: 2, num: 15, title: 'Clients' },
  { id: 4, num: 10, title: 'Cities' },
  { id: 3, num: 200, title: 'Employees' },
];

// // <>------------------<>
// 4-Contact Us Data
//<>-------------------<>

export interface ContactItem {
  details: string;
  icon: any;
}

export const contactData: ContactItem[] = [
  {
    details: 'Contact@patron-travel.com',
    icon: <MdOutlineEmail className="text-4xl" />,
  },
  {
    details: '+20 103 383 8835',
    icon: <LuPhone className="text-4xl" />,
  },
];
