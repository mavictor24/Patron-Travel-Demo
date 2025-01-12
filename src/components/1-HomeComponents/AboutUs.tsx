import React from 'react';
import Image from 'next/image';
import tripPic from '../../assets/images/trip.jpg';
import Button from '../Button';

const About = () => {
  return (
    <section className="py-20 lg:px-28 px-5">
      <main className="flex flex-col lg:flex-row gap-x-20 lg:gap-y-0 gap-y-20 w-full items-center justify-between">
        <div className="lg:w-1/2 w-full relative">
          <Image
            src={tripPic}
            alt="Trip"
            width={1000}
            height={1000}
            className="img rounded-xl"
          />
          <div className="absolute bg-white shadow-lg flex justify-center rounded-xl lg:w-[50%] w-[70%] py-3 lg:-bottom-10 -bottom-12 lg:-right-10 right-5">
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
          <h2 className="lg:text-5xl text-4xl text-gray-800">
            TripFun for <br /> modern travellers
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptatibus, delectus omnis recusandae maiores veritatis a, facere
            mollitia quo deserunt itaque corporis error dolores eos.
          </p>
          <div>
            <Button
              text={'Explore Now'}
              className="bg-lime-200 before:bg-white hover:text-black border-none shadow-xl lg:px-7 px-11 py-3"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
