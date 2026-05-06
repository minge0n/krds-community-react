import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuantityToggle } from "./index";
import "./quantity-toggle.css";

const meta: Meta<typeof QuantityToggle> = {
  title: "Components/QuantityToggle",
  component: QuantityToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuantityToggle>;

export const Default: Story = {
  args: {
    value: 1,
    onChange: () => {},
    label: "수량",
  },
};

export const MinValue: Story = {
  args: {
    value: 0,
    onChange: () => {},
    min: 0,
    max: 10,
    label: "수량",
  },
};

export const MaxValue: Story = {
  args: {
    value: 99,
    onChange: () => {},
    min: 0,
    max: 99,
    label: "수량",
  },
};

export const CustomRange: Story = {
  args: {
    value: 5,
    onChange: () => {},
    min: 1,
    max: 20,
    label: "인원 수",
  },
};
