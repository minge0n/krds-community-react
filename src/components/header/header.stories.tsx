import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./index";
import "./header.css";

/**
 * ## 헤더 (Header)
 *
 * 페이지 상단에 위치하는 글로벌 네비게이션 영역입니다.
 * 로고, 제목, 메뉴, 검색, 로그인 등 주요 기능에 대한 접근점을 제공합니다.
 *
 * ### 사용 규칙
 * - 모든 페이지에 일관되게 표시합니다
 * - 로고는 항상 좌측에 배치합니다
 * - 주요 네비게이션은 중앙 또는 로고 우측에 배치합니다
 * - 모바일에서는 햄버거 메뉴로 전환합니다
 *
 * ### 접근성
 * - `<header>` 시맨틱 요소를 사용합니다
 * - 스킵 네비게이션과 함께 사용하는 것을 권장합니다
 * - 모바일 메뉴 토글에 적절한 `aria-label`을 제공합니다
 */
const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: "text",
      description: "로고 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    title: {
      control: "text",
      description: "사이트 제목",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    nav: {
      control: "text",
      description: "네비게이션 영역",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    actions: {
      control: "text",
      description: "우측 액션 영역 (검색, 로그인 등)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    menuToggle: {
      control: "text",
      description: "모바일 메뉴 토글 버튼",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    title: "전자정부 서비스",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

/** 기본 헤더 */
export const Default: Story = {
  args: {
    logo: <span style={{ fontWeight: 700, fontSize: "18px" }}>KRDS</span>,
    title: "전자정부 서비스",
  },
};

/** 네비게이션 포함 */
export const WithNavigation: Story = {
  render: () => (
    <Header
      logo={<span style={{ fontWeight: 700, fontSize: "18px" }}>KRDS</span>}
      title="행정안전부"
      nav={
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>소개</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>서비스</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>민원</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>알림</a></li>
        </ul>
      }
    />
  ),
};

/** 액션 버튼 포함 */
export const WithActions: Story = {
  render: () => (
    <Header
      logo={<span style={{ fontWeight: 700, fontSize: "18px" }}>KRDS</span>}
      title="전자정부 서비스"
      actions={
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button type="button" style={{ border: "none", background: "none", cursor: "pointer" }}>검색</button>
          <button type="button" style={{ border: "none", background: "none", cursor: "pointer" }}>로그인</button>
        </div>
      }
    />
  ),
};

/** 모바일 메뉴 토글 포함 */
export const WithMenuToggle: Story = {
  render: () => (
    <Header
      logo={<span style={{ fontWeight: 700, fontSize: "18px" }}>KRDS</span>}
      title="모바일 서비스"
      menuToggle={
        <button type="button" aria-label="메뉴 열기" style={{ border: "none", background: "none", fontSize: "20px", cursor: "pointer" }}>
          ☰
        </button>
      }
      actions={
        <button type="button" style={{ border: "none", background: "none", cursor: "pointer" }}>검색</button>
      }
    />
  ),
};

/** 전체 구성 */
export const FullHeader: Story = {
  render: () => (
    <Header
      logo={<span style={{ fontWeight: 700, fontSize: "18px", color: "#1a56db" }}>GOV.KR</span>}
      title="대한민국 정부"
      nav={
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0, fontSize: "14px" }}>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}>정부서비스</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>정책정보</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>참여소통</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit" }}>정부소식</a></li>
        </ul>
      }
      actions={
        <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "14px" }}>
          <button type="button" style={{ border: "none", background: "none", cursor: "pointer" }}>🔍</button>
          <button type="button" style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "4px 12px", background: "none", cursor: "pointer" }}>로그인</button>
        </div>
      }
    />
  ),
};
