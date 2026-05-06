"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useState, useCallback } from "react";

export interface SideNavigationItem {
  id: string;
  label: ReactNode;
  href?: string;
  children?: SideNavigationItem[];
  active?: boolean;
}

export interface SideNavigationProps extends Omit<ComponentPropsWithoutRef<"nav">, "title"> {
  /** Navigation items */
  items: SideNavigationItem[];
  /** Title */
  title?: ReactNode;
  /** Active item ID */
  activeId?: string;
  /** Item click handler */
  onItemClick?: (id: string, href?: string) => void;
}

export const SideNavigation = forwardRef<HTMLElement, SideNavigationProps>(
  ({ items, title, activeId, onItemClick, className, ...props }, ref) => {
    const classNames = ["krds-side-navigation", className].filter(Boolean).join(" ");

    return (
      <nav ref={ref} className={classNames} aria-label={typeof title === "string" ? title : "사이드 메뉴"} {...props}>
        {title && <h2 className="krds-side-navigation-title">{title}</h2>}
        <ul className="krds-side-navigation-list">
          {items.map((item) => (
            <SideNavigationItemComponent
              key={item.id}
              item={item}
              activeId={activeId}
              onItemClick={onItemClick}
              level={0}
            />
          ))}
        </ul>
      </nav>
    );
  },
);

SideNavigation.displayName = "SideNavigation";

interface SideNavigationItemComponentProps {
  item: SideNavigationItem;
  activeId?: string;
  onItemClick?: (id: string, href?: string) => void;
  level: number;
}

function SideNavigationItemComponent({
  item,
  activeId,
  onItemClick,
  level,
}: SideNavigationItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;
  const [isExpanded, setIsExpanded] = useState(
    hasChildren ? item.children!.some((child) => child.id === activeId) || isActive : false,
  );

  const handleClick = useCallback(() => {
    if (hasChildren) {
      setIsExpanded((prev) => !prev);
    }
    onItemClick?.(item.id, item.href);
  }, [hasChildren, item.id, item.href, onItemClick]);

  return (
    <li className={`krds-side-navigation-item ${isActive ? "active" : ""} level-${level}`}>
      <button
        type="button"
        className={`krds-side-navigation-link ${isActive ? "active" : ""}`}
        onClick={handleClick}
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="krds-side-navigation-link-text">{item.label}</span>
        {hasChildren && (
          <svg
            className={`krds-side-navigation-chevron ${isExpanded ? "expanded" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {hasChildren && isExpanded && (
        <ul className="krds-side-navigation-sublist">
          {item.children!.map((child) => (
            <SideNavigationItemComponent
              key={child.id}
              item={child}
              activeId={activeId}
              onItemClick={onItemClick}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
