import { cn } from '../../utils/cn';

interface DecorativeBlobProps {
  color: 'red' | 'blue' | 'emerald' | 'violet';
  size?: 'sm' | 'md' | 'lg';
  position: string;
  animation?: 'float' | 'float-slow' | 'float-delayed' | 'pulse-glow' | 'none';
  className?: string;
}

const colorMap: Record<string, string> = {
  red: 'bg-gradient-to-br from-red-400 to-red-600',
  blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
  emerald: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
  violet: 'bg-gradient-to-br from-violet-400 to-violet-600',
};

const sizeMap: Record<string, string> = {
  sm: 'w-24 h-24 blur-[60px]',
  md: 'w-48 h-48 blur-[80px]',
  lg: 'w-96 h-96 blur-[120px]',
};

const animationMap: Record<string, string> = {
  float: 'animate-float',
  'float-slow': 'animate-float-slow',
  'float-delayed': 'animate-float-delayed',
  'pulse-glow': 'animate-pulse-glow',
  none: '',
};

export default function DecorativeBlob({
  color,
  size = 'md',
  position,
  animation = 'none',
  className,
}: DecorativeBlobProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full opacity-20 dark:opacity-15 pointer-events-none',
        colorMap[color],
        sizeMap[size],
        animationMap[animation],
        position,
        className,
      )}
      aria-hidden="true"
    />
  );
}
