"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import type { ReactNode } from "react";
import { useId } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Label */
  label?: ReactNode;
  /** Hint text */
  hint?: ReactNode;
  /** Error message */
  error?: ReactNode;
  /** Error state */
  invalid?: boolean;
  /** Disabled */
  disabled?: boolean;
  /** Placeholder */
  placeholder?: string;
  /** Options */
  options: SelectOption[];
  /** Controlled value */
  value?: string;
  /** Change handler */
  onValueChange?: (value: string | null) => void;
  /** Additional class */
  className?: string;
}

export function Select({
  label,
  hint,
  error,
  invalid = false,
  disabled = false,
  placeholder = "선택",
  options,
  value,
  onValueChange,
  className,
}: SelectProps) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  return (
    <div className={`form-group ${className || ""}`}>
      {label && (
        <div className="form-tit">
          <span id={`${id}-label`} className="form-label">
            {label}
          </span>
        </div>
      )}
      <div className="form-conts">
        <BaseSelect.Root value={value} onValueChange={onValueChange} disabled={disabled}>
          <BaseSelect.Trigger
            className={`krds-form-select ${invalid ? "is-error" : ""}`}
            aria-labelledby={label ? `${id}-label` : undefined}
            aria-describedby={invalid && error ? errorId : hint ? hintId : undefined}
            aria-invalid={invalid || undefined}
          >
            <BaseSelect.Value>
              {value ? options.find((o) => o.value === value)?.label : placeholder}
            </BaseSelect.Value>
            <BaseSelect.Icon className="krds-select-icon" />
          </BaseSelect.Trigger>
          <BaseSelect.Portal>
            <BaseSelect.Positioner sideOffset={4}>
              <BaseSelect.Popup className="krds-select-popup">
                <BaseSelect.List>
                  {options.map((opt) => (
                    <BaseSelect.Item
                      key={opt.value}
                      value={opt.value}
                      disabled={opt.disabled}
                      className="krds-select-item"
                    >
                      <BaseSelect.ItemText>{opt.label}</BaseSelect.ItemText>
                      <BaseSelect.ItemIndicator className="krds-select-check">
                        ✓
                      </BaseSelect.ItemIndicator>
                    </BaseSelect.Item>
                  ))}
                </BaseSelect.List>
              </BaseSelect.Popup>
            </BaseSelect.Positioner>
          </BaseSelect.Portal>
        </BaseSelect.Root>
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
}

Select.displayName = "Select";
