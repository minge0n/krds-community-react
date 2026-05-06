import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList, TextListItem } from "./index";
import "./text-list.css";

/**
 * ## 텍스트 목록 (Text List)
 *
 * 순서 있는 목록(ol)과 순서 없는 목록(ul)을 제공하는 컴포넌트입니다.
 * 안내사항, 절차, 주의사항 등을 나열할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 순서가 중요한 절차는 `ordered` 타입을 사용합니다
 * - 순서가 없는 나열은 `unordered` 타입을 사용합니다
 * - 항목 수는 2~10개를 권장합니다
 * - 중첩 목록은 2단계까지만 사용합니다
 *
 * ### 접근성
 * - 시맨틱 `<ul>` 또는 `<ol>` 요소를 사용합니다
 * - 스크린리더가 목록 항목 수를 자동으로 안내합니다
 */
const meta: Meta<typeof TextList> = {
  title: "Components/TextList",
  component: TextList,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["unordered", "ordered"],
      description: "목록 유형",
      table: {
        defaultValue: { summary: "unordered" },
        type: { summary: "unordered | ordered" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "텍스트 크기",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "small | medium | large" },
      },
    },
  },
  args: {
    type: "unordered",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof TextList>;

/** 기본 순서 없는 목록 */
export const Default: Story = {
  render: (args) => (
    <TextList {...args}>
      <TextListItem>신분증을 지참해 주세요</TextListItem>
      <TextListItem>접수 시간은 09:00~18:00입니다</TextListItem>
      <TextListItem>주말 및 공휴일은 운영하지 않습니다</TextListItem>
    </TextList>
  ),
};

/** 순서 있는 목록 */
export const Ordered: Story = {
  render: () => (
    <TextList type="ordered">
      <TextListItem>본인 인증을 완료합니다</TextListItem>
      <TextListItem>신청서를 작성합니다</TextListItem>
      <TextListItem>필요 서류를 첨부합니다</TextListItem>
      <TextListItem>수수료를 결제합니다</TextListItem>
      <TextListItem>제출 버튼을 클릭합니다</TextListItem>
    </TextList>
  ),
};

/** 크기 비교 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>Small</p>
        <TextList size="small">
          <TextListItem>작은 텍스트 항목 1</TextListItem>
          <TextListItem>작은 텍스트 항목 2</TextListItem>
        </TextList>
      </div>
      <div>
        <p style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>Medium</p>
        <TextList size="medium">
          <TextListItem>중간 텍스트 항목 1</TextListItem>
          <TextListItem>중간 텍스트 항목 2</TextListItem>
        </TextList>
      </div>
      <div>
        <p style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>Large</p>
        <TextList size="large">
          <TextListItem>큰 텍스트 항목 1</TextListItem>
          <TextListItem>큰 텍스트 항목 2</TextListItem>
        </TextList>
      </div>
    </div>
  ),
};

/** 실제 사용 예시 - 유의사항 */
export const Precautions: Story = {
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>유의사항</h3>
      <TextList type="unordered">
        <TextListItem>제출 후에는 수정이 불가합니다</TextListItem>
        <TextListItem>첨부파일은 PDF, JPG 형식만 가능합니다</TextListItem>
        <TextListItem>파일 크기는 10MB를 초과할 수 없습니다</TextListItem>
        <TextListItem>처리 기간은 영업일 기준 7일입니다</TextListItem>
      </TextList>
    </div>
  ),
};
