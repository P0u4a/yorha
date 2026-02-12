import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { IconSquare } from "./IconSquare";

export interface ComboboxOption {
  label: string;
  value: string;
}

export interface ComboboxGroup {
  label: string;
  items: ComboboxOption[];
}

interface ComboboxBaseProps {
  placeholder?: string;
  label?: string;
}

type ComboboxDataProps =
  | { options: ComboboxOption[]; groups?: never }
  | { options?: never; groups: ComboboxGroup[] };

type ComboboxSingleProps = {
  multiple?: false;
  value?: ComboboxOption | null;
  onValueChange?: (value: ComboboxOption | null) => void;
};

type ComboboxMultipleProps = {
  multiple: true;
  value?: ComboboxOption[];
  onValueChange?: (value: ComboboxOption[]) => void;
};

type ComboboxProps = ComboboxBaseProps &
  ComboboxDataProps &
  (ComboboxSingleProps | ComboboxMultipleProps);

function renderItem(item: ComboboxOption) {
  return (
    <BaseCombobox.Item
      key={item.value}
      value={item}
      className="flex items-center gap-2 py-1 px-4 cursor-pointer font-yorha text-sm text-primary outline-none data-[highlighted]:bg-primary data-[highlighted]:text-surface"
    >
      <BaseCombobox.ItemIndicator
        keepMounted
        className="shrink-0 [&[hidden]]:!block"
      >
        <IconSquare />
      </BaseCombobox.ItemIndicator>
      <span className="flex-1">{item.label}</span>
    </BaseCombobox.Item>
  );
}

export function Combobox(props: ComboboxProps) {
  const { placeholder = "Search...", label, multiple } = props;
  const groups = "groups" in props ? props.groups : undefined;
  const options = "options" in props ? props.options : undefined;
  const items = groups ?? options ?? [];

  return (
    <BaseCombobox.Root
      items={items}
      value={props.value}
      onValueChange={props.onValueChange as never}
      multiple={multiple}
    >
      {label && (
        <label className="font-yorha text-xs text-primary tracking-[1px] uppercase mb-1 block">
          {label}
        </label>
      )}

      <div className="yorha-hover-borders yorha-input-wrapper relative flex">
        {multiple ? (
          <BaseCombobox.Chips className="yorha-input flex flex-wrap gap-1 items-center flex-1 py-1 px-2 pr-16 min-h-[36px]">
            <BaseCombobox.Value>
              {(value: ComboboxOption[]) => (
                <>
                  {value.map((item) => (
                    <BaseCombobox.Chip
                      key={item.value}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-surface font-yorha text-xs tracking-[1px]"
                    >
                      {item.label}
                      <BaseCombobox.ChipRemove className="cursor-pointer hover:opacity-70 text-[10px] leading-none">
                        &#x2715;
                      </BaseCombobox.ChipRemove>
                    </BaseCombobox.Chip>
                  ))}
                  <BaseCombobox.Input
                    placeholder={value.length === 0 ? placeholder : ""}
                    className="flex-1 min-w-[60px] py-1 bg-transparent font-yorha font-medium text-sm tracking-[1px] text-primary outline-none"
                  />
                </>
              )}
            </BaseCombobox.Value>
          </BaseCombobox.Chips>
        ) : (
          <BaseCombobox.Input
            placeholder={placeholder}
            className="yorha-input flex-1 w-full py-2 px-4 pr-16 font-yorha font-medium text-sm tracking-[1px] text-primary outline-none"
          />
        )}

        <div className="absolute right-0 top-0 flex h-full items-center">
          <BaseCombobox.Clear
            className="flex h-full w-8 items-center justify-center bg-transparent border-none cursor-pointer text-primary opacity-50 hover:opacity-100"
            aria-label="Clear selection"
          >
            &#x2715;
          </BaseCombobox.Clear>
          <BaseCombobox.Trigger
            className="yorha-number-field-btn h-full"
            aria-label="Open popup"
          >
            <span className="text-[10px]">&#x25BC;</span>
          </BaseCombobox.Trigger>
        </div>
      </div>

      <BaseCombobox.Portal>
        <BaseCombobox.Positioner className="z-[200] outline-none" sideOffset={4}>
          <BaseCombobox.Popup className="w-[var(--anchor-width)] bg-surface border-2 border-muted outline-none">
            <BaseCombobox.Empty className="py-2 px-4 font-yorha text-sm text-primary opacity-50 text-center">
              No results found
            </BaseCombobox.Empty>
            <BaseCombobox.List className="outline-0 overflow-y-auto py-1 max-h-[min(20rem,var(--available-height))] yorha-scrollbar">
              {groups
                ? (group: ComboboxGroup) => (
                    <BaseCombobox.Group key={group.label} items={group.items}>
                      <BaseCombobox.GroupLabel className="px-4 py-1 font-yorha text-xs text-primary tracking-[1px] uppercase opacity-60">
                        {group.label}
                      </BaseCombobox.GroupLabel>
                      <BaseCombobox.Collection>
                        {renderItem}
                      </BaseCombobox.Collection>
                    </BaseCombobox.Group>
                  )
                : renderItem}
            </BaseCombobox.List>
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}
