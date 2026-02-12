import { type ReactNode, type MouseEvent } from 'react';
import { cn } from './utils';
import { IconSquare } from './IconSquare';

interface NavLinkProps {
  href?: string;
  text?: string;
  active?: boolean;
  disabled?: boolean;
  variant?: 'button' | 'nav' | 'transparent' | 'neutral';
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;
}

const variantClass: Record<string, string> = {
  button: 'yorha-gradient-slide',
  nav: 'yorha-gradient-slide',
  transparent: 'yorha-gradient-slide-transparent',
  neutral: 'yorha-gradient-slide-neutral',
};

export function NavLink({
  href = '#',
  text,
  active = false,
  disabled = false,
  variant = 'button',
  onClick,
  children,
}: NavLinkProps) {
  const gradient = variantClass[variant] ?? 'yorha-gradient-slide';
  const isNav = variant === 'nav';

  return (
    <div
      className={cn('yorha-hover-borders', disabled && 'disabled')}
      data-active={active || undefined}
    >
      <a
        href={href}
        onClick={disabled ? undefined : onClick}
        data-active={active || undefined}
        className={cn(
          gradient,
          'flex items-center gap-2 w-full border-none rounded-none cursor-pointer font-yorha no-underline',
          isNav
            ? 'py-1 px-4 text-xs uppercase tracking-[2px] font-medium'
            : 'py-2 px-4 text-sm tracking-[1px] font-medium',
          disabled && 'opacity-60 pointer-events-none'
        )}
      >
        <IconSquare />
        <span className="flex-1 text-left">{children || text}</span>
      </a>
    </div>
  );
}
