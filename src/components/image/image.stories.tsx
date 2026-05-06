import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./index";
import "./image.css";

/**
 * ## 이미지 (Image)
 *
 * 접근성을 준수하는 이미지 컴포넌트입니다.
 * 필수 대체 텍스트(alt)와 선택적 캡션(figcaption)을 제공합니다.
 *
 * ### 사용 규칙
 * - 모든 이미지에 의미 있는 대체 텍스트를 제공합니다
 * - 장식용 이미지는 `alt=""`로 설정합니다
 * - 캡션이 필요한 경우 `caption` 속성을 사용합니다
 * - 적절한 이미지 크기와 형식을 사용합니다
 *
 * ### 접근성
 * - `alt` 속성이 필수입니다
 * - 캡션 사용 시 `<figure>`와 `<figcaption>`으로 마크업됩니다
 * - 스크린리더가 대체 텍스트를 읽어줍니다
 */
const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "이미지 소스 URL",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      description: "대체 텍스트 (필수)",
      table: {
        type: { summary: "string" },
      },
    },
    caption: {
      control: "text",
      description: "이미지 캡션 (figcaption)",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: "number",
      description: "이미지 너비",
      table: {
        type: { summary: "number | string" },
      },
    },
    height: {
      control: "number",
      description: "이미지 높이",
      table: {
        type: { summary: "number | string" },
      },
    },
  },
  args: {
    src: "https://picsum.photos/400/250",
    alt: "샘플 이미지",
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

/** 기본 이미지 */
export const Default: Story = {};

/** 캡션 포함 */
export const WithCaption: Story = {
  args: {
    src: "https://picsum.photos/400/250",
    alt: "정부세종청사 전경",
    caption: "정부세종청사 전경 (2024년 촬영)",
  },
};

/** 크기 지정 */
export const CustomSize: Story = {
  args: {
    src: "https://picsum.photos/200/200",
    alt: "정사각형 이미지",
    width: 200,
    height: 200,
  },
};

/** 다양한 이미지 예시 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      <Image
        src="https://picsum.photos/200/150?random=1"
        alt="풍경 이미지 1"
        caption="봄 풍경"
      />
      <Image
        src="https://picsum.photos/200/150?random=2"
        alt="풍경 이미지 2"
        caption="여름 풍경"
      />
      <Image
        src="https://picsum.photos/200/150?random=3"
        alt="풍경 이미지 3"
        caption="가을 풍경"
      />
    </div>
  ),
};

/** 장식용 이미지 (빈 alt) */
export const Decorative: Story = {
  args: {
    src: "https://picsum.photos/400/80",
    alt: "",
  },
};
