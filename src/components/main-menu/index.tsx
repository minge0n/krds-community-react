"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useState, useCallback } from "react";

export interface MainMenuItem {
  id: string;
  label: ReactNode;
  href?: string;
  children?: MainMenuItem[];
}

export interface MainMenuProps extends ComponentPropsWithoutRef<"nav"> {
  /** Menu items */
  items: MainMenuItem[];
  /** Active item ID */
  activeId?: string;
  /** Item click handler */
  onItemClick?: (id: string, href?: string) => void;
  /** Mobile open state */
  mobileOpen?: boolean;
  /** Mobile close handler */
  onMobileClose?: () => void;
}

export const MainMenu = forwardRef<HTMLElement, MainMenuProps>(
  (
    {
      items,
      activeId,
      onItemClick,
      mobileOpen = false,
      onMobileClose,
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-main-menu", mobileOpen && "is-mobile-open", className]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        {mobileOpen && (
          <div
            className="krds-main-menu-overlay"
            onClick={onMobileClose}
            aria-hidden="true"
          />
        )}
        <nav ref={ref} className={classNames} aria-label="메인 메뉴" {...props}>
          {mobileOpen && (
            <div className="krds-main-menu-mobile-header">
              <button
                type="button"
                className="krds-main-menu-close"
                onClick={onMobileClose}
                aria-label="메뉴 닫기"
              >
                ×
              </button>
            </div>
          )}
          <ul className="krds-main-menu-list">
            {items.map((item) => (
              <MainMenuItemComponent
                key={item.id}
                item={item}
                activeId={activeId}
                onItemClick={onItemClick}
              />
            ))}
          </ul>
        </nav>
      </>
    );
  },
);

MainMenu.displayName = "MainMenu";

interface MainMenuItemComponentProps {
  item: MainMenuItem;
  activeId?: string;
  onItemClick?: (id: string, href?: string) => void;
}

function MainMenuItemComponent({ item, activeId, onItemClick }: MainMenuItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = useCallback(() => {
    if (hasChildren) {
      setIsExpanded((prev) => !prev);
    }
    onItemClick?.(item.id, item.href);
  }, [hasChildren, item.id, item.href, onItemClick]);

  return (
    <li className={`krds-main-menu-item ${isActive ? "active" : ""}`}>
      <button
        type="button"
        className={`krds-main-menu-link ${isActive ? "active" : ""}`}
        onClick={handleClick}
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-current={isActive ? "page" : undefined}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <svg
            className={`krds-main-menu-chevron ${isExpanded ? "expanded" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 5.25L7 8.75l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {hasChildren && isExpanded && (
        <ul className="krds-main-menu-sublist">
          {item.children!.map((child) => (
            <li key={child.id} className={`krds-main-menu-subitem ${activeId === child.id ? "active" : ""}`}>
              <button
                type="button"
                className={`krds-main-menu-sublink ${activeId === child.id ? "active" : ""}`}
                onClick={() => onItemClick?.(child.id, child.href)}
                aria-current={activeId === child.id ? "page" : undefined}
              >
                {child.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
