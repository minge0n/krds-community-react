import type { Meta, StoryObj } from "@storybook/react-vite";
import { InPageNavigation } from "./index";
import "./in-page-navigation.css";

const meta: Meta<typeof InPageNavigation> = {
  title: "Components/InPageNavigation",
  component: InPageNavigation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InPageNavigation>;

export const Default: Story = {
  args: {
    items: [
      { id: "overview", label: "개요", href: "#overview" },
      { id: "features", label: "주요 기능", href: "#features" },
      { id: "usage", label: "이용 방법", href: "#usage" },
      { id: "faq", label: "자주 묻는 질문", href: "#faq" },
    ],
    activeId: "overview",
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { id: "intro", label: "소개", href: "#intro" },
      { id: "apply", label: "신청 방법", href: "#apply" },
      { id: "documents", label: "필요 서류", href: "#documents" },
      { id: "schedule", label: "처리 일정", href: "#schedule" },
      { id: "contact", label: "문의처", href: "#contact" },
    ],
    activeId: "documents",
    title: "페이지 목차",
  },
};
