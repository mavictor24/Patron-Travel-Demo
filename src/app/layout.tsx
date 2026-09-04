import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://patron-travel-demo.vercel.app'),
  title: {
    default: 'Patron Travel — Egypt, Curated',
    template: '%s | Patron Travel',
  },
  description:
    'An Egyptian travel agency crafting authentic, immersive journeys through ancient wonders, sacred paths, and hidden gems across Egypt.',
  openGraph: {
    title: 'Patron Travel — Egypt, Curated',
    description:
      'An Egyptian travel agency crafting authentic, immersive journeys through ancient wonders, sacred paths, and hidden gems across Egypt.',
    siteName: 'Patron Travel',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
