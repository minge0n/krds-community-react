import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./index";
import "./badge.css";

/**
 * ## 배지 (Badge)
 *
 * 컴포넌트에 대한 빠른 인지와 탐색을 돕기 위해 표시되는 작은 문자 또는 숫자 데이터입니다.
 *
 * ### Variant 체계
 * - `outline-*`: 테두리만 있는 스타일
 * - `bg-*`: 배경색 채움 스타일
 * - `bg-light-*`: 연한 배경 + 진한 텍스트
 *
 * ### 색상 의미
 * - **primary**: 주요 정보
 * - **secondary**: 보조 정보
 * - **gray**: 중립 정보
 * - **point**: 강조
 * - **danger**: 위험/에러
 * - **warning**: 주의
 * - **success**: 성공/완료
 * - **information**: 안내
 */
const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "outline-primary", "outline-secondary", "outline-gray", "outline-point",
        "outline-danger", "outline-warning", "outline-success", "outline-information",
        "bg-primary", "bg-secondary", "bg-gray", "bg-point",
        "bg-danger", "bg-warning", "bg-success", "bg-information",
        "bg-light-primary", "bg-light-secondary", "bg-light-gray", "bg-light-point",
        "bg-light-danger", "bg-light-warning", "bg-light-success", "bg-light-information",
      ],
      description: "배지 스타일",
    },
    number: { control: "boolean", description: "숫자 배지" },
    children: { control: "text", description: "배지 텍스트" },
  },
  args: {
    variant: "bg-primary",
    children: "Label",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/** 기본 */
export const Default: Story = {};

/** Outline 변형 */
export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="outline-primary">Primary</Badge>
      <Badge variant="outline-secondary">Secondary</Badge>
      <Badge variant="outline-gray">Gray</Badge>
      <Badge variant="outline-point">Point</Badge>
      <Badge variant="outline-danger">Danger</Badge>
      <Badge variant="outline-warning">Warning</Badge>
      <Badge variant="outline-success">Success</Badge>
      <Badge variant="outline-information">Information</Badge>
      <Badge variant="outline-disabled">Disabled</Badge>
    </div>
  ),
};

/** 배경 채움 */
export const Filled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="bg-primary">Primary</Badge>
      <Badge variant="bg-secondary">Secondary</Badge>
      <Badge variant="bg-gray">Gray</Badge>
      <Badge variant="bg-point">Point</Badge>
      <Badge variant="bg-danger">Danger</Badge>
      <Badge variant="bg-warning">Warning</Badge>
      <Badge variant="bg-success">Success</Badge>
      <Badge variant="bg-information">Information</Badge>
      <Badge variant="bg-disabled">Disabled</Badge>
    </div>
  ),
};

/** 연한 배경 */
export const Light: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="bg-light-primary">Primary</Badge>
      <Badge variant="bg-light-secondary">Secondary</Badge>
      <Badge variant="bg-light-gray">Gray</Badge>
      <Badge variant="bg-light-point">Point</Badge>
      <Badge variant="bg-light-danger">Danger</Badge>
      <Badge variant="bg-light-warning">Warning</Badge>
      <Badge variant="bg-light-success">Success</Badge>
      <Badge variant="bg-light-information">Information</Badge>
      <Badge variant="bg-light-disabled">Disabled</Badge>
    </div>
  ),
};

/** 숫자 배지 */
export const Number: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Badge variant="bg-primary" number>5</Badge>
      <Badge variant="bg-primary" number>99</Badge>
      <Badge variant="bg-primary" number>999+</Badge>
      <Badge variant="bg-point" number>3</Badge>
    </div>
  ),
};

/** 실제 사용 예시 */
export const Usage: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "16px" }}>신청 상태:</span>
        <Badge variant="bg-light-success">승인완료</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "16px" }}>처리 상태:</span>
        <Badge variant="bg-light-warning">처리중</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "16px" }}>긴급 공지:</span>
        <Badge variant="bg-danger">긴급</Badge>
      </div>
    </div>
  ),
};
