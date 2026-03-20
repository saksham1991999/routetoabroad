import { useId } from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function Textarea({ label, error, hint, required, rows = 4, className, id, ...props }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={textareaId} className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
        className={cn(
          'w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 resize-vertical',
          'bg-white dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-red-500'
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} role="alert" className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${textareaId}-hint`} className="text-xs text-slate-500 dark:text-slate-400">
          {hint}
        </p>
      )}
    </div>
  );
}
