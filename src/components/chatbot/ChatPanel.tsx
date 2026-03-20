import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { X, RotateCcw } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../../types/chat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { cn } from '../../utils/cn';

interface ChatPanelProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  isConfigured: boolean;
  onSend: (message: string) => void;
  onClose: () => void;
  onClear: () => void;
}

export default function ChatPanel({
  messages,
  isLoading,
  isConfigured,
  onSend,
  onClose,
  onClear,
}: ChatPanelProps) {
  const { t } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus trap: focus the panel when it opens
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label={t('chatbot.title')}
      tabIndex={-1}
      className={cn(
        'fixed z-[9990] flex flex-col overflow-hidden',
        'rounded-2xl border border-slate-200 bg-white shadow-2xl',
        'dark:border-slate-700 dark:bg-slate-900',
        // Mobile: full screen
        'inset-0 m-0 rounded-none md:inset-auto',
        // Desktop: floating panel
        'md:bottom-20 md:end-6 md:m-0 md:h-[560px] md:w-[400px] md:rounded-2xl',
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-secondary px-4 py-3 text-white">
        <h2 className="text-sm font-semibold">{t('chatbot.title')}</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={onClear}
            aria-label={t('chatbot.newConversation')}
            className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            aria-label={t('chatbot.close')}
            className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        role="log"
        aria-live="polite"
        aria-label={t('chatbot.messageHistory')}
        className="flex-1 overflow-y-auto py-3"
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {isConfigured ? (
        <ChatInput onSend={onSend} disabled={isLoading} />
      ) : (
        <div className="border-t border-slate-200 px-4 py-3 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          {t('chatbot.errorConfig')}
        </div>
      )}
    </div>
  );
}
