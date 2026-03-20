import { cn } from '../../utils/cn';

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-2 px-4 py-2">
      <div
        className={cn(
          'flex items-center gap-1 rounded-2xl rounded-tl-sm px-4 py-3',
          'bg-slate-100 dark:bg-slate-700',
        )}
      >
        <span className="typing-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-400" style={{ animationDelay: '0ms' }} />
        <span className="typing-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-400" style={{ animationDelay: '150ms' }} />
        <span className="typing-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-400" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
