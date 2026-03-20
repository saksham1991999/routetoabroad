import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { PillarId } from '../../types';

export interface AccordionItem {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | number;
  allowMultiple?: boolean;
  pillar?: PillarId;
  className?: string;
}

const pillarBorderMap: Record<PillarId, string> = {
  education: 'border-l-blue-500',
  tourism: 'border-l-emerald-500',
  trade: 'border-l-violet-500',
};

const pillarTextMap: Record<PillarId, string> = {
  education: 'text-blue-600 dark:text-blue-400',
  tourism: 'text-emerald-600 dark:text-emerald-400',
  trade: 'text-violet-600 dark:text-violet-400',
};

export default function Accordion({ items, defaultOpenId, allowMultiple = false, pillar, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string | number>>(
    defaultOpenId !== undefined ? new Set([defaultOpenId]) : new Set()
  );

  const toggle = (id: string | number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('flex flex-col divide-y divide-slate-200 dark:divide-slate-700', className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              'border-l-2 transition-colors duration-200',
              isOpen && pillar ? pillarBorderMap[pillar] : 'border-l-transparent',
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-answer-${item.id}`}
              onClick={() => toggle(item.id)}
              className={cn(
                'w-full flex items-center justify-between gap-4 px-4 py-4 text-left',
                'text-slate-900 dark:text-white font-medium text-sm sm:text-base',
                'hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset',
                pillar ? pillarTextMap[pillar].replace('text-', 'focus-visible:ring-') : 'focus-visible:ring-blue-500',
              )}
            >
              <span className={cn(isOpen && pillar && pillarTextMap[pillar])}>
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300',
                  isOpen && 'rotate-180',
                  isOpen && pillar && pillarTextMap[pillar],
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-answer-${item.id}`}
              role="region"
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
