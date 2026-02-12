import { type ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "./utils";
import { IconSquare } from "./IconSquare";

const btnClass =
  "yorha-gradient-slide flex items-center gap-2 w-full py-2 px-4 border-none rounded-none cursor-pointer font-yorha font-medium text-sm tracking-[1px]";

export function Button({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseButton>) {
  return (
    <div className={cn("yorha-hover-borders", props.disabled && "disabled")}>
      <BaseButton {...props} className={cn(btnClass, className as string)}>
        <IconSquare />
        <span className="flex-1 text-left">{children}</span>
      </BaseButton>
    </div>
  );
}
