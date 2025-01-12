import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { testimonials } from '@/Data/Data';
import { BlurFade } from '../ui/blur-fade';

const OurTrips = () => {
  return (
    <section className="px-24 py-24">
      <div className="mx-auto text-left">
        <BlurFade delay={0.25} inView>
          <h2 className="font-heading dark:text-[whitesmoke]">Our Trips</h2>
        </BlurFade>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default OurTrips;
