import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, RadioGroup } from "./index";
import "./radio.css";

/**
 * ## 라디오 버튼 (Radio)
 *
 * 여러 옵션 중 하나만 선택할 수 있는 입력 컴포넌트입니다.
 * RadioGroup으로 그룹화하여 사용합니다.
 *
 * ### 사용 규칙
 * - 2~7개의 옵션이 있을 때 사용합니다
 * - 옵션이 많으면 Select(드롭다운)를 사용합니다
 * - 기본 선택값을 제공하는 것을 권장합니다
 * - 라벨은 간결하고 명확하게 작성합니다
 *
 * ### 접근성
 * - `<fieldset>`과 `<legend>`로 그룹을 구성합니다
 * - 각 라디오에 `<label>`이 연결됩니다
 * - 키보드 화살표로 옵션 간 이동이 가능합니다
 * - 그룹 라벨은 `sr-only`로 스크린리더에만 전달됩니다
 */
const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "라디오 라벨",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    description: {
      control: "text",
      description: "보조 설명",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    name: {
      control: "text",
      description: "라디오 그룹 이름",
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
    checked: {
      control: "boolean",
      description: "선택 상태",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    label: "옵션 1",
    name: "demo",
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/** 기본 라디오 버튼 */
export const Default: Story = {};

/** 라디오 그룹 (가로) */
export const HorizontalGroup: Story = {
  render: () => (
    <RadioGroup label="알림 수신 방법" direction="row">
      <Radio name="notification" label="이메일" defaultChecked />
      <Radio name="notification" label="SMS" />
      <Radio name="notification" label="앱 푸시" />
    </RadioGroup>
  ),
};

/** 라디오 그룹 (세로) */
export const VerticalGroup: Story = {
  render: () => (
    <RadioGroup label="배송 방법 선택" direction="column">
      <Radio name="delivery" label="일반 배송 (3~5일)" defaultChecked />
      <Radio name="delivery" label="빠른 배송 (1~2일)" />
      <Radio name="delivery" label="당일 배송" />
    </RadioGroup>
  ),
};

/** 설명 포함 */
export const WithDescription: Story = {
  render: () => (
    <RadioGroup label="인증 방법" direction="column">
      <Radio
        name="auth"
        label="공동인증서"
        description="기존 공인인증서로 본인 인증을 진행합니다."
        defaultChecked
      />
      <Radio
        name="auth"
        label="간편인증"
        description="카카오, 네이버 등 간편인증 앱으로 인증합니다."
      />
      <Radio
        name="auth"
        label="SMS 인증"
        description="휴대폰 문자 메시지로 인증번호를 받습니다."
      />
    </RadioGroup>
  ),
};

/** 비활성화 항목 포함 */
export const WithDisabled: Story = {
  render: () => (
    <RadioGroup label="결제 수단" direction="column">
      <Radio name="payment" label="신용카드" defaultChecked />
      <Radio name="payment" label="계좌이체" />
      <Radio name="payment" label="가상화폐" disabled />
    </RadioGroup>
  ),
};
