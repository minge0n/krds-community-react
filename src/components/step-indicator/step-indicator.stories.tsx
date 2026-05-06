import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepIndicator, StepItem } from "./index";
import "./step-indicator.css";

/**
 * ## 단계 표시기 (Step Indicator)
 *
 * 다단계 프로세스에서 현재 진행 단계를 시각적으로 표시하는 컴포넌트입니다.
 * 회원가입, 민원 신청, 결제 등 순차적 과정에서 사용합니다.
 *
 * ### 사용 규칙
 * - 3~7단계의 프로세스에서 사용합니다
 * - 완료된 단계, 현재 단계, 대기 단계를 시각적으로 구분합니다
 * - 각 단계에 번호와 제목을 표시합니다
 * - 단계를 건너뛸 수 없는 순차적 프로세스에 적합합니다
 *
 * ### 접근성
 * - 순서 있는 목록(`<ol>`)으로 마크업됩니다
 * - 현재 단계에 "현재단계" 스크린리더 텍스트가 제공됩니다
 * - 완료/진행/대기 상태가 시각적으로 구분됩니다
 */
const meta: Meta<typeof StepIndicator> = {
  title: "Components/StepIndicator",
  component: StepIndicator,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

/** 기본 단계 표시기 */
export const Default: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="약관 동의" status="done" />
      <StepItem step="02" title="정보 입력" status="active" />
      <StepItem step="03" title="인증" status="pending" />
      <StepItem step="04" title="완료" status="pending" />
    </StepIndicator>
  ),
};

/** 첫 번째 단계 */
export const FirstStep: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="약관 동의" status="active" />
      <StepItem step="02" title="정보 입력" status="pending" />
      <StepItem step="03" title="인증" status="pending" />
      <StepItem step="04" title="완료" status="pending" />
    </StepIndicator>
  ),
};

/** 마지막 단계 */
export const LastStep: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="약관 동의" status="done" />
      <StepItem step="02" title="정보 입력" status="done" />
      <StepItem step="03" title="인증" status="done" />
      <StepItem step="04" title="완료" status="active" />
    </StepIndicator>
  ),
};

/** 5단계 프로세스 */
export const FiveSteps: Story = {
  render: () => (
    <StepIndicator>
      <StepItem step="01" title="서류 준비" status="done" />
      <StepItem step="02" title="신청서 작성" status="done" />
      <StepItem step="03" title="서류 첨부" status="active" />
      <StepItem step="04" title="수수료 결제" status="pending" />
      <StepItem step="05" title="신청 완료" status="pending" />
    </StepIndicator>
  ),
};

/** 실제 사용 예시 - 민원 신청 */
export const CivilApplication: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <StepIndicator>
        <StepItem step="01" title="본인 인증" status="done" />
        <StepItem step="02" title="민원 선택" status="done" />
        <StepItem step="03" title="신청서 작성" status="active" />
        <StepItem step="04" title="제출" status="pending" />
      </StepIndicator>
      <div style={{ marginTop: "32px", padding: "24px", border: "1px solid #e5e5e5", borderRadius: "8px" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>신청서 작성</h3>
        <p style={{ fontSize: "14px", color: "#666" }}>아래 양식을 작성해 주세요.</p>
      </div>
    </div>
  ),
};
