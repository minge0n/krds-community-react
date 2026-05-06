"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface BreadcrumbProps extends ComponentPropsWithoutRef<"nav"> {
  /** Accessible label */
  label?: string;
  children: ReactNode;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ label = "현재 경로", className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={`krds-breadcrumb-wrap ${className || ""}`}
        aria-label={label}
        {...props}
      >
        <ol className="breadcrumb">{children}</ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> {
  href?: string;
  /** Is home item */
  home?: boolean;
  /** Current page (no link) */
  current?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ href, home = false, current = false, className, children, ...props }, ref) => {
    const classNames = [home && "home", className].filter(Boolean).join(" ");

    return (
      <li ref={ref} className={classNames} {...props}>
        {current ? (
          <span className="txt" aria-current="page">
            {children}
          </span>
        ) : (
          <a href={href || "#"} className="txt">
            {children}
          </a>
        )}
      </li>
    );
  },
);

BreadcrumbItem.displayName = "BreadcrumbItem";
