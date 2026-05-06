import type { Meta, StoryObj } from "@storybook/react-vite";
import { TutorialPanel } from "./index";
import "./tutorial-panel.css";

const meta: Meta<typeof TutorialPanel> = {
  title: "Components/TutorialPanel",
  component: TutorialPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TutorialPanel>;

export const Default: Story = {
  args: {
    title: "서비스 이용 가이드",
    steps: [
      { title: "회원가입", content: "먼저 회원가입을 진행해 주세요." },
      { title: "본인 인증", content: "본인 인증을 완료해 주세요." },
      { title: "서비스 신청", content: "원하는 서비스를 선택하고 신청하세요." },
    ],
    currentStep: 0,
  },
};

export const MiddleStep: Story = {
  args: {
    title: "민원 접수 안내",
    steps: [
      { title: "민원 선택", content: "접수할 민원 유형을 선택합니다." },
      { title: "정보 입력", content: "필요한 정보를 입력합니다." },
      { title: "서류 첨부", content: "필요한 서류를 첨부합니다." },
      { title: "접수 완료", content: "접수가 완료됩니다." },
    ],
    currentStep: 1,
  },
};

export const LastStep: Story = {
  args: {
    title: "설정 완료",
    steps: [
      { title: "기본 설정", content: "기본 설정을 완료했습니다." },
      { title: "알림 설정", content: "알림 설정을 완료했습니다." },
      { title: "완료", content: "모든 설정이 완료되었습니다. 이제 서비스를 이용할 수 있습니다." },
    ],
    currentStep: 2,
  },
};
