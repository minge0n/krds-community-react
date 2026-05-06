import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheet } from "./index";
import "./bottom-sheet.css";

/**
 * ## 바텀시트 (Bottom Sheet)
 *
 * 화면 하단에서 올라오는 모달 형태의 패널입니다.
 * 모바일 환경에서 추가 정보나 선택지를 제공할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 모바일 우선 UI 패턴으로, 간단한 선택이나 정보 표시에 사용합니다
 * - 복잡한 폼이나 긴 콘텐츠는 별도 페이지를 사용합니다
 * - 핸들 바를 드래그하여 닫을 수 있어야 합니다
 *
 * ### 접근성
 * - Dialog 역할(`role="dialog"`)이 자동 적용됩니다
 * - 열릴 때 포커스가 시트 내부로 이동합니다
 * - ESC 키로 닫을 수 있습니다
 * - 배경 오버레이 클릭으로 닫을 수 있습니다
 */
const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "열림 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      action: "openChange",
      description: "열림 상태 변경 핸들러",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    title: {
      control: "text",
      description: "시트 제목",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: "text",
      description: "시트 콘텐츠",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    open: true,
    title: "옵션 선택",
    children: "바텀시트 콘텐츠 영역입니다.",
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

/** 기본 바텀시트 */
export const Default: Story = {};

/** 목록 선택 바텀시트 */
export const WithList: Story = {
  render: () => (
    <BottomSheet open={true} title="정렬 기준">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>최신순</li>
        <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>인기순</li>
        <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>가나다순</li>
        <li style={{ padding: "12px 0" }}>오래된순</li>
      </ul>
    </BottomSheet>
  ),
};

/** 긴 콘텐츠 바텀시트 */
export const LongContent: Story = {
  render: () => (
    <BottomSheet open={true} title="이용약관">
      <div style={{ maxHeight: "300px", overflow: "auto" }}>
        <p style={{ lineHeight: 1.6 }}>
          본 서비스 이용약관은 사용자가 본 서비스를 이용함에 있어 필요한 권리, 의무 및 책임사항을
          규정함을 목적으로 합니다. 본 약관에 동의하시면 서비스를 이용하실 수 있습니다.
        </p>
        <p style={{ lineHeight: 1.6, marginTop: "12px" }}>
          제1조 (목적) 이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리,
          의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <p style={{ lineHeight: 1.6, marginTop: "12px" }}>
          제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          서비스란 회사가 제공하는 모든 온라인 서비스를 의미합니다.
        </p>
      </div>
    </BottomSheet>
  ),
};
