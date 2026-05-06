import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInput } from "./index";
import "./date-input.css";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: "생년월일",
  },
};

export const WithHint: Story = {
  args: {
    label: "시작일",
    hint: "YYYY-MM-DD 형식으로 입력해 주세요.",
  },
};

export const WithValue: Story = {
  args: {
    label: "등록일",
    value: "2025-05-06",
  },
};

export const Invalid: Story = {
  args: {
    label: "종료일",
    invalid: true,
    error: "올바른 날짜 형식이 아닙니다.",
    value: "2025-13-45",
  },
};

export const Disabled: Story = {
  args: {
    label: "날짜",
    disabled: true,
    value: "2025-01-01",
  },
};
