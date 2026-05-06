import type { Meta, StoryObj } from "@storybook/react-vite";
import { Masthead } from "./index";
import "./masthead.css";

/**
 * ## 마스트헤드 (Masthead)
 *
 * 대한민국 공식 전자정부 누리집임을 나타내는 최상단 배너입니다.
 * 모든 정부/공공기관 사이트에 필수로 표시해야 합니다.
 *
 * ### 사용 규칙
 * - 페이지 최상단(헤더 위)에 배치합니다
 * - 표준 문구를 사용합니다: "이 누리집은 대한민국 공식 전자정부 누리집입니다."
 * - 정부 로고를 함께 표시합니다
 * - 스타일을 임의로 변경하지 않습니다
 *
 * ### 접근성
 * - `role="banner"`로 사이트 식별 영역임을 명시합니다
 * - 텍스트가 충분한 대비를 가집니다
 */
const meta: Meta<typeof Masthead> = {
  title: "Components/Masthead",
  component: Masthead,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "마스트헤드 텍스트",
      table: {
        defaultValue: { summary: "이 누리집은 대한민국 공식 전자정부 누리집입니다." },
        type: { summary: "ReactNode" },
      },
    },
    logo: {
      control: "text",
      description: "로고/아이콘 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    text: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Masthead>;

/** 기본 마스트헤드 */
export const Default: Story = {};

/** 로고 포함 */
export const WithLogo: Story = {
  args: {
    logo: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
        <text x="10" y="14" textAnchor="middle" fontSize="8" fill="currentColor">G</text>
      </svg>
    ),
  },
};

/** 커스텀 텍스트 */
export const CustomText: Story = {
  args: {
    text: "이 누리집은 대한민국 정부 공식 누리집입니다.",
    logo: <span style={{ fontSize: "16px" }}>🏛️</span>,
  },
};

/** 페이지 상단 배치 예시 */
export const InPageContext: Story = {
  render: () => (
    <div>
      <Masthead
        text="이 누리집은 대한민국 공식 전자정부 누리집입니다."
        logo={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
            <text x="9" y="12" textAnchor="middle" fontSize="7" fill="currentColor">G</text>
          </svg>
        }
      />
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #e5e5e5", fontWeight: 600 }}>
        헤더 영역
      </div>
      <div style={{ padding: "24px 16px", color: "#666", fontSize: "14px" }}>
        페이지 콘텐츠 영역
      </div>
    </div>
  ),
};
