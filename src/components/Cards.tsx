'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  initialSlide: number;
}

interface CardsProps {
  slides: {
    coverImage?: string;
    destinations?: string[];
    programName?: string;
    numberOfDays?: number;
    info?: string;
    slug?: string;
  }[];
  effect?: string;
  rotate?: number;
  stretch?: number;
  depth?: number;
  modifier?: number;
  slideShadows?: boolean;
  containerClassName?: string;
  breakpoints?: Record<number, BreakpointConfig>;

  // Props to control visibility
  showCoverImage?: boolean;
  showProgramName?: boolean;
  showDestinations?: boolean;
  showNumberOfDays?: boolean;
  showInfo?: boolean;

  // Hover effect control
  hoverEffect?: boolean;
}

const Cards: React.FC<CardsProps> = ({
  slides,
  effect = 'coverflow',
  rotate = 20,
  stretch = 0,
  depth = 100,
  modifier = 1,
  slideShadows = true,
  containerClassName = 'w-[90vw] h-[60vh] flex items-center justify-center',
  breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10, initialSlide: 0 },
    640: { slidesPerView: 2, spaceBetween: 15, initialSlide: 1 },
    1024: { slidesPerView: 3, spaceBetween: 20, initialSlide: 2 },
    1280: { slidesPerView: 4, spaceBetween: 25, initialSlide: 2 },
  },

  showCoverImage = true,
  showProgramName = true,
  showDestinations = true,
  showNumberOfDays = true,
  showInfo = true,

  hoverEffect = false,
}) => {
  const [showEffect, setShowEffect] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  // Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEffect(true);
          setTimeout(() => setShowEffect(false), 1000); // Auto-hide effect after 1s
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className={containerClassName}>
      <Swiper
        effect={effect}
        centeredSlides={true}
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
            className={`rounded-3xl relative shadow-lg overflow-hidden ${
              hoverEffect ? 'group' : ''
            }`}
          >
            {/* Cover Image */}
            {showCoverImage && slide.coverImage && (
              <Image
                src={slide.coverImage}
                alt={slide.programName || 'Default Alt Text'}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}

            {/* Hover Effect (Initially Visible for 2s) */}
            {hoverEffect && (
              <div
                className={`absolute inset-0 bg-black/80 text-white transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center z-20 ${
                  showEffect
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {showProgramName && (
                  <h2 className="text-lg font-bold">{slide.programName}</h2>
                )}
                {showDestinations && slide.destinations && (
                  <h4 className="text-sm mt-2">
                    {slide.destinations
                      .map((destination) =>
                        destination
                          .split(' ')
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(' ')
                      )
                      .join(' - ')}
                  </h4>
                )}
                {showNumberOfDays && slide.numberOfDays && (
                  <p className="mt-2 text-sm bg-secondary/90 px-3 py-1 rounded-md">
                    {slide.numberOfDays} Days
                  </p>
                )}
                {showInfo && slide.info && (
                  <p className="mt-3 text-xs">{slide.info}</p>
                )}

                {/* Explore Button */}
                <Link
                  href={`programs/${slide.slug}`}
                  className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200"
                >
                  Explore <FaExternalLinkAlt />
                </Link>
              </div>
            )}

            {/* Static Content (if hoverEffect is disabled) */}
            {!hoverEffect && (
              <>
                {/* Gradient Overlay */}
                <div className="absolute w-full h-[80vh] bottom-[-20vh] bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 text-white text-left p-4 font-bold z-10">
                  {showProgramName && <h2>{slide.programName}</h2>}
                  {showDestinations && slide.destinations && (
                    <h4>
                      {slide.destinations
                        .map((destination) =>
                          destination
                            .split(' ')
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(' ')
                        )
                        .join(' - ')}
                    </h4>
                  )}
                </div>
                {showNumberOfDays && slide.numberOfDays && (
                  <div className="absolute top-2 w-20 rotate-45 rounded-md bg-secondary/90 -right-3 text-white text-center p-2 font-bold z-10">
                    <h4>{slide.numberOfDays} Days</h4>
                  </div>
                )}
                {showInfo && slide.info && (
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
                        <p className="text-sm font-medium text-white">
                          Explore
                        </p>
                      </div>
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
