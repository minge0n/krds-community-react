import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "./index";
import "./snackbar.css";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    message: "저장되었습니다.",
  },
};

export const WithAction: Story = {
  args: {
    message: "항목이 삭제되었습니다.",
    action: "실행 취소",
    onAction: () => {},
  },
};

export const WithClose: Story = {
  args: {
    message: "새로운 알림이 있습니다.",
    onClose: () => {},
  },
};

export const WithActionAndClose: Story = {
  args: {
    message: "파일이 업로드되었습니다.",
    action: "보기",
    onAction: () => {},
    onClose: () => {},
  },
};
