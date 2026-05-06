import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccessibleMedia } from "./index";
import "./accessible-media.css";

const meta: Meta<typeof AccessibleMedia> = {
  title: "Components/AccessibleMedia",
  component: AccessibleMedia,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AccessibleMedia>;

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "샘플 비디오",
    type: "video",
  },
};

export const Audio: Story = {
  args: {
    src: "https://www.w3schools.com/html/horse.ogg",
    title: "샘플 오디오",
    type: "audio",
  },
};

export const WithCaption: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "자막이 포함된 비디오",
    type: "video",
    captionSrc: "/captions/sample.vtt",
  },
};
