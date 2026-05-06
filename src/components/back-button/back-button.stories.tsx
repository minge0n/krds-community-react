import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackButton } from "./index";
import "./back-button.css";

const meta: Meta<typeof BackButton> = {
  title: "Components/BackButton",
  component: BackButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {},
};

export const CustomLabel: Story = {
  args: {
    label: "이전 페이지로",
  },
};
