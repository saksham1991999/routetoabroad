import { useId } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function Input({ label, error, hint, required, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={cn(
          'w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400',
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
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-slate-500 dark:text-slate-400">
          {hint}
        </p>
      )}
    </div>
  );
}
