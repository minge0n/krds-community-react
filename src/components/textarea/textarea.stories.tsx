import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./index";
import "./textarea.css";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "내용",
    placeholder: "내용을 입력하세요",
  },
};

export const WithCount: Story = {
  args: {
    label: "의견 작성",
    placeholder: "의견을 입력하세요",
    maxCount: 500,
    count: 0,
  },
};

export const WithValue: Story = {
  args: {
    label: "비고",
    defaultValue: "기존에 입력된 내용입니다.",
    maxCount: 200,
    count: 14,
  },
};

export const Disabled: Story = {
  args: {
    label: "비고",
    disabled: true,
    defaultValue: "수정할 수 없는 내용입니다.",
  },
};
