import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./index";
import "./link.css";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "링크 텍스트",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href="#" variant="default">Default</Link>
      <Link href="#" variant="pure">Pure</Link>
      <Link href="#" variant="basic">Basic</Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href="#" size="small">Small</Link>
      <Link href="#" size="medium">Medium</Link>
      <Link href="#" size="large">Large</Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: "https://www.gov.kr",
    children: "정부24 바로가기",
    external: true,
  },
};

export const NoUnderline: Story = {
  args: {
    href: "#",
    children: "밑줄 없는 링크",
    underline: false,
  },
};
