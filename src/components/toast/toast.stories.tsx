import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./index";
import "./toast.css";

/**
 * ## 토스트 (Toast)
 *
 * 화면 상단 또는 하단에 일시적으로 표시되는 알림 메시지입니다.
 * 작업 결과, 상태 변경, 시스템 알림 등을 전달합니다.
 *
 * ### 사용 규칙
 * - **info**: 일반 정보 안내
 * - **success**: 작업 성공
 * - **warning**: 주의 필요
 * - **error**: 오류 발생
 * - 일정 시간(기본 3초) 후 자동으로 사라집니다
 * - 닫기 버튼으로 즉시 닫을 수 있습니다
 *
 * ### 접근성
 * - `role="alert"`와 `aria-live="assertive"` 적용
 * - `aria-atomic="true"`로 전체 내용이 읽힙니다
 * - 닫기 버튼에 `aria-label="닫기"` 제공
 */
const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "토스트 메시지",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "토스트 유형",
      table: {
        defaultValue: { summary: "info" },
        type: { summary: "info | success | warning | error" },
      },
    },
    duration: {
      control: "number",
      description: "자동 닫힘 시간 (ms, 0이면 자동 닫힘 없음)",
      table: {
        defaultValue: { summary: "3000" },
        type: { summary: "number" },
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
    variant: "info",
    duration: 3000,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/** 기본 토스트 */
export const Default: Story = {};

/** 모든 변형 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Toast message="일반 안내 메시지입니다." variant="info" duration={0} onClose={() => {}} />
      <Toast message="작업이 성공적으로 완료되었습니다." variant="success" duration={0} onClose={() => {}} />
      <Toast message="주의가 필요한 상황입니다." variant="warning" duration={0} onClose={() => {}} />
      <Toast message="오류가 발생했습니다. 다시 시도해 주세요." variant="error" duration={0} onClose={() => {}} />
    </div>
  ),
};

/** 닫기 버튼 포함 */
export const WithClose: Story = {
  args: {
    message: "파일이 업로드되었습니다.",
    variant: "success",
    onClose: () => {},
    duration: 0,
  },
};

/** 긴 메시지 */
export const LongMessage: Story = {
  args: {
    message: "민원 신청이 정상적으로 접수되었습니다. 처리 결과는 등록하신 이메일과 SMS로 안내드립니다.",
    variant: "success",
    onClose: () => {},
    duration: 0,
  },
};

/** 에러 토스트 */
export const Error: Story = {
  args: {
    message: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    variant: "error",
    onClose: () => {},
    duration: 0,
  },
};
