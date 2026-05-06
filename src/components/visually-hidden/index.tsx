"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface VisuallyHiddenProps extends ComponentPropsWithoutRef<"span"> {
  children: ReactNode;
}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span ref={ref} className={`krds-visually-hidden ${className || ""}`} {...props}>
        {children}
      </span>
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";
