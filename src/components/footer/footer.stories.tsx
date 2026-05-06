import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./index";
import "./footer.css";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    orgName: "대한민국 정부",
    address: "서울특별시 종로구 세종대로 209",
    contact: "대표전화: 02-1234-5678",
    copyright: "© 2025 대한민국 정부. All rights reserved.",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "접근성 정책", href: "/accessibility" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    orgName: "정부기관명",
    copyright: "© 2025 정부기관명",
  },
};

export const WithChildren: Story = {
  args: {
    orgName: "대한민국 정부",
    copyright: "© 2025 대한민국 정부",
    children: (
      <div style={{ display: "flex", gap: "8px" }}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
      </div>
    ),
  },
};
