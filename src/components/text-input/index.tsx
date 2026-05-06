"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useId } from "react";

export interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  /** Label */
  label?: ReactNode;
  /** Hint text */
  hint?: ReactNode;
  /** Error message */
  error?: ReactNode;
  /** Show error state */
  invalid?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, hint, error, invalid = false, className, id: propId, ...props }, ref) => {
    const generatedId = useId();
    const id = propId || generatedId;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    return (
      <div className={`form-group ${className || ""}`}>
        {label && (
          <div className="form-tit">
            <label htmlFor={id}>{label}</label>
          </div>
        )}
        <div className="form-conts">
          <input
            ref={ref}
            type="text"
            id={id}
            className={`krds-input ${invalid ? "is-error" : ""}`}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid && error ? errorId : hint ? hintId : undefined}
            {...props}
          />
        </div>
        {invalid && error && (
          <p className="form-hint-invalid" id={errorId} role="alert">
            {error}
          </p>
        )}
        {!invalid && hint && (
          <p className="form-hint" id={hintId}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
