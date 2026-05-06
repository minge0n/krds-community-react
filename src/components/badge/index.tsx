"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type BadgeVariant =
  | "outline-primary"
  | "outline-secondary"
  | "outline-gray"
  | "outline-point"
  | "outline-danger"
  | "outline-warning"
  | "outline-success"
  | "outline-information"
  | "outline-disabled"
  | "bg-primary"
  | "bg-secondary"
  | "bg-gray"
  | "bg-point"
  | "bg-danger"
  | "bg-warning"
  | "bg-success"
  | "bg-information"
  | "bg-disabled"
  | "bg-light-primary"
  | "bg-light-secondary"
  | "bg-light-gray"
  | "bg-light-point"
  | "bg-light-danger"
  | "bg-light-warning"
  | "bg-light-success"
  | "bg-light-information"
  | "bg-light-disabled";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: BadgeVariant;
  /** Number badge */
  number?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "bg-primary", number = false, className, children, ...props }, ref) => {
    const classNames = ["krds-badge", variant, number && "number", className]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={classNames} {...props}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
