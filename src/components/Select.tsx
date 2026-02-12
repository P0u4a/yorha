import { Select as BaseSelect } from "@base-ui/react/select";
import { IconSquare } from "./IconSquare";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
}

export function Select({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
}: SelectProps) {
  return (
    <BaseSelect.Root value={value} onValueChange={onValueChange}>
      <BaseSelect.Trigger className="yorha-gradient-slide flex items-center gap-2 w-full py-2 px-4 border-none rounded-none cursor-pointer font-yorha font-medium text-sm tracking-[1px]">
        <IconSquare />
        <BaseSelect.Value
          className="flex-1 text-left"
          placeholder={placeholder}
        />
        <BaseSelect.Icon className="text-[10px]">&#x25BC;</BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="z-[200]">
          <BaseSelect.Popup className="flex flex-col min-w-[160px] bg-surface border-2 border-muted py-1 outline-none">
            {options.map((opt) => (
              <BaseSelect.Item
                key={opt.value}
                value={opt.value}
                className="flex items-center gap-1 py-1 px-4 cursor-pointer font-yorha text-sm text-primary outline-none data-[highlighted]:bg-primary data-[highlighted]:text-surface"
              >
                <BaseSelect.ItemText>{opt.label}</BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
