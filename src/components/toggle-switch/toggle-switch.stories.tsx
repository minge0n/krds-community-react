import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "@storybook/test";
import { ToggleSwitch } from "./index";
import "./toggle-switch.css";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨" },
    disabled: { control: "boolean", description: "비활성화" },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: { label: "알림 수신" },
};

export const Checked: Story = {
  args: { label: "알림 수신", defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: "비활성화", disabled: true },
};

export const ToggleInteraction: Story = {
  args: { label: "토글 테스트" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("switch");

    await expect(toggle).toHaveAttribute("aria-checked", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-checked", "true");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-checked", "false");
  },
};
