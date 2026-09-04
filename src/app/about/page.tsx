import type { Metadata } from 'next';
import Image from 'next/image';
import { whyChooseUs } from '@/data/site';
import { destinations } from '@/data/destinations';
import { tours } from '@/data/tours';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Patron Travel is an Egyptian travel agency crafting authentic, immersive journeys through Egypt.',
};

const galleryImages = [
  '/images/cairo-camel-pyramid.png',
  '/images/luxor-hatshepsut-temple.jpg',
  '/images/aswan-nile-feluccas.jpg',
  '/images/siwa-desert-safari.png',
  '/images/marsa-alam-diving.png',
  '/images/st-catherine-monastery.jpg',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Patron Travel"
        title="Travel as a bridge between hearts and history"
        description="We're an Egyptian travel agency passionate about connecting the world to the heart of Egypt."
        image="/images/luxor-karnak-columns.jpg"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/cairo-pyramids.jpg"
                alt="The Pyramids of Giza at sunset"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Specializing in authentic, immersive experiences"
              description="Whether exploring ancient wonders, following sacred paths, or discovering hidden gems, we craft journeys that leave lasting impressions — built by people who grew up with these places, not a call center reading from a script."
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600">
                At Patron Travel, we see travel as a bridge — connecting
                hearts, cultures, and centuries of history. Every journey we
                create is a tribute to Egypt's unmatched legacy, crafted for
                travelers who crave meaningful experiences over checklists.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              <Stat value={`${destinations.length}+`} label="Destinations" />
              <Stat value={`${tours.length}+`} label="Itineraries" />
              <Stat value="1:1" label="Trip Planning" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="What guides every itinerary we build"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-6 shadow-card">
                  <span className="font-display text-3xl text-teal-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-semibold text-ink-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A taste of Egypt"
            title="Moments from the road"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.05}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink-950 sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-ink-500">{label}</p>
    </div>
  );
}
