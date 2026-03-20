import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [value, disabled, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <div className="flex items-end gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          adjustHeight();
        }}
        onKeyDown={handleKeyDown}
        placeholder={t('chatbot.inputPlaceholder')}
        disabled={disabled}
        rows={1}
        aria-label={t('chatbot.inputPlaceholder')}
        className={cn(
          'flex-1 resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm',
          'placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary',
          'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500',
          'disabled:opacity-50',
        )}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label={t('chatbot.send')}
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
          'bg-secondary text-white transition-colors',
          'hover:bg-secondary/90 disabled:opacity-40 disabled:cursor-not-allowed',
        )}
      >
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
}
