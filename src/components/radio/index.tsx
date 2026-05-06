"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useId } from "react";

export interface RadioGroupProps extends ComponentPropsWithoutRef<"fieldset"> {
  /** Group label */
  label?: string;
  /** Layout direction */
  direction?: "row" | "column";
  children: ReactNode;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ label, direction = "row", className, children, ...props }, ref) => {
    const classNames = ["krds-check-area", direction === "column" && "chk-column", className]
      .filter(Boolean)
      .join(" ");

    return (
      <fieldset ref={ref} className={classNames} {...props}>
        {label && <legend className="sr-only">{label}</legend>}
        {children}
      </fieldset>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export interface RadioProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  /** Label text */
  label: ReactNode;
  /** Description */
  description?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, className, id: propId, ...props }, ref) => {
    const generatedId = useId();
    const id = propId || generatedId;

    return (
      <div className={`krds-form-check ${className || ""}`}>
        <input ref={ref} type="radio" id={id} {...props} />
        <label htmlFor={id}>{label}</label>
        {description && (
          <div className="krds-form-check-cnt">
            <p className="krds-form-check-p">{description}</p>
          </div>
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";
