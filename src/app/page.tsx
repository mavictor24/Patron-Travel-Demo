import { Hero } from '@/components/home/Hero';
import { FeaturedDestinations } from '@/components/home/FeaturedDestinations';
import { Experiences } from '@/components/home/Experiences';
import { PopularTours } from '@/components/home/PopularTours';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Experiences />
      <PopularTours />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
