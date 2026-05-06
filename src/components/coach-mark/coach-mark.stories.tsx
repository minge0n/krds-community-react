import type { Meta, StoryObj } from "@storybook/react-vite";
import { CoachMark } from "./index";
import "./coach-mark.css";

/**
 * ## 코치마크 (Coach Mark)
 *
 * 사용자에게 UI 요소의 기능이나 사용법을 단계별로 안내하는 툴팁형 가이드입니다.
 * 신규 기능 소개나 온보딩 과정에서 사용합니다.
 *
 * ### 사용 규칙
 * - 처음 방문한 사용자 또는 신규 기능 출시 시 사용합니다
 * - 단계는 최대 5단계를 넘지 않도록 합니다
 * - 사용자가 언제든 건너뛸 수 있어야 합니다
 * - 한 번 완료한 가이드는 다시 표시하지 않습니다
 *
 * ### 접근성
 * - `role="tooltip"`과 `aria-live="polite"`가 적용됩니다
 * - 닫기 버튼에 `aria-label="닫기"`가 제공됩니다
 * - 키보드로 이전/다음/닫기 조작이 가능합니다
 */
const meta: Meta<typeof CoachMark> = {
  title: "Components/CoachMark",
  component: CoachMark,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "코치마크 제목",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    description: {
      control: "text",
      description: "코치마크 설명",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    currentStep: {
      control: "number",
      description: "현재 단계 (1부터 시작)",
      table: {
        type: { summary: "number" },
      },
    },
    totalSteps: {
      control: "number",
      description: "전체 단계 수",
      table: {
        type: { summary: "number" },
      },
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "표시 위치",
      table: {
        defaultValue: { summary: "bottom" },
        type: { summary: "top | bottom | left | right" },
      },
    },
    closable: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      table: {
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    nextText: {
      control: "text",
      description: "다음 버튼 텍스트",
      table: {
        defaultValue: { summary: "다음" },
        type: { summary: "string" },
      },
    },
    prevText: {
      control: "text",
      description: "이전 버튼 텍스트",
      table: {
        defaultValue: { summary: "이전" },
        type: { summary: "string" },
      },
    },
    closeText: {
      control: "text",
      description: "닫기(완료) 버튼 텍스트",
      table: {
        defaultValue: { summary: "닫기" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    title: "새로운 기능",
    description: "여기를 클릭하면 새로운 기능을 사용할 수 있습니다.",
    currentStep: 1,
    totalSteps: 3,
    placement: "bottom",
    closable: true,
  },
};

export default meta;
type Story = StoryObj<typeof CoachMark>;

/** 기본 코치마크 */
export const Default: Story = {};

/** 단일 안내 (단계 없음) */
export const SingleGuide: Story = {
  args: {
    title: "검색 기능",
    description: "키워드를 입력하여 원하는 서비스를 빠르게 찾을 수 있습니다.",
    currentStep: undefined,
    totalSteps: undefined,
  },
};

/** 다양한 위치 */
export const Placements: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "60px" }}>
      <CoachMark
        title="상단 배치"
        description="위쪽에 표시되는 코치마크입니다."
        placement="top"
        currentStep={1}
        totalSteps={4}
      />
      <CoachMark
        title="하단 배치"
        description="아래쪽에 표시되는 코치마크입니다."
        placement="bottom"
        currentStep={2}
        totalSteps={4}
      />
      <CoachMark
        title="좌측 배치"
        description="왼쪽에 표시되는 코치마크입니다."
        placement="left"
        currentStep={3}
        totalSteps={4}
      />
      <CoachMark
        title="우측 배치"
        description="오른쪽에 표시되는 코치마크입니다."
        placement="right"
        currentStep={4}
        totalSteps={4}
      />
    </div>
  ),
};

/** 마지막 단계 (완료 버튼) */
export const LastStep: Story = {
  args: {
    title: "가이드 완료",
    description: "모든 안내를 확인하셨습니다. 이제 서비스를 이용해 보세요!",
    currentStep: 3,
    totalSteps: 3,
    closeText: "완료",
  },
};

/** 닫기 버튼 없음 */
export const NotClosable: Story = {
  args: {
    title: "필수 안내",
    description: "이 안내는 반드시 확인해야 합니다.",
    closable: false,
    currentStep: 1,
    totalSteps: 2,
  },
};
