'use client';

import React, { useState, useCallback, useMemo } from 'react';
import useSWR from 'swr';
import { getPrograms } from '@/libs/apis';
import LoadingSpinner from '../loading';
import {
  FilterButton,
  LandingSection,
  FindConstructionTeam,
  Programs,
  About,
  Features,
} from '@/components/2-ProgramsComponents';
import { Program } from '@/models/programs';

const Projects = () => {
  // State for filters
  const [programDestinationFilter, setProgramDestinationFilter] = useState('');
  // const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const projectsPerPage = 6;

  const fetchData = useCallback(() => getPrograms(), []);

  const { data, error, isLoading } = useSWR('get/progrmas', fetchData, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  if (error) throw new Error('Cannot fetch data');
  if (!data && !isLoading) throw new Error('Cannot fetch data');
  if (!data) return <LoadingSpinner />;

  // Filter the projects to include only those that are not hidden

  const filteredPrograms = (data || []).filter(
    (program: Program) => !program.isHidden
  ); // Exclude hidden programs

  // Pagination logic
  const programsPerPage = 6;
  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  const displayedPrograms = filteredPrograms.slice(
    (currentPage - 1) * programsPerPage,
    currentPage * programsPerPage
  );

  return (
    <section>
      <LandingSection />

      <About />
      <Features />

      <Programs programs={displayedPrograms} />

      {/* <FilterButton
        programDestinationFilter={programDestinationFilter}
        setProgramDestinationFilter={setProgramDestinationFilter}
      />

      <div className="lg:px-20 px-5">
        <ProgramCards programs={displayedPrograms} />
       
      </div>

      <FindConstructionTeam /> */}
    </section>
  );
};

export default Projects;
