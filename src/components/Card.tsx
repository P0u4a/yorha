import { type ReactNode } from "react";
import { cn } from "./utils";

interface CardProps {
  title?: string;
  dark?: boolean;
  icon?: boolean;
  level?: string | number;
  fill?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Card({
  title,
  dark = false,
  icon = true,
  level,
  fill = false,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-surface",
        fill && "h-full",
        className,
      )}
    >
      {title && (
        <div
          className={cn(
            "flex items-center gap-2 py-1 px-3 font-medium text-sm tracking-[1px]",
            dark ? "bg-primary text-surface" : "bg-muted text-primary",
          )}
        >
          {icon && (
            <span
              className={cn(
                dark ? "yorha-header-icon-light" : "yorha-header-icon",
              )}
            />
          )}
          <span className="flex-1">{title}</span>
          {level && (
            <span className="text-xs opacity-70">{level}</span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full p-4 text-foreground",
          fill && "flex-1 overflow-auto",
        )}
      >
        {children}
      </div>
    </div>
  );
}
