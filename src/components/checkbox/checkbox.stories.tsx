import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";
import "./checkbox.css";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "기본 체크박스" },
};

export const Checked: Story = {
  args: { label: "선택됨", defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: "비활성화", disabled: true },
};

export const CheckedDisabled: Story = {
  args: { label: "선택된 비활성화", defaultChecked: true, disabled: true },
};

export const WithDescription: Story = {
  args: {
    label: "이용약관 동의",
    description: "서비스 이용을 위해 약관에 동의합니다.",
  },
};

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
