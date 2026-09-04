import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import type { Tour } from '@/data/tours';
import { destinations } from '@/data/destinations';

export function TourCard({ tour, priority = false }: { tour: Tour; priority?: boolean }) {
  const places = tour.destinationSlugs
    .map((s) => destinations.find((d) => d.slug === s)?.name)
    .filter(Boolean)
    .join(' · ');

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-soft"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={tour.coverImage}
          alt={tour.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm">
          {tour.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wide text-ink-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {tour.durationDays} days
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {tour.destinationSlugs.length} {tour.destinationSlugs.length > 1 ? 'stops' : 'stop'}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl text-ink-950">{tour.title}</h3>
        <p className="mt-1 text-xs font-medium text-teal-700">{places}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{tour.summary}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950">
          View itinerary
          <ArrowUpRight className="size-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
