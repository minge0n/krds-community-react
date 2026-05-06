"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface QuantityToggleProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Current value */
  value: number;
  /** Change handler */
  onChange: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Accessible label */
  label: string;
}

export const QuantityToggle = forwardRef<HTMLDivElement, QuantityToggleProps>(
  ({ value, onChange, min = 0, max = 99, label, className, ...props }, ref) => {
    const decrement = () => {
      if (value > min) onChange(value - 1);
    };

    const increment = () => {
      if (value < max) onChange(value + 1);
    };

    return (
      <div
        ref={ref}
        className={`krds-quantity-toggle ${className || ""}`}
        role="group"
        aria-label={label}
        {...props}
      >
        <button
          type="button"
          className="krds-quantity-toggle-btn krds-quantity-toggle-dec"
          onClick={decrement}
          disabled={value <= min}
          aria-label="감소"
        >
          −
        </button>
        <span className="krds-quantity-toggle-value" aria-live="polite" aria-atomic="true">
          {value}
        </span>
        <button
          type="button"
          className="krds-quantity-toggle-btn krds-quantity-toggle-inc"
          onClick={increment}
          disabled={value >= max}
          aria-label="증가"
        >
          +
        </button>
      </div>
    );
  },
);

QuantityToggle.displayName = "QuantityToggle";
