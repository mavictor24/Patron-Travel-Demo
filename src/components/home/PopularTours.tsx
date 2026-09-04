import { tours } from '@/data/tours';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { TourCard } from '../tours/TourCard';

const featured = ['best-of-egypt', 'nile-cruise-luxor-aswan', 'red-sea-diving-escape'];

export function PopularTours() {
  const items = featured
    .map((slug) => tours.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <section className="bg-sand-50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Signature journeys"
            title="Popular tours & packages"
            description="Handcrafted itineraries you can book as-is, or use as a starting point for something entirely your own."
          />
          <Reveal delay={0.1}>
            <Button href="/tours" variant="secondary" withArrow className="shrink-0">
              View all tours
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.1}>
              <TourCard tour={t} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
