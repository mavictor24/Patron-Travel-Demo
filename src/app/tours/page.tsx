import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { ToursExplorer } from '@/components/tours/ToursExplorer';

export const metadata: Metadata = {
  title: 'Tours & Packages',
  description:
    'Handcrafted Egypt tours and packages — from classic Nile Valley itineraries to Red Sea diving escapes and desert adventures.',
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours & Packages"
        title="Journeys built around how you like to travel"
        description="Every itinerary below can be booked as-is or reshaped around your dates, pace, and interests."
        image="/images/nile-cruise-ship.png"
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <ToursExplorer />
        </Container>
      </section>
    </>
  );
}
