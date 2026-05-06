import type { Meta, StoryObj } from "@storybook/react-vite";
import { TTS } from "./index";
import "./tts.css";

/**
 * ## 텍스트 음성 변환 (TTS)
 *
 * 텍스트를 음성으로 읽어주는 버튼 컴포넌트입니다.
 * 시각 장애인이나 읽기 어려운 상황에서 콘텐츠를 음성으로 제공합니다.
 *
 * ### 사용 규칙
 * - 긴 텍스트 콘텐츠 옆에 배치합니다
 * - 재생 중에는 일시정지/중지 기능을 제공합니다
 * - 음성 속도를 조절할 수 있습니다
 * - 브라우저 Web Speech API를 사용합니다
 *
 * ### 접근성
 * - `aria-label`로 버튼 기능을 설명합니다
 * - `aria-pressed`로 재생 상태를 전달합니다
 * - 재생 중일 때 라벨이 "읽기 중지"로 변경됩니다
 * - 아이콘에 `aria-hidden="true"` 적용
 */
const meta: Meta<typeof TTS> = {
  title: "Components/TTS",
  component: TTS,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "읽어줄 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: "text",
      description: "버튼 라벨",
      table: {
        defaultValue: { summary: "텍스트 읽기" },
        type: { summary: "string" },
      },
    },
    rate: {
      control: { type: "range", min: 0.5, max: 2, step: 0.1 },
      description: "음성 속도 (0.5~2)",
      table: {
        defaultValue: { summary: "1" },
        type: { summary: "number" },
      },
    },
    lang: {
      control: "text",
      description: "음성 언어",
      table: {
        defaultValue: { summary: "ko-KR" },
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    text: "대한민국 전자정부 서비스에 오신 것을 환영합니다.",
    label: "텍스트 읽기",
    rate: 1,
    lang: "ko-KR",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TTS>;

/** 기본 TTS 버튼 */
export const Default: Story = {};

/** 긴 텍스트 읽기 */
export const LongText: Story = {
  args: {
    text: "본 서비스는 국민 여러분의 편의를 위해 제공되는 전자정부 서비스입니다. 민원 신청, 증명서 발급, 정보 조회 등 다양한 서비스를 온라인으로 이용하실 수 있습니다. 이용 중 불편사항이 있으시면 고객센터로 문의해 주세요.",
    label: "안내문 읽기",
  },
};

/** 느린 속도 */
export const SlowRate: Story = {
  args: {
    text: "천천히 읽어드립니다. 이 텍스트는 느린 속도로 재생됩니다.",
    label: "느리게 읽기",
    rate: 0.7,
  },
};

/** 빠른 속도 */
export const FastRate: Story = {
  args: {
    text: "빠르게 읽어드립니다. 이 텍스트는 빠른 속도로 재생됩니다.",
    label: "빠르게 읽기",
    rate: 1.5,
  },
};

/** 콘텐츠와 함께 사용 */
export const WithContent: Story = {
  render: () => {
    const content = "행정안전부는 안전하고 편리한 대한민국을 만들기 위해 노력하고 있습니다. 재난 안전, 지방자치, 전자정부 등 국민 생활과 밀접한 행정 서비스를 제공합니다.";
    return (
      <div style={{ maxWidth: "500px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "16px", margin: 0 }}>기관 소개</h3>
          <TTS text={content} label="소개글 읽기" />
        </div>
        <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#333" }}>{content}</p>
      </div>
    );
  },
};

/** 비활성화 */
export const Disabled: Story = {
  args: {
    text: "이 텍스트는 읽을 수 없습니다.",
    disabled: true,
  },
};
