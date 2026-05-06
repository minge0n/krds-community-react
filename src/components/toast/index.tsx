"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useEffect } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
  /** Toast message */
  message: string;
  /** Auto-dismiss duration in ms */
  duration?: number;
  /** Visual variant */
  variant?: ToastVariant;
  /** Close handler */
  onClose?: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ message, duration = 3000, variant = "info", onClose, className, ...props }, ref) => {
    useEffect(() => {
      if (duration > 0 && onClose) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    return (
      <div
        ref={ref}
        className={`krds-toast ${variant} ${className || ""}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        {...props}
      >
        <span className="krds-toast-message">{message}</span>
        {onClose && (
          <button
            type="button"
            className="krds-toast-close"
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        )}
      </div>
    );
  },
);

Toast.displayName = "Toast";
