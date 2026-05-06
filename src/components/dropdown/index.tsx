"use client";

import { Menu as BaseMenu } from "@base-ui-components/react/menu";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export interface DropdownProps {
  /** Trigger button text */
  buttonText: ReactNode;
  /** Button class */
  buttonClassName?: string;
  /** Open state (controlled) */
  isOpen?: boolean;
  /** Default open (uncontrolled) */
  defaultOpen?: boolean;
  /** Open change handler */
  onOpenChange?: (isOpen: boolean) => void;
  /** Menu items */
  children?: ReactNode;
  /** Custom class */
  className?: string;
}

export function Dropdown({
  buttonText,
  buttonClassName,
  isOpen,
  onOpenChange,
  children,
  className,
}: DropdownProps) {
  return (
    <BaseMenu.Root open={isOpen} onOpenChange={onOpenChange}>
      <BaseMenu.Trigger className={`krds-btn tertiary ${buttonClassName || ""}`}>
        {buttonText}
      </BaseMenu.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner sideOffset={4}>
          <BaseMenu.Popup className={`krds-drop-wrap ${className || ""}`}>{children}</BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}

Dropdown.displayName = "Dropdown";

export interface DropdownItemProps {
  /** Active state */
  isActive?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Disabled */
  disabled?: boolean;
  /** Custom class */
  className?: string;
  children?: ReactNode;
}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ isActive = false, onClick, disabled, className, children, ...props }, ref) => {
    return (
      <BaseMenu.Item
        ref={ref}
        className={`krds-drop-item ${isActive ? "active" : ""} ${className || ""}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </BaseMenu.Item>
    );
  },
);

DropdownItem.displayName = "DropdownItem";
