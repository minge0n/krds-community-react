"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface HeaderProps extends Omit<ComponentPropsWithoutRef<"header">, "title"> {
  /** Logo element */
  logo?: ReactNode;
  /** Title */
  title?: ReactNode;
  /** Navigation area */
  nav?: ReactNode;
  /** Right-side actions (search, login, etc.) */
  actions?: ReactNode;
  /** Mobile menu toggle */
  menuToggle?: ReactNode;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ logo, title, nav, actions, menuToggle, className, children, ...props }, ref) => {
    const classNames = ["krds-header", className].filter(Boolean).join(" ");

    return (
      <header ref={ref} className={classNames} {...props}>
        <div className="krds-header-inner">
          <div className="krds-header-start">
            {menuToggle && <div className="krds-header-menu-toggle">{menuToggle}</div>}
            {logo && <div className="krds-header-logo">{logo}</div>}
            {title && <span className="krds-header-title">{title}</span>}
          </div>
          {nav && <div className="krds-header-nav">{nav}</div>}
          {actions && <div className="krds-header-actions">{actions}</div>}
          {children}
        </div>
      </header>
    );
  },
);

Header.displayName = "Header";
