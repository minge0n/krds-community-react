import type { Meta, StoryObj } from "@storybook/react-vite";
import { Resize } from "./index";
import "./resize.css";

const meta: Meta<typeof Resize> = {
  title: "Components/Resize",
  component: Resize,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Resize>;

export const Default: Story = {
  args: {
    currentSize: "medium",
    onResize: () => {},
  },
};

export const Small: Story = {
  args: {
    currentSize: "small",
    onResize: () => {},
  },
};

export const Large: Story = {
  args: {
    currentSize: "large",
    onResize: () => {},
  },
};
