import type { Meta, StoryObj } from "@storybook/react-vite";
import { CriticalAlert } from "./index";
import "./critical-alert.css";

const meta: Meta<typeof CriticalAlert> = {
  title: "Components/CriticalAlert",
  component: CriticalAlert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CriticalAlert>;

export const Default: Story = {
  args: {
    title: "시스템 오류",
    children: "서비스 이용에 불편을 드려 죄송합니다. 잠시 후 다시 시도해 주세요.",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <CriticalAlert variant="danger" title="위험">
        시스템에 심각한 오류가 발생했습니다.
      </CriticalAlert>
      <CriticalAlert variant="warning" title="경고">
        저장하지 않은 변경사항이 있습니다.
      </CriticalAlert>
      <CriticalAlert variant="info" title="안내">
        시스템 점검이 예정되어 있습니다.
      </CriticalAlert>
    </div>
  ),
};

export const Closable: Story = {
  args: {
    variant: "warning",
    title: "주의",
    children: "이 작업은 되돌릴 수 없습니다.",
    closable: true,
  },
};

export const WithAction: Story = {
  args: {
    variant: "danger",
    title: "세션 만료",
    children: "로그인 세션이 만료되었습니다.",
    action: <button type="button">다시 로그인</button>,
  },
};
