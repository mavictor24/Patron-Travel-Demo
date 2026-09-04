import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Destination } from '@/data/destinations';

export function DestinationCard({
  destination,
  priority = false,
}: {
  destination: Destination;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-ink-900"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300">
          {destination.region}
        </span>
        <h3 className="mt-1.5 flex items-center justify-between font-display text-2xl text-white">
          {destination.name}
          <ArrowUpRight className="size-5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 ease-smooth group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </h3>
        <p className="mt-1 text-sm text-white/70">{destination.tagline}</p>
      </div>
    </Link>
  );
}
