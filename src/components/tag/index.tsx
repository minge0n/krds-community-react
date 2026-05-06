"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type TagSize = "small" | "medium" | "large";

export interface TagProps extends ComponentPropsWithoutRef<"span"> {
  size?: TagSize;
  /** Show delete button */
  removable?: boolean;
  /** Delete handler */
  onRemove?: () => void;
  children: ReactNode;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ size = "medium", removable = false, onRemove, className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={`krds-btn-tag ${className || ""}`} {...props}>
        {children}
        {removable && (
          <button type="button" className="btn-delete" onClick={onRemove} aria-label="삭제">
            <span className="sr-only">삭제</span>
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = "Tag";

export interface TagGroupProps extends ComponentPropsWithoutRef<"div"> {
  size?: TagSize;
  children: ReactNode;
}

export const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  ({ size = "medium", className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`krds-tag-wrap ${size} ${className || ""}`} {...props}>
        {children}
      </div>
    );
  },
);

TagGroup.displayName = "TagGroup";
