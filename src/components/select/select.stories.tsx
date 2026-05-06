import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./index";
import "./select.css";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨" },
    hint: { control: "text", description: "도움말" },
    error: { control: "text", description: "에러 메시지" },
    invalid: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화" },
    placeholder: { control: "text", description: "플레이스홀더" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: "seoul", label: "서울특별시" },
  { value: "busan", label: "부산광역시" },
  { value: "daegu", label: "대구광역시" },
  { value: "incheon", label: "인천광역시" },
  { value: "gwangju", label: "광주광역시" },
];

export const Default: Story = {
  args: {
    label: "지역 선택",
    hint: "거주 지역을 선택해 주세요",
    options: defaultOptions,
  },
};

export const WithError: Story = {
  args: {
    label: "지역 선택",
    error: "필수 항목입니다",
    invalid: true,
    options: defaultOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: "지역 선택",
    disabled: true,
    options: defaultOptions,
  },
};

export const SelectInteraction: Story = {
  args: {
    label: "선택 테스트",
    options: defaultOptions,
  },
};
