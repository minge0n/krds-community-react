"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type FABSize = "small" | "medium" | "large";

export interface FABProps extends ComponentPropsWithoutRef<"button"> {
  /** Icon element */
  icon: ReactNode;
  /** Accessible label (sr-only) */
  label: string;
  /** Button size */
  size?: FABSize;
}

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
  ({ icon, label, size = "medium", className, ...props }, ref) => {
    const classNames = ["krds-fab", size, className].filter(Boolean).join(" ");

    return (
      <button ref={ref} type="button" className={classNames} aria-label={label} {...props}>
        <span className="sr-only">{label}</span>
        <span className="krds-fab-icon" aria-hidden="true">
          {icon}
        </span>
      </button>
    );
  },
);

FAB.displayName = "FAB";
