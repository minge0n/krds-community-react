"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useCallback, useRef, useState } from "react";

export interface TTSProps extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  /** Text to read aloud */
  text: string;
  /** Button label */
  label?: string;
  /** Speech rate (0.5 - 2) */
  rate?: number;
  /** Speech language */
  lang?: string;
}

export const TTS = forwardRef<HTMLButtonElement, TTSProps>(
  (
    {
      text,
      label = "텍스트 읽기",
      rate = 1,
      lang = "ko-KR",
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    const handleClick = useCallback(() => {
      if (!("speechSynthesis" in window)) return;

      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      utteranceRef.current = utterance;

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }, [text, lang, rate, isPlaying]);

    const classNames = ["krds-tts", isPlaying && "is-playing", className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        onClick={handleClick}
        disabled={disabled}
        aria-label={isPlaying ? "읽기 중지" : label}
        aria-pressed={isPlaying}
        {...props}
      >
        {isPlaying ? (
          <svg
            className="krds-tts-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <rect x="5" y="4" width="3" height="12" rx="1" fill="currentColor" />
            <rect x="12" y="4" width="3" height="12" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg
            className="krds-tts-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 3v14l-5-4H2V7h3l5-4z"
              fill="currentColor"
            />
            <path
              d="M14 7.5c.7.7 1 1.5 1 2.5s-.3 1.8-1 2.5M16 5.5c1.3 1.3 2 3 2 4.5s-.7 3.2-2 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
        <span className="krds-tts-label">{isPlaying ? "중지" : label}</span>
      </button>
    );
  },
);

TTS.displayName = "TTS";
