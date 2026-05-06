"use client";

import { Popover as BasePopover } from "@base-ui-components/react/popover";
import type { ReactNode } from "react";

export interface ContextualHelpProps {
  /** Help content */
  content: ReactNode;
  /** Title */
  title?: ReactNode;
  /** Placement */
  side?: "top" | "bottom" | "left" | "right";
  /** Custom trigger label */
  label?: string;
  /** Additional class */
  className?: string;
}

export function ContextualHelp({
  content,
  title,
  side = "bottom",
  label = "도움말",
  className,
}: ContextualHelpProps) {
  return (
    <BasePopover.Root>
      <BasePopover.Trigger
        className={`krds-contextual-help-trigger ${className || ""}`}
        aria-label={label}
      >
        <svg
          className="krds-contextual-help-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 7a2 2 0 114 0c0 1-1.5 1.5-1.5 2.5M9.5 13h-.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner side={side} sideOffset={8}>
          <BasePopover.Popup className="krds-contextual-help-popup">
            <BasePopover.Arrow className="krds-contextual-help-arrow" />
            {title && <p className="krds-contextual-help-title">{title}</p>}
            <div className="krds-contextual-help-content">{content}</div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}

ContextualHelp.displayName = "ContextualHelp";
