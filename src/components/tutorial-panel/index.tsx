"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface TutorialStep {
  title: ReactNode;
  content: ReactNode;
}

export interface TutorialPanelProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Panel title */
  title?: ReactNode;
  /** Tutorial steps */
  steps: TutorialStep[];
  /** Current step (0-based) */
  currentStep?: number;
  /** Step change handler */
  onStepChange?: (step: number) => void;
  /** Close handler */
  onClose?: () => void;
  /** Next button text */
  nextText?: string;
  /** Previous button text */
  prevText?: string;
  /** Complete button text */
  completeText?: string;
}

export const TutorialPanel = forwardRef<HTMLDivElement, TutorialPanelProps>(
  (
    {
      title = "튜토리얼",
      steps,
      currentStep = 0,
      onStepChange,
      onClose,
      nextText = "다음",
      prevText = "이전",
      completeText = "완료",
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-tutorial-panel", className].filter(Boolean).join(" ");
    const step = steps[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === steps.length - 1;

    const handlePrev = () => {
      if (!isFirst) onStepChange?.(currentStep - 1);
    };

    const handleNext = () => {
      if (isLast) {
        onClose?.();
      } else {
        onStepChange?.(currentStep + 1);
      }
    };

    return (
      <div ref={ref} className={classNames} role="region" aria-label={typeof title === "string" ? title : "튜토리얼"} {...props}>
        <div className="krds-tutorial-panel-header">
          <h2 className="krds-tutorial-panel-title">{title}</h2>
          <button
            type="button"
            className="krds-tutorial-panel-close"
            onClick={onClose}
            aria-label="튜토리얼 닫기"
          >
            ×
          </button>
        </div>

        <div className="krds-tutorial-panel-progress">
          <div className="krds-tutorial-panel-progress-bar">
            <div
              className="krds-tutorial-panel-progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="krds-tutorial-panel-step-count">
            {currentStep + 1} / {steps.length}
          </span>
        </div>

        <div className="krds-tutorial-panel-body">
          {step && (
            <>
              <h3 className="krds-tutorial-panel-step-title">{step.title}</h3>
              <div className="krds-tutorial-panel-step-content">{step.content}</div>
            </>
          )}
        </div>

        <div className="krds-tutorial-panel-footer">
          <button
            type="button"
            className="krds-tutorial-panel-btn prev"
            onClick={handlePrev}
            disabled={isFirst}
          >
            {prevText}
          </button>
          <button
            type="button"
            className="krds-tutorial-panel-btn next"
            onClick={handleNext}
          >
            {isLast ? completeText : nextText}
          </button>
        </div>
      </div>
    );
  },
);

TutorialPanel.displayName = "TutorialPanel";
