"use client";

import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface AccordionProps extends ComponentPropsWithoutRef<"div"> {
  /** Allow multiple panels open */
  multiple?: boolean;
  /** Default expanded items */
  defaultValue?: string[];
  /** Line variant */
  variant?: "default" | "line";
  children: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ multiple = false, defaultValue, variant = "default", className, children, ...props }, ref) => {
    const classNames = ["krds-accordion", variant === "line" && "type-line", className]
      .filter(Boolean)
      .join(" ");

    return (
      <BaseAccordion.Root
        ref={ref}
        className={classNames}
        defaultValue={defaultValue}
        {...(multiple ? {} : {})}
        {...props}
      >
        {children}
      </BaseAccordion.Root>
    );
  },
);

Accordion.displayName = "Accordion";

export interface AccordionItemProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  children: ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <BaseAccordion.Item
        ref={ref}
        value={value}
        className={`accordion-item ${className || ""}`}
        {...props}
      >
        {children}
      </BaseAccordion.Item>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export const AccordionTrigger = forwardRef<HTMLHeadingElement, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <BaseAccordion.Header ref={ref} className="accordion-header">
        <BaseAccordion.Trigger className={`btn-accordion ${className || ""}`} {...props}>
          {children}
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
    );
  },
);

AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionPanelProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <BaseAccordion.Panel ref={ref} className={`accordion-collapse ${className || ""}`} {...props}>
        <div className="accordion-body">{children}</div>
      </BaseAccordion.Panel>
    );
  },
);

AccordionPanel.displayName = "AccordionPanel";
