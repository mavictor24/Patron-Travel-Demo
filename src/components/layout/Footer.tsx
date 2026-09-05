import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { destinations } from '@/data/destinations';
import { Container } from '../ui/Container';

export function Footer() {
  const year = new Date().getFullYear();
  const featured = destinations.slice(0, 6);

  return (
    <footer className="bg-ink-950 text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="/brand/patron-travel-logo.svg"
              alt={site.name}
              width={375}
              height={140}
              className="h-11 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-teal-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Destinations
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {featured.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="transition-colors hover:text-teal-300"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-teal-300" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-teal-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-teal-300" />
              <a href={site.phoneHref} className="transition-colors hover:text-teal-300">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal-300" />
              <span>Egypt</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Patron Travel. All rights reserved.</p>
          <p>Crafted for travelers who love Egypt.</p>
        </Container>
      </div>
    </footer>
  );
}
