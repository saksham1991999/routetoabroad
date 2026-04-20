import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import i18n from '../../i18n/i18n';

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  fallback?: React.ReactNode;
  aspectRatio?: string;
}

export default function LazyImage({
  src,
  alt,
  className,
  fallback,
  aspectRatio,
  style,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!src) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className={cn('bg-slate-200 dark:bg-slate-800 flex items-center justify-center', className)}>
        <span className="text-slate-400 text-sm">{i18n.t('common.no_image')}</span>
      </div>
    );
  }

  const aspectRatioStyle = aspectRatio ? { aspectRatio } : undefined;

  return (
    <div className={cn('relative overflow-hidden', className)} style={aspectRatioStyle}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        style={style}
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
          <span className="text-slate-400 text-sm">{i18n.t('common.image_load_failed')}</span>
        </div>
      )}
    </div>
  );
}

export function LazyBackgroundImage({
  src,
  className,
  children,
  ...props
}: {
  src: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'>) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn('relative bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${src})` }}
      onLoad={() => setIsLoaded(true)}
      {...props}
    >
      {!isLoaded && <div className="absolute inset-0 bg-slate-300 dark:bg-slate-800 animate-pulse" />}
      <div className={cn('relative z-10', isLoaded ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-300')}>
        {children}
      </div>
    </div>
  );
}
