"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface HelpPanelProps extends Omit<ComponentPropsWithoutRef<"aside">, "title"> {
  /** Panel title */
  title?: ReactNode;
  /** Whether the panel is open */
  open?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Panel content */
  children: ReactNode;
  /** Position */
  position?: "left" | "right";
}

export const HelpPanel = forwardRef<HTMLElement, HelpPanelProps>(
  (
    {
      title = "도움말",
      open = false,
      onClose,
      children,
      position = "right",
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = [
      "krds-help-panel",
      open && "is-open",
      `position-${position}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        {open && (
          <div
            className="krds-help-panel-overlay"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
        <aside
          ref={ref}
          className={classNames}
          role="complementary"
          aria-label={typeof title === "string" ? title : "도움말 패널"}
          aria-hidden={!open}
          {...props}
        >
          <div className="krds-help-panel-header">
            <h2 className="krds-help-panel-title">{title}</h2>
            <button
              type="button"
              className="krds-help-panel-close"
              onClick={onClose}
              aria-label="패널 닫기"
            >
              ×
            </button>
          </div>
          <div className="krds-help-panel-body">{children}</div>
        </aside>
      </>
    );
  },
);

HelpPanel.displayName = "HelpPanel";
