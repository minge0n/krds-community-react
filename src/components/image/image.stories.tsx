import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./index";
import "./image.css";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "샘플 이미지",
  },
};

export const WithCaption: Story = {
  args: {
    src: "https://via.placeholder.com/600x400",
    alt: "정부청사 전경",
    caption: "정부세종청사 전경 사진",
  },
};

export const CustomSize: Story = {
  args: {
    src: "https://via.placeholder.com/200x200",
    alt: "작은 이미지",
    style: { width: "200px", height: "200px" },
  },
};
