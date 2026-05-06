import type { Meta, StoryObj } from "@storybook/react-vite";
import { SplashScreen } from "./index";
import "./splash-screen.css";

const meta: Meta<typeof SplashScreen> = {
  title: "Components/SplashScreen",
  component: SplashScreen,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SplashScreen>;

export const Default: Story = {
  args: {
    title: "정부24",
    loading: true,
  },
};

export const WithLogo: Story = {
  args: {
    title: "정부 서비스",
    logo: <span style={{ fontSize: "48px" }}>🇰🇷</span>,
    loading: true,
  },
};

export const WithoutLoading: Story = {
  args: {
    title: "정부24",
    loading: false,
  },
};
