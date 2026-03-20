import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { PillarId } from '../../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  pillar?: PillarId;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const pillarColors: Record<PillarId, string> = {
  education: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800',
  tourism: 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-800',
  trade: 'bg-violet-600 hover:bg-violet-700 text-white border-violet-600 dark:bg-violet-700 dark:hover:bg-violet-800',
};

const variantClasses: Record<string, string> = {
  primary: 'bg-red-600 hover:bg-red-700 text-white border-transparent dark:bg-red-700 dark:hover:bg-red-800',
  secondary: 'bg-transparent border-current text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800',
  ghost: 'bg-transparent border-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
  link: 'bg-transparent border-transparent text-red-600 hover:text-red-700 underline-offset-4 hover:underline dark:text-red-400 p-0 min-h-0',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm min-h-[36px]',
  md: 'px-5 py-2.5 text-sm min-h-[44px]',
  lg: 'px-7 py-3 text-base min-h-[52px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  pillar,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}, ref) => {
  const colorClass = pillar ? pillarColors[pillar] : variantClasses[variant];

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-200 cursor-pointer',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        colorClass,
        sizeClasses[size],
        fullWidth && 'w-full',
        variant !== 'link' && 'shadow-sm',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      ) : iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
