'use client';

import React from 'react';
import { Button, Cards } from '..';
import { FeaturedCitiesData } from '@/Data/Data';
import { BlurFade } from '../ui/blur-fade';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FeaturedCities = () => {
  return (
    <section className="featuredCitiesCover my-32">
      <div className="w-full h-full gap-20 backdrop-brightness-[.3]">
        <main className="flex items-center justify-between py-10 flex-wrap">
          <div className="lg:w-2/5 w-full lg:space-y-10 space-y-5 pl-10 ">
            <BlurFade delay={0.25} inView>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="md:text-6xl text-3xl font-serif text-white font-bold dark:text-[whitesmoke] relative inline-block"
              >
                Cities
                <motion.span
                  className="absolute bottom-[-10px] left-[40%] transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                />
              </h2>
            </BlurFade>
            <div>
              <Link href="/cities">
                <div data-aos="fade-right" data-aos-duration="800">
                  <Button
                    text={'Explore More'}
                    className="bg-secondary before:bg-primary text-white border-none shadow-xl lg:px-7 px-20 py-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-3/5 w-full relative overflow-hidden">
            <Cards
              slides={FeaturedCitiesData}
              initialSlide={0} // Start with the first slide
              effect="coverflow"
              rotate={0} // Set custom rotate for coverflow effect
              stretch={0} // Set custom stretch
              depth={0} // Set custom depth
              modifier={1.5} // Set custom modifier
              slideShadows={false} // Enable slide shadows
              containerClassName="w-[120vw] h-[40vh] md:w-[85vw] md:h-[65vh] lg:w-[80vw] lg:h-[55vh] flex items-center justify-cente my-10"
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 20 },
              }}
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default FeaturedCities;
