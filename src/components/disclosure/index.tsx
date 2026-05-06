"use client";

import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface DisclosureProps extends ComponentPropsWithoutRef<"div"> {
  /** Trigger label */
  label: string;
  /** Default open */
  defaultOpen?: boolean;
  children: ReactNode;
}

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  ({ label, defaultOpen = false, className, children, ...props }, ref) => {
    return (
      <BaseCollapsible.Root
        ref={ref}
        defaultOpen={defaultOpen}
        className={`krds-disclosure conts-expand-area ${className || ""}`}
        {...props}
      >
        <BaseCollapsible.Trigger className="btn-conts-expand">{label}</BaseCollapsible.Trigger>
        <BaseCollapsible.Panel className="expand-wrap">
          <div className="expand-in">{children}</div>
        </BaseCollapsible.Panel>
      </BaseCollapsible.Root>
    );
  },
);

Disclosure.displayName = "Disclosure";
