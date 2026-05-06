"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type ResizeLevel = "small" | "medium" | "large";

export interface ResizeProps extends ComponentPropsWithoutRef<"div"> {
  /** Resize handler */
  onResize: (size: ResizeLevel) => void;
  /** Current size */
  currentSize?: ResizeLevel;
}

const LABELS: Record<ResizeLevel, string> = {
  small: "작게",
  medium: "보통",
  large: "크게",
};

export const Resize = forwardRef<HTMLDivElement, ResizeProps>(
  ({ onResize, currentSize = "medium", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`krds-resize ${className || ""}`}
        role="group"
        aria-label="글자 크기 조절"
        {...props}
      >
        {(["small", "medium", "large"] as ResizeLevel[]).map((size) => (
          <button
            key={size}
            type="button"
            className={`krds-resize-btn ${size} ${currentSize === size ? "active" : ""}`}
            onClick={() => onResize(size)}
            aria-pressed={currentSize === size}
            aria-label={`글자 크기 ${LABELS[size]}`}
          >
            {LABELS[size]}
          </button>
        ))}
      </div>
    );
  },
);

Resize.displayName = "Resize";
