import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./index";
import "./spinner.css";

/**
 * ## 스피너 (Spinner)
 *
 * 콘텐츠가 로딩 중임을 나타내는 시각적 인디케이터입니다.
 * 데이터 요청, 페이지 전환, 파일 처리 등 대기 시간에 표시합니다.
 *
 * ### 사용 규칙
 * - 로딩 시간이 1초 이상 예상될 때 표시합니다
 * - 로딩 완료 후 즉시 제거합니다
 * - 전체 페이지 로딩과 부분 영역 로딩을 구분하여 사용합니다
 * - 가능하면 스켈레톤 UI와 함께 사용합니다
 *
 * ### 접근성
 * - `role="status"`로 상태 정보임을 명시합니다
 * - 시각적으로 숨겨진 라벨(`sr-only`)로 "로딩 중"을 전달합니다
 * - 스크린리더가 로딩 상태를 인식할 수 있습니다
 */
const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "접근성 라벨 (sr-only)",
      table: {
        defaultValue: { summary: "로딩 중" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    label: "로딩 중",
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/** 기본 스피너 */
export const Default: Story = {};

/** 커스텀 라벨 */
export const CustomLabel: Story = {
  args: {
    label: "데이터를 불러오는 중",
  },
};

/** 콘텐츠 영역 로딩 */
export const InContentArea: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200px", border: "1px solid #e5e5e5", borderRadius: "8px" }}>
      <Spinner label="목록을 불러오는 중" />
    </div>
  ),
};

/** 버튼 옆 로딩 */
export const InlineLoading: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Spinner label="처리 중" />
      <span style={{ fontSize: "14px", color: "#666" }}>처리 중입니다...</span>
    </div>
  ),
};

/** 전체 페이지 로딩 */
export const FullPageLoading: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "400px", background: "#fafafa", borderRadius: "8px" }}>
      <Spinner label="페이지 로딩 중" />
      <p style={{ marginTop: "16px", fontSize: "14px", color: "#666" }}>페이지를 불러오고 있습니다</p>
    </div>
  ),
};
