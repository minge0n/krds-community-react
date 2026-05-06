import type { Meta, StoryObj } from "@storybook/react-vite";
import { SplashScreen } from "./index";
import "./splash-screen.css";

/**
 * ## 스플래시 스크린 (Splash Screen)
 *
 * 앱 또는 서비스 초기 로딩 시 표시되는 전체 화면 로딩 화면입니다.
 * 브랜드 로고와 로딩 인디케이터를 함께 표시합니다.
 *
 * ### 사용 규칙
 * - 앱 최초 로딩 시에만 사용합니다
 * - 로딩 완료 후 즉시 사라져야 합니다
 * - 로고와 서비스명을 표시합니다
 * - 로딩 시간이 길 경우 진행 상태를 표시합니다
 *
 * ### 접근성
 * - `role="status"`로 로딩 상태임을 명시합니다
 * - `aria-label`로 현재 상태를 설명합니다
 * - 로딩 인디케이터에 `aria-hidden="true"` 적용
 */
const meta: Meta<typeof SplashScreen> = {
  title: "Components/SplashScreen",
  component: SplashScreen,
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: "text",
      description: "로고 요소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    title: {
      control: "text",
      description: "서비스 제목",
      table: {
        type: { summary: "string" },
      },
    },
    loading: {
      control: "boolean",
      description: "로딩 인디케이터 표시 여부",
      table: {
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    title: "전자정부 서비스",
    loading: true,
  },
};

export default meta;
type Story = StoryObj<typeof SplashScreen>;

/** 기본 스플래시 스크린 */
export const Default: Story = {};

/** 로고 포함 */
export const WithLogo: Story = {
  args: {
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" stroke="#1a56db" strokeWidth="3" />
        <text x="32" y="38" textAnchor="middle" fontSize="16" fill="#1a56db" fontWeight="bold">GOV</text>
      </svg>
    ),
    title: "정부24",
  },
};

/** 로딩 없음 */
export const NoLoading: Story = {
  args: {
    logo: <span style={{ fontSize: "48px" }}>🏛️</span>,
    title: "대한민국 정부",
    loading: false,
  },
};

/** 전체 화면 예시 */
export const FullScreen: Story = {
  render: () => (
    <div style={{ height: "400px", background: "#fff", borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e5e5" }}>
      <SplashScreen
        logo={
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="24" stroke="#1a56db" strokeWidth="2.5" />
            <path d="M20 28l6 6 10-12" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="민원서비스"
        loading={true}
      />
    </div>
  ),
};
