import type { Meta, StoryObj } from "@storybook/react-vite";
import { InPageNavigation } from "./index";
import "./in-page-navigation.css";

/**
 * ## 페이지 내 네비게이션 (In-Page Navigation)
 *
 * 긴 페이지에서 섹션 간 빠르게 이동할 수 있는 목차형 네비게이션입니다.
 * 주로 페이지 좌측에 고정 배치되어 현재 위치를 표시합니다.
 *
 * ### 사용 규칙
 * - 3개 이상의 섹션이 있는 긴 페이지에서 사용합니다
 * - 항목 수는 3~8개를 권장합니다
 * - 현재 보고 있는 섹션을 시각적으로 강조합니다
 * - 스크롤 시 고정(sticky) 배치를 권장합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label`이 적용됩니다
 * - 현재 위치에 `aria-current="location"`이 적용됩니다
 * - 앵커 링크로 키보드 네비게이션이 가능합니다
 */
const meta: Meta<typeof InPageNavigation> = {
  title: "Components/InPageNavigation",
  component: InPageNavigation,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "네비게이션 항목 목록",
      table: {
        type: { summary: "InPageNavigationItem[]" },
      },
    },
    activeId: {
      control: "text",
      description: "현재 활성 항목 ID",
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      control: "text",
      description: "네비게이션 제목",
      table: {
        defaultValue: { summary: "목차" },
        type: { summary: "string" },
      },
    },
    stickyOffset: {
      control: "text",
      description: "상단 고정 오프셋",
      table: {
        defaultValue: { summary: "0" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    items: [
      { id: "overview", label: "개요", href: "#overview" },
      { id: "usage", label: "사용 방법", href: "#usage" },
      { id: "examples", label: "예시", href: "#examples" },
      { id: "api", label: "API 참조", href: "#api" },
    ],
    activeId: "overview",
    title: "목차",
  },
};

export default meta;
type Story = StoryObj<typeof InPageNavigation>;

/** 기본 페이지 내 네비게이션 */
export const Default: Story = {};

/** 중간 항목 활성 */
export const MiddleActive: Story = {
  args: {
    activeId: "examples",
  },
};

/** 많은 항목 */
export const ManyItems: Story = {
  args: {
    items: [
      { id: "intro", label: "소개", href: "#intro" },
      { id: "eligibility", label: "신청 자격", href: "#eligibility" },
      { id: "documents", label: "필요 서류", href: "#documents" },
      { id: "process", label: "신청 절차", href: "#process" },
      { id: "period", label: "처리 기간", href: "#period" },
      { id: "fees", label: "수수료", href: "#fees" },
      { id: "faq", label: "자주 묻는 질문", href: "#faq" },
      { id: "contact", label: "문의처", href: "#contact" },
    ],
    activeId: "process",
    title: "민원 안내",
  },
};

/** 페이지 레이아웃 예시 */
export const WithContent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <InPageNavigation
        items={[
          { id: "section1", label: "서비스 소개", href: "#section1" },
          { id: "section2", label: "이용 방법", href: "#section2" },
          { id: "section3", label: "유의사항", href: "#section3" },
        ]}
        activeId="section2"
        title="페이지 목차"
      />
      <div style={{ flex: 1, fontSize: "14px", lineHeight: 1.8 }}>
        <h2 id="section1" style={{ fontSize: "18px", marginBottom: "8px" }}>서비스 소개</h2>
        <p>전자정부 서비스에 대한 소개 내용입니다.</p>
        <h2 id="section2" style={{ fontSize: "18px", marginTop: "24px", marginBottom: "8px" }}>이용 방법</h2>
        <p>서비스 이용 방법에 대한 상세 안내입니다.</p>
        <h2 id="section3" style={{ fontSize: "18px", marginTop: "24px", marginBottom: "8px" }}>유의사항</h2>
        <p>서비스 이용 시 유의사항입니다.</p>
      </div>
    </div>
  ),
};
