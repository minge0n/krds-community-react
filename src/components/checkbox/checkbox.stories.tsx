import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";
import "./checkbox.css";

/**
 * ## 체크박스 (Checkbox)
 *
 * 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.
 *
 * ### 사용 규칙
 * - 옵션의 선택은 상호배타적이지 않음 (다중 선택 가능)
 * - 부가 설명이 필요한 경우 `description` prop 사용
 * - 그룹 내 세로 배치 시 간격 12px
 *
 * ### 접근성
 * - Base UI Checkbox 기반 (aria-checked 자동 관리)
 * - label과 checkbox가 id로 자동 연결
 * - disabled 시 시각적 + aria 상태 모두 반영
 */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨 텍스트" },
    description: { control: "text", description: "부가 설명" },
    checked: { control: "boolean", description: "체크 상태 (controlled)" },
    defaultChecked: { control: "boolean", description: "기본 체크 (uncontrolled)" },
    disabled: { control: "boolean", description: "비활성화" },
    name: { control: "text", description: "폼 name" },
    value: { control: "text", description: "폼 value" },
  },
  args: {
    label: "체크박스",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/** 기본 */
export const Default: Story = {};

/** 선택됨 */
export const Checked: Story = {
  args: { label: "선택됨", defaultChecked: true },
};

/** 비활성화 */
export const Disabled: Story = {
  args: { label: "비활성화", disabled: true },
};

/** 선택된 비활성화 */
export const CheckedDisabled: Story = {
  args: { label: "선택된 비활성화", defaultChecked: true, disabled: true },
};

/** 부가 설명 포함 */
export const WithDescription: Story = {
  args: {
    label: "이용약관 동의 (필수)",
    description: "서비스 이용을 위해 이용약관에 동의합니다.",
  },
};

/** 그룹 (세로 배치) */
export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox label="옵션 1" name="group" value="1" />
      <Checkbox label="옵션 2" name="group" value="2" defaultChecked />
      <Checkbox label="옵션 3" name="group" value="3" />
      <Checkbox label="옵션 4 (비활성)" name="group" value="4" disabled />
    </div>
  ),
};

/** 동의 패턴 */
export const ConsentPattern: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <Checkbox label="전체 동의" />
      <hr style={{ border: "none", borderTop: "1px solid #e6e8ea" }} />
      <Checkbox
        label="개인정보 수집·이용 동의 (필수)"
        description="서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다."
      />
      <Checkbox
        label="마케팅 정보 수신 동의 (선택)"
        description="이벤트, 혜택 등 마케팅 정보를 받아보실 수 있습니다."
      />
    </div>
  ),
};
