"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface MastheadProps extends ComponentPropsWithoutRef<"div"> {
  /** Main text */
  text?: ReactNode;
  /** Logo/icon */
  logo?: ReactNode;
}

export const Masthead = forwardRef<HTMLDivElement, MastheadProps>(
  (
    {
      text = "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
      logo,
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-masthead", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} role="banner" {...props}>
        <div className="krds-masthead-inner">
          {logo && <div className="krds-masthead-logo">{logo}</div>}
          <p className="krds-masthead-text">{text}</p>
        </div>
      </div>
    );
  },
);

Masthead.displayName = "Masthead";
