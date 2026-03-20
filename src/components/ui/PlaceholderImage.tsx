import { cn } from '../../utils/cn';
import type { PillarId } from '../../types';

type AspectRatio = '16/9' | '4/3' | '1/1' | '4/5' | '3/4';

interface PlaceholderImageProps {
  aspectRatio?: AspectRatio;
  label?: string;
  pillar?: PillarId;
  className?: string;
  alt?: string;
}

const pillarConfig: Record<PillarId, { bg: string; accent: string; text: string }> = {
  education: { bg: '#dbeafe', accent: '#93c5fd', text: '#1d4ed8' },
  tourism: { bg: '#d1fae5', accent: '#6ee7b7', text: '#065f46' },
  trade: { bg: '#ede9fe', accent: '#c4b5fd', text: '#5b21b6' },
};

const defaultConfig = { bg: '#f1f5f9', accent: '#cbd5e1', text: '#475569' };

const aspectRatioMap: Record<AspectRatio, { width: number; height: number }> = {
  '16/9': { width: 16, height: 9 },
  '4/3': { width: 4, height: 3 },
  '1/1': { width: 1, height: 1 },
  '4/5': { width: 4, height: 5 },
  '3/4': { width: 3, height: 4 },
};

export default function PlaceholderImage({ aspectRatio = '16/9', label, pillar, className, alt }: PlaceholderImageProps) {
  const { width, height } = aspectRatioMap[aspectRatio];
  const config = pillar ? pillarConfig[pillar] : defaultConfig;
  const viewBox = `0 0 ${width * 100} ${height * 100}`;
  const w = width * 100;
  const h = height * 100;

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt ?? label ?? 'Placeholder image'}
      className={cn('w-full h-auto', className)}
    >
      <rect width={w} height={h} fill={config.bg} />
      <rect x={w * 0.1} y={h * 0.1} width={w * 0.8} height={h * 0.8} rx="8" fill={config.accent} opacity="0.5" />
      {label && (
        <text
          x={w / 2}
          y={h / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={config.text}
          fontSize={Math.min(w, h) * 0.1}
          fontFamily="sans-serif"
          fontWeight="600"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
