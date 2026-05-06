import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabBar } from "./index";
import "./tab-bar.css";

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const HomeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 10l7-7 7 7M5 8v8h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UserIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MenuIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Default: Story = {
  args: {
    items: [
      { icon: HomeIcon, label: "홈", href: "/", active: true },
      { icon: SearchIcon, label: "검색", href: "/search" },
      { icon: UserIcon, label: "마이페이지", href: "/mypage" },
      { icon: MenuIcon, label: "전체메뉴", href: "/menu" },
    ],
  },
};

export const SearchActive: Story = {
  args: {
    items: [
      { icon: HomeIcon, label: "홈", href: "/" },
      { icon: SearchIcon, label: "검색", href: "/search", active: true },
      { icon: UserIcon, label: "마이페이지", href: "/mypage" },
      { icon: MenuIcon, label: "전체메뉴", href: "/menu" },
    ],
  },
};
