import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { CitiesData } from '@/Data/Data';

const ExploreCities = () => {
  return (
    <section className="w-full py-32 lg:py-28">
      <Timeline data={CitiesData} />
    </section>
  );
};

export default ExploreCities;
