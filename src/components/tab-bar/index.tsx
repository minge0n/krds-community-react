"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface TabBarItem {
  /** Icon element */
  icon: ReactNode;
  /** Tab label */
  label: string;
  /** Navigation href */
  href: string;
  /** Active state */
  active?: boolean;
}

export interface TabBarProps extends ComponentPropsWithoutRef<"nav"> {
  /** Tab items */
  items: TabBarItem[];
}

export const TabBar = forwardRef<HTMLElement, TabBarProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <nav ref={ref} className={`krds-tab-bar ${className || ""}`} aria-label="탭 내비게이션" {...props}>
        <ul className="krds-tab-bar-list" role="tablist">
          {items.map((item, i) => (
            <li key={i} className="krds-tab-bar-item" role="presentation">
              <a
                href={item.href}
                className={`krds-tab-bar-link ${item.active ? "active" : ""}`}
                role="tab"
                aria-selected={item.active || false}
                aria-current={item.active ? "page" : undefined}
              >
                <span className="krds-tab-bar-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="krds-tab-bar-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

TabBar.displayName = "TabBar";
