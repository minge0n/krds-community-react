import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideNavigation } from "./index";
import "./side-navigation.css";

/**
 * ## 사이드 네비게이션 (Side Navigation)
 *
 * 페이지 좌측에 배치되는 계층형 네비게이션 메뉴입니다.
 * 서브 페이지 간 이동을 위한 2차 네비게이션으로 사용합니다.
 *
 * ### 사용 규칙
 * - 3개 이상의 하위 페이지가 있는 섹션에서 사용합니다
 * - 최대 2단계 깊이까지 지원합니다
 * - 현재 페이지를 시각적으로 강조합니다
 * - 하위 메뉴는 펼침/접힘이 가능합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label`이 적용됩니다
 * - 하위 메뉴 토글에 `aria-expanded` 상태 관리
 * - 현재 페이지에 `aria-current="page"` 적용
 * - 키보드로 모든 항목에 접근 가능
 */
const meta: Meta<typeof SideNavigation> = {
  title: "Components/SideNavigation",
  component: SideNavigation,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "네비게이션 항목 목록",
      table: {
        type: { summary: "SideNavigationItem[]" },
      },
    },
    title: {
      control: "text",
      description: "네비게이션 제목",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    activeId: {
      control: "text",
      description: "현재 활성 항목 ID",
      table: {
        type: { summary: "string" },
      },
    },
    onItemClick: {
      action: "itemClicked",
      description: "항목 클릭 핸들러",
      table: {
        type: { summary: "(id: string, href?: string) => void" },
      },
    },
  },
  args: {
    title: "서비스 안내",
    items: [
      { id: "overview", label: "개요", href: "/overview" },
      { id: "apply", label: "신청 방법", href: "/apply" },
      { id: "documents", label: "필요 서류", href: "/documents" },
      { id: "faq", label: "자주 묻는 질문", href: "/faq" },
    ],
    activeId: "overview",
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

/** 기본 사이드 네비게이션 */
export const Default: Story = {};

/** 하위 메뉴 포함 */
export const WithSubItems: Story = {
  args: {
    title: "민원 서비스",
    items: [
      { id: "home", label: "민원 홈", href: "/civil" },
      {
        id: "apply",
        label: "민원 신청",
        children: [
          { id: "apply-online", label: "온라인 신청", href: "/civil/apply/online" },
          { id: "apply-visit", label: "방문 신청", href: "/civil/apply/visit" },
          { id: "apply-mail", label: "우편 신청", href: "/civil/apply/mail" },
        ],
      },
      {
        id: "status",
        label: "처리 현황",
        children: [
          { id: "status-progress", label: "진행 중", href: "/civil/status/progress" },
          { id: "status-done", label: "처리 완료", href: "/civil/status/done" },
        ],
      },
      { id: "guide", label: "이용 안내", href: "/civil/guide" },
    ],
    activeId: "apply-online",
  },
};

/** 제목 없는 네비게이션 */
export const WithoutTitle: Story = {
  args: {
    title: undefined,
    items: [
      { id: "intro", label: "기관 소개", href: "/intro" },
      { id: "org", label: "조직도", href: "/org" },
      { id: "history", label: "연혁", href: "/history" },
      { id: "location", label: "오시는 길", href: "/location" },
    ],
    activeId: "org",
  },
};

/** 페이지 레이아웃 예시 */
export const InPageLayout: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <div style={{ width: "240px" }}>
        <SideNavigation
          title="복지 서비스"
          items={[
            { id: "child", label: "아동복지", href: "/welfare/child" },
            { id: "elder", label: "노인복지", href: "/welfare/elder" },
            { id: "disabled", label: "장애인복지", href: "/welfare/disabled" },
            { id: "basic", label: "기초생활보장", href: "/welfare/basic" },
          ]}
          activeId="child"
        />
      </div>
      <div style={{ flex: 1, padding: "16px", fontSize: "14px", lineHeight: 1.8 }}>
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>아동복지</h2>
        <p>아동복지 서비스에 대한 상세 내용이 표시되는 영역입니다.</p>
      </div>
    </div>
  ),
};
