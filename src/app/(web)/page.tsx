import {
  LandingSection,
  Destinations,
  ContactUsSection,
} from '@/components/1-HomeComponents';
import { getFeaturedProgram } from '@/libs/apis';

const Home = async () => {
  const featuredProgram = await getFeaturedProgram();
  return (
    <>
      <LandingSection />
      <Destinations featuredProgram={featuredProgram} />
      <ContactUsSection />
    </>
  );
};

export default Home;
