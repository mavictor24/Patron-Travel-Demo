'use client';

import React from 'react';
import { BlurFade } from '../ui/blur-fade';
import { ContactUsForm, PatronInformation } from '../3-ContactUsComponents';
import { motion } from 'framer-motion';

const ContactUsSection = () => {
  return (
    <section className="mx-auto lg:px-20 md:px-10 px-5 lg:py-32 py-20">
      <main className="flex items-start lg:flex-nowrap flex-wrap gap-10 justify-between w-full">
        <div className="flex flex-col gap-10 lg:w-[45%] w-full">
          <BlurFade delay={0.25} inView className="order-1">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-heading relative inline-block"
            >
              Talk to Us
              <motion.span
                className="absolute bottom-[-10px] left-[40%] transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-lg"
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                viewport={{ once: true }}
              />
            </h2>
          </BlurFade>
          <div className="lg:order-2 order-3 lg:mt-0 mt-28">
            <h4 className="font-title">
              Your next adventure starts here let’s <br /> make it
              unforgettable!
            </h4>
          </div>
          <div className="pt-10 lg:order-3 order-2">
            <PatronInformation />
          </div>
        </div>
        <div className="lg:w-[55%] w-full">
          <ContactUsForm />
        </div>
      </main>
    </section>
  );
};

export default ContactUsSection;
