import { cn } from '../../utils/cn';
import type { PillarId } from '../../types';

interface BadgeProps {
  variant?: PillarId | 'default' | 'success' | 'warning';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
  education: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  tourism: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  trade: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({ variant = 'default', size = 'sm', children, className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-full font-medium', variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </span>
  );
}
