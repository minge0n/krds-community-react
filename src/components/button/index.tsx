"use client";

import { Button as BaseButton } from "@base-ui-components/react/button";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon-only button */
  iconOnly?: boolean;
  /** Show border on icon button */
  border?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Icon element */
  icon?: ReactNode;
  /** Icon position */
  iconPosition?: "start" | "end";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "large",
      iconOnly = false,
      border = false,
      fullWidth = false,
      icon,
      iconPosition = "end",
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const classNames = [
      "krds-btn",
      variant,
      size,
      iconOnly && "icon",
      border && "border",
      fullWidth && "full-width",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <BaseButton ref={ref} type={type} className={classNames} disabled={disabled} {...props}>
        {iconOnly && children && <span className="sr-only">{children}</span>}
        {icon && iconPosition === "start" && icon}
        {!iconOnly && children}
        {icon && iconPosition === "end" && icon}
      </BaseButton>
    );
  },
);

Button.displayName = "Button";
