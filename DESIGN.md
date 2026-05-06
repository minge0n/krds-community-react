# DESIGN.md — KRDS React Pattern Guide

This document serves as a pattern guide for AI coding agents building UI with KRDS (Korea Design System) components.
Token values live in `src/styles/tokens.css`. Component implementations live in `src/components/`.

## Design Principles

### Color Ratio (60-30-10)
- **60%** — Background & neutrals (surface, background, text, icon, divider)
- **30%** — Secondary (element, border, divider, action, icon)
- **10%** — Primary action (button, link, input active, icon primary)
- Accent (point) must be limited to **≤5%** of total screen area

### Accessibility (WCAG)
- Magic Number 40 = 3:1 (large text, UI elements)
- Magic Number 50 = 4.5:1 (regular text)
- Magic Number 70 = 7:1 (AAA grade)
- Magic Number 90 = 15:1 (High Contrast mode body text)
- Color blindness: never use red+green alone, always provide text+icon+color redundancy

### Typography
- Typeface: **Pretendard GOV** (CDN: `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css")`)
- Weights: Regular (400) + Bold (700) only
- Minimum body size: 17px (Pretendard GOV appears smaller than other fonts)
- Line height: **150%** (all text)
- Letter spacing: Display only 1px, everything else 0
- Units: rem (62.5% base, 1rem = 10px)

### Shape (Border Radius)
- Formula: container height × 1/8, round to even, max 12px
- xsmall: 2px (indicators, badges, progress bars)
- small: 4px (tags, chips, checkbox, radio, switch)
- medium: 6px (buttons, inputs, textarea, select, pagination)
- large: 10px (cards, dialogs)
- xlarge: 12px (banners, bottom sheets, full-screen)
- 50%: circles (profile images)

### Elevation
- Borders first, shadows only for functional purposes
- elevation -1: gray10 background
- elevation 0: gray0 (default canvas)
- elevation +1: gray5 background
- elevation +2: gray0 + border

---

## Basic Patterns

Component compositions for core tasks.

### 1. Personal Information Input
- **Components**: TextInput + Select + Button(primary) + StepIndicator
- **Rules**: Explain why info is needed, request minimum data only

### 2. Help
- **Components**: ContextualHelp + Tooltip + HelpPanel + CoachMark + TutorialPanel
- **Rules**: Progressive disclosure by user skill level, never interrupt task flow

### 3. Consent
- **Components**: Checkbox + Accordion + Button(primary) + Disclosure
- **Rules**: Structure complex legal content clearly, provide select-all + individual options

### 4. List Navigation
- **Components**: StructuredList + Pagination + Badge + Tag + Table
- **Rules**: Consistent format, logical ordering, easy item discovery

### 5. User Feedback
- **Components**: Radio + Textarea + Button(secondary) + Modal
- **Rules**: Non-mandatory, never interrupt task flow, concise questions

### 6. Detail View
- **Components**: Breadcrumb + Tab + Accordion + Table + Image + Badge
- **Rules**: Clear and concise info matching user expectations

### 7. Error
- **Components**: CriticalAlert + Modal + Button(primary) + Link
- **Rules**: Explain cause + provide resolution path, guide user to complete intended action

### 8. Input Form
- **Components**: TextInput + Textarea + Select + Checkbox + Radio + DateInput + FileUpload + Button + StepIndicator
- **Rules**: Labels required, hint text provided, inline error messages, mark required fields

### 9. File Attachment
- **Components**: FileUpload + StructuredList + Link + Spinner + Badge
- **Rules**: Show file type/size limits, display upload progress, clear error messages

### 10. Filtering & Sorting
- **Components**: Select + Checkbox + Radio + Tag + Button(tertiary) + Table/StructuredList
- **Rules**: Reduce search scope, show current filter state clearly

### 11. Confirmation
- **Components**: Modal + Button(primary/tertiary) + CriticalAlert
- **Rules**: Clearly explain consequences, always provide cancel option

---

## Service Patterns

User-journey-based UX design guides. Each has Do (required) / Better (recommended) / Best (excellent) levels.

### 1. Visit
- **Components**: Masthead + Header + MainMenu + Footer + SkipLink + Breadcrumb + Identifier
- **Rules**: First impression determines perception, clear and concise without specific context

### 2. Search
- **Components**: TextInput + Button(primary) + StructuredList + Pagination + Tag + Badge + Select
- **Rules**: Reduce search scope, efficient discovery, alternative when navigation fails

### 3. Login
- **Components**: TextInput + Button(primary) + Link + Modal + Checkbox + Tab
- **Rules**: Only when personalization/identity needed, clearly present auth methods

### 4. Application
- **Components**: StepIndicator + TextInput + Select + DateInput + FileUpload + Checkbox + Radio + Button + Modal + Disclosure
- **Rules**: Step-by-step progress, auto-save, confirm before submit, post-completion guidance

### 5. Policy Information
- **Components**: Accordion + Tab + Table + Breadcrumb + InPageNavigation + Link + Badge + TextList
- **Rules**: Structured presentation, link related documents

---

## Component Usage Rules

### Button Hierarchy
1. **Primary** — 1-2 per page. Most important action.
2. **Secondary** — Supporting actions (cancel, back).
3. **Tertiary** — Low emphasis (more, close).
4. **Text** — Inline actions (download, share).

### Modal Conditions
- Only when immediate user attention is required
- Single task or confirmation only
- Complex forms → separate page, not modal
- Always provide close button (X) and cancel option

### Form Composition
- Labels above inputs
- Required fields marked with `*`
- Error messages directly below field (red)
- Hint text below field (gray)
- Submit button: bottom-right, Primary
- Cancel button: left of submit, Tertiary

### Navigation Structure
- Masthead (top, government official banner)
- Header (logo + search + main menu)
- Breadcrumb (current location)
- SideNavigation (sub-page navigation)
- InPageNavigation (long page TOC)
- Footer (additional links + org info)

---

## High Contrast Mode

Token switching rules:
- Canvas: white → black
- Text: gray-90 → gray-5~10
- Borders: thickness increases (1px → 2px, 2px → 3px)
- Icons: gray-80 → gray-5
- System colors: -50 → -20 (brighter)
- Backgrounds: -5 → -95 (darker)

Implementation: `<html data-krds-mode="high-contrast">` + CSS variable override.

---

## File Structure

```
src/
├── styles/
│   ├── base.css          # Font declaration, reset
│   ├── tokens.css        # KRDS CSS custom properties (all tokens)
│   └── index.css         # All CSS import entry
├── components/
│   ├── button/           # index.tsx + button.css
│   ├── accordion/        # index.tsx + accordion.css
│   └── ...               # 56 components
└── index.ts              # Package entry (all exports)
```

## Iteration Guide

1. Components are `src/components/<name>/index.tsx` + `<name>.css` pairs
2. `"use client"` directive required (Next.js compatibility)
3. Use Base UI headless components where available
4. CSS must use KRDS token variables (`var(--krds-*)`), no hardcoded values
5. All interactive elements must have `:focus-visible` outline
6. New components → add import to `src/styles/index.css`
7. New components → add export to `src/index.ts`
8. Follow 60-30-10 color ratio
9. Border radius: container height × 1/8 (round to even, max 12px)
10. Responsive: 767px breakpoint for PC/Mobile token switch
