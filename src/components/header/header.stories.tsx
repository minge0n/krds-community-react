import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./index";
import "./header.css";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "정부 서비스",
    logo: <span style={{ fontWeight: "bold", fontSize: "18px" }}>LOGO</span>,
  },
};

export const WithNav: Story = {
  args: {
    title: "정부 서비스",
    logo: <span style={{ fontWeight: "bold" }}>LOGO</span>,
    nav: (
      <ul style={{ display: "flex", gap: "16px", listStyle: "none", margin: 0, padding: 0 }}>
        <li><a href="#">서비스 소개</a></li>
        <li><a href="#">이용 안내</a></li>
        <li><a href="#">공지사항</a></li>
      </ul>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: "정부 서비스",
    logo: <span style={{ fontWeight: "bold" }}>LOGO</span>,
    actions: (
      <div style={{ display: "flex", gap: "8px" }}>
        <button type="button">로그인</button>
        <button type="button">회원가입</button>
      </div>
    ),
  },
};

export const WithMenuToggle: Story = {
  args: {
    title: "정부 서비스",
    menuToggle: <button type="button" aria-label="메뉴">☰</button>,
  },
};
