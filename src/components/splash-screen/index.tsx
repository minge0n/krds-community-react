"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface SplashScreenProps extends ComponentPropsWithoutRef<"div"> {
  /** Logo element */
  logo?: ReactNode;
  /** Title text */
  title?: string;
  /** Show loading indicator */
  loading?: boolean;
}

export const SplashScreen = forwardRef<HTMLDivElement, SplashScreenProps>(
  ({ logo, title, loading = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`krds-splash-screen ${className || ""}`}
        role="status"
        aria-label={title || "로딩 중"}
        {...props}
      >
        {logo && <div className="krds-splash-screen-logo">{logo}</div>}
        {title && <h1 className="krds-splash-screen-title">{title}</h1>}
        {loading && (
          <div className="krds-splash-screen-loader" aria-hidden="true">
            <span className="krds-splash-screen-spinner" />
          </div>
        )}
      </div>
    );
  },
);

SplashScreen.displayName = "SplashScreen";
