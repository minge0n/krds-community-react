"use client";

import type { ReactNode } from "react";

export interface FaviconProps {
  /** Path to the favicon file */
  href: string;
  /** MIME type of the favicon */
  type?: string;
  /** Sizes attribute */
  sizes?: string;
  /** Additional link elements */
  children?: ReactNode;
}

export function Favicon({ href, type = "image/x-icon", sizes, children }: FaviconProps) {
  return (
    <>
      <link rel="icon" href={href} type={type} sizes={sizes} />
      {children}
    </>
  );
}

Favicon.displayName = "Favicon";
