import type { Meta, StoryObj } from "@storybook/react-vite";
import { CriticalAlert } from "./index";
import "./critical-alert.css";

/**
 * ## 긴급 알림 (Critical Alert)
 *
 * 사용자에게 즉각적인 주의가 필요한 중요 정보를 전달하는 알림 컴포넌트입니다.
 * 시스템 오류, 보안 경고, 중요 안내 등에 사용합니다.
 *
 * ### 사용 규칙
 * - **danger**: 시스템 오류, 데이터 손실 위험 등 치명적 상황
 * - **warning**: 주의가 필요한 상황 (만료 임박, 제한 초과 등)
 * - **info**: 중요하지만 긴급하지 않은 안내
 * - 페이지당 1개의 긴급 알림만 표시하는 것을 권장합니다
 *
 * ### 접근성
 * - `role="alert"`와 `aria-live="assertive"`가 적용됩니다
 * - 스크린리더가 즉시 알림 내용을 읽어줍니다
 * - 닫기 버튼에 `aria-label="알림 닫기"`가 제공됩니다
 */
const meta: Meta<typeof CriticalAlert> = {
  title: "Components/CriticalAlert",
  component: CriticalAlert,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["danger", "warning", "info"],
      description: "알림 유형",
      table: {
        defaultValue: { summary: "danger" },
        type: { summary: "danger | warning | info" },
      },
    },
    title: {
      control: "text",
      description: "알림 제목",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      control: "text",
      description: "알림 내용",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    closable: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
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
    variant: "danger",
    title: "시스템 점검 안내",
    children: "2025년 1월 15일 02:00~06:00 시스템 점검이 예정되어 있습니다.",
    closable: false,
  },
};

export default meta;
type Story = StoryObj<typeof CriticalAlert>;

/** 기본 위험 알림 */
export const Default: Story = {};

/** 모든 변형 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <CriticalAlert variant="danger" title="서비스 장애">
        현재 일부 서비스에 장애가 발생하였습니다. 복구 작업 중입니다.
      </CriticalAlert>
      <CriticalAlert variant="warning" title="인증서 만료 임박">
        공동인증서가 7일 후 만료됩니다. 갱신해 주세요.
      </CriticalAlert>
      <CriticalAlert variant="info" title="서비스 변경 안내">
        2025년 2월부터 로그인 방식이 변경됩니다.
      </CriticalAlert>
    </div>
  ),
};

/** 닫기 버튼 포함 */
export const Closable: Story = {
  args: {
    variant: "warning",
    title: "세션 만료 임박",
    children: "10분 후 자동 로그아웃됩니다. 계속 이용하시려면 연장 버튼을 눌러주세요.",
    closable: true,
  },
};

/** 액션 버튼 포함 */
export const WithAction: Story = {
  render: () => (
    <CriticalAlert
      variant="warning"
      title="비밀번호 변경 필요"
      action={
        <button type="button" style={{ padding: "4px 12px", fontSize: "13px", cursor: "pointer" }}>
          지금 변경하기
        </button>
      }
    >
      비밀번호를 6개월 이상 변경하지 않았습니다. 보안을 위해 변경해 주세요.
    </CriticalAlert>
  ),
};

/** 제목 없는 알림 */
export const WithoutTitle: Story = {
  args: {
    variant: "info",
    title: undefined,
    children: "이 페이지는 2025년 3월 1일부터 새로운 주소로 이전됩니다.",
  },
};
