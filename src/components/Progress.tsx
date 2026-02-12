import { Progress as BaseProgress } from "@base-ui/react/progress";

interface ProgressProps {
  value: number | null;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export function Progress({
  value,
  min = 0,
  max = 100,
  label,
  showValue = true,
}: ProgressProps) {
  const pct = value === null ? undefined : ((value - min) / (max - min)) * 100;

  return (
    <BaseProgress.Root
      value={value}
      min={min}
      max={max}
      className="flex flex-col gap-1 w-full"
    >
      {(label || showValue) && (
        <div className="flex justify-between font-yorha text-xs text-primary tracking-[1px]">
          {label && (
            <BaseProgress.Label className="uppercase">
              {label}
            </BaseProgress.Label>
          )}
          {showValue && (
            <BaseProgress.Value>
              {(formattedValue) => (
                <span>{value === null ? "..." : formattedValue}</span>
              )}
            </BaseProgress.Value>
          )}
        </div>
      )}
      <BaseProgress.Track className="yorha-progress-track">
        <BaseProgress.Indicator
          className="yorha-progress-indicator"
          style={pct === undefined ? undefined : { width: `${pct}%` }}
        />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
