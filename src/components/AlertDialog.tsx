import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type CSSProperties,
  useCallback,
  type ReactElement,
} from "react";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { Button } from "./Button";
import { IconSquare } from "./IconSquare";

const CloseCtx = createContext<(() => void) | null>(null);

interface ConfirmCloseProps {
  children: ReactNode;
  onClose: () => void;
}

function ConfirmClose({ children, onClose }: ConfirmCloseProps) {
  const [holding, setHolding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHold = () => {
    setHolding(true);
    timerRef.current = setTimeout(onClose, 2000);
  };

  const cancelHold = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHolding(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="yorha-hover-borders flex-1">
      <button
        type="button"
        className="yorha-confirm-slide flex items-center gap-2 w-full py-2 px-4 border-none rounded-none cursor-pointer font-yorha font-medium text-sm tracking-[1px]"
        data-holding={holding || undefined}
        style={
          {
            backgroundPosition: holding ? "-100%" : "0%",
            transition: `background-position ${holding ? "2s" : "0.2s"} linear, color ${holding ? "2s" : "0.2s"} linear`,
            color: holding ? "var(--bg-muted)" : "var(--primary)",
          } satisfies CSSProperties
        }
        onPointerDown={startHold}
        onPointerUp={cancelHold}
        onPointerLeave={cancelHold}
        onPointerCancel={cancelHold}
        onKeyDown={(e) => {
          if ((e.key === " " || e.key === "Enter") && !holding) {
            e.preventDefault();
            startHold();
          }
        }}
        onKeyUp={(e) => {
          if (e.key === " " || e.key === "Enter") cancelHold();
        }}
      >
        <IconSquare />
        <span className="flex-1 text-left">{children}</span>
      </button>
    </div>
  );
}

interface AlertDialogCloseProps {
  children: ReactNode;
  type?: "confirm";
}

function AlertDialogClose({ children, type }: AlertDialogCloseProps) {
  const close = useContext(CloseCtx);

  if (type === "confirm") {
    return (
      <ConfirmClose onClose={close ?? (() => {})}>{children}</ConfirmClose>
    );
  }

  return (
    <div className="flex-1">
      <BaseAlertDialog.Close render={<Button>{children}</Button>} />
    </div>
  );
}

interface AlertDialogProps {
  trigger: ReactElement<HTMLButtonElement>;
  title: string;
  description?: string;
  children: ReactNode;
}

function AlertDialogRoot({
  trigger,
  title,
  description,
  children,
}: AlertDialogProps) {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <CloseCtx.Provider value={handleClose}>
      <BaseAlertDialog.Root open={open} onOpenChange={setOpen}>
        <BaseAlertDialog.Trigger className="inline-flex" render={trigger} />
        <BaseAlertDialog.Portal>
          <BaseAlertDialog.Backdrop className="fixed inset-0 bg-black/30 z-[100]" />
          <BaseAlertDialog.Popup className="fixed inset-0 z-[101] flex items-center justify-center">
            <div className="flex flex-col min-w-[320px] max-w-[480px] bg-surface">
              <div className="flex items-center gap-2 py-1 px-2 bg-muted text-primary font-medium text-sm tracking-[1px]">
                <span className="yorha-header-icon" />
                <BaseAlertDialog.Title className="uppercase tracking-[2px] text-sm font-medium">
                  {title}
                </BaseAlertDialog.Title>
              </div>
              {description && (
                <div className="py-6 px-4 text-foreground text-sm text-center">
                  <BaseAlertDialog.Description>
                    {description}
                  </BaseAlertDialog.Description>
                </div>
              )}
              <div className="flex items-center gap-2 py-2 px-4 pb-4">
                {children}
              </div>
            </div>
          </BaseAlertDialog.Popup>
        </BaseAlertDialog.Portal>
      </BaseAlertDialog.Root>
    </CloseCtx.Provider>
  );
}

export { AlertDialogRoot as Root, AlertDialogClose as Close };
