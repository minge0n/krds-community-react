import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkipLink } from "./index";
import "./skip-link.css";

const meta: Meta<typeof SkipLink> = {
  title: "Components/SkipLink",
  component: SkipLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {},
};

export const CustomTarget: Story = {
  args: {
    targetId: "content-area",
    label: "콘텐츠 영역으로 이동",
  },
};
