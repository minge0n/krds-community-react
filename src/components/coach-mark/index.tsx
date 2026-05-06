"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface CoachMarkProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Title */
  title?: ReactNode;
  /** Description */
  description: ReactNode;
  /** Current step (1-based) */
  currentStep?: number;
  /** Total steps */
  totalSteps?: number;
  /** Placement */
  placement?: "top" | "bottom" | "left" | "right";
  /** Show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Next handler */
  onNext?: () => void;
  /** Previous handler */
  onPrev?: () => void;
  /** Next button text */
  nextText?: string;
  /** Previous button text */
  prevText?: string;
  /** Close button text */
  closeText?: string;
}

export const CoachMark = forwardRef<HTMLDivElement, CoachMarkProps>(
  (
    {
      title,
      description,
      currentStep,
      totalSteps,
      placement = "bottom",
      closable = true,
      onClose,
      onNext,
      onPrev,
      nextText = "다음",
      prevText = "이전",
      closeText = "닫기",
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-coach-mark", `placement-${placement}`, className]
      .filter(Boolean)
      .join(" ");

    const hasSteps = currentStep !== undefined && totalSteps !== undefined;

    return (
      <div ref={ref} className={classNames} role="tooltip" aria-live="polite" {...props}>
        <div className="krds-coach-mark-arrow" />
        <div className="krds-coach-mark-content">
          {closable && (
            <button
              type="button"
              className="krds-coach-mark-close"
              onClick={onClose}
              aria-label="닫기"
            >
              ×
            </button>
          )}
          {title && <p className="krds-coach-mark-title">{title}</p>}
          <p className="krds-coach-mark-desc">{description}</p>
          {hasSteps && (
            <div className="krds-coach-mark-footer">
              <span className="krds-coach-mark-steps">
                {currentStep} / {totalSteps}
              </span>
              <div className="krds-coach-mark-actions">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="krds-coach-mark-btn prev"
                    onClick={onPrev}
                  >
                    {prevText}
                  </button>
                )}
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    className="krds-coach-mark-btn next"
                    onClick={onNext}
                  >
                    {nextText}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="krds-coach-mark-btn next"
                    onClick={onClose}
                  >
                    {closeText}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

CoachMark.displayName = "CoachMark";
