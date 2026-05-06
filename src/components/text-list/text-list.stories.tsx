import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList, TextListItem } from "./index";
import "./text-list.css";

const meta: Meta<typeof TextList> = {
  title: "Components/TextList",
  component: TextList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextList>;

export const Default: Story = {
  render: () => (
    <TextList>
      <TextListItem>첫 번째 항목입니다.</TextListItem>
      <TextListItem>두 번째 항목입니다.</TextListItem>
      <TextListItem>세 번째 항목입니다.</TextListItem>
    </TextList>
  ),
};

export const Ordered: Story = {
  render: () => (
    <TextList type="ordered">
      <TextListItem>신청서를 작성합니다.</TextListItem>
      <TextListItem>필요 서류를 첨부합니다.</TextListItem>
      <TextListItem>제출 버튼을 클릭합니다.</TextListItem>
    </TextList>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <TextList size="small">
        <TextListItem>Small 항목 1</TextListItem>
        <TextListItem>Small 항목 2</TextListItem>
      </TextList>
      <TextList size="medium">
        <TextListItem>Medium 항목 1</TextListItem>
        <TextListItem>Medium 항목 2</TextListItem>
      </TextList>
      <TextList size="large">
        <TextListItem>Large 항목 1</TextListItem>
        <TextListItem>Large 항목 2</TextListItem>
      </TextList>
    </div>
  ),
};
