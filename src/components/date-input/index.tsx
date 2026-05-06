"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useCallback, useState } from "react";

export interface DateInputProps extends Omit<ComponentPropsWithoutRef<"input">, "onChange" | "value"> {
  /** Label */
  label?: ReactNode;
  /** Hint text */
  hint?: ReactNode;
  /** Error message */
  error?: ReactNode;
  /** Error state */
  invalid?: boolean;
  /** Date format mask */
  format?: string;
  /** Controlled value (YYYY-MM-DD) */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
      hint,
      error,
      invalid = false,
      format = "YYYY-MM-DD",
      value,
      onChange,
      disabled,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(value || "");
    const displayValue = value !== undefined ? value : internalValue;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let raw = e.target.value.replace(/[^0-9]/g, "");

        // Auto-format as YYYY-MM-DD
        if (raw.length > 4) {
          raw = raw.slice(0, 4) + "-" + raw.slice(4);
        }
        if (raw.length > 7) {
          raw = raw.slice(0, 7) + "-" + raw.slice(7);
        }
        if (raw.length > 10) {
          raw = raw.slice(0, 10);
        }

        setInternalValue(raw);
        onChange?.(raw);
      },
      [onChange],
    );

    const inputId = id || "krds-date-input";
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const classNames = [
      "krds-date-input",
      invalid && "is-error",
      disabled && "is-disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={classNames}>
        {label && (
          <label htmlFor={inputId} className="krds-date-input-label">
            {label}
          </label>
        )}
        <div className="krds-date-input-wrapper">
          <input
            ref={ref}
            id={inputId}
            type="text"
            className="krds-date-input-field"
            value={displayValue}
            onChange={handleChange}
            placeholder={format}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid && error ? errorId : hint ? hintId : undefined}
            inputMode="numeric"
            maxLength={10}
            {...props}
          />
          <svg
            className="krds-date-input-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 1v3M14 1v3M1 8h18M3 3h14a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {invalid && error && (
          <p className="krds-date-input-error" id={errorId} role="alert">
            {error}
          </p>
        )}
        {!invalid && hint && (
          <p className="krds-date-input-hint" id={hintId}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);

DateInput.displayName = "DateInput";
