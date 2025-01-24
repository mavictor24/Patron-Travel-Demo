'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import Image from 'next/image';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    title: string;
    href: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [opacity, setOpacity] = useState(1); // Start with full opacity

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    const currentValue = scrollYProgress.get() ?? 0;

    const direction = currentValue - previous;

    if (currentValue < 0.05) {
      setOpacity(1); // Full opacity at the top
    } else {
      // Adjust opacity based on scroll direction
      setOpacity((prev) => {
        if (direction < 0) {
          // Scrolling up: Increase opacity
          return Math.min(prev + 0.05, 1); // Increase opacity a little bit
        } else {
          // Scrolling down: Decrease opacity a little
          return Math.max(prev - 0.05, 0.1);
        }
      });
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: opacity, // Adjust opacity based on scroll
        }}
        transition={{
          duration: 0.2, // Smooth transition
        }}
        className={cn(
          'flex lg:w-[47%] w-full fixed lg:top-5 top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] lg:rounded-full rounded-b-3xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 pb-3 lg:px-14 px-2 items-center justify-around lg:gap-x-10 gap-x-8',
          className
        )}
      >
        <Link href="/">
          <div className="lg:w-[8rem] w-[5rem]">
            <Image src="/Logo/1.svg" alt="logo" width={900} height={900} />
          </div>
        </Link>
        <div className="flex items-center justify-between lg:-mb-4 -mb-2 lg:gap-x-12 gap-x-7">
          {navItems.slice(0, 2).map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.href}
              className={cn(
                'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
              )}
            >
              <span className="lg:text-lg text-base">{navItem.title}</span>
            </Link>
          ))}
        </div>
        <Link href="/contactUs">
          <button className="lg:-mb-4 -mb-2 border text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
