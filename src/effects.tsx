/**
 * Motion pieces adapted from the local magicui library
 * (library/magicui/apps/www/registry/magicui — MIT), rewritten against our own
 * CSS tokens instead of Tailwind, and toned down to the monochrome palette.
 */
import { motion, useInView, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/** Reveals children with a short blur-and-rise once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A card whose hairline border lights up around the cursor. */
export function SpotlightCard({
  children,
  className = '',
  size = 380,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  const x = useMotionValue(-size);
  const y = useMotionValue(-size);
  const glow = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, rgba(237,238,240,0.13), transparent 70%)`;
  const edge = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, rgba(237,238,240,0.55), transparent 65%)`;
  return (
    <div
      className={`card spotlight ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        x.set(-size);
        y.set(-size);
      }}
    >
      <motion.span aria-hidden className="spotlight-edge" style={{ background: edge }} />
      <motion.span aria-hidden className="spotlight-glow" style={{ background: glow }} />
      <div className="spotlight-content">{children}</div>
    </div>
  );
}

/** Counts up to `value` the first time it's seen. */
export function Ticker({ value, decimals = 0, suffix = '' }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 60, stiffness: 110 });
  const [shown, setShown] = useState('0');

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(
    () =>
      spring.on('change', (v) =>
        setShown(
          Number(v.toFixed(decimals)).toLocaleString('ar-EG', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }),
        ),
      ),
    [spring, decimals],
  );

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

/** Faint dot grid, faded out at the edges — the hero's backdrop. */
export function DotField() {
  return (
    <svg aria-hidden className="dots" width="100%" height="100%">
      <defs>
        <pattern id="dots" width={22} height={22} patternUnits="userSpaceOnUse">
          <circle cx={1} cy={1} r={1} fill="currentColor" />
        </pattern>
        <radialGradient id="fade">
          <stop offset="35%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dotmask">
          <rect width="100%" height="100%" fill="url(#fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dotmask)" />
    </svg>
  );
}

/** An endlessly sliding row; pauses on hover and for reduced-motion users. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-label={items.join(' · ')}>
      <div className="marquee-track">
        {row.map((text, i) => (
          <span className="marquee-item" key={`${text}-${i}`} aria-hidden={i >= items.length}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Phone-shaped frame; shows a labelled placeholder until a screenshot exists. */
export function PhoneFrame({ src, label, tilt = 0 }: { src: string; label: string; tilt?: number }) {
  return (
    <div className="phone" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="phone-notch" aria-hidden />
      {src ? (
        <img src={src} alt={label} loading="lazy" />
      ) : (
        <div className="phone-empty">
          <span className="phone-empty-badge">قريباً</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
