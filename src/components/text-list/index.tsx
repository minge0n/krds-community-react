"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type TextListType = "unordered" | "ordered";
export type TextListSize = "small" | "medium" | "large";

export interface TextListProps extends ComponentPropsWithoutRef<"ul"> {
  /** List type */
  type?: TextListType;
  /** Size */
  size?: TextListSize;
  /** Children (TextListItem) */
  children: ReactNode;
}

export const TextList = forwardRef<HTMLUListElement | HTMLOListElement, TextListProps>(
  ({ type = "unordered", size = "medium", className, children, ...props }, ref) => {
    const classNames = ["krds-text-list", `size-${size}`, `type-${type}`, className]
      .filter(Boolean)
      .join(" ");

    if (type === "ordered") {
      return (
        <ol ref={ref as React.Ref<HTMLOListElement>} className={classNames} {...(props as ComponentPropsWithoutRef<"ol">)}>
          {children}
        </ol>
      );
    }

    return (
      <ul ref={ref as React.Ref<HTMLUListElement>} className={classNames} {...props}>
        {children}
      </ul>
    );
  },
);

TextList.displayName = "TextList";

export interface TextListItemProps extends ComponentPropsWithoutRef<"li"> {
  children: ReactNode;
}

export const TextListItem = forwardRef<HTMLLIElement, TextListItemProps>(
  ({ className, children, ...props }, ref) => {
    const classNames = ["krds-text-list-item", className].filter(Boolean).join(" ");

    return (
      <li ref={ref} className={classNames} {...props}>
        {children}
      </li>
    );
  },
);

TextListItem.displayName = "TextListItem";
