import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "./index";
import "./visually-hidden.css";

/**
 * ## 시각적 숨김 (Visually Hidden)
 *
 * 시각적으로는 숨기되 스크린리더에서는 읽히는 텍스트를 제공하는 유틸리티 컴포넌트입니다.
 * 접근성을 위해 추가 맥락이 필요하지만 화면에 표시할 필요가 없는 경우 사용합니다.
 *
 * ### 사용 규칙
 * - 아이콘 전용 버튼의 라벨을 제공할 때 사용합니다
 * - 시각적 맥락이 충분하지만 스크린리더에 추가 설명이 필요할 때 사용합니다
 * - `display: none`이나 `visibility: hidden` 대신 사용합니다
 * - CSS clip 기법으로 레이아웃에 영향을 주지 않습니다
 *
 * ### 접근성
 * - 스크린리더가 콘텐츠를 정상적으로 읽습니다
 * - 시각적으로 완전히 숨겨집니다
 * - 포커스 가능한 요소는 포함하지 않는 것을 권장합니다
 */
const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "숨겨질 텍스트 콘텐츠",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    children: "스크린리더에서만 읽히는 텍스트",
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

/** 기본 (화면에 보이지 않음) */
export const Default: Story = {
  render: (args) => (
    <div>
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>
        아래에 VisuallyHidden 컴포넌트가 있지만 화면에는 보이지 않습니다.
        스크린리더로 확인할 수 있습니다.
      </p>
      <VisuallyHidden>{args.children}</VisuallyHidden>
      <p style={{ fontSize: "13px", color: "#999" }}>
        (개발자 도구에서 DOM을 확인하면 요소가 존재합니다)
      </p>
    </div>
  ),
};

/** 아이콘 버튼 라벨 */
export const IconButtonLabel: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
        🔍
        <VisuallyHidden>검색</VisuallyHidden>
      </button>
      <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
        ❤️
        <VisuallyHidden>좋아요</VisuallyHidden>
      </button>
      <button type="button" style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
        📤
        <VisuallyHidden>공유하기</VisuallyHidden>
      </button>
    </div>
  ),
};

/** 테이블 보조 정보 */
export const TableContext: Story = {
  render: () => (
    <table style={{ borderCollapse: "collapse", fontSize: "14px" }}>
      <thead>
        <tr>
          <th style={{ padding: "8px", borderBottom: "2px solid #333", textAlign: "left" }}>항목</th>
          <th style={{ padding: "8px", borderBottom: "2px solid #333", textAlign: "right" }}>금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>주민등록등본</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "right" }}>
            400<VisuallyHidden>원</VisuallyHidden>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>인감증명서</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "right" }}>
            600<VisuallyHidden>원</VisuallyHidden>
          </td>
        </tr>
      </tbody>
    </table>
  ),
};

/** 현재 페이지 표시 */
export const CurrentPageIndicator: Story = {
  render: () => (
    <nav aria-label="페이지 탐색">
      <ul style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0 }}>
        <li><a href="#" style={{ padding: "4px 8px" }}>1</a></li>
        <li>
          <a href="#" style={{ padding: "4px 8px", fontWeight: 700, color: "#1a56db" }}>
            <VisuallyHidden>현재 페이지: </VisuallyHidden>2
          </a>
        </li>
        <li><a href="#" style={{ padding: "4px 8px" }}>3</a></li>
      </ul>
    </nav>
  ),
};
