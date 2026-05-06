"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface StructuredListProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const StructuredList = forwardRef<HTMLDivElement, StructuredListProps>(
  ({ className, children, ...props }, ref) => {
    const classNames = ["krds-structured-list", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} role="list" {...props}>
        {children}
      </div>
    );
  },
);

StructuredList.displayName = "StructuredList";

export interface StructuredListItemProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Badge/category label */
  badge?: ReactNode;
  /** Title */
  title: ReactNode;
  /** Description */
  description?: ReactNode;
  /** Tags */
  tags?: ReactNode[];
  /** Action area (buttons, links) */
  actions?: ReactNode;
  /** Date or metadata */
  meta?: ReactNode;
}

export const StructuredListItem = forwardRef<HTMLDivElement, StructuredListItemProps>(
  ({ badge, title, description, tags, actions, meta, className, ...props }, ref) => {
    const classNames = ["krds-structured-list-item", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} role="listitem" {...props}>
        <div className="krds-structured-list-content">
          {badge && <span className="krds-structured-list-badge">{badge}</span>}
          <h3 className="krds-structured-list-title">{title}</h3>
          {description && <p className="krds-structured-list-desc">{description}</p>}
          {tags && tags.length > 0 && (
            <div className="krds-structured-list-tags">
              {tags.map((tag, i) => (
                <span key={i} className="krds-structured-list-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {meta && <span className="krds-structured-list-meta">{meta}</span>}
        </div>
        {actions && <div className="krds-structured-list-actions">{actions}</div>}
      </div>
    );
  },
);

StructuredListItem.displayName = "StructuredListItem";
