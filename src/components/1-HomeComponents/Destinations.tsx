import React, { FC } from 'react';
import { DestinationCards } from '..';
import { Program } from '@/models/programs';

type Props = {
  featuredProgram: Program;
};

const Destinations: FC<Props> = (props) => {
  const { featuredProgram } = props;

  const slides = [
    {
      coverImage: featuredProgram.coverImage.url,
      programName: featuredProgram.programName,
    },
  ];

  return (
    <section className="relative bg-green-950 flex flex-col items-center justify-center lg:h-[110vh] h-[95vh] rounded-[4rem] z-10 -mt-36">
      <main className="w-full h-full flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-5xl text-center text-white">
          Recommended <span className="text-lime-200">Popular</span> <br />
          Destinations
        </h1>
        <DestinationCards
          slides={slides}
          initialSlide={2} // Set initial slide
          effect="coverflow"
          rotate={0} // Set custom rotate for coverflow effect
          stretch={20} // Set custom stretch
          depth={150} // Set custom depth
          modifier={1.5} // Set custom modifier
          slideShadows={true} // Enable slide shadows
          containerClassName="w-[100vw] h-[45vh] md:w-[85vw] md:h-[65vh] lg:w-[95vw] lg:h-[55vh] flex items-center justify-center"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 25 },
          }}
        />
      </main>
    </section>
  );
};

export default Destinations;
