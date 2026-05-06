import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./index";
import "./text-input.css";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
  },
};

export const WithHint: Story = {
  args: {
    label: "이메일",
    placeholder: "example@gov.kr",
    hint: "정부 이메일 주소를 입력해 주세요.",
  },
};

export const Invalid: Story = {
  args: {
    label: "전화번호",
    invalid: true,
    error: "올바른 전화번호 형식이 아닙니다.",
    defaultValue: "abc",
  },
};

export const Disabled: Story = {
  args: {
    label: "사용자 ID",
    disabled: true,
    defaultValue: "user123",
  },
};

export const ReadOnly: Story = {
  args: {
    label: "접수번호",
    readOnly: true,
    defaultValue: "2025-001234",
  },
};
