import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";
import "./button.css";

/**
 * ## 버튼 (Button)
 *
 * 어떤 기능이나 동작을 실행하거나 기능을 사용하기 위한 상태로 변경하는 요소입니다.
 *
 * ### 사용 규칙
 * - **Primary**: 페이지당 1~2개. 가장 중요한 액션 (제출, 확인, 신청)
 * - **Secondary**: 보조 액션 (취소, 이전)
 * - **Tertiary**: 저강조 (더보기, 닫기)
 * - **Text**: 인라인 액션 (파일 다운로드, 공유)
 *
 * ### 접근성
 * - `disabled` 시 `aria-disabled` 자동 적용
 * - 아이콘 전용 버튼은 `children`으로 스크린리더 라벨 제공
 * - `:focus-visible` 아웃라인 자동 표시
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "text"],
      description: "버튼 스타일 변형",
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "primary | secondary | tertiary | text" },
      },
    },
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      description: "버튼 크기 (높이: xsmall 2.8rem ~ xlarge 6.4rem)",
      table: {
        defaultValue: { summary: "large" },
        type: { summary: "xsmall | small | medium | large | xlarge" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
      table: { defaultValue: { summary: "false" } },
    },
    fullWidth: {
      control: "boolean",
      description: "전체 너비 (width: 100%)",
      table: { defaultValue: { summary: "false" } },
    },
    iconOnly: {
      control: "boolean",
      description: "아이콘 전용 (텍스트 숨김)",
      table: { defaultValue: { summary: "false" } },
    },
    children: {
      control: "text",
      description: "버튼 라벨",
    },
  },
  args: {
    variant: "primary",
    size: "large",
    disabled: false,
    fullWidth: false,
    children: "버튼",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/** 기본 Primary 버튼 */
export const Default: Story = {};

/** 모든 Variant */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

/** 모든 Size */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button size="xsmall">XSmall</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
    </div>
  ),
};

/** 비활성화 상태 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="text" disabled>Text</Button>
    </div>
  ),
};

/** 전체 너비 */
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "320px" }}>
      <Button variant="primary" fullWidth>전체 너비 버튼</Button>
    </div>
  ),
};

/** Variant × Size 매트릭스 */
export const Matrix: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {(["primary", "secondary", "tertiary", "text"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "80px", fontSize: "12px", color: "#666" }}>{variant}</span>
          {(["xsmall", "small", "medium", "large", "xlarge"] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** 버튼 그룹 (실제 사용 예시) */
export const ButtonGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <Button variant="tertiary" size="medium">취소</Button>
      <Button variant="primary" size="medium">저장</Button>
    </div>
  ),
};
