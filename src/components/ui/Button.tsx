import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-teal-500 text-ink-950 hover:bg-teal-400 focus-visible:outline-teal-500 shadow-card',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 focus-visible:outline-ink-900',
  ghost: 'bg-transparent text-ink-900 hover:bg-ink-50 focus-visible:outline-ink-900',
  'outline-light':
    'border border-white/40 text-white hover:bg-white hover:text-ink-950 focus-visible:outline-white',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'children'
  >;

type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  >;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', withArrow, className, children } = props;

  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97]',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v2, size: _s2, withArrow: _w2, className: _c2, children: _ch2, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
