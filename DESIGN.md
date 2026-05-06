# DESIGN.md — KRDS React Pattern Guide

이 문서는 AI 코딩 에이전트가 KRDS(Korea Design System) 기반 UI를 생성할 때 참조하는 패턴 가이드입니다.
토큰 값은 `src/styles/tokens.css`에, 컴포넌트 구현은 `src/components/`에 있습니다.

## Design Principles

### 색상 비율 (60-30-10)
- **60%** — 배경·중립색 (surface, background, text, icon, divider)
- **30%** — 세컨더리 (element, border, divider, action, icon)
- **10%** — 프라이머리 액션 (button, link, input active, icon primary)
- Accent(포인트)는 전체 화면의 **5% 이하**로 제한

### 접근성 (WCAG)
- Magic Number 40 = 3:1 (대형 텍스트, UI 요소)
- Magic Number 50 = 4.5:1 (일반 텍스트)
- Magic Number 70 = 7:1 (AAA 등급)
- Magic Number 90 = 15:1 (High Contrast 모드 본문)
- 색맹 고려: 빨강+초록 조합 금지, 색상+텍스트+아이콘 중복 전달

### 타이포그래피
- 서체: **Pretendard GOV** (CDN: `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css")`)
- 웨이트: Regular(400) + Bold(700) 만 사용
- 최소 본문 크기: 17px (Pretendard GOV는 타 폰트 대비 작게 보임)
- Line height: **150%** (모든 텍스트)
- Letter spacing: Display 계열만 1px, 나머지 0
- 단위: rem (62.5% 기준, 1rem = 10px)

### 형태 (Border Radius)
- 계산식: 컨테이너 높이 × 1/8, 짝수로 반올림, 최대 12px
- xsmall: 2px (인디케이터, 배지, 프로그레스바)
- small: 4px (태그, 칩, 체크박스, 라디오, 스위치)
- medium: 6px (버튼, 인풋, 텍스트에어리어, 셀렉트, 페이지네이션)
- large: 10px (카드, 다이얼로그)
- xlarge: 12px (배너, 바텀시트, 풀스크린)
- 50%: 원형 (프로필 이미지)

### 엘리베이션
- 보더 우선, 그림자는 기능적 용도에만
- elevation -1: gray10 배경
- elevation 0: gray0 (기본 캔버스)
- elevation +1: gray5 배경
- elevation +2: gray0 + 보더

---

## Basic Patterns (기본 패턴)

컴포넌트를 조합하여 핵심 과업을 수행하는 반복 UI 집합.

### 1. 개인 식별 정보 입력
사용자 본인 확인 및 기본 정보 입력.
- **조합**: TextInput + Select + Button(primary) + StepIndicator
- **규칙**: 왜 정보가 필요한지 명확히 설명, 최소한의 정보만 요청

### 2. 도움
UI 조작 방법, 이용 안내, 과업 흐름 정보 제공.
- **조합**: ContextualHelp + Tooltip + HelpPanel + CoachMark + TutorialPanel
- **규칙**: 사용자 숙련도에 따라 단계적 제공, 과업 흐름을 방해하지 않음

### 3. 동의
약관, 조건, 이해 확인.
- **조합**: Checkbox + Accordion + Button(primary) + Disclosure
- **규칙**: 복잡한 법적 내용을 구조화하여 명확하게 제시, 전체 동의 + 개별 동의

### 4. 목록 탐색
관련 데이터 항목을 연속 배열로 표시.
- **조합**: StructuredList + Pagination + Badge + Tag + Table
- **규칙**: 일관된 형식, 논리적 정렬, 쉬운 항목 발견

### 5. 사용자 피드백
페이지·기능·경험에 대한 사용자 의견 수집.
- **조합**: Radio + Textarea + Button(secondary) + Modal
- **규칙**: 비필수, 과업 흐름 방해 금지, 간결한 질문

### 6. 상세 정보 확인
특정 주제에 대한 상세 정보 제공.
- **조합**: Breadcrumb + Tab + Accordion + Table + Image + Badge
- **규칙**: 명확하고 간결한 정보, 사용자 기대에 부합하는 구조

### 7. 오류
시스템 실패·문제를 사용자에게 전달.
- **조합**: CriticalAlert + Modal + Button(primary) + Link
- **규칙**: 원인 설명 + 해결 방법 안내, 사용자가 의도한 행동을 완료할 수 있도록 유도

### 8. 입력 폼
서버 전송을 위한 사용자 데이터 입력.
- **조합**: TextInput + Textarea + Select + Checkbox + Radio + DateInput + FileUpload + Button(primary/tertiary) + StepIndicator
- **규칙**: 라벨 필수, 힌트 텍스트 제공, 에러 시 인라인 메시지, 필수 필드 표시

### 9. 첨부파일
게시물·문서에 첨부된 다운로드 콘텐츠.
- **조합**: FileUpload + StructuredList + Link + Spinner + Badge
- **규칙**: 파일 형식·크기 안내, 업로드 진행 상태 표시, 에러 시 명확한 안내

### 10. 필터링·정렬
사용자가 선택한 속성으로 데이터를 선별·정렬.
- **조합**: Select + Checkbox + Radio + Tag + Button(tertiary) + Table/StructuredList
- **규칙**: 검색 범위 축소, 정보 발견 시간 단축, 현재 필터 상태 명시

### 11. 확인
되돌릴 수 없는 결과를 가진 사용자 행동 확인.
- **조합**: Modal + Button(primary/tertiary) + CriticalAlert
- **규칙**: 행동의 결과를 명확히 설명, 취소 옵션 항상 제공

---

## Service Patterns (서비스 패턴)

핵심 과업에 대한 사용자 여정 기반 UX 설계 가이드. 각 패턴은 Do(필수) / Better(권장) / Best(우수) 3단계.

### 1. 방문
사용자가 디지털 서비스에 접속하여 원하는 정보에 연결.
- **핵심 컴포넌트**: Masthead + Header + MainMenu + Footer + SkipLink + Breadcrumb + Identifier
- **규칙**: 첫인상이 서비스 인식 결정, 명확하고 간결하게, 특정 맥락 없이 이해 가능해야 함

### 2. 검색
대량 데이터에서 원하는 정보 탐색.
- **핵심 컴포넌트**: TextInput + Button(primary) + StructuredList + Pagination + Tag + Badge + Select
- **규칙**: 탐색 범위 축소, 효율적 정보 발견, 네비게이션으로 못 찾을 때의 대안

### 3. 로그인
사용자 신원 확인 및 서비스 접근.
- **핵심 컴포넌트**: TextInput + Button(primary) + Link + Modal + Checkbox + Tab
- **규칙**: 개인화·신원 확인이 필요한 경우에만, 인증 수단 명확히 안내

### 4. 신청
사용자가 서비스 제공자에게 양식 제출.
- **핵심 컴포넌트**: StepIndicator + TextInput + Select + DateInput + FileUpload + Checkbox + Radio + Button(primary/tertiary) + Modal + Disclosure
- **규칙**: 단계별 진행, 중간 저장, 제출 전 확인, 완료 후 안내

### 5. 정책 정보 확인
정부·기관의 정책, 계획, 법적 정보 확인.
- **핵심 컴포넌트**: Accordion + Tab + Table + Breadcrumb + InPageNavigation + Link + Badge + TextList
- **규칙**: 공식 정보 접근, 구조화된 제시, 관련 문서 연결

---

## Component Usage Rules

### 버튼 계층
1. **Primary** — 페이지당 1~2개. 가장 중요한 액션.
2. **Secondary** — 보조 액션 (취소, 이전).
3. **Tertiary** — 저강조 (더보기, 닫기).
4. **Text** — 인라인 액션 (파일 다운로드, 공유).

### 모달 사용 조건
- 사용자의 즉각적 주의가 필요할 때만
- 단일 과업 또는 확인에만 사용
- 복잡한 폼은 모달이 아닌 별도 페이지로

### 폼 구성
- 라벨은 인풋 위에 배치
- 필수 필드는 `*` 표시
- 에러 메시지는 해당 필드 바로 아래에 빨간색으로
- 힌트 텍스트는 필드 아래에 회색으로
- 제출 버튼은 폼 하단 우측에 Primary

### 네비게이션 구조
- Masthead (최상단, 정부 공식 배너)
- Header (로고 + 검색 + 메인메뉴)
- Breadcrumb (현재 위치)
- SideNavigation (서브 페이지 탐색)
- InPageNavigation (긴 페이지 내 목차)
- Footer (추가 링크 + 기관 정보)

---

## High Contrast Mode (선명한 화면)

토큰 전환 규칙:
- 캔버스: white → black
- 텍스트: gray-90 → gray-5~10
- 보더: 두께 증가 (1px → 2px, 2px → 3px)
- 아이콘: gray-80 → gray-5
- 시스템 색상: -50 → -20 (밝게)
- 배경: -5 → -95 (어둡게)

구현: `<html class="high-contrast">` + CSS 변수 오버라이드.

---

## File Structure

```
src/
├── styles/
│   ├── base.css          # 폰트 선언, 리셋
│   ├── tokens.css        # KRDS CSS 커스텀 프로퍼티 (전체 토큰)
│   ├── index.css         # 모든 CSS import 엔트리
│   └── fonts/            # Pretendard GOV woff2
├── components/
│   ├── button/           # index.tsx + button.css
│   ├── accordion/        # index.tsx + accordion.css
│   └── ...               # 55개 컴포넌트
└── index.ts              # 패키지 엔트리 (모든 export)
```

## Iteration Guide

1. 컴포넌트는 `src/components/<name>/index.tsx` + `<name>.css` 쌍으로 생성
2. `"use client"` 지시어 필수 (Next.js 호환)
3. Base UI 헤드리스 컴포넌트 활용 가능한 경우 우선 사용
4. CSS는 KRDS 토큰 변수(`var(--krds-*)`) 사용, 하드코딩 금지
5. 모든 인터랙티브 요소에 `:focus-visible` 아웃라인 필수
6. 새 컴포넌트 추가 시 `src/styles/index.css`에 import 추가
7. 새 컴포넌트 추가 시 `src/index.ts`에 export 추가
8. 색상 비율 60-30-10 준수
9. border-radius는 컨테이너 높이 × 1/8 (짝수 반올림, 최대 12px)
10. 반응형: 767px 기준으로 PC/Mobile 토큰 전환
