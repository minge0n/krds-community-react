import type { Meta, StoryObj } from "@storybook/react-vite";
import { MainMenu } from "./index";
import "./main-menu.css";

const meta: Meta<typeof MainMenu> = {
  title: "Components/MainMenu",
  component: MainMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  args: {
    items: [
      { id: "home", label: "홈", href: "/" },
      {
        id: "services",
        label: "서비스",
        children: [
          { id: "service-1", label: "민원 서비스", href: "/services/civil" },
          { id: "service-2", label: "복지 서비스", href: "/services/welfare" },
          { id: "service-3", label: "교육 서비스", href: "/services/education" },
        ],
      },
      { id: "notice", label: "공지사항", href: "/notice" },
      { id: "contact", label: "문의", href: "/contact" },
    ],
    activeId: "home",
  },
};

export const WithSubMenu: Story = {
  args: {
    items: [
      {
        id: "gov",
        label: "정부 소개",
        children: [
          { id: "org", label: "조직도", href: "/org" },
          { id: "history", label: "연혁", href: "/history" },
        ],
      },
      {
        id: "policy",
        label: "정책",
        children: [
          { id: "policy-1", label: "경제 정책", href: "/policy/economy" },
          { id: "policy-2", label: "사회 정책", href: "/policy/social" },
        ],
      },
    ],
    activeId: "org",
  },
};
