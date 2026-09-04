import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
              light ? 'text-teal-300' : 'text-teal-600'
            )}
          >
            <span className="h-px w-6 bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'font-display text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
            light ? 'text-white' : 'text-ink-950'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-4 text-base leading-relaxed sm:text-lg',
              light ? 'text-white/70' : 'text-ink-600'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
