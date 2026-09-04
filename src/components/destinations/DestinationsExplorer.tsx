'use client';

import { useMemo, useState } from 'react';
import { destinations } from '@/data/destinations';
import { Reveal } from '../ui/Reveal';
import { DestinationCard } from './DestinationCard';
import { cn } from '@/lib/utils';

const regions = ['All', ...Array.from(new Set(destinations.map((d) => d.region)))];

export function DestinationsExplorer() {
  const [region, setRegion] = useState<string>('All');

  const filtered = useMemo(
    () => (region === 'All' ? destinations : destinations.filter((d) => d.region === region)),
    [region]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter destinations by region">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            role="tab"
            aria-selected={region === r}
            onClick={() => setRegion(r)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
              region === r
                ? 'border-ink-950 bg-ink-950 text-white'
                : 'border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink-950'
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d, i) => (
          <Reveal key={d.slug} delay={(i % 3) * 0.06}>
            <DestinationCard destination={d} priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
