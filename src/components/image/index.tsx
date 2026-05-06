"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  /** Alt text is required for accessibility */
  alt: string;
  /** Optional figcaption text */
  caption?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, caption, className, ...props }, ref) => {
    const img = (
      <img ref={ref} alt={alt} className={`krds-image ${className || ""}`} {...props} />
    );

    if (caption) {
      return (
        <figure className="krds-image-figure">
          {img}
          <figcaption className="krds-image-caption">{caption}</figcaption>
        </figure>
      );
    }

    return img;
  },
);

Image.displayName = "Image";
