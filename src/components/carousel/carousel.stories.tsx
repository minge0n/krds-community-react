import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./index";
import "./carousel.css";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: [
      <div key="1" style={{ padding: "40px", background: "#e3f2fd", textAlign: "center" }}>슬라이드 1</div>,
      <div key="2" style={{ padding: "40px", background: "#f3e5f5", textAlign: "center" }}>슬라이드 2</div>,
      <div key="3" style={{ padding: "40px", background: "#e8f5e9", textAlign: "center" }}>슬라이드 3</div>,
    ],
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
    interval: 3000,
    children: [
      <div key="1" style={{ padding: "40px", background: "#e3f2fd", textAlign: "center" }}>자동 재생 슬라이드 1</div>,
      <div key="2" style={{ padding: "40px", background: "#f3e5f5", textAlign: "center" }}>자동 재생 슬라이드 2</div>,
      <div key="3" style={{ padding: "40px", background: "#e8f5e9", textAlign: "center" }}>자동 재생 슬라이드 3</div>,
      <div key="4" style={{ padding: "40px", background: "#fff3e0", textAlign: "center" }}>자동 재생 슬라이드 4</div>,
    ],
  },
};
