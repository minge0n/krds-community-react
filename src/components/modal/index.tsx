"use client";

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface ModalProps {
  /** Open state */
  open?: boolean;
  /** Open change handler */
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Modal({ open, onOpenChange, children }: ModalProps) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </BaseDialog.Root>
  );
}

Modal.displayName = "Modal";

export const ModalTrigger = BaseDialog.Trigger;

export const ModalContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="krds-modal-backdrop" />
        <BaseDialog.Popup ref={ref} className={`krds-modal ${className || ""}`} {...props}>
          <div className="modal-dialog">
            <div className="modal-content">{children}</div>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    );
  },
);

ModalContent.displayName = "ModalContent";

export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`modal-header ${className || ""}`} {...props}>
        <BaseDialog.Title className="modal-title">{children}</BaseDialog.Title>
      </div>
    );
  },
);

ModalHeader.displayName = "ModalHeader";

export const ModalBody = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`modal-conts ${className || ""}`} {...props}>
        <BaseDialog.Description render={<div className="conts-area" />}>
          {children}
        </BaseDialog.Description>
      </div>
    );
  },
);

ModalBody.displayName = "ModalBody";

export const ModalFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`modal-btn btn-wrap ${className || ""}`} {...props}>
        {children}
      </div>
    );
  },
);

ModalFooter.displayName = "ModalFooter";

export function ModalClose(props: ComponentPropsWithoutRef<"button">) {
  return (
    <BaseDialog.Close
      className={`krds-btn medium icon btn-close ${props.className || ""}`}
      {...props}
    >
      <span className="sr-only">닫기</span>
    </BaseDialog.Close>
  );
}

ModalClose.displayName = "ModalClose";
