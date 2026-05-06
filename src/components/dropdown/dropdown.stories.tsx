import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown, DropdownItem } from "./index";
import "./dropdown.css";

/**
 * ## 드롭다운 (Dropdown)
 *
 * 버튼을 클릭하면 메뉴 목록이 표시되는 컴포넌트입니다.
 * 여러 액션 중 하나를 선택하거나 추가 옵션을 제공할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 메뉴 항목은 3~7개를 권장합니다
 * - 자주 사용하는 항목을 상단에 배치합니다
 * - 위험한 액션(삭제 등)은 시각적으로 구분합니다
 * - 단일 값 선택이 목적이면 Select 컴포넌트를 사용합니다
 *
 * ### 접근성
 * - Menu 역할이 자동 적용됩니다
 * - 키보드 화살표로 항목 간 이동이 가능합니다
 * - Enter/Space로 항목을 선택할 수 있습니다
 * - ESC로 메뉴를 닫을 수 있습니다
 */
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    buttonText: {
      control: "text",
      description: "트리거 버튼 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    buttonClassName: {
      control: "text",
      description: "버튼 추가 클래스",
      table: {
        type: { summary: "string" },
      },
    },
    isOpen: {
      control: "boolean",
      description: "열림 상태 (제어 모드)",
      table: {
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      action: "openChange",
      description: "열림 상태 변경 핸들러",
      table: {
        type: { summary: "(isOpen: boolean) => void" },
      },
    },
  },
  args: {
    buttonText: "메뉴",
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/** 기본 드롭다운 */
export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem>프로필 설정</DropdownItem>
      <DropdownItem>알림 설정</DropdownItem>
      <DropdownItem>로그아웃</DropdownItem>
    </Dropdown>
  ),
};

/** 활성 항목 표시 */
export const WithActiveItem: Story = {
  render: () => (
    <Dropdown buttonText="정렬 기준">
      <DropdownItem isActive>최신순</DropdownItem>
      <DropdownItem>인기순</DropdownItem>
      <DropdownItem>가나다순</DropdownItem>
      <DropdownItem>오래된순</DropdownItem>
    </Dropdown>
  ),
};

/** 비활성화 항목 포함 */
export const WithDisabledItem: Story = {
  render: () => (
    <Dropdown buttonText="작업 선택">
      <DropdownItem>수정</DropdownItem>
      <DropdownItem>복사</DropdownItem>
      <DropdownItem>이동</DropdownItem>
      <DropdownItem disabled>삭제 (권한 없음)</DropdownItem>
    </Dropdown>
  ),
};

/** 실제 사용 예시 - 더보기 메뉴 */
export const MoreMenu: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Dropdown buttonText="⋮">
        <DropdownItem>공유하기</DropdownItem>
        <DropdownItem>북마크</DropdownItem>
        <DropdownItem>인쇄</DropdownItem>
        <DropdownItem>신고</DropdownItem>
      </Dropdown>
    </div>
  ),
};
