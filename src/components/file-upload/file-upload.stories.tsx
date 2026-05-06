import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./index";
import "./file-upload.css";

/**
 * ## 파일 업로드 (File Upload)
 *
 * 사용자가 파일을 선택하거나 드래그 앤 드롭으로 업로드할 수 있는 컴포넌트입니다.
 * 단일/다중 파일 업로드를 지원하며, 파일 크기 제한 및 형식 제한이 가능합니다.
 *
 * ### 사용 규칙
 * - 허용되는 파일 형식과 크기를 명확히 안내합니다
 * - 업로드된 파일 목록을 표시하고 개별 삭제가 가능해야 합니다
 * - 드래그 앤 드롭 영역은 충분한 크기로 제공합니다
 * - 에러 발생 시 구체적인 사유를 안내합니다
 *
 * ### 접근성
 * - 파일 선택 버튼에 `aria-label`이 적용됩니다
 * - 업로드된 파일 목록에 `aria-label="업로드된 파일 목록"`이 적용됩니다
 * - 에러 메시지에 `role="alert"`가 적용됩니다
 * - 각 파일 삭제 버튼에 파일명이 포함된 `aria-label`이 제공됩니다
 */
const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "라벨 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    hint: {
      control: "text",
      description: "힌트 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    error: {
      control: "text",
      description: "에러 메시지",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    invalid: {
      control: "boolean",
      description: "에러 상태",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
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
    accept: {
      control: "text",
      description: "허용 파일 형식 (예: .pdf,.jpg)",
      table: {
        type: { summary: "string" },
      },
    },
    multiple: {
      control: "boolean",
      description: "다중 파일 허용",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    maxSize: {
      control: "number",
      description: "최대 파일 크기 (bytes)",
      table: {
        type: { summary: "number" },
      },
    },
    dragText: {
      control: "text",
      description: "드래그 영역 안내 텍스트",
      table: {
        defaultValue: { summary: "파일을 여기에 끌어다 놓으세요" },
        type: { summary: "string" },
      },
    },
    buttonText: {
      control: "text",
      description: "파일 선택 버튼 텍스트",
      table: {
        defaultValue: { summary: "파일 선택" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    label: "첨부파일",
    hint: "PDF, JPG, PNG 파일만 업로드 가능합니다. (최대 10MB)",
    invalid: false,
    disabled: false,
    multiple: false,
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

/** 기본 파일 업로드 */
export const Default: Story = {};

/** 다중 파일 업로드 */
export const Multiple: Story = {
  args: {
    label: "증빙서류",
    hint: "여러 파일을 한 번에 업로드할 수 있습니다.",
    multiple: true,
  },
};

/** 에러 상태 */
export const Invalid: Story = {
  args: {
    label: "첨부파일",
    invalid: true,
    error: "파일 크기가 10MB를 초과합니다.",
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    label: "첨부파일",
    hint: "현재 파일 업로드가 불가합니다.",
    disabled: true,
  },
};

/** 파일 형식 제한 */
export const AcceptTypes: Story = {
  args: {
    label: "이미지 업로드",
    accept: ".jpg,.jpeg,.png,.gif",
    hint: "이미지 파일만 업로드 가능합니다. (JPG, PNG, GIF)",
  },
};
