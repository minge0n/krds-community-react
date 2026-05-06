"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type CriticalAlertVariant = "danger" | "warning" | "info";

export interface CriticalAlertProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Alert variant */
  variant?: CriticalAlertVariant;
  /** Title */
  title?: ReactNode;
  /** Description */
  children: ReactNode;
  /** Closable */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Action element */
  action?: ReactNode;
}

export const CriticalAlert = forwardRef<HTMLDivElement, CriticalAlertProps>(
  (
    {
      variant = "danger",
      title,
      children,
      closable = false,
      onClose,
      action,
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-critical-alert", variant, className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} role="alert" aria-live="assertive" {...props}>
        <div className="krds-critical-alert-icon" aria-hidden="true">
          {variant === "danger" && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 6v4m0 4h.01M10 18a8 8 0 100-16 8 8 0 000 16z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {variant === "warning" && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 7v3m0 3h.01M3.5 17h13L10 3 3.5 17z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {variant === "info" && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 9v4m0-7h.01M10 18a8 8 0 100-16 8 8 0 000 16z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="krds-critical-alert-body">
          {title && <p className="krds-critical-alert-title">{title}</p>}
          <div className="krds-critical-alert-desc">{children}</div>
          {action && <div className="krds-critical-alert-action">{action}</div>}
        </div>
        {closable && (
          <button
            type="button"
            className="krds-critical-alert-close"
            onClick={onClose}
            aria-label="알림 닫기"
          >
            ×
          </button>
        )}
      </div>
    );
  },
);

CriticalAlert.displayName = "CriticalAlert";
