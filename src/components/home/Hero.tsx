'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { destinations } from '@/data/destinations';
import { tours } from '@/data/tours';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <Image
          src="/images/kom-ombo-columns.jpg"
          alt="Golden hour light through the columns of an ancient Egyptian temple"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/30" />
      </div>

      <Image
        src="/brand/patron-travel-mark.svg"
        alt=""
        aria-hidden
        width={205}
        height={374}
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[85vh] w-auto -translate-y-1/2 opacity-[0.07] brightness-0 invert lg:block"
      />

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300"
        >
          <span className="h-px w-8 bg-teal-300" />
          Egyptian-born, locally rooted
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-4xl italic leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Egypt, curated for those who travel to feel something.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          From the Pyramids of Giza to salt lakes in Siwa, we build handcrafted
          journeys through ancient wonders, sacred paths, and hidden gems —
          guided by the people who call Egypt home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="/tours" size="lg" withArrow>
            Explore Tours
          </Button>
          <Button href="/destinations" variant="outline-light" size="lg">
            Discover Destinations
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8"
        >
          <Stat value={`${destinations.length}+`} label="Destinations" />
          <Stat value={`${tours.length}+`} label="Curated Journeys" />
          <Stat value="100%" label="Egyptian-Led" />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</p>
    </div>
  );
}
