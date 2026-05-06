import type { Meta, StoryObj } from "@storybook/react-vite";
import { Favicon } from "./index";
import "./favicon.css";

/**
 * ## 파비콘 (Favicon)
 *
 * 브라우저 탭에 표시되는 사이트 아이콘을 설정하는 컴포넌트입니다.
 * HTML `<head>` 영역에 `<link rel="icon">` 태그를 렌더링합니다.
 *
 * ### 사용 규칙
 * - 정부/공공기관 사이트는 KRDS 표준 파비콘을 사용합니다
 * - 16x16, 32x32, 180x180 등 다양한 크기를 제공합니다
 * - ICO, PNG, SVG 형식을 지원합니다
 *
 * ### 접근성
 * - 파비콘은 시각적 식별 요소로, 접근성에 직접적 영향은 없습니다
 * - 사이트 식별을 돕는 보조적 역할을 합니다
 */
const meta: Meta<typeof Favicon> = {
  title: "Components/Favicon",
  component: Favicon,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "파비콘 파일 경로",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: "select",
      options: ["image/x-icon", "image/png", "image/svg+xml"],
      description: "파비콘 MIME 타입",
      table: {
        defaultValue: { summary: "image/x-icon" },
        type: { summary: "string" },
      },
    },
    sizes: {
      control: "text",
      description: "아이콘 크기 (예: 32x32)",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    href: "/favicon.ico",
    type: "image/x-icon",
  },
};

export default meta;
type Story = StoryObj<typeof Favicon>;

/** 기본 파비콘 */
export const Default: Story = {};

/** PNG 파비콘 */
export const PngFavicon: Story = {
  args: {
    href: "/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
  },
};

/** SVG 파비콘 */
export const SvgFavicon: Story = {
  args: {
    href: "/favicon.svg",
    type: "image/svg+xml",
  },
};

/** 다양한 크기 설정 */
export const MultipleSizes: Story = {
  render: () => (
    <div style={{ fontSize: "14px", lineHeight: 1.8 }}>
      <p>아래 파비콘 설정이 &lt;head&gt;에 렌더링됩니다:</p>
      <Favicon href="/favicon.ico" type="image/x-icon" />
      <Favicon href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      <Favicon href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      <code style={{ display: "block", marginTop: "12px", padding: "12px", background: "#f5f5f5", borderRadius: "4px" }}>
        {`<link rel="icon" href="/favicon.ico" type="image/x-icon" />\n`}
        {`<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />\n`}
        {`<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />`}
      </code>
    </div>
  ),
};
