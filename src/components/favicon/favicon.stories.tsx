import type { Meta, StoryObj } from "@storybook/react-vite";
import { Favicon } from "./index";
import "./favicon.css";

const meta: Meta<typeof Favicon> = {
  title: "Components/Favicon",
  component: Favicon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Favicon>;

export const Default: Story = {
  args: {
    href: "/favicon.ico",
  },
};

export const PNG: Story = {
  args: {
    href: "/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
  },
};

export const SVG: Story = {
  args: {
    href: "/favicon.svg",
    type: "image/svg+xml",
  },
};
