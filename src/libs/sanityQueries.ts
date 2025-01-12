import { groq } from 'next-sanity';

export const getFeaturedProgram = groq`*[_type == "programs" && isFeatured == true][0] {
   _id,
    programName,
    slug,
    description,
    numberOfDays,
    destinations,
    images,
    coverImage,
    isFeatured,
    isHidden,
  }`;

export const getProgramsQuery = groq`*[_type == "programs"] | order(programName asc) {
    _id,
    programName,
    slug,
    description,
    numberOfDays,
    destinations,
    images,
    coverImage,
    isHidden,
  }`;

export const getProgram = groq`*[_type == "programs" && slug.current == $slug][0] {
    _id,
    programName,
    slug,
    description,
    numberOfDays,
    destinations,
    images,
    coverImage,
    isHidden,
  }`;
