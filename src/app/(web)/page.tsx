import {
  LandingSection,
  Destinations,
  ContactUsSection,
  AboutUsSection,
  OurTrips,
} from '@/components/1-HomeComponents';
import { getFeaturedProgram } from '@/libs/apis';

const Home = async () => {
  const featuredProgram = await getFeaturedProgram();
  return (
    <>
      <LandingSection />
      <Destinations featuredProgram={featuredProgram} />
      <AboutUsSection />
      <OurTrips />
      <ContactUsSection />
    </>
  );
};

export default Home;
