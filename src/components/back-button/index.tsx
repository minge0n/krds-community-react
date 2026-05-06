"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface BackButtonProps extends ComponentPropsWithoutRef<"button"> {
  /** Click handler */
  onClick?: () => void;
  /** Accessible label */
  label?: string;
}

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ onClick, label = "뒤로 가기", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`krds-back-button ${className || ""}`}
        onClick={onClick}
        aria-label={label}
        {...props}
      >
        <svg
          className="krds-back-button-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="krds-back-button-label">{label}</span>
      </button>
    );
  },
);

BackButton.displayName = "BackButton";
