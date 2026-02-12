import { type ReactNode } from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { Cursor } from "./Cursor";

interface TooltipProps {
  label: ReactNode;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  delay?: number;
  closeDelay?: number;
}

export function Tooltip({
  label,
  children,
  side = "top",
  align = "center",
  sideOffset,
  delay = 300,
  closeDelay = 0,
}: TooltipProps) {
  const isHorizontal = side === "left" || side === "right";
  const arrowOffset = isHorizontal ? 28 : 12;
  const cursorDepth = isHorizontal ? 24 : 10;
  const triggerGap = isHorizontal ? 3 : 8;
  const computedSideOffset = sideOffset ?? arrowOffset + triggerGap;

  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger
          render={<span className="inline-flex" />}
          delay={delay}
          closeDelay={closeDelay}
        >
          {children}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner
            side={side}
            align={align}
            sideOffset={computedSideOffset}
            className="z-[300]"
          >
            <BaseTooltip.Popup className="bg-primary text-surface font-yorha text-xs tracking-[1px] px-4 py-3 border-2 border-primary-dark transition-opacity data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
              {label}
              <BaseTooltip.Arrow className="group flex data-[side=top]:bottom-[-12px] data-[side=bottom]:top-[-12px] data-[side=left]:right-[-28px] data-[side=right]:left-[-28px]">
                <Cursor className="group-data-[side=top]:rotate-90 group-data-[side=bottom]:-rotate-90 group-data-[side=right]:rotate-180" />
              </BaseTooltip.Arrow>
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}
