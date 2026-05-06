import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./index";
import "./link.css";

/**
 * ## 링크 (Link)
 *
 * 다른 페이지나 리소스로 이동하는 하이퍼링크 컴포넌트입니다.
 * 다양한 스타일 변형과 외부 링크 표시를 지원합니다.
 *
 * ### 사용 규칙
 * - 링크 텍스트는 이동할 페이지의 내용을 명확히 설명합니다
 * - "여기를 클릭하세요" 같은 모호한 텍스트를 사용하지 않습니다
 * - 외부 링크는 새 탭에서 열리며 아이콘으로 표시합니다
 * - 본문 내 링크는 밑줄로 구분합니다
 *
 * ### 접근성
 * - 외부 링크에 `target="_blank"`와 `rel="noopener noreferrer"` 적용
 * - 외부 링크에 `title="새 창 열림"` 제공
 * - 링크 텍스트만으로 목적지를 이해할 수 있어야 합니다
 * - `:focus-visible` 아웃라인이 표시됩니다
 */
const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pure", "basic"],
      description: "링크 스타일 변형",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "default | pure | basic" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "링크 크기",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "small | medium | large" },
      },
    },
    external: {
      control: "boolean",
      description: "외부 링크 여부 (새 탭 열림)",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    underline: {
      control: "boolean",
      description: "밑줄 표시 여부",
      table: {
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    children: {
      control: "text",
      description: "링크 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    href: {
      control: "text",
      description: "링크 URL",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    variant: "default",
    size: "medium",
    external: false,
    underline: true,
    children: "서비스 바로가기",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/** 기본 링크 */
export const Default: Story = {};

/** 모든 변형 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link variant="default" href="#">기본 링크</Link>
      <Link variant="pure" href="#">Pure 링크</Link>
      <Link variant="basic" href="#">Basic 링크</Link>
    </div>
  ),
};

/** 모든 크기 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link size="small" href="#">작은 링크</Link>
      <Link size="medium" href="#">중간 링크</Link>
      <Link size="large" href="#">큰 링크</Link>
    </div>
  ),
};

/** 외부 링크 */
export const External: Story = {
  args: {
    external: true,
    children: "정부24 바로가기",
    href: "https://www.gov.kr",
  },
};

/** 밑줄 없는 링크 */
export const NoUnderline: Story = {
  args: {
    underline: false,
    children: "밑줄 없는 링크",
  },
};

/** 본문 내 사용 예시 */
export const InParagraph: Story = {
  render: () => (
    <p style={{ fontSize: "14px", lineHeight: 1.8, maxWidth: "500px" }}>
      자세한 내용은 <Link href="#">이용약관</Link>을 확인해 주세요.
      외부 서비스는 <Link href="https://www.gov.kr" external>정부24</Link>에서
      이용하실 수 있습니다.
    </p>
  ),
};
