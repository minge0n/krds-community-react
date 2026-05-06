import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "./index";
import "./visually-hidden.css";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => (
    <div>
      <p>아래에 시각적으로 숨겨진 텍스트가 있습니다 (스크린 리더에서만 읽힘):</p>
      <VisuallyHidden>이 텍스트는 스크린 리더에서만 읽힙니다.</VisuallyHidden>
      <p>위 텍스트는 화면에 보이지 않지만 접근성 도구에서 인식됩니다.</p>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <button type="button">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <VisuallyHidden>검색</VisuallyHidden>
    </button>
  ),
};
