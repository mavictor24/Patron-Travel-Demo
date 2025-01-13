import { groq } from 'next-sanity';

// Query to fetch featured programs
export const getFeaturedPrograms = groq`
  *[_type == "programs" && isFeatured == true && !isHidden] {
    _id,
    programName,
    slug,
    description,
    aboutTrip[] {
      dayNumber,
      details,
    },
    numberOfDays,
    destinations,
    images,
    coverImage,
  }`;

// Query to fetch all programs
export const getProgramsQuery = groq`
  *[_type == "programs" && !isHidden] | order(programName asc) {
    _id,
    programName,
    slug,
    description,
    aboutTrip[] {
      dayNumber,
      details,
    },
    numberOfDays,
    destinations,
    images,
    coverImage,
  }`;

// Query to fetch a single program by slug
export const getProgram = groq`
  *[_type == "programs" && slug.current == $slug][0] {
    _id,
    programName,
    slug,
    description,
    aboutTrip[] {
      dayNumber,
      details,
    },
    numberOfDays,
    destinations,
    images,
    coverImage,
    isHidden,
  }`;
