import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextualHelp } from "./index";
import "./contextual-help.css";

/**
 * ## 맥락 도움말 (Contextual Help)
 *
 * 특정 UI 요소에 대한 추가 설명이나 도움말을 팝오버 형태로 제공하는 컴포넌트입니다.
 * 물음표 아이콘을 클릭하면 관련 도움말이 표시됩니다.
 *
 * ### 사용 규칙
 * - 복잡한 입력 필드나 용어 옆에 배치합니다
 * - 도움말 내용은 간결하게 작성합니다 (1~3문장)
 * - 필수 정보는 도움말이 아닌 화면에 직접 표시합니다
 *
 * ### 접근성
 * - 트리거 버튼에 `aria-label="도움말"`이 적용됩니다
 * - 팝오버에 화살표(arrow)가 표시되어 연관 요소를 시각적으로 연결합니다
 * - ESC 키로 팝오버를 닫을 수 있습니다
 */
const meta: Meta<typeof ContextualHelp> = {
  title: "Components/ContextualHelp",
  component: ContextualHelp,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "도움말 내용",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    title: {
      control: "text",
      description: "도움말 제목",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "팝오버 표시 위치",
      table: {
        defaultValue: { summary: "bottom" },
        type: { summary: "top | bottom | left | right" },
      },
    },
    label: {
      control: "text",
      description: "트리거 버튼 접근성 라벨",
      table: {
        defaultValue: { summary: "도움말" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    content: "이 필드에는 주민등록번호 앞 6자리를 입력합니다.",
    title: "생년월일 입력",
    side: "bottom",
    label: "도움말",
  },
};

export default meta;
type Story = StoryObj<typeof ContextualHelp>;

/** 기본 맥락 도움말 */
export const Default: Story = {};

/** 제목 없는 도움말 */
export const WithoutTitle: Story = {
  args: {
    title: undefined,
    content: "비밀번호는 8자 이상, 영문·숫자·특수문자를 포함해야 합니다.",
  },
};

/** 입력 필드와 함께 사용 */
export const WithInput: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <label style={{ fontSize: "14px", fontWeight: 500 }}>이메일 주소</label>
      <ContextualHelp
        title="이메일 형식"
        content="example@domain.com 형식으로 입력해 주세요. 인증 메일이 발송됩니다."
        side="right"
      />
    </div>
  ),
};

/** 다양한 위치 */
export const Positions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "40px", padding: "80px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px" }}>상단</span>
        <ContextualHelp content="위쪽에 표시됩니다." side="top" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px" }}>하단</span>
        <ContextualHelp content="아래쪽에 표시됩니다." side="bottom" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px" }}>좌측</span>
        <ContextualHelp content="왼쪽에 표시됩니다." side="left" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px" }}>우측</span>
        <ContextualHelp content="오른쪽에 표시됩니다." side="right" />
      </div>
    </div>
  ),
};
