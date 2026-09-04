import { destinations } from '@/data/destinations';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { DestinationCard } from '../destinations/DestinationCard';

const featured = ['cairo', 'luxor', 'aswan', 'sharm-el-sheikh', 'siwa', 'st-catherine'];

export function FeaturedDestinations() {
  const items = featured
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where to go"
            title="Popular destinations across Egypt"
            description="From Nile Valley temples to Red Sea reefs and desert oases — eleven regions, endlessly different from one another."
          />
          <Reveal delay={0.1}>
            <Button href="/destinations" variant="secondary" withArrow className="shrink-0">
              View all destinations
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.08}>
              <DestinationCard destination={d} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
