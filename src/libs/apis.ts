import { Program } from '@/models/programs';
import sanityClient from './sanity';
import * as queries from './sanityQueries';

export async function getFeaturedProgram() {
  const result = await sanityClient.fetch<Program>(
    queries.getFeaturedProgram,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getPrograms() {
  const result = await sanityClient.fetch<Program[]>(
    queries.getProgramsQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getProgram(slug: string) {
  const result = await sanityClient.fetch<Program>(
    queries.getProgram,
    { slug },
    { cache: 'no-cache' }
  );

  return result;
}
