import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAB } from "./index";
import "./fab.css";

const meta: Meta<typeof FAB> = {
  title: "Components/FAB",
  component: FAB,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FAB>;

const PlusIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ArrowUpIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: PlusIcon,
    label: "새 항목 추가",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FAB icon={PlusIcon} label="추가" size="small" />
      <FAB icon={PlusIcon} label="추가" size="medium" />
      <FAB icon={PlusIcon} label="추가" size="large" />
    </div>
  ),
};

export const ScrollToTop: Story = {
  args: {
    icon: ArrowUpIcon,
    label: "맨 위로",
  },
};
