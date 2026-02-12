import { type ReactNode } from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';

interface ContextMenuItem {
  label: string;
  value: string;
}

interface ContextMenuProps {
  items?: ContextMenuItem[];
  onSelect?: (value: string) => void;
  children?: ReactNode;
}

export function ContextMenu({
  items = [],
  onSelect,
  children,
}: ContextMenuProps) {
  return (
    <BaseContextMenu.Root>
      <BaseContextMenu.Trigger className="contents">
        {children}
      </BaseContextMenu.Trigger>
      <BaseContextMenu.Portal>
        <BaseContextMenu.Positioner className="z-[200]">
          <BaseContextMenu.Popup className="flex flex-col min-w-[160px] bg-surface border-2 border-muted py-1 outline-none">
            {items.map((item) => (
              <BaseContextMenu.Item
                key={item.value}
                onClick={() => onSelect?.(item.value)}
                className="flex items-center gap-1 py-1 px-4 border-none bg-transparent cursor-pointer font-yorha font-normal text-sm tracking-[1px] text-primary text-left w-full transition-colors duration-100 outline-none data-[highlighted]:bg-primary data-[highlighted]:text-surface"
              >
                <span className="flex-1">{item.label}</span>
              </BaseContextMenu.Item>
            ))}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
}
