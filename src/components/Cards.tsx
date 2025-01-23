'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface BreakpointConfig {
  slidesPerView: number;
  spaceBetween: number;
}

interface CardsProps {
  slides: {
    coverImage?: string;
    programName?: string;
    numberOfDays?: number;
    info?: string;
  }[];
  initialSlide?: number;
  effect?: string;
  rotate?: number;
  stretch?: number;
  depth?: number;
  modifier?: number;
  slideShadows?: boolean;
  containerClassName?: string;
  breakpoints?: Record<number, BreakpointConfig>;
}

const Cards: React.FC<CardsProps> = ({
  slides,
  initialSlide = 2,
  effect = 'coverflow',
  rotate = 50,
  stretch = 0,
  depth = 100,
  modifier = 1,
  slideShadows = true,
  containerClassName = 'w-[90vw] h-[60vh] flex items-center justify-center',
  breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
    1280: { slidesPerView: 4, spaceBetween: 25 },
  },
}) => {
  return (
    <div className={containerClassName}>
      <Swiper
        effect={effect}
        centeredSlides={true}
        initialSlide={initialSlide}
        coverflowEffect={{
          rotate,
          stretch,
          depth,
          modifier,
          slideShadows,
        }}
        modules={[EffectCoverflow, Navigation]}
        breakpoints={breakpoints}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="rounded-xl relative shadow-lg overflow-hidden"
          >
            {slide.coverImage && (
              <Image
                src={slide.coverImage}
                alt={slide.programName || 'Default Alt Text'}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}
            <div className="absolute w-full h-[80vh] bottom-[-20vh] bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4 font-bold z-10">
              <h2>{slide.programName}</h2>
            </div>

            {slide.numberOfDays && (
              <div className="absolute top-2 w-20 rotate-45 rounded-md bg-secondary/90 -right-3 text-white text-center p-2 font-bold z-10">
                <h4>{slide.numberOfDays} Days</h4>
              </div>
            )}
            {slide.info && (
              <div className="absolute lg:space-y-3 space-y-2 w-full text-white rounded-md top-[86%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-left p-2 pb-3 px-3 font-bold z-10">
                <div>
                  <h4 className="text-sm line-clamp-2">{slide.info}</h4>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-500" />
                <Link
                  href="/cities"
                  className="flex items-center justify-between w-full"
                >
                  <div>
                    <p className="text-sm font-medium text-white">Explore</p>
                  </div>
                  <FaExternalLinkAlt />
                </Link>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
