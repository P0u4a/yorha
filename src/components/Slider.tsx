import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cn } from "./utils";

interface SliderProps {
  value?: number | null;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
}

export function Slider({
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
}: SliderProps) {
  return (
    <BaseSlider.Root
      value={value ?? undefined}
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
      <BaseSlider.Control className="flex touch-none items-center py-2">
        <BaseSlider.Track className="yorha-slider-track">
          <BaseSlider.Indicator className="yorha-slider-indicator" />
          <BaseSlider.Thumb className="yorha-slider-thumb" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
