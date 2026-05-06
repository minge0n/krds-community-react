import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextualHelp } from "./index";
import "./contextual-help.css";

const meta: Meta<typeof ContextualHelp> = {
  title: "Components/ContextualHelp",
  component: ContextualHelp,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContextualHelp>;

export const Default: Story = {
  args: {
    content: "이 항목은 필수 입력 사항입니다.",
  },
};

export const WithTitle: Story = {
  args: {
    title: "비밀번호 규칙",
    content: "비밀번호는 8자 이상, 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.",
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "40px", padding: "40px", justifyContent: "center" }}>
      <span>상단 <ContextualHelp side="top" content="상단에 표시됩니다." /></span>
      <span>하단 <ContextualHelp side="bottom" content="하단에 표시됩니다." /></span>
      <span>왼쪽 <ContextualHelp side="left" content="왼쪽에 표시됩니다." /></span>
      <span>오른쪽 <ContextualHelp side="right" content="오른쪽에 표시됩니다." /></span>
    </div>
  ),
};
