import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";
import "./button.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "text"],
    },
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "확인" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "취소" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary", children: "더보기" },
};

export const Text: Story = {
  args: { variant: "text", children: "텍스트 버튼" },
};

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

export const Disabled: Story = {
  args: { variant: "primary", children: "비활성화", disabled: true },
};

export const FullWidth: Story = {
  args: { variant: "primary", children: "전체 너비 버튼", fullWidth: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="text">Text</Button>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="tertiary" disabled>Tertiary</Button>
        <Button variant="text" disabled>Text</Button>
      </div>
    </div>
  ),
};
