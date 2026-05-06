import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./index";
import "./text-input.css";

/**
 * ## 텍스트 입력 필드 (Text Input)
 *
 * 사용자가 키보드로 한 줄의 짧은 텍스트를 입력하는 경우에 사용합니다.
 *
 * ### 사용 규칙
 * - 라벨은 인풋 위에 배치
 * - 필수 필드는 라벨에 `*` 표시
 * - 에러 메시지는 필드 바로 아래에 빨간색으로
 * - 힌트 텍스트는 필드 아래에 회색으로
 *
 * ### 접근성
 * - `label`과 `input`이 자동으로 `htmlFor`/`id`로 연결
 * - `aria-invalid` 에러 시 자동 적용
 * - `aria-describedby`로 힌트/에러 메시지 연결
 */
const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: "text", description: "라벨 텍스트" },
    placeholder: { control: "text", description: "플레이스홀더" },
    hint: { control: "text", description: "도움말 텍스트" },
    error: { control: "text", description: "에러 메시지" },
    invalid: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화" },
    readOnly: { control: "boolean", description: "읽기 전용" },
    value: { control: "text", description: "입력값" },
    type: {
      control: "select",
      options: ["text", "email", "password", "tel", "url", "number"],
      description: "입력 타입",
    },
  },
  args: {
    label: "레이블",
    placeholder: "플레이스홀더",
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

/** 기본 상태 */
export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력해 주세요",
    hint: "실명을 입력해 주세요",
  },
};

/** 에러 상태 */
export const Error: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    value: "invalid-email",
    invalid: true,
    error: "올바른 이메일 형식이 아닙니다",
  },
};

/** 비활성화 */
export const Disabled: Story = {
  args: {
    label: "이름",
    value: "홍길동",
    disabled: true,
  },
};

/** 읽기 전용 */
export const ReadOnly: Story = {
  args: {
    label: "주민등록번호",
    value: "900101-*******",
    readOnly: true,
  },
};

/** 모든 상태 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
      <TextInput label="기본" placeholder="입력해 주세요" hint="도움말 텍스트" />
      <TextInput label="입력됨" value="입력된 값" hint="도움말 텍스트" />
      <TextInput label="에러" value="잘못된 값" invalid error="필수 항목입니다" />
      <TextInput label="비활성화" value="비활성화" disabled />
      <TextInput label="읽기 전용" value="읽기 전용" readOnly />
    </div>
  ),
};

/** 폼 구성 예시 */
export const FormExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <TextInput label="성명" placeholder="홍길동" />
      <TextInput label="연락처" placeholder="010-0000-0000" type="tel" />
      <TextInput label="이메일" placeholder="example@email.com" type="email" hint="알림을 받을 이메일 주소" />
    </div>
  ),
};
