import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "./index";
import "./snackbar.css";

/**
 * ## 스낵바 (Snackbar)
 *
 * 화면 하단에 일시적으로 표시되는 간단한 알림 메시지입니다.
 * 사용자 액션의 결과를 피드백하거나 간단한 정보를 전달합니다.
 *
 * ### 사용 규칙
 * - 짧고 간결한 메시지를 사용합니다 (1줄 권장)
 * - 일정 시간 후 자동으로 사라집니다
 * - 선택적으로 액션 버튼을 제공할 수 있습니다 (실행 취소 등)
 * - 한 번에 하나의 스낵바만 표시합니다
 *
 * ### 접근성
 * - `role="alert"`와 `aria-live="polite"`가 적용됩니다
 * - `aria-atomic="true"`로 전체 내용이 읽힙니다
 * - 닫기 버튼에 `aria-label="닫기"` 제공
 */
const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "알림 메시지",
      table: {
        type: { summary: "string" },
      },
    },
    action: {
      control: "text",
      description: "액션 버튼 라벨",
      table: {
        type: { summary: "string" },
      },
    },
    onAction: {
      action: "actionClicked",
      description: "액션 버튼 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
    onClose: {
      action: "closed",
      description: "닫기 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    message: "저장되었습니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

/** 기본 스낵바 */
export const Default: Story = {};

/** 닫기 버튼 포함 */
export const WithClose: Story = {
  args: {
    message: "파일이 업로드되었습니다.",
    onClose: () => {},
  },
};

/** 액션 버튼 포함 */
export const WithAction: Story = {
  args: {
    message: "항목이 삭제되었습니다.",
    action: "실행 취소",
    onAction: () => {},
    onClose: () => {},
  },
};

/** 다양한 메시지 예시 */
export const MessageVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Snackbar message="저장되었습니다." onClose={() => {}} />
      <Snackbar message="네트워크 연결이 복구되었습니다." onClose={() => {}} />
      <Snackbar message="항목이 삭제되었습니다." action="실행 취소" onAction={() => {}} onClose={() => {}} />
      <Snackbar message="클립보드에 복사되었습니다." />
    </div>
  ),
};

/** 긴 메시지 */
export const LongMessage: Story = {
  args: {
    message: "민원 신청이 정상적으로 접수되었습니다. 처리 결과는 등록하신 이메일로 안내드립니다.",
    onClose: () => {},
  },
};
