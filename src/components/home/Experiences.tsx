'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { experiences } from '@/data/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Experiences() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-ink-950 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Travel experiences"
            title="Egypt, one signature experience at a time"
            description="Every itinerary draws from a small set of experiences we know inside out — mix and match them into your own trip."
            light
          />
          <Reveal delay={0.1} className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-ink-950"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-ink-950"
            >
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>
      </Container>

      <div
        ref={trackRef}
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {experiences.map((exp, i) => (
          <Reveal
            key={exp.slug}
            delay={i * 0.06}
            className="relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[340px]"
          >
            <Image
              src={exp.image}
              alt={exp.name}
              fill
              sizes="(min-width: 640px) 340px, 78vw"
              className="object-cover transition-transform duration-700 ease-smooth hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-display text-lg leading-snug text-white">{exp.name}</span>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{exp.description}</p>
            </div>
          </Reveal>
        ))}
        <div className="w-1 shrink-0 sm:w-4" aria-hidden />
      </div>
    </section>
  );
}
