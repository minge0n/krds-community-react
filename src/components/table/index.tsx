"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface TableProps extends ComponentPropsWithoutRef<"table"> {}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="krds-table-wrap">
        <table ref={ref} className={`krds-table ${className || ""}`} {...props}>
          {children}
        </table>
      </div>
    );
  },
);

Table.displayName = "Table";
