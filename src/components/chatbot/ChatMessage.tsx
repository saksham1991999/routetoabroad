import type { ChatMessage as ChatMessageType } from '../../types/chat';
import Markdown from 'react-markdown';
import { cn } from '../../utils/cn';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex px-4 py-1', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed break-words',
          isUser
            ? 'rounded-tr-sm bg-secondary text-white'
            : 'rounded-tl-sm bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100',
          !isUser && 'chat-markdown',
        )}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{message.content}</span>
        ) : (
          <Markdown>{message.content}</Markdown>
        )}
      </div>
    </div>
  );
}
