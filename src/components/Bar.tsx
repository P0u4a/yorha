import { cn } from './utils';

type BarTone = 'muted' | 'primary';

interface BarProps {
  tone?: BarTone;
}

export function Bar({ tone = 'muted' }: BarProps) {
  const color = tone === 'primary' ? 'bg-primary' : 'bg-muted';
  return (
    <div className="flex flex-row h-full mr-[5px] gap-[2px]">
      <div className={cn('w-[10px] h-full', color)} />
      <div className={cn('w-[4px] h-full', color)} />
    </div>
  );
}
