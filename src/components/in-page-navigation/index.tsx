"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";

export interface InPageNavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface InPageNavigationProps extends ComponentPropsWithoutRef<"nav"> {
  /** Navigation items */
  items: InPageNavigationItem[];
  /** Active item ID */
  activeId?: string;
  /** Title */
  title?: string;
  /** Sticky offset from top */
  stickyOffset?: string;
}

export const InPageNavigation = forwardRef<HTMLElement, InPageNavigationProps>(
  ({ items, activeId: controlledActiveId, title = "목차", stickyOffset = "0", className, ...props }, ref) => {
    const [activeId, setActiveId] = useState(controlledActiveId || items[0]?.id || "");

    useEffect(() => {
      if (controlledActiveId !== undefined) {
        setActiveId(controlledActiveId);
      }
    }, [controlledActiveId]);

    const handleClick = useCallback(
      (_e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (controlledActiveId === undefined) {
          setActiveId(id);
        }
      },
      [controlledActiveId],
    );

    const classNames = ["krds-in-page-navigation", className].filter(Boolean).join(" ");

    return (
      <nav
        ref={ref}
        className={classNames}
        aria-label={title}
        style={{ "--krds-inpage-nav-offset": stickyOffset } as React.CSSProperties}
        {...props}
      >
        <p className="krds-in-page-navigation-title">{title}</p>
        <ul className="krds-in-page-navigation-list">
          {items.map((item) => (
            <li key={item.id} className="krds-in-page-navigation-item">
              <a
                href={item.href}
                className={`krds-in-page-navigation-link ${activeId === item.id ? "active" : ""}`}
                aria-current={activeId === item.id ? "location" : undefined}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";
