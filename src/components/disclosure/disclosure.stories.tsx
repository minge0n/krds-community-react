import type { Meta, StoryObj } from "@storybook/react-vite";
import { Disclosure } from "./index";
import "./disclosure.css";

const meta: Meta<typeof Disclosure> = {
  title: "Components/Disclosure",
  component: Disclosure,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {
  args: {
    label: "더보기",
    children: "숨겨진 콘텐츠가 여기에 표시됩니다. 다양한 정보를 포함할 수 있습니다.",
  },
};

export const DefaultOpen: Story = {
  args: {
    label: "상세 내용 보기",
    defaultOpen: true,
    children: "이 콘텐츠는 기본으로 열려 있습니다.",
  },
};
