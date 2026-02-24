import { type CSSProperties } from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: number;
}

export function Avatar({ src, alt = "", fallback = "?", size = 48 }: AvatarProps) {
  return (
    <BaseAvatar.Root
      render={<div />}
      className="relative inline-flex border-2 border-primary overflow-hidden shrink-0 bg-surface/40 dark:bg-muted/40"
      style={{ width: size, height: size }}
    >
      {src && (
        <div
          className="glitch-img absolute inset-0 z-0"
          style={{ "--glitch-src": `url("${src}")` } as CSSProperties}
        >
          <BaseAvatar.Image
            src={src}
            alt={alt}
            className="block w-full h-full object-cover animate-[glitch_1.5s_infinite]"
          />
        </div>
      )}
      <BaseAvatar.Fallback
        delay={src ? 200 : 0}
        className="absolute inset-0 z-10 flex items-center justify-center font-yorha text-sm text-primary font-medium tracking-[2px] uppercase"
      >
        {fallback}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}
