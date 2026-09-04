import React from 'react';
import FadeIn from '../fadein-wrapper';
import { SlDirections } from 'react-icons/sl';
import { MdFollowTheSigns } from 'react-icons/md';
import { LuTicketsPlane } from 'react-icons/lu';

const features = [
  {
    title: 'lots of choices',
    subtitle:
      'We have provided several choices of destinations and very cheap travelling packages',
    icone: <SlDirections />,
  },
  {
    title: 'best tour guide',
    subtitle:
      'We provide professional tour guide and provide and people who understand the place',
    icone: <MdFollowTheSigns />,
  },
  {
    title: 'easy booking',
    subtitle:
      'We will also make it easier for users to book tickets or book the place you want',
    icone: <LuTicketsPlane />,
  },
];

const Features = () => {
  return (
    <section className="lg:px-20 px-3 py-20">
      <main className="w-full flex lg:flex-nowrap flex-wrap items-end lg:gap-0 gap-5">
        <div className="lg:w-2/5 w-full">
          <FadeIn duration={100}>
            <div className="flex items-center gap-x-2">
              <h3 className="text-primary font-bold capitalize flex text-xl items-center gap-x-1">
                what we give
              </h3>
              <div className="h-[2px] pl-10 w-3 bg-primary" />
            </div>
          </FadeIn>
          <div className="space-y-5">
            <FadeIn duration={100}>
              <h1 className="lg:text-5xl text-4xl capitalize lg:leading-[3.5rem] font-medium">
                <span className="font-bold">best features</span> <br />
                for you
              </h1>
            </FadeIn>
            <FadeIn duration={200}>
              <p className="text-black/60 max-w-md pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                saepe exercitationem tempora distinctio.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="lg:w-3/5 w-full">
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-3">
            {features.map((feature, index) => (
              <FadeIn
                key={index}
                duration={300}
                className="flex flex-grow flex-col items-start justify-evenly p-4 hover:bg-[#f6f9f8] w-64 h-44 rounded-3xl hover:shadow-lg hover:shadow-black/10 transition-all duration-400 ease-in-out shadow-md"
              >
                <span className="bg-primary/20 p-3 rounded-lg lg:text-3xl text-4xl">
                  {feature.icone}
                </span>
                <h4 className="lg:text-base text-lg font-bold capitalize">
                  {feature.title}
                </h4>
                <p className="lg:text-xs text-sm text-black/70">
                  {feature.subtitle}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Features;
