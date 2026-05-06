import type { Meta, StoryObj } from "@storybook/react-vite";
import { Resize } from "./index";
import "./resize.css";

/**
 * ## 글자 크기 조절 (Resize)
 *
 * 페이지의 글자 크기를 작게/보통/크게로 변경할 수 있는 컴포넌트입니다.
 * 시력이 불편한 사용자를 위한 접근성 도구입니다.
 *
 * ### 사용 규칙
 * - 헤더 또는 유틸리티 영역에 배치합니다
 * - 3단계(작게/보통/크게)를 제공합니다
 * - 현재 선택된 크기를 시각적으로 강조합니다
 * - 선택한 크기는 세션 동안 유지합니다
 *
 * ### 접근성
 * - `role="group"`으로 버튼들을 그룹화합니다
 * - `aria-label="글자 크기 조절"`로 그룹 목적을 설명합니다
 * - 각 버튼에 `aria-pressed`로 현재 상태를 전달합니다
 * - 각 버튼에 `aria-label`로 크기 정보를 제공합니다
 */
const meta: Meta<typeof Resize> = {
  title: "Components/Resize",
  component: Resize,
  tags: ["autodocs"],
  argTypes: {
    currentSize: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "현재 글자 크기",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "small | medium | large" },
      },
    },
    onResize: {
      action: "resized",
      description: "크기 변경 핸들러",
      table: {
        type: { summary: "(size: ResizeLevel) => void" },
      },
    },
  },
  args: {
    currentSize: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Resize>;

/** 기본 (보통 크기) */
export const Default: Story = {};

/** 작게 선택 */
export const SmallSelected: Story = {
  args: {
    currentSize: "small",
  },
};

/** 크게 선택 */
export const LargeSelected: Story = {
  args: {
    currentSize: "large",
  },
};

/** 헤더 유틸리티 영역 배치 예시 */
export const InUtilityBar: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "16px", padding: "8px 16px", borderBottom: "1px solid #e5e5e5" }}>
      <span style={{ fontSize: "13px", color: "#666" }}>글자 크기</span>
      <Resize currentSize="medium" onResize={() => {}} />
    </div>
  ),
};
