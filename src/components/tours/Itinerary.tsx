'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ItineraryDay } from '@/data/tours';
import { cn } from '@/lib/utils';

export function Itinerary({ days }: { days: ItineraryDay[] }) {
  const [openDay, setOpenDay] = useState<number | null>(days[0]?.day ?? null);

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {days.map((d) => {
        const open = openDay === d.day;
        return (
          <div key={d.day}>
            <button
              type="button"
              onClick={() => setOpenDay(open ? null : d.day)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-700">
                  {d.day}
                </span>
                <span className="font-medium text-ink-950">{d.title}</span>
              </span>
              <ChevronDown
                className={cn(
                  'size-4 shrink-0 text-ink-400 transition-transform duration-300',
                  open && 'rotate-180 text-teal-600'
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-ink-600">
                    {d.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
