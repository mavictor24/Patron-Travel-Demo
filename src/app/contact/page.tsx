import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/data/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Patron Travel to start planning your trip to Egypt.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start planning"
        description="Share a few details about the trip you have in mind and our team will get back to you personally."
        image="/images/sharm-red-sea.jpg"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Suspense>
              <ContactForm />
            </Suspense>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <ContactCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactCard icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
              <ContactCard icon={MapPin} label="Based in" value="Egypt" />
            </div>

            <div className="mt-8 rounded-2xl bg-sand-50 p-6">
              <h3 className="font-display text-lg text-ink-950">Prefer to talk it through?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Call or message us directly — we typically reply within one
                business day with a first draft itinerary.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-ink-100 p-5 transition-colors hover:border-teal-300">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
        <p className="mt-0.5 font-medium text-ink-950">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
