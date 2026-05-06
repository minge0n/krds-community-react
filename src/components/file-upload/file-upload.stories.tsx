import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./index";
import "./file-upload.css";

const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "파일 첨부",
  },
};

export const WithHint: Story = {
  args: {
    label: "증빙 서류",
    hint: "PDF, JPG, PNG 파일만 업로드 가능합니다. (최대 10MB)",
    accept: ".pdf,.jpg,.png",
  },
};

export const Multiple: Story = {
  args: {
    label: "첨부 파일",
    multiple: true,
    hint: "여러 파일을 선택할 수 있습니다.",
  },
};

export const Invalid: Story = {
  args: {
    label: "필수 서류",
    invalid: true,
    error: "파일을 첨부해 주세요.",
  },
};

export const Disabled: Story = {
  args: {
    label: "파일 첨부",
    disabled: true,
  },
};
