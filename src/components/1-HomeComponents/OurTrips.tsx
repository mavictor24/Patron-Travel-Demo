'use client';

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Trips } from '@/Data/Data';
import { BlurFade } from '../ui/blur-fade';
import { motion } from 'framer-motion';

const OurTrips = () => {
  return (
    <section className="lg:px-16 px-5 lg:py-32 py-40 pt-10">
      <div className="text-center pb-10">
        <BlurFade delay={0.25} inView>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-heading dark:text-[whitesmoke] relative inline-block"
          >
            Trips to Remember
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
      <AnimatedTestimonials testimonials={Trips} />
    </section>
  );
};

export default OurTrips;
