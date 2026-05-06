import type { Meta, StoryObj } from "@storybook/react-vite";
import { TutorialPanel } from "./index";
import "./tutorial-panel.css";

/**
 * ## 튜토리얼 패널 (Tutorial Panel)
 *
 * 단계별 가이드를 제공하는 패널 컴포넌트입니다.
 * 서비스 사용법이나 기능 안내를 순차적으로 설명할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 3~7단계의 가이드에 적합합니다
 * - 각 단계에 제목과 설명을 제공합니다
 * - 진행률 바로 현재 위치를 표시합니다
 * - 이전/다음 버튼으로 단계를 이동합니다
 * - 닫기 버튼으로 언제든 종료할 수 있습니다
 *
 * ### 접근성
 * - `role="region"`으로 독립적 영역임을 명시합니다
 * - `aria-label`로 패널의 목적을 설명합니다
 * - 닫기 버튼에 `aria-label="튜토리얼 닫기"` 제공
 * - 첫 단계에서 이전 버튼이 비활성화됩니다
 */
const meta: Meta<typeof TutorialPanel> = {
  title: "Components/TutorialPanel",
  component: TutorialPanel,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "패널 제목",
      table: {
        defaultValue: { summary: "튜토리얼" },
        type: { summary: "ReactNode" },
      },
    },
    steps: {
      control: "object",
      description: "튜토리얼 단계 목록",
      table: {
        type: { summary: "TutorialStep[]" },
      },
    },
    currentStep: {
      control: "number",
      description: "현재 단계 (0부터 시작)",
      table: {
        defaultValue: { summary: "0" },
        type: { summary: "number" },
      },
    },
    onStepChange: {
      action: "stepChanged",
      description: "단계 변경 핸들러",
      table: {
        type: { summary: "(step: number) => void" },
      },
    },
    onClose: {
      action: "closed",
      description: "닫기 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
    nextText: {
      control: "text",
      description: "다음 버튼 텍스트",
      table: {
        defaultValue: { summary: "다음" },
        type: { summary: "string" },
      },
    },
    prevText: {
      control: "text",
      description: "이전 버튼 텍스트",
      table: {
        defaultValue: { summary: "이전" },
        type: { summary: "string" },
      },
    },
    completeText: {
      control: "text",
      description: "완료 버튼 텍스트",
      table: {
        defaultValue: { summary: "완료" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    title: "서비스 이용 가이드",
    steps: [
      { title: "로그인", content: "공동인증서 또는 간편인증으로 로그인합니다." },
      { title: "민원 선택", content: "원하는 민원 서비스를 검색하거나 카테고리에서 선택합니다." },
      { title: "신청서 작성", content: "필요한 정보를 입력하고 서류를 첨부합니다." },
      { title: "제출 및 확인", content: "작성한 내용을 확인하고 제출합니다." },
    ],
    currentStep: 0,
  },
};

export default meta;
type Story = StoryObj<typeof TutorialPanel>;

/** 기본 튜토리얼 패널 (첫 단계) */
export const Default: Story = {};

/** 중간 단계 */
export const MiddleStep: Story = {
  args: {
    currentStep: 1,
  },
};

/** 마지막 단계 */
export const LastStep: Story = {
  args: {
    currentStep: 3,
  },
};

/** 3단계 짧은 가이드 */
export const ShortGuide: Story = {
  args: {
    title: "빠른 시작 가이드",
    steps: [
      { title: "계정 생성", content: "이메일과 비밀번호로 계정을 생성합니다." },
      { title: "프로필 설정", content: "이름과 연락처를 입력합니다." },
      { title: "시작하기", content: "모든 준비가 완료되었습니다. 서비스를 이용해 보세요!" },
    ],
    currentStep: 0,
  },
};

/** 상세 콘텐츠 포함 */
export const DetailedContent: Story = {
  render: () => (
    <TutorialPanel
      title="인증서 등록 안내"
      steps={[
        {
          title: "인증서 준비",
          content: (
            <div style={{ fontSize: "14px", lineHeight: 1.6 }}>
              <p>다음 중 하나의 인증서를 준비해 주세요:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                <li>공동인증서 (구 공인인증서)</li>
                <li>금융인증서</li>
                <li>간편인증 (카카오, 네이버, PASS)</li>
              </ul>
            </div>
          ),
        },
        {
          title: "인증서 등록",
          content: "인증서 등록 버튼을 클릭하고 안내에 따라 인증서를 등록합니다.",
        },
        {
          title: "등록 완료",
          content: "인증서 등록이 완료되었습니다. 이제 전자서명이 필요한 서비스를 이용할 수 있습니다.",
        },
      ]}
      currentStep={0}
    />
  ),
};
