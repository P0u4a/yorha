import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export function Checkbox({
  checked,
  onCheckedChange,
  disabled = false,
  label,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer font-yorha text-sm text-primary">
      <BaseCheckbox.Root
        checked={checked}
        onCheckedChange={(val) => onCheckedChange?.(val)}
        disabled={disabled}
        className="inline-flex items-center justify-center w-[20px] h-[20px] border-2 border-primary bg-transparent transition-colors"
      >
        <BaseCheckbox.Indicator className="w-[10px] h-[10px] bg-primary-dark" />
      </BaseCheckbox.Root>
      {label && <span>{label}</span>}
    </label>
  );
}
