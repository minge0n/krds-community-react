import type { Meta, StoryObj } from "@storybook/react-vite";
import { StructuredList, StructuredListItem } from "./index";
import "./structured-list.css";

const meta: Meta<typeof StructuredList> = {
  title: "Components/StructuredList",
  component: StructuredList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StructuredList>;

export const Default: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        title="2025년 상반기 공무원 채용 공고"
        description="행정안전부에서 2025년 상반기 공무원 채용을 실시합니다."
        meta="2025.05.01"
      />
      <StructuredListItem
        title="전자정부 서비스 개선 안내"
        description="더 나은 서비스 제공을 위해 시스템을 개선합니다."
        meta="2025.04.28"
      />
      <StructuredListItem
        title="개인정보처리방침 변경 안내"
        description="개인정보처리방침이 일부 변경되었습니다."
        meta="2025.04.25"
      />
    </StructuredList>
  ),
};

export const WithBadgeAndTags: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        badge="공지"
        title="시스템 점검 안내"
        description="5월 10일 02:00~06:00 시스템 점검이 예정되어 있습니다."
        tags={["긴급", "시스템"]}
        meta="2025.05.05"
      />
      <StructuredListItem
        badge="안내"
        title="신규 서비스 오픈"
        description="모바일 민원 서비스가 새롭게 오픈되었습니다."
        tags={["신규", "모바일"]}
        meta="2025.05.03"
      />
    </StructuredList>
  ),
};

export const WithActions: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        title="민원 접수 내역"
        description="접수번호: 2025-001234"
        meta="처리중"
        actions={<button type="button">상세보기</button>}
      />
      <StructuredListItem
        title="민원 접수 내역"
        description="접수번호: 2025-001233"
        meta="완료"
        actions={<button type="button">상세보기</button>}
      />
    </StructuredList>
  ),
};
