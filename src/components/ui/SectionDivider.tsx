import { cn } from '../../utils/cn';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'slant';
  flip?: boolean;
  fillClass?: string;
  className?: string;
}

const paths: Record<string, string> = {
  wave: 'M0,32 C320,64 640,0 960,32 C1280,64 1600,0 1920,32 L1920,64 L0,64 Z',
  curve: 'M0,64 Q960,0 1920,64 L1920,64 L0,64 Z',
  slant: 'M0,64 L1920,0 L1920,64 L0,64 Z',
};

export default function SectionDivider({
  variant = 'wave',
  flip = false,
  fillClass = 'fill-white dark:fill-slate-950',
  className,
}: SectionDividerProps) {
  return (
    <div
      className={cn('relative -mb-px w-full overflow-hidden leading-[0]', className)}
      aria-hidden="true"
    >
      <svg
        className={cn(
          fillClass,
          variant === 'slant' && 'section-divider-slant',
          flip && 'rotate-180',
        )}
        viewBox="0 0 1920 64"
        preserveAspectRatio="none"
        width="100%"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
