'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BlurFade } from '../ui/blur-fade';
import { motion } from 'framer-motion';

const WhyYouChooseUs = () => {
  return (
    <section className="px-32 py-40">
      <div className="text-center pb-10">
        <BlurFade delay={0.25} inView>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-heading dark:text-[whitesmoke] relative inline-block"
          >
            Why You Choose Us
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
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
export default WhyYouChooseUs;
