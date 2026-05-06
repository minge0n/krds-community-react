import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuantityToggle } from "./index";
import "./quantity-toggle.css";

/**
 * ## 수량 조절 (Quantity Toggle)
 *
 * 숫자 값을 증가/감소 버튼으로 조절할 수 있는 컴포넌트입니다.
 * 수량 선택, 인원 수 설정 등에 사용합니다.
 *
 * ### 사용 규칙
 * - 최소값과 최대값을 설정하여 유효 범위를 제한합니다
 * - 현재 값을 명확하게 표시합니다
 * - 최소/최대에 도달하면 해당 방향 버튼을 비활성화합니다
 * - 직접 숫자 입력이 필요한 경우 텍스트 입력 필드를 사용합니다
 *
 * ### 접근성
 * - `role="group"`으로 관련 요소를 그룹화합니다
 * - `aria-label`로 그룹의 목적을 설명합니다
 * - 값 변경 시 `aria-live="polite"`로 스크린리더에 알립니다
 * - 증가/감소 버튼에 각각 `aria-label` 제공
 */
const meta: Meta<typeof QuantityToggle> = {
  title: "Components/QuantityToggle",
  component: QuantityToggle,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description: "현재 값",
      table: {
        type: { summary: "number" },
      },
    },
    onChange: {
      action: "changed",
      description: "값 변경 핸들러",
      table: {
        type: { summary: "(value: number) => void" },
      },
    },
    min: {
      control: "number",
      description: "최소값",
      table: {
        defaultValue: { summary: "0" },
        type: { summary: "number" },
      },
    },
    max: {
      control: "number",
      description: "최대값",
      table: {
        defaultValue: { summary: "99" },
        type: { summary: "number" },
      },
    },
    label: {
      control: "text",
      description: "접근성 라벨",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    value: 1,
    min: 0,
    max: 99,
    label: "수량",
  },
};

export default meta;
type Story = StoryObj<typeof QuantityToggle>;

/** 기본 수량 조절 */
export const Default: Story = {};

/** 최소값 도달 */
export const AtMinimum: Story = {
  args: {
    value: 0,
    min: 0,
    label: "수량",
  },
};

/** 최대값 도달 */
export const AtMaximum: Story = {
  args: {
    value: 10,
    max: 10,
    label: "수량",
  },
};

/** 커스텀 범위 */
export const CustomRange: Story = {
  args: {
    value: 3,
    min: 1,
    max: 5,
    label: "인원 수",
  },
};

/** 실제 사용 예시 - 장바구니 */
export const ShoppingCart: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", border: "1px solid #e5e5e5", borderRadius: "8px" }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: 600, fontSize: "14px", margin: 0 }}>민원서류 발급</p>
        <p style={{ fontSize: "13px", color: "#666", margin: "4px 0 0" }}>주민등록등본</p>
      </div>
      <QuantityToggle value={2} min={1} max={10} label="발급 부수" onChange={() => {}} />
      <span style={{ fontSize: "14px", fontWeight: 600, minWidth: "60px", textAlign: "right" }}>800원</span>
    </div>
  ),
};
