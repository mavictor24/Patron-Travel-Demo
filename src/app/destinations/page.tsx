import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { DestinationsExplorer } from '@/components/destinations/DestinationsExplorer';

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Explore Egypt region by region — the Nile Valley, the Red Sea, Sinai, the Mediterranean coast, and the Western Desert.',
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Eleven regions, one unforgettable country"
        description="Every destination we feature is one our team has walked through ourselves — filter by region to start exploring."
        image="/images/aswan-philae-temple.jpg"
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <DestinationsExplorer />
        </Container>
      </section>
    </>
  );
}
