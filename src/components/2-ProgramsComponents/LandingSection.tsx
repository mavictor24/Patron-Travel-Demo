import React from 'react';
import { Image } from '@nextui-org/react';
import { PiAirplaneTiltDuotone } from 'react-icons/pi';
import Button from '../Button';
import FadeIn from '../fadein-wrapper';

const LandingSection = () => {
  return (
    <section className="lg:py-5 py-20">
      <main className="flex flex-wrap lg:h-screen h-[120vh] items-center justify-between w-full overflow-hidden">
        <div className="relative lg:pl-20 pl-5">
          <FadeIn duration={100}>
            <div className="flex items-center gap-4">
              <h3 className="text-primary font-bold flex text-xl items-center gap-x-1">
                <PiAirplaneTiltDuotone className="text-4xl" />
                Explore the World
              </h3>
              <div className="h-[2px] pl-10 w-5 bg-primary" />
            </div>
          </FadeIn>
          <FadeIn duration={100}>
            <div className="space-y-5">
              <h1 className="lg:text-5xl text-4xl capitalize lg:leading-[3.5rem] font-medium">
                {' '}
                <span className="font-bold">descover the</span> <br /> best
                destinations <br /> in the world{' '}
              </h1>
              <p className="text-black/60 max-w-md pr-5">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                saepe exercitationem tempora distinctio sunt sequi blanditiis
                doloremque.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="flex gap-5 lg:w-1/2 w-full relative z-0">
          <div className="gap-5 flex flex-col items-end w-full">
            <FadeIn duration={250}>
              <div className="lg:w-[18vw] w-[40vw]">
                <Image
                  src={`/Alexandria Library.jpeg`}
                  alt=""
                  width={300}
                  height={240}
                  className="img"
                />
              </div>
            </FadeIn>
            <FadeIn
              duration={250}
              className="absolute lg:left-16 lg:top-32 left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl border-1 border-black/30 backdrop-blur-xl lg:px-5 px-1 py-2"
            >
              <div>
                <h3 className="text-base text-center">
                  <span className="font-bold">100+ Destinations</span> <br />
                  More than 100 <br className="lg:block hidden" /> Traveles use
                  this platform
                </h3>
              </div>
            </FadeIn>
            <FadeIn duration={250}>
              <div className="lg:-ml-0 -ml-3 lg:w-[25vw] w-[50vw] z-0">
                <Image
                  src={`/The Philae Temple.jpeg`}
                  alt=""
                  width={400}
                  height={220}
                  className="img"
                />
              </div>
            </FadeIn>
          </div>
          <div className="gap-5 flex flex-col lg:flex-col-reverse items-start -mb-10 w-full z-0">
            <FadeIn duration={250}>
              <div className="lg:w-[18vw] w-[40vw]">
                <Image
                  src={`/egypt.jpeg`}
                  alt=""
                  width={300}
                  height={240}
                  className="img"
                />
              </div>
            </FadeIn>
            <FadeIn duration={250}>
              <div className="lg:w-[25vw] w-[50vw]">
                <Image
                  src={`/Pyramids2.jpeg`}
                  alt=""
                  width={400}
                  height={220}
                  className="img"
                />
              </div>
            </FadeIn>
          </div>
          <div className="absolute lg:-left-12 lg:bottom-0 left-1/2 -bottom-12 -translate-x-1/2 -translate-y-1/2">
            <FadeIn duration={250}>
              <Button text={'Explore More'} className="w-[10rem]" />
            </FadeIn>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandingSection;
