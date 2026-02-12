import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { cn } from "./utils";

interface NumberFieldProps {
  value?: number | null;
  defaultValue?: number;
  onValueChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
}

export function NumberField({
  value,
  defaultValue,
  onValueChange,
  min,
  max,
  step = 1,
  disabled = false,
  placeholder,
  label,
}: NumberFieldProps) {
  return (
    <BaseNumberField.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={(val) => onValueChange?.(val)}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={cn("flex flex-col gap-1", disabled && "opacity-60")}
    >
      {label && (
        <label className="font-yorha text-xs text-primary tracking-[1px] uppercase">
          {label}
        </label>
      )}
      <BaseNumberField.Group className="yorha-hover-borders yorha-input-wrapper flex flex-row">
        <BaseNumberField.Decrement className="yorha-number-field-btn">
          -
        </BaseNumberField.Decrement>
        <BaseNumberField.Input
          placeholder={placeholder}
          className="yorha-input flex-1 w-full py-2 px-4 font-yorha font-medium text-sm tracking-[1px] text-primary text-center outline-none"
        />
        <BaseNumberField.Increment className="yorha-number-field-btn">
          +
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}
