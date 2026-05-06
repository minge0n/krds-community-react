import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./index";
import "./footer.css";

/**
 * ## 푸터 (Footer)
 *
 * 페이지 하단에 위치하는 영역으로, 기관 정보, 연락처, 저작권, 관련 링크 등을 표시합니다.
 * 모든 페이지에 일관되게 표시되는 글로벌 컴포넌트입니다.
 *
 * ### 사용 규칙
 * - 기관명, 주소, 연락처, 저작권 정보를 포함합니다
 * - 개인정보처리방침, 이용약관 등 필수 링크를 제공합니다
 * - 페이지 최하단에 배치합니다
 * - 콘텐츠 영역과 시각적으로 구분합니다
 *
 * ### 접근성
 * - `<footer>` 시맨틱 요소를 사용합니다
 * - 링크 영역에 `aria-label="푸터 링크"`가 적용됩니다
 * - 모든 링크는 명확한 텍스트 라벨을 가집니다
 */
const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    orgName: {
      control: "text",
      description: "기관명",
      table: {
        type: { summary: "string" },
      },
    },
    address: {
      control: "text",
      description: "주소",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    contact: {
      control: "text",
      description: "연락처 정보",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    copyright: {
      control: "text",
      description: "저작권 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    links: {
      control: "object",
      description: "푸터 링크 목록",
      table: {
        type: { summary: "FooterLink[]" },
      },
    },
  },
  args: {
    orgName: "행정안전부",
    address: "세종특별자치시 한누리대로 411 (어진동)",
    contact: "대표전화: 02-2100-3399",
    copyright: "Copyright © 2025 행정안전부. All rights reserved.",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "접근성 정책", href: "/accessibility" },
      { label: "사이트맵", href: "/sitemap" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

/** 기본 푸터 */
export const Default: Story = {};

/** 링크 없는 간단한 푸터 */
export const Simple: Story = {
  args: {
    orgName: "대한민국 정부",
    copyright: "Copyright © 2025 대한민국 정부",
    links: undefined,
    address: undefined,
    contact: undefined,
  },
};

/** 추가 콘텐츠 포함 */
export const WithExtra: Story = {
  render: () => (
    <Footer
      orgName="행정안전부"
      address="세종특별자치시 한누리대로 411"
      contact="대표전화: 02-2100-3399 | 팩스: 044-204-8911"
      copyright="Copyright © 2025 행정안전부. All rights reserved."
      links={[
        { label: "개인정보처리방침", href: "/privacy" },
        { label: "이용약관", href: "/terms" },
      ]}
    >
      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
        <span style={{ fontSize: "12px", color: "#888" }}>SNS:</span>
        <a href="#" style={{ fontSize: "12px" }}>페이스북</a>
        <a href="#" style={{ fontSize: "12px" }}>유튜브</a>
        <a href="#" style={{ fontSize: "12px" }}>블로그</a>
      </div>
    </Footer>
  ),
};

/** 전체 정보 포함 */
export const FullInfo: Story = {
  args: {
    orgName: "과학기술정보통신부",
    address: "세종특별자치시 한누리대로 411 정부세종청사 4동",
    contact: "대표전화: 044-202-4430 | 이메일: webmaster@msit.go.kr",
    copyright: "Copyright © 2025 과학기술정보통신부. All rights reserved.",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "저작권 정책", href: "/copyright" },
      { label: "이용약관", href: "/terms" },
      { label: "접근성 정책", href: "/accessibility" },
      { label: "사이트맵", href: "/sitemap" },
      { label: "뷰어 다운로드", href: "/viewer" },
    ],
  },
};
