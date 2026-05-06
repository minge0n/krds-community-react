import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./index";
import "./carousel.css";

/**
 * ## 캐러셀 (Carousel)
 *
 * 여러 콘텐츠를 슬라이드 형태로 순환하며 보여주는 컴포넌트입니다.
 * 배너, 이미지 갤러리, 공지사항 등을 표시할 때 사용합니다.
 *
 * ### 사용 규칙
 * - 자동 재생은 사용자가 제어할 수 있어야 합니다
 * - 슬라이드 수는 2~7개를 권장합니다
 * - 중요한 정보는 캐러셀이 아닌 고정 영역에 배치합니다
 * - 모바일에서는 스와이프 제스처를 지원합니다
 *
 * ### 접근성
 * - `role="region"`, `aria-roledescription="carousel"` 적용
 * - 각 슬라이드에 `aria-roledescription="slide"` 적용
 * - 이전/다음 버튼에 `aria-label` 제공
 * - 인디케이터 도트에 `role="tablist"` 적용
 */
const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoPlay: {
      control: "boolean",
      description: "자동 재생 여부",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    interval: {
      control: "number",
      description: "자동 재생 간격 (ms)",
      table: {
        defaultValue: { summary: "5000" },
        type: { summary: "number" },
      },
    },
  },
  args: {
    autoPlay: false,
    interval: 5000,
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const slideStyle = (bg: string): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  backgroundColor: bg,
  color: "#fff",
  fontSize: "18px",
  fontWeight: 600,
  borderRadius: "8px",
});

/** 기본 캐러셀 */
export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      <div style={slideStyle("#1a56db")}>첫 번째 슬라이드</div>
      <div style={slideStyle("#047857")}>두 번째 슬라이드</div>
      <div style={slideStyle("#7c3aed")}>세 번째 슬라이드</div>
    </Carousel>
  ),
};

/** 자동 재생 */
export const AutoPlay: Story = {
  render: () => (
    <Carousel autoPlay interval={3000}>
      <div style={slideStyle("#1a56db")}>공지사항 1: 시스템 점검 안내</div>
      <div style={slideStyle("#047857")}>공지사항 2: 신규 서비스 오픈</div>
      <div style={slideStyle("#7c3aed")}>공지사항 3: 이벤트 안내</div>
    </Carousel>
  ),
};

/** 배너 형태 */
export const BannerStyle: Story = {
  render: () => (
    <Carousel>
      <div style={{ ...slideStyle("#0f172a"), height: "280px" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>대한민국 정부</p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>디지털 정부혁신 추진계획</p>
        </div>
      </div>
      <div style={{ ...slideStyle("#1e3a5f"), height: "280px" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>행정안전부</p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>전자정부 서비스 안내</p>
        </div>
      </div>
      <div style={{ ...slideStyle("#2d4a3e"), height: "280px" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>국민참여</p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>국민제안 접수 안내</p>
        </div>
      </div>
    </Carousel>
  ),
};

/** 많은 슬라이드 */
export const ManySlides: Story = {
  render: () => (
    <Carousel>
      <div style={slideStyle("#dc2626")}>슬라이드 1</div>
      <div style={slideStyle("#ea580c")}>슬라이드 2</div>
      <div style={slideStyle("#ca8a04")}>슬라이드 3</div>
      <div style={slideStyle("#16a34a")}>슬라이드 4</div>
      <div style={slideStyle("#2563eb")}>슬라이드 5</div>
    </Carousel>
  ),
};
