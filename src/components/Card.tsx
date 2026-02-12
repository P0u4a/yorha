import { type ReactNode } from "react";
import { cn } from "./utils";

type CardTone = "muted" | "primary";
type CardLayout = "auto" | "fill";

interface CardProps {
  title?: string;
  tone?: CardTone;
  headerIcon?: ReactNode | null;
  level?: string | number;
  layout?: CardLayout;
  children?: ReactNode;
  className?: string;
}

export function Card({
  title,
  tone = "muted",
  headerIcon,
  level,
  layout = "auto",
  children,
  className,
}: CardProps) {
  const resolvedHeaderIcon =
    headerIcon === undefined ? (
      <span
        className={cn(
          tone === "primary" ? "yorha-header-icon-light" : "yorha-header-icon",
        )}
      />
    ) : (
      headerIcon
    );
  const isFill = layout === "fill";

  return (
    <div
      className={cn(
        "flex flex-col bg-surface",
        isFill && "h-full",
        className,
      )}
    >
      {title && (
        <div
          className={cn(
            "flex items-center gap-2 py-1 px-3 font-medium text-sm tracking-[1px]",
            tone === "primary"
              ? "bg-primary text-surface"
              : "bg-muted text-primary",
          )}
        >
          {resolvedHeaderIcon}
          <span className="flex-1">{title}</span>
          {level && (
            <span className="text-xs opacity-70">{level}</span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full p-4 text-foreground",
          isFill && "flex-1 overflow-auto",
        )}
      >
        {children}
      </div>
    </div>
  );
}
