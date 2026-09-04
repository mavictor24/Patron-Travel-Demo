'use client';

import { useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { site } from '@/data/site';
import { Button } from '../ui/Button';

export function ContactForm() {
  const searchParams = useSearchParams();
  const tour = searchParams.get('tour');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    tour ? `Hi Patron Travel, I'd like more details about the "${tour}" itinerary.` : ''
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = tour ? `Trip inquiry: ${tour}` : 'Trip inquiry from patron-travel.com';
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Traveler"
            className={inputClasses}
          />
        </Field>
        <Field label="Phone (optional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 000 0000"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Email address" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </Field>

      <Field label="Tell us about your trip" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Dates, group size, the kind of experiences you're after..."
          className={inputClasses}
        />
      </Field>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
        <Send className="size-4" aria-hidden />
      </Button>
      <p className="text-xs text-ink-500">
        This opens your email app with your message ready to send to {site.email}.
      </p>
    </form>
  );
}

const inputClasses =
  'block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-950 placeholder:text-ink-400 transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink-800">
        {label}
      </label>
      {children}
    </div>
  );
}
