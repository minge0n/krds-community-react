"use client";

import { createContext, useContext } from "react";
import type { CSSProperties, ReactNode } from "react";

export type ThemeMode = "light" | "high-contrast" | "system";

export interface ThemeProviderProps {
  /** Theme mode */
  mode?: ThemeMode;
  /** Partial CSS variable overrides */
  overrides?: Record<string, string>;
  children: ReactNode;
}

interface ThemeContextValue {
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextValue>({ mode: "light" });

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export function ThemeProvider({ mode = "light", overrides, children }: ThemeProviderProps) {
  const resolvedMode = mode === "system" ? getSystemMode() : mode;

  const style: CSSProperties | undefined = overrides
    ? (overrides as unknown as CSSProperties)
    : undefined;

  return (
    <ThemeContext.Provider value={{ mode }}>
      <div data-krds-mode={resolvedMode} style={style}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function getSystemMode(): "light" | "high-contrast" {
  if (typeof window === "undefined") return "light";
  const prefersDark = window.matchMedia("(prefers-contrast: more)").matches;
  return prefersDark ? "high-contrast" : "light";
}

ThemeProvider.displayName = "ThemeProvider";
