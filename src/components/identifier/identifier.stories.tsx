import type { Meta, StoryObj } from "@storybook/react-vite";
import { Identifier } from "./index";
import "./identifier.css";

const meta: Meta<typeof Identifier> = {
  title: "Components/Identifier",
  component: Identifier,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Identifier>;

export const Default: Story = {
  args: {
    orgName: "대한민국 정부",
    description: "국민과 함께하는 열린 정부",
  },
};

export const WithLinks: Story = {
  args: {
    orgName: "행정안전부",
    description: "안전하고 편리한 디지털 정부를 만들어갑니다.",
    links: [
      { label: "이용약관", href: "/terms" },
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "접근성 정책", href: "/accessibility" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    orgName: "대한민국 정부",
    logo: <span style={{ fontSize: "24px" }}>🇰🇷</span>,
    description: "국민의 나라, 정의로운 대한민국",
  },
};
