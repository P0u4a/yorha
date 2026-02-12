import { cn } from './utils';

export function Bar({ dark = false }: { dark?: boolean }) {
  const color = dark ? 'bg-primary' : 'bg-muted';
  return (
    <div className="flex flex-row h-full mr-[5px] gap-[2px]">
      <div className={cn('w-[10px] h-full', color)} />
      <div className={cn('w-[4px] h-full', color)} />
    </div>
  );
}
