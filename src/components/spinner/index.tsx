"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface SpinnerProps extends ComponentPropsWithoutRef<"div"> {
  /** Accessible label */
  label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ label = "로딩 중", className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`krds-spinner ${className || ""}`} role="status" {...props}>
        <span className="sr-only">{label}</span>
        {children}
      </div>
    );
  },
);

Spinner.displayName = "Spinner";
