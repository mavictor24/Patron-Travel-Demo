import React from 'react';
import { Image } from '@nextui-org/image';
import FadeIn from '../fadein-wrapper';
import { FaPlus } from 'react-icons/fa6';

const stats = [
  { value: 2000, label: 'Our Explorers' },
  { value: 100, label: 'Destinations' },
  { value: 20, label: 'Years Experience' },
];

const About = () => {
  return (
    <section className="py-10 lg:px-20 px-3">
      <main className="flex flex-wrap-reverse items-center justify-between w-full">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full relative z-10 py-52">
          {[
            {
              src: '/The Philae Temple.jpeg',
              width: 350,
              height: 400,
              position: 'top-1/2 lg:left-1/2 left-[40%] w-[80%]',
            },
            {
              src: '/15.png',
              width: 280,
              height: 280,
              position: 'top-24 lg:left-[80%] left-[60%] w-[70%]',
            },
            {
              src: '/14.png',
              width: 200,
              height: 200,
              position: '-top-16 lg:left-[100%] left-[75%] w-[50%]',
            },
          ].map((img, index) => (
            <FadeIn key={index} duration={100 * (index + 1)}>
              <div
                className={`absolute ${img.position} lg:w-full -translate-x-1/2 -translate-y-1/2 `}
              >
                <Image
                  src={img.src}
                  alt="aboutimg"
                  width={img.width}
                  height={img.height}
                  className="img border-2 border-white"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pb-0 pb-10 w-full h-full">
          <FadeIn duration={100}>
            <div className="flex items-center gap-x-2">
              <h3 className="text-primary font-bold flex text-xl items-center gap-x-1">
                About
              </h3>
              <div className="h-[2px] pl-10 w-3 bg-primary" />
            </div>
          </FadeIn>
          <div className="space-y-5">
            <FadeIn duration={100}>
              <h1 className="lg:text-5xl text-4xl capitalize lg:leading-[3.5rem] font-medium">
                <span className="font-bold">we recommend</span> <br />
                beautiful destinations <br /> every month
              </h1>
            </FadeIn>
            <FadeIn duration={200}>
              <p className="text-black/60 max-w-md pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                saepe exercitationem tempora distinctio.
              </p>
            </FadeIn>
            <div className="flex lg:flex-nowrap flex-wrap items-center gap-x-3 gap-y-5">
              {stats.map((stat, index) => (
                <FadeIn
                  duration={300}
                  className="w-52 lg:py-3 py-5 flex-grow text-center rounded-3xl bg-[#f6f9f8]"
                  key={index}
                >
                  <h2 className="lg:text-3xl text-4xl flex items-center font-semibold justify-center">
                    {stat.value}
                    <span className="text-base">
                      <FaPlus />
                    </span>
                  </h2>
                  <h3 className="lg:text-lg text-2xl">{stat.label}</h3>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
