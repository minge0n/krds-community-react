import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./index";
import "./select.css";

/**
 * ## 셀렉트 (Select)
 *
 * 사용자에게 여러 개의 옵션 목록을 팝업으로 제공하여 그 중 한 개의 값을 선택할 수 있도록 합니다.
 *
 * ### 사용 규칙
 * - 옵션이 5개 이하면 Radio 사용 권장
 * - 옵션이 많을 경우 검색 기능 추가 고려
 * - 정렬용 미니 셀렉트는 `variant="sort"` 사용
 *
 * ### 접근성
 * - Base UI Select 기반 (키보드 탐색, typeahead 자동)
 * - aria-labelledby로 라벨 연결
 * - aria-invalid 에러 시 자동
 */
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨" },
    placeholder: { control: "text", description: "플레이스홀더" },
    hint: { control: "text", description: "도움말" },
    error: { control: "text", description: "에러 메시지" },
    invalid: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화" },
  },
  args: {
    label: "지역 선택",
    placeholder: "선택해 주세요",
    options: [
      { value: "seoul", label: "서울특별시" },
      { value: "busan", label: "부산광역시" },
      { value: "daegu", label: "대구광역시" },
      { value: "incheon", label: "인천광역시" },
      { value: "gwangju", label: "광주광역시" },
      { value: "daejeon", label: "대전광역시" },
      { value: "ulsan", label: "울산광역시" },
      { value: "sejong", label: "세종특별자치시" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/** 기본 */
export const Default: Story = {
  args: { hint: "거주 지역을 선택해 주세요" },
};

/** 에러 상태 */
export const Error: Story = {
  args: { invalid: true, error: "필수 항목입니다" },
};

/** 비활성화 */
export const Disabled: Story = {
  args: { disabled: true },
};

/** 폼 내 사용 예시 */
export const InForm: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <Select
        label="신청 유형"
        options={[
          { value: "new", label: "신규 신청" },
          { value: "change", label: "변경 신청" },
          { value: "cancel", label: "취소 신청" },
        ]}
        hint="신청하실 유형을 선택해 주세요"
      />
      <Select
        label="처리 기관"
        options={[
          { value: "mois", label: "행정안전부" },
          { value: "moef", label: "기획재정부" },
          { value: "moe", label: "교육부" },
        ]}
      />
    </div>
  ),
};
