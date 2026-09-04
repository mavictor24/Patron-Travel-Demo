import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { getTour, tours } from '@/data/tours';
import { destinations } from '@/data/destinations';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Itinerary } from '@/components/tours/Itinerary';
import { TourCard } from '@/components/tours/TourCard';

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tour = getTour(params.slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.summary,
  };
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = getTour(params.slug);
  if (!tour) notFound();

  const places = tour.destinationSlugs
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const otherTours = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={tour.category}
        title={tour.title}
        description={tour.summary}
        image={tour.coverImage}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
                Day by day
              </h2>
              <div className="mt-6">
                <Itinerary days={tour.itinerary} />
              </div>
            </Reveal>

            {tour.gallery.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">Gallery</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {tour.gallery.map((src) => (
                    <div
                      key={src}
                      className="group relative aspect-square overflow-hidden rounded-xl"
                    >
                      <Image
                        src={src}
                        alt={tour.title}
                        fill
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <div className="space-y-6">
            <Reveal className="rounded-2xl border border-ink-100 bg-sand-50 p-7">
              <div className="flex items-center gap-4 text-sm text-ink-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-teal-600" />
                  {tour.durationDays} days / {tour.durationNights} nights
                </span>
              </div>

              <div className="mt-4 flex items-start gap-1.5 text-sm text-ink-600">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-600" />
                <span>
                  {places.map((p, i) => (
                    <span key={p.slug}>
                      <Link href={`/destinations/${p.slug}`} className="font-medium text-ink-950 hover:text-teal-700">
                        {p.name}
                      </Link>
                      {i < places.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg text-ink-950">Highlights</h3>
              <ul className="mt-3 space-y-2.5">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                    {h}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 font-display text-lg text-ink-950">What's included</h3>
              <ul className="mt-3 space-y-2.5">
                {tour.included.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button
                href={`/contact?tour=${encodeURIComponent(tour.title)}`}
                className="mt-7 w-full"
                withArrow
              >
                Request a Quote
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 sm:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
              You might also like
            </h2>
            <Link href="/tours" className="text-sm font-semibold text-ink-950 hover:text-teal-700">
              View all
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherTours.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.08}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
