'use client';
import React from 'react';
import { Program } from '@/models/programs';
import { BlurFade } from '../ui/blur-fade';
import ProgramCard from '../CardsComponents/ProgramCard';
import FadeIn from '../fadein-wrapper';
import Cards from '../Cards';

interface Programs {
  programs: Program[];
}

const Programs: React.FC<Programs> = ({ programs }) => {
  const program = programs.map((program) => ({
    coverImage: program.coverImage.url,
    programName: program.programName,
    numberOfDays: program.numberOfDays,
    destinations: program.destinations,
    slug: program.slug.current,
  }));
  return (
    <section className="py-10">
      <main>
        <div className="flex flex-col lg:items-center text-left lg:text-center bg-[#f6f9f8] lg:mx-20 px-3 pb-32 pt-12 rounded-[3rem]">
          <FadeIn duration={100}>
            <div className="flex items-center gap-x-2">
              <h3 className="text-primary font-bold capitalize flex text-xl items-center ">
                Our Programs
              </h3>
              <div className="h-[2px] pl-10 w-2 bg-primary" />
            </div>
          </FadeIn>
          <div className="space-y-5">
            <FadeIn duration={100}>
              <h1 className="lg:text-5xl text-4xl capitalize lg:leading-[3.5rem] font-medium">
                <span className="font-bold">Let's Explore</span> your dream{' '}
                <br className="hidden lg:block" />
                programs here
              </h1>
            </FadeIn>
            <FadeIn duration={200}>
              <p className="text-black/60 max-w-3xl pr-5">
                We have recommended popular destinations every week so you don't
                have to worry about your dream destination with traver
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="pt-10 relative overflow-hidden flex justify-center w-full mx-auto -mt-32">
          <Cards
            hoverEffect={true}
            showNumberOfDays={false}
            slides={program}
            effect="coverflow"
            stretch={20} // Set custom stretch
            depth={160} // Set custom depth
            modifier={1.5} // Set custom modifier
            slideShadows={true} // Enable slide shadows
            containerClassName="w-[120vw] h-[40vh] md:w-[85vw] md:h-[65vh] lg:w-[90vw] lg:h-[70vh] flex items-center justify-center"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10, initialSlide: 1 },
              640: { slidesPerView: 2, spaceBetween: 20, initialSlide: 1 },
              1024: { slidesPerView: 3, spaceBetween: 20, initialSlide: 1 },
              1280: { slidesPerView: 3, spaceBetween: 25, initialSlide: 1 },
            }}
          />
        </div>
      </main>
    </section>
  );
};

export default Programs;
