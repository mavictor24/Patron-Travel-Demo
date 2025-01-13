'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { BlurFade } from '../ui/blur-fade';
import BoxReveal from '../ui/box-reveal';

const WhoWeAre = () => {
  const images = [
    '/12.png',
    '/13.png',
    '/14.png',
    '/17.png',
    '/15.png',
    // '/16.png',
    '/20.png',
    // '/19.png',
  ];
  return (
    <div className="max-w-sm md:max-w-7xl mx-auto overflow-hidden lg:py-40 py-24">
      <BlurFade delay={0.25} inView>
        <div className="text-center space-y-12">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-heading dark:text-[whitesmoke] relative inline-block text-center"
          >
            Experience <br /> Egypt’s Rich Heritage
            <motion.span
              className="absolute bottom-[-10px] left-[40%] transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-lg"
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </h2>
          <h4
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base md:text-xl lg:px-36 px-3 pb-10 text-black/70 dark:text-neutral-100 font-bold text-center mb-8"
          >
            An Egyptian travel agency passionate about connecting the world to
            the heart of Egypt. <br /> Specializing in authentic, immersive
            experiences, we bring history, spirituality, and natural beauty to
            life. Whether exploring ancient wonders, following sacred paths, or
            discovering hidden gems, <br /> we craft journeys that leave lasting
            impressions.
          </h4>
        </div>
      </BlurFade>

      <div className="flex justify-center items-center">
        {images.map((image, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.2} inView>
            <motion.div
              key={'images' + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-28 w-32 md:h-48 md:w-72 object-cover flex-shrink-0"
              />
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
