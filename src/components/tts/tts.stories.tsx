import type { Meta, StoryObj } from "@storybook/react-vite";
import { TTS } from "./index";
import "./tts.css";

const meta: Meta<typeof TTS> = {
  title: "Components/TTS",
  component: TTS,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TTS>;

export const Default: Story = {
  args: {
    text: "안녕하세요. 대한민국 정부 서비스입니다.",
  },
};

export const CustomLabel: Story = {
  args: {
    text: "이 페이지의 내용을 음성으로 들을 수 있습니다.",
    label: "페이지 읽기",
  },
};

export const SlowRate: Story = {
  args: {
    text: "천천히 읽어드립니다.",
    label: "느리게 읽기",
    rate: 0.7,
  },
};

export const FastRate: Story = {
  args: {
    text: "빠르게 읽어드립니다.",
    label: "빠르게 읽기",
    rate: 1.5,
  },
};

export const Disabled: Story = {
  args: {
    text: "비활성화된 TTS 버튼입니다.",
    disabled: true,
  },
};
