import type { Meta, StoryObj } from "@storybook/react-vite";
import { Identifier } from "./index";
import "./identifier.css";

/**
 * ## 식별자 (Identifier)
 *
 * 정부/공공기관의 공식 사이트임을 나타내는 식별 영역입니다.
 * 기관명, 로고, 설명, 관련 링크를 포함하여 사이트의 신뢰성을 전달합니다.
 *
 * ### 사용 규칙
 * - 페이지 최하단(푸터 아래)에 배치합니다
 * - 기관명은 필수로 표시합니다
 * - 정부 공식 로고를 사용합니다
 * - 관련 법적 링크를 제공합니다
 *
 * ### 접근성
 * - `role="contentinfo"`로 사이트 정보 영역임을 명시합니다
 * - 링크 영역에 `aria-label="관련 링크"`가 적용됩니다
 */
const meta: Meta<typeof Identifier> = {
  title: "Components/Identifier",
  component: Identifier,
  tags: ["autodocs"],
  argTypes: {
    orgName: {
      control: "text",
      description: "기관명",
      table: {
        type: { summary: "string" },
      },
    },
    logo: {
      control: "text",
      description: "로고 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    description: {
      control: "text",
      description: "기관 설명",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    links: {
      control: "object",
      description: "관련 링크 목록",
      table: {
        type: { summary: "{ label: string; href: string }[]" },
      },
    },
  },
  args: {
    orgName: "행정안전부",
    description: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "접근성 정책", href: "/accessibility" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Identifier>;

/** 기본 식별자 */
export const Default: Story = {};

/** 로고 포함 */
export const WithLogo: Story = {
  args: {
    orgName: "대한민국 정부",
    logo: <span style={{ fontSize: "24px" }}>🇰🇷</span>,
    description: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

/** 링크 없는 간단한 형태 */
export const Simple: Story = {
  args: {
    orgName: "과학기술정보통신부",
    description: "국민과 함께하는 과학기술 행정",
    links: undefined,
  },
};

/** 전체 구성 */
export const FullIdentifier: Story = {
  render: () => (
    <Identifier
      orgName="행정안전부"
      logo={
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#1a56db" strokeWidth="2" />
          <text x="16" y="20" textAnchor="middle" fontSize="10" fill="#1a56db">GOV</text>
        </svg>
      }
      description="행정안전부는 안전하고 편리한 대한민국을 만들어갑니다."
      links={[
        { label: "개인정보처리방침", href: "/privacy" },
        { label: "저작권 정책", href: "/copyright" },
        { label: "이용약관", href: "/terms" },
        { label: "접근성 정책", href: "/accessibility" },
        { label: "누리집 안내", href: "/about" },
      ]}
    />
  ),
};
