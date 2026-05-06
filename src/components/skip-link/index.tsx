"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface SkipLinkProps extends ComponentPropsWithoutRef<"a"> {
  /** Target element ID */
  targetId?: string;
  /** Link text */
  label?: string;
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ targetId = "main-content", label = "본문 바로가기", className, ...props }, ref) => {
    return (
      <div id="krds-skip-link">
        <a ref={ref} href={`#${targetId}`} className={className} {...props}>
          {label}
        </a>
      </div>
    );
  },
);

SkipLink.displayName = "SkipLink";
