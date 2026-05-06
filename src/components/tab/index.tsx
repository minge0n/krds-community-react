"use client";

import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface TabsProps extends ComponentPropsWithoutRef<"div"> {
  /** Default active tab */
  defaultValue?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, className, children, ...props }, ref) => {
    return (
      <BaseTabs.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        className={`krds-tab-area ${className || ""}`}
        {...props}
      >
        {children}
      </BaseTabs.Root>
    );
  },
);

Tabs.displayName = "Tabs";

export interface TabListProps extends ComponentPropsWithoutRef<"div"> {
  /** Full width tabs */
  fullWidth?: boolean;
  children: ReactNode;
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ fullWidth = false, className, children, ...props }, ref) => {
    const classNames = ["tab line", fullWidth && "full", className].filter(Boolean).join(" ");

    return (
      <BaseTabs.List ref={ref} className={classNames} {...props}>
        {children}
      </BaseTabs.List>
    );
  },
);

TabList.displayName = "TabList";

export interface TabProps extends ComponentPropsWithoutRef<"button"> {
  value: string;
  children: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <BaseTabs.Tab ref={ref} value={value} className={`btn-tab ${className || ""}`} {...props}>
        {children}
      </BaseTabs.Tab>
    );
  },
);

Tab.displayName = "Tab";

export interface TabPanelProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  children: ReactNode;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <BaseTabs.Panel ref={ref} value={value} className={`tab-conts ${className || ""}`} {...props}>
        {children}
      </BaseTabs.Panel>
    );
  },
);

TabPanel.displayName = "TabPanel";
