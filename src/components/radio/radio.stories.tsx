import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, Radio } from "./index";
import "./radio.css";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup label="선택">
      <Radio label="옵션 1" name="default" value="1" />
      <Radio label="옵션 2" name="default" value="2" />
      <Radio label="옵션 3" name="default" value="3" />
    </RadioGroup>
  ),
};

export const Column: Story = {
  render: () => (
    <RadioGroup label="방향 선택" direction="column">
      <Radio label="세로 옵션 1" name="column" value="1" />
      <Radio label="세로 옵션 2" name="column" value="2" />
      <Radio label="세로 옵션 3" name="column" value="3" />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup label="배송 방법" direction="column">
      <Radio label="일반 배송" name="delivery" value="normal" description="3~5일 소요" />
      <Radio label="빠른 배송" name="delivery" value="fast" description="1~2일 소요" />
      <Radio label="당일 배송" name="delivery" value="same-day" description="오늘 도착" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup label="비활성화">
      <Radio label="선택 가능" name="disabled" value="1" />
      <Radio label="비활성화됨" name="disabled" value="2" disabled />
      <Radio label="선택 가능" name="disabled" value="3" />
    </RadioGroup>
  ),
};
