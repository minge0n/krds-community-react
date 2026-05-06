import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./index";
import "./calendar.css";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    label: "날짜 선택",
  },
};

export const WithValue: Story = {
  args: {
    label: "예약일",
    value: new Date(2025, 4, 6),
  },
};

export const Disabled: Story = {
  args: {
    label: "날짜 선택",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "날짜 선택",
    invalid: true,
  },
};

export const WithMinMax: Story = {
  args: {
    label: "기간 내 선택",
    min: new Date(2025, 0, 1),
    max: new Date(2025, 11, 31),
  },
};
