"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

export interface CarouselProps extends ComponentPropsWithoutRef<"div"> {
  /** Slide elements */
  children: ReactNode[];
  /** Enable auto play */
  autoPlay?: boolean;
  /** Auto play interval in ms */
  interval?: number;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, autoPlay = false, interval = 5000, className, ...props }, ref) => {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = Array.isArray(children) ? children.length : 0;

    const goTo = useCallback(
      (index: number) => {
        setCurrent((index + total) % total);
      },
      [total],
    );

    const prev = useCallback(() => goTo(current - 1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1), [current, goTo]);

    useEffect(() => {
      if (autoPlay && total > 1) {
        timerRef.current = setInterval(() => {
          setCurrent((c) => (c + 1) % total);
        }, interval);
        return () => {
          if (timerRef.current) clearInterval(timerRef.current);
        };
      }
    }, [autoPlay, interval, total]);

    return (
      <div
        ref={ref}
        className={`krds-carousel ${className || ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="슬라이드"
        {...props}
      >
        <div className="krds-carousel-viewport">
          <div
            className="krds-carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.isArray(children) &&
              children.map((child, i) => (
                <div
                  key={i}
                  className="krds-carousel-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} / ${total}`}
                >
                  {child}
                </div>
              ))}
          </div>
        </div>

        <button
          type="button"
          className="krds-carousel-btn krds-carousel-prev"
          onClick={prev}
          aria-label="이전 슬라이드"
        >
          ‹
        </button>
        <button
          type="button"
          className="krds-carousel-btn krds-carousel-next"
          onClick={next}
          aria-label="다음 슬라이드"
        >
          ›
        </button>

        <div className="krds-carousel-dots" role="tablist">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={`krds-carousel-dot ${i === current ? "active" : ""}`}
              aria-selected={i === current}
              aria-label={`슬라이드 ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    );
  },
);

Carousel.displayName = "Carousel";
