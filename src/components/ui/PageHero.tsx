import Image from 'next/image';
import { Container } from './Container';

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink-950 pt-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/25" />

      <Container className="relative z-10 pb-16 pt-24">
        <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
          <span className="h-px w-8 bg-teal-300" />
          {eyebrow}
        </span>
        <h1 className="max-w-2xl font-display text-4xl italic text-white sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
