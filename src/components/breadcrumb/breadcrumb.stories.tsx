import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb, BreadcrumbItem } from "./index";
import "./breadcrumb.css";

/**
 * ## 브레드크럼 (Breadcrumb)
 *
 * 현재 페이지의 위치를 계층 구조로 표시하는 네비게이션 컴포넌트입니다.
 * 사용자가 상위 페이지로 쉽게 이동할 수 있도록 도와줍니다.
 *
 * ### 사용 규칙
 * - 2단계 이상의 깊이를 가진 페이지에서 사용합니다
 * - 첫 번째 항목은 항상 홈(메인 페이지)입니다
 * - 마지막 항목은 현재 페이지로, 링크가 아닌 텍스트로 표시합니다
 * - 최대 5단계까지 표시하는 것을 권장합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label="현재 경로"`가 적용됩니다
 * - 현재 페이지에 `aria-current="page"`가 자동 적용됩니다
 * - 순서 있는 목록(`<ol>`)으로 마크업됩니다
 */
const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "접근성 라벨 (aria-label)",
      table: {
        defaultValue: { summary: "현재 경로" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    label: "현재 경로",
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/** 기본 브레드크럼 */
export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem home href="/">홈</BreadcrumbItem>
      <BreadcrumbItem href="/services">서비스</BreadcrumbItem>
      <BreadcrumbItem current>민원 신청</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** 깊은 계층 구조 */
export const DeepHierarchy: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem home href="/">홈</BreadcrumbItem>
      <BreadcrumbItem href="/gov">정부서비스</BreadcrumbItem>
      <BreadcrumbItem href="/gov/welfare">복지</BreadcrumbItem>
      <BreadcrumbItem href="/gov/welfare/child">아동복지</BreadcrumbItem>
      <BreadcrumbItem current>양육수당 신청</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** 2단계 구조 */
export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem home href="/">홈</BreadcrumbItem>
      <BreadcrumbItem current>공지사항</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** 실제 사용 예시 - 정부 서비스 */
export const GovernmentService: Story = {
  render: () => (
    <Breadcrumb label="현재 위치">
      <BreadcrumbItem home href="/">대한민국 정부</BreadcrumbItem>
      <BreadcrumbItem href="/ministry">행정안전부</BreadcrumbItem>
      <BreadcrumbItem href="/ministry/civil">민원서비스</BreadcrumbItem>
      <BreadcrumbItem current>주민등록등본 발급</BreadcrumbItem>
    </Breadcrumb>
  ),
};
