import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./index";
import "./toast.css";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "저장이 완료되었습니다.",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Toast message="정보: 새로운 업데이트가 있습니다." variant="info" />
      <Toast message="성공: 제출이 완료되었습니다." variant="success" />
      <Toast message="경고: 저장하지 않은 변경사항이 있습니다." variant="warning" />
      <Toast message="오류: 처리 중 문제가 발생했습니다." variant="error" />
    </div>
  ),
};

export const WithClose: Story = {
  args: {
    message: "파일이 업로드되었습니다.",
    variant: "success",
    onClose: () => {},
  },
};

export const LongDuration: Story = {
  args: {
    message: "이 알림은 10초 후에 사라집니다.",
    duration: 10000,
    onClose: () => {},
  },
};
