import { useId } from 'react';
import { cn } from '../../utils/cn';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

export default function Select({ label, options, error, placeholder, required, className, id, ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : undefined}
        className={cn(
          'w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900',
          'bg-white dark:bg-slate-800 dark:text-white',
          'transition-colors duration-150 cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-red-500'
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500',
          className,
        )}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} role="alert" className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
