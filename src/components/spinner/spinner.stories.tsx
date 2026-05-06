import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./index";
import "./spinner.css";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const CustomLabel: Story = {
  args: {
    label: "데이터를 불러오는 중",
  },
};
