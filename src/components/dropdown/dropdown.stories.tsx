import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown, DropdownItem } from "./index";
import "./dropdown.css";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown buttonText="메뉴 열기">
      <DropdownItem>항목 1</DropdownItem>
      <DropdownItem>항목 2</DropdownItem>
      <DropdownItem>항목 3</DropdownItem>
    </Dropdown>
  ),
};

export const WithActiveItem: Story = {
  render: () => (
    <Dropdown buttonText="정렬 기준">
      <DropdownItem isActive>최신순</DropdownItem>
      <DropdownItem>인기순</DropdownItem>
      <DropdownItem>이름순</DropdownItem>
    </Dropdown>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Dropdown buttonText="작업 선택">
      <DropdownItem>수정</DropdownItem>
      <DropdownItem>복사</DropdownItem>
      <DropdownItem disabled>삭제</DropdownItem>
    </Dropdown>
  ),
};
