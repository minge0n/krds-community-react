import type { Meta, StoryObj } from "@storybook/react-vite";
import { StructuredList, StructuredListItem } from "./index";
import "./structured-list.css";

/**
 * ## 구조화 목록 (Structured List)
 *
 * 제목, 설명, 태그, 메타 정보 등을 구조화하여 표시하는 목록 컴포넌트입니다.
 * 게시판, 검색 결과, 서비스 목록 등에 사용합니다.
 *
 * ### 사용 규칙
 * - 반복되는 콘텐츠를 일관된 구조로 표시할 때 사용합니다
 * - 각 항목에 제목은 필수, 나머지는 선택입니다
 * - 액션 버튼은 항목 우측에 배치합니다
 * - 항목 간 시각적 구분선을 제공합니다
 *
 * ### 접근성
 * - `role="list"`와 `role="listitem"`으로 목록 구조를 명시합니다
 * - 각 항목의 제목이 `<h3>`으로 마크업됩니다
 */
const meta: Meta<typeof StructuredList> = {
  title: "Components/StructuredList",
  component: StructuredList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof StructuredList>;

/** 기본 구조화 목록 */
export const Default: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        title="주민등록등본 발급"
        description="주민등록등본을 온라인으로 발급받을 수 있습니다."
        meta="2025.01.15"
      />
      <StructuredListItem
        title="운전면허증 갱신"
        description="운전면허증 갱신 신청 및 진행 상황을 확인할 수 있습니다."
        meta="2025.01.14"
      />
      <StructuredListItem
        title="여권 재발급"
        description="여권 재발급 신청서를 작성하고 제출할 수 있습니다."
        meta="2025.01.13"
      />
    </StructuredList>
  ),
};

/** 배지 포함 */
export const WithBadge: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        badge="공지"
        title="시스템 점검 안내"
        description="2025년 2월 1일 02:00~06:00 시스템 점검이 예정되어 있습니다."
        meta="2025.01.20"
      />
      <StructuredListItem
        badge="안내"
        title="신규 서비스 오픈"
        description="모바일 민원 신청 서비스가 새롭게 오픈되었습니다."
        meta="2025.01.18"
      />
      <StructuredListItem
        badge="이벤트"
        title="전자정부 만족도 조사"
        description="서비스 개선을 위한 만족도 조사에 참여해 주세요."
        meta="2025.01.15"
      />
    </StructuredList>
  ),
};

/** 태그 포함 */
export const WithTags: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        title="아동수당 신청"
        description="만 8세 미만 아동에게 월 10만원의 아동수당을 지급합니다."
        tags={["복지", "아동", "수당"]}
        meta="행정안전부"
      />
      <StructuredListItem
        title="기초연금 신청"
        description="만 65세 이상 어르신에게 기초연금을 지급합니다."
        tags={["복지", "노인", "연금"]}
        meta="보건복지부"
      />
    </StructuredList>
  ),
};

/** 액션 버튼 포함 */
export const WithActions: Story = {
  render: () => (
    <StructuredList>
      <StructuredListItem
        title="민원 신청서 (작성 중)"
        description="주민등록등본 발급 신청서"
        meta="2025.01.20 임시저장"
        actions={
          <button type="button" style={{ padding: "6px 12px", fontSize: "13px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
            이어서 작성
          </button>
        }
      />
      <StructuredListItem
        title="민원 신청서 (제출 완료)"
        description="운전면허증 갱신 신청서"
        meta="2025.01.18 제출"
        actions={
          <button type="button" style={{ padding: "6px 12px", fontSize: "13px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
            상세 보기
          </button>
        }
      />
    </StructuredList>
  ),
};
