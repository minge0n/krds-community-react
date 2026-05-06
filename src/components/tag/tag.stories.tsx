import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, TagGroup } from "./index";
import "./tag.css";

/**
 * ## 태그 (Tag)
 *
 * 콘텐츠를 분류하거나 키워드를 표시하는 라벨 컴포넌트입니다.
 * 필터링, 카테고리 표시, 선택된 항목 표시 등에 사용합니다.
 *
 * ### 사용 규칙
 * - 짧은 텍스트(1~3단어)를 사용합니다
 * - 삭제 가능한 태그는 `removable` 속성을 사용합니다
 * - 여러 태그는 TagGroup으로 그룹화합니다
 * - 태그 수가 많으면 "더보기" 처리를 합니다
 *
 * ### 접근성
 * - 삭제 버튼에 `aria-label="삭제"` 제공
 * - 스크린리더용 숨김 텍스트가 제공됩니다
 */
const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "태그 크기",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "small | medium | large" },
      },
    },
    removable: {
      control: "boolean",
      description: "삭제 버튼 표시 여부",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onRemove: {
      action: "removed",
      description: "삭제 핸들러",
      table: {
        type: { summary: "() => void" },
      },
    },
    children: {
      control: "text",
      description: "태그 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    children: "태그",
    size: "medium",
    removable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/** 기본 태그 */
export const Default: Story = {};

/** 삭제 가능한 태그 */
export const Removable: Story = {
  args: {
    children: "삭제 가능",
    removable: true,
  },
};

/** 태그 그룹 */
export const Group: Story = {
  render: () => (
    <TagGroup>
      <Tag>복지</Tag>
      <Tag>교육</Tag>
      <Tag>의료</Tag>
      <Tag>주거</Tag>
      <Tag>고용</Tag>
    </TagGroup>
  ),
};

/** 삭제 가능한 태그 그룹 (필터) */
export const RemovableGroup: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>선택된 필터:</p>
      <TagGroup>
        <Tag removable onRemove={() => {}}>서울특별시</Tag>
        <Tag removable onRemove={() => {}}>복지</Tag>
        <Tag removable onRemove={() => {}}>아동</Tag>
      </TagGroup>
    </div>
  ),
};

/** 다양한 크기 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "13px", color: "#666", width: "60px" }}>Small</span>
        <TagGroup size="small">
          <Tag>태그 1</Tag>
          <Tag>태그 2</Tag>
          <Tag>태그 3</Tag>
        </TagGroup>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "13px", color: "#666", width: "60px" }}>Medium</span>
        <TagGroup size="medium">
          <Tag>태그 1</Tag>
          <Tag>태그 2</Tag>
          <Tag>태그 3</Tag>
        </TagGroup>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "13px", color: "#666", width: "60px" }}>Large</span>
        <TagGroup size="large">
          <Tag>태그 1</Tag>
          <Tag>태그 2</Tag>
          <Tag>태그 3</Tag>
        </TagGroup>
      </div>
    </div>
  ),
};
