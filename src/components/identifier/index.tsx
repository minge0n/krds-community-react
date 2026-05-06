"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface IdentifierProps extends ComponentPropsWithoutRef<"div"> {
  /** Organization name */
  orgName: string;
  /** Logo element */
  logo?: ReactNode;
  /** Description */
  description?: ReactNode;
  /** Links */
  links?: { label: string; href: string }[];
}

export const Identifier = forwardRef<HTMLDivElement, IdentifierProps>(
  ({ orgName, logo, description, links, className, ...props }, ref) => {
    const classNames = ["krds-identifier", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} role="contentinfo" {...props}>
        <div className="krds-identifier-inner">
          <div className="krds-identifier-masthead">
            {logo && <div className="krds-identifier-logo">{logo}</div>}
            <p className="krds-identifier-org">{orgName}</p>
          </div>
          {description && <p className="krds-identifier-desc">{description}</p>}
          {links && links.length > 0 && (
            <nav className="krds-identifier-links" aria-label="관련 링크">
              <ul className="krds-identifier-link-list">
                {links.map((link) => (
                  <li key={link.href} className="krds-identifier-link-item">
                    <a href={link.href} className="krds-identifier-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    );
  },
);

Identifier.displayName = "Identifier";
