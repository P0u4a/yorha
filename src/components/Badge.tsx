import { type ReactNode } from 'react';
import { cn } from './utils';

interface BadgeProps {
  children?: ReactNode;
  text?: string;
  variant?: 'default' | 'alert' | 'outline';
}

export function Badge({
  children,
  text,
  variant = 'default',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 font-yorha font-semibold text-xs tracking-[1px] uppercase leading-none',
        variant === 'default' &&
          'bg-primary text-surface',
        variant === 'alert' &&
          'bg-alert text-surface',
        variant === 'outline' &&
          'bg-transparent border-2 border-primary text-primary'
      )}
    >
      {children || text}
    </span>
  );
}
