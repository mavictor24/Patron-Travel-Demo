import {
  LandingSection,
  Destinations,
  OurPhilosophySection,
  OurTrips,
  WhoWeAre,
  FeaturedCities,
  WhyYouChooseUs,
  ContactUsSection,
} from '@/components/1-HomeComponents';
import { getFeaturedPrograms } from '@/libs/apis';

const Home = async () => {
  const featuredProgram = await getFeaturedPrograms();
  return (
    <>
      <LandingSection />
      <WhoWeAre />
      <Destinations featuredPrograms={featuredProgram} />
      <OurPhilosophySection />
      <OurTrips />
      <FeaturedCities />
      {/* <WhyYouChooseUs /> */}
      {/* <ContactUsSection /> */}
    </>
  );
};

export default Home;
