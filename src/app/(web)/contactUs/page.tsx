import { ContactUsSection } from '@/components/1-HomeComponents';
import { LandingSection } from '@/components/3-ContactUsComponents';

const page = () => {
  return (
    <>
      <LandingSection />
      <section className="bg-white rounded-3xl -mt-14 relative z-10">
        <ContactUsSection />
      </section>
    </>
  );
};

export default page;
