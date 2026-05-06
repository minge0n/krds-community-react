import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./index";
import "./calendar.css";

/**
 * ## 캘린더 (Calendar)
 *
 * 날짜를 선택할 수 있는 달력 컴포넌트입니다.
 * 트리거 버튼을 클릭하면 달력 팝업이 표시되며, 날짜를 선택할 수 있습니다.
 *
 * ### 사용 규칙
 * - 특정 날짜를 선택해야 하는 경우 사용합니다
 * - 날짜 범위 제한이 필요한 경우 `min`, `max` 속성을 활용합니다
 * - 라벨을 제공하여 어떤 날짜를 선택하는지 명확히 합니다
 *
 * ### 접근성
 * - 달력 팝업에 `role="dialog"`가 적용됩니다
 * - 각 날짜 버튼에 `aria-label`로 전체 날짜가 표시됩니다
 * - 선택된 날짜에 `aria-selected="true"`가 적용됩니다
 * - 트리거 버튼에 `aria-expanded`, `aria-haspopup` 속성이 적용됩니다
 */
const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "date",
      description: "선택된 날짜",
      table: {
        type: { summary: "Date | null" },
      },
    },
    onChange: {
      action: "changed",
      description: "날짜 변경 핸들러",
      table: {
        type: { summary: "(date: Date | null) => void" },
      },
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
      table: {
        defaultValue: { summary: "날짜 선택" },
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
    invalid: {
      control: "boolean",
      description: "에러 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    label: {
      control: "text",
      description: "라벨 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    placeholder: "날짜 선택",
    disabled: false,
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/** 기본 캘린더 */
export const Default: Story = {};

/** 라벨이 있는 캘린더 */
export const WithLabel: Story = {
  args: {
    label: "예약 날짜",
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    label: "예약 날짜",
    disabled: true,
  },
};

/** 에러 상태 */
export const Invalid: Story = {
  args: {
    label: "예약 날짜",
    invalid: true,
  },
};

/** 날짜 범위 제한 */
export const WithMinMax: Story = {
  args: {
    label: "예약 가능 날짜",
    min: new Date(2025, 0, 1),
    max: new Date(2025, 11, 31),
    placeholder: "2025년 내 날짜 선택",
  },
};
