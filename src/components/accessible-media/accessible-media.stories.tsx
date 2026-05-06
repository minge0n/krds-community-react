import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccessibleMedia } from "./index";
import "./accessible-media.css";

/**
 * ## 접근성 미디어 (Accessible Media)
 *
 * 시각 또는 청각 장애가 있는 사용자도 미디어 콘텐츠를 이용할 수 있도록
 * 자막, 대체 텍스트 등을 제공하는 미디어 플레이어 컴포넌트입니다.
 *
 * ### 사용 규칙
 * - 모든 비디오에는 자막(caption) 파일을 제공해야 합니다
 * - `title` 속성으로 미디어의 내용을 설명하는 접근성 라벨을 반드시 제공합니다
 * - 오디오 콘텐츠에는 텍스트 대본을 함께 제공하는 것을 권장합니다
 *
 * ### 접근성
 * - `aria-label`로 미디어 제목이 자동 적용됩니다
 * - 자막 트랙(`<track>`)이 기본 활성화됩니다
 * - 브라우저 미지원 시 대체 텍스트가 표시됩니다
 */
const meta: Meta<typeof AccessibleMedia> = {
  title: "Components/AccessibleMedia",
  component: AccessibleMedia,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "미디어 소스 URL",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: "select",
      options: ["video", "audio"],
      description: "미디어 유형",
      table: {
        defaultValue: { summary: "video" },
        type: { summary: "video | audio" },
      },
    },
    captionSrc: {
      control: "text",
      description: "자막/캡션 파일 URL",
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      control: "text",
      description: "접근성 제목 (aria-label)",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video",
    title: "샘플 비디오",
  },
};

export default meta;
type Story = StoryObj<typeof AccessibleMedia>;

/** 기본 비디오 플레이어 */
export const Default: Story = {};

/** 자막이 포함된 비디오 */
export const WithCaption: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "자막이 포함된 교육 영상",
    captionSrc: "/captions/sample.vtt",
  },
};

/** 오디오 플레이어 */
export const AudioPlayer: Story = {
  args: {
    src: "https://www.w3schools.com/html/horse.mp3",
    type: "audio",
    title: "샘플 오디오 파일",
  },
};

/** 다양한 미디어 유형 비교 */
export const MediaTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px" }}>비디오</h3>
        <AccessibleMedia
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video"
          title="비디오 예시"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px" }}>오디오</h3>
        <AccessibleMedia
          src="https://www.w3schools.com/html/horse.mp3"
          type="audio"
          title="오디오 예시"
        />
      </div>
    </div>
  ),
};
