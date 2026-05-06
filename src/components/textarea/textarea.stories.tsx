import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./index";
import "./textarea.css";

/**
 * ## 텍스트 영역 (Textarea)
 *
 * 여러 줄의 텍스트를 입력할 수 있는 폼 컴포넌트입니다.
 * 의견, 설명, 내용 등 긴 텍스트 입력에 사용합니다.
 *
 * ### 사용 규칙
 * - 라벨을 반드시 제공합니다
 * - 글자 수 제한이 있는 경우 카운터를 표시합니다
 * - 최소 3줄 이상의 높이를 제공합니다
 * - placeholder로 입력 예시를 안내합니다
 *
 * ### 접근성
 * - `<label>`과 `<textarea>`가 `htmlFor`/`id`로 연결됩니다
 * - 글자 수 카운터에 `aria-live="polite"` 적용
 * - 필수 입력 시 `required` 속성을 사용합니다
 */
const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "라벨 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    maxCount: {
      control: "number",
      description: "최대 글자 수",
      table: {
        type: { summary: "number" },
      },
    },
    count: {
      control: "number",
      description: "현재 글자 수",
      table: {
        type: { summary: "number" },
      },
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더",
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
    rows: {
      control: "number",
      description: "표시 줄 수",
      table: {
        type: { summary: "number" },
      },
    },
  },
  args: {
    label: "내용",
    placeholder: "내용을 입력해 주세요",
    rows: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/** 기본 텍스트 영역 */
export const Default: Story = {};

/** 글자 수 카운터 */
export const WithCounter: Story = {
  args: {
    label: "의견 작성",
    maxCount: 500,
    count: 42,
    placeholder: "의견을 입력해 주세요 (최대 500자)",
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    label: "비고",
    disabled: true,
    placeholder: "입력할 수 없습니다",
  },
};

/** 다양한 상태 */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
      <Textarea label="기본" placeholder="내용을 입력해 주세요" rows={3} />
      <Textarea label="글자 수 제한" placeholder="최대 200자" maxCount={200} count={0} rows={3} />
      <Textarea label="비활성화" placeholder="입력 불가" disabled rows={3} />
    </div>
  ),
};

/** 실제 사용 예시 - 민원 내용 */
export const CivilComplaint: Story = {
  args: {
    label: "민원 내용",
    placeholder: "민원 내용을 상세히 작성해 주세요.\n- 발생 일시\n- 발생 장소\n- 상세 내용",
    maxCount: 1000,
    count: 0,
    rows: 8,
  },
};
