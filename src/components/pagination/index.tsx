"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
  children: ReactNode;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={`krds-pagination ${className || ""}`}
        aria-label="페이지 탐색"
        {...props}
      >
        {children}
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";

export interface PaginationItemProps extends ComponentPropsWithoutRef<"a"> {
  /** Current active page */
  active?: boolean;
  /** Disabled */
  disabled?: boolean;
}

export const PaginationItem = forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ active = false, disabled = false, className, children, ...props }, ref) => {
    const classNames = ["page-link", active && "active", className].filter(Boolean).join(" ");

    if (disabled) {
      return (
        <span className={classNames}>
          {active && <span className="sr-only">현재페이지 </span>}
          {children}
        </span>
      );
    }

    return (
      <a ref={ref} className={classNames} aria-current={active ? "page" : undefined} {...props}>
        {active && <span className="sr-only">현재페이지 </span>}
        {children}
      </a>
    );
  },
);

PaginationItem.displayName = "PaginationItem";

export interface PaginationNavProps extends ComponentPropsWithoutRef<"a"> {
  direction: "prev" | "next";
  disabled?: boolean;
}

export const PaginationNav = forwardRef<HTMLAnchorElement, PaginationNavProps>(
  ({ direction, disabled = false, className, ...props }, ref) => {
    const label = direction === "prev" ? "이전" : "다음";
    const classNames = ["page-navi", direction, disabled && "disabled", className]
      .filter(Boolean)
      .join(" ");

    if (disabled) {
      return (
        <span className={classNames} aria-disabled="true">
          {label}
        </span>
      );
    }

    return (
      <a ref={ref} className={classNames} {...props}>
        {label}
      </a>
    );
  },
);

PaginationNav.displayName = "PaginationNav";
