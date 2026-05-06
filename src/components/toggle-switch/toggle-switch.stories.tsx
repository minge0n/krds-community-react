import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "./index";
import "./toggle-switch.css";

/**
 * ## 토글 스위치 (Toggle Switch)
 *
 * 상호 배타적인 두 가지 상태를 전환하는 데 사용되는 요소입니다.
 *
 * ### 사용 규칙
 * - 즉시 적용되는 설정에 사용 (저장 버튼 불필요)
 * - ON/OFF 두 상태가 명확한 경우에만 사용
 * - 라벨은 항상 제공
 *
 * ### 접근성
 * - Base UI Switch 기반 (role="switch")
 * - aria-checked 자동 관리
 * - 키보드: Space로 토글
 */
const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨" },
    disabled: { control: "boolean", description: "비활성화" },
    defaultChecked: { control: "boolean", description: "기본 ON 상태" },
  },
  args: {
    label: "알림 수신",
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

/** 기본 (OFF) */
export const Default: Story = {};

/** ON 상태 */
export const Checked: Story = {
  args: { label: "알림 수신", defaultChecked: true },
};

/** 비활성화 */
export const Disabled: Story = {
  args: { label: "비활성화", disabled: true },
};

/** 설정 목록 패턴 */
export const SettingsList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "320px" }}>
      <ToggleSwitch label="푸시 알림" defaultChecked />
      <ToggleSwitch label="이메일 알림" defaultChecked />
      <ToggleSwitch label="SMS 알림" />
      <ToggleSwitch label="야간 알림 (22시~08시)" disabled />
    </div>
  ),
};
