import { Compass } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-white pt-20">
      <Container className="text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <Compass className="size-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl text-ink-950 sm:text-4xl">
          Looks like you've wandered off the map.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-600">
          The page you're looking for doesn't exist. Let's get you back to
          exploring Egypt.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" withArrow>
            Back to Home
          </Button>
          <Button href="/destinations" variant="secondary">
            Browse Destinations
          </Button>
        </div>
      </Container>
    </section>
  );
}
