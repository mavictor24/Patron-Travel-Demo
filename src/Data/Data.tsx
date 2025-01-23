import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
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

// Home Background

interface HomeBackground {
  image: string;
}

export const HomeBackgrounds: HomeBackground[] = [
  { image: '/LandingImages/IMG_0045.JPG' },
  { image: '/Administrative-building/IMG-20241107-WA0010.jpg' },
  { image: '/LandingImages/IMG_0053.JPG' },
  { image: '/The-Pearl/pearl.jpg' },
  { image: '/LandingImages/WhatsApp Image 2024-08-25 at 2.38.35 PM (3).jpeg' },
  { image: '/Porto-Sharm/IMG_20180422_112345.png' },
  { image: '/LandingImages/252.jpg' },
  { image: '/LandingImages/IMG-20200815-WA0059.jpg' },
  { image: '/LandingImages/IMG_0025.JPG' },
  { image: '/LandingImages/IMG_0044.JPG' },
  { image: '/LandingImages/IMG_0054.JPG' },
  { image: '/LandingImages/IMG_0494.JPG' },
  { image: '/LandingImages/SAM_6832.jpg' },
  { image: '/LandingImages/SAM_6832.jpg' },
  { image: '/LandingImages/SAM_FFGG32.jpg' },
  { image: '/LandingImages/WhatsApp Image 2024-08-25 at 2.38.34 PM (2).jpeg' },
];

// Clients Logo

interface Client {
  img: string;
}

export const Clients: Client[] = [
  { img: `/Logos/images..2.png` },
  { img: `/Logos/imagesss.png` },
  { img: `/Logos/Layer 59.png` },
  { img: `/Logos/Layer 60.png` },
  { img: `/Logos/Layer 61.png` },
  { img: `/Logos/images-removebg-preview.png` },
  { img: `/Logos/KaiSokhna-removebg-preview.png` },
  { img: `/Logos/SEO-ilcazar_Logo-Alternative-copy-4.png` },
  { img: `/Logos/Waterworld-removebg-preview.png` },
  { img: `/Logos/Layer 63.png` },
  { img: `/Logos/Layer 64.png` },
  { img: `/Logos/logo-2-white.png` },
  { img: `/Logos/logo-3-white.png` },
  { img: `/Logos/logo.png` },
  { img: `/Logos/logos neyoum-arab-03.png` },
  { img: `/Logos/misr_italia_properties_logo_003.png` },
  { img: `/Logos/october-03.png` },
  { img: `/Logos/porto said.png` },
  { img: `/Logos/montazalogo (2).png` },
  { img: `/Logos/porto_group.png` },
  { img: `/Logos/Sharming Inn Logo.png` },
  { img: `/Logos/OW1.png` },
];

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

// Chariman of boards Data

export interface SectionData {
  imageSrc: string;
  imageAlt: string;
  imageClasses: string;
  content: string;
  contentClasses: string;
}

export const chairmanOfBoardsData: SectionData[] = [
  {
    imageSrc: '/Coral-Sea/Layer 53 copy.png',
    imageAlt: 'Coral Sea Project',
    imageClasses:
      'lg:w-[55%] mx-4 w-full lg:h-96 h-60 shadow-xl overflow-hidden rounded-2xl dark:block z-10',
    content: `Key to our success <br />
    is developing long term relationships. Our aim is to achieve customer satisfaction
    by consistently delivering results
    on time and within budget reflecting the needs of all our stakeholders. This achievement to date is the result of the efforts of 
    our highly dedicated and experienced project teams. 
    Our approach allows for the project team you start with to be the team you celebrate with the successful completion of the project.`,
    contentClasses:
      'lg:w-[45%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl lg:absolute lg:left-[40%] -mt-36 z-50',
  },
  {
    imageSrc: '/Porto-Minya/building2.jpg',
    imageAlt: 'Porto Minya Building',
    imageClasses:
      'lg:w-[45%] w-full mx-4 lg:h-72 h-52 overflow-hidden shadow-xl rounded-2xl lg:absolute lg:left-[40%] z-10',
    content: `Our long term vision <br />
    We are passionate about fostering a strong, sustainable and
    profitable growth through which every stakeholder has an
    opportunity to attain quality of life. To make our vision a reality,
    we commit to delivering excellence and value across all levels of engagement.`,
    contentClasses:
      'lg:w-[55%] lg:m-0 p-5 bg-LightModeBG dark:bg-DarkModeBG shadow-2xl dark:shadow-white/10 dark:border-white/5 dark:border-2 rounded-2xl z-50 -mt-28',
  },
];

// <>------------------<>
// 2- Services Data
//<>-------------------<>

export interface Feature {
  id: number;
  icon: string; // SVG path or Icon component
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', // SVG Path
    title: 'Secured Payments',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: 2,
    icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z', // SVG Path
    title: 'Fast Delivery',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: 3,
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', // SVG Path
    title: 'Easy Integration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

// 3-FeaturedProjects Data
//<>-------------------<>

interface FeaturedBackground {
  coverImg: string;
}

export const FeaturedProject: FeaturedBackground[] = [
  {
    coverImg: '/Sia-Lagoons/WhatsApp Image 2024-08-26 at 1.27.42 PM (3).jpeg',
  },
  {
    coverImg: '/HUB-Mall/WhatsApp Image 2025-01-02 at 8.52.59 PM.jpeg',
  },
  {
    coverImg: '/Porto-October/SAM_6832.jpg',
  },
  {
    coverImg: '/Porto-Said/IMG-20200815-WA0059.jpg',
  },
  {
    coverImg: '/Oriental-Wavers/DSC00999.png',
  },
  {
    coverImg: '/The-Pearl/pearl.jpg',
  },
  {
    coverImg: '/Porto-October/252.jpg',
  },
  {
    coverImg: '/Porto-October/IMG_0053.JPG',
  },
  {
    coverImg: '/Porto-October/IMG_0044.JPG',
  },
  {
    coverImg: '/administrative-building.jpg',
  },
  {
    coverImg:
      '/The-Pearl/صورة واتساب بتاريخ 1445-03-18 في 13.54.32_8552acde.jpg',
  },
  {
    coverImg: '/Porto-October/IMG_2372ee.jpg',
  },
];

// // <>------------------<>
// 4-Contact Us Data
//<>-------------------<>

export interface ContactItem {
  iconPath: string;
  details: string;
  link: string;
  icon: any;
}

export const contactData: ContactItem[] = [
  {
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    details: '',
    link: '',
    icon: <MdEmail className="text-4xl" />,
  },
  {
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    details: '52 El-Ansar, Ad Doqi, Dokki, Giza Governorate 3751060',
    link: 'https://www.google.com/maps/place/MCC+-+%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%A7%D9%86%D8%B4%D8%A7%D8%A1%D8%A7%D8%AA+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9+%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%E2%80%AD/@30.040874,31.198817,16z/data=!4m6!3m5!1s0x145847dfadab6abb:0x613111d2768cb9b8!8m2!3d30.0408737!4d31.1988167!16s%2Fg%2F11fkvym5s7?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    icon: <FaLocationDot className="text-4xl" />,
  },
];
