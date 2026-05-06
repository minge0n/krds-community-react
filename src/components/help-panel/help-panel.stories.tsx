import type { Meta, StoryObj } from "@storybook/react-vite";
import { HelpPanel } from "./index";
import "./help-panel.css";

/**
 * ## 도움말 패널 (Help Panel)
 *
 * 화면 측면에서 슬라이드되어 나타나는 도움말 패널입니다.
 * 현재 페이지의 맥락에 맞는 상세 도움말이나 가이드를 제공합니다.
 *
 * ### 사용 규칙
 * - 복잡한 기능이나 폼 작성 시 보조 정보를 제공합니다
 * - 기본적으로 우측에 배치합니다
 * - 패널이 열려도 메인 콘텐츠 조작이 가능해야 합니다
 * - 닫기 버튼을 항상 제공합니다
 *
 * ### 접근성
 * - `role="complementary"`로 보조 콘텐츠임을 명시합니다
 * - `aria-label`로 패널의 목적을 설명합니다
 * - `aria-hidden`으로 닫힌 상태를 스크린리더에 전달합니다
 * - 닫기 버튼에 `aria-label="패널 닫기"`가 제공됩니다
 */
const meta: Meta<typeof HelpPanel> = {
  title: "Components/HelpPanel",
  component: HelpPanel,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "패널 제목",
      table: {
        defaultValue: { summary: "도움말" },
        type: { summary: "ReactNode" },
      },
    },
    open: {
      control: "boolean",
      description: "열림 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onClose: {
      action: "closed",
      description: "닫기 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
    position: {
      control: "select",
      options: ["left", "right"],
      description: "패널 위치",
      table: {
        defaultValue: { summary: "right" },
        type: { summary: "left | right" },
      },
    },
    children: {
      control: "text",
      description: "패널 콘텐츠",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    title: "도움말",
    open: true,
    position: "right",
    children: "이 페이지에서는 민원 신청서를 작성할 수 있습니다.",
  },
};

export default meta;
type Story = StoryObj<typeof HelpPanel>;

/** 기본 도움말 패널 */
export const Default: Story = {};

/** 좌측 배치 */
export const LeftPosition: Story = {
  args: {
    title: "가이드",
    position: "left",
    children: "좌측에 표시되는 도움말 패널입니다.",
  },
};

/** 상세 도움말 콘텐츠 */
export const DetailedHelp: Story = {
  render: () => (
    <HelpPanel open={true} title="민원 신청 안내">
      <div style={{ fontSize: "14px", lineHeight: 1.8 }}>
        <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>신청 방법</h3>
        <ol style={{ paddingLeft: "20px", margin: "0 0 16px" }}>
          <li>본인 인증을 완료합니다</li>
          <li>신청서를 작성합니다</li>
          <li>필요 서류를 첨부합니다</li>
          <li>제출 버튼을 클릭합니다</li>
        </ol>
        <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>유의사항</h3>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li>모든 필수 항목을 입력해야 합니다</li>
          <li>첨부파일은 10MB 이하만 가능합니다</li>
          <li>제출 후 수정이 불가합니다</li>
        </ul>
      </div>
    </HelpPanel>
  ),
};

/** 닫힌 상태 */
export const Closed: Story = {
  args: {
    open: false,
    title: "도움말",
    children: "이 내용은 보이지 않습니다.",
  },
};
