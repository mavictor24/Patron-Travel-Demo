'use client';

import React from 'react';
import Button from '../Button';
import { Image } from '@nextui-org/image';
import { motion } from 'framer-motion';
import { BlurFade } from '../ui/blur-fade';

const About = () => {
  return (
    <section className="py-20 lg:py-32 lg:px-16 px-5 space-y-14">
      <div className="text-center pb-5">
        <BlurFade delay={0.25} inView>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-heading dark:text-[whitesmoke] relative inline-block"
          >
            Our Philosophy
            <motion.span
              className="absolute bottom-[-10px] left-[40%] transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-lg"
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </h2>
        </BlurFade>
      </div>
      <main className="flex flex-col lg:flex-row gap-x-20 lg:gap-y-0 gap-y-20 w-full items-center justify-between">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="lg:w-1/2 w-full relative"
        >
          <Image
            isBlurred
            src="/10.png"
            alt="Trip"
            width={500}
            height={350}
            className="img rounded-xl lg:m-5"
          />
          <div className="absolute z-10 bg-white shadow-lg flex justify-center rounded-xl lg:w-[50%] w-[70%] py-3 lg:-bottom-10 -bottom-12 lg:-right-10 right-5">
            <p className="text-lg leading-tight">
              Exeptional adventures,
              <br />
              every time. Star designing
              <br />
              your dream trip today.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full space-y-5">
          <h2
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:text-5xl text-4xl text-gray-800"
          >
            At Patron Travel
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-lg text-gray-600"
          >
            we see travel as a bridge—connecting hearts, cultures, and centuries
            of history. Every journey we create is a tribute to Egypt's
            unmatched legacy, crafted for travelers who crave meaningful
            experiences and unforgettable adventures.
          </p>
          <div data-aos="fade-right" data-aos-duration="800" className="hidden">
            <Button
              text={'Explore Now'}
              className="bg-secondary before:bg-primary text-white border-none shadow-xl lg:px-7 px-20 py-3"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
