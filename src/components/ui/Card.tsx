import { cn } from '../../utils/cn';
import type { PillarId } from '../../types';

interface CardProps {
  pillar?: PillarId;
  glass?: boolean;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: 'div' | 'article' | 'section';
}

const pillarBorderMap: Record<PillarId, string> = {
  education: 'border-t-blue-500',
  tourism: 'border-t-emerald-500',
  trade: 'border-t-violet-500',
};

export default function Card({ pillar, glass = false, hover = false, className, children, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700',
        glass && 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer',
        pillar && 'border-t-2',
        pillar && pillarBorderMap[pillar],
        !pillar && 'border-slate-200',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
