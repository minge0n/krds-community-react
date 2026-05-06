import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideNavigation } from "./index";
import "./side-navigation.css";

const meta: Meta<typeof SideNavigation> = {
  title: "Components/SideNavigation",
  component: SideNavigation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  args: {
    title: "서비스 안내",
    items: [
      { id: "overview", label: "개요" },
      { id: "apply", label: "신청 방법" },
      { id: "documents", label: "필요 서류" },
      { id: "schedule", label: "처리 일정" },
      { id: "faq", label: "자주 묻는 질문" },
    ],
    activeId: "overview",
  },
};

export const WithSubItems: Story = {
  args: {
    title: "정책 안내",
    items: [
      {
        id: "economy",
        label: "경제 정책",
        children: [
          { id: "tax", label: "세금 정책" },
          { id: "employment", label: "고용 정책" },
        ],
      },
      {
        id: "social",
        label: "사회 정책",
        children: [
          { id: "welfare", label: "복지 정책" },
          { id: "education", label: "교육 정책" },
        ],
      },
      { id: "environment", label: "환경 정책" },
    ],
    activeId: "tax",
  },
};
