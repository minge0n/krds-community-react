import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";
import "./checkbox.css";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "동의합니다",
  },
};

export const Checked: Story = {
  args: {
    label: "선택됨",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    disabled: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "이용약관 동의",
    description: "서비스 이용을 위해 이용약관에 동의해 주세요.",
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox label="옵션 1" name="group" value="1" />
      <Checkbox label="옵션 2" name="group" value="2" />
      <Checkbox label="옵션 3" name="group" value="3" />
    </div>
  ),
};
