import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInput } from "./index";
import "./date-input.css";

/**
 * ## 날짜 입력 (Date Input)
 *
 * 키보드로 날짜를 직접 입력할 수 있는 텍스트 필드 컴포넌트입니다.
 * 숫자 입력 시 자동으로 YYYY-MM-DD 형식으로 포맷됩니다.
 *
 * ### 사용 규칙
 * - 정확한 날짜를 알고 있는 경우 (생년월일, 발급일 등) 사용합니다
 * - 날짜를 탐색하며 선택해야 하는 경우 Calendar 컴포넌트를 사용합니다
 * - 라벨과 힌트 텍스트를 함께 제공하여 입력 형식을 안내합니다
 *
 * ### 접근성
 * - `inputMode="numeric"`으로 모바일에서 숫자 키패드가 표시됩니다
 * - `aria-invalid`로 에러 상태가 전달됩니다
 * - `aria-describedby`로 힌트/에러 메시지가 연결됩니다
 * - 라벨과 입력 필드가 `htmlFor`/`id`로 연결됩니다
 */
const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "라벨 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    hint: {
      control: "text",
      description: "힌트 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    error: {
      control: "text",
      description: "에러 메시지",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    invalid: {
      control: "boolean",
      description: "에러 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    format: {
      control: "text",
      description: "날짜 형식 마스크 (플레이스홀더)",
      table: {
        defaultValue: { summary: "YYYY-MM-DD" },
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "입력 값 (YYYY-MM-DD)",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    label: "생년월일",
    hint: "예: 1990-01-15",
    invalid: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

/** 기본 날짜 입력 */
export const Default: Story = {};

/** 값이 입력된 상태 */
export const WithValue: Story = {
  args: {
    label: "발급일",
    value: "2025-01-15",
    hint: "인증서 발급일을 입력하세요",
  },
};

/** 에러 상태 */
export const Invalid: Story = {
  args: {
    label: "생년월일",
    value: "2025-13-45",
    invalid: true,
    error: "올바른 날짜 형식이 아닙니다. (예: 1990-01-15)",
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    label: "등록일",
    value: "2024-06-01",
    disabled: true,
  },
};

/** 다양한 상태 비교 */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "320px" }}>
      <DateInput label="기본" hint="YYYY-MM-DD 형식으로 입력" />
      <DateInput label="입력됨" value="2025-03-20" />
      <DateInput label="에러" value="2025-99-99" invalid error="유효하지 않은 날짜입니다." />
      <DateInput label="비활성화" value="2024-01-01" disabled />
    </div>
  ),
};
