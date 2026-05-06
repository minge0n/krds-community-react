import type { Meta, StoryObj } from "@storybook/react-vite";
import { Disclosure } from "./index";
import "./disclosure.css";

/**
 * ## 디스클로저 (Disclosure)
 *
 * 콘텐츠를 접고 펼 수 있는 토글 컴포넌트입니다.
 * 부가 정보나 상세 내용을 필요할 때만 표시하여 화면을 간결하게 유지합니다.
 *
 * ### 사용 규칙
 * - 기본적으로 접힌 상태로 표시합니다
 * - 트리거 라벨은 펼쳐질 내용을 명확히 설명해야 합니다
 * - 중요한 정보는 디스클로저 안에 숨기지 않습니다
 * - 여러 개를 나열할 경우 Accordion 컴포넌트 사용을 고려합니다
 *
 * ### 접근성
 * - 트리거 버튼에 `aria-expanded` 상태가 자동 관리됩니다
 * - 콘텐츠 영역이 접힐 때 DOM에서 숨겨집니다
 * - 키보드 Enter/Space로 토글할 수 있습니다
 */
const meta: Meta<typeof Disclosure> = {
  title: "Components/Disclosure",
  component: Disclosure,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "트리거 버튼 라벨",
      table: {
        type: { summary: "string" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "초기 열림 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    children: {
      control: "text",
      description: "펼쳐질 콘텐츠",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    label: "자세히 보기",
    defaultOpen: false,
    children: "이곳에 추가 정보가 표시됩니다. 필요한 경우에만 펼쳐서 확인할 수 있습니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

/** 기본 디스클로저 */
export const Default: Story = {};

/** 기본 열림 상태 */
export const DefaultOpen: Story = {
  args: {
    label: "이용 안내",
    defaultOpen: true,
    children: "서비스 이용 시간은 평일 09:00~18:00입니다. 주말 및 공휴일은 운영하지 않습니다.",
  },
};

/** 여러 개 나열 */
export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Disclosure label="신청 자격">
        대한민국 국적을 가진 만 19세 이상 성인이면 누구나 신청할 수 있습니다.
      </Disclosure>
      <Disclosure label="필요 서류">
        신분증, 주민등록등본, 소득증명서가 필요합니다. 모든 서류는 발급일로부터 3개월 이내여야 합니다.
      </Disclosure>
      <Disclosure label="처리 기간">
        접수일로부터 영업일 기준 7일 이내에 처리됩니다. 서류 보완이 필요한 경우 추가 시간이 소요될 수 있습니다.
      </Disclosure>
    </div>
  ),
};

/** 긴 콘텐츠 */
export const LongContent: Story = {
  args: {
    label: "개인정보 처리방침",
    children:
      "본 기관은 개인정보 보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. 수집하는 개인정보 항목: 성명, 생년월일, 연락처, 이메일 주소. 개인정보의 수집 및 이용 목적: 서비스 제공, 본인 확인, 민원 처리.",
  },
};
