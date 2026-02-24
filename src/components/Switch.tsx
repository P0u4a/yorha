import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { cn } from './utils';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  label,
}: SwitchProps) {
  return (
    <label
      className={cn(
        'flex items-center gap-3 cursor-pointer font-yorha text-sm text-primary',
        disabled && 'opacity-60 pointer-events-none'
      )}
    >
      <BaseSwitch.Root
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="yorha-switch"
      >
        <BaseSwitch.Thumb className="yorha-switch-thumb" />
      </BaseSwitch.Root>
      {label && <span>{label}</span>}
    </label>
  );
}
