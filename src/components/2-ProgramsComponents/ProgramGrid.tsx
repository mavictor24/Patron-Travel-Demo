'use client';
import React from 'react';
import { Program } from '@/models/programs';
import { BlurFade } from '../ui/blur-fade';
import ProgramCard from '../CardsComponents/ProgramCard';

interface ProgramGridProps {
  programs: Program[];
}

const ProjectGrid: React.FC<ProgramGridProps> = ({ programs }) => (
  <>
    <div className="flex flex-col gap-y-2 lg:mt-32 mt-24">
      <h1 className="font-heading dark:text-[whitesmoke] text-center">
        What we have accomplished...
      </h1>
      <p className="font-title dark:text-zinc-300">
        From blueprints to grand openings, see our projects come to life
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 pt-28">
      {programs.map((program, idx) => (
        <BlurFade key={program._id} delay={0.25 + idx * 0.1} inView>
          <ProgramCard program={program} />
        </BlurFade>
      ))}
    </div>
  </>
);

export default ProjectGrid;
