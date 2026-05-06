"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  /** Organization name */
  orgName?: string;
  /** Address */
  address?: ReactNode;
  /** Contact info */
  contact?: ReactNode;
  /** Copyright text */
  copyright?: ReactNode;
  /** Footer links */
  links?: FooterLink[];
  /** Additional content */
  children?: ReactNode;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      orgName,
      address,
      contact,
      copyright,
      links,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const classNames = ["krds-footer", className].filter(Boolean).join(" ");

    return (
      <footer ref={ref} className={classNames} {...props}>
        <div className="krds-footer-inner">
          {links && links.length > 0 && (
            <nav className="krds-footer-links" aria-label="푸터 링크">
              <ul className="krds-footer-link-list">
                {links.map((link) => (
                  <li key={link.href} className="krds-footer-link-item">
                    <a href={link.href} className="krds-footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="krds-footer-info">
            {orgName && <p className="krds-footer-org">{orgName}</p>}
            {address && <p className="krds-footer-address">{address}</p>}
            {contact && <p className="krds-footer-contact">{contact}</p>}
            {copyright && <p className="krds-footer-copyright">{copyright}</p>}
          </div>
          {children && <div className="krds-footer-extra">{children}</div>}
        </div>
      </footer>
    );
  },
);

Footer.displayName = "Footer";
