import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "@storybook/test";
import { TextInput } from "./index";
import "./text-input.css";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨" },
    hint: { control: "text", description: "도움말" },
    error: { control: "text", description: "에러 메시지" },
    invalid: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화" },
    placeholder: { control: "text", description: "플레이스홀더" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력해 주세요",
    hint: "실명을 입력해 주세요",
  },
};

export const WithError: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    error: "올바른 이메일 형식이 아닙니다",
    invalid: true,
    value: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "이름",
    value: "홍길동",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "주민등록번호",
    value: "900101-*******",
    readOnly: true,
  },
};

export const TypeInteraction: Story = {
  args: {
    label: "검색어",
    placeholder: "검색어를 입력하세요",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.click(input);
    await expect(input).toHaveFocus();

    await userEvent.type(input, "디지털 정부서비스");
    await expect(input).toHaveValue("디지털 정부서비스");
  },
};
