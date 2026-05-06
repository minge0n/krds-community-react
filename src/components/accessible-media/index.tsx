"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export interface AccessibleMediaProps extends ComponentPropsWithoutRef<"div"> {
  /** Media source URL */
  src: string;
  /** Media type: video or audio */
  type?: "video" | "audio";
  /** Caption/subtitle file URL */
  captionSrc?: string;
  /** Accessible title */
  title: string;
}

export const AccessibleMedia = forwardRef<HTMLDivElement, AccessibleMediaProps>(
  ({ src, type = "video", captionSrc, title, className, ...props }, ref) => {
    const MediaElement = type === "video" ? "video" : "audio";

    return (
      <div ref={ref} className={`krds-accessible-media ${className || ""}`} {...props}>
        <MediaElement
          className="krds-accessible-media-player"
          controls
          aria-label={title}
          title={title}
        >
          <source src={src} />
          {captionSrc && <track kind="captions" src={captionSrc} label={title} default />}
          <p>
            브라우저가 {type === "video" ? "비디오" : "오디오"}를 지원하지 않습니다.
          </p>
        </MediaElement>
      </div>
    );
  },
);

AccessibleMedia.displayName = "AccessibleMedia";
