'use client';

import { useMemo, useState } from 'react';
import { tourCategories, tours } from '@/data/tours';
import { Reveal } from '../ui/Reveal';
import { TourCard } from './TourCard';
import { cn } from '@/lib/utils';

export function ToursExplorer() {
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(
    () => (category === 'All' ? tours : tours.filter((t) => t.category === category)),
    [category]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter tours by category">
        {tourCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
              category === c
                ? 'border-ink-950 bg-ink-950 text-white'
                : 'border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink-950'
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 text-ink-500">No tours in this category yet — check back soon.</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 0.06}>
              <TourCard tour={t} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
