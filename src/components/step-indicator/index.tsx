"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface StepIndicatorProps extends ComponentPropsWithoutRef<"ol"> {
  children: ReactNode;
}

export const StepIndicator = forwardRef<HTMLOListElement, StepIndicatorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ol ref={ref} className={`krds-step-wrap ${className || ""}`} {...props}>
        {children}
      </ol>
    );
  },
);

StepIndicator.displayName = "StepIndicator";

export interface StepItemProps extends ComponentPropsWithoutRef<"li"> {
  /** Step number label */
  step: string;
  /** Step title */
  title: string;
  /** Step state */
  status?: "done" | "active" | "pending";
}

export const StepItem = forwardRef<HTMLLIElement, StepItemProps>(
  ({ step, title, status = "pending", className, ...props }, ref) => {
    const classNames = [status === "done" && "done", status === "active" && "active", className]
      .filter(Boolean)
      .join(" ");

    return (
      <li ref={ref} className={classNames} {...props}>
        <span>
          {status === "active" && <em className="sr-only">현재단계</em>}
          <i className="step">{step}</i>
          <span className="step-tit">{title}</span>
        </span>
      </li>
    );
  },
);

StepItem.displayName = "StepItem";
