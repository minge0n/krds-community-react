import type { Meta, StoryObj } from "@storybook/react-vite";
import { CoachMark } from "./index";
import "./coach-mark.css";

const meta: Meta<typeof CoachMark> = {
  title: "Components/CoachMark",
  component: CoachMark,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CoachMark>;

export const Default: Story = {
  args: {
    title: "새로운 기능",
    description: "이 버튼을 클릭하면 새로운 문서를 작성할 수 있습니다.",
  },
};

export const WithSteps: Story = {
  args: {
    title: "1단계: 시작하기",
    description: "먼저 상단의 메뉴에서 원하는 서비스를 선택하세요.",
    currentStep: 1,
    totalSteps: 3,
  },
};

export const LastStep: Story = {
  args: {
    title: "3단계: 완료",
    description: "모든 설정이 완료되었습니다.",
    currentStep: 3,
    totalSteps: 3,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "40px" }}>
      <CoachMark placement="top" description="상단에 표시됩니다." />
      <CoachMark placement="bottom" description="하단에 표시됩니다." />
      <CoachMark placement="left" description="왼쪽에 표시됩니다." />
      <CoachMark placement="right" description="오른쪽에 표시됩니다." />
    </div>
  ),
};

export const NotClosable: Story = {
  args: {
    description: "닫기 버튼이 없는 코치마크입니다.",
    closable: false,
  },
};
