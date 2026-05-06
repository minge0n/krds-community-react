"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface SnackbarProps extends ComponentPropsWithoutRef<"div"> {
  /** Snackbar message */
  message: string;
  /** Action button label */
  action?: string;
  /** Action button handler */
  onAction?: () => void;
  /** Close handler */
  onClose?: () => void;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ message, action, onAction, onClose, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`krds-snackbar ${className || ""}`}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        {...props}
      >
        <span className="krds-snackbar-message">{message}</span>
        <div className="krds-snackbar-actions">
          {action && onAction && (
            <button type="button" className="krds-snackbar-action" onClick={onAction}>
              {action}
            </button>
          )}
          {onClose && (
            <button
              type="button"
              className="krds-snackbar-close"
              onClick={onClose}
              aria-label="닫기"
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  },
);

Snackbar.displayName = "Snackbar";
