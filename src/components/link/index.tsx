"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type LinkVariant = "default" | "pure" | "basic";
export type LinkSize = "small" | "medium" | "large";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: LinkVariant;
  size?: LinkSize;
  /** External link (opens new tab) */
  external?: boolean;
  /** Show underline */
  underline?: boolean;
  children: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = "default",
      size = "medium",
      external = false,
      underline = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-btn", size, "link", variant !== "default" && variant, className]
      .filter(Boolean)
      .join(" ");

    return (
      <a
        ref={ref}
        className={classNames}
        {...(external ? { target: "_blank", rel: "noopener noreferrer", title: "새 창 열림" } : {})}
        {...props}
      >
        <span className={underline ? "underline" : ""}>{children}</span>
        {external && <i className="svg-icon ico-go" aria-hidden="true" />}
      </a>
    );
  },
);

Link.displayName = "Link";
