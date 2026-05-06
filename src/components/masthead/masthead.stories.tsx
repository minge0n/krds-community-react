import type { Meta, StoryObj } from "@storybook/react-vite";
import { Masthead } from "./index";
import "./masthead.css";

const meta: Meta<typeof Masthead> = {
  title: "Components/Masthead",
  component: Masthead,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Masthead>;

export const Default: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    text: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

export const WithLogo: Story = {
  args: {
    logo: <span style={{ fontSize: "16px" }}>🇰🇷</span>,
    text: "대한민국 전자정부",
  },
};
