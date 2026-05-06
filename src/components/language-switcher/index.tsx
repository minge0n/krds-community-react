"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useState } from "react";

export interface LanguageOption {
  code: string;
  label: string;
}

export interface LanguageSwitcherProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Available languages */
  languages: LanguageOption[];
  /** Current language code */
  value?: string;
  /** Change handler */
  onChange?: (code: string) => void;
  /** Label */
  label?: string;
}

export const LanguageSwitcher = forwardRef<HTMLDivElement, LanguageSwitcherProps>(
  (
    {
      languages,
      value,
      onChange,
      label = "언어 선택",
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = languages.find((l) => l.code === value) || languages[0];

    const handleSelect = (code: string) => {
      onChange?.(code);
      setIsOpen(false);
    };

    const classNames = ["krds-language-switcher", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        <button
          type="button"
          className="krds-language-switcher-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={label}
        >
          <svg
            className="krds-language-switcher-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M1.5 9h15M9 1.5c2 2.5 2 12.5 0 15M9 1.5c-2 2.5-2 12.5 0 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="krds-language-switcher-label">{currentLang?.label}</span>
          <svg
            className={`krds-language-switcher-chevron ${isOpen ? "expanded" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 5.25L7 8.75l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="krds-language-switcher-menu" role="listbox" aria-label={label}>
            {languages.map((lang) => (
              <li
                key={lang.code}
                className={`krds-language-switcher-option ${lang.code === value ? "selected" : ""}`}
                role="option"
                aria-selected={lang.code === value}
                onClick={() => handleSelect(lang.code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(lang.code);
                  }
                }}
                tabIndex={0}
              >
                {lang.label}
                {lang.code === value && (
                  <span className="krds-language-switcher-check" aria-hidden="true">
                    ✓
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

LanguageSwitcher.displayName = "LanguageSwitcher";
