import type { Meta, StoryObj } from "@storybook/react-vite";
import { LanguageSwitcher } from "./index";
import "./language-switcher.css";

/**
 * ## 언어 전환 (Language Switcher)
 *
 * 사이트의 표시 언어를 변경할 수 있는 선택 컴포넌트입니다.
 * 다국어를 지원하는 정부/공공 사이트에서 사용합니다.
 *
 * ### 사용 규칙
 * - 헤더 우측 상단에 배치합니다
 * - 현재 선택된 언어를 항상 표시합니다
 * - 지원하는 모든 언어를 목록으로 제공합니다
 * - 언어 변경 시 페이지 전체가 해당 언어로 전환됩니다
 *
 * ### 접근성
 * - 트리거 버튼에 `aria-expanded`, `aria-haspopup="listbox"` 적용
 * - 목록에 `role="listbox"`, 각 항목에 `role="option"` 적용
 * - 선택된 항목에 `aria-selected="true"` 적용
 * - 키보드 Enter/Space로 선택 가능
 */
const meta: Meta<typeof LanguageSwitcher> = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  tags: ["autodocs"],
  argTypes: {
    languages: {
      control: "object",
      description: "지원 언어 목록",
      table: {
        type: { summary: "LanguageOption[]" },
      },
    },
    value: {
      control: "text",
      description: "현재 선택된 언어 코드",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      action: "changed",
      description: "언어 변경 핸들러",
      table: {
        type: { summary: "(code: string) => void" },
      },
    },
    label: {
      control: "text",
      description: "접근성 라벨",
      table: {
        defaultValue: { summary: "언어 선택" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    languages: [
      { code: "ko", label: "한국어" },
      { code: "en", label: "English" },
      { code: "zh", label: "中文" },
      { code: "ja", label: "日本語" },
    ],
    value: "ko",
    label: "언어 선택",
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

/** 기본 언어 전환 */
export const Default: Story = {};

/** 영어 선택 상태 */
export const EnglishSelected: Story = {
  args: {
    value: "en",
  },
};

/** 2개 언어만 지원 */
export const TwoLanguages: Story = {
  args: {
    languages: [
      { code: "ko", label: "한국어" },
      { code: "en", label: "English" },
    ],
    value: "ko",
  },
};

/** 헤더 내 배치 예시 */
export const InHeader: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 16px", borderBottom: "1px solid #e5e5e5" }}>
      <LanguageSwitcher
        languages={[
          { code: "ko", label: "한국어" },
          { code: "en", label: "English" },
          { code: "zh", label: "中文" },
        ]}
        value="ko"
      />
    </div>
  ),
};
