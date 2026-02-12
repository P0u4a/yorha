import { type ReactNode } from 'react';
import { Menu } from '@base-ui/react/menu';
import { IconSquare } from './IconSquare';

interface DropdownMenuItem {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownMenuProps {
  items?: DropdownMenuItem[];
  onSelect?: (value: string) => void;
  label?: string;
  children?: ReactNode;
}

export function DropdownMenu({
  items = [],
  onSelect,
  label,
  children,
}: DropdownMenuProps) {
  return (
    <Menu.Root>
      {children ? (
        <Menu.Trigger className="contents">{children}</Menu.Trigger>
      ) : (
        <Menu.Trigger className="yorha-gradient-slide flex items-center gap-2 w-full py-2 px-4 border-none rounded-none cursor-pointer font-yorha font-medium text-sm tracking-[1px]">
          <IconSquare />
          <span className="flex-1 text-left">{label}</span>
          <span className="text-[10px]">&#x25BC;</span>
        </Menu.Trigger>
      )}
      <Menu.Portal>
        <Menu.Positioner className="z-[200]" align="start" sideOffset={0}>
          <Menu.Popup className="flex flex-col bg-surface border-2 border-muted py-1 outline-none w-[var(--anchor-width)]">
            {items.map((item) => (
              <Menu.Item
                key={item.value}
                disabled={item.disabled}
                onClick={() => onSelect?.(item.value)}
                className="flex items-center gap-1 py-1 px-4 border-none bg-transparent cursor-pointer font-yorha font-normal text-sm tracking-[1px] text-primary text-left w-full transition-colors duration-100 outline-none data-[highlighted]:bg-primary data-[highlighted]:text-surface data-[disabled]:opacity-40 data-[disabled]:pointer-events-none"
              >
                <span className="flex-1">{item.label}</span>
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
