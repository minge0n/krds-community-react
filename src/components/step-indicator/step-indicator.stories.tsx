import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepIndicator, StepItem } from "./index";
import "./step-indicator.css";

const meta: Meta<typeof StepIndicator> = {
  title: "Components/StepIndicator",
  component: StepIndicator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="신청서 작성" status="done" />
      <StepItem step="02" title="서류 제출" status="active" />
      <StepItem step="03" title="심사" status="pending" />
      <StepItem step="04" title="완료" status="pending" />
    </StepIndicator>
  ),
};

export const AllDone: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="접수" status="done" />
      <StepItem step="02" title="검토" status="done" />
      <StepItem step="03" title="승인" status="done" />
    </StepIndicator>
  ),
};

export const FirstStep: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="본인 인증" status="active" />
      <StepItem step="02" title="정보 입력" status="pending" />
      <StepItem step="03" title="확인" status="pending" />
      <StepItem step="04" title="완료" status="pending" />
    </StepIndicator>
  ),
};
