import type { Meta, StoryObj } from "@storybook/react-vite";
import { RangeSlider } from "./index";
import "./range-slider.css";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    label: "볼륨",
    value: 50,
    min: 0,
    max: 100,
  },
};

export const CustomRange: Story = {
  args: {
    label: "가격 범위",
    value: 30000,
    min: 0,
    max: 100000,
  },
};

export const MinValue: Story = {
  args: {
    label: "밝기",
    value: 0,
    min: 0,
    max: 100,
  },
};

export const MaxValue: Story = {
  args: {
    label: "투명도",
    value: 100,
    min: 0,
    max: 100,
  },
};
