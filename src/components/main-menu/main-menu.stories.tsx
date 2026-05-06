import type { Meta, StoryObj } from "@storybook/react-vite";
import { MainMenu } from "./index";
import "./main-menu.css";

/**
 * ## 메인 메뉴 (Main Menu)
 *
 * 사이트의 주요 네비게이션을 제공하는 메뉴 컴포넌트입니다.
 * 1~2단계 계층 구조를 지원하며, 모바일에서는 슬라이드 메뉴로 전환됩니다.
 *
 * ### 사용 규칙
 * - 최상위 메뉴 항목은 5~8개를 권장합니다
 * - 하위 메뉴는 1단계까지만 사용합니다
 * - 현재 페이지를 시각적으로 강조합니다
 * - 모바일에서는 햄버거 메뉴와 함께 사용합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label="메인 메뉴"` 적용
 * - 하위 메뉴 토글에 `aria-expanded` 상태 관리
 * - 현재 페이지에 `aria-current="page"` 적용
 * - 키보드로 모든 메뉴 항목에 접근 가능
 */
const meta: Meta<typeof MainMenu> = {
  title: "Components/MainMenu",
  component: MainMenu,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "메뉴 항목 목록",
      table: {
        type: { summary: "MainMenuItem[]" },
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
    mobileOpen: {
      control: "boolean",
      description: "모바일 메뉴 열림 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onMobileClose: {
      action: "mobileClose",
      description: "모바일 메뉴 닫기 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    items: [
      { id: "home", label: "홈", href: "/" },
      { id: "services", label: "서비스", href: "/services" },
      { id: "civil", label: "민원", href: "/civil" },
      { id: "notice", label: "공지사항", href: "/notice" },
    ],
    activeId: "home",
    mobileOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof MainMenu>;

/** 기본 메인 메뉴 */
export const Default: Story = {};

/** 하위 메뉴 포함 */
export const WithSubMenu: Story = {
  args: {
    items: [
      { id: "home", label: "홈", href: "/" },
      {
        id: "services",
        label: "정부서비스",
        children: [
          { id: "welfare", label: "복지", href: "/services/welfare" },
          { id: "tax", label: "세금", href: "/services/tax" },
          { id: "housing", label: "주거", href: "/services/housing" },
        ],
      },
      {
        id: "civil",
        label: "민원",
        children: [
          { id: "apply", label: "민원 신청", href: "/civil/apply" },
          { id: "status", label: "처리 현황", href: "/civil/status" },
        ],
      },
      { id: "notice", label: "공지사항", href: "/notice" },
      { id: "faq", label: "자주 묻는 질문", href: "/faq" },
    ],
    activeId: "welfare",
  },
};

/** 모바일 메뉴 열림 */
export const MobileOpen: Story = {
  args: {
    items: [
      { id: "home", label: "홈", href: "/" },
      {
        id: "services",
        label: "정부서비스",
        children: [
          { id: "welfare", label: "복지", href: "/services/welfare" },
          { id: "tax", label: "세금", href: "/services/tax" },
        ],
      },
      { id: "civil", label: "민원", href: "/civil" },
      { id: "notice", label: "공지사항", href: "/notice" },
    ],
    activeId: "home",
    mobileOpen: true,
  },
};

/** 많은 메뉴 항목 */
export const ManyItems: Story = {
  args: {
    items: [
      { id: "home", label: "홈", href: "/" },
      { id: "intro", label: "기관소개", href: "/intro" },
      { id: "policy", label: "정책정보", href: "/policy" },
      { id: "services", label: "서비스", href: "/services" },
      { id: "participation", label: "참여소통", href: "/participation" },
      { id: "news", label: "소식", href: "/news" },
      { id: "data", label: "자료실", href: "/data" },
    ],
    activeId: "policy",
  },
};
