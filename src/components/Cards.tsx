'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface BreakpointConfig {
  slidesPerView: number;
  spaceBetween: number;
}

interface CardsProps {
  slides: {
    coverImage: string;
    programName: string;
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
  containerClassName = 'w-[90vw] h-[50vh] flex items-center justify-center',
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
        grabCursor={true}
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
          <SwiperSlide key={i} className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src={slide.coverImage}
              alt={slide.programName}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-[80vh] bottom-[-20vh] bg-gradient-to-t from-black/70 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4 font-bold">
              {slide.programName}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
