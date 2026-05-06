import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabBar } from "./index";
import "./tab-bar.css";

/**
 * ## 탭 바 (Tab Bar)
 *
 * 모바일 앱 하단에 고정되는 네비게이션 바입니다.
 * 주요 섹션 간 빠른 이동을 위한 아이콘+라벨 형태의 탭을 제공합니다.
 *
 * ### 사용 규칙
 * - 3~5개의 탭을 제공합니다
 * - 각 탭에 아이콘과 라벨을 함께 표시합니다
 * - 현재 활성 탭을 시각적으로 강조합니다
 * - 화면 하단에 고정 배치합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label="탭 내비게이션"` 적용
 * - `role="tablist"`로 탭 목록임을 명시합니다
 * - 각 탭에 `role="tab"`, `aria-selected` 적용
 * - 활성 탭에 `aria-current="page"` 적용
 */
const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "탭 항목 목록",
      table: {
        type: { summary: "TabBarItem[]" },
      },
    },
  },
  args: {
    items: [
      { icon: "🏠", label: "홈", href: "/", active: true },
      { icon: "📋", label: "서비스", href: "/services", active: false },
      { icon: "📝", label: "민원", href: "/civil", active: false },
      { icon: "🔔", label: "알림", href: "/notifications", active: false },
      { icon: "👤", label: "내 정보", href: "/mypage", active: false },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

/** 기본 탭 바 */
export const Default: Story = {};

/** 서비스 탭 활성 */
export const ServiceActive: Story = {
  args: {
    items: [
      { icon: "🏠", label: "홈", href: "/", active: false },
      { icon: "📋", label: "서비스", href: "/services", active: true },
      { icon: "📝", label: "민원", href: "/civil", active: false },
      { icon: "🔔", label: "알림", href: "/notifications", active: false },
      { icon: "👤", label: "내 정보", href: "/mypage", active: false },
    ],
  },
};

/** 3개 탭 */
export const ThreeTabs: Story = {
  args: {
    items: [
      { icon: "🏠", label: "홈", href: "/", active: true },
      { icon: "🔍", label: "검색", href: "/search", active: false },
      { icon: "👤", label: "내 정보", href: "/mypage", active: false },
    ],
  },
};

/** SVG 아이콘 사용 */
export const WithSvgIcons: Story = {
  args: {
    items: [
      {
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10l7-7 7 7M5 8v8h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        label: "홈",
        href: "/",
        active: true,
      },
      {
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
        label: "검색",
        href: "/search",
        active: false,
      },
      {
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a5 5 0 015 5v3l2 2H3l2-2V7a5 5 0 015-5zM8 15a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        label: "알림",
        href: "/notifications",
        active: false,
      },
      {
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M3 18c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
        label: "내 정보",
        href: "/mypage",
        active: false,
      },
    ],
  },
};

/** 모바일 화면 배치 예시 */
export const InMobileLayout: Story = {
  render: () => (
    <div style={{ position: "relative", width: "375px", height: "667px", border: "1px solid #e5e5e5", borderRadius: "16px", overflow: "hidden" }}>
      <div style={{ padding: "16px", height: "calc(100% - 60px)", overflow: "auto" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>홈</h2>
        <p style={{ fontSize: "14px", color: "#666" }}>페이지 콘텐츠 영역</p>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <TabBar
          items={[
            { icon: "🏠", label: "홈", href: "/", active: true },
            { icon: "📋", label: "서비스", href: "/services", active: false },
            { icon: "📝", label: "민원", href: "/civil", active: false },
            { icon: "👤", label: "내 정보", href: "/mypage", active: false },
          ]}
        />
      </div>
    </div>
  ),
};
