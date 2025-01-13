import {
  LandingSection,
  Destinations,
  ContactUsSection,
  OurPhilosophySection,
  OurTrips,
  WhoWeAre,
} from '@/components/1-HomeComponents';
import { getFeaturedPrograms } from '@/libs/apis';

const Home = async () => {
  const featuredProgram = await getFeaturedPrograms();
  return (
    <>
      <LandingSection />
      <Destinations featuredPrograms={featuredProgram} />
      <WhoWeAre />
      <OurPhilosophySection />
      <OurTrips />
      <ContactUsSection />
    </>
  );
};

export default Home;
