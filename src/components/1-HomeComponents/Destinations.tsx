import React, { FC } from 'react';
import { DestinationCards } from '..';
import { Program } from '@/models/programs';

type Props = {
  featuredPrograms: Program[]; // Expect an array of featured programs
};

const Destinations: FC<Props> = ({ featuredPrograms }) => {
  // Generate slides from the array of featured programs
  const slides = featuredPrograms.map((program) => ({
    coverImage: program.coverImage.url,
    programName: program.programName,
    numberOfDays: program.numberOfDays,
  }));

  return (
    <section className="relative bg-secondary flex flex-col items-center justify-center lg:h-[110vh] h-[95vh] rounded-[4rem] z-10 -mt-16 overflow-hidden">
      <main className="w-full h-full flex flex-col items-center justify-center gap-y-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-5xl text-center text-white"
        >
          Recommended <span className="text-primary">Popular</span> <br />
          Destinations
        </h1>
        <DestinationCards
          slides={slides}
          initialSlide={1} // Start with the first slide
          effect="coverflow"
          rotate={0} // Set custom rotate for coverflow effect
          stretch={20} // Set custom stretch
          depth={150} // Set custom depth
          modifier={1.5} // Set custom modifier
          slideShadows={true} // Enable slide shadows
          containerClassName="w-[120vw] h-[40vh] md:w-[85vw] md:h-[65vh] lg:w-[95vw] lg:h-[55vh] flex items-center justify-center"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 25 },
          }}
        />
      </main>
    </section>
  );
};

export default Destinations;
