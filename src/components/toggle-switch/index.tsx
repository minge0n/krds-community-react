"use client";

import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import type { ReactNode } from "react";
import { useId } from "react";

export interface ToggleSwitchProps {
  /** Label text */
  label: ReactNode;
  /** Checked state */
  checked?: boolean;
  /** Default checked */
  defaultChecked?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Disabled */
  disabled?: boolean;
  /** Name for form */
  name?: string;
  /** Additional class */
  className?: string;
}

export function ToggleSwitch({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  name,
  className,
}: ToggleSwitchProps) {
  const id = useId();

  return (
    <div className={`krds-form-toggle-switch ${className || ""}`}>
      <BaseSwitch.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        name={name}
        className="krds-switch"
      >
        <BaseSwitch.Thumb className="krds-switch-thumb" />
      </BaseSwitch.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

ToggleSwitch.displayName = "ToggleSwitch";
