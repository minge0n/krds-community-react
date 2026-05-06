import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./index";
import "./select.css";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "지역 선택",
    options: [
      { value: "seoul", label: "서울특별시" },
      { value: "busan", label: "부산광역시" },
      { value: "daegu", label: "대구광역시" },
      { value: "incheon", label: "인천광역시" },
      { value: "gwangju", label: "광주광역시" },
    ],
  },
};

export const WithHint: Story = {
  args: {
    label: "부서 선택",
    hint: "소속 부서를 선택해 주세요.",
    options: [
      { value: "hr", label: "인사부" },
      { value: "dev", label: "개발부" },
      { value: "design", label: "디자인부" },
    ],
  },
};

export const Invalid: Story = {
  args: {
    label: "카테고리",
    invalid: true,
    error: "카테고리를 선택해 주세요.",
    options: [
      { value: "1", label: "카테고리 1" },
      { value: "2", label: "카테고리 2" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "상태",
    disabled: true,
    options: [
      { value: "active", label: "활성" },
      { value: "inactive", label: "비활성" },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: "등급 선택",
    options: [
      { value: "basic", label: "기본" },
      { value: "premium", label: "프리미엄" },
      { value: "enterprise", label: "엔터프라이즈", disabled: true },
    ],
  },
};
