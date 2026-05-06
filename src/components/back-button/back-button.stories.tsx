import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackButton } from "./index";
import "./back-button.css";

/**
 * ## 뒤로가기 버튼 (Back Button)
 *
 * 이전 페이지 또는 이전 단계로 돌아가는 네비게이션 버튼입니다.
 * 모바일 환경에서 주로 상단 헤더 영역에 배치됩니다.
 *
 * ### 사용 규칙
 * - 페이지 상단 좌측에 배치합니다
 * - 뒤로 갈 페이지가 없는 경우 표시하지 않습니다
 * - 라벨 텍스트는 상황에 맞게 변경할 수 있습니다 (예: "목록으로")
 *
 * ### 접근성
 * - `aria-label`로 버튼의 동작을 설명합니다
 * - 키보드 포커스 시 `:focus-visible` 아웃라인이 표시됩니다
 * - 아이콘과 텍스트 라벨이 함께 제공됩니다
 */
const meta: Meta<typeof BackButton> = {
  title: "Components/BackButton",
  component: BackButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "버튼 라벨 (접근성 라벨 겸용)",
      table: {
        defaultValue: { summary: "뒤로 가기" },
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "클릭 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    label: "뒤로 가기",
  },
};

export default meta;
type Story = StoryObj<typeof BackButton>;

/** 기본 뒤로가기 버튼 */
export const Default: Story = {};

/** 커스텀 라벨 */
export const CustomLabel: Story = {
  args: {
    label: "목록으로",
  },
};

/** 헤더 내 배치 예시 */
export const InHeader: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <BackButton label="뒤로 가기" />
      <span style={{ fontSize: "16px", fontWeight: 600 }}>페이지 제목</span>
    </div>
  ),
};

/** 다양한 라벨 예시 */
export const LabelVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <BackButton label="뒤로 가기" />
      <BackButton label="목록으로" />
      <BackButton label="이전 단계" />
    </div>
  ),
};
