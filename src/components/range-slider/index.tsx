"use client";

import { Slider as BaseSlider } from "@base-ui-components/react/slider";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface RangeSliderProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Current value */
  value?: number;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Accessible label */
  label: string;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  ({ min = 0, max = 100, value, onChange, label, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`krds-range-slider ${className || ""}`} {...props}>
        <BaseSlider.Root
          value={value !== undefined ? [value] : undefined}
          onValueChange={(val: number[]) => onChange?.(val[0])}
          min={min}
          max={max}
          aria-label={label}
        >
          <BaseSlider.Value className="krds-range-slider-output" />
          <BaseSlider.Control className="krds-range-slider-control">
            <BaseSlider.Track className="krds-range-slider-track">
              <BaseSlider.Indicator className="krds-range-slider-indicator" />
              <BaseSlider.Thumb className="krds-range-slider-thumb" />
            </BaseSlider.Track>
          </BaseSlider.Control>
        </BaseSlider.Root>
      </div>
    );
  },
);

RangeSlider.displayName = "RangeSlider";
