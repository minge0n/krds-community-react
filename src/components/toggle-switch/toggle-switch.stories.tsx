import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "./index";
import "./toggle-switch.css";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    label: "알림 수신",
  },
};

export const Checked: Story = {
  args: {
    label: "다크 모드",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <ToggleSwitch label="이메일 알림" defaultChecked />
      <ToggleSwitch label="SMS 알림" />
      <ToggleSwitch label="푸시 알림" defaultChecked />
    </div>
  ),
};
