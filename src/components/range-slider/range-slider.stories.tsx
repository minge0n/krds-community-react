import type { Meta, StoryObj } from "@storybook/react-vite";
import { RangeSlider } from "./index";
import "./range-slider.css";

/**
 * ## 범위 슬라이더 (Range Slider)
 *
 * 드래그하여 숫자 값을 선택할 수 있는 슬라이더 컴포넌트입니다.
 * 볼륨, 밝기, 가격 범위 등 연속적인 값을 설정할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 정확한 값보다 대략적인 범위 설정에 적합합니다
 * - 현재 값을 숫자로 함께 표시합니다
 * - 최소/최대 범위를 명확히 설정합니다
 * - 정확한 숫자 입력이 필요하면 텍스트 입력을 함께 제공합니다
 *
 * ### 접근성
 * - `aria-label`로 슬라이더의 목적을 설명합니다
 * - 키보드 화살표로 값을 조절할 수 있습니다
 * - 현재 값이 시각적으로 표시됩니다
 */
const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  argTypes: {
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
        defaultValue: { summary: "100" },
        type: { summary: "number" },
      },
    },
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
    label: {
      control: "text",
      description: "접근성 라벨",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    min: 0,
    max: 100,
    value: 50,
    label: "값 조절",
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

/** 기본 슬라이더 */
export const Default: Story = {};

/** 최소값 */
export const MinValue: Story = {
  args: {
    value: 0,
    label: "볼륨",
  },
};

/** 최대값 */
export const MaxValue: Story = {
  args: {
    value: 100,
    label: "볼륨",
  },
};

/** 커스텀 범위 */
export const CustomRange: Story = {
  args: {
    min: 10000,
    max: 1000000,
    value: 500000,
    label: "예산 범위",
  },
};

/** 다양한 슬라이더 예시 */
export const Examples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "400px" }}>
      <div>
        <p style={{ fontSize: "14px", marginBottom: "8px", fontWeight: 500 }}>글자 크기</p>
        <RangeSlider min={12} max={24} value={16} label="글자 크기" />
      </div>
      <div>
        <p style={{ fontSize: "14px", marginBottom: "8px", fontWeight: 500 }}>밝기</p>
        <RangeSlider min={0} max={100} value={75} label="밝기" />
      </div>
      <div>
        <p style={{ fontSize: "14px", marginBottom: "8px", fontWeight: 500 }}>만족도</p>
        <RangeSlider min={1} max={10} value={7} label="만족도" />
      </div>
    </div>
  ),
};
