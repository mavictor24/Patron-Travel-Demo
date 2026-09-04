import Image from 'next/image';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/luxor-karnak-columns.jpg"
        alt="Sunlight streaming through the columns of Karnak Temple"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/70" />

      <Container className="relative z-10 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
            Ready when you are
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl italic leading-tight text-white sm:text-5xl">
            Let’s design your Egypt, together.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Tell us how you like to travel and we’ll shape an itinerary
            around it — no templates, no pressure, just a real conversation.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" withArrow>
              Start Planning
            </Button>
            <Button href="/tours" variant="outline-light" size="lg">
              Browse Tours
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
