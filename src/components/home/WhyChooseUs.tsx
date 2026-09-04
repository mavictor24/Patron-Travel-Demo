import Image from 'next/image';
import { Compass, HeartHandshake, MapPinned, PhoneCall } from 'lucide-react';
import { whyChooseUs } from '@/data/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const icons = [Compass, MapPinned, HeartHandshake, PhoneCall];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <Image
              src="/images/gallery-camel-pyramid-portrait.png"
              alt="Traveler on a camel in front of the Pyramids of Giza"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-[15rem] rounded-2xl bg-white p-5 shadow-soft sm:-right-10">
            <p className="font-display text-lg italic leading-snug text-ink-950">
              “Every journey we create is a tribute to Egypt’s unmatched
              legacy.”
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Patron Travel"
            title="Travel like you actually live here"
            description="We see travel as a bridge — connecting hearts, cultures, and centuries of history. Here's what that looks like in practice."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink-950">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
