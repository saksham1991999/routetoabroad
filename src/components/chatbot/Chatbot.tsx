import { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../../types/chat';
import { streamChatResponse, isConfigured } from '../../services/anthropicApi';
import ChatPanel from './ChatPanel';
import { cn } from '../../utils/cn';

function generateId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function Chatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const hasInitialized = useRef(false);
  const configured = isConfigured();

  // Add welcome message on first open
  const open = useCallback(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      setMessages([
        {
          id: generateId(),
          role: 'assistant',
          content: t('chatbot.welcome'),
          timestamp: Date.now(),
        },
      ]);
    }
    setIsOpen(true);
  }, [t]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  const clearMessages = useCallback(() => {
    abortRef.current?.abort();
    setIsLoading(false);
    hasInitialized.current = false;
    setMessages([]);
    // Re-add welcome message
    hasInitialized.current = true;
    setMessages([
      {
        id: generateId(),
        role: 'assistant',
        content: t('chatbot.welcome'),
        timestamp: Date.now(),
      },
    ]);
  }, [t]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Cancel in-flight request on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: ChatMessageType = {
        id: generateId(),
        role: 'user',
        content,
        timestamp: Date.now(),
      };

      const assistantId = generateId();

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Abort any previous request
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      // Build messages for API (include full history)
      const apiMessages = [...messages, userMessage];

      // Create the assistant message shell
      let started = false;

      await streamChatResponse(
        apiMessages,
        (chunk) => {
          if (!started) {
            started = true;
            setMessages((prev) => [
              ...prev,
              { id: assistantId, role: 'assistant', content: chunk, timestamp: Date.now() },
            ]);
            setIsLoading(false);
          } else {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: m.content + chunk } : m,
              ),
            );
          }
        },
        () => {
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setMessages((prev) => [
            ...prev,
            {
              id: assistantId,
              role: 'assistant',
              content: `⚠️ ${error}`,
              timestamp: Date.now(),
            },
          ]);
        },
        controller.signal,
      );
    },
    [messages],
  );

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <ChatPanel
          messages={messages}
          isLoading={isLoading}
          isConfigured={configured}
          onSend={sendMessage}
          onClose={close}
          onClear={clearMessages}
        />
      )}

      {/* FAB */}
      <button
        onClick={toggle}
        aria-label={t('chatbot.toggle')}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
        className={cn(
          'fixed bottom-6 end-6 z-[9990] flex h-14 w-14 items-center justify-center',
          'rounded-full bg-secondary text-white shadow-lg',
          'transition-all duration-200 hover:scale-110 hover:shadow-xl',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2',
          // Hide FAB on mobile when panel is open
          isOpen && 'hidden md:flex',
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
