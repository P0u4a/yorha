import { type ReactNode } from "react";
import { cn } from "./utils";

interface ScrollAreaProps {
  children?: ReactNode;
}

export function ScrollArea({ children }: ScrollAreaProps) {
  return (
    <div className="w-full h-full overflow-y-auto px-4 bg-surface yorha-scrollbar">
      {children}
    </div>
  );
}
