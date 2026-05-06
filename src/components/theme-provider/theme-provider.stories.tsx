import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "./index";
import "./theme-provider.css";
import "../../styles/tokens.css";

/**
 * ## ThemeProvider
 *
 * 테마 모드를 제어하고 CSS 변수 오버라이드를 적용하는 컨텍스트 프로바이더입니다.
 *
 * ### 사용 규칙
 * - `mode`로 light / high-contrast / system 전환
 * - `overrides`로 개별 CSS 변수를 인라인 오버라이드
 * - 자식 컴포넌트에서 `useTheme()` 훅으로 현재 모드 조회 가능
 */
const meta: Meta<typeof ThemeProvider> = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["light", "high-contrast", "system"],
      description: "테마 모드",
      table: {
        defaultValue: { summary: "light" },
        type: { summary: "light | high-contrast | system" },
      },
    },
  },
  args: {
    mode: "light",
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

const SampleContent = () => (
  <div
    style={{
      padding: "24px",
      backgroundColor: "var(--krds-light-color-background-white)",
      border: "1px solid var(--krds-light-color-border-gray)",
      borderRadius: "8px",
    }}
  >
    <h3
      style={{
        margin: "0 0 8px",
        color: "var(--krds-light-color-text-bolder)",
      }}
    >
      샘플 콘텐츠
    </h3>
    <p
      style={{
        margin: "0 0 16px",
        color: "var(--krds-light-color-text-subtle)",
      }}
    >
      ThemeProvider가 적용된 영역입니다.
    </p>
    <button
      type="button"
      style={{
        padding: "8px 16px",
        backgroundColor: "var(--krds-light-color-button-primary-fill)",
        color: "var(--krds-light-color-text-inverse-static)",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      버튼
    </button>
  </div>
);

/** 기본 (Light 모드) */
export const Default: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <SampleContent />
    </ThemeProvider>
  ),
};

/** 고대비 모드 */
export const HighContrast: Story = {
  args: {
    mode: "high-contrast",
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <SampleContent />
    </ThemeProvider>
  ),
};

/** CSS 변수 오버라이드 */
export const CustomOverrides: Story = {
  args: {
    mode: "light",
    overrides: {
      "--krds-light-color-button-primary-fill": "#e11d48",
      "--krds-light-color-text-bolder": "#1e293b",
    },
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <SampleContent />
    </ThemeProvider>
  ),
};
