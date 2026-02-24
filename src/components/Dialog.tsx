import { type ReactNode } from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Button } from './Button';

interface DialogProps {
  title?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
  trigger?: ReactNode;
}

export function Dialog({
  title = '',
  open,
  onOpenChange,
  children,
  trigger,
}: DialogProps) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <BaseDialog.Trigger render={<span className="inline-flex" />}>
          {trigger}
        </BaseDialog.Trigger>
      )}
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 bg-black/30 z-[100]" />
        <BaseDialog.Popup className="fixed inset-0 z-[101] flex items-center justify-center">
          <div className="flex flex-col min-w-[320px] max-w-[480px] bg-surface">
            {/* Header */}
            <div className="flex items-center gap-2 py-1 px-2 bg-muted text-primary font-medium text-sm tracking-[1px]">
              <span className="yorha-header-icon" />
              <BaseDialog.Title className="uppercase tracking-[2px] text-sm font-medium">
                {title}
              </BaseDialog.Title>
            </div>
            {/* Body */}
            <div className="py-6 px-4 text-foreground text-sm text-center">
              {children}
            </div>
            {/* Actions */}
            <div className="flex justify-center py-2 px-4 pb-4">
              <BaseDialog.Close
                render={
                  <Button>
                    <span>OK</span>
                  </Button>
                }
              />
            </div>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
