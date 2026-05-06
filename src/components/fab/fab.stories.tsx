import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAB } from "./index";
import "./fab.css";

/**
 * ## 플로팅 액션 버튼 (FAB)
 *
 * 화면 위에 떠 있는 원형 버튼으로, 페이지에서 가장 중요한 단일 액션을 제공합니다.
 * 주로 화면 우하단에 고정 배치됩니다.
 *
 * ### 사용 규칙
 * - 페이지당 1개만 사용합니다
 * - 가장 빈번하거나 중요한 액션에만 사용합니다 (글쓰기, 문의하기 등)
 * - 아이콘만으로 기능을 직관적으로 전달할 수 있어야 합니다
 * - 스크롤 시에도 항상 보이는 위치에 고정합니다
 *
 * ### 접근성
 * - `aria-label`로 버튼의 기능을 설명합니다
 * - 시각적으로 숨겨진 텍스트(`sr-only`)가 함께 제공됩니다
 * - 아이콘에 `aria-hidden="true"`가 적용됩니다
 */
const meta: Meta<typeof FAB> = {
  title: "Components/FAB",
  component: FAB,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "아이콘 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    label: {
      control: "text",
      description: "접근성 라벨 (sr-only 텍스트)",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼 크기",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "small | medium | large" },
      },
    },
  },
  args: {
    icon: "+",
    label: "새 글 작성",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof FAB>;

/** 기본 FAB */
export const Default: Story = {};

/** 모든 크기 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <FAB icon="+" label="작성" size="small" />
      <FAB icon="+" label="작성" size="medium" />
      <FAB icon="+" label="작성" size="large" />
    </div>
  ),
};

/** 다양한 아이콘 */
export const IconVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <FAB icon="+" label="새 글 작성" />
      <FAB icon="↑" label="맨 위로" />
      <FAB
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 5l8 5 8-5M2 5v10l8 5 8-5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        label="문의하기"
      />
    </div>
  ),
};

/** 실제 배치 예시 */
export const FixedPosition: Story = {
  render: () => (
    <div style={{ position: "relative", height: "300px", border: "1px solid #e5e5e5", borderRadius: "8px", overflow: "hidden" }}>
      <div style={{ padding: "16px" }}>
        <p style={{ color: "#666", fontSize: "14px" }}>페이지 콘텐츠 영역</p>
        <p style={{ color: "#999", fontSize: "13px", marginTop: "8px" }}>FAB는 우하단에 고정 배치됩니다.</p>
      </div>
      <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
        <FAB icon="+" label="새 글 작성" size="large" />
      </div>
    </div>
  ),
};
