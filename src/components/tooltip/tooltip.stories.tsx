import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./index";
import "./tooltip.css";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <Tooltip content="도움말 텍스트입니다.">
        <button type="button">마우스를 올려보세요</button>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", padding: "80px", justifyContent: "center" }}>
      <Tooltip content="상단 툴팁" side="top">
        <button type="button">상단</button>
      </Tooltip>
      <Tooltip content="하단 툴팁" side="bottom">
        <button type="button">하단</button>
      </Tooltip>
      <Tooltip content="왼쪽 툴팁" side="left">
        <button type="button">왼쪽</button>
      </Tooltip>
      <Tooltip content="오른쪽 툴팁" side="right">
        <button type="button">오른쪽</button>
      </Tooltip>
    </div>
  ),
};
