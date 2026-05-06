import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./index";
import "./tooltip.css";

/**
 * ## 툴팁 (Tooltip)
 *
 * 요소에 마우스를 올리거나 포커스할 때 추가 정보를 표시하는 컴포넌트입니다.
 * 간단한 설명이나 라벨을 제공할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 짧은 텍스트(1~2문장)만 표시합니다
 * - 중요한 정보는 툴팁이 아닌 화면에 직접 표시합니다
 * - 인터랙티브 요소(링크, 버튼)는 툴팁 안에 넣지 않습니다
 * - 모바일에서는 터치로 표시됩니다
 *
 * ### 접근성
 * - 트리거 요소에 포커스 시 툴팁이 표시됩니다
 * - ESC 키로 툴팁을 닫을 수 있습니다
 * - 툴팁 내용이 스크린리더에 전달됩니다
 */
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "툴팁 내용",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "표시 위치",
      table: {
        defaultValue: { summary: "top" },
        type: { summary: "top | bottom | left | right" },
      },
    },
    children: {
      description: "트리거 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    content: "추가 정보를 표시합니다",
    side: "top",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/** 기본 툴팁 */
export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <Tooltip content={args.content} side={args.side}>
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
          마우스를 올려보세요
        </button>
      </Tooltip>
    </div>
  ),
};

/** 다양한 위치 */
export const Positions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", padding: "80px", justifyContent: "center", flexWrap: "wrap" }}>
      <Tooltip content="위쪽 툴팁" side="top">
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px" }}>상단</button>
      </Tooltip>
      <Tooltip content="아래쪽 툴팁" side="bottom">
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px" }}>하단</button>
      </Tooltip>
      <Tooltip content="왼쪽 툴팁" side="left">
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px" }}>좌측</button>
      </Tooltip>
      <Tooltip content="오른쪽 툴팁" side="right">
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px" }}>우측</button>
      </Tooltip>
    </div>
  ),
};

/** 아이콘 버튼에 사용 */
export const OnIconButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", padding: "40px" }}>
      <Tooltip content="수정" side="bottom">
        <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>✏️</button>
      </Tooltip>
      <Tooltip content="삭제" side="bottom">
        <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>🗑️</button>
      </Tooltip>
      <Tooltip content="공유" side="bottom">
        <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>📤</button>
      </Tooltip>
    </div>
  ),
};

/** 긴 텍스트 */
export const LongContent: Story = {
  render: () => (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <Tooltip content="이 버튼을 클릭하면 작성 중인 내용이 임시 저장됩니다. 나중에 이어서 작성할 수 있습니다." side="bottom">
        <button type="button" style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
          임시 저장
        </button>
      </Tooltip>
    </div>
  ),
};
