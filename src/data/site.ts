export const site = {
  name: 'Patron Travel',
  tagline: 'Egypt, Curated.',
  description:
    'An Egyptian travel agency crafting authentic, immersive journeys through ancient wonders, sacred paths, and hidden gems across Egypt.',
  email: 'Contact@patron-travel.com',
  phone: '+20 103 383 8835',
  phoneHref: 'tel:+201033838835',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours', href: '/tours' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export type Experience = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    slug: 'desert-safaris',
    name: 'Desert Safaris & Stargazing',
    description:
      'Immerse yourself in the vast desert with camel treks, Bedouin feasts, and nights spent under a billion stars.',
    image: '/images/siwa-desert-safari.png',
  },
  {
    slug: 'red-sea-diving',
    name: 'Snorkeling & Diving in the Red Sea',
    description:
      'Dive into the vibrant underwater world of the Red Sea, teeming with coral reefs and exotic marine life.',
    image: '/images/marsa-alam-diving.png',
  },
  {
    slug: 'nile-cruises',
    name: 'Nile Cruises: A Journey Through Time',
    description:
      "Sail along the lifeline of ancient Egypt, stopping at iconic temples and watching the Nile's breathtaking sunsets.",
    image: '/images/nile-cruise-ship.png',
  },
  {
    slug: 'historical-marvels',
    name: 'Historical Marvels & Cultural Immersion',
    description:
      'Visit the Great Pyramids, wander bustling bazaars, and engage with living traditions thousands of years old.',
    image: '/images/luxor-karnak-columns.jpg',
  },
  {
    slug: 'sinai-spirituality',
    name: "Jewel of Sinai — St. Catherine's Monastery",
    description:
      'A sacred gem beneath Mount Sinai, where ancient history, spiritual tranquility, and stunning beauty converge.',
    image: '/images/st-catherine-monastery.jpg',
  },
];

export type ValueProp = {
  title: string;
  description: string;
};

export const whyChooseUs: ValueProp[] = [
  {
    title: 'Egyptian-Born Experts',
    description:
      'We are a local agency, not a reseller — every itinerary is built by people who grew up with these places.',
  },
  {
    title: 'Handcrafted Itineraries',
    description:
      'No cookie-cutter packages. Every journey is tailored around your pace, interests, and travel style.',
  },
  {
    title: 'Authentic Access',
    description:
      'From Bedouin camps to Nile feluccas, we connect you to real experiences, not tourist traps.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From your first message to your last day in Egypt, our team is one call away.',
  },
];
