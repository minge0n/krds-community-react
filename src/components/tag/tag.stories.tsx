import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, TagGroup } from "./index";
import "./tag.css";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "태그",
  },
};

export const Group: Story = {
  render: () => (
    <TagGroup>
      <Tag>정책</Tag>
      <Tag>경제</Tag>
      <Tag>사회</Tag>
      <Tag>교육</Tag>
    </TagGroup>
  ),
};

export const Removable: Story = {
  render: () => (
    <TagGroup>
      <Tag removable onRemove={() => {}}>삭제 가능</Tag>
      <Tag removable onRemove={() => {}}>태그 2</Tag>
      <Tag removable onRemove={() => {}}>태그 3</Tag>
    </TagGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <TagGroup size="small">
        <Tag>Small 1</Tag>
        <Tag>Small 2</Tag>
      </TagGroup>
      <TagGroup size="medium">
        <Tag>Medium 1</Tag>
        <Tag>Medium 2</Tag>
      </TagGroup>
      <TagGroup size="large">
        <Tag>Large 1</Tag>
        <Tag>Large 2</Tag>
      </TagGroup>
    </div>
  ),
};
