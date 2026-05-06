"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useId } from "react";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  /** Label */
  label?: ReactNode;
  /** Max character count */
  maxCount?: number;
  /** Current character count */
  count?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, maxCount, count, className, id: propId, ...props }, ref) => {
    const generatedId = useId();
    const id = propId || generatedId;

    return (
      <div className={`form-group ${className || ""}`}>
        {label && (
          <div className="form-tit">
            <label htmlFor={id}>{label}</label>
          </div>
        )}
        <div className="form-conts">
          <div className="textarea-wrap">
            <textarea ref={ref} id={id} className="krds-input" {...props} />
            {maxCount != null && (
              <p className="textarea-count" aria-live="polite">
                <span className="count-now">{count ?? 0}</span>
                <span className="count-total">/{maxCount}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
