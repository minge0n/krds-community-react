import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkipLink } from "./index";
import "./skip-link.css";

/**
 * ## 건너뛰기 링크 (Skip Link)
 *
 * 키보드 사용자가 반복되는 네비게이션을 건너뛰고 본문으로 바로 이동할 수 있는 링크입니다.
 * 페이지 최상단에 배치되며, 포커스 시에만 화면에 표시됩니다.
 *
 * ### 사용 규칙
 * - 모든 페이지에 필수로 포함합니다
 * - `<body>` 바로 다음, 다른 콘텐츠보다 먼저 배치합니다
 * - 본문 영역의 ID와 연결합니다 (기본: `main-content`)
 * - 포커스 시에만 화면에 나타납니다
 *
 * ### 접근성
 * - 키보드 Tab으로 첫 번째로 포커스됩니다
 * - 앵커 링크로 본문 영역으로 즉시 이동합니다
 * - 시각적으로 숨겨져 있다가 포커스 시 표시됩니다
 * - WCAG 2.4.1 "블록 건너뛰기" 요구사항을 충족합니다
 */
const meta: Meta<typeof SkipLink> = {
  title: "Components/SkipLink",
  component: SkipLink,
  tags: ["autodocs"],
  argTypes: {
    targetId: {
      control: "text",
      description: "이동할 대상 요소 ID",
      table: {
        defaultValue: { summary: "main-content" },
        type: { summary: "string" },
      },
    },
    label: {
      control: "text",
      description: "링크 텍스트",
      table: {
        defaultValue: { summary: "본문 바로가기" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    targetId: "main-content",
    label: "본문 바로가기",
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

/** 기본 건너뛰기 링크 */
export const Default: Story = {};

/** 커스텀 라벨 */
export const CustomLabel: Story = {
  args: {
    label: "메인 콘텐츠로 이동",
    targetId: "content",
  },
};

/** 페이지 내 동작 예시 */
export const InPageContext: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
        Tab 키를 눌러 건너뛰기 링크에 포커스하세요.
      </p>
      <SkipLink targetId="demo-content" label="본문 바로가기" />
      <nav style={{ padding: "12px", background: "#f5f5f5", marginBottom: "16px" }}>
        <span style={{ fontSize: "14px" }}>네비게이션 영역 (건너뛸 대상)</span>
      </nav>
      <main id="demo-content" style={{ padding: "12px", border: "2px dashed #1a56db", borderRadius: "4px" }}>
        <span style={{ fontSize: "14px" }}>본문 영역 (이동 대상)</span>
      </main>
    </div>
  ),
};

/** 여러 건너뛰기 링크 */
export const MultipleLinks: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
        여러 건너뛰기 링크를 제공할 수 있습니다.
      </p>
      <SkipLink targetId="main" label="본문 바로가기" />
      <SkipLink targetId="nav" label="메뉴 바로가기" />
      <SkipLink targetId="footer" label="하단 바로가기" />
    </div>
  ),
};
