import { type TextareaHTMLAttributes } from 'react';
import { cn } from './utils';

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onValueChange?: (value: string) => void;
}

export function Textarea({
  className,
  disabled,
  onValueChange,
  ...props
}: TextareaProps) {
  return (
    <div
      className={cn(
        'yorha-hover-borders yorha-input-wrapper',
        disabled && 'disabled'
      )}
    >
      <textarea
        disabled={disabled}
        onChange={(e) => onValueChange?.(e.target.value)}
        className={cn(
          'yorha-input',
          'w-full py-2 px-4 font-yorha font-medium text-sm tracking-[1px] text-primary outline-none resize-y min-h-[80px]',
          disabled && 'opacity-60 pointer-events-none',
          className
        )}
        {...props}
      />
    </div>
  );
}
