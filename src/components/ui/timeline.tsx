'use client';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { BlurFade } from './blur-fade';

interface TimelineEntry {
  title?: string;
  content: React.ReactNode;
  location: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans"
      ref={containerRef}
    >
      <div className="lg:text-left text-center pb-12 w-[100%] lg:mr-auto lg:mx-0 mx-auto lg:pt-20 pt-10 lg:px-20 rounded-3xl lg:-mt-36 -mt-44 bg-white z-10 relative">
        <BlurFade delay={0.25} inView>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-heading dark:text-[whitesmoke] relative inline-block"
          >
            Explore Our Cities
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
      <div className="lg:pl-20 px-10">
        <h2 className="text-neutral-700 dark:text-neutral-300 text-sm md:text-2xl text-left max-w-xl">
          Experience the Beauty, Diversity, and Rich History That Make Our
          Cities Truly Unforgettable
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 md:mx-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-3"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.location}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.location}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-secondary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
