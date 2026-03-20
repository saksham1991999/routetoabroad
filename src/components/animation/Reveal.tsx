import { useRef, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

type RevealVariant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const variantInitial: Record<RevealVariant, React.CSSProperties> = {
  'fade': { opacity: 0 },
  'slide-up': { opacity: 0, transform: 'translateY(24px)' },
  'slide-left': { opacity: 0, transform: 'translateX(-24px)' },
  'slide-right': { opacity: 0, transform: 'translateX(24px)' },
};

const variantVisible: React.CSSProperties = { opacity: 1, transform: 'none' };

// Read prefers-reduced-motion outside React state to avoid setState-in-effect
const getPrefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Reveal({ children, variant = 'fade', delay = 0, duration = 600, threshold = 0.1, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = getPrefersReduced();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const initialStyle = prefersReduced ? { opacity: 0 } : variantInitial[variant];
  const currentStyle = isVisible ? variantVisible : initialStyle;

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...currentStyle,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
