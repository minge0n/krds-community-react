"use client";

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface BottomSheetProps {
  /** Open state */
  open?: boolean;
  /** Open change handler */
  onOpenChange?: (open: boolean) => void;
  /** Sheet title */
  title: string;
  /** Sheet content */
  children: ReactNode;
}

export function BottomSheet({ open, onOpenChange, title, children }: BottomSheetProps) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="krds-bottom-sheet-backdrop" />
        <BaseDialog.Popup className="krds-bottom-sheet">
          <div className="krds-bottom-sheet-handle" aria-hidden="true">
            <span className="krds-bottom-sheet-handle-bar" />
          </div>
          <BaseDialog.Title className="krds-bottom-sheet-title">{title}</BaseDialog.Title>
          <div className="krds-bottom-sheet-content">{children}</div>
          <BaseDialog.Close className="krds-bottom-sheet-close" aria-label="닫기">
            <span className="sr-only">닫기</span>
          </BaseDialog.Close>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

BottomSheet.displayName = "BottomSheet";

export interface BottomSheetTriggerProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export const BottomSheetTrigger = forwardRef<HTMLButtonElement, BottomSheetTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <BaseDialog.Trigger ref={ref} {...props}>
        {children}
      </BaseDialog.Trigger>
    );
  },
);

BottomSheetTrigger.displayName = "BottomSheetTrigger";
