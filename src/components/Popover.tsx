import { type ReactNode } from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { Cursor } from "./Cursor";

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
}

export function Popover({ trigger, children, title }: PopoverProps) {
  return (
    <BasePopover.Root>
      <BasePopover.Trigger render={<span className="inline-flex" />}>
        {trigger}
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={20} className="z-[300]">
          <BasePopover.Popup className="bg-surface border-2 border-muted text-primary font-yorha text-xs tracking-[1px] transition-opacity data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
            {title && (
              <div className="px-4 py-2 bg-muted">
                <BasePopover.Title className="text-[10px] font-medium tracking-[2px] uppercase">
                  {title}
                </BasePopover.Title>
              </div>
            )}
            <div className="px-4 py-3">{children}</div>
            <BasePopover.Arrow className="group flex data-[side=top]:bottom-[-12px] data-[side=bottom]:top-[-12px] data-[side=left]:right-[-28px] data-[side=right]:left-[-28px]">
              <Cursor className="group-data-[side=top]:rotate-90 group-data-[side=bottom]:-rotate-90 group-data-[side=right]:rotate-180" />
            </BasePopover.Arrow>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
