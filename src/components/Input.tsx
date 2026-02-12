import { type InputHTMLAttributes } from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import { cn } from './utils';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onValueChange?: (value: string) => void;
}

export function Input({
  className,
  disabled,
  onValueChange,
  ...props
}: InputProps) {
  return (
    <div className={cn('yorha-hover-borders yorha-input-wrapper', disabled && 'disabled')}>
      <BaseInput
        disabled={disabled}
        onValueChange={onValueChange}
        className={cn(
          'yorha-input',
          'w-full py-2 px-4 font-yorha font-medium text-sm tracking-[1px] text-primary outline-none',
          disabled && 'opacity-60 pointer-events-none',
          className
        )}
        {...props}
      />
    </div>
  );
}
