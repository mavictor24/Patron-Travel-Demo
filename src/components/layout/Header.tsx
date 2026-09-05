'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid ? 'bg-white/95 shadow-soft backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image
            src="/brand/patron-travel-logo.svg"
            alt={site.name}
            width={375}
            height={140}
            priority
            className={cn(
              'h-11 w-auto transition-all duration-300 sm:h-12',
              !solid && 'brightness-0 invert'
            )}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200',
                  solid ? 'text-ink-700 hover:text-ink-950' : 'text-white/90 hover:text-white',
                  active && (solid ? 'text-ink-950' : 'text-white')
                )}
              >
                {link.label}
                {active && (
                  <span
                    className={cn(
                      'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full',
                      solid ? 'bg-teal-500' : 'bg-white'
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md" withArrow>
            Plan Your Trip
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'relative z-10 -mr-2 flex size-11 items-center justify-center rounded-full transition-colors lg:hidden',
            solid ? 'text-ink-950' : 'text-white'
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink-100 bg-white px-5 pb-8 pt-4 shadow-soft lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-ink-100 py-4 text-lg font-medium text-ink-900 last:border-none"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/contact" className="mt-6 w-full" size="lg" withArrow>
              Plan Your Trip
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
