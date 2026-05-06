"use client";

import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import type { ReactNode } from "react";
import { useId } from "react";

export interface CheckboxProps {
  /** Label text */
  label: ReactNode;
  /** Description text */
  description?: ReactNode;
  /** Checked state (controlled) */
  checked?: boolean;
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Disabled */
  disabled?: boolean;
  /** Name for form submission */
  name?: string;
  /** Value for form submission */
  value?: string;
  /** Additional class */
  className?: string;
}

export function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  name,
  value,
  className,
}: CheckboxProps) {
  const id = useId();

  return (
    <div className={`krds-form-check ${className || ""}`}>
      <BaseCheckbox.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        name={name}
        value={value}
        className="krds-checkbox"
      >
        <BaseCheckbox.Indicator className="krds-checkbox-indicator" />
      </BaseCheckbox.Root>
      <label htmlFor={id}>{label}</label>
      {description && (
        <div className="krds-form-check-cnt">
          <p className="krds-form-check-p">{description}</p>
        </div>
      )}
    </div>
  );
}

Checkbox.displayName = "Checkbox";
