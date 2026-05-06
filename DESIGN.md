# DESIGN.md — krds-community-react

A pattern guide for AI coding agents. Copy this file into your project root so your AI assistant knows how to build UI with this design system.

## Overview

```bash
npm install krds-community-react
```

```tsx
import { ThemeProvider, Button } from "krds-community-react";
import "krds-community-react/css";

export default function App({ children }) {
  return (
    <ThemeProvider mode="light">
      {children}
    </ThemeProvider>
  );
}
```

## Component List

All imports from `"krds-community-react"`.

### Identity
| Component | Description |
|-----------|-------------|
| `Masthead` | Government official banner ("이 누리집은 대한민국 공식 전자정부 누리집입니다") |
| `Identifier` | Operating organization identifier |
| `Header` | Page header with logo, search, navigation |
| `Footer` | Page footer with links and org info |

### Navigation
| Component | Description |
|-----------|-------------|
| `SkipLink` | Skip to main content link (a11y) |
| `MainMenu` | Primary navigation menu |
| `Breadcrumb`, `BreadcrumbItem` | Current location path |
| `SideNavigation` | Sub-page sidebar navigation |
| `InPageNavigation` | Sticky in-page anchor TOC |
| `Pagination`, `PaginationItem`, `PaginationNav` | Page navigation |

### Layout & Display
| Component | Description |
|-----------|-------------|
| `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionPanel` | Collapsible content sections |
| `Modal`, `ModalTrigger`, `ModalContent`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalClose` | Dialog overlay |
| `Tab`, `TabList`, `TabPanel`, `Tabs` | Content section switcher |
| `Table` | Data table |
| `StructuredList`, `StructuredListItem` | Card-style list |
| `Badge` | Status/count indicator |
| `Disclosure` | Show/hide additional content |
| `Calendar` | Date picker |
| `Carousel` | Horizontal content slider |
| `CriticalAlert` | Urgent notification banner |
| `Image` | Accessible image with figcaption |
| `TextList` | Styled ordered/unordered list |
| `Favicon` | Favicon link tags helper |

### Action
| Component | Description |
|-----------|-------------|
| `Button` | Primary/Secondary/Tertiary/Text actions |
| `Link` | Navigation link with variants |
| `FAB` | Floating action button |
| `Dropdown`, `DropdownItem` | Action menu |

### Selection
| Component | Description |
|-----------|-------------|
| `Checkbox` | Multi-select option |
| `Radio`, `RadioGroup` | Single-select option |
| `Select` | Dropdown select |
| `Tag`, `TagGroup` | Categorization labels |
| `ToggleSwitch` | On/off toggle |

### Feedback
| Component | Description |
|-----------|-------------|
| `StepIndicator`, `StepItem` | Multi-step progress |
| `Spinner` | Loading indicator |

### Help
| Component | Description |
|-----------|-------------|
| `Tooltip` | Hover/focus description |
| `ContextualHelp` | Help icon with popover |
| `CoachMark` | Step-by-step guide balloon |
| `HelpPanel` | Slide-out help panel |
| `TutorialPanel` | Step-by-step tutorial panel |
| `TTS` | Text-to-speech button |

### Input
| Component | Description |
|-----------|-------------|
| `TextInput` | Single-line text field |
| `Textarea` | Multi-line text field |
| `Select` | Option selector |
| `DateInput` | Date entry field |
| `FileUpload` | File attachment |

### Settings
| Component | Description |
|-----------|-------------|
| `LanguageSwitcher` | Language selection |
| `Resize` | Font size adjustment (작게/보통/크게) |

### Content
| Component | Description |
|-----------|-------------|
| `AccessibleMedia` | Video/audio with captions |
| `VisuallyHidden` | Screen-reader-only content |

### Mobile
| Component | Description |
|-----------|-------------|
| `BackButton` | Back navigation |
| `BottomSheet` | Bottom slide-up panel |
| `TabBar` | Bottom tab navigation |
| `Toast` | Auto-dismiss notification |
| `Snackbar` | Notification with action |
| `RangeSlider` | Value range selector |
| `QuantityToggle` | Increment/decrement stepper |
| `SplashScreen` | App loading screen |

### Provider
| Component | Description |
|-----------|-------------|
| `ThemeProvider` | Mode switching (light/high-contrast) + token overrides |

## ThemeProvider

```tsx
import { ThemeProvider } from "krds-community-react";

// Light mode (default)
<ThemeProvider mode="light">{children}</ThemeProvider>

// High contrast mode
<ThemeProvider mode="high-contrast">{children}</ThemeProvider>

// System preference (prefers-contrast: more)
<ThemeProvider mode="system">{children}</ThemeProvider>

// Custom token overrides
<ThemeProvider
  mode="light"
  overrides={{
    "--krds-color-light-primary-50": "#0066cc",
    "--krds-light-color-button-primary-fill": "#0066cc",
  }}
>
  {children}
</ThemeProvider>
```

## Design Principles

### Color Ratio (60-30-10)
- **60%** — Background & neutrals (canvas, surface, text, dividers)
- **30%** — Secondary (borders, icons, secondary actions)
- **10%** — Primary actions (buttons, links, focus rings)
- Accent ≤ 5% (point red for critical emphasis only)

### Typography
- Font: Pretendard GOV (Regular 400 + Bold 700 only)
- Min body: 17px
- Line height: 150%
- Letter spacing: 0 (Display headings: 1px)
- Units: rem (1rem = 10px via 62.5% root)

### Border Radius
- Formula: container height × 1/8, round to even, max 12px
- Buttons/Inputs: 6px | Cards: 10px | Modals/Banners: 12px

### Elevation
- Prefer borders over shadows
- Shadows only for hover feedback and overlays (modals, dropdowns)

### Accessibility
- WCAG AA minimum (4.5:1 text, 3:1 UI)
- High Contrast mode: 15:1 body text
- All interactive elements: keyboard accessible + focus-visible outline
- Never convey info by color alone

---

## Basic Patterns

### 1. Input Form
User data collection with validation.

```tsx
import { TextInput, Select, Checkbox, Button } from "krds-community-react";

function ApplicationForm() {
  return (
    <form>
      <TextInput label="이름" placeholder="홍길동" hint="실명을 입력해 주세요" />
      <TextInput label="연락처" placeholder="010-0000-0000" type="tel" />
      <Select
        label="신청 유형"
        options={[
          { value: "new", label: "신규 신청" },
          { value: "change", label: "변경 신청" },
        ]}
      />
      <Checkbox label="개인정보 수집·이용에 동의합니다" />
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <Button variant="tertiary">취소</Button>
        <Button variant="primary">제출</Button>
      </div>
    </form>
  );
}
```
- Labels above inputs, required fields marked with `*`
- Error messages below field in red
- Submit button right-aligned, Primary variant

### 2. List Navigation
Browse and paginate data items.

```tsx
import { StructuredList, Pagination, PaginationItem, PaginationNav, Badge, Select } from "krds-community-react";

function ListPage() {
  return (
    <div>
      <Select options={[{ value: "latest", label: "최신순" }, { value: "popular", label: "인기순" }]} />
      <StructuredList>{/* items */}</StructuredList>
      <Pagination>
        <PaginationNav direction="prev" href="#" />
        <PaginationItem href="#" active>1</PaginationItem>
        <PaginationItem href="#">2</PaginationItem>
        <PaginationItem href="#">3</PaginationItem>
        <PaginationNav direction="next" href="#" />
      </Pagination>
    </div>
  );
}
```

### 3. Confirmation Dialog
Verify irreversible actions.

```tsx
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalClose, Button } from "krds-community-react";

function DeleteConfirm() {
  return (
    <Modal>
      <ModalTrigger render={<Button variant="tertiary">삭제</Button>} />
      <ModalContent>
        <ModalHeader>삭제 확인</ModalHeader>
        <ModalBody>선택한 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium tertiary">취소</ModalClose>
          <Button variant="primary" size="medium">삭제</Button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  );
}
```
- Always provide cancel option
- Clearly explain consequences

### 4. Consent
Terms agreement with expandable details.

```tsx
import { Checkbox, Accordion, AccordionItem, AccordionTrigger, AccordionPanel, Button } from "krds-community-react";

function ConsentForm() {
  return (
    <div>
      <Checkbox label="전체 동의" />
      <Accordion variant="line">
        <AccordionItem value="terms">
          <AccordionTrigger>이용약관 동의 (필수)</AccordionTrigger>
          <AccordionPanel>약관 전문...</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger>개인정보 수집·이용 동의 (필수)</AccordionTrigger>
          <AccordionPanel>개인정보 처리방침...</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button variant="primary" fullWidth>동의하고 계속</Button>
    </div>
  );
}
```

### 5. Error
Communicate failures and guide resolution.

```tsx
import { CriticalAlert, Button, Link } from "krds-community-react";

function ErrorPage() {
  return (
    <CriticalAlert variant="danger" title="서비스 오류">
      요청하신 페이지를 처리할 수 없습니다. 잠시 후 다시 시도해 주세요.
      <Link href="/">홈으로 돌아가기</Link>
    </CriticalAlert>
  );
}
```

### 6. Help
Progressive disclosure of guidance.

```tsx
import { Tooltip, ContextualHelp, Button } from "krds-community-react";

function HelpExample() {
  return (
    <div>
      <Tooltip content="주민등록번호 13자리를 입력합니다" side="top">
        <Button variant="text">도움말</Button>
      </Tooltip>
      <ContextualHelp title="신청 방법" content="온라인 또는 방문 신청이 가능합니다." />
    </div>
  );
}
```

### 7. Filtering & Sorting
Narrow down data by attributes.

```tsx
import { Select, Checkbox, Tag, TagGroup, Button } from "krds-community-react";

function FilterPanel() {
  return (
    <div>
      <Select options={[{ value: "all", label: "전체" }, { value: "progress", label: "처리중" }]} />
      <Checkbox label="긴급 건만 보기" />
      <TagGroup>
        <Tag removable onRemove={() => {}}>서울</Tag>
        <Tag removable onRemove={() => {}}>2024년</Tag>
      </TagGroup>
    </div>
  );
}
```

### 8-11. Other Patterns
- **Personal Info Input**: TextInput + Select + StepIndicator — explain why info is needed
- **User Feedback**: Radio + Textarea + Button — non-mandatory, don't interrupt flow
- **Detail View**: Breadcrumb + Tab + Table + Badge — clear structure matching expectations
- **File Attachment**: FileUpload + StructuredList + Spinner — show progress, clear errors

---

## Service Patterns

### 1. Visit (Landing Page)
First contact with the service. Must be clear without context.

```tsx
import { Masthead, Header, SkipLink, Breadcrumb, BreadcrumbItem, Footer, Identifier } from "krds-community-react";

function ServicePage({ children }) {
  return (
    <>
      <SkipLink targetId="main-content" />
      <Masthead />
      <Header title="정부24" />
      <Breadcrumb>
        <BreadcrumbItem home href="/">홈</BreadcrumbItem>
        <BreadcrumbItem href="/services">서비스</BreadcrumbItem>
        <BreadcrumbItem current>민원 신청</BreadcrumbItem>
      </Breadcrumb>
      <main id="main-content">{children}</main>
      <Footer>
        <Identifier org="행정안전부" />
      </Footer>
    </>
  );
}
```

### 2. Search
Find information in large datasets.

```tsx
import { TextInput, Button, StructuredList, Pagination, Badge } from "krds-community-react";

function SearchPage() {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <TextInput placeholder="검색어를 입력하세요" />
        <Button variant="primary">검색</Button>
      </div>
      <p>총 <strong>128</strong>건</p>
      <StructuredList>{/* results with Badge */}</StructuredList>
      <Pagination>{/* pages */}</Pagination>
    </div>
  );
}
```

### 3. Login
Identity verification for personalized access.

```tsx
import { Tabs, TabList, Tab, TabPanel, TextInput, Button, Checkbox, Link } from "krds-community-react";

function LoginPage() {
  return (
    <Tabs defaultValue="id">
      <TabList fullWidth>
        <Tab value="id">아이디 로그인</Tab>
        <Tab value="cert">인증서 로그인</Tab>
      </TabList>
      <TabPanel value="id">
        <TextInput label="아이디" />
        <TextInput label="비밀번호" type="password" />
        <Checkbox label="아이디 저장" />
        <Button variant="primary" fullWidth>로그인</Button>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/find-id">아이디 찾기</Link>
          <Link href="/find-pw">비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      </TabPanel>
      <TabPanel value="cert">
        <Button variant="secondary" fullWidth>공동인증서 로그인</Button>
        <Button variant="secondary" fullWidth>간편인증 로그인</Button>
      </TabPanel>
    </Tabs>
  );
}
```

### 4. Application (Multi-step Form)
Submit structured data through guided steps.

```tsx
import { StepIndicator, StepItem, TextInput, DateInput, FileUpload, Button } from "krds-community-react";

function ApplicationFlow() {
  return (
    <div>
      <StepIndicator>
        <StepItem step="1단계" title="유의사항" status="done" />
        <StepItem step="2단계" title="신청인 정보" status="active" />
        <StepItem step="3단계" title="서류 첨부" status="pending" />
        <StepItem step="4단계" title="완료" status="pending" />
      </StepIndicator>
      <TextInput label="성명" />
      <DateInput label="생년월일" />
      <TextInput label="연락처" placeholder="010-0000-0000" />
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <Button variant="tertiary">이전</Button>
        <Button variant="primary">다음 단계</Button>
      </div>
    </div>
  );
}
```

### 5. Policy Information
Browse official government policies and guidelines.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel, Tab, Tabs, TabList, TabPanel, InPageNavigation, Table } from "krds-community-react";

function PolicyPage() {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <main>
        <Tabs defaultValue="overview">
          <TabList>
            <Tab value="overview">개요</Tab>
            <Tab value="details">세부내용</Tab>
            <Tab value="faq">FAQ</Tab>
          </TabList>
          <TabPanel value="overview"><Table>{/* policy data */}</Table></TabPanel>
          <TabPanel value="details">...</TabPanel>
          <TabPanel value="faq">
            <Accordion>
              <AccordionItem value="q1">
                <AccordionTrigger>신청 자격은?</AccordionTrigger>
                <AccordionPanel>대한민국 국민 누구나 신청 가능합니다.</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
        </Tabs>
      </main>
      <aside><InPageNavigation>{/* TOC */}</InPageNavigation></aside>
    </div>
  );
}
```

---

## Component Composition Rules

### Button Hierarchy
| Level | Variant | Use | Per Page |
|-------|---------|-----|----------|
| 1 | `primary` | Most important action (submit, confirm) | 1-2 |
| 2 | `secondary` | Supporting action (cancel, back) | As needed |
| 3 | `tertiary` | Low emphasis (more, close) | As needed |
| 4 | `text` | Inline action (download, share) | As needed |

### Form Layout
- Label above input (never inline)
- Required: mark with `*` in label
- Error: red message below field + red border
- Hint: gray text below field
- Submit: bottom-right, Primary
- Cancel: left of submit, Tertiary

### Modal Rules
- Only for immediate attention needs
- Single task or confirmation only
- Complex forms → separate page
- Always: close button (X) + cancel option
- Escape key closes

### Navigation Stack
```
Masthead        → Government official banner (required)
Header          → Logo + search + main menu
Breadcrumb      → Current location
[SideNavigation]→ Sub-page nav (optional)
main            → Content area
[InPageNavigation] → Long page TOC (optional)
Footer          → Org info + links
```

---

## Responsive Behavior

Breakpoint: **767px** (PC ↔ Mobile)

| Element | PC | Mobile |
|---------|----|----|
| Display font | 60px | 44px |
| Heading large | 32px | 24px |
| Body | 17px | 17px (same) |
| Navigation | Full menu | Hamburger |
| Card grid | Multi-column | Single column |
| Side nav | Visible | Drawer |
| Touch targets | — | Min 48px |

---

## High Contrast Mode

Wrap with `<ThemeProvider mode="high-contrast">` to activate.

Changes:
- Canvas: #ffffff → #000000
- Text: dark grays → light grays (gray-5 ~ gray-20)
- Borders: 1px → 2px thickness
- Primary accent: same hue, surfaces use -95 tones
- Minimum contrast: 15:1 for body text

---

## Token Reference

All styling uses CSS custom properties from `--krds-*` namespace.
Key tokens:

| Token | Light | High Contrast |
|-------|-------|---------------|
| Primary | `--krds-color-light-primary-50` #256ef4 | same |
| Canvas | `--krds-light-color-background-white` #ffffff | #000000 |
| Text | `--krds-light-color-text-basic` #1e2124 | #f4f5f6 |
| Border | `--krds-light-color-border-gray-light` #cdd1d5 | #464c53 |
| Transition | `--krds-transition-base` .4s ease-in-out | same |
