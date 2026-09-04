import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { destinations, getDestination } from '@/data/destinations';
import { tours } from '@/data/tours';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { TourCard } from '@/components/tours/TourCard';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destination = getDestination(params.slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.description.slice(0, 155),
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) notFound();

  const relatedTours = tours.filter((t) => t.destinationSlugs.includes(destination.slug));
  const otherDestinations = destinations
    .filter((d) => d.slug !== destination.slug && d.region === destination.region)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={destination.name}
        description={destination.tagline}
        image={destination.heroImage}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
                About {destination.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
                {destination.description}
              </p>
            </Reveal>

            {destination.galleryImage && (
              <Reveal delay={0.1} className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={destination.galleryImage}
                  alt={`${destination.name} gallery`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink-100 bg-sand-50 p-7">
              <h3 className="font-display text-xl text-ink-950">Highlights</h3>
              <ul className="mt-5 space-y-3">
                {destination.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                    {h}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-7 w-full" withArrow>
                Plan a trip here
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {relatedTours.length > 0 && (
        <section className="bg-sand-50 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
              Tours that visit {destination.name}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.08}>
                  <TourCard tour={t} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {otherDestinations.length > 0 && (
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
                More in {destination.region}
              </h2>
              <Link href="/destinations" className="text-sm font-semibold text-ink-950 hover:text-teal-700">
                View all
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {otherDestinations.map((d, i) => (
                <Reveal key={d.slug} delay={i * 0.08}>
                  <DestinationCard destination={d} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
